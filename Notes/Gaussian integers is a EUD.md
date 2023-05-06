---
mathLink: $\Z\l[i\r]$ is a EUD
---

<div class="topSpace"></div>

Date Created: 09/01/2023 15:40:46
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The Gaussian integers $\Z\l[i\r]$ under the Euclidean function $N\l(z\r)\coloneqq z\bar{z}$ is a EUD._

```

_Proof_. Take $x,y\in\Z\l[i\r]$ with $y\neq0$, and consider $x/y=\alpha+\beta i\in\C$ for some $\alpha,\beta\in\R$. Choose $a,b\in\Z$ with $\l|a-\alpha\r|\leq1/2$ and $\l|b-\beta\r|\leq1/2$, and set $q\coloneqq a+bi\in\Z\l[i\r]$ and $r\coloneqq x-qy\in\Z\l[i\r]$. Observe then that $x=qy+r$ and that
$$\begin{equation}
    N\l(r\r)=\l|x-qy\r|^2=\l|y^2\r|\l|\frac{x}{y}-q\r|^2=\l|y^2\r|\l|\l(a-\alpha\r)+\l(b-\beta\r)i\r|^2\leq\l|y^2\r|\l(\frac{1}{4}+\frac{1}{4}\r)<\l|y^2\r|=N\l(y\r).\qedin
\end{equation}$$
