<div class="topSpace"></div>

Date Created: 21/05/2023 14:41:58
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Covering maps are fibrations]]
References: _Not Applicable_
Justifications: [[Connected implies well-defined number of sheets]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,x_0}$ be a pointed topological space and consider a covering map $p:(\tilde{X},\tilde{x}_0)\to\tpl{X,x_0}$. Define the **lifting correspondence** $\Phi:\pi_1\l(X,x_0\r)\to p^{-1}\!\l(x_0\r)$ which maps $\l[\gamma\r]\mapsto\tilde{\gamma}\l(1\r)$. Then the following properties hold._
* _The induced map_ $p_\ast:\pi_1(\tilde{X},\tilde{x}_0)\to\pi_1\l(X,x_0\r)$ _is injective._
* _The subgroup_ $p_\ast\big(\pi_1(\tilde{X},\tilde{x}_0)\big)$ _of $\pi_1\l(X,x_0\r)$ consists of loops in $X$ whose lifts to $\tilde{X}$ are loops based at $\tilde{x}_0$. That is,_ $p_\ast\big(\pi_1(\tilde{X},\tilde{x}_0)\big)=\Phi^{-1}\!\l(\tilde{x}_0\r)$_._
* _If $X$ and $\tilde{X}$ are path-connected, then the number of sheets of $p$ is the index of_ $p_\ast\big(\pi_1(\tilde{X},\tilde{x}_0)\big)$ _in $\pi_1\l(X,x_0\r)$._

```

_Proof_. First, $\Phi$ is well-defined since lifts of homotopy classes of paths have the same endpoints.
* If $p_\ast\!\l[\tilde{\gamma}\r]$ vanishes, then $p\circ\tilde{\gamma}$ is homotopic to the constant loop at $x_0$, which lifts to a homotopy from $\tilde{\gamma}$ to the constant loop at $\tilde{x}_0$. Thus $\l[\tilde{\gamma}\r]$ vanishes in $\pi_1(\tilde{X},\tilde{x}_0)$.
* Let $\l[\gamma\r]\in p_\ast\big(\pi_1(\tilde{X},\tilde{x}_0)\big)$, so $\gamma\htopeq p\circ\tilde{\delta}$ for some loop $\tilde{\delta}$ in $\tilde{X}$ at $\tilde{x}_0$. This path homotopy lifts to a path homotopy $\tilde{\gamma}\htopeq\tilde{\delta}$, so $\tilde{\gamma}$ is a loop in $\tilde{X}$ at $\tilde{x}_0$. Thus $\Phi\l(\l[\gamma\r]\r)=\tilde{x}_0$, as desired. Conversely, every $\l[\gamma\r]\in\Phi^{-1}\!\l(\tilde{x}_0\r)$ is a loop at $x_0$ lifting to a loop at $\tilde{x}_0$, so $p\circ\tilde{\gamma}=\gamma$. Thus $p_\ast\!\l[\tilde{\gamma}\r]=\l[\gamma\r]$, as desired.
* Let $H\coloneqq p_\ast\big(\pi_1(\tilde{X},\tilde{x}_0)\big)$. We claim that the induced map $\Phi:\pi_1\l(X,x_0\r)/H\to p^{-1}\!\l(x_0\r)$ is a bijection.
    * First, if $\l[\gamma\r]\in\pi_1\l(X,x_0\r)$ and $\l[\delta\r]\in H$, the lift $\tilde{\delta}$ is a loop at $\tilde{x}_0$ which makes $\tilde{\delta}\ast\tilde{\gamma}$ well-defined. By uniqueness of liftings, the path $\tilde{\delta}\ast\tilde{\gamma}$ and the lift of $\delta\ast\gamma$ coincide, so $\Phi\l[\delta\ast\gamma\r]=(\tilde{\delta}\ast\tilde{\gamma})\l(1\r)=\tilde{\gamma}\l(1\r)=\Phi\l[\gamma\r]$. This shows that the induced map is well-defined.
    * For surjectivity, observe that path-connectedness of $\tilde{X}$ furnishes a path $\tilde{\sigma}$ from any $\tilde{x}\in p^{-1}\!\l(x_0\r)$ to $\tilde{x}_0$. This path clearly projects to a loop $\sigma$ in $X$ at $x_0$. The endpoint of the lift of $\sigma$ is $\tilde{x}_0$, as desired.
    * For injectivity, suppose that $\Phi\l(H\l[\gamma_0\r]\r)=\Phi\l(H\l[\gamma_1\r]\r)$, for two loops $\gamma_0,\gamma_1$ at $x_0$. Then $\tilde{\gamma}_0\!\l(1\r)=\tilde{\gamma}_1\!\l(1\r)$, and since the paths $\tilde{\gamma}_0$ and $\tilde{\gamma}_1$ both start at $\tilde{x}_0$, we see that the concatenation $\tilde{\gamma}_0\ast\tilde{\gamma}_1^-$ is a loop at $\tilde{x}_0$. Thus $\l[\tilde{\gamma}_0\ast\tilde{\gamma}_1^-\r]=\l[\tilde{\gamma}_0\r]\l[\tilde{\gamma}_1^-\r]\in\pi_1(\tilde{X},\tilde{x}_0)$, and since $\tilde{\gamma}_0\ast\tilde{\gamma}_1^-$ is the lift of $\gamma_0\ast\gamma_1^-$, the class $\l[\gamma_0\ast\gamma_1^-\r]$ is in $H$. Finally, this shows that $H\l[\gamma_0\r]=H\l[\gamma_1\r]$, as desired.<span style="float:right;">$\blacksquare$</span>
