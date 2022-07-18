#!/bin/bash
imageDir=$(find ~/Dropbox/MathWiki/Images/ -maxdepth 1 -type d | sort -r | sed "s:.*/::" | head -n 1)

echo $imageDir
