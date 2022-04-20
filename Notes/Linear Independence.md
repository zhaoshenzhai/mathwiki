<br />
<br />

Date Created: 04/04/2022 19:55:14
Tags: #Definition #Closed

Types: [[Basis (Linear Algebra)]]
Examples: _Not Applicable_
Constructions: [[Linear Dependence]]
Generalizations: _Not Applicable_

Properties: [[Linearly independent subset cannot contain the zero vector]], [Finite spanning set $\Rightarrow$ any linearly independent set is no larger](Finite%20spanning%20set%20implies%20any%20linearly%20independent%20set%20is%20no%20larger.md)
Sufficiencies: _Not Applicable_
Equivalences: [[Unique Representation Theorem (Linear Algebra)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a vector space $V$ over $K$. A subset $S\subseteq V$ is said to be **linearly independent** if the only vanishing linear combination of every finite subset of $S$ is the trivial one. Formally, if_
$$\begin{equation}
    \fa n\in\N^\ast,\fa s_1,\dots,s_n\in S,\fa\alpha_1,\dots,\alpha_n\in K:\l(\sum_{i=1}^n\alpha_is_i=0_V\Rightarrow\alpha_1=\cdots=\alpha_n=0\r).
\end{equation}$$

```

**Remark.** Note that the vectors $s_1,\dots,s_n\in S$ must all be distinct; if not, consider $S=\l\{s\r\}$ with $s_1=s_2=s$ and observe that the non-trivial linear combination
$$\begin{equation}
    1\cdot s_1+\l(-1\r)\cdot s_2=0_V
\end{equation}$$
vanishes. Clearly, this is not intended.<span style="float:right;">$\blacklozenge$</span>
