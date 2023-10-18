<div class="topSpace"></div>

Date Created: 24/01/2023 11:16:39
Tags: #Type/Definition #Topic/Topology/Later

Types: [[Polish Space]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Separable implies Lindelof]]
Sufficiencies: [[Sequentially compact implies separable]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A topological space $X$ is said to be <b>separable</b> if it admits a countable dense subset.

```

<b>Remark.</b> Separability is hereditary, i.e. if $Y\subseteq X$ is a subspace of a separable space $X$, then $Y$ is separable too. Indeed, let $Q$ be a countably dense subset of $X$. Fix $q\in Q$ and consider the distance $d\l(q,Y\r)\coloneqq\inf_{y\in Y}d\l(q,y\r)$. For each $n\geq1$, let $y_{q,n}\in Y$ be such that $d\l(q,y_{q,n}\r)<d\l(q,Y\r)+1/n$. Set $D\coloneqq\l\{y_{q,n}\in Y\st q\in Q,n\geq1\r\}$, which we claim is a countably dense subset of $Y$. Indeed, that $D$ is countable is clear. To show that it is dense, take $y\in Y$ and $\epsilon>0$. Since $Q$ is dense in $X$, there is some $q\in Q$ such that $d\l(q,y\r)<\epsilon/3$. By construction, there is a large enough $n\in\N$ such that
$$\begin{equation}
    d\l(q,y_{q,n}\r)<d\l(q,Y\r)+\frac{\epsilon}{3}\leq d\l(q,y\r)+\frac{\epsilon}{3}<\frac{2\epsilon}{3}.
\end{equation}$$
The claim then follows from the triangle inequality as $d\l(y,y_{q,n}\r)\leq d\l(q,y\r)+d\l(q,y_{q,n}\r)<\epsilon/3+2\epsilon/3=\epsilon$.<span style="float:right;">$\blacklozenge$</span>
