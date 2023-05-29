<div class="topSpace"></div>

Date Created: 15/01/2022 13:02:22
Tags: #Type/Definition #Later/Set_Theory

Types: _Not Applicable_
Examples: _Not Applicable_ 
Constructions: [[Lattice of Subsets]]
Generalizations: _Not Applicable_

Properties: [[Subset relation is transitive]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Consider the first-order logic with a set of non-logical symbols $\mc{L}=\l\{\in\r\}$. Then
* the **subset** relation $u\subseteq v$ is the $\mc{L}$-formula $\fa x\l(x\in u\Rightarrow x\in v\r)$ and
* the **proper subset** relation $u\subset v$ is the $\mc{L}$-formula $u\subseteq v\land u\neq v$.

```

<b>Remark.</b> Note that these $\textrm{`}$relations$\textrm{'}$ are not binary relations in the strict sense; they are simply abbreviations for $\mc{L}$-formulae. However, once $\textrm{`}$restricted$\textrm{'}$ to a set, they do indeed become binary relations. For example, if $X$ is a set, then the **subset relation on $X$** is a binary relation $\l.\subseteq\r|_X$ defined by
$$\begin{equation}
    x\l.\subseteq\r|_Xy\ \ \ \ \Leftrightarrow\ \ \ \ x\subseteq y
\end{equation}$$
for all $x,y\in X$.<span style="float:right;">$\blacklozenge$</span>
