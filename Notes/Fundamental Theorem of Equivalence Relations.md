<div class="topSpace"></div>

Date Created: 29/01/2022 16:31:03
Tags: #Type/Theorem #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: [[Relation induced by a partition is an equivalence relation]], [[Quotient set is a partition]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Fundamental Theorem of Equivalence Relations).

Let $X$ be a set.
1. Let $\Pi$ be a partition on $X$. Then the binary relation $R_\Pi$ induced by $\Pi$ is an equivalence relation on $X$.
2. Let $R$ be an equivalence relation on $X$. Then the quotient set $X/R$ is a partition of $X$.

Furthermore, we have $X/R_\Pi=\Pi$ and $R_{X/R}=R$.

```

<b>Remark.</b> The relationship between partitions, their induced relations, equivalences, and their quotient sets, can be visualized with the following schematic diagram.

![[Images/2022-02-09_222004/image.svg|650]]

The statements $X/R_\Pi=\Pi$ and $R_{X/R}=R$ are then viewed as ‘compatibility statements’, guaranteeing that the
* quotient set of the relation induced by $\Pi$ is $\Pi$ itself, and that the
* relation induced by the quotient set of a relation $R$ is $R$ itself.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Statements $\#1$ and $\#2$ are proven; it suffices to show that $X/R_\Pi=\Pi$ and $R_{X/R}=R$.

Proof that $X/R_\Pi=\Pi$:
* ($\subseteq$): Take $x\in X$, so $\l[x\r]_{R_\Pi}\in X/R_\Pi$. Let $y\in\l[x\r]_{R_\Pi}$, so $yR_\Pi x$; that is, there exists $P\in\Pi$ such that $x,y\in P$; we shall prove that $\l[x\r]_{R_\Pi}=P\in\Pi$. To this end, take $z\in\l[x\r]_{R_\Pi}$. Observe that $zR_\Pi x$ and thus $zR_\Pi y$ too. It follows that there exists $P'\in\Pi$ such that $y\in P'\land z\in P'$, but, since $P\cap P'=\em$ if $P\neq P'$, this forces $P=P'$ and thus $z\in P$. Conversely, note that $P\in\Pi\subseteq\pow\l(X\r)$ and so $P\subseteq X$. Therefore, for all $p\in P$, we have $p\in X$ and thus, by definition of $R_\Pi$, we have $pR_\Pi x$. It follows that $p\in\l[x\r]_{R_\Pi}$.

* ($\supseteq$): Take $P\in\Pi$. Since $P\neq\em$, take $p\in P$. Recall that $P\subseteq X$, so $p\in X$ and thus $p\in\l[p\r]_{R_\Pi}$. It follows that $P\subseteq\l[p\r]_{R_\Pi}$. By the argument above, we have $\l[p\r]_{R_\Pi}\subseteq P$ and thus $P=\l[p\r]_{R_\Pi}\in X/R_\Pi$.

Proof that $R_{X/R}=R$:
* ($\subseteq$): Take $x,y\in X$ such that $\tpl{x,y}\in R_{X/R}$, which, by definition, implies that there exists $P\in X/R$ such that $x,y\in P$. However, the set $P$ is also an equivalence class of the form $\l[t\r]_R$ for some $t\in X$ such that $xRt$ and $yRt$. It follows that $xRy$ and hence $R_{X/R}\subseteq R$.

* ($\supseteq$): Take $x,y\in X$ such that $xRy$ from which it follows that $\l[x\r]_R=\l[y\r]_R$. Since $\l[x\r]_R,\l[y\r]_R\in X/R$ and $X/R$ is a partition on $X$, set $P\coloneqq\l[x\r]_R=\l[y\r]_R\in X/R$ and observe that $x,y\in P$. It follows, by definition of $R_{X/R}$, that $\tpl{x,y}\in R_{X/R}$.<span style="float:right;">$\blacksquare$</span>
