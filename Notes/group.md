---
title: Group
date: 2024-05-16T21:34:09-04:00
references: [Ref/Alu09, Ref/DF03, Ref/Mac10]
tags: [Topic/Group_Theory]
---

# Motivation & Definition

The concept of a *group* was invented to capture the abstract properties of *symmetries* (i.e. transformations that preserve internal ‘structure’) of geometrical objects. These transformations must be composable in the following coherent way.

{{< env "definition" >}}

A **group** is a tuple $\tpl{G,\cdot,e,\iota}$ consisting of underlying set $G$, a distinguished element $e\in G$ called the **identity**, and operations $\cdot:G\times G\to G$ and $\iota:G\to G$, subject to the following conditions.
1. <span style="color:gray">(Associativity).</span> For all $g,h,k\in G$, we have $g\cdot(h\cdot k)=(g\cdot h)\cdot k$.
2. <span style="color:gray">(Identity).</span> For all $g\in G$, we have $g\cdot e=g=e\cdot g$.
3. <span style="color:gray">(Inverse).</span> For all $g\in G$, we have $g\cdot\iota(g)=e=\iota(g)\cdot g$.

{{< /env >}}

Many groups arise as *automorphism* groups of objects $X$ in a {{< link file="category" display="category" type="references" >}}; for instance, if $X$ is a set, then $\Aut X$, consisting of all bijections $f:X\to X$, forms a group under composition. If $X$ is a {{< link file="metric_space" display="metric space" type="references" >}}, then the same holds for $\Aut X$, consisting of all isometries $f:X\to X$ $-$ and so on. In all these cases, $e=\id$ and $\iota(f)=f^{-1}$.

<br>

&emsp;&emsp;The relevant structure-preserving maps for groups are as follows.

{{< env "definition" >}}

A function $f:G\to H$ between groups is a **homomorphism** if
$$\begin{equation}
    f(g_1\cdot g_2)=f(g_1)\cdot f(g_2)
\end{equation}$$
for every $g_1,g_2\in G$. <span style="color:gray">Note that this implies $f(e_G)=e_H$ and $f(g^{-1})=f(g)^{-1}$.</span>

{{< /env >}}

Homomorphisms induce canonical subgroups $-$ i.e. subsets $A\subseteq G$ where $A\into G$ is a homomorphism: the *kernel* $\ker f\coloneqq f^{-1}(e_H)$ and the *image* $\im f\coloneqq f(G)$.

<br><br>

## The Category $\catgrp$

This category is {{< link file="catgrp_is_complete" type="justifications" mod="dag" >}} {{< link file="complete_category" display="complete" type="references" >}}, so <span style="color:red">???</span>.

<br><br>

## The Theory $T_\textrm{Grp}$

# General Techniques

Groups are incredibly hard to study. Nevertheless, there are some common methods of attack that can yield very fruitful results and insights.

<br><br>

## Group Actions

Perhaps the most important technique to study a group is by allowing it to {{< link file="group_action" display="act" type="constructions" >}} on a set, or, more generally, on objects in some other category.
> Groups, as men, will be known by their actions. <span style="float:right;">$-$ Guillermo Moreno</span>

Indeed, as groups are abstract manifestations of symmetries, it is natural to consider an object $X$ and consider a group homomorphism $\phi:G\to\Aut X$, which reflects how to group manifests itself as concrete automorphisms (i.e. *symmetries*) of $X$.

<br><br>

## Group Extensions

Another more ‘object-oriented’ technique to study $G$ is to decompose it into ‘atomic’ pieces and study how they can be ‘glued’ back together. This method is encapsulated in the *The Hölder Program*, which aims to:
1. *Classify all {{< link file="simple_group" display="simple" type="types" >}} groups*, which are essentially the ‘atoms’ of group theory, and
2. *Classify all {{< link file="group_extension" display="group extensions" type="constructions" >}}*, which essentially means ‘doing all of chemistry’.

This method is especially prominent in the study of {{< link file="finite_group" display="finite groups" type="types" >}}.

# Examples and Generalizations

## Types of Groups

Beyond the generalities above, much more can be said about specific types of groups. Indeed, they can studied from very different perspectives.
* {{< link file="finite_group" display="Finite groups" type="types" >}} can be studied combinatorially, and a benchmark problem is to find the number of groups of order $n$. The {{< link file="sylow_theorems" display="Sylow Theorems" type="references" >}} place certain restrictions, but more sophisticated approaches require {{< link file="representation_theory_of_finite_groups" display="representation theory" type="references" >}}.
* {{< link file="finitely-generated_group" display="Finitely-generated groups" type="types" >}} are much more geometric in nature, and are studied mostly in the context of {{< link file="geometric_group_theory" display="Geometric Group Theory" type="references" >}}.
* {{< link file="abelian_group" display="Abelian groups" type="types" >}} vary wildly in behavior. Finitely-generated ones are completely classified via the {{< link file="structure_theorem_for_fg_modules_over_PID" display="Structure Theorem" type="references" >}}, but in general they can be very interesting.

## Structures on Groups

One may also equip groups with additional structure, leading to much richer theories. Some important examples are {{< link file="topological_group" display="topological groups" type="structures" >}}, {{< link file="lie_group" display="Lie groups" type="structures" >}}, and {{< link file="algebraic_groups" display="algebraic groups" type="structures" >}}.

<br><br>

## Groupoids

Many groups arise as the automorphism group of some object $X$. In fact, this is true for *all* groups.

<br>

&emsp;&emsp;Given a group $G$, consider the category $\cat{B}G$ consisting of a single object $\ast$, and, for each $g\in G$, a morphism $g:\ast\to\ast$. The identity in $\cat{B}G$ is the identity element $e\in G$, and composition is given by the group operation. Since every $g\in G$ admits an inverse $g^{-1}\in G$, we see that every morphism is invertible, and so $G=\Aut\ast$.

> Note that a homomorphism $G\to H$ is nothing but a {{< link file="functor" display="functor" type="references" >}} $\cat{B}G\to\cat{B}H$, and that a $G$-action on a category $C$ is nothing but a functor $\cat{B}G\to C$.

Generalizing this idea, we say that a category $C$ is a {{< link file="groupoid" display="groupoid" type="generalizations" >}} if each morphism is invertible. Thus, after identifying $G$ with $\cat{B}G$, a group is nothing but a groupoid with a single object.
