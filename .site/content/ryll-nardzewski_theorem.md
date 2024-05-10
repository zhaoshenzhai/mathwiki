---
title: 'Ryll-Nardzewski Theorem'
date: 2024-05-10 21:05:23
references: []
tags: [Theorem]
atomic: true
---

Let $T$ be a countable complete $\mc{L}$-theory with infinite models.

{{< link file="ryll-nardzewski_theorem" type="examples" >}}

{{< env "theorem" "Ryll-Nardzewski" >}}

Let $T$ be a countable complete $\mc{L}$-theory with infinite models. The following are equivalent.
1. $T$ is $\aleph_0$-categorical.
2. There is a countable model $\mc{M}\models T$ such that for each $n<\omega$, the action
$$\begin{equation}
    \gamma:\Aut\mc{M}\act M^n
\end{equation}$$
has finitely-many orbits.
3. For each $n<\omega$, the type space $S_n(T)$ is finite.
4. For each $n<\omega$, every $p\in S_n(T)$ is isolated.

In any case, the action $\gamma$ is oligomorphic for any countable $\mc{M}\models T$, and its finitely-many orbits correspond to the types in $S_n(T)$.

{{< /env >}}

_Proof._ We first show that $T$ is $\aleph_0$-categorical iff every countable model of $T$ is atomic (which is equivalent to $3$), and then show that $1\Rightarrow2\Leftrightarrow3\Rightarrow1$.

&emsp;&emsp;Indeed, suppose that $T$ is $\aleph_0$-categorical. If there is some non-isolated $p\in S_n(T)$, then by the Omitting Types Theorem there is some countable model $\mc{M}\models T$ omitting $p$. But, by Löwenheim-Skolem, $p$ can also be realized in a countable model $\mc{N}\models T$. Clearly $\mc{M}\not\iso\mc{N}$, contradicting the $\aleph_0$-categoricity of $T$. Conversely, since countable atomic models are homogeneous and all isolated types are realized, any two countable models $\mc{M},\mc{N}\models T$ are isomorphic and hence $T$ is $\aleph_0$-categorical.
* ($1\Rightarrow2$). First, note that since $\tp^\mc{M}(\vec{a})$ is invariant under $\gamma$ for any $\vec{a}\in M$, there are finitely-many $p\in S_n(T)$ realized in $\mc{M}$. We claim that every type $p\in S_n(T)$ is realized in $\mc{M}$. Indeed, fix a (finite) transversal $F\subseteq M^n$ for $\gamma$. If $p$ is not realized in $\mc{M}$, then for each $\vec{a}\in F$, there is some $\psi_\vec{a}(\vec{x})\in p(\vec{x})$ such that $\mc{M}\not\models\psi_\vec{a}(\vec{a})$. Set $\phi(\vec{x})\coloneqq\bigwedge_{\vec{a}\in F}\psi_\vec{a}(\vec{x})\in p(\vec{x})$, and note that $\mc{M}\models\phi(\vec{a})$ for some $\vec{a}\in M^n$. We may choose $\vec{a}$ to lie in $F$, so $\mc{M}\models\psi_\vec{a}(\vec{a})$, a contradiction.
* ($2\Leftrightarrow3$). Since the Lindenbaum-Tarski algebra $\LT_n(T)$ is finite, every $p\in S_n(T)$ is isolated by the conjunction of the (finitely-many) formulas $\phi\in p$. Conversely, if each $p\in S_n(T)$ is isolated, say by $\phi_p(\vec{x})\in\mc{L}$, we have $S_n(T)=\bigcup_p[\phi_p]=\bigcup_p\l\\{p\r\\}$ and hence $S_n(T)$ is finite by compactness.
* ($3\Rightarrow1$). It suffices to show that if $\mc{M}\models T$ is countable and $\vec{a},\vec{b}\in M^n$ realize the same types, then they are in the same orbit of $\gamma$. Indeed, this follows since $\mc{M}$ is atomic, hence homogeneous, so there is an automorphism mapping $\vec{a}\mapsto\vec{b}$.<span style="float:right;">$\blacksquare$</span>
