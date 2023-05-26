<div class="topSpace"></div>

Date Created: 25/05/2023 21:49:31
Tags: #Type/Theorem #In_Progress

Proved by: [[Basic properties of covering maps]], [[Basic properties of stabilizers and transitive actions]], [[Characterizations of normal covers]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $p:\widetilde{X}\to X$ be covering space of a locally path-connected space $X$. For a fixed $x_0\in X$, we have the following isomorphisms._
* _For all $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$, we have_ $\Cov\,(\widetilde{X}/X)\iso N_G\big(p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)\big)/p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$ _where $G\coloneqq\pi_1\l(X,x_0\r)$._
* _If $\,(\widetilde{X},p)$ is a normal cover of $X$, then for all $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$, we have_ $\Cov\,(\widetilde{X}/X)\iso\pi_1\l(X,x_0\r)/p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$_._
* _If $\,(\widetilde{X},p)$ is a universal cover of $X$ and $X$ is semilocally simply-connected, then $\Cov\,(\widetilde{X}/X)\iso\pi_1\l(X,x_0\r)$._

```

_Proof_. Note that $\pi_1\l(X,x_0\r)$ acts transitively on $p^{-1}\!\l(x_0\r)$, where the stabilizers of $\widetilde{x}_0$ are precisely $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$, so the first result follows.
* If $\,(\widetilde{X},p)$ is normal, then $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$ is a normal subgroup of $\pi_1\l(X,x_0\r)$, so $N_G\big(p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)\big)=\pi_1\l(X,x_0\r)$.
* If $\,(\widetilde{X},p)$ is a universal cover and $X$ semilocally simply-connected, then $\widetilde{X}$ is simply-connected and the result follows.<span style="float:right;">$\blacksquare$</span>
