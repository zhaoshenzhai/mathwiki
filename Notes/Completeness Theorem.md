---
mathLink-blocks:
    syntactic-semantic-duality: Syntactic-Semantic Duality
---

<div class="topSpace"></div>

Date Created: 15/12/2023 20:17:29
Tags: #Type/Theorem #In_Progress/Logic

Proved by: [[Theory#^maximally-consistent-completion]], [[Basic properties of consistent theories]]
References: [[Proofs and Syntactic Truth#^soundness]], [[Basic provable facts]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Completeness Theorem; Gödel 1929 & Henkin 1949).

Let $\sigma$ be a signature in $\FOL$. If a $\sigma$-theory $T$ is consistent, then it admits a model of cardinality $\leq\max\l\{\l|\sigma\r|,\aleph_0\r\}$.

```

<b>Remark.</b> One of the most important corollary thereof is the <i>Syntactic-Semantic Duality</i>, that is, for a $\sigma$-theory $T$ and a $\sigma$-sentence $\phi$, we have $T\proves\phi$ iff $T\models\phi$. ^syntactic-semantic-duality

![[Images/2023-12-15_205925/image.svg|600]]The forward direction is just Soundness. Conversely, suppose $T\not\proves\phi$. Then $T\not\proves\lnot\lnot\phi$ since $\proves\l(\lnot\lnot\phi\rightarrow\phi\r)$, so $T\cup\l\{\lnot\phi\r\}$ is consistent. By the Completeness Theorem, it admits a model $\mc{A}$, so $T\not\models\phi$ since we have a witness $\mc{A}\models T$ such that $\mc{A}\models\lnot\phi$. The other rows of the table are easily obtained.<span style="float:right;">$\blacklozenge$</span>


---

<i>Proof.</i> To motivate the construction, note that for a $\sigma$-structure $\mc{A}$, the $\sigma_A$-theory $H\coloneqq\ElDiag\l(\mc{A}\r)$ is Henkin since $H\proves\ex v\phi$ iff $\ex v\phi\in H$, which occurs iff $\phi\l(c/v\r)\in H$ for some $c\in\mc{C}\l(\sigma\r)$. The main idea is to turn this around, by making $T$ ‘look like’ the elementary diagram of some $\sigma$-structure $\mc{A}$. More precisely, this means that:
1. <i>Extension</i>. Any consistent $\sigma$-theory $T$ admits a $\tau$-Henkin extension $H\supseteq T$ for some signature $\tau\supseteq\sigma$ with $\l|\tau\r|=\max\l\{\l|\sigma\r|,\aleph_0\r\}$.
2. <i>Construction</i>. Any $\tau$-Henkin theory $H$ admits a model $\mc{M}$ of cardinality $\kappa\leq\l|\tau\r|$.

Given these facts, we are done by taking the reduct of $\mc{M}$ to $\sigma$. Heuristically, we obtain $\tau$ by ‘throwing in’ Henkin witnesses into $\sigma$, we obtain $H$ by adding in the $\tau$-sentences $\phi\l(c_{\ex v\phi}/v\r)$ where $c_{\ex v\phi}$ is a Henkin witness to $\ex v\phi$, and finally we obtain $\mc{M}$ by interpreting the symbols exactly as $H$ tells us so.

---

<i>Extension</i>. Let $\tau\coloneqq\bigcup_n\sigma_n$, where $\sigma_0\coloneqq\sigma$ and $\sigma_{n+1}\coloneqq\sigma_n\sqcup\l\{c_{\ex v\phi}\st\phi\l(v\r)\in\ExtForm(\sigma_n)\r\}$. The new constant symbols $c_{\ex v\phi}$ will serve as Henkin witnesses. Indeed, we define an increasing sequence $\tpl{T_n}$ of extensions of $T$ by letting $T_0$ be the maximally consistent $\sigma_0$-completion of $T$, and, assuming that $T_n$ is defined, letting $T_{n+1}$ be a maximally consistent $\sigma_{n+1}$-completion of $T_n\cup H_n$ where $H_n\coloneqq\l\{\phi\l(c_{\ex v\phi}/v\r)\st\ex v\phi\in T_n\r\}$. Note that if $T_n$ is consistent, then so is $T_n\cup H_n$ since for each $\sigma_n$-sentence $\phi\l(c_{\ex v\phi}/v\r)\in H_n\comp T_n$, we have $\ex v\phi\in T_n$ and the constant symbol $c_{\ex v\phi}$ does not appear in the consistent $\sigma_n$-theory $T\cup\l\{\ex v\phi\r\}$, so $T\cup\l\{\phi\l(c_{\ex v\phi}/v\r)\r\}$ is also consistent.

Thus $H\coloneqq\bigcup_nT_n$ is a consistent maximal $\tau$-completion of $T$, with $\l|\tau\r|=\max\l\{\l|\sigma\r|,\aleph_0\r\}$. To show that $H$ is $\tau$-Henkin, take $\ex v\phi\in H$. Then $\ex v\phi\in T_n$ is a $\sigma_n$-sentence for some $n$, so $\phi\l(c_{\ex v\phi}/v\r)\in H_n\subseteq H$ as desired.

---

<i>Construction</i>. 
