---
title: Group
date: 2024-05-16T21:34:09-04:00
references: [Alu09, DF03, Mac10]
tags: [Group_Theory]
---

# Motivation & Definition

The concept of a *group* was invented to capture the abstract properties of *symmetries* of geometrical objects (i.e. self-transformations that preserve internal ‘structure’). These transformations must be composable; there must be a transformation that does nothing; and for each transformation, there must be a transformation that undoes it.

<br>

&emsp;&emsp;The following definition captures this idea formally. Note, however, that we've shifted the emphasis from the geometrical object itself to its set of symmetries instead.

{{< env type="definition" >}}

A *group* is a tuple $\tpl{G,\cdot,e,\iota}$ consisting of underlying set $G$, a distinguished element $e\in G$ called the *identity*, and operations $\cdot:G\times G\to G$ and $\iota:G\to G$, subject to the following conditions.
1. <span style="color:gray">(Associativity).</span> For all $g,h,k\in G$, we have $g\cdot(h\cdot k)=(g\cdot h)\cdot k$.
2. <span style="color:gray">(Identity).</span> For all $g\in G$, we have $g\cdot e=g=e\cdot g$.
3. <span style="color:gray">(Inverse).</span> For all $g\in G$, we have $g\cdot\iota(g)=e=\iota(g)\cdot g$.

{{< /env >}}

The set $G$ is the ‘abstract transformations’ as described above. However, many groups are ‘concrete’, in that they are the transformations of some concrete object $X$. For instance, if $X$ is a set, then $\Aut X$, consisting of all bijections $f:X\to X$, forms a group under composition; If $X$ is a {{< link file="metric_space" display="metric space" type="references" >}}, then the same holds for $\Aut X$, consisting of all isometries $f:X\to X$; similarly for vector spaces, {{< link file="topological_space" display="topological spaces" type="references" >}}, and so on. In all these cases, $e=\id$ and $\iota(f)=f^{-1}$. The above examples generalize by considering any object $X$ in a {{< link file="category" display="category" type="references" >}}. In fact, *every* group arises this way (as a concrete group) from the category $\cat{B}G$; see {{< link file="group" display="here" type="references" section="Groupoids" >}}.

<br>

&emsp;&emsp;The relevant structure-preserving maps for groups are as follows.

{{< env type="definition" >}}

A function $f:G\to H$ between groups is a *homomorphism* if $f(g_1\cdot g_2)=f(g_1)\cdot f(g_2)$ for every $g_1,g_2\in G$.

{{< /env >}}

Note that this implies that $f(e_G)=e_H$ and that $f(g^{-1})=f(g)^{-1}$ for all $g\in G$, so homomorphisms do indeed preserve the group structure of $G$. With homomorphisms as morphisms, groups form a category $\catgrp$.

<div class="space"></div>

## The Category of Groups

This category is{{< link file="catgrp_is_complete" type="justifications" mod="dag" >}} {{< link file="complete_category" display="complete" type="references" >}} and cocomplete, and we have the standard notions of products, coproducts, {{< link file="kernel_group_theory" display="kernel" type="constructions" >}}, {{< link file="kernel_group_theory" display="cokernels" type="constructions" section="Cokernel" >}}, {{< link file="subgroup" display="subobjects" type="constructions" >}}, and {{< link file="quotient_group" display="quotients" type="constructions" >}}.

<br>

&emsp;&emsp;There is a forgetful {{< link file="functor" display="functor" type="references" >}} $U:\catgrp\to\catset$. Since every set $X$ generates a {{< link file="free_group" display="free group" type="constructions" >}} $F(X)$ by adding formal composites and inverses, the forgetful functor $U$ admits a left adjoint $F:\catset\to\catgrp$.

# General Techniques

Due to the vastness of the definition, groups are incredibly hard to study. Nevertheless, there are some common methods of attack that can yield very fruitful results and insights.

<div class="space"></div>

## {{< link file="group_action" display="Group Actions" type="constructions" >}}

Perhaps the most important technique to study a group is by allowing it to act on a set, or, more generally, on objects in some other category.

<br>

&emsp;&emsp;Indeed, as groups are abstract manifestations of symmetries, it is natural to consider an object $X$ and consider a group homomorphism $\phi:G\to\Aut X$, which reflects how to group manifests itself as concrete automorphisms (i.e. *symmetries*) of $X$.

> Groups, as men, will be known by their actions. <span style="float:right;">$-$ Guillermo Moreno</span>

<div class="space"></div>

## {{< link file="group_extension" display="Group Extensions" type="constructions" >}}

Another more ‘object-oriented’ technique to study $G$ is to decompose it into ‘atomic’ pieces and study how they can be ‘glued’ back together. This method is encapsulated in the *The Hölder Program*, which aims to:
1. *Classify all {{< link file="simple_group" display="simple" type="types" >}} groups*, which are essentially the ‘atoms’ of group theory, and
2. *Classify all group extensions*, which essentially means ‘doing all of chemistry’.

# Examples of Groups

The simplest groups, and possibly the most important groups, are the {{< link file="cyclic_group" display="cyclic groups" type="examples" >}}. They are the ones that are {{< link file="subgroup" display="generated" type="references" section="Subgroup Generation" >}} by a singleton, which forces{{< link file="cyclic_group" type="justifications" mod="dag" section="Classification" >}} it to either be the {{< link file="integers" display="integers" type="references" >}} $\Z$ or its {{< link file="quotient_group" display="quotient" type="references" >}} $\Z/n\Z$ for some $n\geq1$.

<br>

&emsp;&emsp;Other classical groups include the dihedral groups, symmetry groups, and matrix groups.

<div class="space"></div>

## Types of Groups

Beyond the generalities above, much more can be said about specific types of groups.
* {{< link file="finite_group" display="Finite groups" type="types" >}} can be studied combinatorially, and a benchmark problem in finite group theory is to find the number of groups of order $n$. The {{< link file="sylow_theorems" display="Sylow Theorems" type="references" >}} place certain restrictions, but more sophisticated approaches require {{< link file="representation_theory_of_finite_groups" display="representation theory" type="references" >}}.
* {{< link file="finitely_generated_group" display="Finitely-generated groups" type="types" >}} are very geometric in nature, and are mostly studied in the context of {{< link file="geometric_group_theory" display="Geometric Group Theory" type="references" >}}.
* {{< link file="abelian_group" display="Abelian groups" type="types" >}} vary wildly in behavior. Finitely-generated ones are completely classified via the {{< link file="structure_theorem_for_fg_modules_over_PID" display="Structure Theorem" type="references" >}}, but in general, their structure depends very heavily of set-theoretic properties.

## Structures on Groups

One may also equip groups with additional structure, which leads to much richer theories. Some important examples are {{< link file="topological_group" display="topological groups" type="structures" >}}, {{< link file="lie_group" display="Lie groups" type="structures" >}}, and {{< link file="algebraic_groups" display="algebraic groups" type="structures" >}}.

# Generalizations

## {{< link file="groupoid" display="Groupoids" type="generalizations" >}}

Many groups arise as the automorphism group of some object $X$. In fact, this is true for *all* groups.

<br>

&emsp;&emsp;Given a group $G$, consider the category $\cat{B}G$ consisting of a single object $\ast$, and, for each $g\in G$, a morphism $g:\ast\to\ast$. The identity in $\cat{B}G$ is the identity element $e\in G$, and composition is given by the group operation. Since every $g\in G$ admits an inverse $g^{-1}\in G$, we see that every morphism is invertible, and so $G=\Aut\ast$.

> Note that a homomorphism $G\to H$ is nothing but a functor $\cat{B}G\to\cat{B}H$, and that a $G$-action on a category $C$ is nothing but a functor $\cat{B}G\to C$.

Generalizing this idea, we say that a category $C$ is a *groupoid* if each morphism is invertible. Thus, after identifying $G$ with $\cat{B}G$, a group is nothing but a groupoid with a single object. Without requiring that all morphisms be invertible $-$ that is, just considering a category with a single object $-$ we recover the notion of a {{< link file="monoid" display="monoid" type="generalizations" >}}.
