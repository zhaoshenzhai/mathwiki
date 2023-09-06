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

The <b>$n$-dimensional hyperbolic space</b> is the set $\H^n\coloneqq\l\{x\in\R^{n+1}\st\inprod{x}{x}=-1,x_{n+1}>0\r\}$ equipped with the metric $d:\H^n\times\H^n\to\R$ defined uniquely by $\cosh d\l(x,y\r)=-\inprod{x}{y}$, where $\inprod{\slot}{\slot}$ is the symmetric bilinear form on $\R^{n+1}$ defined by $\inprod{x}{y}\coloneqq-x_{n+1}y_{n+1}+\sum_{i=1}^{n}x_iy_i$.
* $\tpl{\H^n,d}$ is a uniquely geodesic space with geodesics being hyperbolic segments.
* Any ball in $\H^n$ is convex.

```

<b>Remark.</b> Observe that $\inprod{x}{x}=-1$ implies $x_{n+1}\geq1$, and that $\cosh$ admits an inverse on $\arccosh:\l[1,\infty\r)\to\R_0^+$ that is increasing and unbounded above. We claim that for every $x,y\in\H^n$, we have $\inprod{x}{y}\leq-1$ and $\inprod{x-y}{x-y}\geq0$, both with equality iff $x=y$.
* Indeed, letting $\|\slot\|$ denote the standard norm on $\R^n$, we have by Cauchy-Schwarz that $\inprod{x}{y}=-x_{n+1}y_{n+1}+\sum_{i=1}^{n}x_iy_i\leq-x_{n+1}y_{n+1}+\|x\|\|y\|$. But since $\inprod{x}{x}=-1$, we see that $\|x\|^2=x_{n+1}^2-1$ and similarly $\|y\|^2=y_{n+1}^2-1$, so $\inprod{x}{y}\leq-x_{n+1}y_{n+1}+\sqrt{\l(x_{n+1}^2-1\r)\l(y_{n+1}^2-1\r)}$. That the right-hand-side is $\leq-1$ is equivalent to $\l(x_{n+1}^2-1\r)\l(y_{n+1}^2-1\r)\leq\l(x_{n+1}y_{n+1}-1\r)^2$, which occurs iff $\l(x_{n+1}+y_{n+1}\r)^2\geq0$. This is true, and equality holds iff $x_{n+1}=y_{n+1}$ and $\tpl{x_1,\dots,x_n}$ and $\tpl{y_1,\dots,y_n}$ are linearly dependent. The latter condition hold iff $x_i=y_i$ for all $1\leq i\leq n$ since $x,y\in\H^n$.
* Furthermore, note that $\inprod{x-y}{x-y}=\inprod{x}{x}+\inprod{y}{y}-2\inprod{x}{y}\geq-1-1+2=0$, with equality iff $x=y$.

This shows that the distance $d$ is well-defined. Lastly, we claim that for all $x\in\H^n$, the form $\inprod{\slot}{\slot}$ restricted to $x^\perp$ is positive-definite. Indeed, if $0\neq v\in x^\perp$ is such that $\inprod{v}{v}\leq0$, then they are linearly independent and hence span a $2$-dimensional subspace $V$ where $\inprod{\slot}{\slot}$ is represented by the matrix $\diag\l(-1,\leq0\r)$. But $\inprod{\slot}{\slot}$ is positive-definite on the subspace $\R^n\subset\R^{n+1}$ spanned by the first $n$ basis vectors, and since its intersection with $V$ is non-trivial, we have a contradiction.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof (geodesic metric).</i> That $d$ is positive-definite and symmetric is easy to see. Indeed, $d\l(x,y\r)=0$ iff $\inprod{x}{y}=-1$, which occurs iff $x=y$. For the triangle inequality, we first define <i>hyperbolic segments</i>.
* Given $x\in\H^n$ and a vector $v\in x^\perp$ with $\inprod{v}{v}=1$, the <i>hyperbolic segment</i> starting at $x$ with initial vector $v$ is the curve $c:\l[0,a\r]\to\H^n$ for some $a\geq0$ defined by $c\l(t\r)\coloneqq\cosh tx+\sinh tv$. Observe that $\inprod{c\l(t\r)}{c\l(t\r)}=\cosh^2t\inprod{x}{x}+\sinh^2t\inprod{v}{v}=-1$, so $c\l(t\r)\in\H^n\cap\span\l\{x,v\r\}$. Also, note that
$$\begin{equation}
    d\l(c\l(t\r),c\,(t')\r)=\arccosh\l(-\inprod{\cosh tx+\sinh tv}{\cosh t'x+\sinh t'v}\r)=\arccosh\l(-\cosh t\cosh t'\inprod{x}{x}-\sinh t\sinh t'\inprod{v}{v}\r)=\arccosh\l(\cosh\l(t-t'\r)\r)=\l|t-t'\r|,
\end{equation}$$
so $c$ is an isometric embedding and hence a geodesic segment between $x=c\l(0\r)$ and $y\coloneqq c\l(a\r)$ $-$ if $d$ is a metric in the first place. Note that for any $x\neq y\in\H^n$, we can take $v\coloneqq y+\inprod{y}{x}x$, for then $\inprod{v}{x}=0$ and hence $v\in x^\perp$. Since $\inprod{v}{v}>0$, we can rescale it so that $\inprod{v}{v}=1$, which gives us a hyperbolic segment from $x$ to $y$ with $a\coloneqq d\l(x,y\r)$.
