---
mathLink-blocks:
    category-of-structures: $\cathom$
---

<div class="topSpace"></div>

Date Created: 16/04/2024 19:14:19
References: #Ref/Anu23 #Ref/Anu23_318 #Ref/Mar16
Tags: #Type/Definition #In_Progress

Types: [[Saturated Model]], [[Homogeneous Model]], [[Universal Model]], [[Prime and Atomic Models]]
Examples: [[Monoid]], [[Group]], [[Ring]], [[Field]], [[Module]]
Constructions: [[Definable Sets]], [[Ultraproduct]], [[Elementarity]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Ehrenfeucht-Fraisse Games]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (First-order Structure).

Let $\mc{L}$ be a first-order language. An <b>$\mc{L}$-structure</b> $\mc{M}$ consists of a set $M$ $-$ called the <b>universe</b> $-$ and an interpretation of $\mc{L}$ that assigns each $f\in\mc{F}_n$ an $n$-ary function $f^\mc{M}:M^n\to M$, each $R\in\mc{R}_n$ an $n$-ary relation $R^\mc{M}\subseteq M^n$, and each $c\in\mc{C}$ a constant $c^\mc{M}\in M$.
&emsp;&emsp;The <b>category of $\mc{L}$-structures</b> is the category $\cathom$ whose objects are $\mc{L}$-structures and whose morphisms from $\mc{M}$ to $\mc{N}$ are functions $h:M\to N$ such that $h(c^\mc{M})=c^\mc{N}$ for each $c\in\mc{C}$, $h(f^\mc{M}(\vec{a}))=f^\mc{N}(h(\vec{a}))$ for each $f\in\mc{F}_n$ and $\vec{a}\in M^n$, and $R^\mc{M}(\vec{a})\Rightarrow R^\mc{N}(h(\vec{a}))$ for each $R\in\mc{R}_n$ and $\vec{a}\in M^n$.

```
^category-of-structures

<b>Remark.</b> Let $\kappa$ be an infinite cardinal. An $\mc{L}$-structure $\mc{M}$ is what gives <i>semantics</i> to the <i>syntax</i> of $\mc{L}_{\kappa,\omega}$, which can be extended to both $\mc{L}$-terms/$\mc{L}_{\kappa,\omega}$-formulas.
&emsp;&emsp;The <i>interpretation</i> of a constant $\mc{L}$-term $t(\vec{x})$ in $\mc{M}$ is a function $t^\mc{M}:M^n\to M$ defined by $t^\mc{M}(\vec{a})\coloneqq c^\mc{M}$ if $t=c\in\mc{C}$ and $t^\mc{M}(\vec{a})\coloneqq f^\mc{M}\!\l(t_1^\mc{M}(\vec{a}),\dots,t_n^\mc{M}(\vec{a})\r)$ if $f\in\mc{F}_n$ and each $t_i(\vec{x})\in\Term\l(\mc{L}\r)$.
&emsp;&emsp;The <i>interpretation</i> of an $\mc{L}_{\kappa,\omega}$-formula $\phi(\vec{x})$ in $\mc{M}$ is an $n$-ary relation $\phi^\mc{M}\subseteq M^n$ $-$ where we write $\mc{M}\models\phi(\vec{a})$ if $\vec{a}\in\phi^\mc{M}$ $-$ defined as follows: $\mc{M}\models(t_1(\vec{a})=t_2(\vec{a}))$ if $t_1^\mc{M}(\vec{a})=t_2^\mc{M}(\vec{a})$; $\mc{M}\models R(t_1(\vec{a}),\dots,t_n(\vec{a}))$ if $R^\mc{M}\!\l(t_1^\mc{M}(\vec{a}),\dots,t_n^\mc{M}(\vec{a})\r)$; $\mc{M}\models\lnot\phi(\vec{a})$ if $\mc{M}\not\models\phi(\vec{a})$; if $X$ is a set of $\mc{L}_{\kappa,\omega}$-formulas with $|X|<\kappa$, then $\mc{M}\models\bigwedge_{\phi\in X}\phi(\vec{a})$ if $\mc{M}\models\phi(\vec{a})$ for all $\phi\in X$; and finally $\mc{M}\models\ex y\phi(\vec{a},y)$ if $\mc{M}\models\phi(\vec{a},b/y)$ for some $b\in M$. We also write $\mc{M}\models\phi$ if $\mc{M}\models\phi(\vec{a})$ for all $\vec{a}\in M^n$. <span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A <i>weak $\mc{L}$-substructure</i> $\mc{M}$ of an $\mc{L}$-structure $\mc{N}$ is a subobject $h:\mc{M}\into\mc{N}$ in $\cathom$. If we additionally require that $R^\mc{M}(\vec{a})\Leftrightarrow R^\mc{N}(h(\vec{a}))$ for all $R\in\mc{R}_n$ and $\vec{a}\in M^n$, then $h$ is said to be an <i>$\mc{L}$-embedding</i>. The subcategory of $\cathom$ whose morphisms are $\mc{L}$-embeddings is denoted $\catemb$, whose subobjects are called <i>$\mc{L}$-substructures</i>. We write $\mc{M}\substructeq\mc{N}$ to mean $\mc{M}$ is an $\mc{L}$-substructure of $\mc{N}$.
&emsp;&emsp;For any morphism $h:\mc{M}\to\mc{N}$ in $\cathom$, its image $h\l(M\r)$ is the universe of some $\mc{L}$-substructure $\mc{N}'$ of $\mc{N}$, and $h:\mc{M}\into\mc{N}$ iff $\mc{M}\iso\mc{N}'$. Note that any subset $B\subseteq N$ supports at most one $\mc{L}$-substructure of $\mc{N}$, and it does iff $B$ contains all constants $c^\mc{N}$ and is closed under all functions $f^\mc{N}$.
&emsp;&emsp;The <i>$\mc{L}$-structure generated</i> by a subset $A\subseteq M$ of an $\mc{L}$-structure $\mc{M}$ is the intersection of all $\mc{L}$-substructures of $\mc{M}$ containing $A$, denoted $\gen{A}_\mc{M}$. A more bottom-up approach is obtained by constructing the universe of $\gen{A}_\mc{M}$ as $\bigcup_nA_n$, where $A_0\coloneqq A\cup\l\{c^\mc{M}\st c\in\mc{C}\r\}$ and $A_{n+1}\coloneqq A_n\cup\bigcup_m\bigcup_{f\in\mc{F}_m}f^\mc{N}\!\l(A_n^m\r)$.<span style="float:right;">$\blacklozenge$</span>
