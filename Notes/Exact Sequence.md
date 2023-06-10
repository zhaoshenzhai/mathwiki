<div class="topSpace"></div>

Date Created: 09/05/2023 17:05:40
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Isomorphism Theorems]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G_1,\dots,G_n$ be groups. A sequence $G_1\rightarrow G_2\rightarrow\cdots\rightarrow G_n$ of homomorphisms $\phi_i:G_i\to G_{i+1}$ is said to be <b>exact</b> if $\im\phi_i=\ker\phi_{i+1}$ for all $i$.
* A <b>short exact sequence</b> is an exact sequence $0\rightarrow G_1\overset{\phi_1}{\rightarrow}G_2\overset{\phi_2}{\rightarrow}G_2\rightarrow0$; that is, a sequence for which $\phi_1$ is injective, $\phi_2$ is surjective, and $\im\phi_1=\ker\phi_2$.
* A <b>long exact sequence</b> is an exact sequence that is not short.

```

<b>Remark.</b> The First Isomorphism Theorem, which states that $G/\ker\phi\iso\im\phi$, shows that the sequence $0\longrightarrow A\overset{\phi}{\longrightarrow}B\overset{\psi}{\longrightarrow} C\longrightarrow0$ is exact iff $C\iso B/A$.
* If the sequence is exact, then $\phi$ is injective and hence $A\iso\phi\l(A\r)$. But $\phi\l(A\r)\iso\ker\psi$ by exactness, so $B/\phi\l(A\r)\iso B/\ker\psi\iso\psi\l(B\r)$. Since $\psi$ is surjective, we see that $B/A\iso B/\phi\l(A\r)\iso C$.
* Conversely, suppose $C\iso B/A$. Let $\phi:A\into B$ be the inclusion and let $\psi:B\onto B/\phi\l(A\r)$ be the projection. Then $\ker\psi=\phi\l(A\r)=\im\phi$, as desired.<span style="float:right;">$\blacklozenge$</span>
