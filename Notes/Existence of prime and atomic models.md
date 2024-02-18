---
mathLink: Existence of prime/atomic models
---

<div class="topSpace"></div>

Date Created: 18/02/2024 15:54:24
References: #Ref/NONE
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: [[Prime iff atomic and countable]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Existence of prime/atomic models).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. Then $T$ admits a prime model iff the isolated types in $S_n(T)$ are dense for all $n$.
* If $A\subseteq\mc{M}\models T$ is countable and $|S_n^\mc{M}(A)|<2^{\aleph_0}$, then $T$ has a prime model. In particular, the same holds if $\l|S_n(T)\r|<2^{\aleph_0}$.

```

<b>Remark.</b> Since a model $\mc{M}\models T$ is prime iff it is countable and atomic, we may replace ‘prime’ with ‘atomic’ as long as we can build countable atomic models.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{M}\models T$ be a (countable) atomic model and let $\phi(\vec{x})$ be an $\mc{L}$-formula with $\l[\phi(\vec{x})\r]\subseteq S_n(T)$ is non-empty. Since $T$ is complete and $T\cup\l\{\phi(\vec{x})\r\}$ is satisfiable, we have $T\proves\ex\vec{x}\phi(\vec{x})$. Thus $\mc{M}\models\ex\vec{x}\phi(\vec{x})$, so $\mc{M}\models\phi(\vec{a})$ for some $\vec{a}\in M$. Then $\tp^\mc{M}(\vec{a})\in\l[\phi(\vec{x})\r]$, and $\tp^\mc{M}(\vec{a})$ is isolated, so $\l[\phi(\vec{x})\r]$ contains an isolated type as desired.
&emsp;&emsp;Conversely, 
