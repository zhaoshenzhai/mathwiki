<div class="topSpace"></div>

Date Created: 12/02/2022 12:30:57
Tags: #Proposition #Closed 

Proved by: [[Subspace topology (basis)]], [[Product topology (basis; component from bases)]], [[Cartesian product of intersections]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}_X}$ and $\tpl{Y,\mc{T}_Y}$ be topological spaces and fix $S\subseteq X$ and $T\subseteq Y$. Then_ $\l.\l(\mc{T}_X\times\mc{T}_Y\r)\r|_{S\times T}=\l.\mc{T}_X\r|_S\times\l.\mc{T}_Y\r|_T$_._

```

_Proof_. Let $\mc{B}_\textrm{sb}$ and $\mc{B}_\textrm{pr}$ be bases for the topologies $\l.\l(\mc{T}_X\times\mc{T}_Y\r)\r|_{S\times T}$ and $\l.\mc{T}_X\r|_S\times\l.\mc{T}_Y\r|_T$, respectively; it suffices to show that they coincide.
* (Informal): A general basis element for $\mc{T}_X\times\mc{T}_Y$ is of the form $B_X\times B_Y$ where $B_X\in\mc{B}_X$ and $B_Y\in\mc{B}_Y$. When restricted to $S\times T$, the basis elements in $\mc{B}_\textrm{sb}$ are of the form $\l(B_X\times B_Y\r)\cap\l(S\times T\r)=\l(B_X\cap S\r)\times\l(B_Y\cap T\r)$. This is a general basis element in $\mc{B}_\textrm{pr}$, so the basis elements coincide whether one takes the product then the subspace topologies or the other way around. Hence the topologies coincide.

* (Formal): Let $\mc{B}_X$, $\mc{B}_Y$, $\mc{B}_{X\times Y}$, $\mc{B}_S$ and $\mc{B}_T$ be bases for the topologies $\mc{T}_X$, $\mc{T}_Y$, $\mc{T}_X\times\mc{T}_Y$, $\l.\mc{T}_X\r|_S$, and $\l.\mc{T}_Y\r|_T$, respectively. Take $B\in\mc{B}_\textrm{sb}$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    B\in\mc{B}_\textrm{sb}&\Leftrightarrow\ex B_{X\times Y}\in\mc{B}_{X\times Y}:B=B_{X\times Y}\cap\l(S\times T\r)&&\textrm{Basis for subspace topology}\\
    &\Leftrightarrow\ex B_X\in\mc{B}_X,\ex B_Y\in\mc{B}_Y:B=\l(B_X\times B_Y\r)\cap\l(S\times T\r)\ \ \ \ \ \ \ \ &&\textrm{Basis for product topology; }B_{X\times Y}=B_X\times B_Y\\
    &\Leftrightarrow\ex B_X\in\mc{B}_X,\ex B_Y\in\mc{B}_Y:B=\l(B_X\cap S\r)\times\l(B_Y\cap T\r)&&\textrm{Cartesian product of intersections}\\
    &\Leftrightarrow\ex B_S\in\mc{B}_S,\ex B_T\in\mc{B}_T:B=B_S\times B_T&&\textrm{Basis for subspace topology; }B_S=B_X\cap S\land B_T=B_Y\cap T\\
    &\Leftrightarrow B\in\mc{B}_\textrm{pr}.&&\textrm{Basis for product topology}\qedin
\end{alignat}$

---

**Remark.** In other words, the two $\textrm{`}$standard$\textrm{'}$ topologies that one can impose on $S\times T$, either by considering the product topology on $X\times Y$ then restricting to $S\times T\subseteq X\times Y$ or first restricting to $S\subseteq X$ and $T\subseteq Y$ then taking the product, coincide.<span style="float:right;">$\blacklozenge$</span>
