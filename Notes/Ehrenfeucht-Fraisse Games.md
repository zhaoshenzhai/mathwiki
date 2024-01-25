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

Let $\sigma$ be a signature in $\FOL$ and let $\mc{A}$ and $\mc{B}$ be $\sigma$-structures. Fix an ordinal $\gamma$. The <b>Ehrenfeucht-Fraïssé Game</b> of length $\gamma$ is the game $G_\gamma\!\l(\mc{A},\mc{B}\r)$ consisting of two players, the $\textrm{Spoiler}$ and the $\textrm{Prover}$, and $\gamma$ steps, such that at the $i^\textrm{th}$ step, either $\textrm{Spoiler}$ plays $a_i\in\mc{A}$ and challenges $\textrm{Prover}$ to play some $b_i\in\mc{B}$, or $\textrm{Spoiler}$ plays $b_i\in\mc{B}$ and challenges $\textrm{Prover}$ to play some $a_i\in\mc{A}$. The $\textrm{Prover}$ wins iff $f:\langle\tpl{a_i}_{i<\gamma}\rangle_\mc{A}\to\langle\tpl{b_i}_{i<\gamma}\rangle_\mc{B}$ mapping each $a_i\mapsto b_i$ is an isomorphism.
* If $\mc{A}$ and $\mc{B}$ are countable, then $\mc{A}\iso\mc{B}$ iff $\textrm{Prover}$ has a winning strategy in $G_\omega\!\l(\mc{A},\mc{B}\r)$.
* If $\sigma$ is a finite relational language, then $\mc{A}\elemequiv\mc{B}$ iff $\textrm{Prover}$ has a winning strategy in $G_n\!\l(\mc{A},\mc{B}\r)$ for all $n\in\N$.

```

<i>Proof.</i> The isomorphism claim is relatively easy: If $\mc{A}\iso\mc{B}$, then $\textrm{Prover}$ can win $G_\omega\!\l(\mc{A},\mc{B}\r)$ according to this isomorphism. Conversely, we enumerate $\mc{A}=\l\{a_0,a_1,\dots\r\}$ and $\mc{B}=\l\{b_0,b_1,\dots\r\}$ and consider the game where $\textrm{Spoiler}$ plays $a_0,b_1,a_2,b_3,\dots$ in this order and where $\textrm{Prover}$ uses the winning strategy. The partial isomorphism $f_n:\gen{\tpl{a_i}_{i<n}}_\mc{A}\mapsto\langle\tpl{b_i}_{i<n}\rangle_\mc{B}$ built after the $n^\textrm{th}$ step of this game extends to an isomorphism $f\coloneqq\bigcup_nf_n:\mc{A}\to\mc{B}$, as desired.

Suppose now that $\sigma$ is a finite relational language. For a fixed $n\in\N$, we write $\mc{A}\elemequiv_n\mc{B}$ iff $\mc{A}$ and $\mc{B}$ satisfy the same $\sigma$-sentences $\phi$ where $\qd(\phi)\leq n$. Since any $\sigma$-sentence $\phi$ has $\qd(\phi)<\infty$, it suffices to show that $\mc{A}\elemequiv_n\mc{B}$ iff $\textrm{Prover}$ has a winning strategy for $G_n\!\l(\mc{A},\mc{B}\r)$.
