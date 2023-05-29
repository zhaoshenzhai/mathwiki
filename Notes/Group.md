<div class="topSpace"></div>

Date Created: 04/05/2022 13:08:40
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Abelian Group]], [[Cyclic Group]], [[Simple Group]]
Examples: [[Symmetric Group]], [[Fundamental Group]], [[Group of Units]]
Constructions: [[Group Homomorphism]], [[Subgroup]], [[Group Action]], [[External Direct Product (Group)]], [[Order (Group Theory)]], [[Abelianization]], [[Exact Sequence]]
Generalizations: [[Groupoid]]

Properties: [[Basic properties of groups]]
Sufficiencies: [[Cayley's Theorem]], [[Free Group]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

A **group** is a semigroup $\tpl{G,\ast}$ such that
* $\axigrp[1]$ (Identity)$\bf{.}$ $\ex e\in G,\fa g\in G:g\ast e=g=e\ast g$.
* $\axigrp[2]$ (Inverse)$\bf{.}$ $\fa g\in G,\ex h\in G:g\ast h=e=h\ast g$.

The element $e\in G$ is called the **identity element of $G$**, and, for all $g\in G$, the element $g^{-1}\coloneqq h$ in $\axigrp[2]$ is called the **inverse element of $g$**.

```

<b>Remark.</b> Alternatively, we can define groups as triples $\tpl{G,\ast,e}$ for some fixed $e\in G$ where $\tpl{G,\ast}$ is a semigroup satisfying $\axigrp[2]$ as above, but with $\axigrp[1]$ replaced with
$$\begin{equation}
    \axigrp[1]'\bf{.}\ \fa g\in G:g\ast e=g=e\ast g.
\end{equation}$$
That is, we remove the existential quantifier in $\axigrp[1]$. We can similarly define groups as a quadruples $\tpl{G,\ast,e,i}$ for some $i:G\to G$ where $\tpl{G,\ast}$ is a semigroup satisfying $\axigrp[1]'$ as above, but with $\axigrp[2]$ replaced with
$$\begin{equation}
    \axigrp[2]'\bf{.}\ \fa g\in G,g\ast i\l(g\r)=e=i\l(g\r)\ast g.
\end{equation}$$
We need to verify that all three definitions are equivalent in the sense that they can be constructed from the other. Indeed, it suffices to check that the identity element $e$ and inverse elements $g^{-1}$ for each $g\in G$ are unique, for then they may be fixed (as a constant and a unary operation, respectively) and incorporated into the structure of the group itself.

Conversely, the two types of groups defined here reduce to the $\textrm{`}$official$\textrm{'}$ definition by forgetting the $e\textrm{'}$s and the $i\textrm{'}$s; this can be done since they are fixed by construction and hence exist with the desired properties $\axigrp[1]$ and $\axigrp[2]$. In more detail, $\axigrp[1]$ holds since $e$ is fixed to begin with and satisfies $\axigrp[1]'$. The unary operation $i$ is a function, so $i\l(g\r)$ is defined for all $g\in G$ and may be distinct. Thus $\axigrp[2]$ holds with the existential quantifier occurring after fixing $g\in G$.<span style="float:right;">$\blacklozenge$</span>
