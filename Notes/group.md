---
title: Group
date: 2024-05-16T21:34:09-04:00
references: []
tags: []
---

The concept of a *group* was invented to capture the abstract properties of *symmetries* (i.e. transformations that preserve internal ‘structure’) of geometrical objects. These transformations must be composable in the following coherent way.

{{< env "definition" >}}

A **group** is a tuple $\tpl{G,\cdot,e,\iota}$ consisting of underlying set $G$, a distinguished element $e\in G$ called the **identity**, and operations $\cdot:G\times G\to G$ and $(\slot)^{-1}:G\to G$, subject to the following conditions.
1. <span style="color:gray">(Associativity).</span> For all $g,h,k\in G$, we have $g\cdot(h\cdot k)=(g\cdot h)\cdot k$.
2. <span style="color:gray">(Identity).</span> For all $g\in G$, we have $g\cdot e=g=e\cdot g$.
3. <span style="color:gray">(Inverse).</span> For all $g\in G$, we have $g\cdot g^{-1}=e=g^{-1}\cdot g$.

{{< /env >}}

A prominent class of examples motivated by the above are *isometry groups* of {{< link file="metric_space" display="metric spaces" type="references" >}}; more generally, one considers a {{< link file="category" display="category" type="references" >}} $C$, where each object $X\in C$ induces its *automorphism group* $\Aut X$, with $\cdot$ being interpreted as composition in $C$. In fact, every group arises this way (as the morphisms in a {{< link file="groupoid" display="groupoid" type="references" >}}).

&emsp;&emsp;With *group homomorphisms* as morphisms, groups form a category $\catgrp$:

{{< env "definition" >}}

A function $f:G\to H$ between groups is a **homomorphism** if
$$\begin{equation}
    f(g_1\cdot g_2)=f(g_1)\cdot f(g_2)
\end{equation}$$
for every $g_1,g_2\in G$. <span style="color:gray">Note that this implies $f(e_G)=e_H$ and $f(g^{-1})=f(g)^{-1}$.</span>

{{< /env >}}

This category is {{< link file="catgrp_is_complete" type="justifications" mod="dag" >}} {{< link file="complete_category" display="complete" type="references" >}}, so <span style="color:red">???</span>.

&emsp;&emsp;Very broadly speaking, the goal of group theory is to find structure theorems for groups, ultimately leading to some kind of *Classification of Groups*. This is (way) too hard in general; to give some scale, we note that *The Hölder Program*, consisting of
1. *Classifying all {{< link file="simple_group" display="simple" type="types" >}} groups*, which are essentially the ‘atoms’ of group theory;
2. *Classifying all {{< link file="group_extension" display="group extensions" type="constructions" >}}*, which essentially means ‘doing all of chemistry’;

has only been partly solved, with Part 1 taking about $100$ years and $10,000$ pages of hard mathematics to settle, and with Part 2 still relatively open. Nevertheless, many techniques have been developed to study certain classes of groups:
* h
