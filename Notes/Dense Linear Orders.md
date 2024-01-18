---
mathLink: $\DLO$
mathLink-blocks:
    without-endpoints: $\DLO_0$
---

<div class="topSpace"></div>

Date Created: 17/01/2024 19:12:23
References: #Ref/Anu23 #Ref/Mar02
Tags: #Type/Example #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Categorical Theory#^los-vaught-test]]

``` ad-Example
title: Example (Dense Linear Orders).

Consider the signature $\sigma\coloneqq\tpl{<}$ with one binary relation symbol. The theory of <b>dense linear orders without endpoints</b> is the theory $\DLO_0$ axiomatized by
* $\fa x(x\not<x)$ <span style="color:gray">(irreflexivity)</span>, $\fa x\fa y\fa z((x<y\land y<z)\rightarrow x\leq z)$ <span style="color:gray">(transitivity)</span>, and $\fa x\fa y(x=y\lor x<y\lor y<x)$ <span style="color:gray">(linearity)</span>;
* $\fa x\fa z(x<z\rightarrow\ex y(x<y<z))$ <span style="color:gray">(density)</span> and $\fa x\ex y_1\ex y_2(y_1<x<y_2)$ <span style="color:gray">(without-endpoints)</span>.

```
^without-endpoints

<b>Remark.</b> The theory $\DLO_0$ is $\aleph_0$-categorical, hence complete by the Łoś-Vaught Test. Indeed, let $\mc{A},\mc{B}\models\DLO_0$ be two countable models, say enumerated as $\l\{a_n\r\}$ and $\l\{b_n\r\}$. We proceed by constructing a sequence $\l\{f_i\r\}$ of partial bijections $f_i:A_i\parto B_i$, where each $A_i\subset A$ and $B_i\subset B$ are finite, such that $f_i\subseteq f_{i+1}$ for all $i$ and $f_i\!\l(x\r)<f_i\!\l(y\r)$ iff $x<y$ for all $x,y\in A_i$. Constructing $\l\{f_i\r\}$ in such a way that $\bigcup_iA_i=A$ and $\bigcup_iB_i=B$ makes $f\coloneqq\bigcup_if_i:A\to B$ the desired isomorphism. To begin with, we may let $A_0\coloneqq B_0\coloneqq f_0\coloneqq\em$. We then proceed by induction, so suppose that $f_n:A_n\parto B_n$ is defined.
* If $n+1=2m+1$ is odd
