<br />
<br />

Date Created: 15/05/2022 22:49:38
Tags: #Proposition #Closed

Proved by: [[Unique Representation Theorem (Hamel)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and fix a choice of basis $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ of $V$. Then the standard representation_
$$\begin{equation}
    \rho_\mc{B}:V\to K^n\ \ \ \ \textrm{\it{mapping}}\ \ \ \ v\mapsto\l[v\r]_\mc{B}
\end{equation}$$
_is a linear isomorphism._

```

**Remark.** In particular, we see that $V\iso K^n$ whenever $\dim V=n$. However, this isomorphism is not canonical; it depends on a particular choice of basis.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We shall prove that $\rho_\mc{B}$ is an bijective linear map.
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
        \rho_\mc{B}\l(\alpha v_1+v_2\r)&=\l[\gamma_1\ \ \cdots\ \ \gamma_n\r]^\trans && \textrm{Definition of $\rho_\mc{B}$} \\
        &=\l[\alpha\beta_{11}+\beta_{21}\ \ \cdots\ \ \alpha\beta_{1n}+\beta_{2n}\r]^\trans && \textrm{Substitution} \\
        &=\alpha\l[\beta_{11}\ \ \cdots\ \ \beta_{1n}\r]^\trans+\l[\beta_{21}\ \ \cdots\ \ \beta_{2n}\r]^\trans && \textrm{Transposition is a linear map} \\
        &=\alpha\l[v_1\r]_\mc{B}+\l[v_2\r]_\mc{B} && \textrm{Definitions of }\l[v_1\r]_\mc{B}\textrm{ and }\l[v_2\r]_\mc{B} \\
        &=\alpha\rho_\mc{B}\l(v_1\r)+\rho_\mc{B}\l(v_2\r). && \textrm{Definition of $\rho_\mc{B}$}
    \end{aligned}
\end{equation}$$

* (Injection): Take $v_1,v_2\in V$ and suppose that $\rho_\mc{B}\l(v_1\r)=\rho_\mc{B}\l(v_2\r)$. By unique representation, there exist unique coefficients $\beta_{11},\dots,\beta_{1n},\beta_{21},\dots,\beta_{2n}\in K$ such that
$$\begin{equation}
    v_1=\sum_{i=1}^n\beta_{1i}b_i\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ v_2=\sum_{i=1}^n\beta_{2n}b_i,
\end{equation}$$
so $\l[v_1\r]_\mc{B}=\l[v_2\r]_\mc{B}$ implies $\beta_{1i}=\beta_{2i}$ for all $i\in\l\{1,\dots,n\r\}$. The result follows.
* (Surjection): Take $\v{v}\coloneqq\l\langle\alpha_1,\dots,\alpha_n\r\rangle\in K^n$ and observe that $\rho_\mc{B}\l(v\r)$, where $v\coloneqq\sum_{i=1}^n\alpha_ib_i$, is $\v{v}$.<span style="float:right;">$\blacksquare$</span>
