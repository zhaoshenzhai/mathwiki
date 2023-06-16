<div class="topSpace"></div>

Date Created: 09/05/2023 17:05:40
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Split Exact Sequence]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Isomorphism Theorems]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G_1,\dots,G_n$ be groups. A sequence $G_1\to G_2\to\cdots\to G_n$ of homomorphisms $\phi_i:G_i\to G_{i+1}$ is said to be <b>exact</b> if $\im\phi_i=\ker\phi_{i+1}$ for all $i$.
* A <b>short exact sequence</b> is an exact sequence $1\to A\overset{\phi}{\to}B\overset{\psi}{\to}C\to1$; that is, a sequence for which $\phi$ is injective, $\psi$ is surjective, and $\im\phi=\ker\psi$.
* A <b>long exact sequence</b> is an exact sequence that is not short.

```

<b>Remark.</b> The First Isomorphism Theorem, which states that $G/\ker\phi\iso\im\phi$, shows that the sequence $1\to A\overset{\phi}{\to}B\overset{\psi}{\to} C\to1$ is exact iff $C\iso B/A$.
* If the sequence is exact, then $\phi$ is injective and hence $A\iso\phi\l(A\r)$. But $\phi\l(A\r)=\ker\psi$ by exactness, so $B/\phi\l(A\r)\iso B/\ker\psi\iso\psi\l(B\r)$. Since $\psi$ is surjective, we see that $B/A\iso B/\phi\l(A\r)\iso C$.
* Conversely, suppose $C\iso B/A$. Let $\phi:A\into B$ be the inclusion and let $\psi:B\onto B/\phi\l(A\r)$ be the projection. Then $\ker\psi=\phi\l(A\r)=\im\phi$, as desired.

This justifies the terminology that if $0\to A\to B\to C\to0$ is exact, then $B$ is an <b>extension of $C$ by $A$</b>.<span style="float:right;">$\blacklozenge$</span>
