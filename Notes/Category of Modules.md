---
mathLink: auto
mathLink-blocks:
    category-of-abelian-groups: $\catabgrp$
---

<div class="topSpace"></div>

Date Created: 31/08/2023 12:55:54
Tags: #Type/Example #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[General Linear Group]], [[Endomorphisms in Category of Modules]]
Generalizations: <i>Not Applicable</i>

Properties: [[Monomorphisms and epimorphisms in category of modules]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Example
title: Example.

Let $R$ be a ring. The <b>category of $R$-modules</b> is the category $\catmod[R]$ whose objects are (left) $R$-modules and whose morphisms are $R$-module homomorphisms.

```

<b>Remark.</b> Similarly, one has the category of <i>right</i> $R$-modules $\catrmod[R]$. The isomorphisms in $\catmod[R]$ are precisely the bijective $R$-module homomorphisms, and the automorphisms on an $R$-module $M$ form the <i>general linear group</i> $\GL\l(M\r)\coloneqq\Aut_R\!\l(M\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We have the forgetful functors $\catmod[R]\to\catset$ that forgets the entire structure and $\catmod[R]\to\catabgrp$ that forgets the $R$-action structure.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> When $R\coloneqq\Z$, one recovers the category of abelian groups $\catabgrp$.<span style="float:right;">$\blacklozenge$</span>
^category-of-abelian-groups
