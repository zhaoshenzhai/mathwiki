# :pencil: MathWiki

An [Obsidian.md](https://obsidian.md) vault for my math course notes in university.

These notes are meant to be a distilled version of the math I've learnt where ideas, formulations, and important results are broken down into their atomic components of definitions, propositions, and theorems for clarity, precision, and accessibility.

## :bookmark_tabs: Contents
* [Note Types and Templates](https://github.com/zhaoshenzhai/MathWiki#pencil2-note-types-and-templates); the basic templates and outgoing links for each type of note.
* [Configurations and Scripts](https://github.com/zhaoshenzhai/MathWiki#gear-configurations-and-scripts); snippets, plugins, and my bash scripts.
* [MathLinks](https://github.com/zhaoshenzhai/MathWiki#symbols-mathlinks); my plugin that renders [MathJax](https://www.mathjax.org/) in links.
* [TikZ Images](https://github.com/zhaoshenzhai/MathWiki#art-tikz-images); my workflow involving TikZ images.
* [Sample Pages](https://github.com/zhaoshenzhai/MathWiki#page_with_curl-sample-pages); some sample screenshots.

## :telescope: Graph View

![Graph view](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/graph_view.png)

## :pencil2: Note Types and Templates

Each note is currently one of five types (four atomic notes and one [map of content](https://forum.obsidian.md/t/on-the-process-of-making-mocs/1060/11)):

* **Definition**, either of an `object` or of a `notion`, which links to:
    * Types: _Objects/notions of type `object`/`notion` with additional restrictions._
    * Examples: _Specific examples or counterexamples of `object`/`notion` (but not of any of its `types`)._
    * Constructions: _Objects/notions derived from `object`/`notion`._
    * Generalizations: _Abstractions of `object`/`notion`._<br/><br/>
    * Properties: _Statements regarding `object` or necessary conditions of `notion`._
    * Sufficiencies: _Proofs that other objects are of type `object` or sufficient conditions of `notion`_
    * Equivalences: _Equivalent definitions for `object` or biconditionals between notions and `notion`._
    * Justifications: _Proofs of well-definition of `object`/`notion`._

* **Proposition** and **Theorem** (differentiated by 'importance'), including both `statement` and `proof` regarding `object`/`notion`, which links to:
    * Proved by: _Statements in which `proof` depends crucially on._
    * References: _Notes in which the proofs of `statement` (or corollaries thereof) are delegated to._
    * Justifications: _Proofs of implicit assumptions of `object`/`notion` in `statement`._<br/><br/>
    * Specializations: _Reformulations/proofs of instances of `statement`._
    * Generalizations: _Statements and proofs of abstractions of `statement`._
* **Axiom**, written as a formal `statement` within a certain framework, which links to:
    * Equivalences: _Equivalent statements - including its proof._
    * Constructions: _Objects/notions that crucially depend on `statement`._
* **MOC**, summarizing my understanding of a mathematical `theory`, which links to:
    * Context: _Assumed background formalism(s) of `theory`._
    * Excursions: _Subtheories of `theory` or its intersections with other theories._
    * Abstractions: _Abstractions of `theory` or its unifications with other theories._

These templates are automatically [inserted][templatesInsert] whenever a note is created. After the links, the main content is written with remarks where appropriate.

## :gear: Configurations and Scripts

I do not directly write my notes in Obsidian since I have my own Neovim setup; see [dotfiles/nvim](https://github.com/zhaoshenzhai/dotfiles/tree/master/config/nvim). Therefore, most of my Obsidian customization is on its appearance (via [snippets](.obsidian/snippets/)) and [navigation hotkeys](.obsidian/hotkeys.json).

Theme: [Minimal](https://github.com/kepano/obsidian-minimal).

Plugins:
* [Extended MathJax](https://github.com/xldenis/obsidian-latex): Add macros in [`preamble.sty`](preamble.sty).
* [Style Settings](https://github.com/mgmeyers/obsidian-style-settings): Precise colors.
* [Jump to Link](https://github.com/mrjackphil/obsidian-jump-to-link): Follow links.
* [Admonition](https://github.com/valentine195/obsidian-admonition): A replacement for the `mdframed` package in LaTeX.
* [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks): Render MathJax in links; see [below](https://github.com/zhaoshenzhai/MathWiki#symbols-mathlinks).
* [Hider](https://github.com/kepano/obsidian-hider): Hide title bars, scroll bars, YAML, etc.
* [BRAT](https://github.com/TfTHacker/obsidian42-brat): Beta Reviewers Auto-update Tester, for:
    * [Vim Reading View Navigation](https://github.com/kometenstaub/obsidian-vim-reading-view-navigation): Vim-like reading view.

I wrote some bash scripts to (try) maintain the consistency of my notes; [main.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/main.sh) acts as a hub for me to run them.
* Images are handled by [newTikZ.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/newTikZ.sh), [getCurrentImage.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/getCurrentImage.sh), and [updateImages.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/updateImages.sh); see my workflow [here](https://github.com/zhaoshenzhai/MathWiki#art-tikz-images).
* Global search and replace, including the ability of excluding additional patterns, is handled by [searchReplace.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/searchReplace.sh).
* Operations on all lines containing patterns, including appending text, inserting a line before/after, and deleting lines, are handled by [massEditing.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/massEditing.sh).
* Basic stats of the vault (and updating them below) is handled by [stats.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/stats.sh).
* Displaying all links that have yet to be created and all notes that have those links, are handled by [ghost.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/ghost.sh).
* Toggling between light and dark mode is handled by [toggleDark.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/toggleDark.sh).
* Resetting the modification time of each note to its creation time is handled by [resetModifyTime.sh](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/resetModifyTime.sh).

Some stats: 831 notes, 2113 links, 62 images ([updated](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/stats.sh) every commit).

## :symbols: MathLinks

As far as I know, the standard wiki-style links of the form `[[fileName]]` used in Obsidian does not support MathJax. Instead, one should use markdown-style links which are of the form `[displayedText](fileName.md)`; here, `displayedText` can contain MathJax. However, `displayedText` remains unchanged when link is updated, so, if one wishes to have links with math, one needs to update them manually. This can get out of hand really fast.

I wrote a plugin, [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks), that aims to solve this issue by assigning `fileName.md` a `mathLink`, i.e. some specified text to be displayed and rendered when a note links to `fileName.md`. It can be done by inserting `mathLink: yourMathLink` to the YAML frontmatter of `fileName.md` like so:

```
---
mathLink: yourMathLink
---

Content starts here.
```

That's it! All links of the form `[[fileName]]` or `[fileName](fileName.md)` will now be displayed as the rendered MathJax of `yourMathLink`. _**No changes are made to your notes**_, and updates to `yourMathLink` will be reflected once the note with the link is reopened.

### Templates
Oftentimes, the `mathLink` of `fileName.md` involves replacing some text with its math counterpart. For instance, all of `Invertible iff bijective.md`, `Linearly dependent iff exists span-redundant element.md`, and `LUB property iff GLB property.md` will have mathLinks of the form '... $\Leftrightarrow$ ...'.

Instead of setting them manually, simply use `mathLink: auto`. This will generate its `mathLink` via a template that replaces `iff` with $\Leftrightarrow$. A _template_ consists of a string to be matched (`iff`), its replacement $(\Leftrightarrow)$, and some options (global match, case sensitive, and match whole words). They are created and maintained in the MathLinks settings window.

## :art: TikZ Images

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

## :page_with_curl: Sample Pages

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/linear_algebra.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/linear_map.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/function.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/abelianization.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/upper_limit_strictly_finer_than_k.png)

![](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/fundamental_theorem_of_equivalence_relations.png)

[templatesInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/config/nvim/UltiSnips/markdown.snippets#L111
[tikzInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/config/nvim/config/MathWiki.vim#L1
[pdfLaTeXExecute]: https://github.com/zhaoshenzhai/dotfiles/blob/master/config/nvim/config/MathWiki.vim#L2
