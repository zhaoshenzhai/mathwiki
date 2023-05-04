<div class="topSpace"></div>

Date Created: 04/05/2022 17:13:39
Tags: #Definition #Topics/Group_Theory

Types: _Not Applicable_
Examples: [[Cyclic Group]], [[Additive Group of Integers mod n]]
Constructions: [[Ring]], [[Vector Space]]
Generalizations: [[Module]]

Properties: _Not Applicable_
Sufficiencies: [[Isomorphic groups Abelian iff Abelian]]
Equivalences: [[Abelian iff inversion is a homomorphism]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_A group $\tpl{G,\ast}$ is said to be **Abelian** if the binary operation $\ast$ commutes._

```

**Remark.** Every Abelian group $M$ can be equipped with a $\Z$-module structure. Indeed, for the $\Z$-module axioms to be satisfied, we need to define, for all $m\in M$, the $\Z$-action on $m$ by $0m\coloneqq0$,
$$\begin{equation}
    nm\coloneqq\underbrace{m+\cdots+m}_{\mathclap{n\textrm{ times}}}
\end{equation}$$
for all $n\in\Z^+$, and $nm\coloneqq\l(-n\r)m$ for every $n\in\Z^-$. Conversely, since every $\Z$-module is an Abelian group, we see that the two notions coincide.<span style="float:right;">$\blacklozenge$</span>
