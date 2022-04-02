<br />
<br />

Date Created: 02/04/2022 16:29:57
Tags: #Proposition #Closed

Proved by: [[Matrices coincide if their actions on all vectors coincide]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for every linear map $T:K^n\to K^m$, there exists a unique matrix $A\in\mat{m\times n}{K}$ such that $T\l(\v{x}\r)=A\v{x}$ for all $\v{x}\in K^n$._

```

_Proof_. Suppose, for sake of contradiction, that there exist $A,B\in\mat{m\times n}{K}$ such that $T_A=T_B$; that is, such that $A\v{x}=B\v{x}$ for all $\v{x}\in K^n$. But then $A=B$ since their actions on all vectors in $K^n$ coincide, so we arrive at a contradiction.<span style="float:right;">$\blacksquare$</span>
