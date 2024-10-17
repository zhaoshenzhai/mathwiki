---
title: p-group
date: 2024-06-21T16:59:45-04:00
references: [Alu09]
tags: [Group_Theory]
mathLink: $p$-group
renderedTitle: $p\ $-group
---

By {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="justifications" >}}, if a {{< link file="finite_group.md" display="finite group" type="references" >}} $G$ has {{< link file="prime_number.md" display="prime" type="references" >}} order $p$, then $G\iso\Z/p\Z$ is {{< link file="cyclic_group.md" display="cyclic" type="references" >}} and has no non-trivial {{< link file="subgroup.md" display="subgroups" type="references" >}}. It is natural to ask for a generalization when $\l|G\r|$ is a *power* of $p$, or more generally, when the {{< link file="order.md" display="order" type="references" >}} of every element $g\in G$ is a power of $p$.

# Finite $p\\,$-groups

Fix a prime $p$. If $G$ is a finite group, then the condition that the order of every $g\in G$ is a power of $p$ is equivalent to the following

{{< env type="definition" >}}

A *$p$-group* is a group $G$ with $\l|G\r|=p^n$ for some $n\in\N$. {{< /env >}}

The engine behind all structural results of finite $p$-groups is the following (almost trivial) observation.

{{< env type="theorem" name="Fixed-points of $p\,$-groups" id="fixed_point_theorems_of_p_groups" >}}

If $\phi:G\act X$ is a $p$-group acting on a finite set, then $|Z|\equiv|X|\\,\mod\\,p$ where $Z$ is fixed points of $\phi$. In particular, letting $\phi:G\act G$ be the {{< link file="conjugation_action.md" display="conjugation" type="references" >}} action shows that the center $Z(G)$ is non-trivial. {{< /env >}}

{{< env type="proof" hide="false" >}}

We have by the {{< link file="the_class_equation.md" display="Class Equation" type="proved_by" >}} that $|X|=|Z|+\sum_{a\in A}[G:G_a]$, where $A\subseteq X$ is a transversal of non-trivial classes. Since $G$ is a $p$-group, each summand $[G:G_a]$ is a power of $p>1$, and is hence $0$ modulo $p$.<span style="float:right;">$\blacksquare$</span> {{< /env >}}

## {{< link file="sylow_theorems.md" display="The Sylow Theorems" type="properties" >}}

Finding *$p$-subgroups* of a finite group $G$ can tell us a great deal about the structure of $G$ itself. This applies especially to the maximal $p$-subgroups of $G$, called its *$p$-Sylow* subgroups.
<br>
&emsp;&emsp;The *Sylow Theorems* state that all $p$-subgroups of $G$ exist, that the $p$-Sylow subgroups are all conjugate to each other, and that the number of $p$-Sylow subgroups $n_p$ divides $m$ and $n_p\equiv1\\,\mod\\,p$. This is the best structural result of $p$-subgroups that one can hope for, and it provides a strong converse to {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="references" >}}. The existence of subgroups of $G$ of order $p$ is called *{{< link file="sylow_theorems.md" display="Cauchy’s Theorem" type="properties" secID="cauchys_theorem" secDisplay="Cauchy’s Theorem" >}}*.

# Prüfer $p\\,$-groups
