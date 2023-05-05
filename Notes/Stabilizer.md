<div class="topSpace"></div>

Date Created: 04/05/2023 23:03:17
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $X$ be a $G$-set and fix $x\in X$. The **stabilizer/isotropy subgroup of $x$ under $G$** is the subgroup $G_x\coloneqq\l\{g\in G\mid gx=x\r\}$._

```

**Remark.** If $x,x'\in X$ are such that $x'=gx$ for some $g\in G$, then $G_{x'}=gG_xg^{-1}$. Indeed, for all $h\in G_x$, we see that $hx=x$ and hence
$$\begin{equation}
    \l(ghg^{-1}\r)x'=\l(ghg^{-1}\r)gx=ghx=gx=x'.
\end{equation}$$
Thus $ghg^{-1}\in G_{x'}$. Conversely, for all $h\in G_{x'}$, we see that $hx'=x'$ and hence $hgx=gx$. Then $\l(g^{-1}hg\r)x=x$, so $g^{-1}hg\in G_x$ and hence $h\in gG_xg^{-1}$.<span style="float:right;">$\blacklozenge$</span>
