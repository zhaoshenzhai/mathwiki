<br />
<br />

Date Created: 18/05/2022 19:46:16
Tags: #Proposition #Closed

Proved by: [[Algebraic identities of matrix operations (standard)]], [[Algebraic identities of matrix operations (linear map)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p,q\in\N^\ast$. Then, for all $A,A'\in\mat{m\times n}{K}$, $B,B'\in\mat{n\times p}{K}$, $C\in\mat{p\times q}{K}$, and $\alpha\in K$, the following algebraic identities hold:_
* _(Unitality of $\times$): $I_mA=A=AI_n$._

* _(Absorption of $0$): _$A 0_{n\times p}=0_{m\times p}=0_{m\times n} B$_._
* _(Left-distributivity of $\times$ over $+$): $A\l(B+B'\r)=A B+A B'$._
* _(Right-distributivity of $\times$ over $+$): $\l(A+A'\r) B=A B+A' B$._
* _(Compatibility between $\times$ and $\cdot$): $\alpha\l(A B\r)=\l(\alpha A\r) B=A\l(\alpha B\r)$._
* _(Associativity of $\times$): $A\l(BC\r)=\l(AB\r)C$._

```

_Proof_. We shall provide two proofs for each of the assertions above.
* The standard proof applies the definition of each matrix operation, resulting in sums of elements in $K$ and thus reduces each statement to that of $K$. This can become very messy and unappealing, especially for the associativity of matrix multiplication.

* The other proof translates each assertion to that of their induced left-multiplication map. This allows us to interpret matrix multiplication as composition of maps, which is much more intuitive. Furthermore, it has the advantage of making associativity a one-liner.<span style="float:right;">$\blacksquare$</span>
