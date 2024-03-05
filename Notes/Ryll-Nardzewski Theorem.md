<div class="topSpace"></div>

Date Created: 17/02/2024 23:16:56
References: #Ref/Mar02 #Ref/Hod97
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Omitting Types Theorem]], [[Saturated iff homogeneous and universal#^uniqueness-of-homogeneous-models-realizing-same-types]]
References: <i>Not Applicable</i>
Justifications: [[Realizing Types]], [[Lowenheim-Skolem Theorem]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Ryll-Nardzewski Theorem on $\aleph_0$-Categoricity).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. Then $T$ is $\aleph_0$-categorical iff any one of the following holds.
1. There is a countable model $\mc{M}\models T$ such that for each $n<\omega$, the action $\gamma:\Aut\mc{M}\act M^n$ has finitely-many orbits. <span style="color:gray">Such actions are called <b>oligomorphic</b>.</span>
2. For each $n<\omega$, the type space $S_n(T)$ is finite. <span style="color:gray">Equivalently, the Lindenbaum-Tarski algebra $\LT_n(T)$ is finite for each $n<\omega$.</span>
3. For each $n<\omega$, every $p\in S_n(T)$ is isolated. <span style="color:gray">Equivalently, $-$ since every $p\in S_n(T)$ is realized in a countable model $-$ every countable model of $T$ is atomic.</span>

<span style="color:pink">In any case, the action $\gamma:\Aut\mc{M}\act M^n$ is oligomorphic for any $\mc{M}\models T$, and its finitely-many orbits correspond to the types in $S_n(T)$.</span>

```

<i>Proof.</i> We first show that $T$ is $\aleph_0$-categorical iff every countable model of $T$ is atomic (which is equivalent to $3$), and then show that $1\Rightarrow2\Leftrightarrow3\Rightarrow1$.
&emsp;&emsp;Indeed, suppose that $T$ is $\aleph_0$-categorical. If there is some non-isolated $p\in S_n(T)$, then by the Omitting Types Theorem there is some countable model $\mc{M}\models T$ omitting $p$. But, by Löwenheim-Skolem, $p$ can also be realized in a countable model $\mc{N}\models T$. Clearly $\mc{M}\not\iso\mc{N}$, contradicting the $\aleph_0$-categoricity of $T$. Conversely, since countable atomic models are homogeneous and all isolated types are realized, any two countable models $\mc{M},\mc{N}\models T$ are isomorphic and hence $T$ is $\aleph_0$-categorical.
* <span style="color:gray">($1\Rightarrow2$).</span> First, note that since $\tp^\mc{M}(\vec{a})$ is invariant under $\gamma$ for any $\vec{a}\in M$, there are finitely-many $p\in S_n(T)$ realized in $\mc{M}$, say $p_0,\dots,p_{k-1}$. We claim that those are the only types in $S_n(T)$. Indeed, let $p(\vec{x})\in S_n(T)$ and fix a (finite) transversal $F\subseteq M^n$ for $\gamma$. If $p$ is not realized in $\mc{M}$, then for each $\vec{a}\in F$, there is $\psi_\vec{a}\in p$ such that $\mc{M}\not\models\psi_\vec{a}(\vec{a})$. Set $\phi(\vec{x})\coloneqq\bigwedge_{\vec{a}\in F}\psi_\vec{a}(\vec{x})\in p(\vec{x})$, and note that $\mc{M}\models\phi(\vec{a})$ for some $\vec{a}\in M^n$. We may choose $\vec{a}$ to lie in $F$, so $\mc{M}\models\psi_\vec{a}(\vec{a})$, a contradiction.
* <span style="color:gray">($2\Leftrightarrow3$).</span> Since the Lindenbaum-Tarski algebra $\LT_n(T)$ is finite, every $p\in S_n(T)$ is isolated by the conjunction of the (finitely-many) formulas $\phi\in p$. Conversely, if each $p\in S_n(T)$ is isolated, say by $\phi_p(\vec{x})\in\mc{L}$, we have $S_n(T)=\bigcup_p[\phi_p]=\bigcup_p\l\{p\r\}$ and hence $S_n(T)$ is finite by compactness.
* <span style="color:gray">($3\Rightarrow1$).</span>

---

<span style="color:pink">$S_n(T)$ is finite $\Rightarrow$ $\LT_n(T)$ is finite.</span>
&emsp;&emsp;Next, write $S_n(T)=\l\{p_1,\dots,p_m\r\}$ for some $m<\omega$. For each $1\leq i\leq m$, take $\eta_i\in p_i$ and set $\theta_i\coloneqq\eta_i\land\bigwedge_{j\neq i}\lnot\eta_j$. Then $\theta_i\in p_i$ and $\lnot\theta_i\in p_j$ for all $j\neq i$, and so $\theta_i$ isolates $p_i$. Now for any $\mc{L}$-formula $\phi(\vec{x})$, we see that $T\proves\psi(\vec{x})\leftrightarrow\bigvee_{\phi\in p_i}\theta_i$, and there are at most $2^m$ formulas of the form $\bigvee_{i\in S}\theta_i$ for $S\subseteq\l\{1,\dots,m\r\}$.

<span style="color:pink">$\LT_n(T)$ is finite $\Rightarrow$ $\aleph_0$-categorical.</span>
&emsp;&emsp;Finally, suppose that $\LT_n(T)=\l\{\phi_1(\vec{x}),\dots,\phi_l(\vec{x})\r\}$ is finite. We claim that every countable model $\mc{M}\models T$ is atomic, hence prime, and thus $T$ is $\aleph_0$-categorical by the uniqueness of prime models. Indeed, for each $\vec{a}\in M^n$, set $S_\vec{a}\coloneqq\l\{i\leq l\st\mc{M}\models\phi_i(\vec{a})\r\}$. Observe that $\tp^\mc{M}(\vec{a})$ is isolated by the conjunction of $\bigwedge_{i\in S_\vec{a}}\phi_i(\vec{x})$ and $\bigwedge_{i\not\in S_\vec{a}}\lnot\phi_i(\vec{x})$, so $\mc{M}$ is atomic as desired.
