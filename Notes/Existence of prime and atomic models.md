---
mathLink: Existence of prime/atomic models
---

<div class="topSpace"></div>

Date Created: 18/02/2024 15:54:24
References: #Ref/Mar02
Tags: #Type/Proposition #Topic/Logic/Model_Theory

Proved by: [[Prime and Atomic Models#^atomic-iff-omits-negation-of-isolating-formulas]], [[Omitting Types Theorem]]
References: <i>Not Applicable</i>
Justifications: [[Prime iff atomic and countable]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Existence of prime/atomic models).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. Then $T$ admits a prime model iff the isolated types in $S_n(T)$ are dense for all $n$.
* <span style="color:pink">If $A\subseteq\mc{M}\models T$ is countable and $|S_n^\mc{M}(A)|<2^{\aleph_0}$, then $T$ has a prime model. In particular, the same holds if $\l|S_n(T)\r|<2^{\aleph_0}$.</span>

```

<b>Remark.</b> Since a model $\mc{M}\models T$ is prime iff it is countable and atomic, we may replace ‘prime’ with ‘atomic’ as long as we can build countable atomic models.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{M}\models T$ be a (countable) atomic model and let $\phi(\vec{x})$ be an $\mc{L}$-formula with $\l[\phi(\vec{x})\r]\subseteq S_n(T)$ non-empty. Since $T\cup\l\{\phi(\vec{x})\r\}$ is satisfiable, we have $T\proves\ex\vec{x}\phi(\vec{x})$. Thus $\mc{M}\models\ex\vec{x}\phi(\vec{x})$, so $\mc{M}\models\phi(\vec{a})$ for some $\vec{a}\in M$. Then $\tp^\mc{M}(\vec{a})\in\l[\phi(\vec{x})\r]$, and $\tp^\mc{M}(\vec{a})$ is isolated, so $\l[\phi(\vec{x})\r]$ contains an isolated type as desired.
&emsp;&emsp;Conversely, we note that a model $\mc{M}\models T$ is atomic iff $\mc{M}$ omits the collection $\Sigma\coloneqq\l\{p_n(\vec{x})\r\}_{n<\omega}$, where each $p_n(\vec{x})\coloneqq\l\{\lnot\phi(\vec{x})\st\phi(\vec{x})\textrm{ isolates a type in }S_n(T)\r\}$. By the Omitting Types Theorem, it suffices to show that $\Sigma$ is non-isolated, for then there is a countable $\mc{M}\models T$ omitting $\Sigma$, so $\mc{M}$ is atomic and hence prime.
* To this end, note that for each $T$-consistent $\mc{L}$-formula $\psi(\vec{x})$, there is some $\phi(\vec{x})\in[\psi(\vec{x})]$ isolating a type $q(\vec{x})\coloneqq\l\{\chi(\vec{x})\st T\proves\fa\vec{x}(\phi(\vec{x})\rightarrow\chi(\vec{x}))\r\}\in S_n(T)$. Observe then that $\lnot\phi\in p_n$. Also, we have $T\not\proves\fa\vec{x}(\psi(\vec{x})\rightarrow\lnot\phi(\vec{x}))$, since otherwise $T\proves\fa\vec{x}(\phi(\vec{x})\rightarrow\lnot\psi(\vec{x}))$ and hence $\lnot\psi\in q$. But $\psi\in q$, a contradiction.<span style="float:right;">$\blacksquare$</span>
