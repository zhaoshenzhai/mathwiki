---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 26/01/2022 17:41:00
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: [[Kernel (Group Theory)]], [[Kernel (Ring Theory)]], [[Kernel and Cokernel (Module Theory)]]
Constructions: [[Covariant Power Set Functor]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $f:X\to Y$ and fix $S\subseteq X$ and $T\subseteq Y$.
* The <b>image</b> of $S$ under $f$ is the set $f\l(S\r)\coloneqq\l\{y\in Y\st\ex s\in S:y=f\l(x\r)\r\}$.
* The <b>preimage</b> of $T$ under $f$ is the set $f^{-1}\!\l(T\r)\coloneqq\l\{x\in X\st f\l(x\r)\in T\r\}$.

They induce functions $f:S\mapsto f\l(S\r)$ and $f^{-1}:T\mapsto f^{-1}\!\l(T\r)$ between power sets.

```

<b>Remark.</b> Note that the functions $f:\pow\l(X\r)\to\pow\l(Y\r)$ and $f^{-1}:\pow\l(Y\r)\to\pow\l(X\r)$ are <i>not</i> always inverses. Instead, we have the following relations.
* For $S\subseteq X$, we have $S\subseteq f^{-1}\!\l(f\l(S\r)\r)$; equality holds if $f$ is injective.
* For $T\subseteq Y$, we have $f\l(f^{-1}\!\l(T\r)\r)\subseteq T$; equality holds if $f$ is surjective.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Images and preimages also satisfy the following basic properties. Their relations are best clarified if we consider $f$ as a relation instead.
* (Unions). $f\l(\bigcup\mc{A}\r)=\bigcup\l\{f\l(A\r)\st A\in\mc{A}\r\}$ and $f^{-1}\!\l(\bigcup\mc{B}\r)=\bigcup\l\{f^{-1}\!\l(B\r)\st B\in\mc{B}\r\}$.
* (Intersection of images). $f\l(\bigcap\mc{A}\r)\subseteq\bigcap\l\{f\l(A\r)\st A\in\mc{A}\r\}$; equality holds if $f$ is left-unique.
* (Intersection of preimages). $f^{-1}\!\l(\bigcap\mc{B}\r)\subseteq\bigcap\l\{f^{-1}\!\l(B\r)\st B\in\mc{B}\r\}$; equality holds if $f$ is a right-unique.
* (Complement of images). For all $A_1,A_2\in\mc{A}$, we have $f\l(A_1\r)\comp f\l(A_2\r)\subseteq f\l(A_1\comp A_2\r)$; equality holds if $f$ is left-unique.
* (Complement of preimages). For all $B_1,B_2\in\mc{B}$, we have $f^{-1}\!\l(B_1\r)\comp f^{-1}\!\l(B_2\r)\subseteq f^{-1}\l(B_1\comp B_2\r)$; equality holds if $f$ is right-unique.<span style="float:right;">$\blacklozenge$</span>
