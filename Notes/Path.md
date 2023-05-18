<div class="topSpace"></div>

Date Created: 17/05/2023 20:04:52
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Homotopy of Paths]], [[Path-connected Space]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $X$ be a topological space and fix $x_0,x_1\in X$. A **path from $x_0$ to $x_1$** is a continuous map $\gamma:\l[0,1\r]\to X$ such that $\gamma\l(0\r)=x_0$ and $\gamma\l(1\r)=x_1$, which we denote pictorially by $x_0\overset{\gamma}{\rightsquigarrow}x_1$._

```

**Remark.** If $x_0\coloneqq\gamma\l(0\r)=\gamma\l(1\r)$, then $\gamma$ is said to be **closed**, or a **loop at $x_0$**. Equivalently, a loop is a continuous map $\gamma:S^1\to X$, since $S^1$ is the quotient space of $\l[0,1\r]$ when $0\sim1$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If $\gamma_0,\gamma_1:\l[0,1\r]\to X$ are such that $\gamma_0\l(1\r)=\gamma_1\l(0\r)$, then the **concatenation of $\gamma_0$ with $\gamma_1$** is the path $\gamma_0\ast\gamma_1:\l[0,1\r]\to X$ defined by
$$\begin{equation}
    \l(\gamma_0\ast\gamma_1\r)\l(t\r)\coloneqq
    \begin{dcases}
        \gamma_0\l(2t\r) & \textrm{if}\ \ 0\leq t\leq1/2 \\
        \gamma_1\l(2t-1\r) & \textrm{if}\ \ 1/2\leq t\leq1,
    \end{dcases}
\end{equation}$$
which is clearly continuous. The **inverse path of $\gamma_0$** is the path $\gamma_0^-$ defined by $\gamma_0^-\l(t\r)\coloneqq\gamma_0\l(1-t\r)$ for all $t\in\l[0,1\r]$.<span style="float:right;">$\blacklozenge$</span>
