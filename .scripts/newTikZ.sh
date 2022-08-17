#!/bin/bash

dirName=$(date +"%Y-%m-%d_%H%M%S")

cd $MATHWIKI_DIR/Images
mkdir $dirName
cd $dirName
cp $MATHWIKI_DIR/imageTemplate.tex $PWD/image.tex
