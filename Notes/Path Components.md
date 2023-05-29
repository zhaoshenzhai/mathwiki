<div class="topSpace"></div>

Date Created: 19/05/2023 14:50:45
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Fundamental Theorem of Equivalence Relations]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. The **path components of $X$** is the partition $\pi_0\l(X\r)$ induced by the equivalence relation $x\sim y$ iff there exists a path $\gamma:x\rightsquigarrow y$.

```

<b>Remark.</b> This induces a functor $\pi_0:\cattop\to\catset$ as follows. If $f:X\to Y$ is continuous, then $\pi_0\l(f\r):\pi_0\l(X\r)\to\pi_0\l(Y\r)$ takes a path component $C\subseteq X$ to the unique path component of $Y$ containing $f\l(C\r)$. It is clear that $\pi_0$ preserves identities and compositions.<span style="float:right;">$\blacklozenge$</span>
