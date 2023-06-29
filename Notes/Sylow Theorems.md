<div class="topSpace"></div>

Date Created: 28/06/2023 19:31:14
Tags: #Type/Theorem #In_Progress

Proved by: [[Basic properties of subgroups]], [[Euclid's Lemma]], [[Basic properties of order]], [[Isomorphism Theorems]], [[Class Equation]]
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

To prove the theorems, we proceed as follows. First, we show that $G$ admits a Sylow $p$-subgroup $P\subgrpeq G$:
* We proceed by induction on $\l|G\r|$. If $p$ divides $\l|Z\l(G\r)\r|$, then Cauchy’s Theorem above furnishes an element $z\in Z\l(G\r)$ of order $p$. Let $H\coloneqq\gen{z}$, which is normal in $G$. Then $G/H$ has order $p^{r-1}m$, so, by induction, it has a Sylow $p$-subgroup $P_0$ of order $p^{r-1}$. Its preimage $P\coloneqq\pi^{-1}\!\l(P_0\r)$ is a normal subgroup of $G$ containing $H$ since $\pi\l(h\r)=0\in P_0$ for all $h\in H$. Now, since $\ker\pi=H\subgrpeq P$ and $\pi\l(H\r)=\l\{e\r\}\nsubgrpeq P_0=\pi\l(P\r)$, we see from the Lattice Isomorphism Theorem that
$$\begin{equation}
    P/H\iso\pi\l(P\r)/\pi\l(H\r)=P_0/\l\{e\r\}\iso P_0.
\end{equation}$$
Thus $P$ has order $\l|P_0\r|\l|H\r|=p^{r-1}p=p^r$, as desired. Otherwise, $p$ does not divide $\l|Z\l(G\r)\r|$, in which case we let $G$ act on itself by conjugation and use the class equation
$$\begin{equation}
    \l|G\r|=\l|Z\l(G\r)\r|+\sum_{x\in A}\l|G\r|/\l|\Stab_G\!\l(x\r)\r|,
\end{equation}$$
where $A\subseteq G\comp Z\l(G\r)$ is the set of representatives of distinct non-trivial orbits. Observe that $\Stab_G\!\l(x\r)=C_G\!\l(x\r)$ for all $x\in A$. Since $p$ divides $\l|G\r|$ but does not divide $\l|Z\l(G\r)\r|$, we see that $p$ does not divide $\l|G\r|/\l|C_G\!\l(x\r)\r|$ for some $x\in A$. But $\l|G\r|=p^rm$, so $p^r$ divides $\l|C_G\!\l(x\r)\r|$. Now, since $x\not\in Z\l(G\r)$, we see that $C_G\!\l(x\r)\subgrp G$ is a proper subgroup. By induction, $C_G\!\l(x\r)$ contains a Sylow $p$-subgroup $P$ of order $p^r$, as desired.
