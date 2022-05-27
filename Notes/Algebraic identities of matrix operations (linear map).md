<br />
<br />

Date Created: 27/05/2022 21:46:00
Tags: #Proposition #In_Progress

Proved by: [[Algebraic identities of left-multiplication of matrices]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p,q\in\N^\ast$. Then, for all $A,A'\in\mat{m\times n}{K}$, $B,B'\in\mat{n\times p}{K}$, $C\in\mat{p\times q}{K}$, and $\alpha\in K$, the following algebraic identities hold:_
* _(Unitality of $\times$): $I_mA=A=AI_n$._

* _(Absorption of $0$): _$A 0_{np}=0_{mp}=0_{mn} B$_._
* _(Left-distributivity of $\times$ over $+$): $A\l(B+B'\r)=A B+A B'$._
* _(Right-distributivity of $\times$ over $+$): $\l(A+A'\r) B=A B+A' B$._
* _(Compatibility between $\times$ and $\cdot$): $\alpha\l(A B\r)=\l(\alpha A\r) B=A\l(\alpha B\r)$._
* _(Associativity of $\times$): $A\l(BC\r)=\l(AB\r)C$._

```

_Proof_. Consider the function
$$\begin{equation}
    \mc{L}_{m\times n}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r) \ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ A\mapsto L_A
\end{equation}$$
that sends each $m\times n$ matrix to its corresponding left-multiplication map. Since $\mc{L}$ is invertible, we see, in particular, that $\mc{L}\l(A\r)=\mc{L}\l(B\r)\Rightarrow A=B$. Thus, for each assertion, it suffices to prove that their corresponding left-multiplication maps coincide.
* (Unitality of $\times$): Take $A\in\mat{m\times n}{K}$
