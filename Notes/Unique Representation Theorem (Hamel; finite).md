<br />
<br />

Date Created: 24/04/2022 17:00:09
Tags: #Theorem #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: [[Unique Representation Theorem (Hamel; arbitrary)]]
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Unique Representation Theorem w.r.t. finite Hamel basis).

_Let $K$ be a field and consider a subset_ $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}\subseteq V$ _of a finite-dimensional vector space $V$ over $K$ where $n\coloneqq\dim V$. Then $\mc{B}$ is a (Hamel) basis iff every vector $v\in V$ can be uniquely represented as a linear combination of the finite sequence $\l\langle b_1,\dots,b_n\r\rangle$; formally, iff_
$$\begin{equation}
    \fa v\in V,\ex!\alpha_1,\dots,\alpha_n:v=\sum_{i=1}^n\alpha_ib_i.
\end{equation}$$

```

_Proof_.
* ($\Rightarrow$): Take $v\in V$. Since $\span\mc{B}=V$, we know that $v$ can be expressed as a linear combination of vectors in $\mc{B}$; we wish to prove that such a representation is unique. Assume, for sake of contradiction, that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_ib_i=\sum_{i=1}^n\beta_ib_i
\end{equation}$$
for some distinct set of coefficients $\alpha_1,\dots,\alpha_n\in K$ and $\beta_1,\dots,\beta_n\in K$. Rearranging, we have that
$$\begin{equation}
    0=\sum_{i=1}^n\l(\alpha_i-\beta_i\r)b_i,
\end{equation}$$
but since $\mc{B}$ is linearly independent, this forces $\alpha_i=\beta_i$ for all $i\in\l\{1,\dots,n\r\}$.

* ($\Leftarrow$): Take $v\in V$ and suppose that there exist unique coefficients $\alpha_1,\dots,\alpha_n\in K$ such that $v=\sum_{i=1}^n\alpha_ib_i$. In particular, this shows that $v\in\span\mc{B}$, so $\mc{B}$ is a spanning set of $V$. To prove linear independence, observe that we can write the zero vector as
$$\begin{equation}
    0=\sum_{i=1}^n0b_i,
\end{equation}$$
so if $\sum_{i=1}^n\beta_ib_i=0$ for any coefficients $\beta_1,\dots,\beta_n\in K$, the uniqueness of the representation of $0$ forces each $\beta_i=0$.<span style="float:right;">$\blacksquare$</span>
