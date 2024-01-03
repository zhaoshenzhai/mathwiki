---
mathLink-blocks:
    vector-space: Vector Space
    module-homomorphism: Module Homomorphism
    category-of-modules: $\catmod[R]$
    category-of-abelian-groups: $\catabgrp$
---

<div class="topSpace"></div>

Date Created: 23/01/2023 17:40:02
References:
Tags: #Type/Definition #Topic/Rings_and_Modules/Module_Theory

Types: [[Finitely-generated Module]], [[Inner Product Space]]
Examples: [[Abelian Group]], [[Ring]], [[Ideal]]
Constructions: [[Torsion]], [[Annihilator]], [[Dual Space]], [[General Linear Group]], [[Endomorphisms in Category of Modules]], [[Submodule]], [[Kernel and Cokernel (Module Theory)]], [[Direct Product (module)]], [[Direct Sum (Module)]]
Generalizations: [[Antilinear Map]]

Properties: [[Basis Extension Theorem]], [[Invariant Basis Number]], [[Isomorphism Theorems]], [[Monomorphisms and epimorphisms in category of modules]]
Sufficiencies: [[Free Module]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Krull's Theorem]], [[Ideal is maximal iff quotient is a field]]

``` ad-Definition
title: Definition.

Let $R$ be a ring. A <b>left $R$-module</b> is an abelian group $M$ equipped with a left $R$-action $R\to\End_\catabgrp\!\l(M\r)$ on $M$.
* A <b>module homomorphism</b> from $M$ to $N$ is a function $\alpha:M\to N$ such that $\alpha\l(rm+n\r)=r\alpha\l(m\r)+\alpha\l(n\r)$ for all $r\in R$ and $m,n\in M$.
* The <b>category of (left) $R$-modules</b> is the category $\catmod[R]$ whose objects are (left) $R$-modules and whose morphisms are $R$-module homomorphisms.

```
^category-of-modules

<b>Remark.</b> Similarly, one has the category of <i>right</i> $R$-modules $\catrmod[R]$. The isomorphisms in $\catmod[R]$ are precisely the bijective $R$-module homomorphisms, and the automorphisms on an $R$-module $M$ form the <i>general linear group</i> $\GL\l(M\r)\coloneqq\Aut_R\!\l(M\r)$.
* We have the forgetful functors $\catmod[R]\to\catset$ that forgets the entire structure and $\catmod[R]\to\catabgrp$ that forgets the $R$-action structure.
* When $R\coloneqq\Z$, one recovers the <i>category of abelian groups</i> $\catabgrp$.<span style="float:right;">$\blacklozenge$</span>
^category-of-abelian-groups
* Submodules are preserved under images and preimages of $\alpha:M\to N$. In particular, $\ker\alpha$ is a submodule of $M$.

The morphisms $\Hom_R\!\l(M,N\r)$ is an abelian group under the component-wise addition, which gives us the $\Hom$ functors $\Hom_R\!\l(M,\slot\r),\Hom_R\!\l(\slot,M\r):\catmod[R]\to\catabgrp$. If furthermore $R$ is commutative, then it is also an $R$-module via the component-wise left $R$-action. In this case $\End_R\!\l(M\r)$ is also an $R$-algebra under composition.<span style="float:right;">$\blacklozenge$</span>
^module-homomorphism

---

<b>Remark.</b> Consider a maximal ideal $\mf{m}\nsubgrp R$, which exists by Krull’s Theorem, making $R/\mf{m}$ a field. If $\mf{m}M=0$, then $M$ has a natural $R/\mf{m}$-vector space structure by $\l(r+\mf{m}\r)\cdot m\coloneqq rm$. Indeed, the operation is well-defined since for all $r_1+\mf{m}=r_2+\mf{m}$, we have $r_1-r_2\in\mf{m}$ and hence $r_1m-r_2m=\l(r_1-r_2\r)m\in\mf{m}m=0$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $k\coloneqq R$ is a field, we call $M$ a <i>$k$-vector space</i>. A <i>left $R$-action on $M$</i> is a ring homomorphism $\phi:R\to\End\l(M\r)$. This induces a function $\cdot:R\times M\to M$ by $r\cdot m\coloneqq\phi\l(r\r)\l(m\r)$, which satisfies
$$\begin{equation}
    r\cdot\l(m+n\r)=\l(r\cdot m\r)+\l(r\cdot n\r),\ \ \ \ \ \ \ \ \l(r+s\r)\cdot m=\l(r\cdot m\r)+\l(s\cdot m\r),\ \ \ \ \ \ \ \ \l(rs\r)\cdot m=r\cdot\l(s\cdot m\r),\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 1\cdot m=m
\end{equation}$$
for all $m,n\in M$ and $r,s\in R$. This recovers the standard ‘left $R$-module axioms’. Given a left $R$-module, one cannot generally define a right $R$-module structure on $M$ by $m\ast r\coloneqq r\cdot m$. Indeed, compatibility between the field multiplication and the $R$-action fails:
$$\begin{equation}
    \l(m\ast r_1\r)\ast r_2=r_2\cdot\l(m\ast r_1\r)=r_2\cdot\l(r_1\cdot m\r)=\l(r_2r_1\r)\cdot m=m\ast\l(r_2r_1\r)\neq m\ast\l(r_1r_2\r).
\end{equation}$$
However, if $R$ is commutative, then this construction works (and vice versa from a right to a left $R$-module). In this case, we shall simply call either an <i>$R$-module</i>.<span style="float:right;">$\blacklozenge$</span>
^vector-space
