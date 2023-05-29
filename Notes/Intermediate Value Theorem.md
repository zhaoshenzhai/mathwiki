<div class="topSpace"></div>

Date Created: 28/12/2022 22:46:38
Tags: #Type/Theorem #Topic/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Intermediate Value Theorem).

Let $X$ and $Y$ be topological spaces, and consider a continuous function $f:X\to Y$. If $X$ is connected, then $\im f$ is connected.

```

**Remark.** In particular, this shows that for a continuous function $f:X\to\R$ with connected domain and any $y\in\R$, if $f\l(x_0\r)<y<f\l(x_1\r)$ for some $x_0,x_1\in X$, then there exists some $c\in X$ such that $f\l(c\r)=y$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Suppose, for sake of contradiction, that $\im f=V_1\cup V_2$ for non-empty disjoint open sets $V_1,V_2$ in $Y$. Then $\preim_f\!\l(V_1\r)$ and $\preim_f\!\l(V_2\r)$ are non-empty, and they are disjoint since if there exists some $x\in\preim_f\!\l(V_1\r)\cap\preim_f\!\l(V_2\r)$, then $f\l(x\r)\in V_1\cap V_2$. By continuity of $f$, the two sets are also open in $X$, contradicting the connectedness of $X$.<span style="float:right;">$\blacksquare$</span>
