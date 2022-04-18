<br />
<br />

Date Created: 18/02/2022 16:18:53
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t. bases]], [[Product topology (basis; component from bases)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\langle I^2,\mc{T}_\textrm{or}\r\rangle$ _be the ordered square and let $<$ be the standard ordering on $\R$ restricted to $I$. Then_ $\mc{T}_\textrm{or}$ _is not comparable with the product topology_ $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(<\r)^2$ _on $I^2$._

```

_Proof_. Let $\mc{B}_\textrm{or}$ and $\mc{B}_\textrm{pr}$ be bases for $\mc{T}_\textrm{or}$ and $\mc{T}_\textrm{pr}$, respectively. Here, their elements are represented by blue and green intervals, respectively.
* ($\mc{T}_\textrm{or}\not\subseteq\mc{T}_\textrm{pr}$): Take $\l\langle x,y\r\rangle\coloneqq\l\langle0.5,0.5\r\rangle\in I^2$ and let
$$\begin{equation}
    B_\textrm{or}\coloneqq\l(\l\langle0.5,0.2\r\rangle,\l\langle0.5,0.8\r\rangle\r)\in\mc{B}_\textrm{or}
\end{equation}$$

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-19_122650/image.svg", width=160></center>

which certainly contains $\l\langle x,y\r\rangle$. Any basis $B_\textrm{pr}\in\mc{B}_\textrm{pr}$ containing $\l\langle x,y\r\rangle$ necessarily contains some point $\l\langle x',y\r\rangle\in B_\textrm{pr}$ where $x'\neq x$ but $\l\langle x',y\r\rangle\not\in B_\textrm{or}$, so $B_\textrm{pr}\not\subseteq B_\textrm{or}$ and thus $\mc{T}_\textrm{or}\not\subseteq\mc{T}_\textrm{pr}$.
* ($\mc{T}_\textrm{pr}\not\subseteq\mc{T}_\textrm{or}$): Take $\l\langle x,y\r\rangle\coloneqq\l\langle0.5,0\r\rangle\in I^2$ and let
$$\begin{equation}
    B_\textrm{pr}\coloneqq\l(0.25,0.75\r)\times\l[0,0.5\r)\in\mc{B}_\textrm{pr}
\end{equation}$$

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-19_124825/image.svg", width=160></center>

which certainly contains $\l\langle x,y\r\rangle$. Any $B_\textrm{or}\in\mc{B}_\textrm{or}$ containing $\l\langle x,y\r\rangle$ necessarily contains some $\l\langle x',1\r\rangle\in I^2$ where $x'<x$ but $\l\langle x',1\r\rangle\not\in B_\textrm{pr}$, so $B_\textrm{or}\not\subseteq B_\textrm{pr}$ and thus $\mc{T}_\textrm{pr}\not\subseteq\mc{T}_\textrm{or}$.<span style="float:right;">$\blacksquare$</span>
