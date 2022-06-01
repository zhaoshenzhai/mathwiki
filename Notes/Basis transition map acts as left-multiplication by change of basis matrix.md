---
custom_alias: $\psi_{\mc{B}\to\mc{B}'}\!\l(\l[v\r]_\mc{B}\r)=\l[v\r]_{\mc{B}'}=Q_{\mc{B}\to\mc{B}'}\l[v\r]_\mc{B}$
---

<br />
<br />

Date Created: 01/06/2022 15:47:27
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and let $\mc{B}$ and $\mc{B}'$ be bases thereof. Then the basis transition function $\psi:K^n\to K^n$ acts as left-multiplication of the matrix_ $\l[\id_V\r]_\mc{B}^{\mc{B}'}$_; that is,_ $\psi\l(\v{v}\r)=\l[\id_V\r]_\mc{B}^{\mc{B}'}\v{v}$ _for all $\v{v}\in K^n$._

```

_Proof_. Take $\v{v}\in K^n$. Since the coordinate representation $\phi_\mc{B}:V\to K^n$ is an isomorphism, there exists a unique $v\in V$ such that $\l[v\r]_\mc{B}=\v{v}$. Thus
$$\begin{align}
    \psi\l(\v{v}\r)&=\psi\l(\l[v\r]_\mc{B}\r) && \textrm{Substitution} \\
    &=\l(\phi_{\mc{B}'}\circ\phi_\mc{B}^{-1}\r)\l(\l[v\r]_\mc{B}\r) && \textrm{Definition of $\psi$} \\
    &=\phi_{\mc{B}'}\l(\phi_\mc{B}^{-1}\l(\l[v\r]_\mc{B}\r)\r) && \textrm{Definition of $\circ$} \\
    &=\phi_{\mc{B}'}\l(v\r) && \l[v\r]_\mc{B}=\phi_\mc{B} \\
    &=\l[v\r]_{\mc{B}'} && \textrm{Definition of $\phi_{\mc{B}'}$} \\
    &=\l[\id_V\l(v\r)\r]_{\mc{B}'} && \textrm{Definition of $\id_V$} \\
    &=\l[\id_V\r]_\mc{B}^{\mc{B}'}\l[v\r]_\mc{B} && \textrm{Action of linear map} \\
    &=\l[\id_V\r]_\mc{B}^{\mc{B}'}\v{v}. && \textrm{Substitution}\qedin
\end{align}$$
