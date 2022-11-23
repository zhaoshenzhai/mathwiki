---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 03/11/2022 19:59:00
Tags: #Definition #Courses/MATH235

Types: _Not Applicable_
Examples: [[Multiplicative Group of Integers mod n]]
Constructions: _Not Applicble_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{R,+,\cdot,0,1}$ be a ring with unit. An element $u\in R$ is said to be a **unit in $R$** if_
$$\begin{equation}
    \ex r\in R:u\cdot r=1=r\cdot u.
\end{equation}$$
_The **group of units of $R$** is the group $\tpl{R^\times,\cdot}$ where_
$$\begin{equation}
    R^\times\coloneqq\l\{u\in R\mid\ex r\in\R:u\cdot r=1=r\cdot u\r\}
\end{equation}$$
_is the set containing all units in $R$._

```

**Remark.** Observe that $R^\times=R\comp\l\{0\r\}$ iff $R$ is a division ring.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Since $\cdot$ is an associative binary operation on $R$ with an identity, and we restrict to only those elements with a multiplicative inverse, we see that $\tpl{R^\times,\cdot}$ is a group.<span style="float:right;">$\blacklozenge$</span>
