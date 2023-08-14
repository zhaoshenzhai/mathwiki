---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/12/2022 12:34:09
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Extreme Value Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem ($\epsilon$-neighborhood Theorem).

Let $K\subseteq X$ be a compact subset of a metric space $X$ and let $U\supseteq K$ be an open set. Then there exists some $\epsilon>0$ such that $\bigcup_{k\in K}B_\epsilon\!\l(k\r)\subseteq U$.

```

<b>Remark.</b> In other words, given any compact set $K$ and any open set $U\supseteq K$, an $\textrm{`}\epsilon$-neighborhood of $K\textrm{'}$ is still contained in $U$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take $S\coloneqq X\comp U$ and observe that the function $f:X\to\R$ defined by $f\l(x\r)\coloneqq d\l(x,S\r)\coloneqq\inf\limits_{s\in S}d\l(x,s\r)$ is continuous. We claim that $f\l(k\r)>0$ for all $k\in K$, for then, by the Extreme Value Theorem, $f$ has a minimum value $\epsilon>0$. Then, for all $y\in\bigcup_{k\in K}B_\epsilon\!\l(k\r)$, we see that $y\in B_\epsilon\!\l(k\r)$ for some $k\in K$ and hence $d\l(y,k\r)<\epsilon$. On the other hand, we have $f\l(k\r)=d\l(k,X\comp U\r)>0$, so $d\l(k,s\r)>\epsilon$ for all $s\not\in U$. Thus we obtain a contradiction if $y\not\in U$, so the result follows.
* Take $k\in K$. Since $U$ is open, there exists some $\delta>0$ such that $B_\delta\!\l(k\r)\subseteq U$. Then $X\comp U\subseteq X\comp B_\delta\!\l(k\r)$, so
$$\begin{equation}
    f\l(k\r)=d\l(k,X\comp U\r)=\inf\limits_{s\in X\comp U}d\l(k,s\r)\geq\inf\limits_{s\in X\comp B_\delta\l(k\r)}d\l(k,s\r)=d\l(k,X\comp B_\delta\!\l(k\r)\r)=\delta>0.\qedin
\end{equation}$$
