<div class="topSpace"></div>

Date Created: 10/05/2023 14:03:31
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Construction of free groups (words)]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>free group on $X$</b> is a group $F\l(X\r)$ equipped with a function $j:X\to F\l(X\r)$ such that for any group $G$ and function $f:X\to G$, there exists a unique group homomorphism $\phi:F\l(X\r)\to G$ such that $f=\phi\circ j$. That is, the diagram below commutes:
![[Images/2023-05-10_141434/image.svg|125]]

A group $G$ is said to be <b>free</b> if there is some set $A$ such that $G=F\l(A\r)$, in which case $A$ is a <b>free basis for $G$</b> and $\l|A\r|$ is called the <b>rank of $G$</b>.

```
