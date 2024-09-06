---
title: Orbit Stabilizer Theorem
date: 2024-06-03T17:04:49-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Statement & Proof

Let $G$ be a {{< link file="group.md" display="group" type="references" >}} {{< link file="group_action.md" display="acting" type="references" >}} on a non-empty set $X$, which restricts to an action on each orbit $\Orb_G(x_0)$. It turns out that this action is isomorphic (as a $G$-set) to a left-multiplication action of $G$. More precisely, we have the following

{{< env type="theorem" name="Orbit-Stabilizer" >}}

Let $G$ be a group and let $(X,x_0)$ be a pointed $G$-set. Then there is a $G$-equivariant bijection $\Orb_G(x_0)\iso G/\Stab_G(x_0)$, where $G/\Stab_G(x_0)$ is equipped with the natural left-multiplication $G$-action.

{{< /env >}}

{{< env type="proof" >}}

Let $H\coloneqq\Stab_G(x_0)$ and consider the map $f:G\to\Orb_G(x_0):g\mapsto gx_0$. Since $f(g_1)=f(g_2)$ iff $g_2^{-1}g_1\in H$, which occurs iff $g_1H=g_2H$, we see that $f$ descends{{< link file="quotient_set.md" type="proved_by" mod="dag" secID="universal_property" secDisplay="Universal Property" >}} into an injective map $\widetilde{f}:G/H\to\Orb_G(x_0)$ mapping $gH\mapsto gx_0$. It is also surjective, since for all $x\in\Orb_G(x_0)$, say with $x=gx_0$, we have $\widetilde{f}(gH)=x$, and is $G$-equivariant since for all $g_1,g_2\in G$, we have
$$\begin{equation}
    \widetilde{f}(g_1\cdot(g_2H))=\widetilde{f}((g_1g_2)H)=(g_1g_2)x_0=g_1(g_2x_0)=g_1\widetilde{f}(g_2H).\qedin
\end{equation}$$

{{< /env >}}

In particular, if $G\act X$ is *transitive* so that $\Orb_G(x_0)=X$ for any $x_0\in X$, then $X$ is $G$-equivariant to $G/\\!\Stab_G(x_0)$ for any $x_0\in X$.

# Corollaries

## {{< link file="finite_group.md" display="Finite Group" type="references" >}} Theory

When $G$ is a finite group, we have the equality $\l|\Orb_G(x_0)\r|=\l|G/\Stab_G(x_0)\r|$, and this is usually how Orbit-Stabilizer applies in this context. Some important applications of this include:
* *{{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="corollaries" >}}*, which essentially states that the cosets of any subgroup $H\substructeq G$ are all equinumerous, for which there are $[G:H]\coloneqq\l|G/H\r|=\l|G\r|/\l|H\r|$ many. This can be proved by letting $H$ act on $G$ by left-multiplication.
* *{{< link file="the_class_equation.md" display="The Class Equation" type="corollaries" >}}* counts the elements of a finite $G$-set $X$ by partitioning it into its fixed points and its non-trivial orbits, and we can use the above to write the non-trivial orbits in terms of the stabilizer.

<h2 class="noSpace">Covering Space Theory</h2>

<span style="color:red">**TODO**.</span>
