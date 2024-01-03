<div class="topSpace"></div>

Date Created: 29/12/2022 23:23:37
References:
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Real Numbers#^heine-borel]], [[Compact Space#^extreme-value-theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Mean Value Theorems).

Let $a,b\in\R$ and let $f,g:\l[a,b\r]\to\R$ be continuous on $\l[a,b\r]$ and differentiable on $\l(a,b\r)$. Then the following ‘Mean Value Theorems’ hold:
* (Rolle’s MVT). If $f\l(a\r)=f\l(b\r)$, then there exists some $c\in\l(a,b\r)$ such that $f'\!\l(c\r)=0$.
* (Lagrange’s MVT). There exists some $c\in\l(a,b\r)$ such that $f\l(b\r)-f\l(a\r)=f'\!\l(c\r)\l(b-a\r)$.
* (Cauchy’s MVT). There exists some $c\in\l(a,b\r)$ such that $\l[f\l(b\r)-f\l(a\r)\r]g'\!\l(c\r)=\l[g\l(b\r)-g\l(a\r)\r]f'\!\l(c\r)$.

```

<b>Remark.</b> Lagrange’s MVT follows from Cauchy’s MVT by setting $g\l(x\r)\coloneqq x$ for all $x\in\l[a,b\r]$, but we give a separate proof here.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> For Rolle’s MVT, it suffices to show that $f$ attains a global extremum at some $c\in\l(a,b\r)$, for then $f'\!\l(c\r)=0$. Indeed, either $f$ is constant, whence $f'\!\l(c\r)=0$ for all $c\in\l(a,b\r)$, or not, in which case one of its global extrema is not an endpoint. Observe that $\l[a,b\r]$ is compact, so, by the Extreme Value Theorem, $f$ attains a global extrema at some $c\in\l[a,b\r]$. But then $c\in\l(a,b\r)$, so we are done. The other Mean Value Theorems are then corollaries:

* (Lagrange’s MVT). Consider the function $h:\l[a,b\r]\to\R$ defined by $h\l(x\r)\coloneqq f\l(x\r)-f\l(a\r)-\frac{f\l(b\r)-f\l(a\r)}{b-a}\l(x-a\r)$ for all $x\in\l[a,b\r]$. Observe that $h\l(a\r)=0=h\l(b\r)$, so, by Rolle’s MVT, there exists some $c\in\l(a,b\r)$ such that $h'\!\l(c\r)=0$. But $h'\!\l(c\r)=f'\!\l(c\r)-\frac{f\l(b\r)-f\l(a\r)}{b-a}$, so the result follows.
* (Cauchy’s MVT). Consider the function $h:\l[a,b\r]\to\R$ defined by $h\l(x\r)\coloneqq \l[f\l(b\r)-f\l(a\r)\r]g\l(x\r)-\l[g\l(b\r)-g\l(a\r)\r]f\l(x\r)$ for all $x\in\l[a,b\r]$. Observe that $h\l(a\r)=h\l(b\r)$, so, by Rolle’s MVT, there exists some $c\in\l(a,b\r)$ such that $h'\!\l(c\r)=0$. But $h'\!\l(c\r)=\l[f\l(b\r)-f\l(a\r)\r]g'\!\l(c\r)-\l[g\l(b\r)-g\l(a\r)\r]f'\!\l(c\r)$, so the result follows.<span style="float:right;">$\blacksquare$</span>
