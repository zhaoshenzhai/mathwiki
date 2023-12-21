<div class="topSpace"></div>

Date Created: 26/10/2022 11:35:20
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Kernel (Group Theory)]]
Constructions: [[Quotient Group]], [[Simple Group]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Coset Representation Theorem]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group. A subgroup $H\substructeq G$ is said to be a <b>normal in $G$</b> if $gH=Hg$ for all $g\in G$, in which case we write $H\nsubgrpeq G$.

```

<b>Remark.</b> If $H\nsubgrpeq G$ is normal, then it is the kernel of the projection $\pi:G\to G/H$. Indeed, for all $h\in H$, we have $hH=H$, which occurs iff $h\in\ker\pi$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every subgroup $H\substructeq G$ of index $2$ is normal. Indeed, $H$ is the kernel of the left-multiplication action $\phi:G\to\Aut\l(G/H\r)$, which can be proved by noting that $G/H=\l\{H,xH\r\}$ for some $x\not\in H$ and checking cases.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every subgroup of an abelian group is normal.<span style="float:right;">$\blacklozenge$</span>
