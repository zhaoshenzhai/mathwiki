<div class="topSpace"></div>

Date Created: 25/11/2022 09:51:45
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Lipschitz Continuity]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Uniform continuity preserve Cauchyness]], [[Composition of uniformly continuous functions are uniformly continuous]]
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

<b>Remark.</b> Equivalently, $f:X\to Y$ is uniformly continuous if
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa S\subseteq X:\diam S\leq\delta\Rightarrow\diam\im_f\l(S\r)\leq\epsilon;
\end{equation}$$
that is, the margin of error $\epsilon$ can be controlled. Indeed, we may consider the function
$$\begin{equation}
    \delta:\R^+\to\R^+\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \epsilon\mapsto\delta_\epsilon,
\end{equation}$$
so, given any error $\epsilon>0$, the tolerance is $\delta_\epsilon$. Note that this function is arbitrary; that is, it does not need to take a specific form.<span style="float:right;">$\blacklozenge$</span>
