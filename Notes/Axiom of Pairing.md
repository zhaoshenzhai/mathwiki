---
mathLink: $\axipairing$
---

<div class="topSpace"></div>

Date Created: 16/01/2022 16:34:42
Tags: #Axiom

Equivalences: _Not Applicable_
Constructions: [[Pair Set]]

``` ad-Axiom
title: Axiom.

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Pairing** is the $\mc{L}$-formula_
$$\begin{equation}
    \axipairing\,\colon\!\Leftrightarrow\fa A\fa B\ex P\l[x\in P\Leftrightarrow\l(x\in A\lor x\in B\r)\r].
\end{equation}$$

```

**Remark.** By $\axiext$, such a set $P$ is unique and can thus be called the **pair set of $A$ and $B$**.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** We may weaken this axiom to
$$\begin{equation}
    \axipairing'\,\colon\!\Leftrightarrow\fa A\fa B\ex P'\l(A\in P'\land B\in P'\r).
\end{equation}$$
Here $P'$ is no longer the pair set of $A$ and $B$, but rather a superset thereof. The pair set $P$ of $A$ and $B$ is then defined as
$$\begin{equation}
    P\coloneqq\l\{x\in P'\mid x\in A\lor x\in B\r\}
\end{equation}$$
using $\axispec$.<span style="float:right;">$\blacklozenge$</span>
