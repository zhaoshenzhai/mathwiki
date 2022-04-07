---
alias: auto_aliasing
---

<br />
<br />

Date Created: 07/04/2022 06:19:06
Tags: #Proposition #Closed

Proved by: [[Elementary row operation is left-multiplication by its elementary matrix]], [[Matrix multiplication is associative]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for all $A,B\in\mat{m\times n}{K}$, $B\sim A$ iff there exist elementary matrices $E_1,\dots,E_k\in\mat{m}{K}$ such that_
$$\begin{equation}
    B=\l(E_k\times\cdots\times E_1\r)\times A.
\end{equation}$$

```

_Proof_.
* ($\Rightarrow$): Since $B\sim A$, there exist elementary row operations
$$\begin{equation}
e_1,\dots,e_k:\bigcup_{j\in\N}\mat{m\times j}{K}\to\bigcup_{j\in\N}\mat{m\times j}{K}
\end{equation}$$
such that $B=\l(e_k\circ\cdots\circ e_1\r)\l(A\r)$. Let $E_i\coloneqq e_i\l(I_m\r)$ be elementary matrices for all $i\in\l\{1,\dots,m\r\}$, and since $E_iA=e_i\l(A\r)$, we have that
$$\begin{equation}
    B=\l(E_k\times\cdots\times E_1\r)\times A.
\end{equation}$$

* ($\Leftarrow$): For all $i\in\l\{1,\dots,k\r\}$, let
$$\begin{equation}
e_i:\bigcup_{j\in\N}\mat{m\times j}{K}\to\bigcup_{j\in\N}\mat{m\times j}{K}
\end{equation}$$
be the elementary row operation corresponding to the elementary matrix $E_i$, so $E_iA=e_i\l(A\r)$. Applying the matrix multiplication from right to left by reassociating, we see that
$$\begin{equation}
    B=\l(e_k\circ\cdots\circ e_1\r)\l(A\r)
\end{equation}$$
and thus $B\sim A$.<span style="float:right;">$\blacksquare$</span>
