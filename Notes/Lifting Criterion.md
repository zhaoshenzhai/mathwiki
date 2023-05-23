<div class="topSpace"></div>

Date Created: 22/05/2023 23:14:21
Tags: #Type/Theorem #In_Progress

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Lifting Criterion).

_Let $f:\tpl{Y,y_0}\to\tpl{X,x_0}$ be a continuous map between pointed topological spaces and let $p:(\widetilde{X},\widetilde{x}_0)\to\tpl{X,x_0}$ be a covering map. If $Y$ is path-connected and locally path-connected, then a lift $\widetilde{f}:\tpl{Y,y_0}\to(\widetilde{X},\widetilde{x}_0)$ of $f$ exists iff_ $f_\ast\!\l(\pi_1\l(Y,y_0\r)\r)\subseteq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$_._
![[Images/2023-05-22_233431/image.svg|150]]

```

_Proof_. If such a lift exists, then $p_\ast\circ\widetilde{f}_\ast=(p\circ\widetilde{f})_\ast=f_\ast$, so $f_\ast\!\l(\pi_1\l(Y,y_0\r)\r)=p_\ast\big(\widetilde{f}_\ast\!\big(\pi_1\l(Y,y_0\r)\big)\big)\subseteq p_\ast\big(\pi_1(\widetilde{X},\widetilde{x}_0)\big)$. For the converse, let $y\in Y$ and let $\gamma$ be a path from $y_0$ to $y$. Then $f\circ\gamma$ is a path starting at $x_0$, which has a unique lift $\widetilde{f\circ\gamma}$ starting at $\widetilde{x}_0$. Define $\widetilde{f}\l(y\r)\coloneqq\widetilde{f\circ\gamma}\l(1\r)$. Assuming $\widetilde{f}$ is well-defined and continuous, we have that $(p\circ\widetilde{f})\l(y\r)=p\l(\widetilde{f\circ\gamma}\l(1\r)\r)=\l(f\circ\gamma\r)\l(1\r)=f\l(y\r)$, so $\widetilde{f}$ lifts $f$.
* To show that $\widetilde{f}\l(y\r)$ is well-defined, let $\gamma'$ be another path from $y_0$ to $y$.
