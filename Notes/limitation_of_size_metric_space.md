---
title: Limitations of size for Metrizable Spaces
date: 2025-06-20
tags: [In_Progress]
---

# Statement and Proofs

\begin{theorem}\label{thm}

Fix an infinite cardinal $\kappa$. The following are equivalent for a metrizable space $X$.
1. ($\kappa$-\ref[second-countable]{second_countable_space}). $X$ admits a basis of cardinality $\leq\kappa$.
2. ($\kappa$-\ref[Lindelöf]{lindelof_space}). Every open cover of $X$ admits a subcover of cardinality $\leq\kappa$.
4. ($\kappa$-\ref[chain-condition]{chain_conditions}). Every family of pairwise disjoint non-empty open subsets of $X$ has cardinality $\leq\kappa$.
3. ($\kappa$-\ref[separable]{separable_space}). $X$ admits a dense subset of cardinality $\leq\kappa$.

\end{theorem}

\begin{remark}

In particular, setting $\kappa\coloneqq\aleph_0$, we see that separability, second-countability, the Lindelöf property, and the CCC ($\coloneqq\aleph_0$-chain-condition) are all equivalent for a metrizable space $X$.

\end{remark}

\begin{remark}

Note that (1) $\Rightarrow$ (2) for any topological space, (2) $\Rightarrow$ (3) for any perfectly-normal space, and only (3) $\Rightarrow$ (4) $\Rightarrow$ (1) requires the full assumption of metrizability.

\end{remark}

&emsp;&emsp;To compute cardinalities, we will need the following fact.

\begin{fact}[\ref{}]\label{cardinal}

For any sequence $(\kappa\_n)\_{n<\omega}$ of infinite cardinals, we have $\sum\_{n<\omega}\kappa\_\alpha=\sup\_{n<\omega}\kappa\_\alpha$.

\end{fact}

## Proof that (1) $\Rightarrow$ (2)

Fix a basis $\mc{B}$ for $\mc{T}$ with $\l|\mc{B}\r|\leq\kappa$ and let $\mc{U}$ be an open cover of $X$. Consider the subcollection $\mc{B}'\coloneqq\l\\{B\in\mc{B}\st\ex U\in\mc{U}(B\subeq U)\r\\}$, and using $\mathsf{Choice}$, pick for each $B\in\mc{B}$ some $U_B\in\mc{B}$ containing $B$. We claim that $\mc{U}'\coloneqq\l\\{U_B\in\mc{U}\st B\in\mc{B}'\r\\}$ is a subcover of $X$, since $\l|\mc{U}'\r|\leq\kappa$ is clear. Indeed, for any $x\in X$, there is some $U\in\mc{U}$ and $B\in\mc{B}$ such that $x\in B\subeq U$. Then $B\in\mc{B}'$ and $U_B\in\mc{U}'$, so $x\in B\subeq U_B$ as desired.<span style="float:right;">$\blacksquare$</span>

<div class="space"></div>

## Proof that (2) $\Rightarrow$ (3)

To see where metrizability is used, recall the following fact.

\begin{fact}[\ref{}]\label{F_sigma}

Every open subset of a metric space, or more generally of a perfectly-normal space, is $F_\sigma$.

\end{fact}

<div class="space"></div>

\begin{proof}[2 $\Rightarrow$ 3]

It suffices to show that every discrete subspace $A\subeq X$ has cardinality $\leq\kappa$. Indeed, if $A$ is closed, pick neighborhoods $U_x\ni x$ for each $x\in X$ with $\l\\{x\r\\}=U_x\cap A$ and consider the open cover $\mc{U}\coloneqq\l\\{U_x\r\\}_{x\in A}\cup\l\\{X\comp A\r\\}$ of $X$. This open cover admits no proper subcover, so $\l|A\r|\leq\kappa$ as desired.

<br>

&emsp;&emsp;In general, note that $A$ is open in $\bar{A}$ since if $x\in A$, then $\l\\{x\r\\}=U_x\cap\bar{A}$, and hence $\l\\{x\r\\}\subeq A$ is open in $\bar{A}$. Since $\bar{A}$ is metrizable, we see that $A$ is $F_\sigma$ in $\bar{A}$ by Fact \iref{F_sigma}, and hence $A=\bigcup_{n<\omega}A_n$ for some closed $A_n\subeq\bar{A}$. By what we have already proved, each $|A_n|\leq\kappa$, and so $|A|\leq\sum_{n<\omega}|A_n|\leq\sum_{n<\omega}\kappa=\kappa$ by Fact \iref{cardinal}.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Proof that (3) $\Rightarrow$ (4)

Fix a metric $d$ for $X$. For each $n\in\N$, let $\mc{D}_n$ be the family of all sets $D_n$ such that if $x,y\in D_n$ are distinct, then $d\l(x,y\r)\geq1/n$. Every chain $\mc{C}\subeq\mc{D}_n$ admits $\bigcup\mc{C}$ as an upper bound, so by Zorn’s lemma, there is a maximal element $Q_n\in\mc{D}_n$. Note that the $1/2n$-balls around points of $Q_n$ are all pairwise disjoint, so we have by hypothesis that $\l|Q_n\r|\leq\kappa$. Set $Q\coloneqq\bigcup\_{n<\omega}Q\_n$, so $\l|Q\r|\leq\kappa$ by Fact \iref{cardinal}, which we claim is dense in $X$.

<br>

&emsp;&emsp;Indeed, if $x\not\in\bar{Q}$, then $d\l(x,Q\r)>0$ and so there is some $n\in\N$ such that $d\l(x,Q\r)>1/n$. In particular, we have $d\l(x,Q_n\r)>1/n$, so $d\l(x,y\r)>1/n$ for all $y\in Q_n$. But then $Q_n\cup\l\\{x\r\\}\in\mc{D}_n$, contradicting the maximality of $Q_n$.<span style="float:right;">$\blacksquare$</span>

## Proof that (4) $\Rightarrow$ (1)

Fix a metric $d$ for $X$ and let $Q$ be a dense set in $X$ such that $\l|Q\r|\leq\kappa$. We claim that $\mc{B}\coloneqq\l\\{B_r(x)\st x\in Q,r\in\Q\r\\}$ is a basis for $X$, so we are done as $\l|\mc{B}\r|\leq\kappa$ by Fact \iref{cardinal}.

<br>

&emsp;&emsp;Indeed, let $x\in U\subseteq X$ be open and pick $\epsilon>0$ so that $B_\epsilon(x)\subseteq U$. Since $Q$ is dense in $X$, pick $y\in Q\cap B_{\epsilon/3}(x)$. Choose $q\in\Q$ such that $\epsilon/3<q<\epsilon/2$, so $x\in B_q(y)\subeq B_\epsilon(x)$ and thus $x\in B_q(y)\subseteq U$ with $B_q(y)\in\mc{B}$.<span style="float:right;">$\blacksquare$</span>
