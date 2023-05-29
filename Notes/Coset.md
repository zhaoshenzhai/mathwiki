<div class="topSpace"></div>

Date Created: 13/10/2022 13:39:46
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Index]], [[Quotient Group]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of cosets]], [[Number of left-cosets equals number of right-cosets]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of groups]]

``` ad-Definition
title: Definition.

Let $H\subseteq G$ be a subgroup of a group $G$. Fix $g\in G$. The **left-coset** (resp. **right-coset**) **of $H$ in $G$ represented by $g$** is the set
$$\begin{equation}
    gH\coloneqq\l\{x\in G\mid\ex h\in H:x=gh\r\}\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \textrm{\it{(resp.} }Hg\coloneqq\l\{x\in G\mid\ex h\in H:x=hg\r\}\textrm{).}
\end{equation}$$

```

<b>Remark.</b> For any $g\in G$, we have the isomorphism $\phi:H\to gH$ via $h\mapsto gh$. Thus all cosets (left or right) have the same cardinality. Also, we note that the collection of all left-cosets (or right-cosets) of $G$ partitions $G$. Indeed, if $g_1H\cap g_2H\neq\em$, then $g_1h_1=g_2h_2$ for some $h_1,h_2\in H$. Then $g_1=g_2h_2h_1^{-1}$, but since $h_2h_1^{-1}\in H$, we see that $g_1H=g_2\l(h_2h_1^{-1}\r)H=g_2H$. The fact that each coset is non-empty and that they cover $G$ is trivial.<span style="float:right;">$\blacklozenge$</span>
