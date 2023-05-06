<div class="topSpace"></div>

Date Created: 19/11/2022 19:37:14
Tags: #Type/Definition #Topic/Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Convergent implies bounded (functional)]], [[Riemann integrable implies bounded]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces and fix $\Omega\subseteq X$. A function $f:\Omega\to Y$ is **bounded** if there exists an open ball containing its image; that is, if_
$$\begin{equation}
    \ex x_0\in\Omega,\ex r>0:\im f\subseteq B_r\!\l(x_0\r).
\end{equation}$$
_If $p$ is a cluster point of $\Omega$, then **$f$ is bounded on a neighborhood of $p$** if there exists some $\delta>0$ such that_ $\l.f\r|_{\Omega\cap B_\delta\l(p\r)}$ _is bounded; that is, if_
$$\begin{equation}
    \ex\delta>0,\ex x_0\in\Omega\cap B_\delta\!\l(p\r),\ex r>0:\im_f\l(\Omega\cap B_\delta\!\l(p\r)\r)\subseteq B_r\!\l(x_0\r).
\end{equation}$$

```

**Remark.** If $X$ carries a vector space structure, we may choose $x_0=0$. Then $f$ is bounded if there exists some $r>0$ such that $\im f\subseteq B_r\l(0\r)$; that is, if $d\l(f\l(x\r),0\r)<r$ for all $x\in X$.<span style="float:right;">$\blacklozenge$</span>
