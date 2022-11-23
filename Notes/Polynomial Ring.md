<div class="topSpace"></div>

Date Created: 22/11/2022 20:04:14
Tags: #Definition #Courses/MATH235

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Evaluation Homomorphism]], [[Root (Polynomial)]]
Generalizations: _Not Applicable_

Properties: [[Division Algorithm (Polynomials)]], [[Polynomial has at most degree-many roots]], [[Basic properties of polynomial rings (integral domain)]]
Sufficiencies: [[Polynomial ring over fields are PIDs]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $R$ be a commutative ring with unit and fix $n\in\N$. A **polynomial over $R$ with degree $n$ and indeterminant $x$** is an expression of the form_
$$\begin{equation}
    f\coloneqq a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0\ \ \ \ \ \ \ \ \textrm{\it{or}}\ \ \ \ \ \ \ \ f\coloneqq \sum_{i=0}^na_ix^i
\end{equation}$$
_where each $a_i\in R$ and $a_n\neq0$. We call $a_n$ the **leading coefficient of $f$**, and write $\deg f\coloneqq n$. If $a_n=1$, the polynomial $f$ is said to be **monic**._

_The **polynomial ring over $R$** is the ring $\tpl{R\l[x\r],+,\cdot}$ consisting of all polynomials over $R$ equipped with the operations $+$ and $\cdot$, defined, for all_ $f\coloneqq\sum_{i=0}^{n}a_ix^i$ _and_ $g\coloneqq\sum_{i=0}^{m}b_ix_i$_, by_
$$\begin{equation}
    f+g\coloneqq\sum_{i=0}^{u}\l(a_i+b_i\r)x^i\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ f\cdot g\coloneqq\sum_{i=0}^{m+n}\l(\sum_{k=0}^ia_kb_{i-k}\r)x^i.
\end{equation}$$
_where $u\coloneqq\max\l\{m,n\r\}$ (so if $m>n$,_ $a_{n+1},\dots,a_m\coloneqq0$_, and if $n>m$,_ $b_{m+1},\dots,b_n\coloneqq0$_)._

```

**Remark.** Formally, a polynomial over $R$ with degree $n$ is an $n$-tuple $f\coloneqq\tpl{a_n,a_{n-1},\dots,a_1,a_0}$ where each $a_i\in R$ and $a_n\neq0$.
* The **zero polynomial** is the element $0\in R$; it is said to have degree $-\infty$.

Furthermore, multiplication is defined in accordance with the distributive law. Indeed, we may first define it for monomials $f_i\coloneqq a_ix^i$ and $g_j\coloneqq b^jx^j$ as $f_i\cdot g_j\coloneqq a_ib_jx^{i+j}$. Now, letting
$$\begin{equation}
    f\coloneqq\sum_{i=0}^{n}f_i=\sum_{i=0}^{n}a_ix^i\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ g\coloneqq\sum_{j=0}^{m}g_j=\sum_{j=0}^{m}b_jx^j,
\end{equation}$$
define $f\cdot g$ by distributing terms and $\textrm{`}$collecting like terms$\textrm{'}$.<span style="float:right;">$\blacklozenge$</span>
