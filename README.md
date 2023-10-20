# MathWiki

An [Obsidian.md](https://obsidian.md) vault for my math course notes in university.

These notes are meant to be a distilled version of the math I've learnt where ideas, formulations, and important results are broken down into their atomic components of definitions, propositions, and theorems for clarity, precision, and accessibility.

> A statically-generated site containing this vault is currently work in progress.

## Contents
* [Note Types and Templates](https://github.com/zhaoshenzhai/MathWiki#pencil2-note-types-and-templates); the basic templates and outgoing links for each type of note.
* [Configurations and Scripts](https://github.com/zhaoshenzhai/MathWiki#gear-configurations-and-scripts); snippets, plugins, and my bash scripts.
* [MathLinks](https://github.com/zhaoshenzhai/MathWiki#symbols-mathlinks); my plugin that renders [MathJax](https://www.mathjax.org/) in links.
* [TikZ Images](https://github.com/zhaoshenzhai/MathWiki#art-tikz-images); my workflow involving TikZ images.
* [Sample Pages](https://github.com/zhaoshenzhai/MathWiki#page_with_curl-sample-pages); some sample screenshots.

## Graph View

![Graph view](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/graph_view.png)

## Note Types and Templates

Each note is currently one of four types:

* **Definition**/**Example**, either of an `object` or of a `notion`, which links to:
    * Types: _Objects/notions of type `object`/`notion` with additional restrictions._
    * Examples: _Specific examples or counterexamples of `object`/`notion` (but not of any of its `types`)._
    * Constructions: _Objects/notions derived from `object`/`notion`._
    * Generalizations: _Abstractions of `object`/`notion`._<br/><br/>
    * Properties: _Statements regarding `object` or necessary conditions of `notion`._
    * Sufficiencies: _Proofs that other objects are of type `object` or sufficient conditions of `notion`_
    * Equivalences: _Equivalent definitions for `object` or biconditionals between notions and `notion`._
    * Justifications: _Proofs of well-definition of `object`/`notion`._

* **Proposition**/**Theorem** (differentiated by 'importance'), including both `statement` and `proof` regarding `object`/`notion`, which links to:
    * Proved by: _Statements in which `proof` depends crucially on._
    * References: _Notes in which the proofs of `statement` (or corollaries thereof) are delegated to._
    * Justifications: _Proofs of implicit assumptions of `object`/`notion` in `statement`._<br/><br/>
    * Specializations: _Reformulations/proofs of instances of `statement`._
    * Generalizations: _Statements and proofs of abstractions of `statement`._

These templates are automatically [inserted][templatesInsert] whenever a note is created. After the links, the main content is written with remarks where appropriate.

## Configurations and Scripts

I do not directly write my notes in Obsidian since I have my own Neovim setup; see [dotfiles/nvim](https://github.com/zhaoshenzhai/dotfiles/tree/master/config/nvim). Therefore, most of my Obsidian customization is on its appearance (via [snippets](.obsidian/snippets/)) and [navigation hotkeys](.obsidian/hotkeys.json).

Theme: [Minimal](https://github.com/kepano/obsidian-minimal).

Plugins:
* [Extended MathJax](https://github.com/xldenis/obsidian-latex): Add macros in [`preamble.sty`](preamble.sty).
* [Vim Navigation](https://github.com/kometenstaub/obsidian-vim-reading-view-navigation): Vim-like reading view navigation.
* [Style Settings](https://github.com/mgmeyers/obsidian-style-settings): Precise colors.
* [Living Graph](https://github.com/geoffreysflaminglasersword/obsidian-living-graph): Graph animations; for fun.
* [Admonition](https://github.com/valentine195/obsidian-admonition): A replacement for the `mdframed` package in LaTeX.
* [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks): Render MathJax in links; see [below](https://github.com/zhaoshenzhai/MathWiki#symbols-mathlinks).
* [Hider](https://github.com/kepano/obsidian-hider): Hide title bars, scroll bars, YAML, etc.

I wrote some bash scripts to (try) maintain the consistency of my notes; [main.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/main.sh) acts as a hub for me to run them.
* Images are handled by [newTikZ.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/newTikZ.sh), [getCurrentImage.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/getCurrentImage.sh), and [updateImages.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/updateImages.sh); see my workflow [here](https://github.com/zhaoshenzhai/MathWiki#art-tikz-images).
* Global search and replace, including the ability of excluding additional patterns, is handled by [searchReplace.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/searchReplace.sh).
* Operations on all lines containing patterns, including appending text, inserting a line before/after, and deleting lines, are handled by [massEditing.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/massEditing.sh).
* Basic stats of the vault (and updating them below) is handled by [stats.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/stats.sh).
* Displaying all links that have yet to be created and all notes that have those links, are handled by [ghost.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/ghost.sh).
* Toggling between light and dark mode is handled by [toggleDark.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/toggleDark.sh).
* Resetting the modification time of each note to its creation time is handled by [resetModifyTime.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/resetModifyTime.sh).

Some stats: 380 notes, 969 links, 40 images ([updated](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/stats.sh) every commit).

## MathLinks

An [Obsidian.md](https://obsidian.md) plugin to render and manage [MathJax](https://www.mathjax.org/) in your links.

Associate a `mathLink` to your note, containing arbitrary MathJax, and have it displayed in all links to the note.
* Works in both reading and live-preview modes, as well as canvases.
* Add custom [templates](https://github.com/zhaoshenzhai/obsidian-mathlinks/tree/master#templates) for `mathLinks`.
* Render MathJax in aliases for both Wikilinks and Markdown Links.
* Compatible with [Extended MathJax](https://github.com/xldenis/obsidian-latex) and [Dataview](https://github.com/blacksmithgu/obsidian-dataview).

![](https://raw.githubusercontent.com/zhaoshenzhai/obsidian-mathlinks/master/.github/sample.png)

### Description and Usage

Assigning a `mathLink` in the YAML frontmatter of `note.md` as shown below will make all links of them form `[[note]]` and `[note](note.md)` display as the rendered MathJax of `yourMathLink`. No changes are made to your notes, and updates to `yourMathLink` will be reflected once the note with the link is reopened.

```
---
mathLink: yourMathLink
---

Content starts here.
```

This plugin also makes Wikilinks and Markdown Links compatible with MathJax, so links like `[[note|yourAlias]]` and `[yourAlias](note.md)` will be displayed as the rendered MathJax of `yourAlias`. A `mathLink` in `note`, if present, will be overridden by `yourAlias`.

### Links to Blocks/Headings
Additionally, Obsidian also supports links to blocks `[[note#^block-id]]` and headings like `[[note#section]]`. Any `MathJax` in `#section` will be rendered, and you can associate a `mathLink` to `^block-id` as well by adding a YAML frontmatter like so:

```
---
mathLink-blocks:
    block-id: yourMathLink
---
```

### Templates
Oftentimes, `mathLinks` of notes involve replacing some text with its math counterpart. For instance, you might have many notes whose title is of the form `... iff ...`.

Instead of setting the `mathLinks` of each note manually as `... $\Leftrightarrow$ ...`, simply use `mathLink: auto`. This will generate its `mathLink` via a template that replaces `iff` with `$\Leftrightarrow$`. A _template_ consists of a string to be matched (`iff`), its replacement (`$\Leftrightarrow$`), and some options (global match, case sensitive, and match whole words). They are created and maintained in the MathLinks settings window.

## TikZ Images

This is the main downside of using MathJax in Obsidian since it [sanitizes HTML](https://help.obsidian.md/Advanced+topics/HTML+sanitization) which ignores `<script>` tags and prevents one from using [this](https://github.com/kisonecat/tikzjax) tool.

My solution is to bind a key in Neovim which [inserts][tikzInsert]
```
![[Images/UNIQUE_IDENTIFIER/image.svg]]
```
in the current line and runs a [script](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/newTikZ.sh) that creates the corresponding `.tex` file from a [template](https://github.com/zhaoshenzhai/MathWiki/blob/master/imageTemplate.tex) where the TikZ code can be written. Once finished, another key can be pressed which [executes][pdfLaTeXExecute]
```bash
pdflatex -shell-escape image.tex && pdfcrop image.pdf image.pdf && pdf2svg image.pdf image.svg
```
All images are centered and have a `15px` top and bottom [margin](https://github.com/zhaoshenzhai/MathWiki/blob/master/.obsidian/snippets/imageMargins.css). This can be modified to only apply to those images in a certain class.

## Sample Pages

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/linear_algebra.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/linear_map.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/function.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/abelianization.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/upper_limit_strictly_finer_than_k.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/fundamental_theorem_of_equivalence_relations.png)

[templatesInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/config/nvim/UltiSnips/markdown.snippets#L121
[tikzInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/config/nvim/config/fileTypeDefaults.vim#L9
[pdfLaTeXExecute]: https://github.com/zhaoshenzhai/dotfiles/blob/master/config/nvim/config/fileTypeDefaults.vim#L19
