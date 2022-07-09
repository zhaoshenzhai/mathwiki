#!/bin/bash

dirName=`date +"%Y-%m-%d_%H%M%S"`

cd ~/Dropbox/MathWiki/Images
mkdir $dirName
cd $dirName
cp $HOME/Dropbox/MathWiki/imageTemplate.tex $PWD/image.tex
