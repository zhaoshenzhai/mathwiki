---
title: Abelian Group
date: 2024-05-22T18:53:29-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Motivation & Definition

Here, we consider a class of groups which $-$ despite being very general $-$ exhibit very useful properties absent in general groups.

{{< env type="definition" >}}

A group $G$ is said to be *Abelian* if $gh=hg$ for all $g,h\in G$.

{{< /env >}}

## Abelian Groups as {{< link file="module" display="$\Z$-modules" type="references" >}}

We denote the {{< link file="subcategory" display="subcategory" type="references" >}} of Abelian groups as $\catabgrp$, which is one of the most well-behaved categories. Indeed, <span style="color:red">???</span>.
* We have a forgetful functor $\catmod[\Z]\to\catabgrp$, which is an isomorphism of categories <span style="color:red">???</span>. In this way, the notions of {{< link file="torsion" display="torsion" type="constructions" >}}, {{< link file="rank" display="rank" type="constructions" >}}, etc, all carry forward.

## The Category $\catabgrp$

# General Techniques

## Structure Theory

Since Abelian groups are just $\Z$-modules and $\Z$ is a {{< link file="principal_ideal_domain" display="PID" type="references" >}}, the {{< link file="structure_theorem_for_fg_modules_over_PID" display="Structure Theorem" type="properties" >}} for finitely-generated modules over a PID applies:

{{< env type="theorem" name="Structure Theorem for f.g. Abelian Groups" >}}

Every f.g. Abelian group $G$ admits a decomposition $G\iso\Z^{\rk G}\oplus\Tor G$, and furthermore
$$\begin{equation}
    \Tor G\iso\bigoplus\_{i,j}\Z/\mf{p}\_i^{\alpha\_{ij}}\iso\bigoplus\_j\Z/\mf{a}\_j
\end{equation}$$
for unique (up to a permutation) prime ideals $\mf{p}\_i\nsubgrp\Z$ <span style="color:gray">(elementary divisors)</span> and positive integers $\alpha\_{ij}\in\N$, where $\mf{a}\_j\coloneqq\prod\_i\mf{p}\_i^{\alpha\_{ij}}$ <span style="color:gray">(invariant factors)</span>.

{{< /env >}}

On the other hand, Abelian groups that are *not* finitely-generated are much wilder, and many set-theoretical issues crop up.

# Examples

## {{< link file="cyclic_group" display="Cyclic Groups" type="examples" >}}

# Generalizations

## Abelian Categories
