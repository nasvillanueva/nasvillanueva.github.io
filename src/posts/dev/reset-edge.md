---
title: reset_edge.ps1 — Prevent Karma tests from breaking Microsoft Edge
date: '2019-03-15T14:56:50.244Z'
tags:
    - Scripts
    - Powershell
    - DevOps
---

Like almost everybody else, we _need to_ test our app in Microsoft Edge, and since we are using <a href="https://angularjs.org/" target="_blank">Angular.js</a>
it seems that <a href="https://karma-runner.github.io/" target="_blank">Karma</a> + <a href="https://www.npmjs.com/package/karma-edge-launcher" target="_blank">karma-edge-launcher</a> are the best tools to
do that. The problem is, karma-edge-launcher's latest version, 0.8.2 at the time of writing, doesn't <em>gracefully</em> shuts down Edge which makes it restore
all tabs upon next launch. That's why consecutive CI builds floods Edge with tabs until it stops launching and the only way to fix it is to restart the build server.

<!--excerpt-->

Before heading to the solution, I'd like to list down some Github Tickets related to this issue:

* [edge-launcher#23](https://github.com/MicrosoftEdge/edge-launcher/issues/23): Edge opens with wrong address
* [karma-edge-launcher#1](https://github.com/karma-runner/karma-edge-launcher/issues/1): Error launching Edge on Windows 10 in CI environment (karma, jenkins)
* [karma-edge-launcher#4](https://github.com/karma-runner/karma-edge-launcher/issues/4): Edge does not close its tabs
* [karma-edge-launcher#33](https://github.com/nickmccurdy/karma-edge-launcher/pull/33): remove /f flag from kill command and call it twice so edge exits cleanly
* and more...

There's a lot of tickets being related to each other that's related to this issue, and even though some of them are already close, no one seems to be able to fix it
or they just gave up.

## Initial Solution
_**Spoiler Alert**: It didn't fix the issue._

I asked a coworker who is knowledgeable about Windows and he gave me this powershell script that sends `Alt+F4` to Edge:

```powershell{numberLines: true}
$wshell = New-Object -ComObject wscript.shell;
$wshell.AppActivate('Microsoft Edge') | out-null;
Sleep 1;
$wshell.SendKeys("%{f4}");
```

This script works **IF** Edge still runs when it is executed. Unfortunately, the problem was Edge can't launch anymore and karma-edge-launcher makes sure that
it is _ungracefully_ killed.

## Actual Solution

While trying too look for a solution, I saw articles about Edge being broken and how to fix it by resetting it to a fresh state.
So I thought _"What if we can use the same method before each test to clear all restored tabs"_, then I've come up with this powershell script
based on what I've read.

```powershell{numberLines: true}
$MicrosoftEdgePath = Join-Path $ENV:APPDATA "..\Local\Packages\Microsoft.MicrosoftEdge_8wekyb3d8bbwe" -Resolve -ErrorAction SilentlyContinue
if ($MicrosoftEdgePath) {
    # Take Ownership of Edge's data folder
    takeown /F $MicrosoftEdgePath\* /R /A
    icacls $MicrosoftEdgePath\*.* /T /grant administrators:F
    # Delete Edge's data folder starting from the inner most file
    Get-ChildItem -Path $MicrosoftEdgePath -Force -Recurse |
            Sort-Object -Property FullName -Descending |
            Remove-Item -Recurse -Force
    rm $MicrosoftEdgePath
}
# Re-setup Edge
Get-AppXPackage -AllUsers -Name Microsoft.MicrosoftEdge |
        Foreach {
            Add-AppxPackage -DisableDevelopmentMode -Register "$( $_.InstallLocation )\AppXManifest.xml" -Verbose
        }
```

Now, we don't need to restart the server manually every time Karma breaks Edge. 😎

<br>

References:
* https://stackoverflow.com/a/34636812
* https://www.groovypost.com/howto/reset-microsoft-edge-default-settings/
* https://www.apeswithcomputers.com/article/take-ownership-with-the-command-prompt-powershell
