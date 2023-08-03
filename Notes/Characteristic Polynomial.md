<div class="topSpace"></div>

Date Created: 08/03/2023 15:50:44
Tags: #Type/Definition #Topic/Module_Theory/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Algebraic and geometric multiplicity]]
Generalizations: <i>Not Applicable</i>

Properties: [[Cayley-Hamilton Theorem]], [[Eigenvalue iff root of characteristic polynomial]], [[Schur's Theorem]], [[Basic properties of characteristic polynomial and invariant subspaces]], [[Basic properties of characteristic and minimal polynomials]]
Sufficiencies: [[Characteristic polynomial for a diagonalizable operator]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Leibniz Formula]]

``` ad-Definition
title: Definition.

Let $\alpha\in\End\l(M\r)$ be a linear operator on a free $R$-module $M$. The <b>characteristic polynomial of $\alpha$</b> is the polynomial $\cchi_\alpha\!\l(t\r)\coloneqq\det\l(t\id-\alpha\r)\in R\l[t\r]$.

```

<b>Remark.</b> If $M$ is finitely-generated, say with $n\coloneqq\rk M$, then $\cchi_\alpha\!\l(t\r)=t^n-\tr\l(\alpha\r)t^{n-1}+\cdots+\l(-1\r)^n\det\l(\alpha\r)$. Indeed, let $\tpl{a_{ij}}$ be a matrix representation of $\alpha$ and use the Leibniz expansion to write
$$\begin{equation}
    \cchi_\alpha\!\l(t\r)=\det\l(t\id-\alpha\r)=\sum_{\sigma\in S_n}\sgn\l(\sigma\r)b_{\sigma\l(1\r)1}\cdots b_{\sigma\l(n\r)n}
\end{equation}$$
where $b_{ii}\coloneqq t-a_{ii}$ for all $i$ and $b_{ij}\coloneqq-a_{ij}$ for all $i\neq j$. The term with $\sigma=\id$ is then $\prod_{i=1}^{n}\l(t-a_{ii}\r)$, and since every other term has degree less than $n$, we see that $\deg\cchi_\alpha=n$ is monic. The constant term $\cchi_\alpha\!\l(0\r)=\l(-1\r)^n\deg\l(\alpha\r)$ follows by multilinearity of $\det$. Finally, 
