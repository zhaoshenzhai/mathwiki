<div class="topSpace"></div>

Date Created: 28/02/2023 01:23:20
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Bounded linear maps with Banach codomain is Banach]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ and $W$ be normed vector spaces. The <b>operator norm</b> on the vector space $\BDD{\l(V,W\r)}\subseteq\Hom\l(V,W\r)$ of all bounded linear maps is the norm
$$\begin{equation}
    \|\slot\|_\textrm{op}:B\l(V,W\r)\to\R\ \ \ \ \ \ \ \ \mathit{mapping}\ \ \ \ \ \ \ \ T\mapsto\|T\|_\textrm{op}\coloneqq\sup\limits_{v\neq 0}\frac{\|Tv\|}{\|v\|}.
\end{equation}$$
This makes $\BDD{\l(V,W\r)}$ into a normed vector space.

```

<b>Remark.</b> It is clear, by definition of $\|T\|_\textrm{op}$, that $\|Tv\|\leq\|T\|_\textrm{op}\|v\|$ for all $v\in V$.<span style="float:right;">$\blacklozenge$</span>
