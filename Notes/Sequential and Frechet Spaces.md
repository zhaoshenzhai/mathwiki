---
mathLink: Sequential/Fréchet Spaces
---

<div class="topSpace"></div>

Date Created: 27/12/2023 16:20:55
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Sequential implies k-space]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,\tau}$ be a topological space. A subset $A\subseteq X$ is <b>sequentially closed</b> if whenever $\tpl{x_i}\subseteq A$ is a sequence and $x_n\to x$, then $x\in A$.
* The collection $\tau_s\coloneqq\l\{U\subseteq X\st U^c\textrm{\it{  is sequentially closed in }}X\r\}$ is a topology on $X$, finer than $\tau$, and $X$ is said to be <b>sequential</b> if $\tau=\tau_s$.

Moreover, $X$ is said to be <b>Fréchet</b> if for every subset $A\subseteq X$ and $x\in\bar{A}$, there is a sequence $\tpl{x_n}\subseteq A$ such that $x_n\to x$.

```

<b>Remark.</b> Note that every closed subset $A\subseteq X$ is sequentially closed, so $X$ is sequential iff the converse holds too. Explicitly, a subset $U\subseteq X$ is sequentially open iff whenever $\tpl{x_n}$ is a sequence in $X$ such that $x_n\to x$ for some $x\in U$, then $U$ contains cofinitely-many $x_n$’s.
* Every Fréchet space is sequential. Indeed, let $A$ be sequentially closed in $X$. If $A$ is not closed in $X$, then there is some $x\in\bar{A}\comp A$. Since $X$ is Fréchet, we have a sequence $\tpl{x_n}\subseteq A$ such that $x_n\to x$. But $A$ is sequentially closed, so $x\in A$, a contradiction.<span style="float:right;">$\blacklozenge$</span>
