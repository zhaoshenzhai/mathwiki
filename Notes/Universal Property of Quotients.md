<div class="topSpace"></div>

Date Created: 10/06/2023 17:02:24
Tags: #Type/Theorem #Topic/Set_Theory #Topic/Group_Theory #Topic/Ring_Theory #Topic/Module_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Quotients).

Let $\sim$ be an equivalence relation on a set $X$. Then the projection $\pi:X\to X/\!\sim$ is universal among functions that map equivalent elements to the same image. That is, for any set $Z$ and any $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1\sim x_2$, there exists a unique function $\widetilde{\phi}:X/\!\sim\,\to Z$ such that
![[Images/2023-01-03_220428/image.svg|175]]

Similar results hold for groups, rings, and modules. More specifically, for $S$ a normal subgroup/ideal/submodule of $X$, the projection $\pi:X\to X/S$ is universal among morphisms whose kernel contains $S$.

```

<i>Proof.</i> Take any set $Z$ and any function $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1\sim x_2$. For the diagram to commute, we need to find some $\widetilde{\phi}:X/\!\sim\,\to Z$ such that $\phi=\widetilde{\phi}\circ\pi$, which forces $\widetilde{\phi}\l(\l[x\r]\r)\coloneqq\phi\l(x\r)$ for all $x\in X$. Thus it suffices to show that $\widetilde{\phi}$ is well-defined, but this is exactly that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1\sim x_2$.
* For $G$ a group and $N\nsubgrpeq G$ a normal subgroup, observe that $G/N=G/\!\sim$ where $\sim$ is the equivalence relation on $G$ defined by $g_1\sim g_1$ iff $g_1N=g_2N$. Thus, for any $g_1,g_2\in G$ such that $g_1\sim g_2$, we have that $g_1^{-1}g_2\in N\subgrpeq\ker\phi$, so $\phi\l(g_1^{-1}g_2\r)=e$. But then $\phi\l(g_1\r)=\phi\l(g_2\r)$, so there exists a unique function $\widetilde{\phi}:X/\!\sim\,\to H$ given by $\widetilde{\phi}\l(gN\r)=\phi\l(g\r)$ for all $g\in G$. Indeed, $\widetilde{\phi}$ is a homomorphism since $\widetilde{\phi}\l(g_1Ng_2N\r)=\widetilde{\phi}\l(g_1g_2N\r)=\phi\l(g_1g_2\r)=\phi\l(g_1\r)\phi\l(g_2\r)=\widetilde{\phi}\l(g_1N\r)\widetilde{\phi}\l(g_2N\r)$.
* For $R$ a ring and $\mf{a}\nsubgrpeq R$ an ideal, the (unique) group homomorphism obtained by applying the above to the underlying group of $R$ is a ring homomorphism since $\widetilde{\phi}\l(1+\mf{a}\r)=\phi\l(1\r)=1$ and $\widetilde{\phi}\l(\l(r_1+\mf{a}\r)\l(r_2+\mf{a}\r)\r)=\widetilde{\phi}\l(r_1r_2+\mf{a}\r)=\phi\l(r_1r_2\r)=\phi\l(r_1\r)\phi\l(r_2\r)=\widetilde{\phi}\l(r_1+\mf{a}\r)\widetilde{\phi}\l(r_2+\mf{a}\r)$ for all $r_1,r_2\in R$.
* For $M$ a left $R$-module and $N\subgrpeq M$ a submodule, the (unique) group homomorphism obtained by applying the above to the underlying group of $R$ is a module homomorphism since $\widetilde{\phi}\l(r\cdot\l(m+N\r)\r)=\widetilde{\phi}\l(rm+N\r)=\phi\l(rm\r)=r\phi\l(m\r)=r\cdot\widetilde{\phi}\l(m+N\r)$ for all $m\in M$ and $r\in R$.<span style="float:right;">$\blacksquare$</span>
