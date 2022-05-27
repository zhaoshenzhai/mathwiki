---
alias: auto_aliasing
---

<br />
<br />

Date Created: 07/04/2022 06:19:06
Tags: #Proposition #Closed

Proved by: [[Left-multiplication by elementary matrix is action by its elementary row operation]], [[Algebraic identities of matrix operations]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for all $A,B\in\mat{m\times n}{K}$, $A\sim B$ iff there exist elementary matrices $E_1,\dots,E_k\in\mat{m}{K}$ such that_
$$\begin{equation}
    A=\l(E_k\times\cdots\times E_1\r)\times B.
\end{equation}$$

```

_Proof_.
* ($\Rightarrow$): Since $A\sim B$, there exist elementary row operations
$$\begin{equation}
e_1,\dots,e_k:\bigcup_{j\in\N}\mat{m\times j}{K}\to\bigcup_{j\in\N}\mat{m\times j}{K}
\end{equation}$$
such that $A=\l(e_k\circ\cdots\circ e_1\r)\l(B\r)$. Let $E_i\coloneqq e_i\l(I_m\r)$ be elementary matrices for all $i\in\l\{1,\dots,m\r\}$, and since $E_iB=e_i\l(B\r)$, we have that
$$\begin{equation}
    A=\l(E_k\times\cdots\times E_1\r)\times B.
\end{equation}$$

* ($\Leftarrow$): For all $i\in\l\{1,\dots,k\r\}$, let
$$\begin{equation}
e_i:\bigcup_{j\in\N}\mat{m\times j}{K}\to\bigcup_{j\in\N}\mat{m\times j}{K}
\end{equation}$$
be the elementary row operation corresponding to the elementary matrix $E_i$, so $E_iB=e_i\l(B\r)$. Applying the matrix multiplication from right to left by reassociating, we see that
$$\begin{equation}
    A=\l(e_k\circ\cdots\circ e_1\r)\l(B\r)
\end{equation}$$
and thus $A\sim B$.<span style="float:right;">$\blacksquare$</span>
