---
mathLink-blocks:
    compact-implies-limit-point-compact: Compact $\Rightarrow$ limit-point compact
    compact-hausdorff-implies-closed: Compact $\Rightarrow$ closed (Hausdorff)
    compact-implies-bounded: Compact $\Rightarrow$ bounded
    sequential-compactness: Sequentially Compact Space
---

<div class="topSpace"></div>

Date Created: 28/12/2022 18:12:46
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Extreme Value Theorem]], [[Cantor's Intersection Theorem]], [[Compact implies complete]], [[Epsilon-neighborhood Theorem]], [[Heine-Cantor Theorem]], [[Sequentially compact implies countably compact]], [[Sequentially compact implies separable]], [[Sequentially compact implies bounded]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Finite Intersection Theorem]], [[Characterizations of compactness (metric space)]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A topological space $X$ is said to be <b>compact</b> if every open cover has a finite subcover.
* If every infinite subset $S\subseteq X$ has a limit point, then $X$ is <b>limit-point compact</b>.
* If every sequence $\tpl{x_n}$ has a convergent subsequence, then $X$ is <b>sequentially compact</b>.

```
^sequential-compactness

<b>Remark.</b> If every <i>countable</i> open cover has a finite subcover, then $X$ is said to be <i>countably compact</i>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We list some basic properties of compact spaces here. Let $X$ be a compact space.
* (Compact $\Rightarrow$ limit-point compact): Let $S\subseteq X$ be infinite and suppose that $S$ has no cluster points in $X$, so $x\not\in\bar{S\comp\l\{x\r\}}$ for all $x\in X$. Thus, for each $x\in X$, there exists a neighborhood $U_x$ such that $U_x\cap\l(S\comp\l\{x\r\}\r)=\em$. Thus $U_x$ contains at most one point in $S$ (namely $x$, if $x\in S$), and observe that $\l\{U_x\r\}_{x\in X}$ is an open cover of $X$. But no finite subcollection thereof can cover $X$, lest it covers $S$, which is impossible.
^compact-implies-limit-point-compact
* (Compact Hausdorff $\Rightarrow$ closed): Suppose that $X$ is Hausdorff and let $Y\subset X$ be compact. Let $p\in X\comp Y$. For all $q\in Y$, let $U_q$ and $V_q$ be <i>disjoint</i> neighborhoods of $p$ and $q$, respectively. Observe then that $Y\subseteq\bigcup_{q\in Y}V_q$, and since $Y$ is compact, there exist finitely-many points $q_i$ such that $Y\subseteq\bigcup_{i=1}^nV_{q_i}$. But the intersection $U\coloneqq\bigcap_{i=1}^nU_{q_i}$ is disjoint from each $V_{q_i}$, and is hence disjoint from $Y$. Thus $U\subseteq X\comp Y$ is a neighborhood of $p$, so $X\comp Y$ is open.
^compact-hausdorff-implies-closed
* (Compact $\Rightarrow$ bounded): Suppose that $X$ is a metric space. Fix any $p\in X$ and write $X=\bigcup_{n\in\N}B\l(p,n\r)$. Then $X=\bigcup_{i=1}^{k}B\l(p,n_i\r)$ for some finite subcollection $\l\{B\l(p,n_i\r)\r\}$, so setting $m\coloneqq\l(\max_in_i\r)/2$ shows that $d\l(x,y\r)\leq d\l(x,p\r)+d\l(y,p\r)<m/2+m/2=m$ for all $x,y\in X$.<span style="float:right;">$\blacklozenge$</span>
^compact-implies-bounded
