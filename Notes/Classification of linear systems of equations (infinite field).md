<br />
<br />

Date Created: 26/03/2022 23:01:01
Tags: #Proposition #Later/Linear_Algebra/Rank

Proved by: [[Gaussian Elimination]], [[Gauss-Jordan Elimination]], [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be an infinite field and consider any linear system_
$$\begin{equation}
    A\v{x}=\v{b}\ \ \ \ \Leftrightarrow\ \ \ \ \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. Then the system is either inconsistent, has either a unique solution, or has infinitely-many solutions._

```

_Proof_. Let $R\coloneqq\rref\l(A\r)$ be of (column) rank $r$, so either $r<n$ or $r=n$, and let $\v{z}$ be the matrix obtained by applying the same elementary row operations that reduces $A$ to $R$. If there exists $i\in\l\{r+1,\dots,m\r\}$ such that $z_i\neq0$, then the system is inconsistent; otherwise, let $\l\langle s_1,\dots,s_n\r\rangle$ be a solution thereof.
* If $r<n$, then $R$ has $\l(n-r\r)$-many non-pivot columns. By Gaussian (or Gauss-Jordan) Elimination, each non-pivot column corresponds to an arbitrary parameter and thus there are $\l(n-r\r)$-many arbitrary $s_\alpha\textrm{'}$s. Since $\l|K\r|=\infty$, these choices correspond to infinitely-many solutions.

* If $r=n$, then all columns of $R$ are pivot columns so each $s_j$ for $j\in\l\{1,\dots,n\r\}$ is uniquely determined.

Since $\l[R\mid\v{z}\r]\sim\l[A\mid\v{b}\r]$, we see that the systems $R\v{x}=\v{z}$ and $A\v{x}=\v{b}$ are equivalent and hence has the same solution(s).<span style="float:right;">$\blacksquare$</span>
