#!/bin/bash

dirName=`date +"%d-%m-%Y_%H%M"`

cd ~/MathWiki/Images
mkdir $dirName
cd $dirName
cp $HOME/MathWiki/.scripts/script_files/imageTemplate.tex $PWD/image.tex
