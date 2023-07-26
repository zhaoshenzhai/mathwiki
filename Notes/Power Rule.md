<div class="topSpace"></div>

Date Created: 02/12/2022 00:13:05
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Differentiation Theorems in R]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $n\in\N^+$ and consider the function $f_n\!:\R\to\R:x\mapsto x^n$. Then $f_n'\!\l(c\r)=nc^{n-1}$ for all $c\in\R$.

```

<i>Proof.</i> We proceed by induction on $n$.
* If $n=1$, then $f_1\!\l(c\r)=c$ for all $c\in\R$ and hence
$$\begin{equation}
    f_1'\!\l(c\r)=\lim\limits_{x\to c}\frac{f_1\!\l(x\r)-f_1\!\l(c\r)}{x-c}=\lim\limits_{x\to c}\frac{x-c}{x-c}=1.
\end{equation}$$

Assume now that $f_k'\!\l(c\r)=kc^{k-1}$ for some $k\in\N^+$. Then, since $f_{k+1}=f_1\cdot f_k$, the product rule gives
$$\begin{equation}
    f'_{k+1}\!\l(c\r)=f'_1\!\l(c\r)f_k\!\l(c\r)+f_1\!\l(c\r)f_k'\!\l(c\r)=c^k+c\l(kc^{k-1}\r)=\l(k+1\r)c^k.\qedin
\end{equation}$$
