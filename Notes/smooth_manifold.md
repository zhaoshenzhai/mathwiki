---
title: Smooth Manifold
date: 2024-09-04T20:48:47-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The theory of *smooth manifolds* gives an appropriate setting to do calculus in higher dimensions and curved spaces. Classically, this is done within $\R^n$, but we would like to work in a more abstract setting without embeddings into $\R^n$. This begs the following question:

<div class="space"></div>
<div class="center">
    <i>How can we faithfully transport the fundamental properties of $\R$ that makes calculus possible to more abstract spaces?</i>
</div>
<div class="space"></div>

Indeed, the main property of $\R$ is that it is the unique complete ordered field, which calculus is based on, so any such abstract notion must make contact with $\R$. We will consider (topological) {{< link file="manifold.md" display="manifolds" type="references" >}} as the abstract spaces, which has charts that make contact with $\R$, so it remains to faithfully represent the smooth structure of $\R$.

{{< env type="definition" >}}

Let $n\in\N$. A *smooth $n$-manifold* is a (topological) $n$-manifold equipped with a *maximal smooth atlas* $\ms{A}$, which is a maximal collection of charts $\ms{A}\coloneqq\l\\{(U_\alpha,\phi_\alpha)\r\\}$ such that if $U_\alpha\cap U_\beta\neq\em$, then the transition map
$$\begin{equation}
    \phi_\beta\circ\phi_\alpha^{-1}:\phi_\alpha(U_\alpha\cap V_\alpha)\to\phi_\beta(U_\alpha\cap V_\alpha)
\end{equation}$$
is smooth as a map from an open subset of $\R^n$ to $\R^n$.

{{< /env >}}

**Remark.** We can weaken the compatibility condition by only requiring that the transitions maps be $C^k$ instead of smooth (which we write as $C^\infty$), leading to *$C^k$-manifolds*. In fact, many results only require $C^1$ or $C^2$, but we’ll work with *$C^\infty$-manifolds* for now.
