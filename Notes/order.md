---
title: Order
date: 2024-06-03T15:04:46-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $G$ be a {{< link file="group" display="group" type="references" >}}. The *order* of an element $x\in G$ is the size of its {{< link file="subgroup" display="generated" type="references" section="Subgroup Generation" >}} {{< link file="cyclic_group" display="cyclic" type="references" >}} subgroup. A more elementary definition is as follows.

{{< env type="definition" >}}

An element $x\in G$ has **finite order** if $x^n=e$ for some $n>0$; the least such $n$ is the **order** of $x$, denoted $\ord x$.

<br>

&emsp;&emsp;Otherwise, set $\ord x\coloneqq\infty$, and say that $x$ has **infinite order**.

{{< /env >}}

{{< env type="proof" hide="true" name="$\ord x=|\!\gen{x}|$" >}}

Recall that $\gen{x}$ is the image of the canonical map $\phi_x:\Z\to G$ induced uniquely by sending $1\mapsto x$.

<br>

&emsp;&emsp;If $\ker\phi_x=n\Z$ for some $n>0$, then {{< link file="quotient_group" type="proved_by" mod="dag" section="Universal Property" >}} $\im\phi_x\iso\Z/n\Z$ has cardinality $n$. Since $\Z$ has no other non-trivial subgroups {{< link file="integers" type="proved_by" mod="dag" section="Subgroups of $\Z$" >}}, we have otherwise that $\im\phi_x=\Z$, so $\ord x=\infty$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

## Examples

If $G$ is cyclic, then the order of any of its generators is $|G|$. More involved examples are as follows
* By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="justifications" >}}, the order $\ord x$ for any $x\in G$ divides $G$. In particular, if $p\coloneqq|G|$ is prime, then $G\iso\Z/p\Z$.
* Since $\Z$ is a {{< link file="unique_factorization_domain" display="UFD" type="references" >}}, the order of every $x\in G$ has a prime factorization. If there is a prime $p$ such that *every* $\ord x$ is a power of $p$, then $G$ is said to be a {{< link file="p_group" display="$p$-group" type="references" >}}.

# Generalizations

Modules, annihilators, etc.
