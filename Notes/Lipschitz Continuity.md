<div class="topSpace"></div>

Date Created: 25/11/2022 10:57:59
Tags: #Type/Definition #Topic/Analysis

Types: [[Contractive Function]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Composition of Lipschitz functions are Lipschitz]]
Sufficiencies: _Not Applicable_
Equivalences: [[Bounded iff Lipschitz iff continuous (normed vector space)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces, and fix $k\geq0$. A function $f:X\to Y$ is said to **$k$-Lipschitz continuous** if_
$$\begin{equation}
    \fa x,y\in X:d_Y\!\l(f\l(x\r),f\l(y\r)\r)\leq k\cdot d_X\!\l(x,y\r).
\end{equation}$$
_A function $f:X\to Y$ is said to be **Lipschitz continuous** if there exists $k\geq0$ such that $f$ is $k$-Lipschitz continuous._

```

**Remark.** In other words, $f:X\to Y$ is $k$-Lipschitz continuous if $\fa S\subseteq X:\diam\im_f\l(S\r)\leq k\cdot\diam S$. Indeed, every $k$-Lipschitz continuous function is uniformly continuous since the latter requires the existence of a function
$$\begin{equation}
    \delta:\R^+\to\R^+\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \epsilon\mapsto\delta_\epsilon
\end{equation}$$
such that if $S\subseteq X$ has $\diam S\leq\delta$, then $\diam\im_f\l(S\r)\leq\epsilon$. Simply take $\delta\coloneqq\epsilon/k$ and observe that
$$\begin{equation}
    \diam\im_f\l(S\r)\leq k\cdot\diam S\leq k\cdot\delta=k\cdot\epsilon/k=\epsilon.\exqedin
\end{equation}$$
