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

The set $G$ is the set of ‘abstract transformations’ as described above. However, many groups are ‘concrete’, in that they are the transformations of some concrete object $X$. For instance, if $X$ is a set, then $\Aut X$, consisting of all bijections $f:X\to X$, forms a group under composition; If $X$ is a {{< link file="metric_space.md" display="metric space" type="references" >}}, then the same holds for $\Aut X$, consisting of all isometries $f:X\to X$; similarly for vector spaces, {{< link file="topological_space.md" display="topological spaces" type="references" >}}, and so on. In all these cases, $e=\id$ and $\iota(f)=f^{-1}$. The above examples generalize by considering any object $X$ in a {{< link file="category.md" display="category" type="references" >}}.

<br>

&emsp;&emsp;In fact, *every* group arises this way{{< link file="group.md" type="references" secID="groupoid" secDisplay="Groupoid" mod="dag" >}} (as a concrete group) from the category $\cat{B}G$, but not all groups arise as automorphism groups of a set; see, however, {{< link file="cayleys_theorem.md" display="Cayley’s Theorem" type="properties" >}}, which states that every group is a *{{< link file="subgroup.md" display="subgroup" type="constructions" >}}* of an automorphism group of a set.

{{< env type="fact" link="cayleys_theorem" >}}

hi

{{< /env >}}

<div class="space"></div>

&emsp;&emsp;The relevant structure-preserving maps for groups are as follows.

{{< env type="definition" >}}

A function $f:G\to H$ between groups is a *homomorphism* if $f(g_1\cdot g_2)=f(g_1)\cdot f(g_2)$ for every $g_1,g_2\in G$.

{{< /env >}}

Note that this implies that $f(e_G)=e_H$ and that $f(g^{-1})=f(g)^{-1}$ for all $g\in G$.

## The Category of Groups

With homomorphisms as morphisms, groups form a category $\catgrp$. This category is{{< link file="catgrp_is_complete.md" type="justifications" mod="dag" >}} {{< link file="complete_category.md" display="complete" type="references" >}} and cocomplete, as witnessed by the standard notions of products, coproducts, {{< link file="kernel_group_theory.md" display="kernel" type="constructions" >}}, {{< link file="kernel_group_theory.md" display="cokernels" type="constructions" secID="cokernel" secDisplay="Cokernel" >}}, {{< link file="subgroup.md" display="subobjects" type="constructions" >}}, and {{< link file="quotient_group.md" display="quotients" type="constructions" >}}.

<br>

&emsp;&emsp;There is a forgetful {{< link file="functor.md" display="functor" type="references" >}} $U:\catgrp\to\catset$. Since every set $X$ generates a {{< link file="free_group.md" display="free group" type="constructions" >}} $F(X)$ by adding formal composites and inverses, the forgetful functor $U$ admits a left adjoint $F:\catset\to\catgrp$.

# General Techniques

## {{< link file="group_action.md" display="Group Actions" type="constructions" >}} and {{< link file="representation_theory_of_groups" display="Representations" type="constructions" >}}

Perhaps the most important technique to study a group is by allowing it to act on a set, or, more generally, on objects in some other category. Indeed, as groups are abstract manifestations of symmetries, it is natural to consider an object $X$ and a morphism $\phi:G\to\Aut X$ of groups, which reflects how $G$ manifests itself as concrete automorphisms (i.e. *symmetries*) of $X$. If more structure on $G$ is present (see below), we require that actions also preserve said structure.

> Groups, as men, will be known by their actions. <span style="float:right;">$-$ Guillermo Moreno</span>

If $X$ is a {{< link file="vector_space.md" display="vector space" type="references" >}} and $G$ acts linearly, then such an action is usually called a *representation* of $G$.

## {{< link file="group_extension.md" display="Group Extensions" type="constructions" >}}

Another more ‘object-oriented’ technique to study $G$ is to decompose it into ‘atomic’ pieces and study how they can be ‘glued’ back together. This method is encapsulated in the *The Hölder Program*, which aims to:
1. *Classify all {{< link file="simple_group.md" display="simple" type="types" >}} groups*, which are essentially the ‘atoms’ of group theory, and
2. *Classify all group extensions*, which essentially means ‘doing all of chemistry’.

# Examples of Groups

The simplest groups, and possibly the most important groups, are the {{< link file="cyclic_group.md" display="cyclic groups" type="examples" >}}. They are the ones that are {{< link file="subgroup.md" display="generated" type="references" secID="subgroup_generation" secDisplay="Subgroup Generation" >}} by a singleton, which forces{{< link file="cyclic_group.md" type="justifications" mod="dag" secID="classification" secDisplay="Classification" >}} it to either be the {{< link file="integers.md" display="integers" type="references" >}} $\Z$ or its {{< link file="quotient_group.md" display="quotient" type="references" >}} $\Z/n\Z$ for some $n\geq1$. Other classical groups include the dihedral groups, symmetry groups, and matrix groups.

<br>

&emsp;&emsp;Groups can also arise as the {{< link file="group_of_units.md" display="group of units" type="examples" >}} of a {{< link file="ring.md" display="ring" type="references" >}}.

## Types of Groups

Beyond the generalities above, much more can be said about specific types of groups.
* {{< link file="finite_group.md" display="Finite groups" type="types" >}} can be studied combinatorially, and a benchmark problem in finite group theory is to find the number of groups of order $n$. The {{< link file="sylow_theorems.md" display="Sylow Theorems" type="references" >}} place certain restrictions, but more sophisticated approaches require {{< link file="representation_theory_of_finite_groups.md" display="representation theory" type="references" >}}.
* {{< link file="finitely_generated_group.md" display="Finitely-generated groups" type="types" >}} are very geometric in nature, and are mostly studied in the context of {{< link file="geometric_group_theory.md" display="Geometric Group Theory" type="references" >}}.
* {{< link file="abelian_group.md" display="Abelian groups" type="types" >}} vary wildly in behavior. Finitely-generated ones are completely classified via the {{< link file="structure_theorem_for_fg_modules_over_pid.md" display="Structure Theorem" type="references" >}}, but in general, their structure depends very heavily of set-theoretic properties.

<h2 class="noSpace">Structures on Groups</h2>

One may also equip groups with additional structure, which leads to much richer theories. Some important examples are {{< link file="topological_group.md" display="topological groups" type="structures" >}}, {{< link file="lie_group.md" display="Lie groups" type="structures" >}}, and {{< link file="algebraic_groups.md" display="algebraic groups" type="structures" >}}.

<br>

&emsp;&emsp;In fact, every group is a topological group when given the discrete topology, so in this sense, the theory of topological groups is more refined. Similarly, every ({{< link file="countable.md" display="countable" type="references" >}}) group is a Lie group.

# Generalizations

<h2 id="groupoid">{{< link file="groupoid.md" display="Groupoids" type="generalizations" >}}</h2>

Many groups arise as the automorphism group of some object $X$. In fact, this is true for *all* groups.

> Given a group $G$, consider the category $\cat{B}G$ consisting of a single object $\ast$, and, for each $g\in G$, a morphism $g:\ast\to\ast$. The identity in $\cat{B}G$ is the identity element $e\in G$, and composition is given by the group operation. Since every $g\in G$ admits an inverse $g^{-1}\in G$, we see that every morphism is invertible, and so $G=\Aut\ast$.

<div class="space"></div>

**Remark.** Note that a homomorphism $G\to H$ is a functor $\cat{B}G\to\cat{B}H$, and that a $G$-action on a category $C$ is a functor $\cat{B}G\to C$.

<div class="space"></div>

&emsp;&emsp;Generalizing this idea, we say that a category $C$ is a *groupoid* if each morphism is invertible. Thus, after identifying $G$ with $\cat{B}G$, a group is nothing but a groupoid with a single object. Without requiring that all morphisms be invertible $-$ that is, just considering a category with a single object $-$ we recover the notion of a {{< link file="monoid.md" display="monoid" type="generalizations" >}}.
