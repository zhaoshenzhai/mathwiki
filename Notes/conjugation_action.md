---
title: Conjugation Action
date: 2024-06-21T20:09:18-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

One fundamental way that a {{< link file="group" display="group" type="references" >}} can {{< link file="group_action" display="act" type="references" >}} on itself is via *conjugation*, defined by $\phi_g(x)\coloneqq gxg^{-1}$ for all $g\in G$. This action provides several important constructions.
* The *conjugacy classes* of $G$ are the orbits of $\phi$, and two elements $x,y\in G$ are *conjugate* if they are in the same class, in that $y=gxg^{-1}$ for some $g\in G$.
* The *center* $Z(G)\nsubgrpeq G$ is the fixed points of $\phi$; i.e.,
$$\begin{equation}
    Z(G)\coloneqq\ker\phi=\l\\{g\in G\st gx=xg\textrm{ for all }x\in G\r\\}.
\end{equation}$$
* The *centralizer* of $x\in G$ is the stabilizer $Z_G(x)\coloneqq\Stab_G(x)=\l\\{g\in G\st gx=xg\r\\}$. Note that $Z(G)=\bigcap_{x\in G}Z_G(x)$, and that $x\in Z(G)$ iff $Z_G(x)=G$.

## {{< link file="the_class_equation" display="The Class Equation" type="properties" >}}

# Action on {{< link file="subgroup" display="Subgroups" type="references" >}}

More generally, one can let $G$ act on the collection of all subsets (or subgroups) of $G$ via conjugation, by $\phi_g(H)\coloneqq gHg^{-1}$; we say that $H,K\substructeq G$ are *conjugate* if they are in the same class. However, the situation now differs from the previous case, as we now have setwise vs. pointwise stabilizers:
* The *normalizer* of $H\substructeq G$ is the (setwise) stabilizer
$$\begin{equation}
    N_G(H)\coloneqq\Stab_G(H)=\l\\{g\in G\st gHg^{-1}=H\r\\}.
\end{equation}$$
Clearly $H\nsubgrpeq N_G(H)$, and $H\nsubgrpeq G$ is {{< link file="normal_subgroup" display="normal" type="references" >}} iff $N_G(H)=G$. Furthermore, $N_G(H)$ is the largest subgroup of $G$ in which $H$ is normal in.
* The *centralizer* of $H\substructeq G$ is the (pointwise) stabilizer
$$\begin{equation}
    Z_G(H)\coloneqq\l\\{g\in G\st gx=xg\textrm{ for all }x\in H\r\\}\subseteq N_G(H).
\end{equation}$$

Applying the {{< link file="orbit_stabilizer_theorem" display="Orbit Stabilizer Theorem" type="justifications" >}} to this action shows that for any $H\substructeq G$, the number of subgroups of $G$ conjugate to $H$ (i.e. $|\Orb_G(H)|$) $-$ if finite $-$ is the index $[G:N_G(H)]$ of the normalizer of $H$ in $G$ (i.e. $|G/\\!\Stab_G(H)|$).

<br>

&emsp;&emsp;In particular, if $[G:H]$ is finite, then {{< link file="lagranges_theorem" type="justifications" mod="dag" >}} the number of subgroups of $H$ conjugate to $H$ divides $[G:H]$, since $[G:H]=[G:N_G(H)]\cdot[N_G(H):H]$.
