<div class="topSpace"></div>

Date Created: 01/12/2022 13:32:31
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: [[Functional Limits in R]]
Constructions: [[Sequential and functional limit characterizations of continuity]], [[Frechet Differentiability and Derivative]]
Generalizations: [[Functional Limits]]

Properties: [[Convergent implies bounded (functional)]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Sequential Criterion for Functional Limits]]
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

Let $X$ and $Y$ be metric spaces, fix a cluster point $p\in\Omega\subseteq X$, and let $L\in Y$. For a function $f:\Omega\to Y$, we say that <b>$f\to L$ as $x\to p$</b> or <b>$L$ is a limit of $f$</b>, and write $\lim\limits_{x\to p}f\l(x\r)=L$, if
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa x\in\Omega:0<d_X\!\l(x,p\r)<\delta\Rightarrow d_Y\!\l(f\l(x\r),L\r)<\epsilon.
\end{equation}$$

```

<b>Remark.</b> We may rephrase this statement as $\fa\epsilon>0,\ex\delta>0:\im_f\!\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_\epsilon\!\l(L\r)$.<span style="float:right;">$\blacklozenge$</span>
