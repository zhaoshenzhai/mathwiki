#!/bin/bash

cd $MATHWIKI_DIR

if [[ ! -z $(grep 'obsidian' .obsidian/appearance.json) ]]; then
    sed -i 's/248, 248, 255/0, 0, 0/g' .obsidian/plugins/obsidian-admonition/data.json
    sed -i 's/obsidian/moonstone/g' .obsidian/appearance.json
else
    sed -i 's/0, 0, 0/248, 248, 255/g' .obsidian/plugins/obsidian-admonition/data.json
    sed -i 's/moonstone/obsidian/g' .obsidian/appearance.json
fi
