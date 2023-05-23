<div class="topSpace"></div>

Date Created: 21/05/2023 14:41:58
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Covering Homotopy Theorem]]
References: _Not Applicable_
Justifications: [[Connected implies well-defined number of sheets]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,x_0}$ be a pointed topological space and consider a covering map $p:(\widetilde{X},\widetilde{x}_0)\to\tpl{X,x_0}$. Define the **lifting correspondence** $\Phi:\pi_1\l(X,x_0\r)\to p^{-1}\!\l(x_0\r)$ which maps $\l[\gamma\r]\mapsto\widetilde{\gamma}\l(1\r)$. Then the following properties hold._
* _The covering map $p:(\widetilde{X},\widetilde{x}_0)\to\tpl{X,x_0}$ is open._
* _The induced map_ $p_\ast:\pi_1(\widetilde{X},\widetilde{x}_0)\to\pi_1\l(X,x_0\r)$ _is injective._
* _The subgroup_ $p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$ _of $\pi_1\l(X,x_0\r)$ consists of loops in $X$ whose lifts to $\widetilde{X}$ are loops based at $\widetilde{x}_0$. That is,_ $p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)=\Phi^{-1}\!\l(\widetilde{x}_0\r)$_._
* _If $X$ and $\widetilde{X}$ are path-connected, then the number of sheets of $p$ is the index of_ $p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$ _in $\pi_1\l(X,x_0\r)$._

```

_Proof_. First, $\Phi$ is well-defined since lifts of homotopy classes of paths have the same endpoints.
* Let $V\subseteq\widetilde{X}$ be open and let $x\in p\l(V\r)$. For $U$ an evenly-covered neighborhood of $x$, let $\widetilde{x}\in p^{-1}\!\l(x\r)\cap V$ and let $\widetilde{U}$ be the sheet above $U$ containing $\widetilde{x}$. Then $\widetilde{U}\cap V$ is an open subset of $\widetilde{U}$ containing $\widetilde{x}$. Since $\l.p\r|_{\widetilde{U}}:\widetilde{U}\to U$ is a homeomorphism, we see that $p\,(\widetilde{U}\cap V)$ is an open subset of $p\l(V\r)$ containing $x$, as desired.
* If $p_\ast\!\l[\widetilde{\gamma}\r]$ vanishes, then $p\circ\widetilde{\gamma}$ is homotopic to the constant loop at $x_0$, which lifts to a homotopy from $\widetilde{\gamma}$ to the constant loop at $\widetilde{x}_0$. Thus $\l[\widetilde{\gamma}\r]$ vanishes in $\pi_1(\widetilde{X},\widetilde{x}_0)$.
* Let $\l[\gamma\r]\in p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$, so $\gamma\htopeq p\circ\widetilde{\delta}$ for some loop $\widetilde{\delta}$ in $\widetilde{X}$ at $\widetilde{x}_0$. This path homotopy lifts to a path homotopy $\widetilde{\gamma}\htopeq\widetilde{\delta}$, so $\widetilde{\gamma}$ is a loop in $\widetilde{X}$ at $\widetilde{x}_0$. Thus $\Phi\l(\l[\gamma\r]\r)=\widetilde{x}_0$, as desired. Conversely, every $\l[\gamma\r]\in\Phi^{-1}\!\l(\widetilde{x}_0\r)$ is a loop at $x_0$ lifting to a loop at $\widetilde{x}_0$, so $p\circ\widetilde{\gamma}=\gamma$. Thus $p_\ast\!\l[\widetilde{\gamma}\r]=\l[\gamma\r]$, as desired.
* Let $H\coloneqq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$. We claim that the induced map $\Phi:\pi_1\l(X,x_0\r)/H\to p^{-1}\!\l(x_0\r)$ is a bijection.
    * First, if $\l[\gamma\r]\in\pi_1\l(X,x_0\r)$ and $\l[\delta\r]\in H$, the lift $\widetilde{\delta}$ is a loop at $\widetilde{x}_0$ which makes $\widetilde{\delta}\ast\widetilde{\gamma}$ well-defined. By uniqueness of liftings, the path $\widetilde{\delta}\ast\widetilde{\gamma}$ and the lift of $\delta\ast\gamma$ coincide, so $\Phi\l[\delta\ast\gamma\r]=(\widetilde{\delta}\ast\widetilde{\gamma})\l(1\r)=\widetilde{\gamma}\l(1\r)=\Phi\l[\gamma\r]$. This shows that the induced map is well-defined.
    * For surjectivity, observe that path-connectedness of $\widetilde{X}$ furnishes a path $\widetilde{\sigma}$ from any $\widetilde{x}\in p^{-1}\!\l(x_0\r)$ to $\widetilde{x}_0$. This path clearly projects to a loop $\sigma$ in $X$ at $x_0$. The endpoint of the lift of $\sigma$ is $\widetilde{x}_0$, as desired.
    * For injectivity, suppose that $\Phi\l(H\l[\gamma_0\r]\r)=\Phi\l(H\l[\gamma_1\r]\r)$, for two loops $\gamma_0,\gamma_1$ at $x_0$. Then $\widetilde{\gamma}_0\!\l(1\r)=\widetilde{\gamma}_1\!\l(1\r)$, and since the paths $\widetilde{\gamma}_0$ and $\widetilde{\gamma}_1$ both start at $\widetilde{x}_0$, we see that the concatenation $\widetilde{\gamma}_0\ast\widetilde{\gamma}_1^-$ is a loop at $\widetilde{x}_0$. Thus $\l[\widetilde{\gamma}_0\ast\widetilde{\gamma}_1^-\r]=\l[\widetilde{\gamma}_0\r]\l[\widetilde{\gamma}_1^-\r]\in\pi_1(\widetilde{X},\widetilde{x}_0)$, and since $\widetilde{\gamma}_0\ast\widetilde{\gamma}_1^-$ is the lift of $\gamma_0\ast\gamma_1^-$, the class $\l[\gamma_0\ast\gamma_1^-\r]$ is in $H$. Finally, this shows that $H\l[\gamma_0\r]=H\l[\gamma_1\r]$, as desired.<span style="float:right;">$\blacksquare$</span>
