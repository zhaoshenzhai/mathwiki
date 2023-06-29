<div class="topSpace"></div>

Date Created: 28/06/2023 19:31:14
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Cauchy's Theorem]], [[Isomorphism Theorems]], [[Class Equation]], [[Basic properties of subgroups]], [[Orbit-Stabilizer Theorem]], [[Lagrange's Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Sylow Theorems).

Let $G$ be a finite group and write $\l|G\r|=p^rm$ for some $r,m\in\N$ and some prime $p$ with $p\ndivides m$. We have the following ‘Sylow Theorems’:
* (First Sylow Theorem): Any $p$-subgroup $H\subgrpeq G$ is contained in a Sylow $p$-subgroup.
* (Second Sylow Theorem): All Sylow $p$-subgroups of $G$ are conjugate.
* (Third Sylow Theorem): Let $n_p$ be the number of Sylow $p$-subgroups of $G$. Then $n_p\equiv1\mod p$ and $n_p\divides m$.

```

<i>Proof.</i> We first show that $G$ admits a Sylow $p$-subgroup $P\subgrpeq G$, which will be fixed throughout the proof.
* We proceed by induction on $\l|G\r|$. If $p$ divides $\l|Z\l(G\r)\r|$, then Cauchy’s Theorem furnishes an element $z\in Z\l(G\r)$ of order $p$. Let $N\coloneqq\gen{z}$, which is normal in $G$. Then $G/N$ has order $p^{r-1}m$, so, by induction, it has a Sylow $p$-subgroup $P_0$ of order $p^{r-1}$. Its preimage $P\coloneqq\pi^{-1}\!\l(P_0\r)$ is a normal subgroup of $G$ containing $N$ since $\pi\l(n\r)=0\in P_0$ for all $n\in N$. Now, since $\ker\pi=N\subgrpeq P$ and $\pi\l(N\r)=\l\{e\r\}\nsubgrpeq P_0=\pi\l(P\r)$, we see from the Lattice Isomorphism Theorem that
$$\begin{equation}
    P/N\iso\pi\l(P\r)/\pi\l(N\r)=P_0/\l\{e\r\}\iso P_0.
\end{equation}$$
Thus $P$ has order $\l|P_0\r|\l|N\r|=p^{r-1}p=p^r$, as desired. Otherwise, $p$ does not divide $\l|Z\l(G\r)\r|$, in which case we let $G$ act on itself by conjugation and use the class equation
$$\begin{equation}
    \l|G\r|=\l|Z\l(G\r)\r|+\sum_{x\in A}\l[G:C_G\!\l(x\r)\r],
\end{equation}$$
where $A\subseteq G$ is the set of representatives of distinct non-trivial orbits. Since $p$ divides $\l|G\r|$ but does not divide $\l|Z\l(G\r)\r|$, we see that $p$ does not divide $\l|G\r|/\l|C_G\!\l(x\r)\r|$ for some $x\in A$. But $\l|G\r|=p^rm$, so $p^r$ divides $\l|C_G\!\l(x\r)\r|$. Now, since $x\not\in Z\l(G\r)$, we see that $C_G\!\l(x\r)\subgrp G$ is a proper subgroup, so the result follows by induction.

We now establish the First Sylow Theorem in the case that $H\subgrpeq N_G\!\l(Q\r)$ for any Sylow $p$-subgroup $Q$ of $G$.
* Since $Q\subgrpeq N_G\!\l(Q\r)$ too, we have $HQ\subgrpeq N_G\!\l(Q\r)$. Its order is $\l|H\r|\l|Q\r|/\l|H\cap Q\r|$, which is a power of $p$. But $Q$ is a Sylow $p$-subgroup, so $HQ\subgrpeq Q$ and hence $H\subgrpeq Q$.

Finally, we prove the three Sylow Theorems. For any fixed $g\in G$, the conjugation map $P\to gPg^{-1}$ is an isomorphism, so every conjugate subgroup of $P$ is a Sylow $p$-subgroup of $G$. Let $G$ act by conjugation on the set $X\coloneqq\l\{gPg^{-1}\subgrpeq G\mid g\in G\r\}$ containing all Sylow $p$-subgroups of $G$ conjugate to $P$. Observe that
$$\begin{equation}
    \l|X\r|=\l|\Orb_G\!\l(P\r)\r|=\l[G:\Stab_G\!\l(P\r)\r]=\l[G:N_G\!\l(P\r)\r]=\l|G\r|/\l|N_G\!\l(P\r)\r|,
\end{equation}$$
which we use to the establish the Sylow Theorems.
1. Let $H\subgrpeq G$ be a $p$-subgroup of $G$, which also acts on $X$ by conjugation. Since $P\subgrpeq N_G\!\l(P\r)$, we see that $\l|P\r|=p^r$ divides $\l|N_G\l(P\r)\r|$ and hence $p$ does not divide $\l|X\r|$. But the number of fixed points of this action is congruent to $\l|X\r|$ modulo $p$, so this action has a fixed point $Q$. Thus $hQh^{-1}=Q$ for all $H$, so $H\subgrpeq N_G\!\l(Q\r)$ and hence $H\subgrpeq Q$ by the above lemma.
2. Let $Q$ be any Sylow $p$-subgroup of $G$, which extends to itself and hence is conjugate to $P$. Thus $X$ is the set of all Sylow $p$-subgroups of $G$. In particular, all Sylow $p$-subgroups of $G$ are conjugate, and $\l|X\r|=n_p$.
3. Observe that $\l|X\r|=n_p$ is divisible by $m$. The Sylow $p$-subgroup $P\subgrpeq G$ also acts on $X$ by conjugation, which clearly admits $P$ as a fixed point. For any $Q\in X$, we have that $\Stab_P\!\l(Q\r)=N_P\!\l(Q\r)\subgrpeq P$, which is $P$ iff $P\subgrpeq N_P\!\l(Q\r)$. In this case, the lemma shows that $P\subgrpeq Q$, whence $P=Q$. Thus $P$ is the only fixed point of this action, so $n_p\equiv1\mod p$, as desired.<span style="float:right;">$\blacksquare$</span>
