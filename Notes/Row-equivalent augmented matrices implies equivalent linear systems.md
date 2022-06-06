---
alias: auto_aliasing
---

<br />
<br />

Date Created: 23/03/2022 22:18:42
Tags: #Proposition #Closed

Proved by: [[Elementary operations act as multiplication by its elementary matrix]], [[Elementary matrices and operations have inverses of the same type]], [[Product of invertible matrices is invertible]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider two $m\times n$ linear systems $A\v{x}=\v{b}$ and $A'\v{x}=\v{b}'$. If $\l[A'\mid\v{b}'\r]\sim\l[A\mid\v{b}\r]$, then the two linear systems are equivalent._

```

_Proof_. We shall prove that the system $\l(CA\r)\v{x}=C\v{b}$ is equivalent to $A\v{x}=\v{b}$ for all invertible matrices $C\in\mat{m}{K}$, for then since $\l[A'\mid\v{b}'\r]\sim\l[A\mid\v{b}\r]$, there exist elementary row operations $e_1,\dots,e_k:\mat{m\times n}{K}\to\mat{m\times n}{K}$, and hence elementary matrices $E_1,\dots,E_k\in\mat{m\times n}{K}$, such that
$$\begin{equation}
    \begin{aligned}
        \l[A'\mid\v{b}'\r]&=E_k\times\cdots\times E_1\times\l[A\mid\v{b}\r] && \textrm{Definition of row-equivalence} \\
        &=C\l[A\mid\v{b}\r] && \textrm{Set }C\coloneqq E_k\times\cdots\times E_1 \\
        &=\l[CA\mid C\v{b}\r]. && \textrm{Matrix multiplication}
    \end{aligned}
\end{equation}$$
Therefore $A'=CA$ and $\v{b}'=C\v{b}$, and since $C$ is invertible, the systems $A\v{x}=\v{b}$ and $A'\v{x}=\v{b}'$ are equivalent.

Let $S$ and $S'$ be solution sets of $A\v{x}=\v{b}$ and $\l(CA\r)\v{x}=C\v{b}$; we wish to show that $S=S'$.
* ($\subseteq$): Take $\v{s}\in S$, so $A\v{s}=\v{b}$ and hence $\l(CA\r)\v{s}=C\l(A\v{s}\r)=C\v{b}$. Thus $\v{s}\in S'$.
* ($\supseteq$): Take $\v{s}\in S'$, so $\l(CA\r)\v{s}=C\v{b}$. Left-multiplying both sides by $C^{-1}$ and reassociating, we obtain $A\v{s}=\v{b}$ and hence $\v{s}\in S$.<span style="float:right;">$\blacksquare$</span>
