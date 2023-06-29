<div class="topSpace"></div>

Date Created: 28/06/2023 19:31:14
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Basic properties of subgroups]], [[Euclid's Lemma]], [[Basic properties of order]], [[Isomorphism Theorems]], [[Class Equation]], [[Basic properties of p-groups]], [[Orbit-Stabilizer Theorem]], [[Lagrange's Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Sylow Theorems).

Let $G$ be a finite group and write $\l|G\r|=p^rm$ for some $r\in\N$ and some prime $p$ with $p\ndivides m$. We have the following ‘Sylow Theorems’:
* (First Sylow Theorem): Any $p$-subgroup $H\subgrpeq G$ is contained in a Sylow $p$-subgroup. In particular, $G$ admits a Sylow $p$-subgroup.
* (Second Sylow Theorem): All Sylow $p$-subgroups of $G$ are conjugate.
* (Third Sylow Theorem): Let $n_p$ be the number of Sylow $p$-subgroups of $G$. Then $n_p\equiv1\mod p$ and $n_p\divides m$.

```

<i>Proof.</i> We first prove the abelian case of <i>Cauchy’s Theorem</i>, which states that if $G$ is a finite abelian group and $p$ divides $\l|G\r|$, then $G$ contains an element of order $p$.
* We proceed by induction on $\l|G\r|$. Let $H\subgrp G$ be a maximal proper subgroup of $G$, so if $p$ divides $\l|H\r|$, then we are done by induction. Otherwise, let $x\not\in H$ and set $K\coloneqq\gen{x}$. Since $G$ is abelian, we see in particular that $HK=KH$ and hence $H\subgrp HK\subgrpeq G$. Maximality of $H$ then forces $HK=G$. Observe that $H\cap K=\l\{e\r\}$, so $\l|HK\r|=\l|H\r|\l|K\r|/\l|H\cap K\r|=\l|H\r|\l|K\r|$. Thus $p$ divides $\l|H\r|\l|K\r|$, so, by Euclid’s Lemma, $p$ divides $\l|K\r|$. Then $\ord{x}=pk$ for some $k\in\N$, so $\ord{x^k}=\ord{x}/\gcd\l(\ord{x},k\r)=p$, as desired.

Next, we show that $G$ admits a Sylow $p$-subgroup $P\subgrpeq G$:
* We proceed by induction on $\l|G\r|$. If $p$ divides $\l|Z\l(G\r)\r|$, then Cauchy’s Theorem above furnishes an element $z\in Z\l(G\r)$ of order $p$. Let $N\coloneqq\gen{z}$, which is normal in $G$. Then $G/N$ has order $p^{r-1}m$, so, by induction, it has a Sylow $p$-subgroup $P_0$ of order $p^{r-1}$. Its preimage $P\coloneqq\pi^{-1}\!\l(P_0\r)$ is a normal subgroup of $G$ containing $N$ since $\pi\l(n\r)=0\in P_0$ for all $n\in N$. Now, since $\ker\pi=N\subgrpeq P$ and $\pi\l(N\r)=\l\{e\r\}\nsubgrpeq P_0=\pi\l(P\r)$, we see from the Lattice Isomorphism Theorem that
$$\begin{equation}
    P/N\iso\pi\l(P\r)/\pi\l(N\r)=P_0/\l\{e\r\}\iso P_0.
\end{equation}$$
Thus $P$ has order $\l|P_0\r|\l|N\r|=p^{r-1}p=p^r$, as desired. Otherwise, $p$ does not divide $\l|Z\l(G\r)\r|$, in which case we let $G$ act on itself by conjugation and use the class equation
$$\begin{equation}
    \l|G\r|=\l|Z\l(G\r)\r|+\sum_{x\in A}\l|G\r|/\l|\Stab_G\!\l(x\r)\r|,
\end{equation}$$
where $A\subseteq G\comp Z\l(G\r)$ is the set of representatives of distinct non-trivial orbits. Observe that $\Stab_G\!\l(x\r)=C_G\!\l(x\r)$ for all $x\in A$. Since $p$ divides $\l|G\r|$ but does not divide $\l|Z\l(G\r)\r|$, we see that $p$ does not divide $\l|G\r|/\l|C_G\!\l(x\r)\r|$ for some $x\in A$. But $\l|G\r|=p^rm$, so $p^r$ divides $\l|C_G\!\l(x\r)\r|$. Now, since $x\not\in Z\l(G\r)$, we see that $C_G\!\l(x\r)\subgrp G$ is a proper subgroup. By induction, $C_G\!\l(x\r)$ contains a Sylow $p$-subgroup $P$ of order $p^r$, as desired.

We now establish the First Sylow Theorem in the case that $H\subgrpeq N_G\!\l(P\r)$.
* Since $P\subgrpeq N_G\!\l(P\r)$ too, we have $HP\subgrpeq N_G\!\l(P\r)$. Its order is $\l|H\r|\l|P\r|/\l|H\cap P\r|$, which is a power of $p$. But $P$ is a Sylow $p$-subgroup, so $HP=P$ and hence $H\subgrpeq P$.

Finally, we prove the three Sylow Theorems. For any fixed $g\in G$, the conjugation map $P\to gPg^{-1}$ is an isomorphism, so every conjugate subgroup of $P$ is a Sylow $p$-subgroup of $G$. Let $G$ act by conjugation on the set $X\coloneqq\l\{gPg^{-1}\mid g\in G\r\}$ containing all Sylow $p$-subgroups of $G$ conjugate to $P$. Observe that $X=\Orb_G\!\l(P\r)$, and since $\Stab_G\!\l(P\r)=N_G\!\l(P\r)$, we see that
$$\begin{equation}
    \l|X\r|=\l|\Orb_G\!\l(P\r)\r|=\l[G:\Stab_G\!\l(P\r)\r]=\l[G:N_G\!\l(P\r)\r]=\l|G\r|/\l|N_G\!\l(P\r)\r|.
\end{equation}$$
But $P\subgrpeq N_G\!\l(P\r)$, so, by Lagrange’s Theorem, $\l|P\r|=p^r$ divides $\l|N_G\!\l(P\r)\r|$ and hence $\l|X\r|$ is not divisible by $p$. Also, this shows that $\l|X\r|$ is divisible by $m$.
1. Let $H\subgrpeq G$ be a $p$-subgroup of $G$, which also acts on $X$ by conjugation. This action has a fixed point $Q$, so $hQh^{-1}=Q$ for all $H$ and hence $H\subgrpeq N_G\!\l(Q\r)$. Thus $H\subgrpeq Q$ by the above lemma, as desired.
2. Let $H$ be any Sylow $p$-subgroup of $G$, which extends to itself and hence is conjugate to $P$. Thus $X$ is the set of all Sylow $p$-subgroups of $G$. 
3. Let $H$ be any Sylow $p$-subgroup of $G$, which also acts on $X$ by conjugation. Then $\l|\Orb_P\!\l(P\r)\r|=1$, which shows that $P$ is a fixed point of this action. For any $Q\in X$, we also have that $\Stab_P\!\l(Q\r)=N_P\!\l(Q\r)\subgrpeq P$, which is $P$ iff $P\subgrpeq N_P\!\l(Q\r)$. In this case, the lemma shows that $P\subgrpeq Q$, whence $P=Q$. Thus $P$ is the only fixed point of this action, so $\l|X\r|=1+kp$ for some $k\in\N$. Thus $n_p\equiv1\mod p$, as desired.<span style="float:right;">$\blacksquare$</span>
