<div class="topSpace"></div>

Date Created: 16/11/2022 17:44:54
Tags: #Type/Definition #Topic/Analysis #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: [[Functional Limits in a Metric Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

Let $X$ and $Y$ be topological spaces, fix a cluster point $p\in\Omega\subseteq X$, and let $L\in Y$. For a function $f:\Omega\to Y$, we say that <b>$f\to L$ as $x\to p$</b> or <b>$L$ is a limit of $f$</b> if for every neighborhood $V\subseteq Y$ of $L$, there exists a neighborhood $U\subseteq X$ of $p$ such that $\im_f\!\l(U\cap\Omega\comp\l\{p\r\}\r)\subseteq V$.
* If $Y$ is Hausdorff, then $L$ is unique and we write $\lim\limits_{x\to p}f\l(x\r)\coloneqq L$.

```
