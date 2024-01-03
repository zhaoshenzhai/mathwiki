<div class="topSpace"></div>

Date Created: 15/12/2023 00:39:28
References:
Tags: #Type/Definition #Topic/Logic/Model_Theory

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

Let $\mc{A}\coloneqq(A,\sigma^\mc{A})$ be a $\sigma$-structure and fix $P\subseteq A$. A $k$-ary relation $R\subseteq A^k$ is said to be <b>$P$-definable</b> in $\mc{A}$ if there is an extended $\sigma$-formula $\phi(\vec{x},\vec{y})$ with $|\vec{y}|=k$ and some $\vec{p}\in P^{|\vec{x}|}$ such that $R=\l\{\vec{a}\in A^k\st\mc{A}\models\phi(\vec{p},\vec{a})\r\}$.
* We call $\em$-definable sets <i>$0$-definable</i> and $A$-definable sets <i>definable</i>. We say that an element $\vec{a}\in A^k$ is $P$-definable iff $\{\vec{a}\}$ is $P$-definable, and, for $D\subseteq A$, a function $f:D^k\to A$ is $P$-definable iff its graph $\Graph\l(f\r)\coloneqq\l\{(\vec{a},b)\in D^k\times A:f(\vec{a})=b\r\}$ is $P$-definable.

```

<b>Remark.</b> A necessary condition for $D\subseteq A^k$ to be $P$-definable is for all $\sigma$-automorphisms of $\mc{A}$ that fixes $P$ pointwise to fix $D$ setwise. Indeed, if $P$-definability of $D$ is witness by an extended $\sigma$-formula $\phi(\vec{x},\vec{y})$ and some $\vec{p}\in P^{|\vec{x}|}$, then $h\l(D\r)=D$, since for any $\vec{a}\in A^k$, we have
$$\begin{equation}
    \vec{a}\in D\ \ \ \ \Leftrightarrow\ \ \ \ \mc{A}\models\phi(\vec{p},\vec{a})\ \ \ \ \Leftrightarrow\ \ \ \ \mc{A}\models\phi(h(\vec{p}),h(\vec{a}))\ \ \ \ \Leftrightarrow\ \ \ \ \mc{A}\models\phi(\vec{p},h(\vec{a}))\ \ \ \ \Leftrightarrow\ \ \ \ h(\vec{a})\in D.\exqedin
\end{equation}$$
