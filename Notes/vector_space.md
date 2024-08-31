---
title: Vector Space
date: 2024-08-30T19:27:52-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The theory of *vector spaces* stems from classical dynamics (say, in the plane $\R^2$), where points $x\in\R^2$ move along paths with certain velocities, which we call *vectors*. At a fixed time, the space of vectors can be visualized as arrow whose directions indicate in the possible headings of $x$ and whose lengths indicate the possible speeds of $x$. We can *add* these vectors and *scale* them by any $r\in\R$, and we can (non-uniquely) identify two special *basis* vectors in which every other velocity is a *linear combination* of the two.

<br>

&emsp;&emsp;It turns out that many structures arising in math admit these operations, so it is worth axiomatizing. Firstly, the *linear* structure is provided by an {{< link file="abelian_group.md" display="abelian" type="references" >}} {{< link file="group" display="group" type="references" >}} $M$ equipped with a {{< link file="ring" display="ring" type="references" >}} homomorphism $R\to\End M$ for some ring $R$, which together makes $M$ a *(left-){{< link file="module.md" display="$R$-module" type="generalizations" >}}*. The necessary and sufficient condition{{< link file="field.md" type="justifications" mod="dag" >}} for $R$-modules to have bases is that $R$ is a {{< link file="field.md" display="field" type="references" >}}, so we make the following

{{< env type="definition" >}}

A *$k$-vector space* is a $k$-module where $k$ is a field. Explicitly, it is an abelian group $V$ along with a homomorphism $\sigma:k\to\End V$ of rings. A *$k$-linear map* is a $k$-module homomorphism, and we let $\catvect$ denote the {{< link file="category" display="category" type="references" >}} of $k$-vector spaces.

{{< /env >}}

Since every result about $R$-modules holds for $k$-vector spaces, we will not repeat them here. Instead, we will point out some instances where the assumption that $k$ is a field is crucial, starting with the existence of bases.

<div class="space"></div>

## Existence of Bases

The ‘*fundamental theorem of vector spaces*’ is the existence of bases, making all vector spaces {{< link file="free_module.md" display="free modules" type="references" >}}:

{{< env type="theorem" name="Basis Extension Theorem" >}}

Every linearly-independent subset $S\subseteq V$ extends to a basis of $V$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

For general $R$-modules, $S$ extends{{< link file="basis_module_theory.md" type="proved_by" mod="dag" section="Maximal Linearly-Independent Sets" >}} to a maximal linearly-independent set, so we may w.l.o.g. assume that $S$ is maximal.

<br>

&emsp;&emsp;Suppose that $v\in V\comp S$, so $S\sqcup\l\\{v\r\\}$ is not linearly-independent by maximality of $S$. Thus, there exist $a_0,\dots,a_n\in k$ and distinct $s_1,\dots,s_n\in S$ such that $c_0v+\sum_{i=1}^nc_is_i=0$. Note that $c_0\neq0$, so since $k$ is a *field*, we have $v=-c_0^{-1}\l(\sum_{i=1}^nc_is_i\r)\in\gen{S}$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

## Classification by Dimension
