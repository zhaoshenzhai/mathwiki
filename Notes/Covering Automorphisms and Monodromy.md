---
mathLink: $\Cov\l(E/X\r)$ and Monodromy
mathLink-blocks:
    monodromy-action: Monodromy Action
    covering-automorphism-universal-fundamental-group: $\Cov\,(\widetilde{X}/X)\iso\pi_1\!\l(X,x_0\r)$
---

<div class="topSpace"></div>

Date Created: 23/11/2023 21:16:06
References:
Tags: #Type/Theorem #Topic/Topology
^monodromy-action

Proved by: [[Homotopy Lifting Theorem]], [[Orbit-Stabilizer Theorem]], [[Lifting Criterion]], [[Isomorphism Theorems]], [[Covering Space#^covering-space-action-free]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem ($\Cov\l(E/X\r)$ and Monodromy).

Let $p:\tpl{E,e_0}\to\tpl{X,x_0}$ be a covering map of a pointed space $\tpl{X,x_0}$. The <b>monodromy action</b> is the action $\pi_1\!\l(X,x_0\r)\act p^{-1}\l(x_0\r)$ given by $\gamma\cdot e\coloneqq\widetilde{\gamma}\l(0\r)$, where $\widetilde{\gamma}$ is the unique lift of $\gamma$ ending at $e$. Let $G\coloneqq\pi_1\!\l(X,x_0\r)$, $H\coloneqq p_\ast\pi_1\!\l(E,e_0\r)$, and $F\coloneqq p^{-1}\!\l(x_0\r)$.
* The action $G\act F$ is transitive whose stabilizer of $e_0$ is $H$, so there is a $G$-equivariant bijection $F\iso G/H$.
* The restriction of each deck transformation $f\in\Cov\l(E/X\r)$ to the fiber $F$ is $G$-equivariant, and thus $\Cov\l(E/X\r)\iso\Aut_G\!\l(F\r)$.

We have an isomorphism $\Cov\l(E/X\r)\iso N_G\!\l(H\r)/H$, so $\Cov\l(E/X\r)\iso\pi_1\!\l(X,x_0\r)/p_\ast\pi_1\!\l(E,e_0\r)$ if $E$ is normal and $\Cov\l(E/X\r)\iso\pi_1\!\l(X,x_0\r)$ if $E$ is universal.

```
^covering-automorphism-universal-fundamental-group

<b>Remark.</b> This shows that the number of sheets of $p$ is $\l[G:H\r]$. In particular, if $E$ is simply-connected, then the number of sheets of $p$ is the order of $G$. This occurs whenever $X$ is itself simply-connected since $p_\ast:\pi_1\!\l(E,e_0\r)\into\pi_1\!\l(X,x_0\r)$, in which case $p$ is a $1$-sheeted covering and thus a homeomorphism.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We first show that this defines an action. Indeed, if $\gamma,\delta$ are loops at $x_0$, then $\l(\gamma\ast\delta\r)\cdot e=\widetilde{\gamma\ast\delta}\l(0\r)$ where the lift ends at $e$. But $\widetilde{\gamma\ast\delta}\l(0\r)=\big(\widetilde{\gamma}\ast\widetilde{\delta}\big)\l(0\r)$ is the starting point of the lift of $\gamma$ ending at $\widetilde{\delta}\l(0\r)$, where $\widetilde{\delta}$ is the lift of $\delta$ ending at $e$. Thus $\gamma\cdot\big(\widetilde{\delta}\l(0\r)\big)=\gamma\cdot\l(\delta\cdot e\r)$, which shows that $F$ is indeed a $G$-set.
* Let $e\in F$ and pick a path $\widetilde{\sigma}:e_0\pathto e$. Its projection is a loop at $x_0$ and whose lift ending at $e$ is $\widetilde{\sigma}$, so $\l(p\circ\widetilde{\sigma}\r)\cdot e=\widetilde{\sigma}\l(0\r)=e_0$ as desired. Note that a loop $\gamma\in G$ stabilizes $e_0$ iff $\gamma\cdot e_0=\widetilde{\gamma}\l(0\r)=e_0$ where $\widetilde{\gamma}$ ends at $e_0$, which occurs iff $\widetilde{\gamma}$ is a loop at $e_0$. The latter occurs iff $\gamma\in H$, so the $G$-equivariant bijection follows.
* Let $f\in\Cov\l(E/X\r)$ be restricted to $F$. For a loop $\gamma\in G$ and a lift $\widetilde{\gamma}$ ending at $e$, we have $\gamma\cdot e=\widetilde{\gamma}\l(0\r)$ and hence $f\l(\gamma\cdot e\r)=f\l(\widetilde{\gamma}\l(0\r)\r)$. But the path $f\circ\widetilde{\gamma}$ is a also a lift of $\gamma$ since $p\circ\l(f\circ\widetilde{\gamma}\r)=p\circ\widetilde{\gamma}=\gamma$, which ends at $f\l(e\r)$, so $\gamma\cdot f\l(e\r)=\l(f\circ\widetilde{\gamma}\r)\l(0\r)=f\l(\gamma\cdot e\r)$ as desired. We claim that the action $\Cov\l(E/X\r)\act E$ restricts to an isomorphism $\Cov\l(E/X\r)\to\Aut_G\!\l(F\r)$. Indeed, that this is injective follows since deck transformations act freely. Take $\phi\in\Aut_G\!\l(F\r)$. By transitivity of $G\act F$, the stabilizers of $e_0$ and $\phi\l(e_0\r)$ coincide. But then $p_\ast\pi_1\!\l(E,e_0\r)=p_\ast\pi_1\!\l(E,\phi\l(e_0\r)\r)$, so by the Lifting Criterion there is a deck transformation $f\in\Cov\l(E/X\r)$ such that $f\l(e_0\r)=\phi\l(e_0\r)$. Its restriction to $p^{-1}\!\l(e_0\r)$ is $G$-equivariant and agrees with $\phi$ at $e_0$, so they coincide.

Finally, the homomorphism $N_G\!\l(H\r)\to\Aut_G\!\l(F\r)$ mapping $\gamma\in N_G\!\l(H\r)$ to the unique $G$-automorphism $\phi_\gamma$ such that $\phi_\gamma\!\l(e_0\r)=\gamma\cdot e_0$ is a surjection whose kernel is $H$. Indeed, such a map $\phi_\gamma$ exists since $G_e=\gamma G_e\gamma^{-1}=G_{\gamma\cdot e}$, and is unique since $\Cov\l(E/X\r)\act E$ freely. That this map descends is easy to verify.<span style="float:right;">$\blacksquare$</span>
