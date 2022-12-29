---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/12/2022 20:34:09
Tags: #Proposition #Topics/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space and consider a subspace $Y\subset X$. If $\tpl{Y,d}$ is compact, then it is closed._

```

_Proof_. Let $p\in X\comp Y$; we shall show that $X\comp Y$ is open by finding some open neighborhood $U$ of $p$ such that $U\subseteq X\comp Y$.
* Indeed, for all $q\in Y$, let $U_q$ and $V_q$ be neighborhoods of $p$ and $q$, respectively, both with radii less than $\frac{1}{2}d\l(p,q\r)$. In particular, $U_q\cap V_q=\em$ for all $q\in Y$.

Observe then that $Y=\bigcup_{q\in Y}V_q$, and since $Y$ is compact, there exist finitely-many points $q_i$ such that $Y=\bigcup_{i=1}^nV_{q_i}$. But since each $U_{q_i}\cap V_{q_i}=\em$, the intersection $U\coloneqq\bigcap_{i=1}^nU_{q_i}$ is disjoint from each $V_{q_i}$, and is hence disjoint from $Y$. Thus $U\subseteq X\comp Y$ is a neighborhood of $p$, so we are done.<span style="float:right;">$\blacksquare$</span>
