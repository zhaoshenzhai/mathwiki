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

The converse is trivial, so suppose that $R^A\iso R^B$. Let $\mf{m}\nsubgrp R$ be a {{< link file="prime_and_maximal_ideals.md" display="maximal" type="references" >}} ideal (exists by {{< link file="prime_and_maximal_ideals.md" display="Krull’s Theorem" type="proved_by" section="Existence of Maximal Ideals" >}}) and consider the {{< link file="quotient_ring.md" display="quotient" type="references" >}} $k\coloneqq R/\mf{m}$, which is a field. The key is that any module $M$ with $\mf{m}M=0$ admits a natural $k$-vector space structure.

> Indeed, let $k$ act on $M$ by $(r+\mf{m})m\coloneqq rm$. This is well-defined since if $\bar{r_1}=\bar{r_2}$, then $r_1m-r_2m=(r_1-r_2)m\in\mf{m}m=0$.

Since $\mf{m}(R^A/\mf{m}R^A)=0$, this makes $R^A/\mf{m}R^A$ into a $k$-vector space, and we have a map $\pi:R^A\onto k^A$ with $\ker\pi=\mf{m}R^A$. Thus we have $R^A/\mf{m}R^A\iso k^A$, and similarly for $B$, so $k^A\iso k^B$. Finally, the {{< link file="vector_space.md" display="Exchange Lemma" type="proved_by" section="Existence of Bases" >}} for $k$-vector spaces forces $|A|=|B|$, as desired.<span style="float:right;">$\blacksquare$</span>
{{< /env >}}

# Homomorphisms of (f.g.) Free Modules
