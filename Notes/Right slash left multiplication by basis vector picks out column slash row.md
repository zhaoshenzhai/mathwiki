---
custom_alias: Right$\slash$left multiplication by basis vector picks out column$\slash$row
---

<br />
<br />

Date Created: 23/05/2022 17:27:20
Tags: #Proposition #Closed

Proved by: [[Algebraic identities of matrix operations]], [Matrix multiplication (columns$\slash$rows)](Matrix%20multiplication%20(columns%20slash%20rows).md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$, we have_
$$\begin{equation}
    A\v{e}_j=\v{a}_{\blob;j}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \v{f}_iA=\v{a}_{i;\blob}
\end{equation}$$
_where $\v{e}_j\in\mat{n\times1}{K}$ and $\v{f}_i\in\mat{1\times m}{K}$ are the standard basis vectors for $K^n$ (as columns) and $K^m$ (as rows), respectively._

```

_Proof_. Observe that the $j^\textrm{th}$ column and the $i^\textrm{th}$ row of $AI_n=A=I_mA$ are
$$\begin{equation}
    \begin{aligned}
        \v{a}_{\blob;j}&=A\l(I_n\r)_{\blob;j} \\
        &=A\v{e}_j
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \v{a}_{i;\blob}&=\l(I_m\r)_{i;\blob}A && \textrm{Definition of matrix multiplication (columns/rows)} \\
        &=\v{f}_iA, && \v{e}_j=\l(I_n\r)_{\blob;j}\textrm{ and }\v{f}_i=\l(I_m\r)_{i;\blob}
    \end{aligned}
\end{equation}$$
respectively.<span style="float:right;">$\blacksquare$</span>
