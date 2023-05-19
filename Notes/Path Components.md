<div class="topSpace"></div>

Date Created: 19/05/2023 14:50:45
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Fundamental Theorem of Equivalence Relations]]

``` ad-Definition
title: Definition.

_Let $X$ be a topological space. The **path components of $X$** is the partition $\pi_0\l(X\r)$ induced by the equivalence relation $x\sim y$ iff there exists a path $\gamma:x\rightsquigarrow y$._

```

**Remark.** This induces a functor $\pi_0:\cattop\to\catset$ as follows. If $f:X\to Y$ is continuous, then $\pi_0\l(f\r):\pi_0\l(X\r)\to\pi_0\l(Y\r)$ takes a path component $C\subseteq X$ to the unique path component of $Y$ containing $f\l(C\r)$. It is clear that $\pi_0$ preserves identities and compositions.<span style="float:right;">$\blacklozenge$</span>
