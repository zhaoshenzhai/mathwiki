<div class="topSpace"></div>

Date Created: 22/11/2022 20:04:14
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: [[Characteristic Polynomial]]
Constructions: [[Root (Polynomial)]], [[Primitivity and Content]]
Generalizations: <i>Not Applicable</i>

Properties: [[Gauss's Lemma (Irreducibility)]], [[Polynomial has at most degree-many roots]], [[Basic properties of polynomial rings (integral domain)]]
Sufficiencies: [[Basic properties of Noetherian Modules#^Hilbert-basis-theorem]], [[Polynomial ring over fields is a EUD]], [[Polynomial rings over UFDs are UFDs]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Universal Property of Monoid Rings and Algebras]]

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring and let $G\coloneqq\gen{x_i}_{i\in I}\iso\Z^{\oplus I}$ be the free abelian group with generators $x_i$. The <b>polynomial algebra in $\l|I\r|$ variables</b> is the monoid algebra $R\l[M\r]$ of the monoid $M\subseteq G$ consisting of all products $\prod_{i\in I}x_i^{v_i}$, where $v:I\to\N$ is finitely-supported. Elements $f\in R\l[M\r]$ are called <b>polynomials</b>.
* If $\l|I\r|=1$, then $G\iso\Z$, $M\iso\N$, and $R\l[x\r]\coloneqq R\l[\N\r]$ is the ring of <b>univariate polynomials</b>.
* If $n\coloneqq\l|I\r|$ is finite, then $G\iso\Z^n$, $M\iso\N^n$, and $R\l[x_1,\dots,x_n\r]\coloneqq R\l[\N^n\r]$ is the ring of <b>polynomials in $n$ variables</b>.

```

<b>Remark.</b> By the universal properties of $R\l[x_1,\dots,x_n\r]$, viewed as a monoid ring/algebra, we have the following <b>universal properties of polynomial rings</b>.
* For any ring homomorphism $\psi:R\to S$ to a commutative ring $S$ and any tuple $\tpl{s_1,\dots,s_n}\in S^n$, there is a unique ring homomorphism $\sigma:R\l[x_1,\dots,x_n\r]\to S$ such that $\sigma\l(x_i\r)=s_i$. This homomorphism is called the <b>evaluation homomorphism at $\tpl{s_1,\dots,s_n}$</b>, which maps $\sum\alpha_{v_1,\dots,v_n}x_1^{v_1}\cdots x_n^{v_n}$ to $\sum\alpha_{v_1,\dots,v_n}s_1^{v_1}\cdots s_n^{v_n}$.
* For any ring homomorphism $\psi:R\to S$ to a commutative ring $S$, there is a unique ring homomorphism $\eta:R\l[x_1,\dots,x_n\r]\to S\l[x_1,\dots,x_n\r]$ such that $\eta\l(r\r)=\psi\l(r\r)$ for all $r\in R$ and fixes $x_i$. This homomorphism is called the <b>reduction homomorphism</b>, which maps $\sum\alpha_{v_1,\dots,v_n}x_1^{v_1}\cdots x_n^{v_n}$ to $\sum\psi\l(\alpha_{v_1,\dots,v_n}\r)x_1^{v_1}\cdots x_n^{v_n}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Univariate polynomials $f\in R\l[x\r]$ can be written uniquely in the form $f=\sum_{i=0}^ka_ix^i$ for some unique $\deg f\coloneqq k\in\N$ with $a_k\neq0$, called the <b>degree of $f$</b>. Indeed, the monoid $M$ is of the form $M=\l\{x^0,x^1,\dots\r\}$, so we may write $a_y$ any for $y\coloneqq x^i$ as $a_i$.

Multivariate polynomials $f\in R\l[x_1,\dots,x_n\r]$ can be written uniquely in the form $f=\sum a_{v_1,\dots,v_n}x_1^{v_1}\cdots x_n^{v_n}$ where $v\in\l\{1,\dots,n\r\}\to\N$ is finitely-supported and the elements $a_v\coloneqq a_{v_1,\dots,v_n}\in R$ are called the <b>coefficients of $f$</b>. The products $a_vx_1^{v_1}\cdots x_n^{v_n}$ are called the <b>monomials</b>, whose <b>degree</b> is $v_1+\cdots+v_n$. The <b>degree of $f$</b> is the maximal degree of the monomials $x_1^{v_1}\cdots x_n^{v_n}$ such that $a_v\neq0$.
* Note that $f\in R\l[x_1,\dots,x_n\r]$ can be viewed as a polynomial in $x_n$ with coefficients in $R\l[x_1,\dots,x_{n-1}\r]$; that is, a polynomial in $\l(R\l[x_1,\dots,x_{n-1}\r]\r)\l[x_n\r]$. In this case, we may speak of its <b>degree in $x_n$</b> as its degree viewed as a univariate polynomial in $x_n$.
* We can decompose a polynomial $f\in R\l[x_1,\dots,x_n\r]$ as $f=\sum_d f_d$ where $f_d$ is the sum of all the monomials in $f$ having degree $d$. If $f=f_d$ for some $d\in\N$, then $f$ is said to be <b>homogeneous in degree $d$</b>. If $f,g\in R\l[x_1,\dots,x_n\r]$ are homogeneous of degree $d$ and $e$, respectively, and if $fg\neq0$, then $fg$ is homogeneous with degree $d+e$. Similarly, if $d=e$ and $f+g\neq0$, then $f+g$ is homogeneous with degree $d$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The vector spaces $K\l[M\r]$ are all clearly infinite-dimensional.<span style="float:right;">$\blacklozenge$</span>
