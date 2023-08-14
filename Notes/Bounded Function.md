<div class="topSpace"></div>

Date Created: 19/11/2022 19:37:14
Tags: #Type/Definition #Topic/Real_Analysis/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Convergent implies bounded (functional)]], [[Riemann integrable implies bounded]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces and fix $\Omega\subseteq X$. A function $f:\Omega\to Y$ is <b>bounded</b> if there exists an open ball containing its image; that is, if
$$\begin{equation}
    \ex x_0\in\Omega,\ex r>0:\im f\subseteq B_r\!\l(x_0\r).
\end{equation}$$
If $p$ is a cluster point of $\Omega$, then <b>$f$ is bounded on a neighborhood of $p$</b> if there exists some $\delta>0$ such that $\l.f\r|_{\Omega\cap B_\delta\l(p\r)}$ is bounded; that is, if
$$\begin{equation}
    \ex\delta>0,\ex x_0\in\Omega\cap B_\delta\!\l(p\r),\ex r>0:\im_f\l(\Omega\cap B_\delta\!\l(p\r)\r)\subseteq B_r\!\l(x_0\r).
\end{equation}$$

```

<b>Remark.</b> If $X$ carries a vector space structure, we may choose $x_0=0$. Then $f$ is bounded if there exists some $r>0$ such that $\im f\subseteq B_r\l(0\r)$; that is, if $d\l(f\l(x\r),0\r)<r$ for all $x\in X$.<span style="float:right;">$\blacklozenge$</span>
