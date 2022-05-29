---
custom_alias: $V\iso K^n$ ($\dim V=n$)
---

<br />
<br />

Date Created: 15/05/2022 22:49:38
Tags: #Proposition #Closed

Proved by: [Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective](Linear%20map%20between%20vector%20spaces%20of%20same%20dimension%20is%20injective%20iff%20surjective.md), [[Unique Representation Theorem (Hamel)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and fix a choice of basis $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ of $V$. Then the coordinate representation_
$$\begin{equation}
    \phi_\mc{B}:V\to K^n\ \ \ \ \textrm{\it{mapping}}\ \ \ \ v\mapsto\l[v\r]_\mc{B}
\end{equation}$$
_is a linear isomorphism. In particular, we have $V\iso K^n$._

```

_Proof_. Since $\dim V=n=\dim K^n$, it suffices to prove that $\phi_\mc{B}$ is a surjective linear map.
* (Linearity): Take $v_1,v_2\in V$ and $\alpha\in K$, so there exist unique coefficients $\beta_{11},\dots,\beta_{1n},\beta_{21},\dots,\beta_{2n}\in K$ such that
$$\begin{equation}
    v_1=\sum_{i=1}^n\beta_{1i}b_i\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ v_2=\sum_{i=1}^n\beta_{2n}b_i.
\end{equation}$$
Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha v_1+v_2&=\alpha\sum_{i=1}^n\beta_{1i}b_i+\sum_{i=1}^n\beta_{2i}b_i \\
        &=\sum_{i=1}^n\l(\alpha\beta_{1i}+\beta_{2i}\r)b_i,
    \end{aligned}
\end{equation}$$
and since $\gamma_i\coloneqq\alpha\beta_{1i}+\beta_{2i}$ are the unique set of coefficients such that $\alpha v_1+v_2=\sum_{i=1}^n\gamma_ib_i$, we see that
$$\begin{equation}
    \begin{aligned}
        \phi_\mc{B}\l(\alpha v_1+v_2\r)&=\tpl{\gamma_1,\dots,\gamma_n} && \textrm{Definition of $\phi_\mc{B}$} \\
        &=\tpl{\alpha\beta_{11}+\beta_{21},\dots,\alpha\beta_{1n}+\beta_{2n}} && \textrm{Substitution} \\
        &=\alpha\tpl{\beta_{11},\dots,\beta_{1n}}+\tpl{\beta_{21},\dots,\beta_{2n}} && \textrm{Vector operations on $K^n$} \\
        &=\alpha\phi_\mc{B}\l(v_1\r)+\phi_\mc{B}\l(v_2\r). && \textrm{Definition of $\phi_\mc{B}$}
    \end{aligned}
\end{equation}$$

* (Surjection): Take $\v{v}\coloneqq\tpl{\alpha_1,\dots,\alpha_n}\in K^n$ and observe that $\phi_\mc{B}\l(v\r)$, where $v\coloneqq\sum_{i=1}^n\alpha_ib_i$, is $\v{v}$.<span style="float:right;">$\blacksquare$</span>
