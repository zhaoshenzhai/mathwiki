<br />
<br />

Date Created: 27/04/2022 16:04:50
Tags: #Theorem #Closed

Proved by: [$A$ invertible $\Leftrightarrow$ $A\v{x}=\v{b}$ has a unique solution](Invertible%20coefficient%20matrix%20iff%20unique%20solution.md), [Solutions of $A\v{x}=\v{b}$ decompose as $\l\{\v{s}\r\}+\nullsp A$ for any $A\v{s}=\v{b}$](Solutions%20of%20a%20linear%20system%20decompose%20as%20sum%20of%20particular%20and%20null.md), [[Gaussian Elimination]], [[Gauss-Jordan Elimination]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $K$ be a field and consider an $m\times n$ linear system $A\v{x}=\v{b}$ for some fixed $m,n\in\N^\ast$. Then the following methods may be used to find solution(s) of $A\v{x}=\v{b}$._
* _If $A$ is invertible, then there exists a unique solution $\v{s}=A^{-1}\v{b}$._
    * _This is only useful if $A^{-1}$ is given, as reducing $\l[A\mid I\r]$ to $\l[I\mid A^{-1}\r]$ involves elementary row operations, so we may was well use Gaussian/Gauss-Jordan Elimination in the first place._
* _If $\v{s}_p\in K^n$ is a particular solution of $A\v{x}=\v{b}$, then the solution set of $A\v{x}=\v{b}$ is $\l\{\v{s}_p\r\}+\nullsp A$._
    * _This is only useful if we can spot $\v{s}_p$ and if $\nullsp A$ can be computed easily._
* _Otherwise, use Gaussian/Gauss-Jordan Elimination to find solutions of $A\v{x}=\v{b}$, if any._
    * _This is the most robust method (and we obtain $\v{s}_p$, $\nullsp A$, and $\rank A$ for free)._

```

_Proof_. See links above.<span style="float:right;">$\blacksquare$</span>
