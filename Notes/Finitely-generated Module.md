<div class="topSpace"></div>

Date Created: 04/08/2023 15:01:59
Tags: #Type/Definition #Topic/Module_Theory

Types: [[Noetherian Module]]
Examples: [[Cyclic Module]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Characterizations of fields#^finitely-generated-over-field-are-free]]
Sufficiencies: [[Structure Theorem]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

An $R$-module $M$ is said to be <b>finitely-generated</b> if $F^R\!\l(X\r)\onto M$ for some finite subset $X\subseteq M$.

```

<b>Remark.</b> If $M$ is finitely-generated, then $M\iso F^R\!\l(X\r)/N$ for some submodule $N\subgrpeq M$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $M$ and $N$ be finitely-generated free $R$-modules, so there are isomorphisms $M\iso R^n$ and $N\iso R^m$ for some $m,n\in\N$. After fixing such isomorphisms, every $R$-module homomorphism $\alpha\in\Hom\l(R^n,R^m\r)$ is determined uniquely by an $m\times n$ matrix $A\in\Mat_{m\times n}\!\l(R\r)$, acting on elements in $R^n$ by left-multiplication. This gives us an isomorphism $\Hom\l(R^n,R^m\r)\iso\Mat_{m\times n}\!\l(R\r)$, but is <i>not</i> canonical as it depends on the choice of bases for $M$ and $N$. Indeed, consider two choices of bases for both $M$ and $N$, as shown below.
![[Images/2023-08-02_185945/image.svg|320]] Then $\psi_i^{-1}\circ\alpha\circ\phi_i:F^R\!\l(B_i\r)\to F_R\!\l(C_i\r)$ are the bases representations of $\alpha$ under the choices $B_i$ for $M$ and $C_i$ for $N$. Let $A_i$ denote their matrix representations. If we let $T_1^2$ and $L_1^2$ denote the change of bases matrices, then $A_2=L_1^2A_1\l(T_1^2\r)^{-1}$. Since the matrices $A_i$ represent the same homomorphism up to choices of bases for $M$ and $N$, we say that they are <i>equivalent</i>.<span style="float:right;">$\blacklozenge$</span>
