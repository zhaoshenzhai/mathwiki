<br />
<br />

Date Created: 21/02/2022 13:22:50
Tags: #Definition #Open 

Types: [[Thin Category]]
Examples: [[Category of Sets]], [[Category of Relations]]
Constructions: [[Morphism (Category Theory)]], [[Functor]], [[Opposite Category]], [[Slice Category]], [[Coslice Category]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition (Informal).

_A **category** $\cat{C}$ consists of the data of_
* _a class $\obj\l(\cat{C}\r)$ whose members are called **$\cat{C}$-objects**,_
* _for all $X,Y\in\obj\l(\cat{C}\r)$, a set $\hom\l(X,Y\r)$ called the **$\cat{C}$-hom-set from $X$ to $Y$**,_
* _for all $X\in\obj\l(\cat{C}\r)$, an element $\id_X\in\hom\l(X,X\r)$ called the the **$\cat{C}$-identity on $X$**, and_
* _for all $X,Y,Z\in\obj\l(\cat{C}\r)$ and all $f\in\hom\l(X,Y\r)$ and $g\in\hom\l(Y,Z\r)$, an element $g\circ f\in\hom\l(X,Z\r)$ called the **$\cat{C}$-composite of $g$ after $f$**,_

_such that, for all $X,Y,Z,W\in\obj\l(\cat{C}\r)$:_
* $\axicat[1]\bf{.}$ _Composition is associative: For all $f\in\hom\l(X,Y\r)$, $g\in\hom\l(Y,Z\r)$, and $h\in\hom\l(Z,W\r)$, the following diagram commutes._
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-21_142913/image.svg", width=230></center>

* $\axicat[2]\bf{.}$ _Composition with identities preserve functions: For all $f\in\hom\l(X,Y\r)$, the following diagram commutes._
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-09_213021/image.svg", width=230></center>
* $\axicat[3]\bf{.}$ _Morphisms are pairwise disjoint: If $X\neq Z$ or $Y\neq W$, then $\hom\l(X,Y\r)\cap\hom\l(Z,W\r)=\em$._


```

**Remark.** The phrase $\textrm{`}$consists of the data of$\textrm{'}$ is informal since the $\textrm{`}$quadruple $\cat{C}\coloneqq\l\langle\obj,\hom,\id,\circ\r\rangle\textrm{'}$ is not meant in the set-theoretic sense ($\obj$ need not be, and in general is not, a set). To formulate this properly, one needs a theory of classes in which pairs (and hence $n$-tuples) can be defined.<span style="float:right;">$\blacklozenge$</span>

**Remark.** $\axicat[3]$ can be $\textrm{`}$forced$\textrm{'}$ to hold since one can replace morphisms $f\in\hom\l(X,Y\r)$ with the triple $\l\langle f,X,Y\r\rangle$; this is done, for example, in $\cat{Set}$. Thus $\axicat[3]$ can be disregarded when verifying the axioms of a category.<span style="float:right;">$\blacklozenge$</span>
