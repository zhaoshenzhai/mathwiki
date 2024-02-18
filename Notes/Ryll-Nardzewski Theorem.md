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

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. The following are equivalent.
1. $T$ is $\aleph_0$-categorical.
2. Every model of $T$ is atomic (i.e. for each $n<\omega$, every $p\in S_n(T)$ is isolated.)
3. For each $n<\omega$, the type space $S_n(T)$ is finite.
4. For each $n<\omega$, the Lindenbaum-Tarski algebra $\LT_n(T)$ is finite.

```

<i>Proof.</i> We proceed by showing that $1\Rightarrow2\Rightarrow3\Rightarrow4\Rightarrow1$.
* <span style="color:gray">($1\Rightarrow2$).</span> Suppose that some $p\in S_n(T)$ is non-isolated, so there is a countable model $\mc{M}\models T$ omitting $p$. But $p$ can also be realized in a model $\mc{N}\models T$, which by Löwenheim-Skolem we can assume to be countable. Clearly then $\mc{M}\not\iso\mc{N}$, contradicting $\aleph_0$-categoricity of $T$.
* <span style="color:gray">($2\Rightarrow3$).</span> Since each $p(\vec{x})\in S_n(T)$ is isolated, say by some $\mc{L}$-formula $\phi_p(\vec{x})$, we have $S_n(T)=\bigcup_p[\phi_p]=\bigcup_p\l\{p\r\}$. Compactness of $S_n(T)$ then gives the desired.
* <span style="color:gray">($3\Rightarrow4$).</span> Write $S_n(T)=\l\{p_1,\dots,p_m\r\}$ for some $m<\omega$. For each $1\leq i\leq m$, take $\eta_i\in p_i$ and set $\theta_i\coloneqq\eta_i\land\bigwedge_{j\neq i}\lnot\eta_j$. Then $\theta_i\in p_i$ and $\lnot\theta_i\in p_j$ for all $j\neq i$, and so $\theta_i$ isolates $p_i$. Now for any $\mc{L}$-formula $\phi(\vec{x})$, we see that $T\proves\psi(\vec{x})\leftrightarrow\bigvee_{\phi\in p_i}\theta_i$, and there are at most $2^m$ formulas of the form $\bigvee_{i\in S}\theta_i$ for $S\subseteq\l\{1,\dots,m\r\}$.
* <span style="color:gray">($4\Rightarrow1$).</span> We claim that every countable model $\mc{M}\models T$ is atomic, hence prime, and thus $T$ is $\aleph_0$-categorical by the uniqueness of prime models. Indeed, for each $\vec{a}\in M^n$, set $S_\vec{a}\coloneqq\l\{i\leq l\st\mc{M}\models\phi_i(\vec{a})\r\}$ where $\phi_1(\vec{x}),\dots,\phi_l(\vec{x})$ are the inequivalent $\mc{L}$-formulas in $\LT_n(T)$. Observe that $\tp^\mc{M}(\vec{a})$ is isolated by the conjunction of $\bigwedge_{i\in S_\vec{a}}\phi_i(\vec{x})$ and $\bigwedge_{i\not\in S_\vec{a}}\lnot\phi_i(\vec{x})$, as desired.<span style="float:right;">$\blacksquare$</span>
