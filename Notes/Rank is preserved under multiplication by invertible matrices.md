---
mathLink: $\rank T=\rank PTQ$ for $P,Q$ invertible
---

<div class="topSpace"></div>

Date Created: 05/06/2022 20:40:10
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Linear Invertibility Theorem]], [[Linear isomorphism preserve dimensions of subspaces]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ and $W$ be finite-dimensional vector spaces, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and let $T\in\Hom\l(V,W\r)$. Then, for all $Q\in\End\l(V\r)$ and $P\in\End\l(W\r)$, we have $\rank TQ=\rank T$ and $\rank PT=\rank T$. Therefore, we also have $\rank PTQ=\rank T$.

```

_Proof_. The last result follows directly since $\rank PTQ=\rank PT=\rank T$.
* ($\rank TQ=\rank T$): Observe that
$$\begin{equation}
    \rank TQ=\dim\im\l(TQ\r)=\dim\im_T\!\l(\im_Q\!\l(V\r)\r)=\dim\im_T\!\l(V\r)=\dim\im T=\rank T.
\end{equation}$$
* ($\rank PT=\rank T$): Similarly, we have $\rank PT=\dim\im_P\!\l(\im_T\!\l(V\r)\r)$. But $P$ is invertible, and since $\im_T\!\l(V\r)$ is a linear subspace of $W$, we see that
$$\begin{equation}
    \dim\im_P\!\l(\im_T\!\l(V\r)\r)=\dim\im_T\!\l(V\r)
\end{equation}$$
and the result follows as before.<span style="float:right;">$\blacksquare$</span>
