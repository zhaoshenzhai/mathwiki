---
mathLink-blocks:
    universal-property-of-free-modules: Universal Property of Free Modules
    free-abelian-group: Free Abelian Group
---

<div class="topSpace"></div>

Date Created: 18/07/2023 15:39:04
Tags: #Type/Definition #Topic/Rings_and_Modules/Module_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Generating Set (Module)]], [[Polynomials]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Freedom Theorem for Modules over PID]], [[Characterizations of fields]]
Equivalences: [[Characterizations of PIDs#^torsion-free-iff-free]]
Justifications: [[Invariant Basis Number]]

``` ad-Definition
title: Definition.

Let $R$ be a ring and let $X$ be a set. The <b>free $R$-module</b> of $X$ is the initial object $F^R\!\l(X\r)$ in the category of functions $f:X\to M$ to an $R$-module $M$.
![[Images/2023-07-18_154443/image.svg|125]]

```

<b>Remark.</b> The free $R$-module $F^R\!\l(X\r)$ can be defined as $R^{\oplus X}$ equipped with the map $j:X\to F\l(X\r):x\mapsto\delta_x$ where $\delta_x:X\to M$ is the function defined by $\delta_x\!\l(t\r)=1$ if $x=t$ and $0$ otherwise. Indeed, every $\tpl{r_x}\in R^{\oplus X}$ can be written (uniquely) as the sum $\tpl{r_x}=\sum_{x\in X}r_x\delta_x$, so any homomorphism $\phi:F^R\!\l(X\r)\to M$ with $f=\phi\circ j$ must be such that
^universal-property-of-free-modules
$$\begin{equation}
    \phi\l(r_x\r)=\phi\l(\sum r_x\delta_x\r)=\sum r_x\phi\l(\delta_x\r)=\sum r_x\l(\phi\circ j\r)\l(x\r)=\sum r_x f\l(x\r).
\end{equation}$$
The function $\phi$ defined this way is an $R$-module homomorphism, so we are done.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> An $R$-module $M$ is said to be <b>free</b> if $M=F^R\!\l(X\r)$ for some set $X$. If $R$ is commutative, then free modules $M$ over $R$ are classified by their rank.
* If $R=\Z$, we recover the <b>free abelian group of $X$</b>, denoted $F^\textrm{ab}\!\l(X\r)=\Z^{\oplus X}$.<span style="float:right;">$\blacklozenge$</span>
^free-abelian-group
