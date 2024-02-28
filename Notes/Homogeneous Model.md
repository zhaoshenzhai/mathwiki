<div class="topSpace"></div>

Date Created: 27/02/2024 15:23:19
References: #Ref/Mar02
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Homogeneous Model).

Let $T$ be an $\mc{L}$-theory with infinite models and fix an infinite cardinal $\kappa$. A model $\mc{M}\models T$ is said to be <b>$\kappa$-homogeneous</b> if whenever $A\subseteq M$ has cardinality $<\kappa$, $f:A\eleminto\mc{M}$ is a partial elementary map, and $a\in M$, then there is a partial elementary map $f^\ast:A\cup\l\{a\r\}\eleminto\mc{M}$ extending $f$.
* If any partial elementary map $f:A\eleminto\mc{M}$ with $\l|A\r|<\kappa$ can be extended to an automorphism $f^\ast\in\Aut_\mc{L}\mc{M}$, then $M$ is <b>strongly $\kappa$-homogeneous</b>.

We say that $\mc{M}$ is (<b>strongly</b>) <b>homogeneous</b> if it is (strongly) $\l|M\r|$-homogeneous.

```

<b>Remark.</b> A back-and-forth argument shows that $\mc{M}$ is homogeneous iff it is strongly-homogeneous. However, $\kappa$-homogeneity does <i>not</i> imply strong $\kappa$-homogeneity.
&emsp;&emsp;Indeed, enumerate $M=\l\{a_\alpha\st\alpha<\lambda\r\}$, and construct an increasing sequence $f_\alpha\subseteq f_{\alpha+1}$ of partial elementary maps with each $\l|f_\alpha\r|<\lambda$ and each $a_\alpha$ in the domain and range of $f_{\alpha+1}$, so $f^\ast\coloneqq\bigcup_{\alpha<\lambda}f_\alpha$ is the desired automorphism. Set $f_0\coloneqq f$ and let $f'_\alpha\coloneqq\bigcup_{\beta<\alpha}f_\beta$. Note that $\l|f_\alpha'\r|<\lambda$, so by homogeneity of $\mc{M}$, we have a partial elementary extension $g_\alpha\coloneqq f_\alpha'\cup\l\{(a_{\alpha-1},b)\r\}$ for some $b\in M$. Note that $g_\alpha^{-1}$ is also partial elementary, so again there is some $c\in M$ such that $g_\alpha^{-1}\cup\l\{(a_{\alpha-1},c)\r\}$ is partial elementary. Setting $f_\alpha\coloneqq g_\alpha\cup\l\{(c,a_{\alpha-1})\r\}$ gives the desired.
&emsp;&emsp;In particular, if $\mc{M}$ is homogeneous and $\vec{a},\vec{b}\in M$ realize the same type over $A$, then there is an $A$-preserving automorphism $h\in\Aut_\mc{L}\mc{M}$ mapping $\vec{a}\mapsto\vec{b}$.<span style="float:right;">$\blacklozenge$</span>
