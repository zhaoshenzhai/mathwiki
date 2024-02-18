---
mathLink: Prime $\Leftrightarrow$ Atomic $+$ Countable
---

<div class="topSpace"></div>

Date Created: 18/02/2024 14:03:59
References: #Ref/Mar02
Tags: #Type/Proposition #Topic/Logic/Model_Theory

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

Conversely, let $m_0,m_1,\dots$ be an enumeration of $M$ and let $\mc{N}\models T$. We construct an increasing sequence $f_i:\l\{m_0,\dots,m_{i-1}\r\}\eleminto\mc{N}$ of partial elementary embeddings, so $f\coloneqq\bigcup_if_i:\mc{M}\eleminto\mc{N}$ is as desired. Set $f_0\coloneqq\em$, which is partial elementary since $\mc{M}\elemequiv\mc{N}$ (by completeness of $T$). Suppose that $f_i$ is defined, and set $n_s\coloneqq f(m_s)$ for all $s<i$. Since $\mc{M}$ is atomic, $\tp^\mc{M}(\vec{m})\coloneqq\tp^\mc{M}(m_0,\dots,m_i)$ is isolated by some $T$-consistent $\mc{L}$-formula $\psi_i(\vec{x})$. In particular, we have $\mc{M}\models\ex x\psi_i(m_0,\dots,m_{i-1},x)$, so elementarity of $f_i$ gives us $\mc{N}\models\ex x\psi_i(n_0,\dots,n_{i-1},x)$. Let $n_i\in N$ witness this existence and set $f_{i+1}\coloneqq f_i\cup\l\{\tpl{m_i,n_i}\r\}$, which is partial elementary.
* Indeed, take $\phi(\vec{x})\in\tp^\mc{M}(\vec{m})$. Since $\psi_i(\vec{x})$ isolates $\tp^\mc{M}(\vec{m})$, we have $T\proves\fa\vec{x}(\psi_i(\vec{x})\rightarrow\phi(\vec{x}))$ and so in particular $\mc{N}\models\psi_i(\vec{n})\rightarrow\phi(\vec{n})$. But $\mc{N}\models\psi_i(\vec{n})$, so $\mc{N}\models\phi(\vec{n})$ and thus $\phi(\vec{x})\in\tp^\mc{N}(\vec{n})$. Hence $\tp^\mc{M}(\vec{m})\subseteq\tp^\mc{N}(\vec{n})$, and equality holds since $\tp^\mc{M}(\vec{m})$ is a complete type.<span style="float:right;">$\blacksquare$</span>
