---
title: Orbit Stabilizer Theorem
date: 2024-06-03T17:04:49-04:00
references: [Alu09]
tags: [Group_Theory, In_Progress]
---

# Statement & Proof

Let $G\act X$ {{< link file="group_action" display="act" type="references" >}} on a set and fix $x_0\in X$.

{{< env type="theorem" name="Orbit-Stabilizer" >}}

Let $G$ be a group and let $(X,x_0)$ be a pointed $G$-set. Equipping $G/\Stab_G(x_0)$ with the natural left-multiplication $G$-action, we have a $G$-equivariant bijection $\Orb_G(x_0)\iso G/\Stab_G(x_0)$.

{{< /env >}}

{{< env type="proof" >}}

Let $H\coloneqq\Stab_G(x_0)$ and consider the map $f:G\to\Orb_G(x_0):g\mapsto gx_0$. Since
$$\begin{equation}
    f(g_1)=f(g_2)\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ g_2^{-1}g_1x_0=x_0\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ g_1H=g_2H,
\end{equation}$$
we see that $f$ descends {{< link file="catset_is_complete" type="proved_by" mod="dag" section="universality_of_quotient" >}} into an injective map $\widetilde{f}:G/H\to\Orb_G(x_0):gH\mapsto gx_0$. It is surjective since for all $x\in\Orb_G(x_0)$, say with $x=gx_0$, we have $\widetilde{f}(gH)=x$, and is $G$-equivariant since for all $g_1,g_2\in G$, we have
$$\begin{equation}
    \widetilde{f}(g_1\cdot(g_2H))=\widetilde{f}((g_1g_2)H)=(g_1g_2)x_0=g_1(g_2x_0)=g_1\widetilde{f}(g_2H).\qedin
\end{equation}$$

{{< /env >}}

# Corollaries

## Lagrange’s Theorem

<div class="space"></div>

## The Class Equation

# Generalizations
