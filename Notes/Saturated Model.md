<div class="topSpace"></div>

Date Created: 05/02/2024 21:17:57
References: #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Saturated iff homogeneous and universal]]
Justifications: [[Realizing Types]]

``` ad-Definition
title: Definition (Saturated Model).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$ and fix an infinite cardinal $\kappa$. A model $\mc{M}\models T$ is said to be <b>$\kappa$-saturated</b> if for all $A\subseteq M$ with $\l|A\r|<\kappa$, every type in $p\in S_n^\mc{M}(A)$ is realized in $\mc{M}$. We say that $\mc{M}$ is <b>saturated</b> if it is $\l|M\r|$-saturated.

```

<b>Remark.</b> Since every partial type $p$ extends to a complete type, we may alternatively require that every (possibly incomplete) $n$-type over $A$ is also realized in $\mc{M}$. We may also alternatively require that $1$-types $p\in S_1^\mc{M}(A)$ are realized in $\mc{M}$. Indeed, let $p\in S_n^\mc{M}(A)$ and set $q\coloneqq\l\{\phi(x_1,\dots,x_{n-1})\st\phi\in p\r\}\in S_{n-1}^\mc{M}(A)$. By induction, $q$ is realized by some $\vec{a}\in M$, and $r\coloneqq\l\{\psi(\vec{a},y)\st\psi(x_1,\dots,x_{n-1},y)\in p\r\}\in S_1^\mc{M}(A\cup\vec{a})$ is realized by some $b\in M$. Then $(\vec{a},b)$ realizes $p$, as desired.<span style="float:right;">$\blacklozenge$</span>
