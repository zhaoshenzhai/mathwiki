---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 13:54:36
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Basic properties of cosets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $H\subseteq G$ be a subgroup of a group $G$. Then the number of left-cosets of $H$ in $G$ equals the number of right-cosets of $H$ is $G$.

```

<i>Proof.</i> Let $\ms{L}$ and $\ms{R}$ be the set of all left and right-cosets of $H$ in $G$, respectively, and consider the function $\phi:\ms{L}\to\ms{R}:gH\mapsto Hg^{-1}$. We claim that $\phi$ is a bijection.
* (Well-defined): Since $L\in\ms{L}$ iff there exists some $g\in G$ such that $L=gH$, we need to show that $\phi$ is well-defined; that is, if $g_1H=g_2H$, then $\phi\l(g_1H\r)=\phi\l(g_2H\r)$. But $g_1H=g_2H$ implies that $Hg_1^{-1}=Hg_2^{-1}$, so we are done.

* (Injection): Take $g_1H,g_2H\in\ms{L}$ such that $\phi\l(g_1H\r)=\phi\l(g_2H\r)$. Then $Hg_1^{-1}=Hg_2^{-1}$, so $g_1H=g_2H$.
* (Surjection): Take $Hg\in\ms{R}$ and observe that $\phi\l(g^{-1}H\r)=H\l(g^{-1}\r)^{-1}=Hg$.<span style="float:right;">$\blacksquare$</span>
