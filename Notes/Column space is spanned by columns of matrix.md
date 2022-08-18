<div class="topSpace"></div>

Date Created: 05/06/2022 21:30:06
Tags: #Proposition

Proved by: [[Image of linear map is spanned by image of spanning set]], [[Right slash left multiplication by basis vector picks out column slash row]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N^\ast$. Letting $\v{a}_1,\dots,\v{a}_n\in K^m$ be the columns of $A$, we have_
$$\begin{equation}
    \col A=\span\l\{\v{a}_1,\dots,\v{a}_n\r\}.
\end{equation}$$
_In other words, $\rank A=\dim\col A=\dim\span\l\{\v{a}_1,\dots,\v{a}_n\r\}$ is the maximum number of linearly independent columns of $A$._

```

_Proof_. Let $\mc{B}\coloneqq\l\{\v{e}_1,\dots,\v{e}_n\r\}$ be the standard basis of $K^n$ and observe that
$$\begin{align}
    \col A&=\im L_A && \textrm{Definition of $\col$} \\
    &=\span\im_{L_A}\!\mc{B} && \textrm{Image is spanned by image of spanning set} \\
    &=\span\l\{L_A\l(\v{e}_1\r),\dots,L_A\l(\v{e}_n\r)\r\} && \textrm{Definition of $\im$} \\
    &=\span\l\{A\v{e}_1,\dots,A\v{e}_n\r\} && \textrm{Definition of $L_A$} \\
    &=\span\l\{\v{a}_1,\dots,\v{a}_n\r\}. && \textrm{Left-multiplication by basis picks out column}\qedin
\end{align}$$
