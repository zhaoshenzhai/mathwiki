<div class="topSpace"></div>

Date Created: 09/05/2023 12:40:54
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Basic properties of subgroups]], [[Compositions of images slash preimages]], [[Basic properties of group homomorphisms]]
References: [[Fundamental Theorem of Group Homomorphisms]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Isomorphism Theorems).

Let $G$ and $G'$ be groups. We have the following ‘Isomorphism Theorems’:
* (First Isomorphism Theorem): If $\phi:G\to G'$ is a homomorphism, then $G/\ker\phi\iso\im\phi$.
* (Second Isomorphism Theorem): If $H,K\subgrpeq G$ and $H\subgrpeq N_G\!\l(K\r)$, then $HK/K\iso H/\l(H\cap K\r)$.
* (Third Isomorphism Theorem): If $H,K\nsubgrpeq G$ and $H\subgrpeq K$, then $\l(G/H\r)/\!\l(K/H\r)\iso G/K$.

We also have the ‘Lattice Theorem’: Let $\phi:G\to G'$ is a surjective homomorphism.
* The map $H\mapsto\phi\l(H\r)$ is a bijection between the subgroups of $G$ containing $\ker\phi$ and the subgroups of $G'$.
* If $\ker\phi\subgrpeq H\subgrpeq K$, then $H\nsubgrpeq K$ iff $\phi\l(H\r)\nsubgrpeq\phi\l(K\r)$, in which case $K/H\iso\phi\l(K\r)/\phi\l(H\r)$.

```

<b>Remark.</b> The First Isomorphism Theorem shows that the sequence $0\longrightarrow A\overset{\phi}{\longrightarrow}B\overset{\psi}{\longrightarrow} C\longrightarrow0$ is exact iff $C\iso B/A$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The First Isomorphism Theorem is simply a restatement of the Fundamental Theorem of Homomorphisms. The Second and Third Isomorphism Theorems are easy consequences of the first.
* That $HK\subgrpeq G$, $K\nsubgrpeq HK$, and $H\cap K\nsubgrpeq H$ are all easily verified. Consider the sequence $0\rightarrow H\cap K\overset{\iota}{\rightarrow}H\overset{\phi}{\rightarrow}HK/K\rightarrow0$ where $\phi\l(h\r)\coloneqq hK$. Clearly $\iota$ is injective and $\phi$ is surjective. Since $\im\iota=H\cap K=\ker\phi$, we see that the sequence is exact and the result follows.
* That $H\nsubgrpeq K$ and $K/H\nsubgrpeq G/H$ are easily verified. Consider the sequence $0\rightarrow K/H\overset{\iota}{\rightarrow}G/H\overset{\phi}{\rightarrow}G/K\rightarrow0$ where $\phi\l(gH\r)\coloneqq gK$, which is well-defined. Clearly $\iota$ is injective and $\phi$ is surjective. Since $\im\iota=K/H=\ker\phi$, we see that the sequence is exact and the result follows.

We now prove the Lattice Theorem.
* Since $\phi$ is surjective, we see that $\phi\l(\phi^{-1}\l(H'\r)\r)=H'$ for all $H'\subgrpeq G'$, so it suffices to show that $\phi^{-1}\l(\phi\l(H\r)\r)=H$ for all  $H\subgrpeq G$ containing $\ker\phi$. The reverse containment holds in general, so take $g\in\phi^{-1}\l(\phi\l(H\r)\r)$. Then $\phi\l(g\r)\in\phi\l(H\r)$, so $\phi\l(g\r)=\phi\l(h\r)$ for some $h\in H$. Then $\phi\l(h^{-1}g\r)=e$, so $h^{-1}g\in\ker\phi\subgrpeq H$. Writing $g=h\l(h^{-1}g\r)$ shows that $g\in H$, as desired.
* Consider the restriction $\phi:K\to\phi\l(K\r)$, which is surjective, so $H\nsubgrpeq K$ implies that $\phi\l(H\r)\nsubgrpeq\phi\l(K\r)$. Conversely, $\phi\l(H\r)\nsubgrpeq\phi\l(K\r)$ implies that $\phi^{-1}\l(\phi\l(H\r)\r)\nsubgrpeq K$. But the induced map $H\mapsto\phi\l(H\r)$ is a bijection, so $H\nsubgrpeq K$. In this case, consider the homomorphism $\psi:K\to\phi\l(K\r)/\phi\l(H\r)$ obtained by composing $\phi:K\to\phi\l(K\r)$ with the projection $\pi:\phi\l(K\r)\to\phi\l(K\r)/\phi\l(H\r)$. Then $\psi$ is surjective with kernel $\phi^{-1}\l(\phi\l(H\r)\r)=H$, from which the result follows.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> That $\l(G/H\r)/\!\l(K/H\r)\iso G/K$ can be deduced from the Lattice Theorem by setting $G'\coloneqq G/H$ and $\phi\coloneqq\pi:G\to G/H$.<span style="float:right;">$\blacklozenge$</span>
