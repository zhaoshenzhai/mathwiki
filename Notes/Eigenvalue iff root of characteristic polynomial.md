---
alias: auto_aliasing
---

<br />
<br />

Date Created: 12/06/2022 10:58:02
Tags: #Proposition #Closed

Proved by: [[Algebraic identities of vector spaces]], [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md), [[Matrix Invertibility Theorem]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{n}{K}$ for some fixed $n\in\N^\ast$. Then $\lambda\in K$ is an eigenvalue of $A$ iff $\det\l(A-\lambda I_n\r)=0$._

```

_Proof_. Observe that $\lambda\in K$ is an eigenvalue iff there exists some non-zero $\v{v}\in K^n$ such that $A\v{v}=\lambda\v{v}$, which is equivalent to
$$\begin{equation}
    \begin{aligned}
        A\v{v}-\lambda\v{v}&=\v{0} && \textrm{Cancellation} \\
        A\v{v}-I_n\l(\lambda\v{v}\r)&=\v{0} && \textrm{Insert $I_n$} \\
        A\v{v}-\l(\lambda I_n\r)\v{v}&=\v{0} && \textrm{Compatibility} \\
        \l(A-\lambda I_n\r)\v{v}&=\v{0}. && \textrm{Distribution}
    \end{aligned}
\end{equation}$$
But the existence of some nonzero $\v{v}\in K^n$ such that $\l(A-\lambda I_n\r)\v{v}=\v{0}$ is equivalent to $\nullsp\l(A-\lambda I_n\r)\neq\l\{\v{0}\r\}$, which occurs iff $\det\l(A-\lambda I_n\r)=0$.<span style="float:right;">$\blacksquare$</span>
