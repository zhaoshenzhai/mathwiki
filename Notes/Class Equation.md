<div class="topSpace"></div>

Date Created: 05/05/2023 14:59:43
Tags: #Theorem #Topics/Group_Theory

Proved by: [[Fundamental Theorem of Equivalence Relations]], [[Orbit-Stabilizer Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Class Equation).

_Let $G$ be a finite group acting on a set $X$ and let $x_1,\dots,x_r$ be representatives of distinct conjugacy classes of $G$ not contained in $Z\l(G\r)$. Then_
$$\begin{equation}
    \l|G\r|=\l|Z\l(G\r)\r|+\sum_{i=1}^{r}\l[G:C_G\!\l(x_i\r)\r].
\end{equation}$$

```

_Proof_. Let $Z\l(G\r)\coloneqq\l\{x_{r+1},\dots,x_{r+s}\r\}$ and note that $x\in Z\l(G\r)$ iff $gx=xg$ for all $g\in G$, which occurs iff $Gx=\l\{x\r\}$. Now, since the orbits $Gx$ are elements in the quotient set $G/\!\sim$, we have a partition $X=\coprod_{i=1}^{r+s}Gx_i$ into orbits. Observe then that
$$\begin{equation}
    \l|G\r|=\sum_{i=1}^{r+s}\l|Gx_i\r|=\sum_{i=1}^{r}\l[G:G_{x_i}\r]+\sum_{i=r+1}^{s}1=\l|Z\l(G\r)\r|+\sum_{i=1}^{r}\l[G:G_{x_i}\r]=\l|Z\l(G\r)\r|+\sum_{i=1}^{r}\l[G:C_G\!\l(x_i\r)\r],
\end{equation}$$
where $G_{x_i}=C_G\!\l(x_i\r)$ since the stabilizers of $x_i$ is the set of all $g\in G$ such that $gx_i=x_ig$, which is exactly the centralizer $C_G\!\l(x_i\r)$.<span style="float:right;">$\blacksquare$</span>
