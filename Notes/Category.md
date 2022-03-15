<br />
<br />

Date Created: 12/03/2022 17:41:32
Tags: #Definition #Open

Types: [[Locally-small Category]], [[Groupoid]]
Examples: _Not Applicable_
Constructions: [[Object (Category Theory)]], [[Morphism (Category Theory)]], [[Functor]], [[Opposite Category]], [[Slice Category]], [[Coslice Category]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition (Informal).

_Let $\mc{U}$ be a Grothendieck universe. A **category** is a quadruple $\cat{C}\coloneqq\l\langle\mc{O},\hom,\id,\comp\r\rangle$ consisting of_
* _a $\mc{U}$-moderate set $\mc{O}\subseteq\mc{U}$,_
* _a $\mc{U}$-moderate function_
$$\begin{equation}
    \hom:\mc{O}^2\to\pow\l(\mc{U}\r)\ \ \ \ \textit{mapping}\ \ \ \ \l\langle X,Y\r\rangle\mapsto\hom\l(X,Y\r),
\end{equation}$$
* _a $\mc{U}$-small function_
$$\begin{equation}
    \id:\mc{O}\to\mc{U}\ \ \ \ \textit{mapping}\ \ \ \ X\mapsto\id_X\in\hom\l(X,X\r),
\end{equation}$$
* _and a $\mc{U}$-small function_
$$\begin{equation}
    \comp:\mc{O}^3\to\mc{U}\ \ \ \ \textit{mapping}\ \ \ \ \l\langle X,Y,Z\r\rangle\mapsto\l[
        \begin{aligned}
            \circ:\hom\l(Y,Z\r)\times\hom\l(X,Y\r)&\to\hom\l(X,Z\r)\\
            \l\langle g,f\r\rangle&\mapsto g\circ f
        \end{aligned}
    \r],
\end{equation}$$
* _a class $\obj\l(\cat{C}\r)$ whose members are called **$\cat{C}$-objects**,_
* _a class function $\hom$ assigning to each pair $X,Y\in\obj\l(\cat{C}\r)$ a class $\hom\l(X,Y\r)$ called the **$\cat{C}$-hom-class from $X$ to $Y$**,_
* _a class function $\id$ assigning to each $X\in\obj\l(\cat{C}\r)$ an element $\id_X\in\hom\l(X,X\r)$ called the the **$\cat{C}$-identity on $X$**, and_
* _a class function $\circ$ assigning to each pair $f\in\hom\l(X,Y\r)$ and $g\in\hom\l(Y,Z\r)$, where $X,Y,Z\in\obj\l(\cat{C}\r)$, an element $g\circ f\in\hom\l(X,Z\r)$ called the **$\cat{C}$-composite of $g$ after $f$**,_

_such that, for all $X,Y,Z,W\in\obj\l(\cat{C}\r)$:_
* _$\axicat[1]$ (Associativity)$\bf{.}$ For all $f\in\hom\l(X,Y\r)$, $g\in\hom\l(Y,Z\r)$, and $h\in\hom\l(Z,W\r)$, the following diagram commutes._
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-21_142913/image.svg", width=230></center>

* _$\axicat[2]$ (Identity)$\bf{.}$ For all $f\in\hom\l(X,Y\r)$, the following diagram commutes._
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-09_213021/image.svg", width=230></center>
* _$\axicat[3]$ (Disjoint)$\bf{.}$ If $X\neq Z$ or $Y\neq W$, then $\hom\l(X,Y\r)\cap\hom\l(Z,W\r)=\em$._

```

**Remark.** The phrase $\textrm{`}$consists of the data of$\textrm{'}$ is informal since the $\textrm{`}$quadruple $\cat{C}\coloneqq\l\langle\obj,\hom,\id,\circ\r\rangle\textrm{'}$ is not meant in the set-theoretic sense. To formulate this properly, one needs a theory of classes in which pairs (and hence $n$-tuples) consisting of classes and class functions can be defined.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** $\axicat[3]$ can be $\textrm{`}$forced$\textrm{'}$ to hold since one can replace morphisms $f\in\hom\l(X,Y\r)$ with the triple $\l\langle f,X,Y\r\rangle$; this is done, for example, in $\cat{Set}$. Thus $\axicat[3]$ can be disregarded when verifying the axioms of a category.<span style="float:right;">$\blacklozenge$</span>
