---
mathLink: $\H^n$
---

<div class="topSpace"></div>

Date Created: 05/09/2023 12:29:44
Tags: #Type/Example #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Cauchy-Schwarz Inequality]]

``` ad-Example
title: Example.

The <b>$n$-dimensional hyperbolic space</b> is the subspace $\H^n\coloneqq\l\{x\in\R^{n+1}\st\inprod{x}{x}=-1\textrm{ \it{and} } x_{n+1}>0\r\}\subseteq\R^{n+1}$, where $\inprod{\slot}{\slot}$ is the symmetric bilinear form on $\R^{n+1}$ defined by $\inprod{x}{y}\coloneqq-x_{n+1}y_{n+1}+\sum_{i=1}^{n}x_iy_i$, equipped with the metric defined uniquely by $\cosh d\l(x,y\r)=-\inprod{x}{y}$.
* $\tpl{\H^n,d}$ is a uniquely geodesic space with geodesics being hyperbolic segments.
* Any ball in $\H^n$ is convex.

```

<b>Remark.</b> Observe that $\inprod{x}{x}=-1$ implies $x_{n+1}\geq1$. We claim that for every $x,y\in\H^n$, we have $\inprod{x}{y}\leq-1$ and $\inprod{x-y}{x-y}\geq0$, both with equality iff $x=y$.
* Indeed, letting $\|\slot\|$ denote the standard norm on $\R^n$, we have by Cauchy-Schwarz that $\inprod{x}{y}=-x_{n+1}y_{n+1}+\sum_{i=1}^{n}x_iy_i\leq-x_{n+1}y_{n+1}+\|x\|\|y\|$. But since $\inprod{x}{x}=-1$, we see that $\|x\|^2=x_{n+1}^2-1$ and similarly $\|y\|^2=y_{n+1}^2-1$, so $\inprod{x}{y}\leq-x_{n+1}y_{n+1}+\sqrt{\l(x_{n+1}^2-1\r)\l(y_{n+1}^2-1\r)}$. That the right-hand-side is $\leq-1$ is equivalent to $\l(x_{n+1}^2-1\r)\l(y_{n+1}^2-1\r)\leq\l(x_{n+1}y_{n+1}-1\r)^2$, which occurs iff $\l(x_{n+1}+y_{n+1}\r)^2\geq0$. This is true, and equality holds iff $x_{n+1}=y_{n+1}$ and $\tpl{x_1,\dots,x_n}$ and $\tpl{y_1,\dots,y_n}$ are linearly dependent. The latter condition hold iff $x_i=y_i$ for all $1\leq i\leq n$ since $x,y\in\H^n$.
* Furthermore, note that $\inprod{x-y}{x-y}=\inprod{x}{x}+\inprod{y}{y}-2\inprod{x}{y}\geq-1-1+2=0$, with equality iff $x=y$.

Also, note that $\cosh$ admits an inverse on $\arccosh:\l[1,\infty\r)\to\R_0^+$ that is increasing and unbounded above.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof (geodesic metric).</i> 
