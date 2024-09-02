---
title: Free Module
date: 2024-08-31T12:23:37-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $M$ be an {{< link file="module" display="$R$-module" type="references" >}} over a commutative {{< link file="ring" display="ring" type="references" >}} $R$. In general, $M$ *need not* admit a {{< link file="basis_module_theory.md" display="basis" type="references" >}}, which makes the theory of $R$-modules more complicated that that of {{< link file="vector_space.md" display="vector spaces" type="references" >}} (indeed, $R$ is a {{< link file="field" display="field" type="references" >}} iff{{< link file="field" type="justifications" mod="dag" >}} every $R$-module admits a basis). To simplify the situation, we will only consider $R$-modules that admit bases, and those are very special:

{{< env type="definition" >}}

An $R$-module is said to be *free* if it admits a basis, i.e., if there is an isomorphism $M\iso R^{\oplus B}$ for some $B\subseteq M$.

{{< /env >}}

A choice of a particular basis $B\subseteq M$ thus amounts to a choice of a particular isomorphism $M\iso R^{\oplus B}$. The good news is that we can understand $\Hom(M_1,M_2)$ for free modules $M_1,M_2$ by understanding $\Hom(R^{\oplus B_1},R^{\oplus B_2})$ instead, since they are isomorphic; the bad news is that this isomorphism is *not canonical* since it depends on the identifications $M_i\iso R^{\oplus B_i}$.

<div class="space"></div>

## Invariant Basis Number

If $M\iso R^{\oplus B}$ is a free module and $R$ is *commutative* ring, this $B$ is determined up to a bijection, and its cardinal is called the *rank* $\rk_RM$ of $M$. In general, rings in which this holds are said to have the *invariant basis number* property.

{{< env type="lemma" >}}

If $R$ is a commutative ring and $A,B$ are sets, then $R^A\iso R^B$ iff $|A|=|B|$. <span style="color:gray">[We write $R^A\coloneqq R^{\oplus A}$ for convenience].</span>

{{< /env >}}

{{< env type="proof" hide="false" >}}

The converse is trivial. Let $\mf{m}\nsubgrp R$ be a {{< link file="prime_and_maximal_ideals.md" display="maximal" type="references" >}} ideal (exists by {{< link file="prime_and_maximal_ideals.md" display="Krull’s Theorem" type="proved_by" section="Existence of Maximal Ideals" >}}) and consider the {{< link file="quotient_ring.md" display="quotient" type="references" >}} $k\coloneqq R/\mf{m}$, which is a field since $R$ is commutative. The key is that any module $M$ with $\mf{m}M=0$ admits a natural $k$-vector space structure.

> Indeed, let $k$ act on $M$ by $(r+\mf{m})m\coloneqq rm$. This is well-defined since if $\bar{r_1}=\bar{r_2}$, then $r_1m-r_2m=(r_1-r_2)m\in\mf{m}m=0$.

Since $\mf{m}(R^A/\mf{m}R^A)=0$, this makes $R^A/\mf{m}R^A$ into a $k$-vector space, and we have a map $\pi:R^A\onto k^A$ with $\ker\pi=\mf{m}R^A$. Thus we have $R^A/\mf{m}R^A\iso k^A$, and similarly for $B$, so $k^A\iso k^B$. Finally, the {{< link file="vector_space.md" display="Exchange Lemma" type="proved_by" section="Existence of Bases" >}} for $k$-vector spaces forces $|A|=|B|$, as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# Homomorphisms of (f.g.) Free Modules

We now focus on the {{< link file="category" display="category" type="references" >}} of *finitely-generated* free $R$-modules over a commutative ring $R$. After identifying each such $R$-module $M$ with $R^n$ for some $n\in\N$, we see that $\Hom(M_1,M_2)\iso\Hom(R^n,R^m)$. Thus, the study of $\Hom(M_1,M_2)$ reduces to $\Hom(R^n,R^m)$ *and* also how the situation changes when we change bases for $M_i$.

<div class="space"></div>

## Matrices

The fundamental result is that each morphism in $\Hom(R^n,R^m)$ is uniquely determined by an $m\times n$ table of elements $r_{ij}\in R$, called a *matrix*. The set of $m\times n$ matrices is denoted by $\mc{M}_{m\times n}(R)$ or $\mc{M}_n(R)$ when $m=n$, and the bijection
$$\begin{equation}
    f:\Hom(R^n,R^m)\ni f\mapsto
    \begin{pmatrix}
        | & | & & | \\\\
        f(e_1) & f(e_2) & \cdots & f(e_m) \\\\
        | & | & & |
    \end{pmatrix}\in\mc{M}\_{m\times n}(R)
\end{equation}$$
induces an $R$-module structure on $\mc{M}\_{m\times n}(R)$, where each $e_i\in R^n$ is the tuple with $1$ in the $i^\textrm{th}$ coordinate and vanishing elsewhere, and each $f(e_i)$ is placed as a column in the matrix. We now check that this is a bijection.

>{{< env type="proof" hide="false" >}}

We provide the inverse function, so let $(r_{ij})\in\mc{M}\_{m\times n}(R)$ be a matrix. For each $1\leq i\leq n$, let $f(e_i)\coloneqq(r_{1i},\dots,r_{mi})\in R^m$. Since $\l\\{e_1,\dots,e_n\r\\}$ is a basis for $R^n$, this map extends{{< link file="free_module" type="proved_by" mod="dag" >}} uniquely to an $R$-module homomorphism $f:R^n\to R^m$; this recipe clearly the inverse of $f$. Explicitly, $f(e_i)=\sum_{j\leq m}r_{ij}e_j$ iff $f\mapsto(r_{ij})$; this formula is worth remembering!<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

This also induces a *matrix multiplication* operation $\mc{M}\_{m\times n}(R)\times\mc{M}\_{n\times p}(R)\to\mc{M}\_{m\times p}(R)$, corresponding to composition of morphisms.

<div class="space"></div>

## Change of Basis

The issue is that the isomorphism $\Hom(M_1,M_2)\iso\Hom(R^n,R^m)$ is *not canonical*, since it depends on the specific choices of isomorphisms $M_1\iso R^n$ and $M_2\iso R^m$ (i.e., choices of bases). If we change bases for either $M_i$, we must expect the matrix representation $\Phi$ to change as well, but, fortunately, it does so in a controlled way.

<br>

&emsp;&emsp;For a single $R$-module $M$, let $\phi_i:M\to R^n$ be different basis representations. The *basis transition map* $\phi_2\circ\phi_1^{-1}:R^n\to R^n$ is a morphism in $\Hom(R^n,R^n)$, which by the above corresponds uniquely to a *change of basis* matrix $P\in\mc{M}_n(R)$ *from $\phi_1$ to $\phi_2$*. Now, play the same game for another such $R$-module $N$ with two different basis representations $\psi_i:N\to R^m$, and let $Q\in\mc{M}_m(R)$ be the change of basis matrix from $\psi_i$ to $\psi_2$. Let $f\in\Hom(M,N)$ be an $R$-module homomorphism.

{{< tikz name="change_of_basis" width="400" >}}
\begin{equation*}
    \begin{tikzcd}
        R^n \ar[dd, "P"'] &                                                    &                                        & R^m \ar[dd, "Q"] \\
                          & M \ar[r, "f"] \ar[ul, "\phi_1"'] \ar[dl, "\phi_2"] & N \ar[ur, "\psi_1"] \ar[dr, "\psi_2"'] & \\
        R^n               &                                                    &                                        & R^m
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

With respect to the representations $\phi_1$ and $\psi_2$, the matrix representing $f$ is that of $f'\coloneqq\psi_1\circ f\circ\phi_1^{-1}$; note that there are two steps here: $f\rightsquigarrow f'\_1\rightsquigarrow\Phi(f'\_1)$. Similarly, choosing $\phi_2$ and $\psi_2$ induces a matrix $\Phi(f'_2)$, and they are related by $\Phi(f_2')=Q\Phi(f_1')P^{-1}$.

<br>

&emsp;&emsp;The upshot of this discussion is that for $f\in\Hom(M,N)$, any two matrix representations of $f$ are related by multiplying suitable invertible matrices $Q,P$ by chasing the diagram above. This induces an equivalence relation $\sim$ on $\mc{M}_{m\times n}(R)$, which identifies two matrices $A\sim B$ iff they are induced by the same homomorphism, i.e. $B=QAP$ for some invertible $P\in\mc{M}_n(R)$ and $Q\in\mc{M}_m(R)$.
