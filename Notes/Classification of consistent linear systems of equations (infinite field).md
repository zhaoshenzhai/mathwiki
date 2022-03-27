<br />
<br />

Date Created: 26/03/2022 23:01:01
Tags: #Proposition #Closed 

Proved by: [[Gaussian Elimination]], [[Gauss-Jordan Elimination]]
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

_Proof_. Let $\v{R}\coloneqq\rref\l(\v{A}\r)$ be of rank $r$, so either $r<n$ or $r=n$, and let $\l\langle s_1,\dots,s_n\r\rangle$ be a solution of $\v{A}\v{x}=\v{b}$.
* If $r<n$, then $\v{R}$ has $\l(n-r\r)$-many non-pivot columns. By Gaussian (or Gauss-Jordan) Elimination, each non-pivot column corresponds to an arbitrary parameter and thus there are $\l(n-r\r)$-many arbitrary $s_\alpha\textrm{'}$s. Since $\l|K\r|=\infty$, these choices correspond to infinitely-many solutions.

* If $r=n$, then all columns of $\v{R}$ are pivot columns so each $s_j$ for $j\in\l\{1,\dots,n\r\}$ is uniquely determined.<span style="float:right;">$\blacksquare$</span>
