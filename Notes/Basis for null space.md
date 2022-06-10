<br />
<br />

Date Created: 13/04/2022 21:05:54
Tags: #Proposition #Closed

Proved by: [[Dimension Theorem]], [Rank of matrix in RREF is $|$pivot columns$|\slash|$non-zero rows$|$](Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md), [Spanning set $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis](Spanning%20subset%20with%20same%20cardinality%20as%20dimension%20(finite)%20is%20a%20basis.md)
Justifications: [[Gaussian Elimination]]

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ with $r\coloneqq\rank A$ for some fixed $m,n,r\in\N^\ast$. Set $B\coloneqq\rref A$ and let each $k_i\in K$ for all $i\in\l\{1,\dots,r\r\}$ denote the pivot column in $B$ corresponding to its $i^\textrm{\it{th}}$ row. For convenience, we shall denote_
$$\begin{equation}
    \mc{K}\coloneqq\l\{k\in\N\mid k\textrm{\it{ is a pivot column of }}B\r\}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \mc{J}\coloneqq\l\{1,\dots,n\r\}\setminus\mc{K}.
\end{equation}$$
_By Gaussian Elimination, there exists a set_ $\l\{\v{u}_j\r\}_{j\in\mc{J}}\subseteq K^n$ _such that every $\v{s}\in\nullsp A$ can be expressed as_
$$\begin{equation}
    \v{s}=\sum_{j\in\mc{J}}t_j\v{u}_j
\end{equation}$$
_for some $t_j\in K$. We claim that_ $\l\{\v{u}_j\r\}_{j\in\mc{J}}$ _forms a basis for $\nullsp A$._

```

_Proof_. By Gaussian Elimination, the vectors $\l\{\v{u}_j\r\}_{j\in\mc{J}}$ span $\nullsp A$. But since
$$\begin{equation}
    \begin{aligned}
        \dim\nullsp A&=n-\rank A && \textrm{Dimension Theorem} \\
        &=n-\l|\mc{K}\r| && \rank A\textrm{ is the number of pivot columns of }\rref A \\
        &=\l|\mc{J}\r|, && \textrm{Definition of $\mc{J}$}
    \end{aligned}
\end{equation}$$
those vectors form a basis of $\nullsp A$.<span style="float:right;">$\blacksquare$</span>
