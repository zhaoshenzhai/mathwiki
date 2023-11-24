<div class="topSpace"></div>

Date Created: 21/05/2023 14:41:58
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Homotopy Lifting Theorem]], [[Orbit-Stabilizer Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,x_0}$ be a pointed topological space and consider a covering map $p:(E,e_0)\to\tpl{X,x_0}$ for a fixed $e_0\in p^{-1}\!\l(x_0\r)$. Consider the action of $\pi_1\l(X,x_0\r)$ on $p^{-1}\!\l(x_0\r)$ given by $\l[\gamma\r]\cdot\widetilde{x}\coloneqq\widetilde{\gamma}\l(0\r)$ where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$. Then the following properties hold.
* The induced map $p_\ast:\pi_1(E,e_0)\to\pi_1\l(X,x_0\r)$ is injective.
* The subgroup $p_\ast\pi_1(E,e_0)$ of $\pi_1\l(X,x_0\r)$ consists of loops in $X$ whose lifts to $E$ are loops based at $e_0$. That is, the stabilizer of $e_0$ is $p_\ast\pi_1(E,e_0)$.
* The action of $\pi_1\l(X,x_0\r)$ on $p^{-1}\!\l(x_0\r)$ is transitive.
* The number of sheets of $p$ is the index of $p_\ast\pi_1(E,e_0)$ in $\pi_1\l(X,x_0\r)$.

```

<i>Proof.</i> First, observe by the function $\l[\gamma\r]\cdot\widetilde{x}\coloneqq\widetilde{\gamma}\l(0\r)$, where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$, is well-defined. If $\gamma,\delta$ are loops at $x_0$, then $\l[\gamma\ast\delta\r]\cdot\widetilde{x}=\widetilde{\gamma\ast\delta}\l(0\r)$ where the lifting ends at $\widetilde{x}$. But $\widetilde{\gamma\ast\delta}\l(0\r)=\big(\widetilde{\gamma}\ast\widetilde{\delta}\big)\l(0\r)$ is the starting point of the lift of $\gamma$ ending at $\widetilde{\delta}\l(0\r)$, where $\widetilde{\delta}$ is the lift of $\delta$ ending at $\widetilde{x}$. Thus $\l[\gamma\r]\cdot\big(\widetilde{\delta}\l(0\r)\big)=\l[\gamma\r]\cdot\l(\l[\delta\r]\cdot\widetilde{x}\r)$, which shows that $p^{-1}\!\l(x_0\r)$ is indeed a $\pi_1\l(X,x_0\r)$-set.
* If $p_\ast\!\l[\widetilde{\gamma}\r]$ vanishes, then $p\circ\widetilde{\gamma}$ is homotopic to the constant loop at $x_0$, which lifts to a homotopy from $\widetilde{\gamma}$ to the constant loop at $e_0$. Thus $\l[\widetilde{\gamma}\r]$ vanishes in $\pi_1(E,e_0)$.
* Let $\l[\gamma\r]\in p_\ast\pi_1(E,e_0)$, so $\gamma\htopeq p\circ\widetilde{\delta}$ for some loop $\widetilde{\delta}$ at $e_0$. This path homotopy lifts to a path homotopy $\widetilde{\gamma}\htopeq\widetilde{\delta}$, so $\widetilde{\gamma}$ is a loop in $E$ at $e_0$. The converse is trivial, and $\l[\gamma\r]$ is a stabilizer of $e_0$ iff $\l[\gamma\r]\cdot e_0=\widetilde{\gamma}\l(0\r)=e_0$ where $\widetilde{\gamma}$ ends at $e_0$, which occurs iff $\widetilde{\gamma}$ is a loop at $e_0$.
* Let $\widetilde{x}\in p^{-1}\!\l(x_0\r)$. Since $E$ is path-connected, there is a path $\widetilde{\sigma}$ from $e_0$ to $\widetilde{x}$. Its projection is a loop at $x_0$ and whose lift ending at $\widetilde{x}$ is $\widetilde{\sigma}$. Thus $\l[p\circ\widetilde{\sigma}\r]$ acts on $\widetilde{x}$ as $\l[p\circ\widetilde{\sigma}\r]\cdot\widetilde{x}=\widetilde{\sigma}\l(0\r)=e_0$, as desired.
* By the Orbit-Stabilizer Theorem, the cardinality of the orbit of $e_0$, which is $p^{-1}\!\l(x_0\r)$ by transitivity of the action, is the index of $p_\ast\pi_1(E,e_0)$ in $\pi_1\l(X,x_0\r)$.<span style="float:right;">$\blacksquare$</span>
