<br />
<br />

Date Created: 08/04/2022 05:48:11
Tags: #Proposition #Closed

Proved by: [[Transposition anti-respects matrix multiplication]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N$. Then, for all invertible matrices $A\in\mat{n}{K}$, its transpose is invertible with inverse_
$$\begin{equation}
    \l(A^\trans\r)^{-1}=\l(A^{-1}\r)^\trans.
\end{equation}$$

```

_Proof_. We verify that $\l(A^{-1}\r)^\trans$ is both a left and a right inverse of $A^\trans$.

$\begin{align}
    \l(A^{-1}\r)^\trans A^\trans&=\l(AA^{-1}\r)^\trans \hspace{0.6in}A^\trans\l(A^{-1}\r)^\trans\hspace{-0.4in}&&=\l(A^{-1}A\r)^\trans && \textrm{Transposition anti-respects matrix multiplication} \\
    &=I^\trans &&=I^\trans && \textrm{Definition of inverse matrix} \\
    &=I &&=I. && \textrm{Identity matrix is symmetric}\qedin
\end{align}$

---

**Remark.** It follows then that for all $A\in\mat{n}{K}$, $A$ is invertible iff $A^\trans$ is.<span style="float:right;">$\blacklozenge$</span>
