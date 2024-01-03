---
mathLink-blocks:
    path-connected-implies-connected: Path-connected $\Rightarrow$ connected
    locally-path-connected-connected-implies-path-connected: Connected and locally path-connected $\Rightarrow$ path-connected
---

<div class="topSpace"></div>

Date Created: 17/05/2023 23:41:42
References: #Ref/Lee10 #Ref/Hat02 #Ref/Rot88
Tags: #Type/Definition #Topic/Topology

Types: [[Simply-connected Space]]
Examples: [[Covering Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Connected Space#^intermediate-value-theorem]]

``` ad-Definition
title: Definition.

A topological space $X$ is said to be <b>path-connected</b> if for all $x_0,x_1\in X$, there exists a path $\gamma:x_0\pathto x_1$.
* We say that $X$ is <b>locally path-connected</b> if for all $x\in X$ and all neighborhoods $U$ of $x$, there exists a path-connected neighborhood $V\subseteq U$ of $x$.

```

<b>Remark.</b> If $X$ is path-connected, then it is connected since if $X=A\sqcup B$ is a non-trivial open partition and $a\in A$ and $b\in B$, then there is a path $\gamma:a\pathto b$. Observe that $\gamma\l(I\r)=\l(A\cap\gamma\l(I\r)\r)\sqcup\l(B\cap\gamma\l(I\r)\r)$ is a non-trivial open partition, so $\gamma\l(I\r)$ is disconnected, a contradiction. ^path-connected-implies-connected
* Note that local-connectedness and connectedness together imply path-connectedness. Indeed, consider the equivalence relation $x\sim y$ iff there is a path from $x$ to $y$. Each equivalence class is open since every $x\in X$ admits a path-connected neighborhood in $\l[x\r]$, so by connectedness of $X$ there is only one equivalence class.<span style="float:right;">$\blacklozenge$</span> ^locally-path-connected-connected-implies-path-connected
