---
title: Smooth Manifold
date: 2024-09-04T20:48:47-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The theory of *smooth manifolds* gives an appropriate setting to do {{< link file="calculus_in_reals.md" display="calculus" type="references" >}} in higher dimensions and curved spaces. Classically, this is done within {{< link file="real_number.md" display="$\R^n$" type="references" >}}, but we would like to work in a more abstract setting without embeddings into $\R^n$. This begs the following question:

<div class="space"></div>
<div class="center">
    <i>How can we faithfully transport the fundamental properties of $\R$ that makes calculus possible to more abstract spaces?</i>
</div>
<div class="space"></div>

Indeed, the main property of $\R$ is that it is the unique{{< link file="real_number.md" type="justifications" mod="dag" id="characterization_of_reals" sec="Characterization of Reals" >}} {{< link file="dedekind_completeness.md" display="complete" type="references" >}} {{< link file="ordered_field.md" display="ordered" type="references" >}} {{< link file="field.md" display="field" type="references" >}}, which calculus is based on, so any such abstract notion must make contact with $\R$. We will consider ({{< link file="topological_space.md" display="topological" type="references" >}}) {{< link file="manifold.md" display="manifolds" type="references" >}} as the abstract spaces, which has charts that make contact with $\R$, so it remains to faithfully represent the smooth structure of $\R$.

{{< env type="definition" >}}

Let $n\in\N$. A *smooth $n$-manifold* is a (topological) $n$-manifold equipped with a *maximal smooth atlas* $\ms{A}$, which is a maximal collection of charts $\ms{A}\coloneqq\l\\{(U_\alpha,\phi_\alpha)\r\\}$ such that if $U_\alpha\cap U_\beta\neq\em$, then the transition map
$$\begin{equation}
    \phi_\beta\circ\phi_\alpha^{-1}:\phi_\alpha(U_\alpha\cap V_\alpha)\to\phi_\beta(U_\alpha\cap V_\alpha)
\end{equation}$$
is smooth as a map from an open subset of $\R^n$ to $\R^n$.

{{< /env >}}

**Remark.** The smooth structure is an *additional* piece of data that must be provided, and in general, there are many such choices.

<div class="space"></div>

## Smooth Maps

We would like to ‘lift’ the notion of smoothness of maps $f:\R^n\to\R^m$ to manifolds. By design, this can only be done by testing $f:M\to N$, for manifolds $M,N$, against charts:

{{< env type="definition" >}}

Let $M,N$ be smooth manifolds. A map $f:M\to N$ is *smooth* if for every $p\in M$, there are charts $(U,\phi)\ni p$ of $M$ and $(V,\psi)\ni f(p)$ of $N$ with $f(U)\subseteq V$, such that the composite $\psi\circ f\circ\phi^{-1}:\phi(U)\to\psi(V)$ is smooth.

{{< /env >}}

With morphisms as smooth maps, smooth manifolds form a {{< link file="category.md" display="category" type="references" >}}, denoted by $\catman$ or $C^\infty$.

<div class="space"></div>

**Remark.** This definition is ‘independent of charts’, in the sense that if $\psi_1\circ f\circ\phi_1^{-1}$ is smooth and $(U_2,\phi_2)\ni p$ and $(V_2,\psi_2)\ni f(p)$ are other charts of $M$ and $N$ with $f(U_2)\subseteq V_2$, then $\psi_2\circ f\circ\phi_2^{-1}$ is also smooth.

>{{< env type="proof" hide="true" >}}

Indeed, we have
$$\begin{equation}
    \psi_2\circ f\circ\phi_2^{-1}=\psi_2\circ(\psi_1^{-1}\circ\psi_1)\circ f\circ(\phi_1^{-1}\circ\phi_1)\circ\phi_2^{-1}=(\psi_2\circ\psi_1^{-1})\circ(\psi_1\circ f\circ\phi_1^{-1})\circ(\phi_1\circ\phi_2^{-1}),
\end{equation}$$

{{< tikz name="smooth_maps_chart_transition" width="500" >}}
\begin{equation*}
    \begin{tikzcd}
        \R^n \ar[dd, "\phi_2\circ\phi_1^{-1}"'] & & & \R^m \ar[dd, "\psi_2\circ\psi_1^{-1}"] \\
        & M \ar[r, "f"] \ar[ul, "\phi_1"'] \ar[dl, "\phi_2"] & N \ar[ur, "\psi_1"] \ar[dr, "\psi_2"'] & \\
        \R^n & & & \R^m
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

and the latter is smooth since $\psi_1\circ f\circ\phi_1^{-1}$ is and transitions maps are *stipulated* to be smooth to begin with. Symbolically, this computation is very similar to the {{< link file="free_module.md" display="change of basis" type="references" id="change_of_basis" sec="Change of Basis" >}} formula from linear algebra.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

In this sense, all local properties of $f$ boil down to checking it for its coordinate representation $\hat{f}\coloneqq\psi\circ f\circ\phi^{-1}$ and ensuring that it is preserved under chart transition maps. This illustrates the basic philosophy of smooth manifold theory.

<div class="space"></div>

&emsp;&emsp;The set of all smooth maps $f:M\to N$ is denoted by $C^\infty(M,N)$. With $N\coloneqq\R$ equipped with the standard smooth structure, we let $C^\infty(M)\coloneqq C^\infty(M,\R)$, which is a commutative $\R$-{{< link file="algebra.md" display="algebra" type="references" >}} under pointwise multiplication.

<div class="space"></div>

## Sheaf of Smooth Functions

<span style="color:red">**TODO** (sheafs, stalks, germs, soft sheafs and POU, etc...).</span>

# {{< link file="tangent_space.md" display="Tangent Spaces" type="constructions" >}} & Linearization
