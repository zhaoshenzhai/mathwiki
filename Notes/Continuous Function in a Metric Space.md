<div class="topSpace"></div>

Date Created: 01/12/2022 13:16:28
Tags: #Type/Definition #Topic/Analysis

Types: [[Uniform Continuity]]
Examples: [[Continuous Function in R]]
Constructions: [[Space of Continuous Functions]]
Generalizations: [[Continuous Function]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Sequential slash functional limit characterizations of continuity]], [[Bounded iff Lipschitz iff continuous (normed vector space)]]
Justifications: [[Continuous iff preimages of open sets are open]], [[Continuous iff continuous at each point]]

``` ad-Definition
title: Definition.

Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces and fix $\Omega\subseteq X$. A function $f:\Omega\to Y$ is said to be <b>continuous on $\Omega$ w.r.t. $d_X$ and $d_Y$</b> if
$$\begin{equation}
    \fa p\in\Omega,\fa\epsilon>0,\ex\delta>0,\fa q\in\Omega:d_X\!\l(p,q\r)<\delta\Rightarrow d_Y\!\l(f\l(p\r),f\l(q\r)\r)<\epsilon.
\end{equation}$$

```
