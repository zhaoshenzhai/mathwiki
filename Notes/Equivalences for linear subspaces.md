<div class="topSpace"></div>

Date Created: 03/04/2022 14:39:34
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Basic properties of vector spaces]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{K,+,\cdot,0}$ be a field and consider a vector space $\mc{V}\coloneqq\tpl{V,K,\boxplus,\boxdot,0_V}$. Let_ $\boxplus'\coloneqq\l.\boxplus\r|_{U\times U}$ _and_ $\boxdot'\coloneqq\l.\boxdot\r|_{K\times U}$_. Then, for every subset $U\subseteq V$, the following are equivalent._
1. _(Stability): $\mc{U}\coloneqq\tpl{U,K,\boxplus',\boxdot',0_V}$ is a vector space over $K$._
2. _(Closure): $\fa u_1,u_2\in U,\fa\alpha\in K:\l(\alpha\boxdot'u_1\r)\boxplus'u_2\in U$ and $0_V\in U$._
3. _(Span): $U=\span U$._

```

_Proof_. We shall prove $1\Rightarrow2\Rightarrow3\Rightarrow1$.
* ($1\Rightarrow2$): Assume that $\mc{U}$ is a vector space over $K$, so $\boxplus'$ and $\boxdot'$ are both functions with codomain $U$; the fact that these operations are closed in $U$ follows readily. To see that $0_V\in U$, recall that for all $u\in U$, we have that $0\boxdot u=0_V$; since scalar-multiplication closes in $U$, the result follows.

* ($2\Rightarrow3$): Obviously $U\subseteq\span U$, so take $v\in\span U$. By induction, we see that all linear combinations of finite sequences in $U$ are in $U$, so $v\in U$.
* ($3\Rightarrow1$): In particular, $0_V\in U$, $u_1\boxplus'u_2\in U$, and $\alpha\boxdot' u_1\in U$ for all $u_1,u_2\in U$ and $\alpha\in K$. We need to verify that $\mc{U}$ contains the data of a vector space and that the vector space axioms hold; the former is exactly our assumptions. Observe that all axioms that quantify over elements in $V$ quantify over elements in $U$, so they evidently also hold for elements in $U$ too.

    Thus it suffices to check that every $u\in U$ has an additive inverse $-u\in U$. Existence of such a $-u\in V$ is follows from its corresponding axiom in $\mc{V}$, so it suffices to show that $-u\in U$. Observe, from the algebraic consequences of the axioms in $\mc{V}$, that $-u=\l(-1\r)\boxdot u$. Since $-1\in K$ and $u\in U$, we see that $\l(-1\r)\boxdot u=\l(-1\r)\boxdot'u$ and thus $-u\in U$ because scalar multiplication on $\mc{U}$ is closed.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** Note that in $3\Rightarrow1$, we cannot use the fact that $\span U$ is a vector space, as its proof depends on this.<span style="float:right;">$\blacklozenge$</span>
