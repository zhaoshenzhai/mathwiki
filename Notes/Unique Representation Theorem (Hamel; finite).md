<br />
<br />

Date Created: 24/04/2022 17:00:09
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: [[Unique Representation Theorem (Hamel; arbitrary)]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

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
    0=\sum_{i=1}^n\l(\alpha_i-\beta_i\r)b_i
\end{equation}$$
