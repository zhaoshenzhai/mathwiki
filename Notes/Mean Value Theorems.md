<div class="topSpace"></div>

Date Created: 29/12/2022 23:23:37
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Fermat's Theorem on Stationary Points]], [[Heine-Borel Theorem]], [[Extreme Value Theorem]], [[Differentiation Theorems in R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Mean Value Theorems).

Let $a,b\in\R$ and let $f,g:\l[a,b\r]\to\R$ be continuous on $\l[a,b\r]$ and differentiable on $\l(a,b\r)$. Then the following $\textrm{`}$Mean Value Theorems$\textrm{'}$ hold:
* (Rolle$\textrm{'}$s MVT): If $f\l(a\r)=f\l(b\r)$, then there exists some $c\in\l(a,b\r)$ such that $f'\l(c\r)=0$.
* (Lagrange$\textrm{'}$s MVT): There exists some $c\in\l(a,b\r)$ such that $f\l(b\r)-f\l(a\r)=f'\l(c\r)\l(b-a\r)$.
* (Cauchy$\textrm{'}$s MVT): There exists some $c\in\l(a,b\r)$ such that $\l[f\l(b\r)-f\l(a\r)\r]g'\l(c\r)=\l[g\l(b\r)-g\l(a\r)\r]f'\l(c\r)$.

```

**Remark.** Lagrange$\textrm{'}$s MVT follows from Cauchy$\textrm{'}$s MVT by setting $g\l(x\r)\coloneqq x$ for all $x\in\l[a,b\r]$, but we give a separate proof here.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* (Rolle$\textrm{'}$s MVT): It suffices to show that $f$ attains a global extremum at some $c\in\l(a,b\r)$, for then $f'\l(c\r)=0$. Indeed, either $f$ is constant, whence $f'\l(c\r)=0$ for all $c\in\l(a,b\r)$, or not, in which case one of its global extrema is not an endpoint. Observe that $\l[a,b\r]$ is compact, so, by the Extreme Value Theorem, $f$ attains a global extrema at some $c\in\l[a,b\r]$. But then $c\in\l(a,b\r)$, so we are done.

* (Lagrange$\textrm{'}$s MVT): Consider the function $h:\l[a,b\r]\to\R$ defined by
$$\begin{equation}
    h\l(x\r)\coloneqq f\l(x\r)-f\l(a\r)-\frac{f\l(b\r)-f\l(a\r)}{b-a}\l(x-a\r)
\end{equation}$$
for all $x\in\l[a,b\r]$. Observe that $h\l(a\r)=0=h\l(b\r)$, so, by Rolle$\textrm{'}$s MVT, there exists some $c\in\l(a,b\r)$ such that $h'\l(c\r)=0$. But
$$\begin{equation}
    h'\l(c\r)=f'\l(c\r)-\frac{f\l(b\r)-f\l(a\r)}{b-a},
\end{equation}$$
so the result follows.
* (Cauchy$\textrm{'}$s MVT): Consider the function $h:\l[a,b\r]\to\R$ defined by
$$\begin{equation}
    h\l(x\r)\coloneqq \l[f\l(b\r)-f\l(a\r)\r]g\l(x\r)-\l[g\l(b\r)-g\l(a\r)\r]f\l(x\r)
\end{equation}$$
for all $x\in\l[a,b\r]$. Observe that $h\l(a\r)=h\l(b\r)$, so, by Rolle$\textrm{'}$s MVT, there exists some $c\in\l(a,b\r)$ such that $h'\l(c\r)=0$. But
$$\begin{equation}
    h'\l(c\r)=\l[f\l(b\r)-f\l(a\r)\r]g'\l(c\r)-\l[g\l(b\r)-g\l(a\r)\r]f'\l(c\r),
\end{equation}$$
so the result follows.<span style="float:right;">$\blacksquare$</span>
