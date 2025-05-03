---
title: Group Action
date: 2024-05-22T20:02:09-04:00
references: [Alu09, Mac10]
tags: [Group_Theory]
---

# Motivation & Definition

{{< link file="group.md" display="Groups" type="references" >}} capture $-$ *abstractly* $-$ the notion of a symmetry. But symmetries are also present in ‘concrete objects’, with different kinds of objects preserving different kinds of structure. The concept of a *group action* connects the two.

{{< env type="definition" >}}

Let $G$ be a group and fix a {{< link file="category.md" display="category" type="references" >}} $C$. A *$G$-action* is a {{< link file="functor.md" display="functor" type="references" >}} $\cat{B}G\to C$, which specifies an object $X\in C$ and a homomorphism $\phi:G\to\Aut X$.

{{< /env >}}

Thus a group action is specified by the data of a tuple $\tpl{X,\phi}$, which we usually write as $\phi:G\act X$, and write $\phi_g(x)\coloneqq\phi(g)(x)$. The object $X$ is the ‘concrete object’, and $\phi$ encodes how $G$ manifests itself as $\Aut X$, the symmetries of $X$. Note, however, that $\phi$ need not be injective; we say that the action is *faithful* if it is, so that $G\into\Aut X$. Otherwise, $Z\coloneqq\ker\phi$ is non-trivial.

## Basic Notions

For $C$ a concrete category (e.g. $\catset,\catvect[k],\cattop,\dots$), there are some important constructions.
* The *orbit* of a fixed $x\in X$ is the set $Gx\coloneqq\l\\{gx\in X\st g\in G\r\\}$ of *$G$-translates*, and the *stabilizer* of $x$ is $G_x\coloneqq\l\\{g\in G\st gx=x\r\\}$. Note that $Z=\ker\phi=\bigcap_{x\in X}G_x$, so it is the set of *fixed points* of $\phi$.
* Dually, the *$g$-translate* of a fixed $g\in G$ is the set $gX\coloneqq\l\\{gx\st x\in X\r\\}$, and the *fixed points* of $g$ is $X^g\coloneqq\l\\{x\in X\st gx=x\r\\}$.

Note that the orbits form a partition $X=\bigsqcup_iGx_i$ and $G\act Gx_i$ for each $i$ independent of each other, so we will sometimes just focus on actions of $G$ on a single orbit. In this case, when $G\act X$ has a single orbit, we say that $G$ acts *transitively* on $X$; that is, for every $x,y\in X$, we have $y=gx$ for some $g\in X$.

<br>

&emsp;&emsp;A stronger criteria than faithfulness is when $G_x$ is trivial for *all* $x\in X$, in which case we say that $\phi$ is *free*. While the former has no *global* fixed points ($\fa g\in G(\fa x\in X:gx=x)\rightarrow g=e$), free actions admit no *local* ones ($\fa g\in G(\ex x\in X:gx=x)\rightarrow g=e$).

## The Category $C^G$

Since group actions are functors, it makes sense to consider {{< link file="natural_transformation.md" display="natural transformations" type="references" >}} between two actions $\phi:G\act X$ and $\psi:G\act Y$ $-$ called *$G$-maps* $-$ which are the morphisms in the category $C^G$ of $G$-actions on $C$.

<br>

# Actions on $\catset$

Taking $C\coloneqq\catset$ recovers the usual notion of a group acting on a set, in which case $\Aut X$ are just the permutations of $X$. Some important examples include:
* The *left-multiplication* action of $G$ on $X\coloneqq G$, given by $\phi_g(x)\coloneqq gx$. That this action is faithful is {{< link file="cayleys_theorem.md" display="Cayley’s Theorem" type="properties" >}}. Moreover, it turns out{{< link file="orbit_stabilizer_theorem.md" type="properties" mod="dag" >}} that every action is the coproduct of certain left-multiplication actions of $G$.
* The *{{< link file="conjugation_action.md" display="conjugation" type="examples" >}}* action of $G$ on $X\coloneqq G$, given by $\phi_g(x)\coloneqq gxg^{-1}$. The *center* of $G$ is the fixed points $Z(G)$, whose combinatorics is governed by the {{< link file="the_class_equation.md" display="Class Equation" type="properties" >}}.

# Generalizations

More generally, we can $-$ in the definition $-$ replace $G$ with a {{< link file="group_object.md" display="group object" type="references" >}} in $C$, giving us {{< link file="continuous_group_action.md" display="continuous group actions" type="types" >}}, {{< link file="lie_group_action.md" display="Lie group actions" type="types" >}}, etc; the definitions above carry forth with obvious modifications.

<br>

&emsp;&emsp;Representation Theory, GGT, etc...
