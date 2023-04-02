<div class="topSpace"></div>

Date Created: 28/03/2023 11:00:46
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Riemann integrable implies bounded]], [[Basic properties of Riemann integrable functions]]
Sufficiencies: _Not Applicable_
Equivalences: [[Cauchy Integrability Criterion]], [[Squeeze Theorem (Riemann Integration)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\l[a,b\r]\subseteq\R$ be an integral and consider a function $f:\l[a,b\r]\to\R$. For a fixed tagged partition $\mc{P}$ of $\l[a,b\r]$, the **Riemann sum of $f$ w.r.t $\mc{P}$** is_
$$\begin{equation}
    S\l(f,\mc{P}\r)\coloneqq\sum_{i=1}^{n}f\l(t_i\r)\l(x_i-x_{i-1}\r).
\end{equation}$$
_Letting $\ms{P}$ be the set of all partitions of $\l[a,b\r]$, we say that $f$ is **Riemann integrable on $\l[a,b\r]$** if_
$$\begin{equation}
    \ex L\in\R,\fa\epsilon>0,\ex\delta>0,\fa\mc{P}\in\ms{P}:\|\mc{P}\|<\delta\Rightarrow\l|S\l(f,\mc{P}\r)-L\r|<\epsilon.
\end{equation}$$
_In this case, we write $f\in\RI{\l[a,b\r]}$ and_
$$\begin{equation}
    \int_{a}^{b}f\coloneqq\int_{a}^{b}f\l(x\r)\d x\coloneqq L.
\end{equation}$$

```

**Remark.** By the triangle inequality, it is clear that if $f\in\RI{\l[a,b\r]}$, then such an $L$ is unique.<span style="float:right;">$\blacklozenge$</span>
