---
mathLink: $\l[T^\dual\r]=\l[T\r]^\trans$
---

<div class="topSpace"></div>

Date Created: 01/02/2023 13:39:36
Tags: #Type/Proposition #Later/Module_Theory

Proved by: [[Basic properties of composition of linear maps]], [[Dual basis is a basis and components of linear forms]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ and $W$ be finite-dimensional $K$-vector spaces with respective bases $\mc{B}\coloneqq\l\{e_i\r\}_{i=1}^n$ and $\mc{C}\coloneqq\l\{f_j\r\}_{j=1}^m$ and dual bases $\mc{B}^\dual\coloneqq\l\{\epsilon_i\r\}_{i=1}^n$ and $\mc{C}^\dual\coloneqq\l\{\eta_j\r\}_{j=1}^m$. Then, for any linear map $T:V\to W$, we have $\l[T^\dual\r]_{\mc{C}^\dual}^{\mc{B}^\dual}=\l(\l[T\r]_\mc{B}^\mc{C}\r)^\trans$ where $T^\dual:W^\dual\to V^\dual:\gamma\mapsto\gamma\circ T$ is the dual map of $T$.

```

<i>Proof.</i> We first show that $T^\dual$ is linear. Indeed, for any $\gamma_1,\gamma_2\in W^\dual$ and $\lambda\in K$, we have
$$\begin{equation}
    T^\dual\l(\lambda\gamma_1+\gamma_2\r)=\l(\lambda\gamma_1+\gamma_2\r)\circ T=\lambda\l(\gamma_1\circ T\r)+\l(\gamma_2\circ T\r)=\lambda T^\dual\l(\gamma_1\r)+T^\dual\l(\gamma_2\r).
\end{equation}$$
For convenience, set $A\coloneqq\l[T\r]_\mc{B}^\mc{C}\in\mat{m\times n}{K}$ and $B\coloneqq\l[T^\dual\r]_{\mc{C}^\dual}^{\mc{B}^\dual}\in\mat{n\times m}{K}$. Then, by definition of $B$, we have $T^\dual\l(\eta_j\r)=\sum_{i=1}^{n}B_{ij}\epsilon_i$. But we also have, by definition of $T^\dual$, that
$$\begin{equation}
    T^\dual\l(\eta_j\r)=\eta_j\circ T=\sum_{i=1}^{n}\l(\eta_j\circ T\r)\l(e_i\r)\epsilon_i
\end{equation}$$
where we have expanded $\eta_j\circ T$ in components. Since $\mc{B}^\dual$ is a basis for $V^\dual$, we equate components to obtain
$$\begin{equation}
    B_{ij}=\l(\eta_j\circ T\r)\l(e_i\r)=\eta_j\l(T\l(e_i\r)\r)=\eta_j\l(\sum_{k=1}^{m}A_{ki}f_k\r)=\sum_{k=1}^{m}A_{ki}\eta_j\l(f_k\r)=\sum_{k=1}^{m}A_{ki}\delta_{jk}=A_{ji}.\qedin
\end{equation}$$
