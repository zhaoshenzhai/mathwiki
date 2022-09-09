<div class="topSpace"></div>

Date Created: 07/05/2022 20:28:12
Tags: #Theorem

Lemma: _Not Applicable_
Proved by: [[Dimension of subspace less than dimension of vector space (finite-dim.; strict iff proper)]], [[Linearly independent set extends to a basis]], [[Image of linear map is spanned by image of spanning set]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. If $V$ is finite-dimensional, then_
$$\begin{equation}
    \dim\ker T+\dim\im T=\dim V.
\end{equation}$$
_In other words, we have $\nullity T+\rank T=\dim V$._

```

_Proof_. Let $\iota\coloneqq\dim\im T$, $\kappa\coloneqq\dim\ker T$, and $\delta\coloneqq\dim V$. Since $\ker T$ is a subspace of $V$, we see that $\kappa\leq\delta$ is finite so we may let $\mc{B}_\kappa\coloneqq\l\{b_1,\dots,b_\kappa\r\}$ be a basis of $\ker T$ and extend $\mc{B}_\kappa$ to a basis $\mc{B}_\delta\coloneqq\mc{B}_\kappa\cup\l\{b_{\kappa+1},\dots,b_\delta\r\}$ of $V$. It suffices to show that
$$\begin{equation}
    \mc{B}_\iota\coloneqq\l\{T\l(b_{\kappa+1}\r),\dots,T\l(b_\delta\r)\r\}
\end{equation}$$
forms a basis of $\im T$, for then each $T\l(b_i\r)$ is distinct and $\dim\im T=\dim V-\dim\ker T$.
* ($\span\mc{B}_\iota=\im T$): Observe that
$$\begin{equation}
    \begin{aligned}
        \im T&=\span\l(\im_T\mc{B}_\delta\r) && \textrm{$\im T$ is spanned image of spanning sets} \\
        &=\span\l[\im_T\l(\mc{B}_\kappa\cup\l\{b_{\kappa+1},\dots,b_\delta\r\}\r)\r] && \textrm{Substitution} \\
        &=\span\l[\im_T\l(\mc{B}_\kappa\r)\cup\im_T\l\{b_{\kappa+1},\dots,b_\delta\r\}\r] && \textrm{Image of union is union of images} \\
        &=\span\l[\l\{0\r\}\cup\im_T\l\{b_{\kappa+1},\dots,b_\delta\r\}\r] && \mc{B}_\kappa\subseteq\ker T \\
        &=\span\l(\im_T\l\{b_{\kappa+1},\dots,b_\delta\r\}\r) && 0\textrm{ is span-redundant}\\
        &=\span\mc{B}_\iota. && \textrm{Substitution}
    \end{aligned}
\end{equation}$$
* ($\mc{B}_\iota$ is linearly independent): Suppose that
$$\begin{equation}
    \sum_{\mathclap{i=\kappa+1}}^\delta\alpha_iT\l(b_i\r)=0
\end{equation}$$
for some $\alpha_{\kappa+1},\dots,\alpha_\delta\in K$. Since $T$ is linear, this is equivalent to
$$\begin{equation}
    T\l(\sum_{i=\kappa+1}^\delta\!\alpha_ib_i\r)=0,
\end{equation}$$
which implies that
$$\begin{equation}
    \sum_{\mathclap{i=\kappa+1}}^\delta\alpha_ib_i\in\ker T.
\end{equation}$$
Since $\mc{B}_\kappa$ is a basis for $\ker T$, there exist $\beta_1,\dots,\beta_\kappa\in K$ such that
$$\begin{equation}
    \sum_{\mathclap{i=\kappa+1}}^\delta\alpha_ib_i=\sum\limits_{i=1}^\kappa\beta_ib_i,
\end{equation}$$
so
$$\begin{equation}
    \sum\limits_{i=1}^\kappa\beta_ib_i+\sum_{\mathclap{i=\kappa+1}}^\delta\l(-\alpha_i\r)b_i=0.
\end{equation}$$
Since $\mc{B}_\delta$ is a basis of $V$, it is linearly independent and hence $\alpha_i=0$ for all $i\in\l\{\kappa+1,\dots,\delta\r\}$. The result follows.<span style="float:right;">$\blacksquare$</span>
