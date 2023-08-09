<div class="topSpace"></div>

Date Created: 16/01/2022 16:34:42
Tags: #Type/Axiom #Topic/Set_Theory/Later

Constructions: [[Binary Relation]], [[Cartesian Product]]
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

<b>Remark.</b> By Extensionality, such a set $P$ is unique. It is called the <b>pair set of $A$ and $B$</b>, and is denoted $\l\{A,B\r\}$.
* The <b>singleton of $A$</b> is the pair set $\l\{A\r\}\coloneqq\l\{A,A\r\}$.
* The <b>ordered pair of $A$ and $B$</b> is the set $\tpl{A,B}\coloneqq\l\{\l\{A\r\},\l\{A,B\r\}\r\}$. Two ordered pairs $\tpl{A,B}$ and $\tpl{C,D}$ are equal iff $A=B$ and $C=D$.<span style="float:right;">$\blacklozenge$</span>
