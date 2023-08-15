<div class="topSpace"></div>

Date Created: 13/10/2022 13:39:46
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Index]], [[Quotient Group]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $H\subseteq G$ be a subgroup of a group $G$ and fix $g\in G$. The <b>left-coset</b> of $H$ in $G$ represented by $g$ is the set $gH\coloneqq\l\{x\in G\st\ex h\in H:x=gh\r\}$.

```

<b>Remark.</b> For any $g\in G$, we have the isomorphism $\phi:H\to gH$ via $h\mapsto gh$. Thus all cosets (left or right) have the same cardinality.
* The collection of all left-cosets of $G$ partitions $G$. Indeed, if $g_1H\cap g_2H\neq\em$, then $g_1h_1=g_2h_2$ for some $h_1,h_2\in H$. Then $g_1=g_2h_2h_1^{-1}$, but since $h_2h_1^{-1}\in H$, we see that $g_1H=g_2\l(h_2h_1^{-1}\r)H=g_2H$. The fact that each coset is non-empty and that they cover $G$ is trivial.
* Finally, the function $f:gH\mapsto H^{-1}g$ from the collection of all left-cosets to the right-cosets of $G$ is a bijection, so they have the same cardinality.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A simple computation shows, for all $g_1,g_2\in G$, that
$$\begin{equation}
    g_1H=g_2H\ \ \ \ \Leftrightarrow\ \ \ \ Hg_1^{-1}=Hg_2^{-1}\ \ \ \ \Leftrightarrow\ \ \ \ g_1H\subseteq g_2H\ \ \ \ \Leftrightarrow\ \ \ \ g_2\in g_1H\ \ \ \ \Leftrightarrow\ \ \ \ g_1^{-1}g_2\in H.
\end{equation}$$
Similarly for right-cosets.<span style="float:right;">$\blacklozenge$</span>
