<div class="topSpace"></div>

Date Created: 25/11/2022 09:51:45
Tags: #Definition #Courses/MATH254

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Heine-Cantor Theorem]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces. A function $f:X\to Y$ is said to be **uniformly continuous** if_
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa x,y\in X:d_X\!\l(x,y\r)<\delta\Rightarrow d_Y\!\l(f\l(x\r),f\l(y\r)\r)<\epsilon.
\end{equation}$$

```

**Remark.** Equivalently, $f:X\to Y$ is uniformly continuous if
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa S\subseteq X:\diam S\leq\delta\Rightarrow\diam\im_f\l(S\r)\leq\epsilon;
\end{equation}$$
that is, the margin of error $\epsilon$ can be controlled. Indeed, we may consider the function
$$\begin{equation}
    \delta:\R^+\to\R^+\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \epsilon\mapsto\delta_\epsilon,
\end{equation}$$
so, given any error $\epsilon>0$, the tolerance is $\delta_\epsilon$. Note that this function is arbitrary; that is, it does not need to take a specific form.<span style="float:right;">$\blacklozenge$</span>
