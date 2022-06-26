# :pencil: MathWiki

An [Obsidian.md](https://obsidian.md) vault for my math course notes in university (integrated with my [dotfiles](https://github.com/zhaoshenzhai/dotfiles)).

These notes are meant to be a distilled version of the math I've learnt where ideas, formulations, and important results are broken down into their atomic components of definitions, propositions, and theorems for clarity, precision, and accessibility.

## :telescope: Graph View: ![#63BFEE](https://placeholder.pics/svg/15/63BFEE/63BFEE) Definitions | ![#E665B7](https://placeholder.pics/svg/15/E665B7/E665B7) Propositions | ![#65FB65](https://placeholder.pics/svg/15/65FB65/65FB65) Theorems | ![#F95D5D](https://placeholder.pics/svg/15/F95D5D/F95D5D) Axioms

![Graph view](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/graph_view.png)

## :pencil2: File structures

Each note is currently one of four types:

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
    * Justifications: _Proofs of implicit assumptions of `object`/`notion` in `statement`._<br/><br/>
    * Generalizations: _Statements and proofs of generalizations of `statement`._
    * Counterexamples: _Illustrations of why hypotheses in `statement` are necessary for `proof`._
* **Axiom**, written as a formal `statement` within a certain framework, which links to:
    * Equivalences: _Equivalent statements - including its proof._
    * Constructions: _Objects/notions that crucially depend on `statement`._

These templates are automatically [inserted][templatesInsert] whenever a note is created. After the links, the main content is written with remarks where appropriate.

## :gear: Obsidian configurations

I do not directly write my notes in Obsidian since its Vim mode is not comprehensive (and the formatting is weird); see [dotfiles/nvim](https://github.com/zhaoshenzhai/dotfiles/tree/master/nvim) for my Neovim setup. Therefore, most of my Obsidian customization is on its [appearance](.obsidian/snippets/) and [navigation hotkeys](.obsidian/hotkeys.json).

Theme: [Minimal](https://github.com/kepano/obsidian-minimal).

Pluggins:
* [Admonition](https://github.com/valentine195/obsidian-admonition): A replacement for the `mdframed` package in LaTeX.
* [Advanced Appearance](https://github.com/kepano/obsidian-advanced-appearance): Set the font to `CMU Serif` (default LaTeX font).
* [Extended MathJax](https://github.com/xldenis/obsidian-latex): Add macros in [`preamble.sty`](preamble.sty).
* [Hider](https://github.com/kepano/obsidian-hider): Hide title bars, scroll bars, YAML, etc.
* [Sliding Panes (Andy's Mode)](https://github.com/deathau/sliding-panes-obsidian): Stack panes side-by-side.

Some stats: 563 notes, 1330 links, 55 images ([updated](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/stats.sh) every commit).

## :art: TikZ images

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

## :link: Math links

As far as I know, the standard wiki-style links of the form `[[...]]` used in Obsidian does not support MathJax. Instead, one should use markdown-style links which are of the form `[text](link)`; here, `text` can contain `$...$`. However, `text` remains unchanged when `link` is updated, so, if one wishes to have links with math, one needs to update them manually.

I wrote a [script](https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/mathLinks.sh) that partially automates this process. Every note whose link should contain math is declared an `alias`; when `link` is updated, `text` is checked against the alias and is updated when they differ. The `alias`es are declared in a YAML front matter and is either written as `alias: auto_aliasing` or `custom_alias: ...`.
- `auto_aliasing`: This is used when the text that needs to be replaced with math is 'standard'. For instance, "Invertible iff bijective" is auto-aliased into "Invertible $\Leftrightarrow$ bijective", which is what `text` will be checked against. See [here][standardAlias] for a list of standard aliases.
- `custom_alias`: If the alias is not standard (a one-time alias specific to this note), then it is written manually.

The script can be used to update math links as well as generate new ones.
- If flagged with `-u`, it updates every math link of the form `[text](link)` by comparing `text` with `alias` of `link`.
    - If the note is auto-aliased, it can be run once the note is renamed.
    - If the note has a custom alias, the `alias` also needs to be updated manually in the front matter of the note before it can be run.
- If flagged with `-n`, it generates a new math link `[text](link)` from all Obsidian-style links `[[...]]` whose note is aliased.

When run, the script updates/generates math links for _every_ note that links to `link`; for this reason, every update/generation displays the difference and needs to be confirmed (by pressing "Y" or `Enter`) before the script proceeds. If `link` is repeated in many notes (which is the entire point of this script), one does _not_ need to confirm this for every note that links to `link` since the update/generation is the same.

Here is a sample of how the script interface looks.

![math_links_demo](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/math_links_demo.png)

## :page_with_curl: Sample Pages

![1](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/linear_map.png)

![2](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/function.png)

![3](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/linear_subspace.png)

![4](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/upper_limit_strictly_finer_than_K.png)

![5](https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/.github/sample_pages/fundamental_theorem_of_equivalence_relations.png)

[templatesInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/UltiSnips/vimwiki.snippets#L660
[tikzInsert]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/config/MathWiki.vim#L1
[pdfLaTeXExecute]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/config/MathWiki.vim#L2
[standardAlias]: https://github.com/zhaoshenzhai/MathWiki/blob/master/.scripts/mathLinks.sh#L11
