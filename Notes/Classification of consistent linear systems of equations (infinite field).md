<br />
<br />

Date Created: 26/03/2022 23:01:01
Tags: #Proposition #Open 

Proved by: [[Gaussian Elimination]], [[Gauss-Jordan Elimination]], [[Row-equivalent augmented matrices implies equivalent linear systems]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be an infinite field and consider any consistent linear system_
$$\begin{equation}
    \v{A}\v{x}=\v{b}\ \ \ \ \Leftrightarrow\ \ \ \ \l\{\begin{alignedat}{7}
        &A_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&A_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{A_{11}x_1}&&&&&&&&\vdotswithin{A_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &A_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&A_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. Then the system has either a unique solution or infinitely-many solutions._

```

_Proof_. Let $\v{R}\coloneqq\rref\l(\v{A}\r)$ be of rank $r$, so either $r<n$ or $r=n$, and let $\l\langle s_1,\dots,s_n\r\rangle$ be a solution of $\v{R}\v{x}=\v{z}$ where $\v{z}$ is the matrix obtained by applying the same elementary row operations that reduces $\v{A}$ to $\v{R}$.
* If $r<n$, then $\v{R}$ has $\l(n-r\r)$-many non-pivot columns. By Gaussian (or Gauss-Jordan) Elimination, each non-pivot column corresponds to an arbitrary parameter and thus there are $\l(n-r\r)$-many arbitrary $s_\alpha\textrm{'}$s. Since $\l|K\r|=\infty$, these choices correspond to infinitely-many solutions.

* If $r=n$, then all columns of $\v{R}$ are pivot columns so each $s_j$ for $j\in\l\{1,\dots,n\r\}$ is uniquely determined.

Since $\l[\v{R}\mid\v{z}\r]\sim\l[\v{A}\mid\v{b}\r]$, we see that the systems $\v{R}\v{x}=\v{z}$ and $\v{A}\v{x}=\v{b}$ are equivalent and hence has the same solutions.<span style="float:right;">$\blacksquare$</span>
