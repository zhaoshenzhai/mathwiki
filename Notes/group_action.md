---
title: Group Action
date: 2024-05-22T20:02:09-04:00
references: [Alu09, Mac10]
tags: [Group_Theory]
---

# Motivation & Definition

{{< link file="group" display="Groups" type="references" >}} capture $-$ *abstractly* $-$ the notion of a symmetry. But symmetries are also present in ‘concrete objects’, with different kinds of objects preserving different kinds of structure. The concept of a *group action* connects the two.

{{< env type="definition" >}}

Let $G$ be a group and fix a {{< link file="category" display="category" type="references" >}} $C$. A **$G$-action** is a {{< link file="functor" display="functor" type="references" >}} $\cat{B}G\to C$, which specifies an object $X\in C$ and a homomorphism $\phi:G\to\Aut X$.

{{< /env >}}

Thus a group action is specified by the data of a tuple $\tpl{X,\phi}$, which we usually write as $\phi:G\act X$. The object $X$ is the ‘concrete object’, and $\phi$ encodes how $G$ manifests itself as $\Aut X$ $-$ the symmetries of $X$. Note, however, that $\phi$ need not be injective.

<br>

&emsp;&emsp;We write $\phi_g(x)\coloneqq\phi(g)(x)$, so that $\phi_g\in\Aut X$.

<div class="space"></div>

## The Category $C^G$

Since group actions are functors, it makes sense to consider {{< link file="natural_transformation" display="natural transformations" type="references" >}} between two actions $\phi:G\act X$ and $\psi:G\act Y$ $-$ called *$G$-maps* $-$ which are the morphisms in the category $C^G$ of $G$-actions on $C$.

<br>

# Actions on $\catset$

Taking $C\coloneqq\catset$ recovers the usual notion of a group acting on a set, in which case $\Aut X$ are just the permutations of $X$; an action $\phi:G\act X$ is equivalently given by a function $\rho:G\times X\to X$, mapping $\rho(g,x)\coloneqq\phi_g(x)$. Some important examples include:
* The *left-multiplication* action of $G$ on $X\coloneqq G$, given by $\phi_g(x)\coloneqq gx$.
* The *{{< link file="conjugation_action" display="conjugation" type="examples" >}}* action of $G$ on $X\coloneqq G$, given by $\phi_g(x)\coloneqq gxg^{-1}$.

Several important constructions and types of actions are as follows.
* For a fixed $x\in X$, the *orbit* of $x$ is $Gx\coloneqq\l\\{gx\in X\st g\in G\r\\}$ and the *stabilizer* of $x$ is $G_x\coloneqq\l\\{g\in G\st gx=x\r\\}$. They are related by the {{< link file="orbit_stabilizer_theorem" display="Orbit Stabilizer Theorem" type="properties" >}} and, usually when $G$ is finite, the {{< link file="the_class_equation" display="Class Equation" type="properties" >}}. Clearly, $\ker\phi=\bigcap_xG_x$.
* We say that the action is *transitive* if for all $x,y\in X$, there is some $g\in G$ such that $gx=y$. Note that $X\iso\bigsqcup\_iGx_i$, and since $G$ always acts transitively on its orbits, every group action decomposes into its transitive components (i.e. orbits).
* We say that the action is *faithful* if $\phi$ is injective, so that $G\into\Aut X$, and *free* if $gx=x$ for some $x\in X$ implies $g=e$. {{< link file="cayleys_theorem" display="Cayley’s Theorem" type="properties" >}} is the statement that the left-multiplication action is faithful.

# Generalizations

More generally, we can $-$ in the definition $-$ replace $G$ with a {{< link file="group_object" display="group object" type="references" >}} in $C$, giving us {{< link file="continuous_group_action" display="continuous group actions" type="types" >}}, {{< link file="lie_group_action" display="Lie group actions" type="types" >}}, etc; the definitions above carry forth with obvious modifications.

<br>

&emsp;&emsp;Representation Theory, GGT, etc...
