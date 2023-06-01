<div class="topSpace"></div>

Date Created: 04/05/2023 23:45:34
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Cayley's Theorem]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of cosets]]

``` ad-Definition
title: Definition.

Let $G$ be a group acting on a set $X$ via $\phi:G\to\Aut\l(X\r)$. The action $\phi$ is said to be <b>faithful</b> if $\ker\phi=\l\{e\r\}$.

```

<b>Remark.</b> If $\phi$ is not faithful, then there exist distinct $g,h\in G$ inducing the same permutation on $X$. Indeed, two elements $g,h\in G$ induce the same action on $X$ iff $g\ker\phi=h\ker\phi$, which follow from the equivalences that $gx=hx$ for all $x\in X$ iff $h^{-1}g\in\ker\phi$ iff $h\ker\phi=h\ker\phi$. Quotienting, we see that every action $\phi$ can be viewed as a faithful action of $G/\ker\phi$ on $A$.<span style="float:right;">$\blacklozenge$</span>
