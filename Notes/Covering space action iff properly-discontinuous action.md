---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/05/2023 16:35:51
Tags: #Type/Proposition #Topic/Topology #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $p:\widetilde{X}\to X$ be a covering space of a connected space $X$. Then $\Cov\,(\widetilde{X}/X)$ acts properly-discontinuously on $\widetilde{X}$, and conversely, if $G$ is any group acting properly-discontinuously on $X$, then $p:X\to X/G$ is a normal covering space.

```

<i>Proof.</i> That $\Cov\,(\widetilde{X}/X)$ acts properly-discontinuously on $\widetilde{X}$ is easy. Indeed, let $U\subseteq X$ be an evenly-covered neighborhood of $p\l(\widetilde{x}\r)$ and let $\widetilde{U}\subseteq\widetilde{X}$ be the sheet over $U$ containing $\widetilde{x}$. If $\widetilde{U}\cap f\,(\widetilde{U})\neq\em$, then there exist $\widetilde{x}_1,\widetilde{x}_2\in\widetilde{U}$ such that $\widetilde{x}_1=f\l(\widetilde{x}_2\r)$. Then $p\l(\widetilde{x}_1\r)=\l(p\circ f\r)\l(\widetilde{x}_2\r)=p\l(\widetilde{x}_2\r)$, so $\widetilde{x}_1$ and $\widetilde{x}_2$ lie in the same fiber and thus $\widetilde{x}_1=\widetilde{x}_2$. Hence $f\l(\widetilde{x}_1\r)=\widetilde{x}_1$, so $f=\id$.

Conversely, let $G$ act properly-discontinuously on $X$ and let $p:X\to X/G$ be the natural map. Let $\l[x\r]\in X/G$. Since $G$ acts properly-discontinuously on $X$, there is a neighborhood $U\subseteq X$ of $x$ such that $U\cap gU\neq\em$ implies $g=e$. We claim that $p\l(U\r)$ is an evenly-covered neighborhood of $\xi$.
* Since $p^{-1}\!\l(p\l(U\r)\r)=\coprod_{g\in G}gU$ is open, we see that $p\l(U\r)$ is open too. Furthermore, $gU\cap hU=\em$ unless $g=h$, so the union is disjoint. Lastly, $\l.p\r|_{gU}:gU\to p\l(U\r)$ is a bijection since if $\l[x'\r]\in p\l(U\r)$, then $\l[x'\r]=\l[gx'\r]$ and so $p\l(gx'\r)=\l[x'\r]$. If $p\l(gx_1\r)=p\l(gx_2\r)$ for some $x_1,x_2\in U$, then $gx_1=hgx_2$ for some $h\in G$. Thus $h=e$, lest $gU\cap hgU\neq\em$, so $gx_1=gx_2$.

Thus $p:X\to X/G$ is a covering map, as desired. Furthermore, since $p\l(gx\r)=p\l(x\r)$ for all $g\in G$ and $x\in X$, we see that $G\into\Cov\l(X/\l(X/G\r)\r)$. But for all $x$ and $x'$ representing $\xi\in X/G$, there is some $g\in G$ such that $x'=gx$ and so $G$ acts transitively on the fiber $p^{-1}\!\l(\xi\r)$. Thus $\Cov\l(X/\l(X/G\r)\r)$ acts transitively on $p^{-1}\!\l(\xi\r)$, so the covering $p:X\to X/G$ is normal.<span style="float:right;">$\blacksquare$</span>
