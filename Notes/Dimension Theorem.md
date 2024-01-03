<div class="topSpace"></div>

Date Created: 07/05/2022 20:28:12
References: #Ref/Alu09
Tags: #Type/Theorem #Topic/Rings_and_Modules/Module_Theory/Later/Rank

Proved by: [[Basis Extension Theorem]], [[Free Module#^universal-property-of-free-modules]], [[Splitting Lemma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Dimension Theorem).

Let $T:V\to W$ be a linear map between $k$-vector spaces $V$ and $W$. Then $V\iso\ker T\oplus\im T$. In particular, $\dim V=\dim\ker T+\dim\im T$.

```

<b>Remark.</b> Consider the short exact sequence $0\to\ker T\to V\to\im T\to0$ and let $B$ be a basis for $\im T$. Since $T:V\to\im T$ is surjective, choose $c_i\in V$ be so that $T\l(c_i\r)=b_i$ for all $b_i\in B$. Define a linear map $L:\im T\to V$ by extending $L\l(b_i\r)\coloneqq c_i$ linearly, which makes $T\circ L=\id$. The result follows from the Splitting Lemma.<span style="float:right;">$\blacksquare$</span>
