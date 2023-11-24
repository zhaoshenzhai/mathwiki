<div class="topSpace"></div>

Date Created: 23/11/2023 21:16:06
Tags: #Type/Example #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Galois Correspondence of Covering Spaces]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Homotopy Lifting Theorem]], [[Orbit-Stabilizer Theorem]]

``` ad-Example
title: Example (Monodromy).

Let $p:\tpl{E,e_0}\to\tpl{X,x_0}$ be a covering map of a pointed space $\tpl{X,x_0}$. The <b>monodromy action</b> is the action $\pi_1\!\l(X,x_0\r)\act p^{-1}\l(x_0\r)$ given by $\gamma\cdot e\coloneqq\widetilde{\gamma}\l(0\r)$, where $\widetilde{\gamma}$ is the unique lift of $\gamma$ ending at $e$.
* This is a transitive action and the stabilizer of $e_0$ is $p_\ast\pi_1(E,e_0)$.
* The number of sheets of $p$ is the index of $p_\ast\pi_1(E,e_0)$ in $\pi_1\l(X,x_0\r)$.

```

<i>Proof.</i> We first show that this defines an action. Indeed, if $\gamma,\delta$ are loops at $x_0$, then $\l(\gamma\ast\delta\r)\cdot e=\widetilde{\gamma\ast\delta}\l(0\r)$ where the lift ends at $e$. But $\widetilde{\gamma\ast\delta}\l(0\r)=\big(\widetilde{\gamma}\ast\widetilde{\delta}\big)\l(0\r)$ is the starting point of the lift of $\gamma$ ending at $\widetilde{\delta}\l(0\r)$, where $\widetilde{\delta}$ is the lift of $\delta$ ending at $e$. Thus $\gamma\cdot\big(\widetilde{\delta}\l(0\r)\big)=\gamma\cdot\l(\delta\cdot e\r)$, which shows that $p^{-1}\!\l(x_0\r)$ is indeed a $\pi_1\l(X,x_0\r)$-set.
* A loop $\gamma\in\pi_1\!\l(X,x_0\r)$ stabilizes $e_0$ iff $\gamma\cdot e_0=\widetilde{\gamma}\l(0\r)=e_0$ where $\widetilde{\gamma}$ ends at $e_0$, which occurs iff $\widetilde{\gamma}$ is a loop at $e_0$.
* Let $e\in p^{-1}\!\l(x_0\r)$ and pick a path $\widetilde{\sigma}:e_0\pathto e$. Its projection is a loop at $x_0$ and whose lift ending at $e$ is $\widetilde{\sigma}$, so $\l(p\circ\widetilde{\sigma}\r)\cdot e=\widetilde{\sigma}\l(0\r)=e_0$ as desired.
* By the Orbit-Stabilizer Theorem, the cardinality of the orbit of $e_0$, which is $p^{-1}\!\l(x_0\r)$ by transitivity of the action, is the index of $p_\ast\pi_1(E,e_0)$ in $\pi_1\l(X,x_0\r)$.<span style="float:right;">$\blacksquare$</span>
