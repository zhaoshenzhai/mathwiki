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

## Classification by Dimension
