---
mathLink: $\l(G\times H\r)^\textrm{ab}\iso G^\textrm{ab}\times H^\textrm{ab}$
---

<div class="topSpace"></div>

Date Created: 10/05/2023 12:26:18
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Universal Property of Abelianization]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ and $H$ be groups. Then $\l(G\times H\r)^\textrm{ab}\iso G^\textrm{ab}\times H^\textrm{ab}$._

```

_Proof_. Consider the surjective homomorphism $\phi\coloneqq\tpl{\pi_G,\pi_H}:G\times H\to G^\textrm{ab}\times H^\textrm{ab}$ where $\pi_G:G\to G^\textrm{ab}$ and $\pi_H:H\to H^\textrm{ab}$ are the canonical projections. Since $G^\textrm{ab}\times H^\textrm{ab}$ is abelian, universality of $\pi:G\times H\to\l(G\times H\r)^\textrm{ab}$ furnishes a unique homomorphism $\tilde{\phi}:\l(G\times H\r)^\textrm{ab}\to G^\textrm{ab}\times H^\textrm{ab}$ such that $\phi=\tilde{\phi}\circ\pi$. Observe that $\tilde{\phi}$ is surjective too, so it suffices to find another surjection $G^\textrm{ab}\times H^\textrm{ab}\to\l(G\times H\r)^\textrm{ab}$.

Let $\iota_G:G\to G\times H$ map $g\mapsto\tpl{g,e}$. Applying universality to $\psi_G\coloneqq\pi\circ\iota_G:G\to\l(G\times H\r)^\textrm{ab}$ furnishes a unique homomorphism $\tilde{\psi}_G:G^\textrm{ab}\to\l(G\times H\r)^\textrm{ab}$ such that $\psi_G=\tilde{\psi}_G\circ\pi_G$. Similarly, for $\tilde{\psi}_H$, so we have the map $\tilde{\psi}\coloneqq\big(\tilde{\psi}_G,\tilde{\psi}_H\big):G^\textrm{ab}\times H^\textrm{ab}\to\l(G\times H\r)^\textrm{ab}$. We claim that $\pi=\tilde{\psi}\circ\phi$, from which it follows that $\tilde{\psi}$ is surjective.
* Since $\pi\circ\iota_G=\tilde{\psi}_G\circ\pi_G$ and similarly for $H$, we see that $\pi=\tpl{\pi\circ\iota_G,\pi\circ\iota_H}=\big(\tilde{\psi}_G\circ\pi_G,\tilde{\psi}_H\circ\pi_H\big)=\big(\tilde{\psi}_G,\tilde{\psi}_H\big)\circ\tpl{\pi_G,\pi_H}=\tilde{\psi}\circ\phi$.<span style="float:right;">$\blacksquare$</span>
