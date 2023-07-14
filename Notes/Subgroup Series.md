<div class="topSpace"></div>

Date Created: 01/07/2023 20:39:19
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Solvable Group]]
Generalizations: <i>Not Applicable</i>

Properties: [[Schreier Refinement Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of group homomorphisms]], [[Subgroups of cyclic groups]]

``` ad-Definition
title: Definition.

Let $G$ be a group. A <b>subgroup series of $G$</b> is a descending chain $G=G_0\nsupgrp G_1\nsupgrp\cdots$ of subgroups $G_i$ of $G$, and is <b>normal</b> if $G_i\nsupgrp G_{i+1}$ for all $i\in\N$.
* The quotients $\l\{G_{i+1}/G_i\st i\in\N\r\}$, counted with multiplicity, are called the <b>composition factors</b> of this series.
* A normal series is said to be <b>abelian</b> (resp. <b>cyclic</b>) if each composition factor $G_{i+1}/G_i$ is abelian (resp. cyclic).

A <b>composition series of $G$</b> is a normal series $G=G_0\nsupgrp G_1\nsupgrp\cdots\nsupgrp G_n=\l\{e\r\}$ such that each composition factor $G_{i+1}/G_i$ is simple.

```

<b>Remark.</b> If $\phi:G\to G'$ is a homomorphism, then every normal series $G_i'$ of $G'$ pulls back to a normal series $G_i\coloneqq\phi^{-1}\!\l(G_i'\r)$ of $G$. The same occurs if $G_i'$ is an abelian or cyclic series. Indeed $\phi:G_i\to G_i'$ descends into the quotient $G_i/G_{i+1}\to G_i'/G_{i+1}'$ as $gG_{i+1}\mapsto\phi\l(g\r)G_{i+1}'$, which is injective since if $\phi\l(g_1\r)G_{i+1}'=\phi\l(g_2\r)G_{i+1}'$, then $\phi\l(g_2^{-1}g_2\r)\in G_{i+1}'$ and hence $g_2^{-1}g_1\in\phi^{-1}\!\l(G_{i+1}'\r)=G_{i+1}$. Since subgroups of abelian (resp. cyclic) groups are abelian (resp. cyclic), the result follows.<span style="float:right;">$\blacklozenge$</span>
