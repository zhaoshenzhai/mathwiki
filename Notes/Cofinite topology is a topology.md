<div class="topSpace"></div>

Date Created: 23/01/2022 19:53:04
Tags: #Proposition #Closed 

Proved by: [[De Morgan's Laws]], [[Interection of finite sets is finite]], [[Finite union of finite sets is finite]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. Then the cofinite topology_
$$\begin{equation}
    \mc{T}_\textrm{cf}=\l\{U\in\pow\l(X\r)\mid\l(U=\em\r)\lor\l(X\setcomp U\textrm{\it{ is finite}}\r)\r\}
\end{equation}$$
_is a topology on $X$._

```

_Proof_. We verify the axioms for a topology on $X$:
* ($\axitop[1]$): $\em\in\mc{T}_\textrm{cf}$ by definition and $X\setcomp X=\em$ is finite.
* ($\axitop[2]$): Let $\mc{U}\subseteq\mc{T}_\textrm{cf}$. If $\mc{U}=\em$, then $\bigcup\mc{U}=\em\in\mc{T}_\textrm{cf}$. Otherwise, using De Morgan's Laws, we have
$$\begin{equation}
    X\setcomp\bigcup\mc{U}=\bigcap\l\{X\setcomp U\mid U\in\mc{U}\r\}.
\end{equation}$$
An arbitrary intersection of finite sets is finite, so $\bigcup\mc{U}\in\mc{T}_\textrm{cf}$.
* ($\axitop[3]$): Let $\mc{U}\subseteq\mc{T}_\textrm{cf}$ be non-empty and finite. Using De Morgan's Laws again, we have
$$\begin{equation}
    X\setcomp\bigcap\mc{U}=\bigcup\l\{X\setcomp U\mid U\in\mc{U}\r\}.
\end{equation}$$
A finite union of finite sets is finite, so $\bigcap\mc{U}\in\mc{T}_\textrm{cf}$.<span style="float:right;">$\blacksquare$</span>
