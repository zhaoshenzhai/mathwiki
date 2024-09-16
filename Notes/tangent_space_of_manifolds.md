---
title: Tangent Space of Manifolds
date: 2024-09-05T10:47:02-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

In elementary calculus on $\R^2$, one uses the techniques of derivatives, and hence *tangent lines at a point*, to study the local behaviour of curves. This philosophy of probing the local structure of the space via derivatives is the *raison d'être* of {{< link file="smooth_manifold.md" display="smooth" type="references" >}} {{< link file="manifold.md" display="manifolds" type="references" >}}, and they provide a suitable structure to define a well-behaved notion of *tangent spaces*.

<br>

&emsp;&emsp;However, our definition must be intrinsic to the smooth structure of a manifold $M$ and not depend on any embedding $M\into\R^k$, so a certain level of abstraction is needed. The key observation is that the ‘space of directions’ at a point can be identified with the set of directional derivatives at that point, so we take those {{< link file="derivation.md" display="derivations" type="references" >}} as our starting point. To emphasize that the tangent space at a point $p\in M$ depends only on the *local* structure around $p$, we shall descend to the level of {{< link file="smooth_manifold.md" display="germs" type="references" secID="sheaf_of_smooth_functions" secDisplay="Sheaf of Smooth Functions" >}}, denoted $C^\infty_p(M)$:

{{< env type="definition" >}}

Let $M$ be a smooth manifold and $p\in M$. The *tangent space* of $M$ at $p$ is the {{< link file="vector_space.md" display="vector space" type="references" >}} of all derivations at $p$:
$$\begin{equation}
    T_pM\coloneqq\l\\{v\in\Hom_\R(C_p^\infty(M),\R)\st v(fg)=v(f)g(p)+f(p)v(g)\r\\}.
\end{equation}$$

{{< /env >}}



## The Differential

Every smooth map $f:M\to N$ induces a linear map $T_pf:T_pM\to T_{f(p)}N$ between tangent spaces by push-forward of derivations, i.e., $v\mapsto(g\mapsto v(f\circ g))$. Since $T_p(g\circ f)=T_{f(p)}g\circ T_pf$, this defines a {{< link file="functor.md" display="functor" type="references" >}} $T:\catman_\blob\to\catvect[\R]$ from the {{< link file="category.md" display="category" type="references" >}} of pointed manifolds, which informally forgets everything but the local properties of manifolds at a fixed point.

<br>

&emsp;&emsp;Let us apply this functor to any chart $(U,\phi)$ for $M$ centered at $p$. Note that $C_p^\infty(U)=C_p^\infty(M)$, so the tangent spaces $T_pU,T_pM$ coincide, and hence $T_p\phi:T_pM\to T_{\widehat{p}}\R^n$. This is an isomorphism, since $\phi$ is. We claim that $\dim T\_\widehat{p}\R^n=n$, so $\dim T\_pM=n$ too.

<div class="space"></div>

{{< env type="proof" hide="false" >}}

We claim that for every $p\in\R^n$, the map $\R^n\to T_p\R^n$ sending $v\mapsto v^i\del_i|_p$ is an isomorphism. This map is clearly linear, and is injective since if $v^i\del\_i|\_p=0$, then $0=v^i\del\_i|\_p(x^j)=v^j$ for all $j$, and hence $v=0$. To see that it is surjective, let $D\in T\_p\R^n$ be a derivation. For each $j$, let $v^j\coloneqq D(x^j)$; we claim that $D=v^i\del\_i|\_p$. Indeed, for every $f\in C^\infty(\R^n)$, we have{{< link file="calculus_on_R.md" type="proved_by" mod="dag" secID="fundamental_theorem_of_calculus" >}}
$$\begin{equation}
    f(x)-f(p)=\int\_0^1\frac{\d}{\d t}f(p+t(x-p))\\,\d t=(x^i-p^i)\int\_0^1\del\_if(p+t(x-p))\\,\d t\eqqcolon(x^i-p^i)h\_i(x),
\end{equation}$$
so using that $D(\textrm{const})=0$, we obtain $Df=D(x^i)h_i(p)$. But $D(x^i)=v^i$ and $h\_i(p)=\del\_i|\_pf$, so $Df=v^i\del\_i|\_pf$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

&emsp;&emsp;An immediate consequence is that $\dim T_pM=\dim M$, where the latter is the dimension of $M$ as a manifold. Choosing{{< link file="vector_space.md" mod="dag" type="justifications" secID="existence_of_bases" secDisplay="Existence of Bases" >}} a {{< link file="basis_module_theory.md" display="basis" type="references" >}}, this computation also gives an isomorphism $T_pV\iso V$ for any $p\in V$ in a vector space, which is in fact {{< link file="natural_transformation.md" display="natural" type="references" >}}.

<h2 class="hide">Local Computations</h2>

The computation of $T\_{\widehat{p}}\R^n$ allows us to pull back the basis vectors $e\_i\in\R^n$ to $\del\_i|\_\widehat{p}\in T\_\widehat{p}\R^n$, which we can further pull back via the isomorphism $T\_p\phi:T\_pM\to T\_\widehat{p}\R^n$ to a basis $\frac{\del}{\del x^i}|_p\coloneqq(T_p\phi)^{-1}\del\_i|\_\widehat{p}$ for $T_pM$. All of this is done under a *fixed* chart $(U,x^i)$ around $p$, so we opt the more cumbersome notation $\frac{\del}{\del x^i}|_p$ to emphasize the use of the map $x^i:U\to\R^n$.

<br>

&emsp;&emsp;Choosing a chart also allows one to compute the tangent map $T_pf:T_pM\to T_{f(p)}N$ of a smooth map $f:M\to N$. In fact, the matrix{{< link file="free_module.md" mod="dag" type="references" secID="homomorphisms_of_f.g._free_modules" secDisplay="Homomorphisms of (f.g.) Free Modules" >}} of $T_pf$ will be the *Jacobian* of the map $\psi\circ f\circ\phi^{-1}$, which nicely generalizes the same thing from multivariable calculus:
$$\begin{equation}\tag{$\ast$}
    T\_pf\l(\l.\frac{\del}{\del x^i}\r|\_p\r)=\l[\l.\del_i(\psi\circ f\circ\phi^{-1})^j\r|\_\widehat{p}\r]\l.\frac{\del}{\del y^j}\r|\_{f(p)}\eqqcolon J\_\widehat{p}(\psi\circ f\circ\phi^{-1})\l.\frac{\del}{\del y^j}\r|\_{f(p)}
\end{equation}$$

Finally, two charts $(U,\phi)$ and $(V,\psi)$ around $p$ induces two (possibly) different bases for $T_pM$, so we need to understand how they are related. Applying the above to the map $\psi\circ\phi^{-1}$ and using functoriality of $T_p$ (i.e, the Chain Rule) gives us that
$$\begin{equation}
    \l.\frac{\del}{\del x^i}\r|\_p=\l(T\_{\phi(p)}\phi^{-1}\r)(\del\_i|_p)=\l(T\_{\psi(p)}\psi^{-1}\r)\circ T\_{\phi(p)}(\psi\circ\phi^{-1})(\del\_i|_p)=\l(T\_{\psi(p)}\psi^{-1}\r)\l(J\_{\phi(p)}(\psi\circ\phi^{-1})\del\_i|_p\r)=J\_{\phi(p)}(\psi\circ\phi^{-1})\l.\frac{\del}{\del y^j}\r|\_p.
\end{equation}$$
Moreover, if $v\in T_pM$ has basis representations $v^i\frac{\del}{\del x^i}|_p$ and $\widetilde{v}^j\frac{\del}{\del y^j}|_p$, then $\widetilde{v}^j=J\_{\phi(p)}(\psi\circ\phi^{-1})v^i$ by matching components.

## Velocity Vectors

# General Uses and Techniques

## Local Properties of Smooth Maps

## The Tangent Bundle
