---
title: Conjugation Action
date: 2024-06-21T20:09:18-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Motivation & Definition

Let $G$ be a {{< link file="group.md" display="group" type="references" >}}. Other than the left-multiplication {{< link file="group_action.md" display="action" type="references" >}} of $G$ on itself, there is another fundamental action of $G$:

{{< env type="definition" >}}

The *conjugation* action of $G$ is the action $\phi:G\to\Aut G$ defined by $\phi_g(x)\coloneqq gxg^{-1}$ for all $g,x\in G$.

{{< /env >}}

This action provides many fundamental constructions that are intrinsic to $G$.
* The *conjugacy classes* of $G$ are the orbits of $\phi$, and we call two elements $x,y\in G$ in the same class *conjugate* elements. That is, $x$ and $y$ are conjugate if $y=gxg^{-1}$ for some $g\in G$.
* The *center* $Z(G)\nsubgrpeq G$ is the fixed points of $\phi$, i.e., $Z(G)=\ker\phi$. In particular, it is {{< link file="normal_subgroup.md" display="normal" type="references" >}} in $G$. Unpacking the definitions, we see that $g\in Z(G)$ iff it commutes with every $x\in G$.
* The *centralizer* of $x\in G$ is the stabilizer $Z_G(x)\coloneqq\Stab_G(x)$. Note that $Z(G)=\bigcap_{x\in G}Z_G(x)$, and that $x\in Z(G)$ iff $Z_G(x)=G$.

## {{< link file="the_class_equation.md" display="The Class Equation" type="properties" >}}

Since the center $Z(G)$ is the set of fixed-points of the action, we may use the Class Equation to ‘glean’ the size of $Z(G)$ if one knows some structure of its non-trivial classes: indeed, we have
$$\begin{equation}
    |G|=|Z(G)|+\sum_{a\in A}[G:Z_G(a)],
\end{equation}$$
where $A\subseteq G$ contain exactly the elements with non-trivial classes.

<br>

&emsp;&emsp;A classical application is that $Z(G)$ is non-trivial{{< link file="fixed_point_theorems_of_p_groups.md" type="examples" mod="dag" >}} when $G$ is a {{< link file="finite_group.md" display="finite" type="references" >}} {{< link file="p_group.md" display="$p$-group" type="references" >}}.

<h1 id="action_on_subgroups">Action on {{< link file="subgroup.md" display="Subgroups" type="references" >}}</h1>

More generally, one can let $G$ act on the collection of all subsets (or subgroups) of $G$ via conjugation, by $\phi_g(H)\coloneqq gHg^{-1}$; we say that $H,K\substructeq G$ are *conjugate* if they are in the same class. However, the situation now differs from the previous case, as we now have setwise vs. pointwise stabilizers:
* The *normalizer* of $H\substructeq G$ is the (setwise) stabilizer $N_G(H)\coloneqq\Stab_G(H)$. Clearly $H\nsubgrpeq N_G(H)$, the subgroup $H\substructeq G$ is normal iff $N_G(H)=G$, and $N_G(H)$ is the largest subgroup of $G$ in which $H$ is normal in.
* The *centralizer* of $H\substructeq G$ is the (pointwise) stabilizer $Z_G(H)\coloneqq\bigcap_{x\in H}Z_G(x)\subseteq N_G(H)$.

Applying the {{< link file="orbit_stabilizer_theorem.md" display="Orbit Stabilizer Theorem" type="justifications" >}} to this action shows that for any $H\substructeq G$, the number of subgroups of $G$ conjugate to $H$ (i.e. $|\Orb_G(H)|$) $-$ if finite $-$ is the index $[G:N_G(H)]$ of the normalizer of $H$ in $G$ (i.e. $|G/\\!\Stab_G(H)|$).

<br>

&emsp;&emsp;In particular, if $[G:H]$ is finite, then the number of subgroups of $G$ conjugate to $H$ divides $[G:H]$, since we have by {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="justifications" >}} that $[G:H]=[G:N_G(H)]\cdot[N_G(H):H]$.
