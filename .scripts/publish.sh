#!/bin/bash

echo ""
cd $MATHWIKI_DIR
rm -rf docs
cd .site
hugo -d ../docs
cd ..
