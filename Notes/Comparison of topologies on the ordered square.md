<div class="topSpace"></div>

Date Created: 18/02/2022 16:16:11
Tags: #Type/Proposition #Later/Topology

Proved by: [[Restricted order topology subset of subspace topology]], [[Ordered square is strict subset of subspace topology]], [[Subspace of order topology strictly finer than product topology on ordered square]], [[Order and product topologies not comparable on ordered square]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{I^2,\mc{T}_\textrm{or}}$ be the ordered square and let $<$ and $\sqsubset$ be the standard and the lexicographical orderings on $I$ and $\R^2$, respectively. Then the subspace topology $\mc{T}_\textrm{sb}\coloneqq\l.\mc{T}\l(\sqsubset\r)\r|_{I^2}$ on $I^2$ is strictly finer than both $\mc{T}_\textrm{or}$ and the product topology $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(<\r)^2$.

Furthermore, $\mc{T}_\textrm{or}$ and $\mc{T}_\textrm{pr}$ are not comparable.

```

_Proof_. Since $\mc{T}_\textrm{or}\subseteq\mc{T}_\textrm{sb}$ in general and $\mc{T}_\textrm{or}\neq\mc{T}_\textrm{sb}$ for the ordered square, we see that $\mc{T}_\textrm{sb}$ is strictly finer than $\mc{T}_\textrm{or}$. The other results follow from the links above.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The relationship between these topologies can be illustrated with the following Hasse diagram:

![[Images/2022-02-18_163024/image.svg|80]]

A line segment that points upward indicate a subset relation. If any two topologies are not connected with line segments that only point upward, then they are not comparable.<span style="float:right;">$\blacklozenge$</span>
