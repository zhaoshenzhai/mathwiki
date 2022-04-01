# :pencil: MathWiki

## :information_source: About

An [Obsidian.md](https://obsidian.md) vault for my math course notes in university (integrated with my [dotfiles](https://github.com/zhaoshenzhai/dotfiles)).

These notes are meant to be a distilled version of the math I've learnt where ideas, formulations, and important results are broken down into their atomic components of definitions, propositions, and theorems for clarity, precision, and accessibility.

### File structures

Each note is currently one of four types:

* **Definition**, either of an `object` or of a `notion`, which links to:
    * Types: _Objects/notions of type `object`/`notion` with additional restrictions. (Definition)_
    * Examples: _Objects that are specific examples or counterexamples of `notion` (but not of any of its `types`) - including its proof, if necessary. (Definition/Proposition)_
    * Constructions: _Objects/notions derived from from `object`/`notion`. (Definition)_
    * Generalizations: _Abstractions of `object`/`notion`. (Definition)_<br/><br/>
    * Properties: _Statements regarding `object` or necessary conditions of `notion`. (Proposition/Theorem)_
    * Sufficiencies: _Proofs that other objects are of type `object` or sufficient conditions of `notion` (Proposition/Theorem)_
    * Equivalences: _Equivalent definitions for `object` or biconditionals between notions and `notion`. (Proposition/Theorem)_
    * Justifications: _Proofs of well-definition of `object`. (Proposition)_

* **Proposition** and **Theorem** (differentiated by 'importance'), including both `statement` and `proof` regarding `object`/`notion`, which links to:
    * Proved by: _Statements in which `proof` depends crucially on. (Axiom/Proposition/Theorem)_
    * Generalizations: _Statements and proofs of generalizations of `object`/`notion`. (Proposition/Theorem)_<br/><br/>
    * Examples: _A worked-out instance of `statement` without invoking `proof`. (Proposition)_
    * Counterexamples: _Illustrations of why hypothesis in `statement` are necessary for `proof`. (Proposition)_
* **Axiom**, written as a formal `statement` within a certain framework, which links to:
    * Equivalences: _Equivalent statements - including its proof. (Axiom/Proposition/Theorem)_
    * Constructions: Objects/notions that crucially depend on `statement`. (Definition)

These templates are automatically [inserted][templatesInsert] whenever a note is created. After the links, the main content is written with remarks where appropriate.

### Obsidian configurations

I do not directly write my notes in Obsidian since its Vim mode is not comprehensive (and the formatting is weird); see [dotfiles/nvim](https://github.com/zhaoshenzhai/dotfiles/tree/master/nvim) for my Neovim setup. Therefore, most of my Obsidian customization is on its [appearance](.obsidian/snippets/) and [navigation hotkeys](.obsidian/hotkeys.json).

Theme: [Minimal](https://github.com/kepano/obsidian-minimal).

Pluggins:
* [Admonition](https://github.com/valentine195/obsidian-admonition): A replacement for the `mdframed` package in LaTeX.
* [Advanced Appearance](https://github.com/kepano/obsidian-advanced-appearance): Set the font to `CMU Serif` (default LaTeX font).
* [Extended MathJax](https://github.com/xldenis/obsidian-latex): Add macros in [`preamble.sty`](preamble.sty).
* [Hider](https://github.com/kepano/obsidian-hider): Hide title bars, scroll bars, YAML, etc.
* [Sliding Panes (Andy's Mode)](https://github.com/deathau/sliding-panes-obsidian): Stack panes side-by-side.

Some stats: 447 notes, 955 links, 48 images ([updated](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/stats.sh) every commit).

### TikZ images

This is the main downside of using [MathJax](https://www.mathjax.org/) in Obsidian since Obsidian uses [sanitizates HTML](https://help.obsidian.md/Advanced+topics/HTML+sanitization) which ignores `<script>` tags and prevents one from using [this](https://github.com/kisonecat/tikzjax) tool.

My solution is to bind a key in Neovim which [inserts][tikzInsert]
```html
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/UNIQUE_IDENTIFIER/image.svg"></center>
```
in the current line and runs a [script](https://github.com/zhaoshenzhai/MathWiki/blob/master/.image/newTikZ.sh) that creates a standalone `image.tex` file from a [template](https://github.com/zhaoshenzhai/MathWiki/blob/master/.image/imageTemplate.tex) where the TikZ code can be written. Once finished, another key can be pressed which [executes][pdfLaTeXExecute]
```bash
pdflatex -shell-escape image.tex && pdfcrop image.pdf image.pdf && pdf2svg image.pdf image.svg
```
The svg images are uploaded to Github instead of linked directly in Obsidian because I couldn't get Obsidian to load local svg images. For those who do not have/want a Github repo for their Obsidian vault, use [Gist](https://gist.github.com/) instead.

## :telescope: Graph View: ![Definition](https://via.placeholder.com/15/63bfee/000000?text=+) Definitions | ![Proposition](https://via.placeholder.com/15/e665b7/000000?text=+) Propositions | ![Theorem](https://via.placeholder.com/15/65fb65/000000?text=+) Theorems | ![Axiom](https://via.placeholder.com/15/f95d5d/000000?text=+) Axioms

![Graph view](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/images/graph_view.png)

## :page_with_curl: Sample Pages

![Subspace Topology (Basis)](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/images/sample_pages/subspace_topology_basis.png)

![Function](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/images/sample_pages/function.png)

![Fundamental Theorem of Equivalence Relations](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/images/sample_pages/fundamental_theorem_of_equivalence_relations.png)

[templatesInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/UltiSnips/vimwiki.snippets#L602
[tikzInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/config/MathWiki.vim#L2
[pdfLaTeXExecute]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/config/MathWiki.vim#L1
