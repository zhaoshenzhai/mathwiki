---
mathLink: Prime $\Leftrightarrow$ Atomic $+$ Countable
---

<div class="topSpace"></div>

Date Created: 18/02/2024 14:03:59
References: #Ref/NONE
Tags: #Type/Proposition #In_Progress

Proved by: [[Lowenheim-Skolem Theorem]], [[Omitting Types Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Prime $\Leftrightarrow$ Atomic $+$ Countable).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. Then a model $\mc{M}\models T$ is prime iff it is atomic and countable.

```

<i>Proof.</i> The forward direction follows from the Omitting Types Theorem. Let $\mc{M}\models T$.
* If $\mc{M}$ is prime, then it (elementarily) embeds into any countable model of $T$, which exists by Löwenheim-Skolem. Thus $\mc{M}$ is countable. To see that $\mc{M}$ is atomic, let $\vec{a}\in M^n$ and suppose that $p\coloneqq\tp^\mc{M}(\vec{a})$ is non-isolated. By the Omitting Types Theorem, there is a model $\mc{N}\models T$ omitting $p$. Since $\mc{M}$ is prime, we have an elementary embedding $j:\mc{M}\eleminto\mc{N}$. But $p$ is realized by $\vec{a}\in M^n$, so by elementarity it is realized by $j(\vec{a})\in N^n$ too, a contradiction.

Conversely, let $m_0,m_1,\dots$ be an enumeration of $M$ and let $\mc{N}\models T$. We construct an increasing sequence $f_i:\l\{m_0,\dots,m_{i-1}\r\}\eleminto\mc{N}$ of partial elementary embeddings, so $f\coloneqq\bigcup_nf_n:\mc{M}\eleminto\mc{N}$ is as desired. Set $f_0\coloneqq\em$, which is partial elementary since $\mc{M}\elemequiv\mc{N}$ (by completeness of $T$). Suppose that

Since $\mc{M}$ is atomic, for each $i$, the tuple $\tpl{m_0,\dots,m_i}$ is isolated by some $\mc{L}$-formula $\psi_i(x_0,\dots,x_i)$. 
