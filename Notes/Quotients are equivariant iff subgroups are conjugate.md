---
mathLink: $G/H$ and $G/K$ are $G$-isomorphic $\Leftrightarrow$ $H$ and $K$ are conjugate
---

<div class="topSpace"></div>

Date Created: 25/05/2023 16:23:31
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group and fix $H,K\subgrpeq G$. Then the quotient sets $G/H$ and $G/K$, acted upon by left-multiplication, are $G$-isomorphic iff $H$ and $K$ are conjugate._

```

_Proof_.
* ($\Rightarrow$): Let $f:G/H\to G/K$ be a $G$-isomorphism, say with $f\l(H\r)=gK$ for some $g\in G$. For all $h\in H$, we have that
$$\begin{equation}
    gK=f\l(H\r)=f\l(hH\r)=hf\l(H\r)=hgK,
\end{equation}$$
so $g^{-1}hg\in K$ and hence $g^{-1}Hg\subseteq K$. Since $f\l(g^{-1}H\r)=g^{-1}f\l(H\r)=g^{-1}gK=K$, we see that $f^{-1}\!\l(K\r)=g^{-1}H$ and so the same argument shows that $gKg^{-1}\subseteq H$. Conjugating, we see that $K\subseteq g^{-1}Hg$ and so $H$ and $K$ are conjugate.
* ($\Leftarrow$): Conversely, let $g\in G$ be such that $g^{-1}Hg=K$ and define a map $f:G/H\to G/K$ by $xH\mapsto xgK$. This is well-defined since if $x_1H=x_2H$, then $x_1^{-1}x_2\in H$ and hence $g^{-1}x_1^{-1}x_2g\in g^{-1}Hg=K$. Thus $\l(x_1g\r)^{-1}\l(x_2g\r)\in K$, so $x_1gK=x_2gK$. The same argument backwards shows that $f$ is an injection, and it is a surjection since $x_2K=f\l(x_2g^{-1}H\r)$ for all $x_2\in G$. Finally, it is $G$-equivariant since $f\l(a\cdot xH\r)=f\l(gxH\r)=axgK=a\cdot f\l(xH\r)$.<span style="float:right;">$\blacksquare$</span>
