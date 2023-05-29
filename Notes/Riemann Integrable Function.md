<div class="topSpace"></div>

Date Created: 28/03/2023 11:00:46
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Riemann integrable implies bounded]]
Sufficiencies: [[Continuous implies Riemann Integrable]]
Equivalences: [[Lebesgue Integrability Criterion]], [[Cauchy Integrability Criterion]], [[Squeeze Theorem (Riemann Integration)]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\l[a,b\r]\subseteq\R$ be an integral and consider a function $f:\l[a,b\r]\to\R$. For a fixed tagged partition $\mc{P}$ of $\l[a,b\r]$, the **Riemann sum of $f$ w.r.t $\mc{P}$** is
$$\begin{equation}
    S\l(f,\mc{P}\r)\coloneqq\sum_{i=1}^{n}f\l(t_i\r)\l(x_i-x_{i-1}\r).
\end{equation}$$
Letting $\ms{P}$ be the set of all partitions of $\l[a,b\r]$, we say that $f$ is **Riemann integrable on $\l[a,b\r]$** if
$$\begin{equation}
    \ex L\in\R,\fa\epsilon>0,\ex\delta>0,\fa\mc{P}\in\ms{P}:\|\mc{P}\|<\delta\Rightarrow\l|S\l(f,\mc{P}\r)-L\r|<\epsilon.
\end{equation}$$
In this case, we write $f\in\RI{\l[a,b\r]}$ and
$$\begin{equation}
    \int_{a}^{b}f\coloneqq\int_{a}^{b}f\l(x\r)\d x\coloneqq L.
\end{equation}$$

```

<b>Remark.</b> By the triangle inequality, it is clear that if $f\in\RI{\l[a,b\r]}$, then such an $L$ is unique.<span style="float:right;">$\blacklozenge$</span>
