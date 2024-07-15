---
title: Group Action
date: 2024-05-22T20:02:09-04:00
references: [Alu09, Mac10]
tags: [Group_Theory, In_Progress]
---

# Motivation & Definition

{{< link file="group" display="Groups" type="references" >}} capture $-$ *abstractly* $-$ the notion of a symmetry. But symmetries are also present in ‘concrete objects’, with different kinds of objects preserving different kinds of structure. The concept of a *group action* connects the two.

{{< env type="definition" >}}

Let $G$ be a group and fix a {{< link file="category" display="category" type="references" >}} $C$. A **$G$-action** is a {{< link file="functor" display="functor" type="references" >}} $\cat{B}G\to C$, which specifies an object $X\in C$ and a homomorphism $\phi:G\to\Aut X$.

{{< /env >}}

Thus a group action is specified by the data of a tuple $\tpl{X,\phi}$, which we usually write as $\phi:G\act X$, and write $\phi_g(x)\coloneqq\phi(g)(x)$. The object $X$ is the ‘concrete object’, and $\phi$ encodes how $G$ manifests itself as $\Aut X$, the symmetries of $X$. Note, however, that $\phi$ need not be injective; we say that the action is *faithful* if it is, so that $G\into\Aut X$.

<div class="space"></div>

## Basic Notions

For $C$ a concrete category (e.g. $\catset,\catvect[k],\cattop,\dots$), there are some important constructions. Fix an action $\phi:G\act X$.
* For a fixed $x\in X$, the *orbit* of $x$ is $Gx\coloneqq\l\\{gx\in X\st g\in G\r\\}$, and the *stabilizer* of $x$ is $G_x\coloneqq\l\\{g\in G\st gx=x\r\\}$. We let $Z\coloneqq\ker\phi=\bigcap_{x\in X}G_x$ be the fixed points of $\phi$.
* For a fixed $g\in G$, the *$g$-translate* of $X$ is $gX\coloneqq\l\\{gx\st x\in X\r\\}$, and the *fixed points* of $g$ is $X^g\coloneqq\l\\{x\in X\st gx=x\r\\}$.
* We say that $\phi$ is *transitive* if for every $x,y\in X$, there is some $g\in G$ such that $gx=y$. Clearly we have $X\iso\bigsqcup\_iGx_i$, and each $G\act Gx_i$ acts transitively.

Note that $\phi$ is faithful iff $Z$ is trivial. A much stronger criteria is when $G_x$ is trivial for *all* $x\in X$, in which case we say that $\phi$ is *free*.

<div class="space"></div>

## The Category $C^G$

Since group actions are functors, it makes sense to consider {{< link file="natural_transformation" display="natural transformations" type="references" >}} between two actions $\phi:G\act X$ and $\psi:G\act Y$ $-$ called *$G$-maps* $-$ which are the morphisms in the category $C^G$ of $G$-actions on $C$.

<br>

# Actions on $\catset$

Taking $C\coloneqq\catset$ recovers the usual notion of a group acting on a set, in which case $\Aut X$ are just the permutations of $X$. Some important examples include:
* The *left-multiplication* action of $G$ on $X\coloneqq G$, given by $\phi_g(x)\coloneqq gx$. That this action is faithful is {{< link file="cayleys_theorem" display="Cayley’s Theorem" type="properties" >}}. Moreover, it turns out {{< link file="orbit_stabilizer_theorem" type="properties" mod="dag" >}} that every action is the coproduct of certain left-multiplication actions of $G$.
* The *{{< link file="conjugation_action" display="conjugation" type="examples" >}}* action of $G$ on $X\coloneqq G$, given by $\phi_g(x)\coloneqq gxg^{-1}$. The *center* of $G$ is the fixed points $Z(G)$, whose combinatorics is governed by the {{< link file="the_class_equation" display="Class Equation" type="properties" >}}.

# Generalizations

More generally, we can $-$ in the definition $-$ replace $G$ with a {{< link file="group_object" display="group object" type="references" >}} in $C$, giving us {{< link file="continuous_group_action" display="continuous group actions" type="types" >}}, {{< link file="lie_group_action" display="Lie group actions" type="types" >}}, etc; the definitions above carry forth with obvious modifications.

<br>

&emsp;&emsp;Representation Theory, GGT, etc...
