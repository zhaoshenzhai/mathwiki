<br />
<br />

Date Created: 23/05/2022 23:48:31
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. Let $\mc{B}$ and $\mc{C}$ be the standard bases of $K^n$ and $K^m$, respectively, and consider the function_
$$\begin{equation}
    \mc{L}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r)\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ A\mapsto L_A.
\end{equation}$$
_Then the following algebraic identities hold._
* _($\mc{L}$ is linear): For all $A,B\in\mat{m\times n}{K}$ and $\alpha\in K$, we have_ $\mc{L}\l(\alpha A+B\r)=\alpha\mc{L}\l(A\r)+\mc{L}\l(B\r)$_._

* _(_$\Phi_\mc{B}^\mc{C}\circ\mc{L}=\id_{\mat{m\times n}{K}}$_): For all $A\in\mat{m\times n}{K}$, we have_ $\l[L_A\r]_\mc{B}^\mc{C}=A$_._
* _(_$\mc{L}\circ\Phi_\mc{B}^\mc{C}=\id_{\hom\l(K^n,K^m\r)}$_): For all $T\in\hom\l(K^n,K^m\r)$, we have_ $L_{\l[T\r]_\mc{B}^\mc{C}}=T$_._
* _($\mc{L}$ is compatible with matrix multiplication): For all $A\in\mat{m\times n}{K}$ and $C\in\mat{n\times p}{K}$, we have $\mc{L}\l(AE\r)=\mc{L}\l(A\r)\mc{L}\l(E\r)$._

```

_Proof_. 
