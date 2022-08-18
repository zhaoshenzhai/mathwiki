---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/06/2022 19:32:00
Tags: #Proposition

Proved by: [[Action of linear map repr under basis left-multiplication of matrix representation]], [[Linear isomorphism between finite-dim vector spaces and tuple spaces]], [[Linear isomorphism preserve dimensions of subspaces]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and let $\mc{B}$ and $\mc{C}$ be bases of $V$ and $W$, respectively. Then, for every linear map $T:V\to W$, we have_
$$\begin{equation}
    \rank T=\rank\l[T\r]_\mc{B}^\mc{C}.
\end{equation}$$

```

_Proof_. Let $A\coloneqq\l[T\r]_\mc{B}^\mc{C}$; we wish to prove that $\rank T=\rank L_A$. To this end, observe that the diagram

<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-05-29_220733/image.svg", width=170></center>

commutes, so
$$\begin{equation}
    \begin{aligned}
        \rank L_A&=\dim\im L_A && \textrm{Definition of $\rank$} \\
        &=\dim\im\l(\phi_\mc{C}\circ T\circ\phi_\mc{B}^{-1}\r) && \textrm{Diagram commutes} \\
        &=\dim\im_{\phi_\mc{C}}\l(\im_T\l(\im_{\phi_\mc{B}^{-1}}\l(K^n\r)\r)\r) && \textrm{Image of compositions} \\
        &=\dim\im_{\phi_\mc{C}}\l(\im_T\l(V\r)\r) && \phi_\mc{B}^{-1}:K^n\simto V \\
        &=\dim\im_{\phi_\mc{C}}\l(\im T\r). && \textrm{Definition of image}
    \end{aligned}
\end{equation}$$
But $\phi_\mc{C}:W\simto K^m$ and $\im T$ is a linear subspace of $W$, so $\dim\im T=\dim\im_{\phi_\mc{C}}\l(\im T\r)$. The result follows.<span style="float:right;">$\blacksquare$</span>
