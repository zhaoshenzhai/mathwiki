---
mathLink: $\axiunion$
---

<div class="topSpace"></div>

Date Created: 15/01/2022 21:15:56
Tags: #Type/Axiom #Later/Set_Theory

Constructions: [[Union]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_

``` ad-Axiom
title: Axiom.

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Union** is the $\mc{L}$-formula_
$$\begin{equation}
    \axiunion\,\colon\!\Leftrightarrow\fa\mc{A}\ex U\fa a\l(a\in U\Leftrightarrow\ex A\in\mc{A}:a\in A\r).
\end{equation}$$

```

**Remark.** By $\axiext$, such a set $U$ is unique and can thus be called the **union of $\mc{A}$**.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** We may weaken this axiom to
$$\begin{equation}
    \axiunion'\,\colon\!\Leftrightarrow\fa\mc{A}\ex U':\l(\fa A\in\mc{A},\fa a\in A:a\in U'\r).
\end{equation}$$
Here, $U'$ is no longer the union of $\mc{A}$, but rather a superset thereof. The union $U$ of $\mc{A}$ is then defined as
$$\begin{equation}
    U\coloneqq\l\{a\in U'\mid\ex A\in\mc{A}:a\in A\r\}
\end{equation}$$
using $\axispec$.<span style="float:right;">$\blacklozenge$</span>
