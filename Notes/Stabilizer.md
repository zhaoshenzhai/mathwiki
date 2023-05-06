<div class="topSpace"></div>

Date Created: 04/05/2023 23:03:17
Tags: #Type/Definition #Topic/Group_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Orbit-Stabilizer Theorem]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $G$ be a group acting on a set $X$ and fix $x\in X$. The **stabilizer/isotropy subgroup of $x$ under $G$** is the subgroup $G_x\coloneqq\l\{g\in G\mid gx=x\r\}$._

```

**Remark.** If $x,y\in X$ are in the same orbit, then the stabilizers $G_x$ and $G_y$ are conjugate. Indeed, if $y=gx$ for some $g\in G$, then for all $h\in G_x$, we see that $hx=x$ and hence
$$\begin{equation}
    \l(ghg^{-1}\r)y=\l(ghg^{-1}\r)gx=ghx=gx=y.
\end{equation}$$
Thus $ghg^{-1}\in G_y$. Conversely, for all $h\in G_y$, we see that $hy=y$ and hence $hgx=gx$. Then $\l(g^{-1}hg\r)x=x$, so $g^{-1}hg\in G_x$ and hence $h\in gG_xg^{-1}$.<span style="float:right;">$\blacklozenge$</span>
