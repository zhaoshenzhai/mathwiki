---
title: Order
date: 2024-06-03T15:04:46-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Motivation & Definition

Let $G$ be a {{< link file="group.md" display="group" type="references" >}}. The *order* of an element $x\in G$ is the size of its {{< link file="subgroup.md" display="generated" type="references" secID="subgroup_generation" secDisplay="Subgroup Generation" >}} {{< link file="cyclic_group.md" display="cyclic" type="references" >}} subgroup. A more elementary definition is as follows.

{{< env type="definition" >}}

An element $x\in G$ has *finite order* if $x^n=e$ for some $n>0$; the least such $n$ is the *order* of $x$, denoted $\ord x$.

<br>

&emsp;&emsp;Otherwise, set $\ord x\coloneqq\infty$, and say that $x$ has *infinite order*.

{{< /env >}}

{{< env type="proof" hide="false" name="$\ord x=|\!\gen{x}|$" >}}

Since $\gen{x}$ is the image of the map $\phi_x:\Z\to G$ induced uniquely by sending $1\mapsto x$, if $\ker\phi_x=n\Z$ for some $n>0$, then{{< link file="quotient_group.md" type="proved_by" mod="dag" secID="universal_property" secDisplay="Universal Property" >}} $\im\phi_x\iso\Z/n\Z$ has cardinality $n$. Those are the only{{< link file="integers.md" type="proved_by" mod="dag" secID="subgroups_of_Z" secDisplay="Subgroups of $\Z$" >}} non-trivial subgroups of $\Z$, so otherwise, we have $\im\phi_x=\Z$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

## Examples

If $G$ is cyclic, then the order of any generator is $|G|$. In general:
* If $G$ is finite, then by {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="justifications" >}}, the order of any $x\in G$ divides $|G|$. In particular, if $p\coloneqq|G|$ is prime, then $G\iso\Z/p\Z$.
* Since $\Z$ is a {{< link file="unique_factorization_domain.md" display="UFD" type="references" >}}, the order of every $x\in G$ has a prime factorization. If there is a prime $p$ such that *every* $\ord x$ is a power of $p$, then $G$ is said to be a {{< link file="p_group.md" display="$p$-group" type="references" >}}.

# Generalizations

Modules, annihilators, etc.
