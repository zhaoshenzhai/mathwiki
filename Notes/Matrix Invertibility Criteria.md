<br />
<br />

Date Created: 09/04/2022 09:43:00
Tags: #Theorem #Later/Linear_Algebra/Inverse

Proved by: [Left-invertible square matrix $\Rightarrow$ invertible](Left-invertible%20square%20matrix%20implies%20invertible.md), [Right-invertible square matrix $\Rightarrow$ invertible](Right-invertible%20square%20matrix%20implies%20invertible.md), [[Inverse of transpose is transpose of inverse]], [$A$ invertible $\Leftrightarrow$ $A\sim I$](Matrix%20invertible%20iff%20row-equivalent%20to%20identity.md), [Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$](Homogeneous%20square%20linear%20system%20only%20trivial%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [$A$ invertible $\Rightarrow$ $A\v{x}=\v{b}$ has a unique solution](Invertible%20coefficient%20matrix%20implies%20unique%20solution.md)
Justifications: _Not Applicable_

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
6. _The homogeneous system $A\v{x}=\v{0}$ has only the trivial solution._
    * _Equivalently, $\null\l(A\r)=\l\{\v{0}\r\}$, or $\dim\null\l(A\r)=0$, or $\nullity\l(A\r)=0$._
7. _For all $\v{b}\in K^n$, the linear system $A\v{x}=\v{b}$ has a unique solution._
    * _Equivalently, $\col\l(A\r)=K^n$, or $\dim\col\l(A\r)=n$, or $\rank\l(A\r)=n$._
    * _It suffices for $A\v{x}=\v{b}$ to be consistent for all $\v{b}\in K^n$._

```

_Proof_. Refer to the diagram below.

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-04-10_123326/image.svg"></center>