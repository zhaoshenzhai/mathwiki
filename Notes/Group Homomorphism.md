<div class="topSpace"></div>

Date Created: 17/10/2022 11:39:24
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Group Isomorphism]]
Examples: _Not Applicable_
Constructions: [[Kernel (Group Theory)]], [[Ring Homomorphism]], [[Linear Map]]
Generalizations: _Not Applicable_

Properties: [[Isomorphism Theorems (Group)]], [[Basic properties of group homomorphisms]]
Sufficiencies: [[Fundamental Theorem of Group Homomorphisms]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{G,\ast_G}$ and $\tpl{H,\ast_H}$ be groups. A **group homomorphism from $G$ to $H$** is a function $\phi:G\to H$ such that_
$$\begin{equation}
    \fa g_1,g_2\in G:\phi\l(g_1\ast_Gg_2\r)=\phi\l(g_1\r)\ast_H\phi\l(g_2\r).
\end{equation}$$

```

**Remark.** If $S\subseteq G$ generates $G$ and $f:S\to H$ is a function, then any two homomorphisms $\phi_1,\phi_2:G\to H$ that agree on $S$ must agree everywhere. Indeed, the set $A\coloneqq\l\{g\in G\mid\phi_1\l(g\r)=\phi_2\l(g\r)\r\}$ is a subgroup of $G$ that contains $S$, so $G=\gen{S}\subgrpeq A$ and hence $A=G$. Thus $\phi_1=\phi_2$, as desired.<span style="float:right;">$\blacklozenge$</span>
