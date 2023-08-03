<div class="topSpace"></div>

Date Created: 19/06/2022 16:20:24
Tags: #Type/Definition #Topic/Module_Theory/Later

Types: <i>Not Applicable</i>
Examples: [[Generalized Eigenvector and Eigenspace]], [[Cyclic Subspace]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of characteristic polynomial and invariant subspaces]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ be a $K$-vector space and let $T:V\to V$. A linear subspace $U\subseteq V$ is called <b>$T$-invariant</b> if $\im_T\l(U\r)\subseteq U$.

```

<b>Remark.</b> Equivalently, $U$ is $T$-invariant if $\l.T\r|_U$ closes in $U$; that is, if $T\l(u\r)\in U$ whenever $u\in U$.
* ($\Rightarrow$): Take $u\in U$. Since $T\l(u\r)\in\im_T\l(U\r)$, we have $T\l(u\r)\in U$.
* ($\Leftarrow$): Take $u\in\im_T\l(U\r)$, so $\ex u_0\in U$ such that $T\l(u_0\r)=u$. But then $T\l(u_0\r)\in U$, so $u\in U$.<span style="float:right;">$\blacklozenge$</span>
