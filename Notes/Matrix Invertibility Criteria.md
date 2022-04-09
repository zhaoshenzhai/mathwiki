<br />
<br />

Date Created: 09/04/2022 09:43:00
Tags: #Theorem #In_Progress

Proved by: [[Left-invertible square matrix implies invertible]], [[Right-invertible square matrix implies invertible]], [[Inverse of transpose is transpose of inverse]], [[Matrix invertible iff row-equivalent to identity]], [[Homogeneous linear system only trivial solution iff coefficient matrix row-equivalent to identity]], [[Invertible coefficient matrix implies unique solution]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Matrix Invertibility Criteria).

_Let $K$ be a field and consider a matrix $A\in\mat{n}{K}$. Then the following statements are equivalent:_
1. _$A$ is invertible._
2. _$A$ is left-invertible._
3. _$A$ is right-invertible._
4. _$A^\trans$ is invertible._
5. _$A$ is row-equivalent to the identity matrix._
6. _The homogeneous system $\v{A}\v{x}=\v{0}$ has only the trivial solution._
    * _Equivalently, $\null\l(A\r)=\l\{\v{0}\r\}$, or $\dim\null\l(A\r)=0$, or $\nullity\l(A\r)=0$._
7. _For all $\v{b}\in K^n$, the linear system $A\v{x}=\v{b}$ has a unique solution._
    * _Equivalently, $\col\l(A\r)=K^n$, or $\dim\col\l(A\r)=n$, or $\rank\l(A\r)=n$._

```
