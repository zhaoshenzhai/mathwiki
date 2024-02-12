---
mathLink-blocks:
    syntactic-semantic-duality: Syntactic-Semantic Duality
---

<div class="topSpace"></div>

Date Created: 15/12/2023 20:17:29
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Henkin Construction]], [[Theory#^maximally-consistent-completion]], [[Basic properties of consistent theories]]
References: [[Proofs#^soundness]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Completeness Theorem; Gödel 1929 & Henkin 1949).

Let $\sigma$ be a signature in $\FOL$. If a $\sigma$-theory $T$ is consistent, then it admits a model of cardinality $\leq\max\l\{\l|\sigma\r|,\aleph_0\r\}$.

```

<b>Remark.</b> One of the most important corollary thereof is the <i>Syntactic-Semantic Duality</i>, that is, for a $\sigma$-theory $T$ and a $\sigma$-sentence $\phi$, we have $T\proves\phi$ iff $T\models\phi$. ^syntactic-semantic-duality

![[Images/2023-12-15_205925/image.svg|600]]The forward direction is just Soundness. Conversely, suppose $T\not\proves\phi$. Then $T\not\proves\lnot\lnot\phi$ since $\proves\l(\lnot\lnot\phi\rightarrow\phi\r)$, so $T\cup\l\{\lnot\phi\r\}$ is consistent. By the Completeness Theorem, it admits a model $\mc{M}$, so $T\not\models\phi$ since we have a witness $\mc{M}\models T$ such that $\mc{M}\models\lnot\phi$. The other rows of the table are easily obtained.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\tau\coloneqq\bigcup_n\sigma_n$, where $\sigma_0\coloneqq\sigma$ and $\sigma_{n+1}\coloneqq\sigma_n\sqcup\l\{c_{\ex v\phi}\st\phi(v)\in\Form(\sigma_n)\r\}$, and observe that $\l|\tau\r|=\max\l\{\l|\sigma\r|,\aleph_0\r\}$. We proceed by showing that a consistent $\sigma$-theory $T$ admits a $\tau$-Henkin extension $H\supseteq T$, for then we are done since every $\tau$-Henkin theory admits a model of cardinality at most $\l|\tau\r|$.
* Indeed, we define an increasing sequence $\tpl{T_n}$ of extensions of $T$ as follows. Let $T_0$ be the $\sigma_0$-completion of $T$, and, assuming that $T_n$ is defined, let $T_{n+1}$ be the $\sigma_{n+1}$-completion of $T_n\cup H_n$ where $H_n\coloneqq\l\{\phi\l(c_{\ex v\phi}/v\r)\st\ex v\phi\in T_n\r\}$. Note that if $T_n$ is consistent, then so is $T_n\cup H_n$ since for any $\sigma_n$-sentence $\phi\l(c_{\ex v\phi}/v\r)\in H_n\comp T_n$, we have $\ex v\phi\in T_n$ and the constant symbol $c_{\ex v\phi}$ does not appear in the consistent $\sigma_n$-theory $T\cup\l\{\ex v\phi\r\}$, so $T\cup\l\{\phi\l(c_{\ex v\phi}/v\r)\r\}$ is also consistent.

Set $H\coloneqq\bigcup_nT_n$, which is a $\tau$-completion of $T$. To show that $H$ is $\tau$-Henkin, take $\ex v\phi\in H$. Then $\ex v\phi\in T_n$ is a $\sigma_n$-sentence for some $n$, so $\phi\l(c_{\ex v\phi}/v\r)\in H_n\subseteq H$ as desired. Finally, we let $\mc{M}$ be the reduct of the Henkin construction of $H$ to $\sigma$.<span style="float:right;">$\blacksquare$</span>
