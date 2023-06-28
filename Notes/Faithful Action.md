<div class="topSpace"></div>

Date Created: 04/05/2023 23:45:34
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group acting on a set $X$ via $\phi:G\to\Aut\l(X\r)$. The action $\phi$ is said to be <b>faithful</b> if $\ker\phi=\l\{e\r\}$.

```

<b>Remark.</b> Every group admits the <b>left-multiplication action</b> $\phi:G\to\Aut\l(G\r)$ by $\phi_g\!\l(h\r)\coloneqq gh$ for all $g,h\in G$, which is faithful since $g\in\ker\phi$ iff $gh=h$ for all $h\in G$, which occurs iff $g=e$. Thus $\ker\phi=\l\{e\r\}$, so $\phi:G\into\Aut\l(G\r)$. This result is called <b>Cayley’s Theorem</b>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $\phi$ is not faithful, then there exist distinct $g,h\in G$ inducing the same permutation on $X$. Indeed, two elements $g,h\in G$ induce the same action on $X$ iff $g\ker\phi=h\ker\phi$, which follow from the equivalences that $gx=hx$ for all $x\in X$ iff $h^{-1}g\in\ker\phi$ iff $g\ker\phi=h\ker\phi$. Quotienting, we see that every action $\phi$ can be viewed as a faithful action of $G/\ker\phi$ on $A$.<span style="float:right;">$\blacklozenge$</span>
