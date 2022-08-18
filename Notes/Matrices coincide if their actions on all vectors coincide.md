<div class="topSpace"></div>

Date Created: 02/04/2022 00:00:19
Tags: #Proposition

Proved by: [[Right slash left multiplication by basis vector picks out column slash row]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for all $A,B\in\mat{m\times n}{K}$,_
$$\begin{equation}
    \l(\fa\v{x}\in K^n:A\v{x}=B\v{x}\r)\ \ \ \ \Rightarrow\ \ \ \ A=B.
\end{equation}$$

```

_Proof_. Let $\v{a}_j\coloneqq\l[a_{1j}\ \ \cdots\ \ a_{mj}\r]^\trans$ and $\v{b}_j\coloneqq\l[b_{1j}\ \ \cdots\ \ b_{mj}\r]^\trans$ be the $j^\textrm{th}$ column of $A$ and $B$, respectively; it suffices to show that $\v{a}_j=\v{b}_j$ for all $j\in\l\{1,\dots,n\r\}$, for then all entries of $A$ and $B$ coincide.

To this end, fix $j\in\l\{1,\dots,n\r\}$ and let $\v{e}_j\in\mat{n\times1}{K}$ be the $j^\textrm{th}$ standard basis vector of $K^n$. Observe that
$$\begin{align}
    \v{a}_j&=A\v{e}_j && \textrm{Right multiplication by $\v{e}_j$ picks out $j^\textrm{th}$ column} \\
    &=B\v{e}_j && \textrm{Hypothesis} \\
    &=\v{b}_j. && \textrm{Right multiplication by $\v{e}_j$ picks out $j^\textrm{th}$ column} \qedin
\end{align}$$
