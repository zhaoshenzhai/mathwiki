<div class="topSpace"></div>

Date Created: 09/05/2023 12:40:54
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Universal Property of Quotients]], [[Canonical Decomposition of Functions]], [[Basic properties of subgroups]], [[Compositions of images and preimages]], [[Basic properties of group homomorphisms]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Isomorphism Theorems).

Let $G$ and $G'$ be groups. We have the following ‘Isomorphism Theorems’:
* (First Isomorphism Theorem): If $\phi:G\to G'$ is a homomorphism, then $G/\ker\phi\iso\im\phi$.
* (Second Isomorphism Theorem): If $H,K\subgrpeq G$ and $H\subgrpeq N_G\!\l(K\r)$, then $HK/K\iso H/\l(H\cap K\r)$.
* (Third Isomorphism Theorem): If $H,K\nsubgrpeq G$ and $H\subgrpeq K$, then $\l(G/H\r)/\!\l(K/H\r)\iso G/K$.

We also have the ‘Lattice Theorem’: Let $\phi:G\to G'$ be a surjective homomorphism.
* The map $H\mapsto\phi\l(H\r)$ is a bijection between the subgroups of $G$ containing $\ker\phi$ and the subgroups of $G'$.
* If $\ker\phi\subgrpeq H\subgrpeq K$, then $H\nsubgrpeq K$ iff $\phi\l(H\r)\nsubgrpeq\phi\l(K\r)$, in which case $K/H\iso\phi\l(K\r)/\phi\l(H\r)$.

Similar results hold for rings and modules (with ‘normal subgroup’ replaced with ‘ideal’ and ‘submodule’, respectively).

```

<b>Remark.</b> The First Isomorphism Theorem shows that the sequence $1\to A\overset{\phi}{\to}B\overset{\psi}{\to} C\longrightarrow1$ of groups is exact iff $C\iso B/A$.
* If the sequence is exact, then $\phi$ is injective and hence $A\iso\phi\l(A\r)$. But $\phi\l(A\r)=\ker\psi$ by exactness, so $B/\phi\l(A\r)= B/\ker\psi\iso\psi\l(B\r)$. Since $\psi$ is surjective, we see that $B/A\iso B/\phi\l(A\r)\iso C$.
* Conversely, suppose $C\iso B/A$. Let $\phi:A\into B$ be the inclusion and let $\psi:B\onto B/\phi\l(A\r)$ be the projection. Then $\ker\psi=\phi\l(A\r)=\im\phi$, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> For the First Isomorphism Theorem, we use the universality of $\pi:G\to G/\ker\phi$ to furnish a unique homomorphism $\widetilde{\phi}:G/\ker\phi\to\im\phi$ such that $\phi=\widetilde{\phi}\circ\pi$. To show that $\widetilde{\phi}$ is an isomorphism, observe that $G/\ker\phi=G/\!\sim$ where $\sim$ is the equivalence relation on $G$ defined by
$$\begin{equation}
    g_1\sim g_2\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ g_1\ker\phi=g_2\ker\phi\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ g_1^{-1}g_2\in\ker\phi\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ \phi\l(g_1^{-1}g_2\r)=e\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ \phi\l(g_1\r)=\phi\l(g_2\r).
\end{equation}$$
By the Canonical Decomposition of Functions, we see that $\widetilde{\phi}$ is a bijection, as desired. Now, the Second and Third Isomorphism Theorems follow easily from the first:
* That $HK\subgrpeq G$, $K\nsubgrpeq HK$, and $H\cap K\nsubgrpeq H$ are all easily verified. Consider the sequence $0\rightarrow H\cap K\overset{\iota}{\rightarrow}H\overset{\phi}{\rightarrow}HK/K\rightarrow0$ where $\phi\l(h\r)\coloneqq hK$. Clearly $\iota$ is injective and $\phi$ is surjective. Since $\im\iota=H\cap K=\ker\phi$, we see that the sequence is exact and the result follows.
* That $H\nsubgrpeq K$ and $K/H\nsubgrpeq G/H$ are easily verified. Consider the sequence $0\rightarrow K/H\overset{\iota}{\rightarrow}G/H\overset{\phi}{\rightarrow}G/K\rightarrow0$ where $\phi\l(gH\r)\coloneqq gK$, which is well-defined. Clearly $\iota$ is injective and $\phi$ is surjective. Since $\im\iota=K/H=\ker\phi$, we see that the sequence is exact and the result follows.

Finally, we prove the Lattice Theorem.
* Since $\phi$ is surjective, we see that $\phi\l(\phi^{-1}\l(H'\r)\r)=H'$ for all $H'\subgrpeq G'$, so it suffices to show that $\phi^{-1}\l(\phi\l(H\r)\r)=H$ for all  $H\subgrpeq G$ containing $\ker\phi$. The reverse containment holds in general, so take $g\in\phi^{-1}\l(\phi\l(H\r)\r)$. Then $\phi\l(g\r)\in\phi\l(H\r)$, so $\phi\l(g\r)=\phi\l(h\r)$ for some $h\in H$. Then $\phi\l(h^{-1}g\r)=e$, so $h^{-1}g\in\ker\phi\subgrpeq H$. Writing $g=h\l(h^{-1}g\r)$ shows that $g\in H$, as desired.
* Consider the restriction $\phi:K\to\phi\l(K\r)$, which is surjective, so $H\nsubgrpeq K$ implies that $\phi\l(H\r)\nsubgrpeq\phi\l(K\r)$. Conversely, $\phi\l(H\r)\nsubgrpeq\phi\l(K\r)$ implies that $\phi^{-1}\l(\phi\l(H\r)\r)\nsubgrpeq K$. But the induced map $H\mapsto\phi\l(H\r)$ is a bijection, so $H\nsubgrpeq K$. In this case, consider the homomorphism $\psi:K\to\phi\l(K\r)/\phi\l(H\r)$ obtained by composing $\phi:K\to\phi\l(K\r)$ with the projection $\pi:\phi\l(K\r)\to\phi\l(K\r)/\phi\l(H\r)$. Then $\psi$ is surjective with kernel $\phi^{-1}\l(\phi\l(H\r)\r)=H$, from which the result follows.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> That $\l(G/H\r)/\!\l(K/H\r)\iso G/K$ can also be deduced from the Lattice Theorem by setting $G'\coloneqq G/H$ and $\phi\coloneqq\pi:G\to G/H$.<span style="float:right;">$\blacklozenge$</span>
