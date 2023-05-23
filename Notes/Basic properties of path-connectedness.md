---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/05/2023 14:40:07
Tags: #Type/Proposition #Later/Topology

Proved by: [[Intermediate Value Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a topological space. Then the following properties hold._
* _If $X$ is path-connected, then it is connected._
* _$X$ is locally path-connected iff path components of open subsets of $X$ are open._
* _If $X$ is connected and locally path-connected, then it is path-connected._

```

_Proof_.
* If $X$ is not connected, let $X=A\cup B$ be a non-trivial union of disjoint open sets $A,B\in X$. Choose any $a\in A$ and $b\in B$, and let $\gamma:I\to X$ be a path from $a$ to $b$. Observe that $\gamma\l(I\r)=\l(A\cap\gamma\l(I\r)\r)\cup\l(B\cap\gamma\l(I\r)\r)$ with both $A\cap\gamma\l(I\r)$ and $B\cap\gamma\l(I\r)$ being open in the subspace topology of $\gamma\l(I\r)$, so $\gamma\l(I\r)$ is disconnected. But $I$ is connected, so $\gamma\l(I\r)$ is connected too, a contradiction.
* 
