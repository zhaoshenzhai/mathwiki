<div class="topSpace"></div>

Date Created: 17/01/2022 19:08:57
Tags: #Type/Axiom #Later/Set_Theory

Constructions: [[Power Set]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_

``` ad-Axiom
title: Axiom.

Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Power Set** is the $\mc{L}$-formula
$$\begin{equation}
    \fa A\ex P\fa S\l(S\in P\Leftrightarrow\fa s\in S:s\in A\r).
\end{equation}$$

```

**Remark.** By Extensionality, such a set $P$ is unique and can thus be called the **power set of $A$**.

---

**Remark.** Letting $\mc{L}'\coloneqq\mc{L}\cup\l\{\subseteq\r\}$ where $\subseteq$ is a binary relation interpreted as the subset relation, we can rewrite Power Set as the $\mc{L}'$-formula
$$\begin{equation}
    \fa A\ex P\fa S\l(S\in P\Leftrightarrow S\subseteq A\r).\exqedin
\end{equation}$$

---

**Remark.** We may weaken this axiom to
$$\begin{equation}
    \fa A\ex P'\fa S\l(S\subseteq A\Rightarrow S\in P'\r).
\end{equation}$$
Here $P'$ is no longer the power set of $A$, but rather a superset thereof. Thus power set $P$ of $A$ is then defined as
$$\begin{equation}
    P\coloneqq\l\{S\in P'\mid S\subseteq A\r\}
\end{equation}$$
using Specification.<span style="float:right;">$\blacklozenge$</span>
