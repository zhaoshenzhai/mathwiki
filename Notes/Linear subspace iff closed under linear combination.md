---
mathLink: $U\subseteq V$ is a vector space $\Leftrightarrow$ $0\in U$ and restricted operations close in $U$
---

<div class="topSpace"></div>

Date Created: 03/04/2022 14:39:34
Tags: #Proposition

Proved by: [[Basic properties of vector spaces]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{K,+,\cdot,0}$ be a field and consider a vector space $\mc{V}\coloneqq\tpl{V,K,\boxplus,\boxdot,0_V}$. Let_ $\boxplus'\coloneqq\l.\boxplus\r|_{U\times U}$ _and_ $\boxdot'\coloneqq\l.\boxdot\r|_{K\times U}$_. Then, for every subset $U\subseteq V$, the quintuple $\mc{U}\coloneqq\tpl{U,K,\boxplus',\boxdot',0_V}$ is a vector space over $K$ iff_
* _$0_V\in U$,_
* _$\fa u_1,u_2\in U:u_1\boxplus'u_2\in U$, and_
* _$\fa\alpha\in K,\fa u\in U:\alpha\boxdot'u\in U$._

```

_Proof_.
* ($\Rightarrow$): Assume that $\mc{U}$ is a vector space over $K$, so $\boxplus'$ and $\boxdot'$ are both functions with codomain $U$; the fact that these operations are closed in $U$ follows readily. To see that $0_V\in U$, recall that for all $u\in U$, we have that $0\boxdot u=0_V$; since scalar-multiplication closes in $U$, the result follows.

* ($\Leftarrow$): Conversely, we need to verify that $\mc{U}$ contains the data of a vector space and that the vector space axioms hold; the former is exactly our assumptions. Observe that all axioms that quantify over elements in $V$ quantify over elements in $U$, so they evidently also hold for elements in $U$ too.

    Thus it suffices to check that every $u\in U$ has an additive inverse $-u\in U$. Existence of such a $-u\in V$ is follows from its corresponding axiom in $\mc{V}$, so it suffices to show that $-u\in U$. Observe, from the algebraic consequences of the axioms in $\mc{V}$, that $-u=\l(-1\r)\boxdot u$. Since $-1\in K$ and $u\in U$, we see that $\l(-1\r)\boxdot u=\l(-1\r)\boxdot'u$ and thus $-u\in U$ because scalar multiplication on $\mc{U}$ is closed.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The last two conditions are equivalent to the statement that
$$\begin{equation}
    \fa\alpha\in K,\fa u_1,u_2\in U:\l(\alpha\boxdot'u_1\r)\boxplus'u_2\in U,
\end{equation}$$
or, written in more sensible notation, that $\textrm{`}\alpha u_1+u_2\in U\textrm{'}$. By induction, it follows that $U$ is a linear subspace of $V$ iff $0_V\in U$ and all linear combinations of finite sequences in $U$ are in $U$.<span style="float:right;">$\blacklozenge$</span>
