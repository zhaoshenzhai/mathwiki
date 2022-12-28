<div class="topSpace"></div>

Date Created: 04/05/2022 13:08:40
Tags: #Definition #Group_Theory

Types: [[Abelian Group]], [[Finite Group]]
Examples: [[Symmetric Group]], [[Unit slash Group of Units]]
Constructions: [[Order (Group Theory)]], [[Group Homomorphism]], [[Subgroup]], [[Conjugate slash conjugacy class]], [[External Direct Product (Group)]]
Generalizations: [[Groupoid]]

Properties: [[Basic properties of groups]]
Sufficiencies: [[Cayley's Theorem]]
Equivalences: _Not Applicable_
Justifications: [[Identity element of a group is unique]], [[Inverse elements in a group are unique]]

``` ad-Definition
title: Definition.

_Let $G$ be a set and let $\ast$ be a binary operation on $G$. The pair $\tpl{G,\ast}$ is said to be a **group** if_
* _$\axigrp[1]$ (Associativity)$\bf{.}$ $\fa g_1,g_2,g_3\in G:\l(g_1\ast g_2\r)\ast g_3=g_1\ast\l(g_2\ast g_3\r)$._
* _$\axigrp[2]$ (Identity)$\bf{.}$ $\ex e\in G,\fa g\in G:g\ast e=g=e\ast g$._
* _$\axigrp[3]$ (Inverse)$\bf{.}$ $\fa g\in G,\ex h\in G:g\ast h=e=h\ast g$._

_The element $e\in G$ is called the **identity element of $G$**, and, for all $g\in G$, the element $g^{-1}\coloneqq h$ in $\axigrp[3]$ is called the **inverse element of $g$**._

```

**Remark.** Alternatively, we can define groups as triples $\tpl{G,\ast,e}$ for some fixed $e\in G$ satisfying $\axigrp[1]$ and $\axigrp[3]$ as above, but with $\axigrp[2]$ replaced with
$$\begin{equation}
    \axigrp[2]'\bf{.}\ \fa g\in G:g\ast e=g=e\ast g.
\end{equation}$$
That is, we remove the existential quantifier in $\axigrp[2]$. We can similarly define groups as a quadruples $\tpl{G,\ast,e,i}$ for some $i:G\to G$ satisfying $\axigrp[1]$ and $\axigrp[2]'$ as above, but with $\axigrp[3]$ replaced with
$$\begin{equation}
    \axigrp[3]'\bf{.}\ \fa g\in G,g\ast i\l(g\r)=e=i\l(g\r)\ast g.
\end{equation}$$
We need to verify that all three definitions are equivalent in the sense that they can be constructed from the other. Indeed, it suffices to check that the identity element $e$ and inverse elements $g^{-1}$ for each $g\in G$ are unique, for then they may be fixed (as a constant and a unary operation, respectively) and incorporated into the structure of the group itself.

Conversely, the two types of groups defined here reduce to the $\textrm{`}$official$\textrm{'}$ definition by forgetting the $e\textrm{'}$s and the $i\textrm{'}$s; this can be done since they are fixed by construction and hence exist with the desired properties $\axigrp[2]$ and $\axigrp[3]$. In more detail, $\axigrp[2]$ holds since $e$ is fixed to begin with and satisfies $\axigrp[2]'$. The unary operation $i$ is a function, so $i\l(g\r)$ is defined for all $g\in G$ and may be distinct. Thus $\axigrp[3]$ holds with the existential quantifier occurring after fixing $g\in G$.<span style="float:right;">$\blacklozenge$</span>
