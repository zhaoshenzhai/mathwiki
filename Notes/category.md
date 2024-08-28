---
title: Category
date: 2024-05-22T21:52:00-04:00
references: [Mac10]
tags: [Category_Theory, In_Progress]
---

# Motivation & Definition

The starting point of the theory of *categories* is the observation that many properties of mathematical objects can be more succinctly expressed as diagrams of arrows $-$ as opposed to an equation $-$ and that many objects can be constructed via a ‘universal property’ of such a diagram; heuristically then, these objects are characterized as the ‘most efficient solution to a certain optimization problem’.

<br>

&emsp;&emsp; To formalize this, we need a general framework for composing arrows, so we make the following

{{< env type="definition" >}}

A *category* $C$ consists of a class $\mc{O}$ of *objects*, and,
* for any $x,y\in\mc{O}$, a class $C(x,y)$ of *morphisms* in $C$ <span style="color:gray">[We write $f:x\to y$ for $f\in C(x,y)$]</span>;
* for any $x\in\mc{O}$, an *identity* morphism $1_x\in C(x,x)$,
* for any $x,y,z\in\mc{O}$, a *composition map* $\circ:C(y,z)\times C(x,y)\to C(x,z)$;

such that $\circ$ is associative <span style="color:gray">[$h\circ(g\circ f)=(h\circ g)\circ f$]</span> and identities are unital <span style="color:gray">[$f\circ1_x=f=1_y\circ f$ for $f:x\to y$]</span>.

{{< /env >}}

Some fundamental concepts in category theory are as follows. Let $C$ be a category.
* A morphism $f:x\to y$ is an *isomorphism* if there is a morphism $g:y\to x$ such that $g\circ f=1_x$ and $f\circ g=1_y$.
* An object $x$ is *initial* if for any object $y$, there is a unique morphism $x\to y$. Dually, $x$ is *final* if for any object $y$, there is a unique morphism $y\to x$. We say that $x$ is a *zero* object if it is both initial and final.

**Remark.**  Initial objects (and dually for final objects), if they exist, are unique up to a unique isomorphisms.

<div class="space"></div>

{{< env type="proof" hide="false" >}}

If $x,x'\in C$ are initial, then there is a unique morphism $f\in C(x,x')$. Similarly, there is a unique morphism $g\in C(x',x)$, and they compose $g\circ f$ to a morphism in $C(x,x)$. But $C(x,x)$ is a singleton since $x$ is initial, and it contains $1_x$, so $g\circ f=1_x$. Similarly, $f\circ g=1_{x'}$, so $f$ is an isomorphism as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

## Examples of Categories

The archetypical example of a category is $\catset$, whose objects are sets and whose morphisms are maps. The isomorphisms in $\catset$ are then bijections, and its initial and final objects are $\em$ and *any* singleton, respectively.

<br>

&emsp;&emsp;More examples of categories are ‘sets with extra structure’ with morphisms being maps that respect that structure. For instance, we have a category $\catgrp$ of {{< link file="group" display="groups" type="examples" >}}, $\cattop$ of {{< link file="topological_space" display="topological spaces" type="examples" >}}, $\catring$ of {{< link file="ring" display="rings" type="examples" >}}, and $\catmod$ of {{< link file="module" display="modules" type="examples" >}} over a fixed ring $R$, etc. All of the above examples are equipped with a ‘forgetful’ {{< link file="functor" display="functor" type="constructions" >}} $U:C\to\catset$ which sends the objects to their underlying sets, which is {{< link file="functor" display="faithful" type="constructions" section="Full and Faithful Functors" >}}. In general, we call a category $C$ equipped with a faithful functor $U:C\to\catset$ a *concrete category*.
