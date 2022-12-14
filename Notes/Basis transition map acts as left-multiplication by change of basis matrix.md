---
mathLink: $\psi_{\mc{B}\to\mc{B}'}$ is represented under standard basis by $\l[\id_V\r]_\mc{B}^{\mc{B}'}$
---

<div class="topSpace"></div>

Date Created: 01/06/2022 15:47:27
Tags: #Proposition

Proved by: [[Linear isomorphism between finite-dim vector spaces and tuple spaces]], [[Action of linear map repr under basis left-multiplication of matrix representation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and let $\mc{B}$ and $\mc{B}'$ be bases thereof. Then the basis transition function $\psi:K^n\to K^n$ acts as left-multiplication of the matrix_ $\l[\id_V\r]_\mc{B}^{\mc{B}'}$_; that is,_ $\psi\l(\v{v}\r)=\l[\id_V\r]_\mc{B}^{\mc{B}'}\v{v}$ _for all $\v{v}\in K^n$._

_In other words, $\psi$ can be represented under the standard basis $\mc{S}$ of $K^n$ as_ $\l[\psi\r]_\mc{S}=\l[\id_V\r]_\mc{B}^{\mc{B}'}$_._

```

_Proof_. Take $\v{v}\in K^n$. Since the coordinate representation $\phi_\mc{B}:V\to K^n$ is an isomorphism, there exists a unique $v\in V$ such that $\l[v\r]_\mc{B}=\v{v}$. Thus
$$\begin{equation}
    \begin{aligned}
        \psi\l(\v{v}\r)&=\psi\l(\l[v\r]_\mc{B}\r) && \textrm{Substitution} \\
        &=\l(\phi_{\mc{B}'}\circ\phi_\mc{B}^{-1}\r)\l(\l[v\r]_\mc{B}\r) && \textrm{Definition of $\psi$} \\
        &=\phi_{\mc{B}'}\l(\phi_\mc{B}^{-1}\l(\l[v\r]_\mc{B}\r)\r) && \textrm{Definition of $\circ$} \\
        &=\phi_{\mc{B}'}\l(v\r) && \l[v\r]_\mc{B}=\phi_\mc{B} \\
        &=\l[v\r]_{\mc{B}'} && \textrm{Definition of $\phi_{\mc{B}'}$} \\
        &=\l[\id_V\l(v\r)\r]_{\mc{B}'} && \textrm{Definition of $\id_V$} \\
        &=\l[\id_V\r]_\mc{B}^{\mc{B}'}\l[v\r]_\mc{B} && \textrm{Action of linear map} \\
        &=\l[\id_V\r]_\mc{B}^{\mc{B}'}\v{v}. && \textrm{Substitution}
    \end{aligned}
\end{equation}$$
Observe then that
$$\begin{equation}
    \begin{aligned}
        \l[\psi\r]_\mc{S}\v{v}&=\l[\psi\r]_\mc{S}\l[\v{v}\r]_\mc{S} && \v{v}\in K^n\textrm{; $\mc{S}$ standard} \\
        &=\l[\psi\l(\v{v}\r)\r]_\mc{S} && \textrm{Action of linear map} \\
        &=\psi\l(\v{v}\r) && \psi\l(\v{v}\r)\in K^n\textrm{; $\mc{S}$ standard}\\
        &=\l[\id_V\r]_\mc{B}^{\mc{B}'}\v{v}, && \textrm{Computation above}
    \end{aligned}
\end{equation}$$
and since $\v{v}$ is arbitrary, the results follow.<span style="float:right;">$\blacksquare$</span>
