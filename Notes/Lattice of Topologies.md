<div class="topSpace"></div>

Date Created: 24/01/2022 15:24:46
Tags: #Type/Definition #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i> 
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Lattice of topologies is a complete lattice]]

``` ad-Definition
title: Definition.

Let $X$ be a set. The <b>lattice of topologies on $X$</b> is the complete lattice $\tpl{\Sigma,\subseteq}$ where $\Sigma$ is the set of all topologies on $X$.

```

<b>Remark.</b> Let $\mc{T}_1$ and $\mc{T}_2$ be topologies on $X$. If $\mc{T}_1\subseteq\mc{T}_2$, then $\mc{T}_2$ is <i>finer</i> than $\mc{T}_1$ and $\mc{T}_1$ is <i>coarser</i> than $\mc{T}_2$. They are <i>comparable</i> if either $\mc{T}_1\subseteq\mc{T}_2$ or $\mc{T}_2\subseteq\mc{T}_1$.
* If $\mc{B}_1$ and $\mc{B}_2$ are respective bases for the topologies $\mc{T}_1$ and $\mc{T}_2$, then $\mc{T}_2$ is finer than $\mc{T}_1$ iff for each $x\in X$ and each $B_1\in\mc{B}_1$ containing $x$, there is a basis element $B_2\in\mc{B}_2$ such that $x\in B_2\subseteq B_1$.<span style="float:right;">$\blacklozenge$</span>
