---
mathLink-blocks:
    structure: Structure
    category-of-structures: $\cathom$
---

<div class="topSpace"></div>

Date Created: 14/12/2023 22:53:59
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: [[Monoid]], [[Group]], [[Ring]], [[Field]], [[Module]]
Constructions: [[Definable Sets]], [[Theory]], [[Ultraproduct]], [[Elementarity]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Ehrenfeucht-Fraisse Games]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Language of First Order Logic).

A <b>language</b> $\mc{L}\coloneqq\tpl{\mc{F},\mc{R},\mf{a}}$ consists of two disjoint sets $\mc{F}$ and $\mc{R}$ of <b>function</b> and <b>relation</b> symbols, together with an <b>arity</b> function $\mf{a}:\mc{F}\cup\mc{R}\to\N$. For each $n\in\N^+$, let $\mc{F}_n\subseteq\mc{F}$ and $\mc{R}_n\subseteq\mc{R}$ be the subset of functions/relations of arity $n$. The function symbols $\mc{C}\coloneqq\mc{F}_0$ of arity $0$ are called <b>constants</b>. The <b>first-order language</b> $\FOL\l(\mc{L}\r)$ in the language $\mc{L}$ consists of the symbols in $\mc{L}$, the symbols in $\PL\l(\mc{L}\r)$, and the symbols $=$ <span style="color:gray">(equality)</span> and $\fa$ <span style="color:gray">(quantifier)</span>.
* An <b>$\mc{L}$-structure</b> is a pair $\mc{A}\coloneqq(A,\mc{L}^\mc{A})$ consisting of a set $A$, called the <b>universe</b>, and an <b>interpretation</b> of $\mc{L}$ that assigns each function symbol $f\in\mc{F}_n$ an $n$-ary function $f^\mc{A}:A^n\to A$, each relation symbol $R\in\mc{R}_n$ an $n$-ary relation $R\subseteq A^n$, and to each constant symbol $c\in\mc{C}$ a constant $c^\mc{A}\in A$.
* The <b>category of $\mc{L}$-structures</b> is the category $\cathom$ whose objects are $\mc{L}$-structures and whose morphisms from $\mc{A}$ to $\mc{B}$ are functions $h:A\to B$ such that $h(c^\mc{A})=c^\mc{B}$ for each $c\in\mc{C}$, $h(f^\mc{A}(\vec{a}))=f^\mc{B}(h(\vec{a}))$ for each $f\in\mc{F}_n$ and $\vec{a}\in A^n$, and $R^\mc{A}(\vec{a})\Rightarrow R^\mc{B}(h(\vec{a}))$ for each $R\in\mc{R}_n$ and $\vec{a}\in A^n$.

```
^structure

<b>Remark.</b> Finite strings of symbols in $\FOL\l(\mc{L}\r)$ are called <i>$\mc{L}$-words</i>. We define the set $\Term\l(\mc{L}\r)$ of <i>$\mc{L}$-terms</i> as the smallest set of $\mc{L}$-words containing the constants and the variables such that $f\l(t_1,\dots,t_n\r)\in\Term\l(\mc{L}\r)$ for each $t_1,\dots,t_n\in\Term\l(\mc{L}\r)$ and $f\in\mc{F}_n$, and the set of <i>$\mc{L}$-formulas</i> $\Form\l(\mc{L}\r)$ as the smallest set of $\mc{L}$-words such that if $s,t\in\Term\l(\mc{L}\r)$, then $\l(s=t\r)$ is an $\mc{L}$-formula; if $t_1,\dots,t_n\in\Term\l(\mc{L}\r)$ and $R\in\mc{R}_n$, then $R\l(t_1,\dots,t_n\r)$ is an $\mc{L}$-formula; and if $\phi,\psi\in\Form\l(\mc{L}\r)$ and $v$ is a variable, then $\lnot\phi$, $\phi\land\psi$, $\phi\lor\psi$, and $\fa v\phi$ are also $\mc{L}$-formulas. If an $\mc{L}$-formula $\phi$ does not contain any free variables, then $\phi\in\Sent\l(\mc{L}\r)$ is said to be an <i>$\mc{L}$-sentence</i>.
* For an $\mc{L}$-term $t$, we write $t(\vec{v})$ for $t$ to indicate that $\vec{v}$ includes all the variable symbols appearing in $t$. Similarly, we write $\phi(\vec{v})$ for an $\mc{L}$-formula $\phi$ if $\vec{v}$ includes all the free variables of $\phi$ and does not include any quantified variable in $\phi$. For an $\mc{L}$-formula $\phi(v)$ and an $\mc{L}$-term $t(\vec{v})$ where no variable in $\vec{v}$ is quantified in $\phi$, the <i>substitution</i> of $t$ into $v$ in $\phi$ is the $\mc{L}$-formula $\phi\l(t/v\r)$ obtained by replacing each occurrence of $v$ by $t$. The <i>quantifier depth</i> $\qd(\phi)$ of $\phi$ is defined inductively.

An $\mc{L}$-structure $\mc{A}$ is what gives <i>semantics</i> to the <i>syntax</i> of $\mc{L}$, which can be extended to both $\mc{L}$-terms/$\mc{L}$-formulas: the <i>interpretation</i> an $\mc{L}$-term $t(\vec{v})\coloneqq t(v_1,\dots,v_n)$ in $\mc{A}$ is the function $t^\mc{A}:A^{|\vec{v}|}\to A$ defined inductively by $t^\mc{A}(\vec{a})\coloneqq c^\mc{A}$ if $t=c\in\mc{C}$; $t^\mc{A}(\vec{a})\coloneqq a_i$ if $t=v_i$ for some $1\leq i\leq n$; and $t^\mc{A}\coloneqq f^\mc{A}\!\l(t_1^\mc{A}(\vec{a}),\dots,t_n^\mc{A}(\vec{a})\r)$ if $f\in\mc{F}_n$ and each $t_i(\vec{v})\in\Term\l(\mc{L}\r)$, and the <i>interpretation</i> of an $\mc{L}$-formula $\phi(\vec{v})\coloneqq\phi(v_1,\dots,v_n)$ in $\mc{A}$ is the $n$-ary relation $\phi^\mc{A}\subseteq A^n$ defined inductively; the only interesting case is if $\phi(\vec{v})=\ex w\psi(\vec{v},w)$, in which case $\phi^\mc{A}(\vec{a})$ holds iff there is some $b\in A$ such that $\psi^\mc{A}(\vec{a},b)$ holds. Given an $\mc{L}$-formula $\phi(\vec{v})$ and a tuple $\vec{a}\in A^{|\vec{v}|}$, we say that $\mc{A}$ <i>models</i> $\phi(\vec{a}/\vec{v})$, and write $\mc{A}\models\phi(\vec{a}/\vec{v})$, if $\phi^\mc{A}(\vec{a})$ holds. We also write $\mc{A}\models\phi$ if $\mc{A}\models\phi(\vec{a}/\vec{v})$ for all $\vec{a}\in A^{|\vec{v}|}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A <i>weak $\mc{L}$-substructure</i> $\mc{A}$ of an $\mc{L}$-structure $\mc{B}$ is a subobject of $\mc{B}$ in $\cathom$; explicitly, this means that there is a morphism $h:\mc{A}\to\mc{B}$ whose underlying function is injective. If we additionally require that $R^\mc{A}(\vec{a})\Leftrightarrow R^\mc{B}(h(\vec{a}))$ for all $R\in\mc{R}_n$ and $\vec{a}\in A^n$, then $h:\mc{A}\into\mc{B}$ is said to be an <i>$\mc{L}$-embedding</i>. The subcategory of $\cathom$ whose morphisms are $\mc{L}$-embeddings is denoted $\catemb$, whose subobjects are called <i>$\mc{L}$-substructures</i>. We write $\mc{A}\substructeq\mc{B}$ to mean $\mc{A}$ is an $\mc{L}$-substructure of $\mc{B}$. ^category-of-structures
* For any morphism $h:\mc{A}\to\mc{B}$ in $\cathom$, its image $h\l(A\r)$ is the universe of some $\mc{L}$-substructure $\mc{B}'$ of $\mc{B}$, and $h:\mc{A}\into\mc{B}$ iff $\mc{A}\iso\mc{B}'$. Note that any subset $B'\subseteq B$ supports at most one $\mc{L}$-substructure of $\mc{B}$, and it does iff $B'$ contains all constants $c^\mc{B}$ and is closed under all functions $f^\mc{B}$.

For any subset $A\subseteq B$ of an $\mc{L}$-structure $\mc{B}\coloneqq(B,\mc{L}^\mc{B})$, the <i>$\mc{L}$-structure generated by $A$</i> is the intersection of all $\mc{L}$-substructures of $\mc{B}$ containing $A$, denoted $\gen{A}_\mc{B}$. A more bottom-up approach is obtained by constructing the universe of $\gen{A}_\mc{B}$ as $\bigcup_nA_n$, where $A_0\coloneqq A\cup\l\{c^\mc{B}\st c\in\mc{C}\r\}$ and $A_{n+1}\coloneqq A_n\cup\bigcup_m\bigcup_{f\in\mc{F}_m}f^\mc{B}\!\l(A_n^m\r)$.<span style="float:right;">$\blacklozenge$</span>
