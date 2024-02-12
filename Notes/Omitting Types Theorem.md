<div class="topSpace"></div>

Date Created: 05/02/2024 23:46:58
References: #Ref/Mar02
Tags: #Type/Theorem #In_Progress

Proved by: [[Henkin Construction]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Omitting Types Theorem).

Let $T$ be a complete $\mc{L}$-theory over a countable language $\mc{L}$ and let $p(\vec{x})$ be an $n$-type of $T$. There is a countable model $\mc{M}\models T$ omitting $p$ iff $p$ is non-isolated.

```

<b>Remark.</b> <span style="color:pink">countable</span>

---

<i>Proof.</i> If $p$ is isolated by $\phi(\vec{x})$, then $T\cup\l\{\ex\vec{x}\phi(\vec{x})\r\}$ is satisfiable and hence $\ex\vec{x}\phi(\vec{x})\in T$ by completeness. Thus any model $\mc{M}\models T$ realizes $p$. Conversely, suppose that $p$ is non-isolated and let $\mc{L}^\ast\coloneqq\mc{L}\sqcup C$ where $C\coloneqq\l\{c_0,c_1,\dots\r\}$ are new constant symbols. We proceed by extending $T$ to a Henkin $\mc{L}^\ast$-theory $T^\ast$, which we do so in a way so that the Henkin construction $\mc{M}\models T^\ast$ omits $p$. To this end, let $\l\{\phi_i\r\}$ be an enumeration of all $\mc{L}^\ast$-sentences.
