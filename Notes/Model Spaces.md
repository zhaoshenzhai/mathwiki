<div class="topSpace"></div>

Date Created: 15/09/2023 18:24:39
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Sphere]], [[Hyperbolic Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Model spaces are geodesic]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix $n\geq1$ and $\kappa\in\R$. The <b>model space</b> $M^n_\kappa$ is the unique complete, simply connected, Riemannian $n$-manifold of constant sectional curvature $\kappa$.

```

<b>Remark.</b> We present some standard constructions in the cases for $\kappa=0,1,-1$, from which all other cases follow by rescaling the metric by $1/\sqrt{\pm\kappa}$.
* ($\kappa=0$). The <i>Euclidean space</i> $\E^n$ is the set $\R^n$ equipped with the standard inner product $\inprod{x}{y}\coloneqq\sum_{i=1}^nx_iy_i$, which induces its standard metric $d\l(x,y\r)$. It is a uniquely geodesic space with $c:x\pathto y$ given by $c\l(t\r)\coloneqq\l(1-t'\r)x+t'y$ where $t'\coloneqq t/d\l(x,y\r)$. All balls in $\E^n$ are convex.
* ($\kappa=1$). The <i>sphere</i> $\S^n$ is the set $S^n\coloneqq\l\{x\in\E^{n+1}\st\|x\|=1\r\}$ equipped with the <i>angular metric</i> defined uniquely by $\cos d\l(x,y\r)=\inprod{x}{y}$. It is a geodesic space with $c:x\pathto y$ given by $c\l(t\r)\coloneqq\cos tx+\sin tv$ for $t\in\l[0,a\r]$, where $a\geq0$ and $v\in\E^{n+1}$ is a unit vector in $x^\perp\cap\span\l\{x,y\r\}$ and $a\leq\pi$. These geodesics are called <i>minimal great arcs with initial vector</i> $v$, and their extensions to $t\in\l[0,2\pi\r]$ are called <i>great circles</i>. Note that if $x,y\in\S^n$ are not antipodal, then $x$ and $y$ span a unique two dimensional subspace of $\E^n$ and hence there is a unique geodesic between $x$ and $y$.
* ($\kappa=-1$). The <i>hyperbolic space</i> $\H^n$ is the set $\l\{x\in\E^{n,1}\st\l(x,x\r)=-1,x_{n+1}>0\r\}$ equipped with the metric defined uniquely by $\cosh d\l(x,y\r)=-\l(x,y\r)$, where $\E^{n,1}$ is $\R^n$ equipped with the is the <i>Lorentzian</i> form $\l(x,y\r)\coloneqq-x_{n+1}y_{n+1}+\sum_{i=1}^nx_iy_i$. It is a uniquely geodesic space with $c:x\pathto y$ given by $c\l(t\r)\coloneqq\cosh tx+\sinh tv$ for $t\in\l[0,a\r]$, where $a\geq0$ and $v\in\E^{n,1}$ is the unique unit vector in $x^\perp\cap\span\l\{x,y\r\}$. These geodesics are called <i>hyperbolic segments with initial vector $v$</i>, and their extensions to $t\in\R$ are called <i>hyperbolic lines</i>.<span style="float:right;">$\blacklozenge$</span>
