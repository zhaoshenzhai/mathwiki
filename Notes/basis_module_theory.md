---
title: Basis (Module Theory)
date: 2024-08-31T09:09:40-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Given an {{< link file="module" display="$R$-module" type="references" >}} $M$ over a commutative {{< link file="ring" display="ring" type="references" >}} $R$, it is useful to know whether there is a ‘simple’ {{< link file="submodule" display="generating set" type="references" section="Submodule Generation" >}} of $M$. Properties of $M$ will then be entirely determined by $S$, so classifying such subsets will lead to a classification of modules. But $M$ generates itself, and this generation is clearly redundant (if $M\neq\l\\{0\r\\}$), so we need to cut those generating sets down to remove redundancies.

<br>

&emsp;&emsp;The situation is, of course, not so simple, since those ‘non-redundant generating sets’ need not exist at all.

{{< env type="definition" >}}

Let $i:I\to M$ be any indexed set, which generates a unique {{< link file="free_module.md" display="free $R$-module" type="references" >}} $f:F^R(I)\to M$.

<br>

&emsp;&emsp;We say that $i$ *generates* $M$ if $f$ is surjective, $i$ is *linearly-independent* if $f$ is injective, and $i$ is a *basis* if $f$ is an isomorphism.

{{< /env >}}

**Remark.** If $i$ is non-injective, then neither is the induced map $f$, so those will not be linearly-independent. Thus, we may identify any linearly-independent set $i:I\into M$ with its image $S\subseteq M$ along with the ordering induced by $i$.

<div class="space"></div>

&emsp;&emsp;An $R$-module $M$ is said to be *{{< link file="free_module.md" display="free" type="constructions" >}}* if it admits a basis, and a choice of basis $B$ is equivalent to a choice of isomorphism $M\iso R^{\oplus B}$. It turns out that $R$ is a {{< link file="field" display="field" type="references" >}} iff{{< link file="field" type="justifications" mod="dag" >}} every $R$-module is free, which is the main reason why we focus on {{< link file="vector_space.md" display="vector spaces" type="references" >}} so much.

<div class="space"></div>

## Maximal Linearly-independent Sets

If $B\subseteq M$ is a basis, then it is a maximal linearly-independent set <span style="color:gray">(if $B'\supset B$ is linearly-independent, then any $a\in B'\comp B$ is a linear combination of elements in $B$)</span> and also a minimal generating set <span style="color:gray">(if $B'\subset B$ generates $M$, then any $a\in B\comp B'$ is a linear combination of elements in $B'$)</span>.

<br>

&emsp;&emsp;The first issue with general $R$-modules, even when $R$ is a {{< link file="principal_ideal_domain" display="PID" type="references" >}}, is that minimal generating sets need not exist:

> For instance, $\Q$ as a {{< link file="integers.md" display="$\Z$" type="references" >}}-module: if $\gen{S}=\Q$ is minimal, then for any fixed $a\in S$ consider $H\coloneqq\gen{S\comp\l\\{a\r\\}}$; the {{< link file="quotient_group.md" display="quotient" type="references" >}} $G\coloneqq\Q/H$ is non-trivial and {{< link file="cyclic_group.md" display="cyclic" type="references" >}} ($G\iso\gen{\bar{a}}$), so{{< link file="cyclic_group.md" type="justifications" mod="dag" section="Classification" >}} $G\iso\Z$ or $G\iso\Z/n\Z$ for some $n\in\N$, a contradiction since $\Q$ is {{< link file="divisible_group" display="divisible" type="references" >}} but $G$ isn't.

This shows that not all modules admit bases. However, maximal linearly-independent sets do exist in general, and if $R$ is a field, then the maximal linearly-independent sets are bases{{< link file="vector_space.md" type="justifications" mod="dag" section="Existence of Bases" >}}.

{{< env type="proposition" >}}

Every linearly-independent subset $S\subseteq M$, extends to a maximal linearly-independent subset of $M$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Let $(\mc{I},\subseteq)$ be the {{< link file="poset" display="poset" type="references" >}} of all linearly-independent subsets of $M$ containing $S$, which is non-empty since $S\in\mc{I}$. Since the union of any chain $\mc{C}\subseteq\mc{I}$ of linearly-independent sets is linearly-independent (every linear-dependence relation in $\bigcup\mc{C}$ is a finite sum, whose elements belong to a large enough linearly-independent set in $\mc{C}$, whence trivial), $\mc{I}$ admits a maximal element by {{< link file="zorns_lemma" display="Zorn’s Lemma" type="proved_by" >}}.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
