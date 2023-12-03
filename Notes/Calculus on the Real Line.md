---
mathLink: Calculus in $\R$
mathLink-blocks:
    absolutely-continuous-function: Absolutely Continuous Function
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:47:20
Tags: #Type/Example #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Lebesgue Differentiation Theorem]], [[Fundamental Theorem of Calculus]], [[Hardy-Littlewood Maximal Theorem]], [[Mean Value Theorems]]
Sufficiencies: [[Vitali Covering Lemma]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Absolute Continuity#^characterization-of-absolute-continuity]]

``` ad-Example
title: Example (Calculus in $\R$).

Consider $\R$ equipped with the Lebesgue measure $\lambda$ and let $f:\R\to\R$ be a function.
* $f$ is <b>differentiable</b> at $x\in\R$ if the limit $\lim_{h\to0}\l[f\l(x+h\r)-f\l(x\r)\r]/h$ exists, in which case we denote it by $f'\l(x\r)$.
* $f$ is <b>absolutely-continuous</b> if for every $\epsilon>0$, there is some $\delta>0$ such that $\sum_n\l|f\l(b_n\r)-f\l(a_n\r)\r|<\epsilon$ whenever $\sum_n\l(b_n-a_n\r)<\delta$ for any $U\coloneqq\bigsqcup_n\l(a_n,b_n\r)$.
* $f$ is of <b>bounded variation</b> if $T_f\!\l(\infty\r)<\infty$, where $T_f\!\l(x\r)\coloneqq\sup\l\{\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\st n\in\N,x_0<x_1<\cdots<x_n=x\r\}$ is the <b>total variation</b> of $f$ at $x$.

The Fundamental Theorem of Calculus states that a function $f:\R\to\R$ is absolutely-continuous iff $f'\in L^1\!\l(\lambda\r)$ a.e. and $f\l(b\r)-f\l(a\r)=\int f'\d\lambda$ for all $a<b$.


```
^absolutely-continuous-function

<b>Remark.</b> Any function $f:\R\to\R$ of bounded variation is continuous on a cocountable set, and $f'$ exists $\lambda$-a.e.
