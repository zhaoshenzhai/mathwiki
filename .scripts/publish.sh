#!/bin/bash

echo ""
cd $MATHWIKI_DIR

# Generate allFiles.json
rm -f .site/static/allFiles.json
node .scripts/js/extractFM.js

# Hugo
rm -rf docs
cd .site
hugo -d ../docs
cd ..
