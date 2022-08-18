<div class="topSpace"></div>

Date Created: 28/03/2022 15:27:25
Tags: #Definition

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Kernel; Null Space]]
Generalizations: _Not Applicable_

Properties: [[Solutions of a linear system decompose as sum of particular and null]]
Sufficiencies: [[Homogeneous linear system with more unknowns than equations has non-trivial solutions]]
Equivalences: [[Homogeneous linear system only trivial solution iff columns of coefficient matrix are linearly independent]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field. An $m\times n$ linear system $A\v{x}=\v{b}$ of equations over $K$ is said to be **homogeneous** if $\v{b}=\v{0}$. Otherwise, the system is said to be **inhomogeneous**._

```

**Remark.** The solution set of $A\v{x}=\v{0}$ is $\nullsp A$ since
$$\begin{equation}
    \begin{aligned}
        \v{s}\in\nullsp A&\Leftrightarrow\v{s}\in\ker L_A && \textrm{Definition of $\nullsp$}  \\
        &\Leftrightarrow L_A\l(\v{s}\r)=\v{0} && \textrm{Definition of $\ker$} \\
        &\Leftrightarrow A\v{s}=\v{0}. && \textrm{Definition of $L_A$}
    \end{aligned}
\end{equation}$$
From this and the Dimension Theorem, we see that the dimension of the solution set of $A\v{x}=\v{0}$ is $n-\rank A$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Observe that $\v{0}$ is a solution of any $A\v{x}=\v{0}$, so it is called the **trivial solution** of the system.<span style="float:right;">$\blacklozenge$</span>
