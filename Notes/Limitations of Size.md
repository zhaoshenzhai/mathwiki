---
mathLink: Metrizable $\Rightarrow$ Limitation of Size
---

<div class="topSpace"></div>

Date Created: 28/12/2023 16:17:40
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Distance between subspaces#^closed-G-delta-open-F-sigma]], [[Zorn's Lemma]], [[Real Numbers#^rationals-dense-in-reals]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Limitation of Size).

Let $X$ be a metrizable space. For any infinite cardinal $\kappa$, the following are equivalent.
1. ($\kappa$-second-countable). The space $X$ admits a basis of cardinality $\leq\kappa$.
2. ($\kappa$-Lindelöf). Every open cover of $X$ admits a subcover of cardinality $\leq\kappa$.
4. ($\kappa$-chain-condition). Every family of pairwise disjoint non-empty open subsets of $X$ has cardinality $\leq\kappa$.
3. ($\kappa$-separable). The space $X$ admits a dense subset of cardinality $\leq\kappa$.

```

<b>Remark.</b> In particular, with $\kappa\coloneqq\aleph_0$, we see that separability, second-countability, the Lindelöf property, and the CCC are all equivalent for a metrizable space $X$.
* Note that $1\Rightarrow2$ holds for any topological space, $2\Rightarrow3$ holds for any perfectly normal space, and only $3\Rightarrow4\Rightarrow1$ needs the full assumption of metrizability.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof $(1\Rightarrow2)$.</i> Fix a basis $\mc{B}$ for $\tau$ with $\l|\mc{B}\r|\leq\kappa$ and let $\mc{U}$ be an open cover of $X$. Consider the subcollection $\mc{B}'$ of $\mc{B}$ consisting of all $B\in\mc{B}$ such that $B\subseteq U$ for some $U\in\mc{U}$. For each $B\in\mc{B}$, let $U_B\in\mc{U}$ contain $B$, and we claim that $\mc{U}'\coloneqq\l\{U_B\in\mc{B}\st B\in\mc{B}'\r\}$ is the desired subcover. Indeed, that $\l|\mc{U}'\r|\leq\kappa$ is clear. For any $x\in X$, there is some $U\in\mc{U}$ and $B\in\mc{B}$ such that $x\in B\subseteq U$. Then $B\in\mc{B}'$ and $U_B\in\mc{U}'$, so $x\in B\subseteq U_B$ as desired.<span style="float:right;">$\blacksquare$</span>

---


<i>Proof $(2\Rightarrow3)$.</i> We claim that every discrete subspace $A\subseteq X$ has cardinality $\leq\kappa$, for then if $\mc{U}$ is a family of pairwise disjoint non-empty open subsets of $X$, picking $x_U\in U$ for each $U\in\mc{U}$ arbitrarily gives us a discrete set $\l\{x_U\st U\in\mc{U}\r\}$, so $\l|\mc{U}\r|\leq\kappa$.
* First, assume $A$ is closed. In this case, pick neighborhoods $U_x\ni x$ for each $x\in X$ with $\l\{x\r\}=U_x\cap A$ and consider the open cover $\mc{U}\coloneqq\l\{U_x\st x\in A\r\}\cup\l\{X\comp A\r\}$ of $X$. This open cover admits no proper subcover, so $\l|A\r|\leq\kappa$ as desired.

In general, we note that $A$ is open in $\bar{A}$ since if $x\in A$, then $\l\{x\r\}=U_x\cap\bar{A}$ and hence $\l\{x\r\}\subseteq A$ is open in $\bar{A}$. Since $\bar{A}$ is metrizable, every open subset thereof is $F_\sigma$ and hence $A=\bigcup_iA_i$ for some $A_i$ closed in $\bar{A}$. Each $\l|A_i\r|\leq\kappa$, so $\l|A\r|\leq\kappa$ too.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof $(3\Rightarrow4)$.</i> Fix a metric $d$ for $X$. For each $n\in\N$, let $\mc{D}_n$ be the family of all sets $D_n$ such that if $x,y\in D_n$ are distinct, then $d\l(x,y\r)\geq1/n$. Every $\subseteq$-chain $\mc{C}$ in $\mc{D}_n$ admits $\bigcup\mc{C}$ as an upper bound, so by Zorn’s lemma there is a maximal element $Q_n\in\mc{D}_n$. Note that the $1/2n$-balls around points of $Q_n$ are all pairwise disjoint, so we have by assumption that $\l|Q_n\r|\leq\kappa$. Set $Q\coloneqq\bigcup_nQ_n$, so $\l|Q\r|\leq\kappa$, and we claim that $Q$ is dense in $X$. Indeed, if $x\not\in\bar{Q}$, then $d\l(x,Q\r)>0$ and so there is some $n\in\N$ such that $d\l(x,Q\r)>1/n$. In particular, we have $d\l(x,Q_n\r)>1/n$, so $d\l(x,y\r)>1/n$ for all $y\in Q_n$. But then $Q_n\cup\l\{x\r\}\in\mc{D}_n$, contradicting the maximality of $Q_n$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof $(4\Rightarrow1)$.</i> Fix a metric $d$ for $X$ and let $Q$ be a dense subset with $\l|Q\r|\leq\kappa$. Let $\mc{B}\coloneqq\l\{B\l(x,r\r)\st x\in Q,r\in\Q\r\}$, so $\l|\mc{B}\r|\leq\kappa$, which we claim is a basis for $X$. Indeed, let $U\subseteq X$ be open and $x\in U$. Pick $\epsilon>0$ so that $B\l(x,\epsilon\r)\subseteq U$. Since $Q$ is dense in $X$, there is some $y\in Q\cap B\l(x,\epsilon/3\r)$. Also, there is some $q\in\Q$ with $\epsilon/3<q<\epsilon/2$, so $x\in B\l(y,q\r)$. Note that $B_x\coloneqq B\l(y,q\r)\subseteq B\l(x,\epsilon\r)$ since if $z\in B\l(y,q\r)$, then $d\l(z,x\r)\leq d\l(z,y\r)+d\l(y,x\r)<\epsilon$. Thus $x\in B_x\subseteq U$ with $B_x\in\mc{B}$, as desired.<span style="float:right;">$\blacksquare$</span>
