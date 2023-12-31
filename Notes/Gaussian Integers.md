---
mathLink: $\Z\l[i\r]$
---

<div class="topSpace"></div>

Date Created: 09/01/2023 10:49:29
Tags: #Type/Definition #Topic/Rings_and_Modules/Ring_Theory

Abstractions: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Example
title: Example.

The <b>Gaussian integers</b> is the subring $\Z\l[i\r]\coloneqq\l\{a+bi\in\C\st a,b\in\Z\r\}$ of $\C$.
* Under the valuation $v\l(z\r)\coloneqq z\bar{z}$, the Gaussian integers is a Euclidean domain.

```

<i>Proof.</i> Take $x,y\in\Z\l[i\r]$ with $y\neq0$, and consider $x/y=\alpha+\beta i\in\C$ for some $\alpha,\beta\in\R$. Choose $a,b\in\Z$ with $\l|a-\alpha\r|\leq1/2$ and $\l|b-\beta\r|\leq1/2$, and set $q\coloneqq a+bi\in\Z\l[i\r]$ and $r\coloneqq x-qy\in\Z\l[i\r]$. Observe then that $x=qy+r$ and that
$$\begin{equation}
    v\l(r\r)=\l|x-qy\r|^2=\l|y^2\r|\l|\frac{x}{y}-q\r|^2=\l|y^2\r|\l|\l(a-\alpha\r)+\l(b-\beta\r)i\r|^2\leq\l|y^2\r|\l(\frac{1}{4}+\frac{1}{4}\r)<\l|y^2\r|=v\l(y\r).\qedin
\end{equation}$$
