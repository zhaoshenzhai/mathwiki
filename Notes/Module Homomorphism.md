---
mathLink-blocks:
    category-of-modules: $\catmod[R]$
---

<div class="topSpace"></div>

Date Created: 26/01/2023 12:43:49
Tags: #Type/Definition #Topic/Module_Theory

Types: [[Normal Operator]], [[Bounded Linear Map]]
Examples: <i>Not Applicable</i>
Constructions: [[Kernel and Cokernel (Module Theory)]], [[General Linear Group]], [[Endomorphisms in Category of Modules]], [[Dual Space]], [[Adjoint Map]]
Generalizations: [[Antilinear Map]], [[Multilinear Map]]

Properties: [[Monomorphisms and epimorphisms in category of modules]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Invariant Basis Number]]

``` ad-Definition
title: Definition.

Let $M$ and $N$ be left $R$-modules. An <b>$R$-module homomorphism/linear map from $M$ to $N$</b> is a function $\alpha:M\to N$ such that $\alpha\l(rm+n\r)=r\alpha\l(m\r)+\alpha\l(n\r)$ for all $r\in R$ and $m,n\in M$.
* The <b>category of $R$-modules</b> is the category $\catmod[R]$ whose objects are $R$-modules and whose morphisms are $R$-module homomorphisms.
* An <b>$R$-module isomorphism</b> is an isomorphisms in $\catmod[R]$; equivalently, it is a bijective $R$-module homomorphism.
* Two $R$-modules $M$ and $N$ are said to be <b>isomorphic</b> if there is an $R$-module isomorphism.

Elements in $\End\l(M\r)$ are called <b>linear operators</b>.

```
^category-of-modules

<b>Remark.</b> As in $\catabgrp$, the morphisms $\Hom_R\!\l(M,N\r)$ is an abelian group under the component-wise addition. If furthermore $R$ is commutative, then it is also an $R$-module via the component-wise left $R$-action. In this case $\End_R\!\l(M\r)$ is also an $R$-algebra under composition.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $M$ and $N$ be finitely-generated free $R$-modules, so there are isomorphisms $M\iso R^n$ and $N\iso R^m$ for some $m,n\in\N$. After fixing such isomorphisms, every $R$-module homomorphism $\alpha\in\Hom\l(R^n,R^m\r)$ is determined uniquely by an $m\times n$ matrix $A\in\Mat_{m\times n}\!\l(R\r)$, acting on elements in $R^n$ by left-multiplication. This gives us an isomorphism $\Hom\l(R^n,R^m\r)\iso\Mat_{m\times n}\!\l(R\r)$, but is <i>not</i> canonical as it depends on the choice of bases for $M$ and $N$. Indeed, consider two choices of bases for both $M$ and $N$, as shown below.
![[Images/2023-08-02_185945/image.svg|320]] Then $\psi_i^{-1}\circ\alpha\circ\phi_i:F^R\!\l(B_i\r)\to F_R\!\l(C_i\r)$ are the bases representations of $\alpha$ under the choices $B_i$ for $M$ and $C_i$ for $N$. Let $A_i$ denote their matrix representations. If we let $T_1^2$ and $L_1^2$ denote the change of bases matrices, then $A_2=L_1^2A_1\l(T_1^2\r)^{-1}$. Since the matrices $A_i$ represent the same homomorphism up to choices of bases for $M$ and $N$, we say that they are <b>equivalent</b>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Submodules are preserved under images and preimages of $\alpha$. In particular, $\ker\alpha$ is a submodule of $M$.<span style="float:right;">$\blacklozenge$</span>
