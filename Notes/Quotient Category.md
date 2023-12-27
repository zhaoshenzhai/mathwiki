<div class="topSpace"></div>

Date Created: 25/12/2023 16:38:46
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Group#^quotient-group]], [[Homotopy]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>congruence relation</b> on a category $C$ is a family $\sim\,\coloneqq\l\{\sim_{x,y}\r\}_{x,y\in C}$ of equivalence relations on $C\l(x,y\r)$ such that if $f\sim_{x,y} f'$ and $g\sim_{y,z} g'$, then $fg\sim_{x,z}f'g'$.
* The <b>quotient category</b> of $C$ with a congruence relation $\sim$ is the category $C/\!\sim$ whose objects are $\Obj\l(C\r)$, morphisms are congruence classes of $C\l(x,y\r)$, and whose composition is defined in terms of representatives by $\l[f\r]\circ\l[g\r]\coloneqq\l[fg\r]$. One writes $\l[x,y\r]$ for the morphisms from $x$ to $y$ in $C/\!\sim$.

```

<b>Remark.</b> Every quotient category $C/\!\sim$ of $C$ induces the <i>natural projection</i> functor $\pi:C\to C/\!\sim$ that acts as the identity on $\Obj\l(C\r)$ and sends $f\mapsto\l[f\r]$.
* The map $\pi:C\to C/\!\sim$ is universal amongst functors that map equivalent morphisms to the same image. That is, if $F:C\to D$ is a functor such that $Ff=Fg$ whenever $f\sim g$, then it descends into a unique functor $\widetilde{F}:C/\!\sim\,\to D$ such that $\widetilde{F}\l[f\r]=Ff$ for every morphism $f$. Thus quotient categories are simply quotient objects in the category $\catcat$.<span style="float:right;">$\blacklozenge$</span>
