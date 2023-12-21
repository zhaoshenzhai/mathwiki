<div class="topSpace"></div>

Date Created: 28/06/2023 11:32:59
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Isomorphism Theorems]]

``` ad-Definition
title: Definition.

Let $G$ be a group. An automorphism $\phi\in\Aut\l(G\r)$ is said to be <b>inner</b> if there is some $g\in G$ such that $\phi\l(x\r)=gxg^{-1}$ for all $x\in G$. The subgroup of all inner automorphisms $\Inn\l(G\r)\substructeq\Aut\l(G\r)$ is called the <b>inner automorphism group</b>.

```

<b>Remark.</b> An inner automorphism $\phi_g\l(x\r)=gxg^{-1}$ is said to be <b>induced by $g$</b>. The identity is induced by every $g\in G$, the inverse of an inner automorphism induced by $g$ is induced by $g^{-1}$, and the composition of two inner automorphisms induced by $g$ and $h$ is induced by $gh$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Consider the conjugation action $\phi$ of $G$ on itself; that is, let $\phi_g\!\l(x\r)\coloneqq gxg^{-1}$ for all $g,x\in G$. Then $\ker\phi=Z\l(G\r)$, so $G/Z\l(G\r)$ can be identified with a subgroup of $\Aut\l(G\r)$. Elements of $G/Z\l(G\r)$ under this identification are of the form $\phi_g$ for some $g\in G$, so $\Inn\l(G\r)\iso G/Z\l(G\r)$.<span style="float:right;">$\blacklozenge$</span>
