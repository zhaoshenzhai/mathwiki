#!/bin/bash

dirName=`date +"%d-%m-%Y_%H%M%S"`

cd ~/MathWiki/Images
mkdir $dirName
cd $dirName
cp $HOME/MathWiki/.image/imageTemplate.tex $PWD/image.tex
