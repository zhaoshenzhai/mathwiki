<br />
<br />

Date Created: 04/05/2022 13:08:40
Tags: #Definition #In_Progress

Types: [[Abelian Group]]
Examples: [[Function Group]]
Constructions: _Not Applicable_
Generalizations: [[Groupoid]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Unit element of a group is unique]], [[Inverse elements in a group are unique]]

``` ad-Definition
title: Definition.

_Let $G$ be a set and let $\ast$ be a binary operation on $G$. The pair $\l\langle G,\ast\r\rangle$ is said to be a **group** if_
* _$\axigrp[1]$ (Associativity)$\bf{.}$ $\fa g,h,k\in G:\l(g\ast h\r)\ast k=g\ast\l(h\ast k\r)$._
* _$\axigrp[2]$ (Unit)$\bf{.}$ $\ex e\in G,\fa g\in G:g\ast e=g=e\ast g$._
* _$\axigrp[3]$ (Inverse)$\bf{.}$ $\fa g\in G,\ex h\in G:g\ast h=e=h\ast g$._

```

**Remark.** Alternatively, we can define groups as triples $\l\langle G,\ast,e\r\rangle$ for some fixed $e\in G$ satisfying $\axigrp[1]$ and $\axigrp[3]$ as above, but with $\axigrp[2]$ replaced with
$$\begin{equation}
    \axigrp[2]'\bf{.}\ \fa g\in G:g\ast e=g=e\ast g.
\end{equation}$$
That is, we remove the existential quantifier in $\axigrp[2]$. We can similarly define groups as a quadruples $\l\langle G,\ast,e,i\r\rangle$ for some $i:G\to G$ satisfying $\axigrp[1]$ and $\axigrp[2]'$ as above, but with $\axigrp[3]$ replaced with
$$\begin{equation}
    \axigrp[3]'\bf{.}\ \fa g\in G,g\ast i\l(g\r)=e=i\l(g\r)\ast g.
\end{equation}$$
We need to verify that all three definitions are equivalent in the sense that they can be constructed from the other. Indeed, it suffices to check that the unit element $r$ and inverse elements $g^{-1}$ for each $g\in G$ are unique, for then they may be fixed (as a constant and a unary operation, respectively) and incorporated into the structure of the group itself.<span style="float:right;">$\blacklozenge$</span>
