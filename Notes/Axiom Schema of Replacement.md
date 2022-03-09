<br />
<br />

Date Created: 20/01/2022 10:03:21
Tags: #Axiom #Open 

Equivalences: _Not Applicable_
Constructions: [[Zermelo-Fraenkel Set Theory with Choice]], [[Replacement Image]]

``` ad-Axiom
title: Axiom Schema.

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$ and let $\phi\l(x,y\r)$ be any $\mc{L}$-logical formula without $z$ free. The **Axiom Schema of Replacement** is the $\mc{L}$-scheme_
$$\begin{equation}
    \fa v\l[\fa x\l[x\in v\Rightarrow\ex!y\l(\phi\l(x,y\r)\r)\r]\Rightarrow\l[\ex z\fa x\l(x\in v\Rightarrow\ex y\l(y\in z\land\phi\l(x,y\r)\r)\r)\r]\r].
\end{equation}$$

```

**Remark.** If $\phi\l(x,y\r)$ is thought of as a class function and $\dom\phi\l(x,y\r)$ is some set $v$, then Replacement asserts that the image of the function $f$ defined by $\phi\l(x,y\r)$ is a set.<span style="float:right;">$\blacklozenge$</span>
