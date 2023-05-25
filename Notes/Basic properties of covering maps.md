<div class="topSpace"></div>

Date Created: 21/05/2023 14:41:58
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Covering Homotopy Theorem]], [[Orbit-Stabilizer Theorem]]
References: _Not Applicable_
Justifications: [[Connected implies well-defined number of sheets]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,x_0}$ be a pointed topological space and consider a covering map $p:(\widetilde{X},\widetilde{x}_0)\to\tpl{X,x_0}$ for a fixed $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$. Consider the action of $\pi_1\l(X,x_0\r)$ on $p^{-1}\!\l(x_0\r)$ given by $\l[\gamma\r]\cdot\widetilde{x}\coloneqq\widetilde{\gamma}\l(0\r)$ where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$. Then the following properties hold._
* _The covering map $p:\widetilde{X}\to X$ is open._
* _The induced map_ $p_\ast:\pi_1(\widetilde{X},\widetilde{x}_0)\to\pi_1\l(X,x_0\r)$ _is injective._
* _The subgroup_ $p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$ _of $\pi_1\l(X,x_0\r)$ consists of loops in $X$ whose lifts to $\widetilde{X}$ are loops based at $\widetilde{x}_0$. That is, the stabilizer of $\widetilde{x}_0$ is_ $p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$_._
* _The action of $\pi_1\l(X,x_0\r)$ on $p^{-1}\!\l(x_0\r)$ is transitive._
* _The number of sheets of $p$ is the index of_ $p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$ _in $\pi_1\l(X,x_0\r)$._

```

_Proof_. First, observe by the function $\l[\gamma\r]\cdot\widetilde{x}\coloneqq\widetilde{\gamma}\l(0\r)$, where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$, is well-defined. If $\gamma,\delta$ are loops at $x_0$, then $\l[\gamma\ast\delta\r]\cdot\widetilde{x}=\widetilde{\gamma\ast\delta}\l(0\r)$ where the lifting ends at $\widetilde{x}$. But $\widetilde{\gamma\ast\delta}\l(0\r)=\big(\widetilde{\gamma}\ast\widetilde{\delta}\big)\l(0\r)$ is the starting point of the lift of $\gamma$ ending at $\widetilde{\delta}\l(0\r)$, where $\widetilde{\delta}$ is the lift of $\delta$ ending at $\widetilde{x}$. Thus $\l[\gamma\r]\cdot\big(\widetilde{\delta}\l(0\r)\big)=\l[\gamma\r]\cdot\l(\l[\delta\r]\cdot\widetilde{x}\r)$, which shows that $p^{-1}\!\l(x_0\r)$ is indeed a $\pi_1\l(X,x_0\r)$-set.
* Let $V\subseteq\widetilde{X}$ be open and let $x\in p\l(V\r)$. For $U$ an evenly-covered neighborhood of $x$, let $\widetilde{x}\in p^{-1}\!\l(x\r)\cap V$ and let $\widetilde{U}$ be the sheet above $U$ containing $\widetilde{x}$. Then $\widetilde{U}\cap V$ is an open subset of $\widetilde{U}$ containing $\widetilde{x}$. Since $\l.p\r|_{\widetilde{U}}:\widetilde{U}\to U$ is a homeomorphism, we see that $p\,(\widetilde{U}\cap V)$ is an open subset of $p\l(V\r)$ containing $x$, as desired.
* If $p_\ast\!\l[\widetilde{\gamma}\r]$ vanishes, then $p\circ\widetilde{\gamma}$ is homotopic to the constant loop at $x_0$, which lifts to a homotopy from $\widetilde{\gamma}$ to the constant loop at $\widetilde{x}_0$. Thus $\l[\widetilde{\gamma}\r]$ vanishes in $\pi_1(\widetilde{X},\widetilde{x}_0)$.
* Let $\l[\gamma\r]\in p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$, so $\gamma\htopeq p\circ\widetilde{\delta}$ for some loop $\widetilde{\delta}$ at $\widetilde{x}_0$. This path homotopy lifts to a path homotopy $\widetilde{\gamma}\htopeq\widetilde{\delta}$, so $\widetilde{\gamma}$ is a loop in $\widetilde{X}$ at $\widetilde{x}_0$. The converse is trivial, and $\l[\gamma\r]$ is a stabilizer of $\widetilde{x}_0$ iff $\l[\gamma\r]\cdot\widetilde{x}_0=\widetilde{\gamma}\l(0\r)=\widetilde{x}_0$ where $\widetilde{\gamma}$ ends at $\widetilde{x}_0$, which occurs iff $\widetilde{\gamma}$ is a loop at $\widetilde{x}_0$.
* Let $\widetilde{x}\in p^{-1}\!\l(x_0\r)$. Since $\widetilde{X}$ is path-connected, there is a path $\widetilde{\sigma}$ from $\widetilde{x}_0$ to $\widetilde{x}$. Its projection is a loop at $x_0$ and whose lift ending at $\widetilde{x}$ is $\widetilde{\sigma}$. Thus $\l[p\circ\widetilde{\sigma}\r]$ acts on $\widetilde{x}$ as $\l[p\circ\widetilde{\sigma}\r]\cdot\widetilde{x}=\widetilde{\sigma}\l(0\r)=\widetilde{x}_0$, as desired.
* By the Orbit-Stabilizer Theorem, the cardinality of the orbit of $\widetilde{x}_0$, which is $p^{-1}\!\l(x_0\r)$ by transitivity of the action, is the index of $p_\ast\pi_1(\widetilde{X},\widetilde{x}_0)$ in $\pi_1\l(X,x_0\r)$.<span style="float:right;">$\blacksquare$</span>
