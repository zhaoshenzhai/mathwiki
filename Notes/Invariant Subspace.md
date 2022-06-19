<br />
<br />

Date Created: 19/06/2022 16:20:24
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [Kernel$\slash$Null Space](Kernel;%20Null%20Space.md), [Image$\slash$Column Space](Image;%20Column%20Space.md), [[Trivial Subspaces (Linear Algebra)]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a vector space over some field $K$ and let $T:V\to V$. A linear subspace $U\subseteq V$ is called **$T$-invariant** if $\im_T\l(U\r)\subseteq U$._

```

**Remark.** Equivalently, $U$ is $T$-invariant if $\l.T\r|_U$ closes in $U$; that is, if $T\l(u\r)\in U$ whenever $u\in U$.
* ($\Rightarrow$): Take $u\in U$. Since $T\l(u\r)\in\im_T\l(U\r)$, we have $T\l(u\r)\in U$.
* ($\Leftarrow$): Take $u\in\im_T\l(U\r)$, so $\ex u_0\in U$ such that $T\l(u_0\r)=u$. But then $T\l(u_0\r)\in U$, so $u\in U$.<span style="float:right;">$\blacklozenge$</span>
