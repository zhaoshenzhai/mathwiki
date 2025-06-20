# MathWiki

A statically-generated [Hugo](https://gohugo.io/) site to host my math course notes in university, inspired by [Obsidian.md](https://obsidian.md).

These notes are meant to be a distilled version of the math I've learnt where ideas, formulations, and important results are broken down into their atomic components of definitions, propositions, and theorems for clarity, precision, and accessibility.

> Work in progress!

## Contents
* [Note Types and Templates](https://github.com/zhaoshenzhai/mathwiki#pencil2-note-types-and-templates); the basic templates and outgoing links for each type of note.
* [Scripts](https://github.com/zhaoshenzhai/mathwiki#scripts); snippets, plugins, and my bash scripts.

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

These templates are automatically inserted whenever a note is created. After the links, the main content is written with remarks where appropriate.

## Scripts

I wrote some bash scripts to (try) maintain the consistency of my notes; [main.sh](https://github.com/zhaoshenzhai/mathwiki/blob/master/.scripts/main.sh) acts as a hub for me to run them.
* Global search and replace, including the ability of excluding additional patterns, is handled by [searchReplace.sh](https://github.com/zhaoshenzhai/mathwiki/blob/master/.scripts/searchReplace.sh).
* Basic stats of the site (and updating them below) is handled by [stats.sh](https://github.com/zhaoshenzhai/mathwiki/blob/master/.scripts/stats.sh).
* Displaying all links that have yet to be created and all notes that have those links, are handled by [ghostLinks.sh](https://github.com/zhaoshenzhai/mathwiki/blob/master/.scripts/ghostLinks.sh).

Some stats: 46 notes, 0 links (ratio: 0), 8 images ([updated](https://github.com/zhaoshenzhai/mathwiki/blob/master/.scripts/stats.sh) every commit).
