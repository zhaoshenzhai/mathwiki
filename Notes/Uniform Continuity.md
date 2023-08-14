<div class="topSpace"></div>

Date Created: 25/11/2022 09:51:45
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Lipschitz Continuity]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Uniform continuity preserve Cauchyness]]
Sufficiencies: [[Heine-Cantor Theorem]]
Equivalences: [[Continuous Extension Theorem]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces. A function $f:X\to Y$ is said to be <b>uniformly continuous</b> if
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa x,y\in X:d_X\!\l(x,y\r)<\delta\Rightarrow d_Y\!\l(f\l(x\r),f\l(y\r)\r)<\epsilon.
\end{equation}$$

```

<b>Remark.</b> Equivalently, $f:X\to Y$ is uniformly continuous if for every <i>margin of error</i> $\epsilon>0$ and every subset $S\subseteq X$, there is <i>uniform tolerance</i> $\delta_\epsilon>0$ over all $S\subseteq X$ such that $\diam S\leq\delta$ implies that $\diam f\l(S\r)\leq\epsilon$.<span style="float:right;">$\blacklozenge$</span>
