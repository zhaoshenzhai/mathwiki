---
mathLink-blocks:
    null-homotopic-iff-extends-to-cone: Null-homotopic $\Leftrightarrow$ $f\rightsquigarrow\widetilde{f}:CX\to Y$
---

<div class="topSpace"></div>

Date Created: 26/12/2023 19:40:18
Tags: #Type/Definition #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Universal Property of Quotients]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. The <b>cone</b> over $X$ is the space $CX\coloneqq\l(X\times I\r)/\!\sim$ where $\sim$ is the equivalence relation defined by $\tpl{x,t}\sim\tpl{x',t'}$ whenever $t=t'=1$.
* The mapping $X\mapsto CX$ defines a functor $C:\cattop\to\cattop$ by mapping a morphism $f:X\to Y$ to $Cf\coloneqq:CX\to CY$ defined by $Cf\l(\l[x,t\r]\r)\coloneqq\l[f(x),t\r]$.

```

<b>Remark.</b> Note that $X\into CX$ via $x\mapsto\l[x,t\r]$ for any $0\leq t<1$ and that $CX$ is contractible via the homotopy $\tpl{\l[x,t\r],s}\mapsto\l[x,\l(1-s\r)t+s\r]$. Thus every space embeds into a contractible space. Moreover, a map $f:X\to Y$ admits an extension $\widetilde{f}:CX\to Y$ iff $f$ is null-homotopic, which occurs iff $f\htopeq c_{f\l(x_0\r)}$ for any $x_0\in X$. ^null-homotopic-iff-extends-to-cone
* Indeed, if $f$ is null-homotopic, then there is a homotopy $F:f\htopeq c$ for some constant map $c:X\to Y$ which descends into the desired map $\widetilde{f}:CX\to Y$. Now, if an extension $g:CX\to Y$ of $f$ exists and $x_0\in X$, define $F:X\times I\to Y$ by $F\l(x,t\r)\coloneqq g\l(\l(1-t\r)x+tx_0\r)$ for all $x\in X$ and $t\in I$, which is as desired.<span style="float:right;">$\blacksquare$</span>
