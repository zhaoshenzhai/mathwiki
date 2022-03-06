#!/bin/bash

dirName=`date +"%Y-%m-%d_%H%M%S"`

cd ~/MathWiki/Images
mkdir $dirName
cd $dirName
cp $HOME/MathWiki/.image/imageTemplate.tex $PWD/image.tex
