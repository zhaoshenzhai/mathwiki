<div class="topSpace"></div>

Date Created: 21/02/2022 15:18:46
Tags: #Type/Definition #Later/Category_Theory

Types: [[Invertible Morphism]], [[Endomorphism (Category Theory)]], [[Monomorphism (Category Theory)]], [[Epimorphism (Category Theory)]]
Examples: [[Identity Morphism]], [[Function]], [[Linear Map]], [[Group Homomorphism]], [[Ring Homomorphism]], [[Module Homomorphism]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix $X,Y\in\Obj\l(\cat{C}\r)$. A **$\cat{C}$-morphism from $X$ to $Y$** is an element $f\in\Hom\l(X,Y\r)$.

```

<b>Remark.</b> If $f\in\Hom\l(X,Y\r)$, write $f:X\to Y$ and define $\dom f\coloneqq X$ and $\cdm f\coloneqq Y$. Other $\textrm{`}$functional$\textrm{'}$ notations (like $\mapsto$) need not apply.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If there exist $X,Y\in\Obj\l(\cat{C}\r)$ such that $f$ is a morphism from $X$ to $Y$, write $f\in\Hom\l(\cat{C}\r)$. In other words, write, <i>informally</i>,
$$\begin{equation}
    \Hom\l(\cat{C}\r)\coloneqq\bigcup\l\{\Hom\l(X,Y\r)\mid X,Y\in\Obj\l(\cat{C}\r)\r\}.\exqedin
\end{equation}$$
