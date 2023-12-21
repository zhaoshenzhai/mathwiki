<div class="topSpace"></div>

Date Created: 04/05/2023 16:20:12
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

Let $S\subseteq G$ be a subset of a group $G$. The <b>normalizer of $S$ in $G$</b> is the subgroup $N_G\!\l(S\r)\coloneqq\l\{g\in G\st gS=Sg\r\}$ of $G$.

```

<b>Remark.</b> For any subset $S\subseteq G$, we have $C_G\!\l(S\r)\substructeq N_G\!\l(S\r)$ since commuting pointwise in $S$ is a stronger condition than commuting with $S$ as a set. Note that if $S=\l\{s\r\}$, then $C_G\!\l(S\r)=N_G\!\l(S\r)$. If $G$ is abelian, then $C_G\!\l(S\r)=N_G\!\l(S\r)=G$ for all $S\subseteq G$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We clearly have $H\nsubgrpeq N_G\!\l(H\r)$. If $H\nsubgrpeq K\substructeq G$, then $K\substructeq N_G\!\l(H\r)$, which shows that $N_G\!\l(H\r)$ is the largest subgroup of $G$ in which $H$ is normal in.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Note that $N_G\!\l(H\r)$ is _not necessarily_ a normal subgroup of $G$. A counterexample is with $H\coloneqq\l\{e,\l(1\ 2\r)\r\}\substructeq S_3\eqqcolon G$, where
$$\begin{equation}
    \l(1\ 2\ 3\r)H=\l\{\l(1\ 3\r),\l(1\ 2\ 3\r)\r\}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ H\l(1\ 2\ 3\r)=\l\{\l(2\ 3\r),\l(1\ 2\ 3\r)\r\}.\exqedin
\end{equation}$$
