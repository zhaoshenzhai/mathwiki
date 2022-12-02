<div class="topSpace"></div>

Date Created: 01/12/2022 13:32:31
Tags: #Definition #Courses/MATH254

Types: _Not Applicable_
Examples: [[Functional Limits in R]]
Constructions: [[Sequential slash functional limit characterizations of continuity]]
Generalizations: [[Functional Limits]]

Properties: [[Convergent implies bounded (functional)]]
Sufficiencies: _Not Applicable_
Equivalences: [[Sequential Criterion for Functional Limits]]
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

_Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces, fix a cluster point $p\in\Omega\subseteq X$, and let $L\in Y$. For a function $f:\Omega\to Y$, we say that **$f\to L$ as $x\to p$** or **$L$ is a limit of $f$**, and write_ $\lim\limits_{x\to p}f\l(x\r)=L$_, if_
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa x\in\Omega:0<d_X\!\l(x,p\r)<\delta\Rightarrow d_Y\!\l(f\l(x\r),L\r)<\epsilon.
\end{equation}$$

```

**Remark.** We may rephrase this statement as $\fa\epsilon>0,\ex\delta>0:\im_f\!\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_\epsilon\!\l(L\r)$.<span style="float:right;">$\blacklozenge$</span>
