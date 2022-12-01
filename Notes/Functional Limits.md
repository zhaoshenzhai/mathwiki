<div class="topSpace"></div>

Date Created: 16/11/2022 17:44:54
Tags: #Definition #Courses/MATH254 #Later/Topology

Types: _Not Applicable_
Examples: [[Functional Limits in a Metric Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

_Let $\tpl{X,\mc{T}_X}$ and $\tpl{Y,\mc{T}_Y}$ be topological spaces, fix a cluster point $p\in\Omega\subseteq X$, and let $L\in Y$. For a function $f:\Omega\to Y$, we say that **$f\to L$ as $x\to p$** or **$L$ is a limit of $f$** if_
$$\begin{equation}
    \fa V\in\mc{U}_L,\ex U\in\mc{U}_p:\im_f\!\l(U\cap\Omega\comp\l\{p\r\}\r)\subseteq V,
\end{equation}$$
_where $\mc{U}_L$ and $\mc{U}_p$ are the set of all neighborhoods of $L$ and $p$, respectively. If $\tpl{Y,\mc{T}_Y}$ is Hausdorff, then $L$ is unique so we write_ $\lim\limits_{x\to p}f\l(x\r)=L$_._

```
