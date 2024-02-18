<div class="topSpace"></div>

Date Created: 17/02/2024 23:16:56
References: #Ref/Mar02
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Omitting Types Theorem]], [[Realizing Types]], [[Lowenheim-Skolem Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Ryll-Nardzewski).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. Then $T$ is $\aleph_0$-categorical iff any one of the following holds.
1. Every model of $T$ is atomic (i.e. for each $n<\omega$, every $p\in S_n(T)$ is isolated).
2. For each $n<\omega$, the type space $S_n(T)$ is finite.
3. For each $n<\omega$, the Lindenbaum-Tarski algebra $\LT_n(T)$ is finite.

```

<i>Proof.</i> That $1\Rightarrow2\Rightarrow3$ is easy. Indeed, if each $p\in S_n(T)$ is isolated, say by some $\phi_p(\vec{x})\in\mc{L}$, we have $S_n(T)=\bigcup_p[\phi_p]=\bigcup_p\l\{p\r\}$. Compactness of $S_n(T)$ then gives the desired. Next, write $S_n(T)=\l\{p_1,\dots,p_m\r\}$ for some $m<\omega$. For each $1\leq i\leq m$, take $\eta_i\in p_i$ and set $\theta_i\coloneqq\eta_i\land\bigwedge_{j\neq i}\lnot\eta_j$. Then $\theta_i\in p_i$ and $\lnot\theta_i\in p_j$ for all $j\neq i$, and so $\theta_i$ isolates $p_i$. Now for any $\mc{L}$-formula $\phi(\vec{x})$, we see that $T\proves\psi(\vec{x})\leftrightarrow\bigvee_{\phi\in p_i}\theta_i$, and there are at most $2^m$ formulas of the form $\bigvee_{i\in S}\theta_i$ for $S\subseteq\l\{1,\dots,m\r\}$.

* Suppose that $T$ is $\aleph_0$-categorical. If there is some non-isolated $p\in S_n(T)$, then by the Omitting Types Theorem there is some countable model $\mc{M}\models T$ omitting $p$. But, by Löwenheim-Skolem, $p$ can also be realized in a countable model $\mc{N}\models T$. Clearly $\mc{M}\not\iso\mc{N}$, contradicting the $\aleph_0$-categoricity of $T$.
* Finally, suppose that $\LT_n(T)=\l\{\phi_1(\vec{x}),\dots,\phi_l(\vec{x})\r\}$ is finite. We claim that every countable model $\mc{M}\models T$ is atomic, hence prime, and thus $T$ is $\aleph_0$-categorical by the uniqueness of prime models. Indeed, for each $\vec{a}\in M^n$, set $S_\vec{a}\coloneqq\l\{i\leq l\st\mc{M}\models\phi_i(\vec{a})\r\}$. Observe that $\tp^\mc{M}(\vec{a})$ is isolated by the conjunction of $\bigwedge_{i\in S_\vec{a}}\phi_i(\vec{x})$ and $\bigwedge_{i\not\in S_\vec{a}}\lnot\phi_i(\vec{x})$, so $\mc{M}$ is atomic as desired.<span style="float:right;">$\blacksquare$</span>
