---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 22:23:11
Tags: #Definition #Topics/Ring_Theory #Courses/MATH457

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Gauss's Lemma (Primitivity)]], [[Gauss's Lemma (Irreducibility)]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[GCDs exist in UFDs]], [[GCD exists implies unique up to a unit]]

``` ad-Definition
title: Definition.

_Let $R$ be a UFD and take a nonzero_ $f\coloneqq\sum_{i=0}^{n}a_ix^i\in R\l[x\r]$_. The **content of $f$** is the GCD ideal $\cont\l(f\r)\coloneqq\ideal{\gcd\l(a_0,\dots,a_n\r)}$ of the coefficients of $f$._
* _If $\cont\l(f\r)=R$, then $f$ is said to be **primitive**._

```

**Remark.** It is clear that $\cont\l(\alpha f\r)=\alpha\cont\l(f\r)$ for all $a\in R\comp\l\{0\r\}$. Furthermore, given any non-zero $f\in R\l[x\r]$ with $\ideal{\alpha}=\cont\l(f\r)$, we can always write $f=\alpha f'$ for some primitive $f'\in R\l[x\r]$. Indeed, such an $f'$ exists since $\alpha$ is the GCD of the coefficients of $f$ and can thus be factored out, and $f'$ is primitive since
$$\begin{equation}
    \ideal{\alpha}=\cont\l(f\r)=\cont\l(\alpha f'\r)=\alpha\cont\l(f'\r),
\end{equation}$$
so $\cont\l(f'\r)=\ideal{1}=R$.<span style="float:right;">$\blacklozenge$</span>
