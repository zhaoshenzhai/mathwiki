---
mathLink-blocks:
    degree-of-characteristic-polynomial: $\deg\cchi=\rk R$
---

<div class="topSpace"></div>

Date Created: 08/03/2023 15:50:44
Tags: #Type/Definition #Topic/Module_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Eigenvalue]]
Generalizations: <i>Not Applicable</i>

Properties: [[Cayley-Hamilton Theorem]], [[Eigenvalue#^eigenvalue-iff-root-of-characteristic]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Leibniz Formula]], [[Canonical Forms]], [[Cayley-Hamilton Theorem#^structure-of-characteristic-minimal]]

``` ad-Definition
title: Definition.

Let $\alpha\in\End\l(M\r)$ be a linear operator on a fin-gen. free $R$-module $M$. The <b>characteristic polynomial of $\alpha$</b> is the polynomial $\cchi_\alpha\!\l(t\r)\coloneqq\det\l(t\id-\alpha\r)\in R\l[t\r]$.

```

<b>Remark.</b> If $M$ is finitely-generated, say with $n\coloneqq\rk M$, then $\cchi_\alpha\!\l(t\r)=t^n-\tr\l(\alpha\r)t^{n-1}+\cdots+\l(-1\r)^n\det\l(\alpha\r)$. Indeed, let $\tpl{a_{ij}}$ be a matrix representation of $\alpha$ and use the Leibniz expansion of $\det$ to write
$$\begin{equation}
    \cchi_\alpha\!\l(t\r)=\det\l(t\id-\alpha\r)=\sum_{\sigma\in S_n}\sgn\l(\sigma\r)b_{\sigma\l(1\r)1}\cdots b_{\sigma\l(n\r)n}
\end{equation}$$
where $b_{ii}\coloneqq t-a_{ii}$ for all $i$ and $b_{ij}\coloneqq-a_{ij}$ for all $i\neq j$. The term with $\sigma=\id$ is then $\prod_{i=1}^{n}\l(t-a_{ii}\r)$, and since every other term has degree less than $n$, we see that $\deg\cchi_\alpha=n$ and $\cchi_\alpha$ is monic. Moreover, no other permutation in $S_n$ contributes to the $t^{n-1}$ term, so its coefficient is seen to be the coefficient of the expansion of $\prod_{i=1}^{n}\l(t-a_{ii}\r)$, which is $-\sum_{i=1}^{n}a_{ii}=-\tr\l(\alpha\r)$. Finally, the constant term $\cchi_\alpha\!\l(0\r)=\l(-1\r)^n\deg\l(\alpha\r)$ follows by multilinearity of $\det$.<span style="float:right;">$\blacklozenge$</span>
^degree-of-characteristic-polynomial

---

<b>Remark.</b> The structure of $\cchi_\alpha$ is greatly clarified when $k\coloneqq R$ is a field, in which case we can equip the $k$-vector space $V\coloneqq M$ can be equipped with a $k\l[x\r]$-module structure induced by $\alpha\in\End\l(V\r)$, and we can express $\alpha$ in a canonical form.
* If $\alpha$ is in Rational Canonical Form, say $\alpha\sim\diag\l(C_{f_1},\dots,C_{f_m}\r)$ for some monic polynomials $f_1\divides\cdots\divides f_m\in k\l[x\r]$, then $\cchi_\alpha=\prod_{j=1}^{m}f_j$.
* If $\cchi_\alpha$ splits and $\alpha$ is in Jordan Canonical Form, say $\alpha\sim\diag\l(J_{r_{ij}}\!\l(\lambda_i\r)\r)$ for some distinct scalars $\lambda_i\in k$ and $r_{ij}\geq1$, then $\cchi_\alpha=\prod_{i=1}^{n}\prod_{j=1}^{m}\l(x-\lambda_i\r)^{r_{ij}}$.

Another important invariant is the invariant factor $\mu_\alpha\coloneqq f_m$, called the <i>minimal polynomial of $\alpha$</i>. It is the unique monic polynomial in $k\l[x\r]$ generating $\Ann_{k\l[x\r]}\!\l(V\r)$, and the <i>Cayley-Hamilton Theorem</i> states that $\mu_\alpha\divides\cchi_\alpha$.<span style="float:right;">$\blacklozenge$</span>
