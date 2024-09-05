---
title: Smooth Manifold
date: 2024-09-04T20:48:47-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The theory of *smooth manifolds* gives an appropriate setting to do {{< link file="calculus_in_reals" display="calculus" type="references" >}} in higher dimensions and curved spaces. Classically, this is done within {{< link file="real_number.md" display="$\R^n$" type="references" >}}, but we would like to work in a more abstract setting without embeddings into $\R^n$. This begs the following question:

<div class="space"></div>
<div class="center">
    <i>How can we faithfully transport the fundamental properties of $\R$ that makes calculus possible to more abstract spaces?</i>
</div>
<div class="space"></div>

Indeed, the main property of $\R$ is that it is the unique{{< link file="real_number.md" type="justifications" mod="dag" section="Characterization of Reals" >}} {{< link file="dedekind_completeness" display="complete" type="references" >}} {{< link file="ordered_field.md" display="ordered" type="references" >}} {{< link file="field" display="field" type="references" >}}, which calculus is based on, so any such abstract notion must make contact with $\R$. We will consider ({{< link file="topological_space.md" display="topological" type="references" >}}) {{< link file="manifold.md" display="manifolds" type="references" >}} as the abstract spaces, which has charts that make contact with $\R$, so it remains to faithfully represent the smooth structure of $\R$.

{{< env type="definition" >}}

Let $n\in\N$. A *smooth $n$-manifold* is a (topological) $n$-manifold equipped with a *maximal smooth atlas* $\ms{A}$, which is a maximal collection of charts $\ms{A}\coloneqq\l\\{(U_\alpha,\phi_\alpha)\r\\}$ such that if $U_\alpha\cap U_\beta\neq\em$, then the transition map
$$\begin{equation}
    \phi_\beta\circ\phi_\alpha^{-1}:\phi_\alpha(U_\alpha\cap V_\alpha)\to\phi_\beta(U_\alpha\cap V_\alpha)
\end{equation}$$
is smooth as a map from an open subset of $\R^n$ to $\R^n$.

{{< /env >}}

**Remark.** We can weaken the compatibility condition by only requiring that the transitions maps be $C^k$ instead of smooth (which we write as $C^\infty$), leading to *$C^k$-manifolds*. In fact, many results only require $C^1$ or $C^2$, but we’ll work with *$C^\infty$-manifolds* for now.

<div class="space"></div>

## Smooth Functions and Maps

Not only can we describe the smoothness of spaces, we can also determine whether a function $f:M\to\R$ or a map $F:M\to N$ is smooth; this allows us to define a notion of ‘derivatives’ of those maps.

{{< env type="definition" >}}

Let $M$ be a smooth manifold. A function $f:M\to\R$ is *smooth* if for every $p\in M$, there is a chart $(U,\phi)\ni p$ of $M$ such that the composite $f\circ\phi^{-1}:\phi(U)\to\R$ is smooth.

{{< /env >}}

**Remark.** This definition is ‘independent of charts’, in the sense that if $f\circ\phi^{-1}$ is smooth and $(U',\phi')$ is another chart around $p$, then $f\circ\phi'^{-1}$ is also smooth since $f\circ\phi'^{-1}=f\circ(\phi^{-1}\circ\phi)\circ\phi'^{-1}=(f\circ\phi^{-1})\circ(\phi\circ\phi'^{-1})$; that the transition map is smooth is *stipulated* as part of the smooth structure of $M$. In this sense, all local properties of $f$ boil down to checking it for its coordinate representation $f\circ\phi^{-1}$ and ensuring that it is preserved under chart transition maps.

<div class="space"></div>

&emsp;&emsp;The same game can be played to show that the following definition is independent of charts too.

{{< env type="definition" >}}

Let $M,N$ be smooth manifolds. A map $F:M\to N$ is *smooth* if for every $p\in M$, there are charts $(U,\phi)\ni p$ of $M$ and $(V,\psi)\ni F(p)$ of $N$ with $F(U)\subseteq V$, such that the composite $\psi\circ F\circ\phi^{-1}:\phi(U)\to\psi(V)$ is smooth.

{{< /env >}}
