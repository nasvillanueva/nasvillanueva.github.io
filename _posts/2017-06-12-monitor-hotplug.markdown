---
layout: post
title: "Monitor Hotplug for Linux"
categories: ricing
tags: [monitor, hotplug, linux, manjaro, udev, nixers, ricing]
---

I finally managed to write a `udev` rule that executes my `xrandr` script
when plugging an external monitor for my work laptop. I've tried to write
this script so many times before, but failed to make it work. I'm not sure
if it's because my setup at the time supported it very well, or if I 
just wasn't motivated enough to make it work.

After listening to the [Nixers][nixers] [Podcast][nixers-podcasts], for
some unknown reason, I was motivated to write one that actually works.

<!--more-->

Here's my `/etc/udev/rules.d/99-monitor-hotplug.rules`:

{% highlight bash %}
KERNEL=="card0", SUBSYSTEM=="drm", ENV{DISPLAY}=":0", ENV{XAUTHORITY}="/home/username/.Xauthority", RUN+="/home/username/.bin/hotplug.sh"
{% endhighlight %}

and here's my `hotplug.sh`:

{% highlight bash %}
#!/bin/sh
export DISPLAY=:0
export XAUTHORITY=/home/jvillanueva/.Xauthority
MONITOR=$(xrandr | grep " connected" | wc -l)

if [[ $MONITOR -eq 1 ]]; then
    xrandr --output eDP1 --auto
else
    xrandr --output eDP1 --auto --output HDMI1 --right-of eDP1 --auto
fi

sleep 5 && sh /home/jvillanueva/.bin/wall-e &
{% endhighlight %}

After putting everything in place, I reloaded `udev` rules and services
via:

{% highlight bash %}
udevadm control --reload-rules
systemctl restart systemd-udevd
{% endhighlight %}

Then I tried connecting my external monitor and boom, `udev` executed `hotplug.sh`. 
Now, all of my monitors are automatically configured everytime I [un]plug my external 
monitor. My script also calls another script that [re]sets my wallpaper
using [`hsetroot`][hsetroot-git].

Here's my `wall-e` script:

{% highlight bash %}
#!/bin/sh

. /home/jvillanueva/.zshenv
WALL=$WALLPAPER_PATH
GRAY_TINT='#c7c7c7'
RED_TINT='#947575'
hsetroot -screens 3 -fill $WALL -tint $RED_TINT &
{% endhighlight %}

[nixers]: https://nixers.net
[nixers-podcasts]: https://podcast.nixers.net/feed
[hsetroot-git]: https://github.com/himdel/hsetroot
