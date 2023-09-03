---
mathLink: $S^n$
---

<div class="topSpace"></div>

Date Created: 02/09/2023 15:56:56
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

The <b>$n$-dimensional sphere</b> is the subspace $S^n\coloneqq\l\{x\in\R^{n+1}\st\|x\|=1\r\}\subseteq\R^{n+1}$ equipped with the <b>angular</b> metric $d\l(x,y\r)\coloneqq\arccos\inprod{x}{y}$.
* $\tpl{S^n,d}$ is a geodesic metric space with geodesics being minimal great arcs. If $d\l(x,y\r)<\pi$, then there is a unique geodesic between $x$ and $y$.
* Any open ball of radius $r\leq\pi/2$ is convex, and any closed ball of radius $r<\pi/2$ is convex.

```

<i>Proof.</i> That $d$ is positive-definite and symmetric is easy to see. Indeed, $d\l(x,y\r)=0$ iff $\inprod{x}{y}=1$. But $\l|\inprod{x}{y}\r|\leq\|x\|\|y\|=1$, so equality holds iff $x=y$. For the triangle inequality, we first define <i>great circles</i> and <i>minimal great arcs</i>.
* A <i>great circle</i> in $S^n$ is the intersection between $S^n$ and a $2$-dimensional linear subspace $H\subgrp\R^{n+1}$. A great circle determined by $\span\l\{x,v\r\}$, where we w.l.o.g. assume $v$ is orthogonal to $x$, admits a parametrization $c:\l[0,2\pi\r]\to S^n$ by $c\l(t\r)\coloneqq\l(\cos t\r)x+\l(\sin t\r)v$. The restriction of $c$ to $\l[0,a\r]$ for any $a\leq\pi$ is called a <i>minimal great arc</i>. Since $d\l(c\l(t\r),c\l(t'\r)\r)=\arccos\inprod{\cos tx+\sin tv}{\cos t'x+\sin t'v}=\arccos\cos\l(t-t'\r)=\l|t-t'\r|$, we see that $c$ is an isometric embedding and hence a geodesic segment between $x=c\l(0\r)$ and $y\coloneqq c\l(a\r)$. Since $v$ can be chosen so that $c\l(a\r)$ is arbitrary, this shows that $\tpl{S^n,d}$ is a geodesic metric space. Note that if $x$ and $y$ are not antipodal, then it spans a <i>unique</i> subspace and hence determines a unique geodesic between $x$ and $y$.

The <i>spherical angle</i> between two minimal great arcs starting at a common point $x$ with initial vectors $u$ and $v$ is $\gamma_{u,v}\coloneqq\arccos\inprod{u}{v}$. A <i>triangle</i> in $S^n$ is the data of three distinct points $x,y,z\in S^n$ and three minimal great arcs between them. Letting $a\coloneqq d\l(y,z\r)$, $b\coloneqq d\l(x,z\r)$, and $c\coloneqq d\l(x,y\r)$, we have the <i>spherical law of cosines</i> as $\cos c=\cos a\cos b+\sin a\sin b\cos\gamma_{u,v}$ where $\gamma_{u,v}$ is the spherical angle of the minimal great arcs of the triangle starting at $z$. Indeed, we compute
$$\begin{equation}
    \cos c=\cos d\l(x,y\r)=\inprod{x}{y}=\inprod{\cos bz+\sin bu}{\cos bz+\sin bv}=\cos a\cos b+\sin a\sin b\inprod{u}{v},
\end{equation}$$
from which the result follows by noting that $\inprod{u}{v}=\cos\gamma_{u,v}$. We now prove the triangle inequality for the triangle considered above. Since $\cos$ is a strictly decreasing function on $\l[0,\pi\r]$ from $1$ to $-1$, the function $f:\gamma\mapsto\cos a\cos b+\sin a\sin b\cos\gamma$ decreases from $\cos\l(b-a\r)$ to $\cos\l(a+b\r)$. Thus $\cos c\geq\cos\l(a+b\r)$ by the spherical law of cosines, so $a+b\leq c$. Note that equality holds iff $\gamma=\pi$ (when $f$ achieves its minimum) and $a+b\leq\pi$ (when $\cos$ is decreasing), which is precisely when $z$ lies in the minimal great arc joining $x$ and $y$.

Finally, let $r<\pi/2$ and consider the closed ball $\bar{B}\l(z,r\r)$ for any $z\in S^n$. If $x,y\in\bar{B}\l(z,r\r)$, then $d\l(x,y\r)<\pi$ and so there is a unique minimal great arc joining $x$ and $y$. Any point on this arc can be written as $\lambda x+\mu y$ for some $\lambda,\mu\geq0$ and $\lambda+\mu\geq1$ (write it as either $\cos tx+\sin ty$ or $\sin tx+\cos ty$, and note that $\cos t+\sin t\geq1$ if $t\in\l[0,\pi/2\r]$). By definition, a point $z'$ lies in $\bar{B}\l(z,r\r)$ iff $\inprod{z'}{z}\geq\cos r$, so since $\lambda+\mu\geq1$, we see that $\inprod{\lambda x+\mu y}{z}=\lambda\inprod{x}{z}+\mu\inprod{y}{z}\geq\l(\lambda+\mu\r)r\geq\cos r\geq\cos r$. Thus $\lambda x+\mu y\in\bar{B}\l(z,r\r)$, as desired.<span style="float:right;">$\blacksquare$</span>
