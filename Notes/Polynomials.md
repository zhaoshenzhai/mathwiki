<div class="topSpace"></div>

Date Created: 22/11/2022 20:04:14
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: [[Characteristic Polynomial]], [[Minimal Polynomial]]
Constructions: [[Evaluation Homomorphism]], [[Root (Polynomial)]], [[Content (polynomial)]]
Generalizations: <i>Not Applicable</i>

Properties: [[Gauss's Lemma (Irreducibility)]], [[Polynomial has at most degree-many roots]], [[Basic properties of polynomial rings (integral domain)]]
Sufficiencies: [[Hilbert's Basis Theorem]], [[Polynomial ring over fields is a EUD]], [[Polynomial rings over UFDs are UFDs]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring and let $G$ be the free abelian group with generators $x_i$ over some indexing set $I$. The <b>polynomial ring in $\l|I\r|$ variables</b> is the monoid ring $R\l[M\r]$ of the monoid $M\subseteq G$ consisting of all products $\prod_{i\in I}x_i^{v_i}$, where $v:I\to\N$ is finitely-supported. Elements $f\in R\l[M\r]$ are called <b>polynomials</b>.
* If $\l|I\r|=1$, then $G\iso\Z$, $M\iso\N$, and $R\l[x\r]\coloneqq R\l[\N\r]$ is the ring of <b>univariate polynomials</b>.
* If $n\coloneqq\l|I\r|$ is finite, then $G\iso\Z^n$, $M\iso\N^n$, and $R\l[x_1,\dots,x_n\r]\coloneqq R\l[\N^n\r]$ is the ring of <b>polynomials in $n$ variables</b>.

If $K\coloneqq R$ is a field, then $K\l[M\r]$ is the <b>vector space of polynomials in $\l|I\r|$ variables</b>.

```

<b>Remark.</b> Univariate polynomials $f\in R\l[x\r]$ can be written uniquely in the form $f=\sum_{i=0}^ka_ix^i$ for some unique $\deg f\coloneqq k\in\N$ with $a_k\neq0$, called the <b>degree of $f$</b>. Indeed, the monoid $M$ is of the form $M=\l\{x^0,x^1,\dots\r\}$, so we may write any $a_y$ for $y\coloneqq x^i$ as $a_i$. Similarly for multivariate polynomials.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The vector spaces $K\l[M\r]$ are all clearly infinite-dimensional.<span style="float:right;">$\blacklozenge$</span>
