<br />
<br />

Date Created: 27/04/2022 16:04:50
Tags: #Theorem #Closed

Proved by: [$A$ invertible $\Rightarrow$ $A\v{x}=\v{b}$ has a unique solution](Invertible%20coefficient%20matrix%20implies%20unique%20solution.md), [Solutions of $A\v{x}=\v{b}$ decompose as $\l\{\textrm{Particular Solution}\r\}+\nullsp A$](Solutions%20of%20a%20linear%20system%20decompose%20as%20sum%20of%20particular%20and%20null.md), [[Gaussian Elimination]], [[Gauss-Jordan Elimination]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $K$ be a field and consider an $m\times n$ linear system $A\v{x}=\v{b}$ for some fixed $m,n\in\N^\ast$. Then the following methods may be used to find solution(s) of $A\v{x}=\v{b}$._
* _If $A$ is invertible, then there exists a unique solution $\v{s}=A^{-1}\v{b}$._
* _If $\v{x}_p\in K^n$ is a $\textrm{`}$particular$\textrm{'}$ solution of $A\v{x}=\v{b}$, then $\v{s}\in K^n$ is a solution thereof iff $\v{s}=\v{x}_p+\v{x}_0$ for some solution $\v{x}_0\in K^n$ of $A\v{x}=\v{0}$._
* _Otherwise, use either Gaussian or Gauss-Jordan Elimination to find solutions of $A\v{x}=\v{b}$, if any._

```

_Proof_. See links above.<span style="float:right;">$\blacksquare$</span>
