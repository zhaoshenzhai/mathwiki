<div class="topSpace"></div>

Date Created: 23/05/2023 17:48:43
Tags: #Type/Proposition #Topic/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Unique Lifting Property).

_Let $f:Y\to X$ be a continuous map between topological spaces and let $p:\widetilde{X}\to X$ be a covering map. If $Y$ is connected and two lifts $\widetilde{f}_1,\widetilde{f}_2:Y\to\widetilde{X}$ agree at one point in $Y$, then $\widetilde{f}_1=\widetilde{f}_2$._

```

_Proof_. Let $S\coloneqq\{y\in Y\,|\,\widetilde{f}_1\!\l(y\r)=\widetilde{f}_2\!\l(y\r)\}$, which we claim to be both open and closed. For some $y\in Y$, let $U$ be an evenly-covered neighborhood of $f\l(y\r)$ so that $p^{-1}$ is a disjoint union of open sets $V_i\subseteq\widetilde{X}$, each mapped homeomorphically to $U$. Let $\widetilde{U}_1$ and $\widetilde{U}_2$ be sheets of $U$ containing $\widetilde{f}_1\!\l(y\r)$ and $\widetilde{f}_2\!\l(y\r)$, respectively. By continuity of $\widetilde{f}_1$ and $\widetilde{f}_2$, there exists a neighborhood $V$ of $y$ such that $\widetilde{f}_i\!\l(V\r)\subseteq\widetilde{U}_i$ for $i=1,2$.
* If $y\in S$, then $\widetilde{U}\coloneqq\widetilde{U}_1=\widetilde{U}_2$. Then, since $p\circ\widetilde{f}_1=p\circ\widetilde{f}_2$ and $p$ is injective on $\widetilde{U}$, we see that $\widetilde{f}_1=\widetilde{f}_2$ on $V$. This shows that $S$ is open.
* Otherwise, $\widetilde{U}_1\neq\widetilde{U}_2$ and hence they are disjoint. Then, since $\widetilde{f}_i\!\l(V\r)\subseteq\widetilde{U}_i$ for $i=1,2$, we see that $\widetilde{f}_1\!\l(y'\r)\neq\widetilde{f}_2\!\l(y'\r)$ for all $y'\in V$. This shows that $S$ is closed.<span style="float:right;">$\blacksquare$</span>
