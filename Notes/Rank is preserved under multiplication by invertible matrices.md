---
mathLink: $\rank A=\rank PAQ$ for $P,Q$ invertible
---

<div class="topSpace"></div>

Date Created: 05/06/2022 20:40:10
Tags: #Proposition

Proved by: [[Basic properties of left-multiplication of matrices]], [[Matrix invertible iff left-multiplication invertible]], [[Linear isomorphism preserve dimensions of subspaces]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N^\ast$. Then, for all invertible matrices $P\in\mat{m}{K}$ and $Q\in\mat{n}{K}$, we have_
$$\begin{equation}
    \rank AQ=\rank A\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \rank PA=\rank A.
\end{equation}$$
_Therefore, we also have $\rank PAQ=\rank A$._

```

_Proof_. The last result follows directly since
$$\begin{equation}
    \rank PAQ=\rank PA=\rank A.
\end{equation}$$
* ($\rank AQ=\rank A$): Since $\rank AQ=\rank L_{AQ}$, we have
$$\begin{equation}
    \begin{aligned}
        \rank AQ&=\dim\im L_{AQ} && \textrm{Definition of $\rank$} \\
        &=\dim\im\l(L_A\circ L_Q\r) && \textrm{Left-multiplication respects matrix multiplication} \\
        &=\dim\im_{L_A}\!\l(\im_{L_Q}\!\l(K^n\r)\r) && \textrm{Image of composition} \\
        &=\dim\im_{L_A}\!\l(K^n\r) && L_Q\textrm{ is invertible since $Q$ is invertible} \\
        &=\dim\im L_A && \textrm{Definition of image} \\
        &=\rank A. && \textrm{Definition of $\rank$}
    \end{aligned}
\end{equation}$$

* ($\rank PA=\rank A$): Similarly, we have
$$\begin{equation}
    \rank PA=\dim\im_{L_P}\!\l(\im_{L_A}\!\l(K^n\r)\r).
\end{equation}$$
Observe that $L_P:K^m\to K^m$ is invertible, and since $\im_{L_A}\!\l(K^n\r)$ is a linear subspace of $K^m$, we see that
$$\begin{equation}
    \dim\im_{L_P}\!\l(\im_{L_A}\!\l(K^n\r)\r)=\dim\im_{L_A}\!\l(K^n\r)
\end{equation}$$
and hence the result follows as before.<span style="float:right;">$\blacksquare$</span>
