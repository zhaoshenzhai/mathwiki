<div class="topSpace"></div>

Date Created: 05/02/2024 18:27:21
References: #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Prime and Atomic Models]], [[Saturated Model]], [[Indiscernibles]]
Generalizations: <i>Not Applicable</i>

Properties: [[Omitting Types Theorem]], [[Realizing Types]]
Sufficiencies: [[Ryll-Nardzewski Theorem]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Types/$S_n(T)$).

Let $\mc{M}$ be an $\mc{L}$-structure and fix $A\subseteq M$. A set $p(\vec{x})$ of $\mc{L}_A$-formulas in $n$-variables is an <b>$n$-type</b> in $\mc{M}$ over $A$ if $p(\vec{x})\cup\Th_A\mc{M}$ is satisfiable.
* An $n$-type $p(\vec{x})$ is said to be <b>complete</b> if either $\phi\in p$ or $\lnot\phi\in p$ for all $\mc{L}_A$-formulas $\phi(\vec{x})$. We write $S_n^\mc{M}(A)$ for the set of all complete $n$-types over $\mc{M}$.
* A tuple $\vec{a}\in M^n$ <b>realizes</b> $p(\vec{x})$ if $\mc{M}\models\phi(\vec{a})$ for all $\phi\in p$, in which case we write $\mc{M}\models p(\vec{a})$ or $\vec{a}\in p(\mc{M})$. If $p(\mc{M})=\em$, we say that $\mc{M}$ <b>omits</b> $p$.
* An $\mc{L}_A$-formula $\psi(\vec{x})$ such that $\Th_A\mc{M}\cup\l\{\psi(\vec{x})\r\}$ is satisfiable is said to <b>isolate</b> $p(\vec{x})$ if $\Th_A\mc{M}\proves\fa\vec{x}(\psi(\vec{x})\rightarrow\phi(\vec{x}))$ for all $\phi\in p$.

For any $\vec{a}\in M^n$, the <b>type</b> of $\vec{a}$ over $A$ is the (complete) type $\tp^\mc{M}(\vec{a}/A)\coloneqq\l\{\phi(\vec{x})\in\mc{L}_A\st\mc{M}\models\phi(\vec{a})\r\}$. We write $\tp^\mc{M}(\vec{a})\coloneqq\tp^\mc{M}(\vec{a}/\em)$.

```

<b>Remark.</b> We may also define types without reference to an $\mc{L}$-structure, but rather in a complete $\mc{L}$-theory $T$, as a collection $p(\vec{x})$ of $\mc{L}$-formulas in the free variables $\vec{x}$ such that $p(\vec{x})\cup T$ is satisfiable. Note that the theory $T\coloneqq\Th_A\mc{M}$ is complete, and that the set $S_n(T)$ of all complete $n$-types in $T$ coincides with $S_n^\mc{M}(A)$.<span style="float:right;">$\blacklozenge$</span>
