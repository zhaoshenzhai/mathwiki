<div class="topSpace"></div>

Date Created: 25/05/2023 18:30:27
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Independence of base point]], [[Characterizations of equivalent covering maps]], [[Basic properties of covering maps]], [[Basic properties of stabilizers and transitive actions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $p:\widetilde{X}\to X$ be a covering space of a locally path-connected space $X$. Then the covering space $\,(\widetilde{X},p)$ is normal iff the subgroup_ $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$ _is normal in $\pi_1\l(X,x_0\r)$ for all $x_0\in X$ and $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$._
* _Moreover, for all $\widetilde{x}_0,\widetilde{x}_1\in\widetilde{X}$, there is a covering transformation $f$ mapping $\widetilde{x}_0$ to $\widetilde{x}_1$ iff there is an automorphism $\phi$ on $p^{-1}\!\l(x_0\r)$ mapping $\widetilde{x}_0$ to $\widetilde{x}_1$._

```

_Proof_. Fix $x_0\in X$ and let $H\subgrpeq\pi_1\l(X,x_0\r)$ be conjugate to $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$, so $H=p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_1)$ for some $\widetilde{x}_1\in p^{-1}\!\l(x_0\r)$. Since $p$ is normal, let $f\in\Cov\,(\widetilde{X}/X)$ send $\widetilde{x}_0$ to $\widetilde{x}_1$. Thus the induced map $f_\ast$ takes loops at $\widetilde{x}_0$ to loops at $\widetilde{x}_1$, so $f_\ast:\pi_1\,(\widetilde{X},\widetilde{x}_0)\to\,(\widetilde{X},\widetilde{x}_1)$. But $f$ is a covering transformation, so $p\circ f=p$ and so $p_\ast\circ f_\ast=p_\ast$. Thus
$$\begin{equation}
    H=p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_1)=p_\ast f_\ast\pi_1\,(\widetilde{X},\widetilde{x}_1)=p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0),
\end{equation}$$
which shows that $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$ is normal. Conversely, take $\widetilde{x}_0,\widetilde{x}_1\in p^{-1}\!\l(x_0\r)$. Since the subgroups $p_\ast\pi_1\,(\widetilde{X},\widetilde{x})$ for $\widetilde{x}\in p^{-1}\!\l(x_0\r)$ are all conjugate, we see that $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)=p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_1)$. Thus there is an isomorphism $f:\widetilde{X}\to\widetilde{X}$ of covering spaces sending $\widetilde{x}_1$ to $\widetilde{x}_2$, as desired.
* Take $\widetilde{x}_0,\widetilde{x}_1\in p^{-1}\!\l(x_0\r)$. Then there is a covering transformation $f:\,(\widetilde{X},\widetilde{x}_0)\to\,(\widetilde{X},\widetilde{x}_1)$ iff $p_{1\ast}\pi_1\,(\widetilde{X},\widetilde{x}_1)=p_{2\ast}\pi_1\,(\widetilde{X},\widetilde{x}_2)$, which occurs iff the stabilizers of $\widetilde{x}_1$ and $\widetilde{x}_2$ coincide. This is the case iff there is an automorphism $\phi\in\Aut\!\l(p^{-1}\!\l(x_0\r)\r)$ such that $\phi\l(\widetilde{x}_1\r)=\widetilde{x}_2$.<span style="float:right;">$\blacksquare$</span>
