<div class="topSpace"></div>

Date Created: 15/01/2022 13:02:22
Tags: #Type/Definition #Later/Set_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i> 
Constructions: [[Lattice of Subsets]]
Generalizations: <i>Not Applicable</i>

Properties: [[Subset relation is transitive]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Consider the first-order logic with a set of non-logical symbols $\mc{L}=\l\{\in\r\}$. Then
* the <b>subset</b> relation $u\subseteq v$ is the $\mc{L}$-formula $\fa x\l(x\in u\Rightarrow x\in v\r)$ and
* the <b>proper subset</b> relation $u\subset v$ is the $\mc{L}$-formula $u\subseteq v\land u\neq v$.

```

<b>Remark.</b> Note that these ‘relations’ are not binary relations in the strict sense; they are simply abbreviations for $\mc{L}$-formulae. However, once ‘restricted’ to a set, they do indeed become binary relations. For example, if $X$ is a set, then the <b>subset relation on $X$</b> is a binary relation $\l.\subseteq\r|_X$ defined by
$$\begin{equation}
    x\l.\subseteq\r|_Xy\ \ \ \ \Leftrightarrow\ \ \ \ x\subseteq y
\end{equation}$$
for all $x,y\in X$.<span style="float:right;">$\blacklozenge$</span>
