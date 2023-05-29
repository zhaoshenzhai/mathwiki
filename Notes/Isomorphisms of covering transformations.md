---
mathLink: Isomorphisms of $\Cov\,(\widetilde{X}/X)$
---


<div class="topSpace"></div>

Date Created: 25/05/2023 21:49:31
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Covering Homotopy Theorem]], [[Basic properties of covering spaces]], [[Basic properties of stabilizers and transitive actions]], [[Characterizations of normal covers]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Isomorphisms of $\Cov\,(\widetilde{X}/X)$).

Let $p:\widetilde{X}\to X$ be covering space of a locally path-connected space $X$. Fix $x_0\in X$ and $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$. Setting $G\coloneqq\pi_1\l(X,x_0\r)$, we have the isomorphisms
$$\begin{equation}
    \Cov\,(\widetilde{X}/X)\iso\Aut\!\l(p^{-1}\!\l(x_0\r)\r)\iso N_G\big(p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)\big)/p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0).
\end{equation}$$
* If $\,(\widetilde{X},p)$ is a normal cover of $X$, then for all $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$, we have $\Cov\,(\widetilde{X}/X)\iso\pi_1\l(X,x_0\r)/p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$.
* If $\,(\widetilde{X},p)$ is a universal cover of $X$, then $\Cov\,(\widetilde{X}/X)\iso\pi_1\l(X,x_0\r)$.

```

_Proof_. Let $Y\coloneqq p^{-1}\!\l(x_0\r)$. We claim that the restriction $\Gamma:f\mapsto\l.f\r|_Y$ is an isomorphism. Clearly $\Gamma\l(f\r)$ is a bijection. To see that it is a $\pi_1\l(X,x_0\r)$-set, let $\l[\gamma\r]\in\pi_1\l(X,x_0\r)$ and $\widetilde{x}\in p^{-1}\!\l(x_0\r)$. Then $\l[\gamma\r]\cdot\widetilde{x}=\widetilde{\gamma}\l(0\r)$ where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$, so $f\l(\l[\gamma\r]\cdot\widetilde{x}\r)=\l(f\circ\widetilde{\gamma}\r)\l(0\r)$. On the other hand, $\l[\gamma\r]\cdot f\l(\widetilde{x}\r)=\widetilde{\gamma}_f\!\l(0\r)$ where $\widetilde{\gamma}_f$ is the lift of $\gamma$ ending at $f\l(\widetilde{x}\r)$. But $p\circ\l(f\circ\widetilde{\gamma}\r)=p\circ\widetilde{\gamma}=\gamma$ and $\l(f\circ\widetilde{\gamma}\r)\l(1\r)=f\l(\widetilde{x}\r)$ is the ending point of $\widetilde{\gamma}_f$, so $\widetilde{\gamma}_f=f\circ\widetilde{\gamma}$ by uniqueness of lifts. Thus $f\l(\l[\gamma\r]\cdot\widetilde{x}\r)=\l[\gamma\r]\cdot f\l(\widetilde{x}\r)$, as desired. Now, $\Gamma$ is a clearly a homomorphism, so it suffices to show that $\Gamma$ is invertible.
* Since only the identity transformation fixes a point, $\Gamma\l(f\r)=\id$ implies that that $f=\id$, showing that $\Gamma$ is injective.
* For surjectivity, let $\phi\in\Aut\l(Y\r)$. Since $\phi$ maps $\widetilde{x}_0$ to $\phi\l(\widetilde{x}_0\r)$, there is a covering transformation $f$ with $f\l(\widetilde{x}_0\r)=\phi\l(\widetilde{x}_0\r)$. Take $\widetilde{x}_1\in Y$, which, by transitivity of the action, is of the form $\widetilde{x}_1=\l[\gamma\r]\cdot\widetilde{x}_0$. Then $f\l(\widetilde{x}_1\r)=f\l(\l[\gamma\r]\cdot\widetilde{x}_0\r)=\l[\gamma\r]\cdot f\l(\widetilde{x}_0\r)=\l[\gamma\r]\cdot\phi\l(\widetilde{x}_0\r)=\phi\l(\widetilde{x}_1\r)$, so $\phi=\l.f\r|_Y$, as desired.

Thus $\Cov\,(\widetilde{X}/X)\iso\Aut\!\l(p^{-1}\!\l(x_0\r)\r)$. Since $\pi_1\l(X,x_0\r)$ acts transitively on $p^{-1}\!\l(x_0\r)$, where the stabilizers of $\widetilde{x}_0$ are precisely $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$, the second isomorphism follows.
* If $\,(\widetilde{X},p)$ is normal, then $p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)$ is a normal subgroup of $\pi_1\l(X,x_0\r)$, so $N_G\big(p_\ast\pi_1\,(\widetilde{X},\widetilde{x}_0)\big)=\pi_1\l(X,x_0\r)$.
* If $\,(\widetilde{X},p)$ is a universal cover and $X$ semilocally simply-connected, then $\widetilde{X}$ is simply-connected and the result follows.<span style="float:right;">$\blacksquare$</span>
