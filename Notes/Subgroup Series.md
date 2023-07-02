<div class="topSpace"></div>

Date Created: 01/07/2023 20:39:19
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Solvable Group]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of group homomorphisms]], [[Subgroups of cyclic groups]]

``` ad-Definition
title: Definition.

Let $G$ be a group. A <b>subgroup series of $G$</b> is a chain $1=G_0\subgrp G_1\subgrp\cdots\subgrp G_n=G$ of subgroups $G_i$ of $G$.
* A series is said to be <b>normal</b> if $G_i\nsubgrp G_{i+1}$ for all $0\leq i<n$.
* A normal series is said to be <b>abelian</b> (resp. <b>cyclic</b>) if each quotient $G_{i+1}/G_i$ is abelian (resp. cyclic).

A <b>composition series of $G$</b> is a normal series $1=G_0\nsubgrp G_1\nsubgrp\cdots\nsubgrp G_n=G$ such that each quotient $G_{i+1}/G_i$ is simple.

```

<b>Remark.</b> If $\phi:G\to G'$ is a homomorphism, then every normal series $G_i'$ of $G'$ pulls back to a normal series $G_i\coloneqq\phi^{-1}\!\l(G_i'\r)$ of $G$. The same occurs if $G_i'$ is an abelian or cyclic series. Indeed $\phi:G_i\to G_i'$ descends into the quotient $G_i/G_{i+1}\to G_i'/G_{i+1}'$ as $gG_{i+1}\mapsto\phi\l(g\r)G_{i+1}'$, which is injective since if $\phi\l(g_1\r)G_{i+1}'=\phi\l(g_2\r)G_{i+1}'$, then $\phi\l(g_2^{-1}g_2\r)\in G_{i+1}'$ and hence $g_2^{-1}g_1\in\phi^{-1}\!\l(G_{i+1}'\r)=G_{i+1}$. Since subgroups of abelian (resp. cyclic) groups are abelian (resp. cyclic), the result follows.<span style="float:right;">$\blacklozenge$</span>
