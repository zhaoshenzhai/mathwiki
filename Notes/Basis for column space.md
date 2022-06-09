---
custom_alias: Basis for image$\slash$column space
---

<br />
<br />

Date Created: 09/06/2022 12:26:44
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication (columns slash rows)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ with $r\coloneqq\rank A$ for some fixed $m,n,r\in\N^\ast$. Set $B\coloneqq\rref A$ and let each $k_i\in K$ for all $i\in\l\{1,\dots,r\r\}$ denote the pivot column in $B$ corresponding to its $i^\textrm{\it{th}}$ row. Then the columns_ $\l\{\v{a}_{k_1},\dots,\v{a}_{k_r}\r\}$ _of $A$ form a basis for $\col A$._

```

_Proof_. Firstly, observe that since $B$ is in reduced row-echelon form, we have $\v{b}_{k_i}=\v{e}_i$ for all $i\in\l\{1,\dots,r\r\}$.
* (Linear independence): Suppose that there are coefficients $\alpha_1,\dots,\alpha_r\in K$ such that $\sum_{i=1}^r\alpha_i\v{a}_{k_i}=\v{0}$. Since $B=\rref A\sim A$, there exists an invertible matrix $C\in\mat{m}{K}$ such that $B=CA$. Left-multiplying, we see that
$$\begin{equation}
    \sum_{i=1}^r\alpha_i\l(C\v{a}_{k_i}\r)=\v{0},
\end{equation}$$
and since $C\v{a}_{k_i}=\v{b}_{k_i}=\v{e}_i$, we have $\sum_{i=1}^r\alpha_i\v{e}_i=\v{0}$. The result follows by linear independence of $\l\{\v{e}_1,\dots,\v{e}_r\r\}$.

* (Spanning set): Since $r=\rank B=\dim\col B$ is the number of pivot columns of $B$ and $\l\{\v{b}_{k_1},\dots,\v{b}_{k_r}\r\}=\l\{\v{e}_1,\dots,\v{e}_r\r\}$ is linearly independent, we see that $\l\{\v{e}_1,\dots,\v{e}_r\r\}$ forms a basis for the columns of $B$. Thus for all columns $\v{b}_j$ of $B$, there exist coefficients $\beta_{ij}\in K$ such that $\v{b}_j=\sum_{i=1}^r\beta_{ij}\v{e}_i$, and since $C\v{a}_j=\v{b}_j$ for all $j\in\l\{1,\dots,n\r\}$, we have
$$\begin{equation}
    \begin{aligned}
        \v{a}_j&=C^{-1}\v{b}_j && \textrm{Left-multiply by $C^{-1}$} \\
        &=C^{-1}\l(\sum_{i=1}^r\beta_{ij}\v{e}_i\r) && \textrm{Substitution} \\
        &=\sum_{i=1}^r\beta_{ij}C^{-1}\v{b}_{k_i} && \v{b}_{k_i}=\v{e}_i \\
        &=\sum_{i=1}^n\beta_{ij}\v{a}_{k_i} && C\v{a}_{k_i}=\v{b}_{k_i}
    \end{aligned}
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$.<span style="float:right;">$\blacksquare$</span>
