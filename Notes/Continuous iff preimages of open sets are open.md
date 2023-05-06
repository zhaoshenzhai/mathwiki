---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 07/02/2023 10:44:23
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces. A function $f:X\to Y$ is continuous iff for every open set $V$ in $Y$, $\preim_f\!\l(V\r)$ is open in $X$._

```

_Proof_.
* ($\Rightarrow$): Let $f:X\to Y$ be continuous and let $V$ be an open set in $Y$. Take $p\in\preim_f\!\l(V\r)$, so $f\l(p\r)\in V$ and hence $B_\epsilon\!\l(f\l(p\r)\r)\subseteq V$ for some $\epsilon>0$. But $f$ is continuous at $p$, so there exists $\delta>0$ such that if $d_X\!\l(p,q\r)<\delta$, then $d_Y\!\l(f\l(p\r),f\l(q\r)\r)<\epsilon$; that is, $q\in B_\delta\!\l(p\r)\Rightarrow f\l(q\r)\in B_\epsilon\!\l(f\l(p\r)\r)\subseteq V$ for all $q\in X$. In other words, $B_\delta\!\l(p\r)\subseteq\preim_f\!\l(V\r)$.

* ($\Leftarrow$): Take $p\in X$ and suppose that $\preim_f\!\l(V\r)$ is open in $X$ whenever $V$ is open in $V$. Let $\epsilon>0$ and consider $V\coloneqq B_\epsilon\!\l(f\l(p\r)\r)$. Clearly $f\l(p\r)\in V$, so there exists some $\delta>0$ such that $B_\delta\!\l(p\r)\subseteq\preim_f\!\l(V\r)$. That is, for all $q\in X$ such that $d_X\!\l(p,q\r)<\delta$, we have $d_Y\!\l(f\l(p\r),f\l(q\r)\r)<\epsilon$.<span style="float:right;">$\blacksquare$</span>
