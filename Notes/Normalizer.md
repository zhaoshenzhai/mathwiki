<div class="topSpace"></div>

Date Created: 04/05/2023 16:20:12
Tags: #Type/Definition #Topic/Group_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Characterizations of normality]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $S\subseteq G$ be a subset of a group $G$. The **normalizer of $S$ in $G$** is the subgroup $N_G\!\l(S\r)\coloneqq\l\{g\in G\mid gS=Sg\r\}$ of $G$.

```

<b>Remark.</b> For any subset $S\subseteq G$, we have $C_G\!\l(S\r)\subgrpeq N_G\!\l(S\r)$ since commuting pointwise in $S$ is a stronger condition than commuting with $S$ as a set. Note that if $S=\l\{s\r\}$, then $C_G\!\l(S\r)=N_G\!\l(S\r)$. If $G$ is abelian, then $C_G\!\l(S\r)=N_G\!\l(S\r)=G$ for all $S\subseteq G$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We clearly have $H\nsubgrpeq N_G\!\l(H\r)$. Note that $N_G\!\l(H\r)$ is _not necessarily_ a normal subgroup of $G$. A counterexample is with $H\coloneqq\l\{e,\l(1\ 2\r)\r\}\subgrpeq S_3\eqqcolon G$, where
$$\begin{equation}
    \l(1\ 2\ 3\r)H=\l\{\l(1\ 3\r),\l(1\ 2\ 3\r)\r\}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ H\l(1\ 2\ 3\r)=\l\{\l(2\ 3\r),\l(1\ 2\ 3\r)\r\}.\exqedin
\end{equation}$$

---


<b>Remark.</b> If $H\nsubgrpeq K\subgrpeq G$, then $K\subgrpeq N_G\!\l(H\r)$, which shows that $N_G\!\l(H\r)$ is the largest subgroup of $G$ in which $H$ is normal in.<span style="float:right;">$\blacklozenge$</span>
