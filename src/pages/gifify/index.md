---
title: gifify.sh — Convert Videos to GIFs
date: '2018-10-15T06:34:39Z'
qiitaUrl: ''
---

At work, we use a service called Assembla, a service like Github. Sometimes, to make our tickets more understandable, we include screenshots or screencasts. But the problem is, on Assembla, they don't have an embedded video player
for the screencast we upload, even when it's in a web compatible format. So I created this script.
<!--excerpt-->

# The Script (not the band)
`gifify.sh`

```bash{numberLines: true}
#!/usr/bin/env bash

TEMP_DIR=$(mktemp -d $TMPDIR/gifify.$RANDOM)

ffmpeg -i $1 -r 5 "$TEMP_DIR/frames-%03d.jpg"

FILENAME=$(basename $1)

convert -delay 20 -loop 0 $TEMP_DIR/frames-*.jpg "${FILENAME%%.*}.gif"

rm -rf $TEMP_DIR
```

Before being able to run this script, you'd have to have these tools installed:
- [ffmpeg][] - for slicing your video into images; and
- [ImageMagick][] - for combining your slices of images into a GIF.


### Let's dissect `line 5`

```bash{numberLines: true}
ffmpeg                      # Call ffmpeg.
    -i $1                   # Pass script first argumen as input file.
    -r 5                    # Set framerate to 5.
"$TEMP_DIR/frames-%03d.jpg" # Tell ffmpeg where to put the slices,
                            # with a filename template.
```

### And `line 9`

```bash{numberLines: true}
convert                     # Call ImageMagick convert.
    -delay 20               # Delay before the next image shows
    -loop 0                 # Set loop to infinite
    $TEMP_DIR/frames-*.jpg  # Tell ImageMagick where the slices are.
    "${FILENAME%%.*}.gif"   # Tell ImageMagick the output filename,
                            # replacing the original extension to .gif
```


<br>

> I am, by no means, an advanced user of ffmpeg nor ImageMagick, that's why I only used minimal options for each tool.

# Running the script

`gifify.sh ./sample.mov`

This will produce a GIF file with the same filename as the input.

# Demo


Here's a screencast I recorded using Quicktime. `sample.mov`

<video width="100%" height="auto" controls>
    <source src="./sample.mov">
    Your browser does not support the video tag.
</video>


<br>

Here's a _gifified_ file. `sample.gif`

![sample.gif][]


<br>


Now, it's easier to embed a screencastª, albeit fake, on Assembla (or even Github, GitLab, etc.)


[ImageMagick]: https://www.imagemagick.org
[ffmpeg]: https://www.ffmpeg.org
[sample.gif]: ./sample.gif
[sample.mov]: ./sample.mov
