<div class="topSpace"></div>

Date Created: 28/02/2023 01:23:20
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Bounded linear maps with Banach codomain is Banach]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ and $W$ be normed vector spaces. The **operator norm** on the vector space $\BDD{\l(V,W\r)}\subseteq\Hom\l(V,W\r)$ of all bounded linear maps is the norm_
$$\begin{equation}
    \|\slot\|_\textrm{op}:B\l(V,W\r)\to\R\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ T\mapsto\|T\|_\textrm{op}\coloneqq\sup\limits_{v\neq 0}\frac{\|Tv\|}{\|v\|}.
\end{equation}$$
_This makes $\BDD{\l(V,W\r)}$ into a normed vector space._

```

**Remark.** It is clear, by definition of $\|T\|_\textrm{op}$, that $\|Tv\|\leq\|T\|_\textrm{op}\|v\|$ for all $v\in V$.<span style="float:right;">$\blacklozenge$</span>
