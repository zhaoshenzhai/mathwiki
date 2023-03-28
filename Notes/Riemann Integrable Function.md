<div class="topSpace"></div>

Date Created: 28/03/2023 11:00:46
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Riemann integrable implies bounded]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\l[a,b\r]\subseteq\R$ be an integral and consider a function $f:\l[a,b\r]\to\R$. For a fixed tagged partition $\mc{P}$ of $\l[a,b\r]$, the **Riemann sum of $f$ w.r.t $\mc{P}$** is_
$$\begin{equation}
    S\l(f,\mc{P}\r)\coloneqq\sum_{i=1}^{n}f\l(t_i\r)\l(x_i-x_{i-1}\r).
\end{equation}$$
_We say that $f$ is **Riemann integrable** if there exists some $L\in\R$ such that for all $\epsilon>0$, there exists $\delta>0$ such that if $\|\mc{P}\|<\delta$, then $\l|S\l(f,\mc{P}\r)<L\r|$. In this case, we write $f\in\RI{\l[a,b\r]}$ and_
$$\begin{equation}
    \int_{a}^{b}f\coloneqq\int_{a}^{b}f\l(x\r)\d x\coloneqq L.
\end{equation}$$

```

**Remark.** It is clear, by the triangle inequality, that if $f\in\RI{\l[a,b\r]}$, then such an $L$ is unique.<span style="float:right;">$\blacklozenge$</span>
