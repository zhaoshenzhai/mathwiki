<div class="topSpace"></div>

Date Created: 16/01/2022 16:34:42
Tags: #Type/Axiom #Topic/Set_Theory/Later

Constructions: [[Pair Set]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>

``` ad-Axiom
title: Axiom.

Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The <b>Axiom of Pairing</b> is the $\mc{L}$-formula
$$\begin{equation}
    \fa A\fa B\ex P\l[x\in P\Leftrightarrow\l(x\in A\lor x\in B\r)\r].
\end{equation}$$

```

<b>Remark.</b> By Extensionality, such a set $P$ is unique and can thus be called the <b>pair set of $A$ and $B$</b>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We may weaken this axiom to
$$\begin{equation}
    \fa A\fa B\ex P'\l(A\in P'\land B\in P'\r).
\end{equation}$$
Here $P'$ is no longer the pair set of $A$ and $B$, but rather a superset thereof. The pair set $P$ of $A$ and $B$ is then defined as
$$\begin{equation}
    P\coloneqq\l\{x\in P'\st x\in A\lor x\in B\r\}
\end{equation}$$
using Specification.<span style="float:right;">$\blacklozenge$</span>
