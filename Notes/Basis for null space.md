<br />
<br />

Date Created: 13/04/2022 21:05:54
Tags: #Proposition #Closed

Proved by: [[Gaussian Elimination]], [[Dimension Theorem]], [Rank of matrix in RREF is $|$pivot columns$|\slash|$non-zero rows$|$](Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md), [Spanning set $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis](Spanning%20subset%20with%20same%20cardinality%20as%20dimension%20(finite)%20is%20a%20basis.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$. Let $R\coloneqq\rref\l(A\r)$, say with $r$ non-zero rows each with its pivot column $k_i$. For convenience, we shall denote_
$$\begin{equation}
    \mc{K}\coloneqq\l\{k\in\N\mid k\textrm{\it{ is a pivot column}}\r\}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \mc{J}\coloneqq\l\{1,\dots,n\r\}\setminus\mc{K}.
\end{equation}$$
_Then the set_ $\l\{\v{u}_j\r\}_{j\in\mc{J}}$_, defined by_
$$\begin{equation}
    \l(\v{u}_j\r)_\alpha\coloneqq
        \begin{dcases}
            -r_{ij} & \textrm{\it{if\hspace{0.1in}}}\ex i\in\l\{1,\dots,r\r\}:\alpha=k_i \\
            \frac{t_\alpha\delta_{\alpha j}}{t_j} & \textrm{\it{else}}
        \end{dcases}
\end{equation}$$
_for all $j\in\mc{J}$ and $\alpha\in\l\{1,\dots,n\r\}$, form a basis for $\nullsp\l(A\r)$._

```

_Proof_. By Gaussian Elimination, we know that every solution $\v{s}$ of the linear system $A\v{x}=\v{0}$ can be written in the form
$$\begin{equation}
    \v{s}=\v{0}+\sum_{j\in\mc{J}}t_j\v{u}_j=\sum_{j\in\mc{J}}t_j\v{u}_j,
\end{equation}$$
so the $\l|\mc{J}\r|$-many vectors span $\nullsp A$. But since
$$\begin{equation}
    \begin{aligned}
        \dim\nullsp A&=n-\rank A && \textrm{Dimension Theorem} \\
        &=n-\l|\mc{K}\r| && \rank A\textrm{ is the number of pivot columns of }\rref A \\
        &=\l|\mc{J}\r|, && \textrm{Definition of $\mc{J}$}
    \end{aligned}
\end{equation}$$
those vectors form a basis of $\nullsp A$.<span style="float:right;">$\blacksquare$</span>
