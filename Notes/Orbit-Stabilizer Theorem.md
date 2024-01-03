<div class="top Space"></div>

Date Created: 05/05/2023 14:32:11
References:
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Universal Property of Quotients]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Orbit-Stabilizer).

Let $\tpl{X,x_0}$ be a pointed $G$-set. Letting $G$ act on $G/\Stab_G\!\l(x_0\r)$ by left-multiplication, we have a $G$-equivariant bijection $\Orb\l(x_0\r)\iso G/\Stab\l(x_0\r)$.
* In particular, we see that $\l|\Orb_G\!\l(x_0\r)\r|=\l[G:\Stab_G\!\l(x_0\r)\r]=\l|G\r|/\l|\Stab_G\!\l(x_0\r)\r|$.

```

<b>Remark.</b> This result generalizes Lagrange’s Theorem. Indeed, let $H\substructeq G$ be a subgroup and consider the left-multiplication action of $H$ on $G$. For all $g\in G$, the orbit $\Orb_H\!\l(g\r)$ is simply the right coset $Hg$ and the stabilizer $\Stab_H\!\l(g\r)$ is trivial. Since $G=\coprod_{i\in I}\Orb_H\!\l(g_i\r)=\coprod_{i\in I}Hg$, we see that
$$\begin{equation}
    \l|G\r|=\sum_{i\in I}\l|\Orb_H\!\l(g_i\r)\r|=\sum_{i\in I}\frac{\l|H\r|}{\l|\Stab_H\!\l(g_i\r)\r|}=\sum_{i\in I}\l|H\r|,
\end{equation}$$
so $\l|H\r|$ divides $\l|G\r|$. Moreover, $\l|I\r|$ is precisely $\l[G:H\r]$, which recovers Lagrange’s Theorem.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Set $H\coloneqq\Stab_G\!\l(x_0\r)$. Consider the function $f:G\to\Orb_G\!\l(x_0\r)$ given by $f\l(g\r)\coloneqq gx_0$. Then
$$\begin{equation}
    f\l(g_1\r)=f\l(g_2\r)\ \ \ \ \Leftrightarrow\ \ \ \ g_1x_0=g_2x_0\ \ \ \ \Leftrightarrow\ \ \ \ g_2^{-1}g_1x_0=x_0\ \ \ \ \Leftrightarrow\ \ \ \ g_2^{-1}g_1\in H\ \ \ \ \Leftrightarrow\ \ \ \ g_1H=g_2H,
\end{equation}$$
so $f$ descends to a function $\widetilde{f}:G/H\to\Orb_G\!\l(x_0\r)$ given by $\widetilde{f}\l(gH\r)\coloneqq gx_0$. We claim that $\widetilde{f}$ is an equivariant bijection.
* Take $x\in\Orb_G\!\l(x_0\r)$. Then $x=gx_0$ for some $g\in G$, so $\widetilde{f}\l(gH\r)=gx_0=x$. That $\widetilde{f}$ is injective follows from the computation above, so $\widetilde{f}$ is a bijection.
* Take $g_1,g_2\in G$ and observe that $\widetilde{f}\l(g_1\cdot\l(g_2H\r)\r)=\widetilde{f}\l(\l(g_1g_2\r)H\r)=\l(g_1g_2\r)x_0=g_1\l(g_2x_0\r)=g_1\cdot\widetilde{f}\l(g_2H\r)$.<span style="float:right;">$\blacksquare$</span>
