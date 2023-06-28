<div class="topSpace"></div>

Date Created: 05/05/2023 12:55:38
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Coset Representation Theorem]], [[Basic properties of stabilizers and transitive actions]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group acting on a set $X$ via $\phi:G\to\Aut\l(X\r)$. The action $\phi$ is said to be <b>transitive</b> if for all $x,y\in X$, there is some $g\in G$ such that $y=gx$.

```

<b>Remark.</b> In other words, $\phi$ is transitive iff there is only one orbit; that is, $X$ is ‘connected’ via actions.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $H\subgrpeq G$ and consider the <b>left-multiplication action</b> of $G$ on $G/H$ given by $\phi_g\!\l(xH\r)\coloneqq\l(gx\r)H$. Then, for all $xH,yH\in G/H$, we have $yH=\l(yx^{-1}\r)xH$ and so $\phi$ is transitive. In the case $H\coloneqq\l\{e\r\}$, we obtain the regular left-multiplication action of $G$ on itself, which is also faithful.<span style="float:right;">$\blacklozenge$</span>
