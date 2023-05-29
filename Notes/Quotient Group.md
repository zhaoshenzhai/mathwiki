<div class="topSpace"></div>

Date Created: 27/10/2022 18:45:49
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Quotient Ring]]
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Quotient Groups]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $N\nsubgrpeq G$ be a normal subgroup of a group $G$. Then the **quotient group of $G$ under $N$** is the group $\tpl{G/N,\ast}$ where
* $G/N\coloneqq G/\!\sim$ is the quotient set under the equivalence relation $\sim$ on $G$ defined by $g_1\sim g_2$ iff $g_1N=g_2N$ for all $g_1,g_2\in G$, and
* $\ast$ is the binary relation defined by $g_1N\ast g_2N\coloneqq\l(g_1g_2\r)N$ for all $g_1,g_2\in G$.

```

<b>Remark.</b> In other words, $G/N$ is the set of all cosets of $N$ equipped with the operation $g_1N\ast g_2N\coloneqq\l(g_1g_2\r)N$. Indeed, all the group axioms are inherited from that of $G$, so we only need to check that $\ast$ is well-defined. Take $g_1\sim g_1'$ and $g_2\sim g_2'$, so $g_1'=g_1n_1$ and $g_2'=g_2n_2$ and thus $g_1'g_2'=g_1n_1g_2n_2=g_1g_2n_3$ for some $n_3\in N$. Clearly then $\l(g_1'g_2'\r)N=\l(g_1g_2\r)N$, so we are done.

Also, note that the definition makes the projection $\pi:X\to X/N$ a group homomorphism.<span style="float:right;">$\blacksquare$</span>
