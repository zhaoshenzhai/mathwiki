---
title: Cyclic Group
date: 2024-06-03T14:23:46-04:00
references: [DF03, Lan02]
tags: [Group_Theory/Later]
---

# Motivation & Definition

The simplest class of {{< link file="group.md" display="groups" type="references" >}} are the *cyclic groups*, which are those that are generated by a single element.

{{< env type="definition" >}}

A group $G$ is said to be *cyclic* if $G=\gen{x}${{< link file="subgroup.md" type="references" mod="dag" secID="subgroup_generation" secDisplay="Subgroup Generation" >}} for some $x\in G$.

{{< /env >}}

<h2 id="classification">Classification</h2>

Let $G=\gen{x}$ be cyclic. By definition, $\phi:\Z\to G$ sending $m\mapsto x^m$ is surjective. Depending on the {{< link file="order.md" display="order" type="references" >}} $n\coloneqq\ord x$ of $x$, $G$ takes on the following forms.
* If $1\leq n<\infty$, then $\ker\phi=n\Z$ and hence{{< link file="quotient_group.md" type="justifications" mod="dag" >}} $G\iso\Z/n\Z$.
* Otherwise, $n=\infty$. Thus $\phi$ is injective, and hence $G\iso\Z$.

Therefore, every cyclic group $G$ is either isomorphic to $\Z$, or to $\Z/n\Z$ for some $n\geq1$. Note that only $\pm1$ generates $\Z$, and $[m]\in\Z/n\Z$ is a generator iff $m\perp n$ are coprime.
