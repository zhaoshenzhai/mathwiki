---
mathLink: $\Hom\l(V,W\r)\iso\mat{m\times n}{K}$
---

<div class="topSpace"></div>

Date Created: 17/05/2022 10:57:09
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Unique Representation Theorem (Basis)]], [[Existence of unique linear map via action on basis vectors]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Matrix Representation).

Let $V$ and $W$ be finite-dimensional $K$-vector spaces, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and fix two choices of bases $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ and $\mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}$ of $V$ and $W$, respectively. Then the matrix representation
$$\begin{equation}
    \Phi_\mc{B}^\mc{C}:\Hom\l(V,W\r)\to\mat{m\times n}{K}\ \ \ \ \textrm{\it{mapping}}\ \ \ \ T\mapsto\l[T\r]_\mc{B}^\mc{C},
\end{equation}$$
where $\l[T\r]_\mc{B}^\mc{C}\coloneqq\l[\alpha_{ij}\r]\in\mat{m\times n}{K}$ is the unique matrix such that $T\l(b_j\r)=\sum_{i=1}^{m}\alpha_{ij}c_i$ for all $j\in\l\{1,\dots,n\r\}$, is a linear isomorphism.

```

**Remark.** In particular, we have $\Hom\l(V,W\r)\iso\mat{m\times n}{K}$. However, it is _not_ a natural isomorphism as choices of bases are required.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We need to prove that $\Phi_\mc{B}^\mc{C}$ is a bijective linear map. To show linearity, take $T_1,T_2\in\Hom\l(V,W\r)$ and $\lambda\in K$, so there exist unique coefficients $\alpha_{ij},\beta_{ij}\in K$ for all $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$ such that
$$\begin{equation}
    T_1\l(b_j\r)=\sum_{i=1}^m\alpha_{ij}c_i\ \ \ \ \textrm{and}\ \ \ \ T_2\l(b_j\r)=\sum_{i=1}^m\beta_{ij}c_i
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. Observe then that
$$\begin{equation}
    \l(\lambda T_1+T_2\r)\l(b_j\r)=\lambda T_1\l(b_j\r)+T_2\l(b_j\r)=\lambda\sum_{i=1}^m\alpha_{ij}c_i+\sum_{i=1}^m\beta_{ij}c_i=\sum_{i=1}^m\l(\lambda\alpha_{ij}+\beta_{ij}\r)c_i,
\end{equation}$$
and since $\gamma_{ij}\coloneqq\lambda\alpha_{ij}+\beta_{ij}$ are the unique set of coefficients such that $\l(\lambda T_1+T_2\r)\l(b_j\r)=\sum_{i=1}^m\gamma_{ij}c_i$, we see that
$$\begin{equation}
    \Phi_\mc{B}^\mc{C}\l(\lambda T_1+T_2\r)=\l[\gamma_{ij}\r]=\l[\lambda\alpha_{ij}+\beta_{ij}\r]=\lambda\l[\alpha_{ij}\r]+\l[\beta_{ij}\r]=\lambda\Phi_\mc{B}^\mc{C}\l(T_1\r)+\Phi_\mc{B}^\mc{C}\l(T_2\r).
\end{equation}$$
Now, to show that $\Phi_\mc{B}^\mc{C}$ is bijective, take $A\coloneqq\l[\alpha_{ij}\r]\in\mat{m\times n}{K}$. Indeed, since $\sum_{i=1}^m\alpha_{ij}c_i\in W$ for all $j\in\l\{1,\dots,n\r\}$, there exists a unique linear map $T:V\to W$ such that $T\l(b_j\r)=\sum_{i=1}^m\alpha_{ij}c_i$ for all $j\in\l\{1,\dots,n\r\}$. Thus $A=\Phi_\mc{B}^\mc{C}\l(T\r)$ uniquely, so we are done.<span style="float:right;">$\blacksquare$</span>
