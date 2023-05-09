<div class="topSpace"></div>

Date Created: 09/05/2023 17:05:40
Tags: #Type/Definition #Topic/Group_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Isomorphism Theorems (Group)]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $G_1,\dots,G_n$ be groups. A sequence $G_1\rightarrow G_2\rightarrow\cdots\rightarrow G_n$ of homomorphisms_ $\phi_i:G_i\to G_{i+1}$ _is said to be **exact** if_ $\im\phi_i=\ker\phi_{i+1}$ _for all $i$._
* _A **short exact sequence** is an exact sequence $0\rightarrow G_1\overset{\phi_1}{\rightarrow}G_2\overset{\phi_2}{\rightarrow}G_2\rightarrow0$; that is, a sequence for which $\phi_1$ is injective, $\phi_2$ is surjective, and $\im\phi_1=\ker\phi_2$._
* _A **long exact sequence** is an exact sequence that is not short._

```

**Remark.** The First Isomorphism Theorem, which states that $G/\ker\phi\iso\im\phi$, shows that the sequence $0\longrightarrow A\overset{\phi}{\longrightarrow}B\overset{\psi}{\longrightarrow} C\longrightarrow0$ is exact iff $C\iso B/A$.
* If the sequence is exact, then $\phi$ is injective and hence $A\iso\phi\l(A\r)$. But $\phi\l(A\r)\iso\ker\psi$ by exactness, so $B/\phi\l(A\r)\iso B/\ker\psi\iso\psi\l(B\r)$. Since $\psi$ is surjective, we see that $B/A\iso B/\phi\l(A\r)\iso C$.
* Conversely, suppose $C\iso B/A$. Let $\phi:A\into B$ be the inclusion and let $\psi:B\onto B/\phi\l(A\r)$ be the projection. Then $\ker\psi=\phi\l(A\r)=\im\phi$, as desired.<span style="float:right;">$\blacklozenge$</span>
