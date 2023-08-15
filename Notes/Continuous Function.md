<div class="topSpace"></div>

Date Created: 24/11/2022 13:48:28
Tags: #Type/Definition #Topic/Topology

Types: [[Homotopy Equivalence]], [[Retraction]], [[Uniform Continuity]]
Examples: [[Path]]
Constructions: [[Homotopy]], [[Lift]], [[Covering Space]], [[Mapping Cylinder]], [[Space of Continuous Functions]]
Generalizations: <i>Not Applicable</i>

Properties: [[Extreme Value Theorem]], [[Intermediate Value Theorem]], [[Inverse of continuous functions]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Characterizations of continuity (metric)]], [[Bounded iff Lipschitz iff continuous]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ and $Y$ be topological spaces. A function $f:X\to Y$ is said to be <b>continuous</b> if preimages of open sets are open; that is, if for all open sets $V\subseteq Y$, the preimage $f^{-1}\!\l(V\r)$ is open in $X$.
* The <b>category of topological spaces</b> is the category $\cattop$ whose objects are topological spaces and whose morphisms are continuous functions.
* A <b>homeomorphism</b> is an isomorphism in $\cattop$; equivalently, it is an invertible continuous function whose inverse is also continuous.
* Two topological spaces $X$ and $Y$ are said to be <b>homeomorphic</b> if there is a homeomorphism $\phi:X\to Y$.

```

<b>Remark.</b> A function is continuous iff it is continuous at each point $p\in X$; that is, every neighborhood $V$ of $f\l(p\r)$ admits a neighborhood $U$ of $p$ such that $f\l(U\r)\subseteq V$.
* Indeed, if $f$ is continuous, then $f^{-1}\!\l(V\r)$ is a neighborhood of $p$ with $f\l(f^{-1}\!\l(V\r)\r)\subseteq V$. Conversely, let $V$ be a neighborhood of $f\l(p\r)$, so there exists a neighborhood $U_p$ of $p$ such that $f\l(U_p\r)\subseteq V$. We claim that $f^{-1}\!\l(V\r)=\bigcup_{p\in X}U_p$, so it is open. The forward direction follows immediately since $p\in U_p$. The backwards direction is also clear, for $U_p\subseteq f^{-1}\!\l(f\l(U_p\r)\r)\subseteq f^{-1}\l(V\r)$.

If $X$ and $Y$ are metric spaces, this shows that $f$ is continuous at $p$ iff $\fa\epsilon>0,\ex\delta>0,\fa q\in X:d\l(p,q\r)<\delta\Rightarrow d\l(f\l(p\r),f\l(q\r)\r)<\epsilon$.<span style="float:right;">$\blacklozenge$</span>
