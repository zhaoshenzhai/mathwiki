<br />
<br />

Date Created: 06/03/2022 13:32:19
Tags: #Definition #Open 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_The **theory of Zermelo-Fraenkel sets with Choice** is the theory $\axizfc$ specified by the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$ and the axioms_
* _$\axizfc[Ext]\bf{.}$ $\fa x\fa y\l[\fa u\l(u\in x\Leftrightarrow u\in y\r)\Rightarrow x=y\r]$._
* _$\axizfc[Prg]\bf{.}$ $\fa x\fa y\ex z\l(x\in z\land y\in z\r)$_
* _$\axizfc[Unn]\bf{.}$ $\fa x\ex z\fa u\fa v\l[\l(u\in v\land v\in x\r)\Rightarrow u\in z\r]$._
* _$\axizfc[Pow]\bf{.}$ $\fa x\ex z\fa v\l[\fa u\l(u\in v\Rightarrow u\in x\r)\Rightarrow v\in z\r]$._
* _$\axizfc[Inf]\bf{.}$ $\ex z\l[\l[\ex e\l(\fa x\lnot\l(x\in e\r)\land e\in z\r)\r]\land\l[\fa y\l(y\in z\Rightarrow\ex s\l(\fa x\l(x\in s\Leftrightarrow x\in y\lor x=y\r)\land s\in z\r)\r)\r]\r].
$._
* _$\axizfc[Fdn]\bf{.}$_
* _$\axizfc[Cho]\bf{.}$_
* _$\axizfc[Spc]\bf{.}$ For any $\mc{L}$-logical formula $\phi\l(x\r)$ without $z$ free, _
$$\begin{equation}
    \fa v\ex z\fa x\l[x\in z\Leftrightarrow\l(x\in v\land\phi\l(x\r)\r)\r].
\end{equation}$$
* _$\axizfc[Rpl]\bf{.}$ For any $\mc{L}$-logical formula $\phi\l(x,y\r)$ without $z$ free, _
$$\begin{equation}
    \fa v\l[\fa x\l[x\in v\Rightarrow\ex!y\l(\phi\l(x,y\r)\r)\r]\Rightarrow\l[\ex z\fa x\l(x\in v\Rightarrow\ex y\l(y\in z\land\phi\l(x,y\r)\r)\r)\r]\r].
\end{equation}$$

```

**Remark.** We can quantify $\textrm{`}$within sets$\textrm{'}$; that is, for any set $x$ and formula $\phi\l(u\r)$, write
* $\l(\fa u\in x\r)\phi\l(u\r)$ or $\fa u\in x:\phi\l(u\r)$ for the formula $\fa u\l[u\in x\Rightarrow\phi\l(u\r)\r]$, and write
* $\l(\ex u\in x\r)\phi\l(u\r)$ or $\ex u\in x:\phi\l(u\r)$ for the formula $\ex u\l[u\in x\land\phi\l(u\r)\r]$.<span style="float:right;">$\blacklozenge$</span>
