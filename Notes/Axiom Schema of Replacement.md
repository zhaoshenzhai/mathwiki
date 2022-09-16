---
mathLink: $\axirepl$
---

<div class="topSpace"></div>

Date Created: 20/01/2022 10:03:21
Tags: #Axiom #Later/Set_Theory

Constructions: [[Replacement Image]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_

``` ad-Axiom
title: Axiom Schema.

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$ and let $\phi\l(x,y\r)$ be any $\mc{L}$-logical formula without $z$ free. The **Axiom Schema of Replacement** is the $\mc{L}$-scheme_
$$\begin{equation}
    \axirepl\,\colon\!\Leftrightarrow\fa D\l[\fa x\in D,\ex!y:\phi\l(x,y\r)\Rightarrow\ex I,\fa x\in D,\ex y:y\in I\land\phi\l(x,y\r)\r].
\end{equation}$$

```

**Remark.** If $\phi\l(x,y\r)$ is thought of as a class function and $\dom\phi\l(x,y\r)$ is some set $D$, then $\axirepl$ asserts that the image of the function $f$ defined by $\phi\l(x,y\r)$ is a set.<span style="float:right;">$\blacklozenge$</span>
