---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/11/2022 18:27:11
Tags: #Proposition #Topics/Analysis #Later/Topology

Proved by: [[Closure of set iff every neighborhood intersects set]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space and fix $p\in X$. Then $p$ is a cluster point of $X$ iff there exists a sequence $\tpl{x_n}$ in $X\comp\l\{p\r\}$ such that $x_n\to p$._

```

_Proof_.
* ($\Rightarrow$): If $p$ is a cluster point of $X$, then every neighborhood of $p$ intersects $X\comp\l\{x\r\}$. In particular, for all $n\in\N^+$, we have that $B_{1/n}\!\l(p\r)\cap\l(X\comp\l\{x\r\}\r)\neq\em$, so there exist $x_n\in X\comp\l\{p\r\}$ such that $d\l(x_n,p\r)<1/n$ for all $n\in\N^+$. Thus we obtain a sequence $\tpl{x_n}$ in $X\comp\l\{p\r\}$ such that $x_n\to p$, so we are done.

* ($\Leftarrow$): Let $\tpl{x_n}$ be a sequence in $X\comp\l\{p\r\}$ such that $x_n\to p$. Then, for any $\delta>0$, eventually we have $d\l(x_n,p\r)<\delta$. Thus $x_n\in B_\delta\!\l(p\r)$ eventually, and since $x_n\in X\comp\l\{p\r\}$, we have that $B_\delta\!\l(p\r)\cap\l(X\comp\l\{x\r\}\r)\neq\em$. Hence every neighborhood of $p$ intersects $x\comp\l\{p\r\}$, so $p\in\bar{X\comp\l\{p\r\}}$.<span style="float:right;">$\blacksquare$</span>
