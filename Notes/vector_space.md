---
title: Vector Space
date: 2024-08-30T19:27:52-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The theory of *vector spaces* stems from classical dynamics (say, in the plane $\R^2$), where points $x\in\R^2$ move along paths with certain velocities, which we call *vectors*. At a fixed time, the space of vectors can be visualized as arrow whose directions indicate in the possible headings of $x$ and whose lengths indicate the possible speeds of $x$. We can *add* these vectors and *scale* them by any $r\in\R$, and we can (non-uniquely) identify two special *basis* vectors in which every other velocity is a *linear combination* of the two.

<br>

&emsp;&emsp;It turns out that many structures arising in math admit these operations, so it is worth axiomatizing. Firstly, the *linear* structure is provided by an {{< link file="abelian_group.md" display="abelian" type="references" >}} {{< link file="group.md" display="group" type="references" >}} $M$ equipped with a {{< link file="ring.md" display="ring" type="references" >}} homomorphism $R\to\End M$ for some ring $R$, which together makes $M$ a *(left-){{< link file="module.md" display="$R$-module" type="generalizations" >}}*. The necessary and sufficient condition{{< link file="field.md" type="justifications" mod="dag" >}} for $R$-modules to have bases is that $R$ is a {{< link file="field.md" display="field" type="references" >}}, so we make the following

{{< env type="definition" >}}

A *$k$-vector space* is a $k$-module where $k$ is a field. Explicitly, it is an abelian group $V$ along with a homomorphism $\sigma:k\to\End V$ of rings. A *$k$-linear map* is a $k$-module homomorphism, and we let $\catvect$ denote the {{< link file="category.md" display="category" type="references" >}} of $k$-vector spaces.

{{< /env >}}

Since every result about $R$-modules holds for $k$-vector spaces, we will not repeat them here. Instead, we will point out some instances where the assumption that $k$ is a field is crucial, starting with the existence of bases.

<div class="space"></div>

<h2 id="existence_of_bases">Existence of Bases</h2>

The ‘*fundamental theorem of vector spaces*’ is the existence of bases, making all vector spaces {{< link file="free_module.md" display="free modules" type="references" >}}:

{{< env type="theorem" name="Basis Extension Theorem" >}}

Every linearly-independent subset $S\subseteq V$ extends to a basis of $V$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

For general $R$-modules, $S$ extends{{< link file="basis_module_theory.md" type="proved_by" mod="dag" id="maximal_linearly-independent_sets" >}} to a maximal linearly-independent set, so we may w.l.o.g. assume that $S$ is maximal.

<br>

&emsp;&emsp;Suppose that $v\in V\comp S$, so $S\sqcup\l\\{v\r\\}$ is not linearly-independent by maximality of $S$. Thus, there exist $a_0,\dots,a_n\in k$ and distinct $s_1,\dots,s_n\in S$ such that $c_0v+\sum_{i=1}^nc_is_i=0$. Note that $c_0\neq0$, so since $k$ is a *field*, we have $v=-c_0^{-1}\l(\sum_{i=1}^nc_is_i\r)\in\gen{S}$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

&emsp;&emsp;In fact, more is true. If $B$ is a fixed basis for $V$ (which exists by the above) and $S$ is *any* linearly-independent set, we can extend $S$ to a basis $B_S$ of $V$ by borrowing elements $b_\alpha\in B$; equivalently, we can ‘exchange’ $B\comp\l\\{b_\alpha\r\\}$ for $S$ and it still remains a basis.

<br>

&emsp;&emsp;More importantly, it shows that any two bases of $V$ have the same cardinality, and so defines the *dimension* $\dim_kV$ of $V$.

{{< env type="theorem" name="Steinitz Exchange Lemma" >}}

If $B$ is a fixed basis for $V$ and $S\subseteq V$ is any linearly-independent set, then there is an injection $j:S\into B$ such that $B\cup S\comp j(S)$ is a basis for $V$. In particular, we have $|S|\leq|B|$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

We proceed by {{< link file="transfinite_induction.md" display="transfinite induction" type="references" >}} on $S$: fix $S_0\subset S$ and let $j_0:S_0\into B$ be so that $B_0\coloneqq B\cup S_0\comp j(S_0)$ is a basis. Take any $s\in S\comp S_0$. We will find some $b\in B_0$ so that $j\coloneqq j_0\cup\l\\{(s,b)\r\\}\into B$ and that $B'\coloneqq B_0\cup\l\\{s\r\\}\comp\l\\{j(s)\r\\}$ is a basis, which completes the induction since we can start with $S_0\coloneqq\em$.

<br>

&emsp;&emsp;To this end, let $C\subseteq B\comp j(S_0)$ be minimal so that $s\in\gen{S_0\cup C}$. Since $S$ is linearly-independent, we have $C\neq\em$, and pick $b\in C$ arbitrarily. Since $\gen{B_0}=V$ and $b\in\gen{S_0\cup C\cup\l\\{s\r\\}\comp\l\\{b\r\\}}\subseteq\gen{B'}$, we see that $\gen{B'}=V$ too. Finally, the only way for $B'$ to fail linear-independence is if $s\in\gen{B_0\comp\l\\{b\r\\}}$, but then $b\in\gen{B_0\comp\l\\{b\r\\}}$, contradicting that $B_0$ is a basis.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

**Remark.** This proof is deliberately written in a way that generalizes directly to any {{< link file="strongly_minimal_sets.md" display="strongly minimal model" type="references" >}} of a first-order {{< link file="theory.md" display="theory" type="references" >}}. In that setting, one can define *independence* and *closure* too, and the same proof applies to define a notion of ‘dimension’.
