---
mathLink: Ehrenfeucht-Fraïssé Games
---

<div class="topSpace"></div>

Date Created: 24/01/2024 16:16:32
References: #Ref/NONE
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Ehrenfeucht-Fraïssé Games).

Let $\sigma$ be a signature in $\FOL$ and let $\mc{A}$ and $\mc{B}$ be $\sigma$-structures. Fix an ordinal $\gamma$. The <b>Ehrenfeucht-Fraïssé Game</b> of length $\gamma$ is the game $G_\gamma\!\l(\mc{A},\mc{B}\r)$ consisting of two players, the $\textrm{Spoiler}$ and the $\textrm{Prover}$, such that at the $i^\textrm{th}$ stage, either $\textrm{Spoiler}$ plays $a_i\in\mc{A}$ and challenges $\textrm{Prover}$ to play some $b_i\in\mc{B}$, or $\textrm{Spoiler}$ plays $b_i\in\mc{B}$ and challenges $\textrm{Prover}$ to play some $a_i\in\mc{A}$. The $\textrm{Prover}$ wins iff $f:\langle\tpl{a_i}_{i<\gamma}\rangle_\mc{A}\to\langle\tpl{b_i}_{i<\gamma}\rangle_\mc{B}$ mapping each $a_i\mapsto b_i$ is an isomorphism.
* If $\mc{A}$ and $\mc{B}$ are countable, then $\mc{A}\iso\mc{B}$ iff $\textrm{Prover}$ has a winning strategy in $G_\omega\!\l(\mc{A},\mc{B}\r)$.
* If $\sigma$ is a finite relational language, then $\mc{A}\elemequiv\mc{B}$ iff $\textrm{Prover}$ has a winning strategy in $G_n\!\l(\mc{A},\mc{B}\r)$ for all $n\in\N$.

```

<i>Proof.</i> 
