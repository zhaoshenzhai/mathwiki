---
title: Type
date: 2024-12-12T21:44:05-05:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $M$ be a model of a first-order {{< link file="theory.md" display="theory" type="references" >}} $T$. What are the possible first-order properties satisfied elements (or tuples) in $M$?

{{< env type="definition" >}}

Let $n\geq0$. An *$n$-type* is a set $p(\bar{x})$ of $L$-formulas such that the $L$-theory $\ex\bar{x}p(\bar{x})\cup\Th M$ is satisfiable.{{< /env >}}

It will be useful to also consider types with *parameters* over some subset $A\subseteq M$, which is defined by considering the $L_A$-structure $M$; that is, an *$n$-type over $A$* is a set $p(\bar{x})$ of $L_A$-formulas such that the $L_A$-theory $\ex\bar{x}p(\bar{x})\cup\Th_AM$ is satisfiable.
<br>
&emsp;&emsp;Every type $\bar{a}\in M^n$ defines the type $\tp^M(\bar{a}/A)\coloneqq\l\\{\phi\in L_A\st M\models\phi(\bar{a})\r\\}$ over $A$. An $n$-type $p(\bar{x})$ of $M$ over $A$ is:
* *complete* if either $\phi\in p$ or $\lnot\phi\in p$ for all $L_A$-formulas $\phi$. We write $S^M_n(A)$ for the set of all complete $n$-types over $A$;
* *realized by $\bar{a}\in M^n$* if $p\subseteq\tp^M(\bar{a}/A)$, in which case we write $M\models p(\bar{a})$, and *omitted by $M$* if no $\bar{a}\in M$ realizes $p$;
* *isolated by* some satisfiable $L_A$ formula $\psi(\bar{x})$ if $\Th_AM\models\fa\bar{x}(\psi(\bar{x})\rightarrow\phi(\bar{x}))$ for all $\phi\in p$.

It will also be convenient to consider the (complete) theory $T\coloneqq\Th_AM$ and talk about $n$-types of $T$ instead of $n$-types of $M$ over $A$; in this case, we write $S_n(T)$ for $S_n^M(A)$.

# Realizing and Omitting Types

## Realizing types in elementary extensions

{{< env type="proposition" >}}

Every $n$-type $p(\bar{x})$ in $M$ over $A$ can be realized in some elementary extension $N\elemextend M$.{{< /env >}}

{{< env type="proof" hide="false" >}}

It suffices to show that the $L_M$-theory $\ex\bar{x}p(\bar{x})\cup\Diag_\textrm{el}M$ is satisfiable; by the {{< link file="compactness_theorem.md" display="Compactness Theorem" type="proved_by" >}}, it further suffices to show that the $L_M$-sentence $\Delta\coloneqq\ex\bar{x}\phi(\bar{x},\bar{a})\land\psi(\bar{a},\bar{b})$, where $\phi(\bar{x},\bar{a})\in p(\bar{x})$, $M\models\psi(\bar{a},\bar{b})$, $\bar{a}\in A$, and $\bar{b}\in A^c$, is satisfiable.
<br>
&emsp;&emsp;To this end, let $N_0\models\ex\bar{x}p(\bar{x})\cup\Th_AM$. Since $\ex\bar{z}\psi(\bar{a},\bar{z})\in\Th_AM$, we have $N_0\models\ex\bar{x}\phi(\bar{x},\bar{a})\land\ex\bar{z}\psi(\bar{a},\bar{z})$. Interpreting the constants $\bar{b}$ as witnesses to $\ex\bar{z}\psi(\bar{a},\bar{z})$ makes $N_0\models\Delta$, as desired.<span style="float:right;">$\blacksquare$</span>{{< /env >}}

<div class="space"></div>

**Remark.** In particular, this shows that a type $p(\bar{x})$ is complete iff $p=\tp^N(\bar{a}/A)$ for some elementary extension $N\elemextend M$. The converse follows since $S^M_n(A)=S^N_n(A)$ for any elementary extension $N\elemextend M$. If $p$ is complete, let $N\elemextend M$ realize $p$, i.e. $p\subseteq\tp^N(\bar{a}/A)$ for some $\bar{a}\in N^n$, from which equality follows by completeness of $p$.

## The Omitting Types Theorem

# Types of Models

## Homogeneous models

{{< env type="lemma" >}}

If $\bar{a}_1,\bar{a}_2\in M^n$ realize the same types of $M$ over $A$, that is, if $\tp^M(\bar{a}_1/A)=\tp^M(\bar{a}_2/A)$, then there is an elementary extension $N\elemextend M$ and an automorphism $h\in\Aut_AM$ sending $\bar{a}_1\mapsto\bar{a}_2$.{{< /env >}}

{{< env type="proof" hide="false" >}}

{{< /env >}}

## Saturated models

## Prime and atomic models
