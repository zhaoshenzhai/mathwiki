<div class="topSpace"></div>

Date Created: 15/09/2023 18:24:39
References: #Ref/BH99
Tags: #Type/Definition #Topic/Metric_Geometry

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Isometries of model spaces]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Cauchy-Schwarz Inequality]]

``` ad-Definition
title: Definition.

Fix $n\geq1$ and $\kappa\in\R$. The <b>model space</b> $M^n_\kappa$ is the unique complete, simply connected, Riemannian $n$-manifold of constant sectional curvature $\kappa$.

```

<b>Remark.</b> We present some standard constructions in the cases for $\kappa=0,1,-1$, from which all other cases are obtained by rescaling the metric by $1/\sqrt{\pm\kappa}$.
* ($\kappa=0$). The <i>Euclidean space</i> $\E^n$ is the set $\R^n$ equipped with the standard inner product $\inprod{x}{y}\coloneqq\sum_{i=1}^nx_iy_i$, which induces its standard metric $d\l(x,y\r)$. It is a uniquely geodesic space with $c:x\pathto y$ given by $c\l(t\r)\coloneqq\l(1-t'\r)x+t'y$ where $t'\coloneqq t/d\l(x,y\r)$. A <i>hyperplane</i> in $\E^n$ is a subspace of $\E^n$ of dimension $n-1$.
* ($\kappa=1$). The <i>sphere</i> $\S^n$ is the set $S^n\coloneqq\l\{x\in\E^{n+1}\st\|x\|=1\r\}$ equipped with the <i>angular metric</i> defined uniquely by $\cos d\l(x,y\r)=\inprod{x}{y}$. It is a geodesic space with $c:x\pathto y$ given by $c\l(t\r)\coloneqq\cos tx+\sin tv$ for $t\in\l[0,a\r]$, where $a\geq0$ and $v\in\E^{n+1}$ is a unit vector in $x^\perp\cap\span\l\{x,y\r\}$ and $a\leq\pi$. These geodesics are called <i>minimal great arcs with initial vector</i> $v$, and their extensions to $t\in\l[0,2\pi\r]$ are called <i>great circles</i>. Note that if $x,y\in\S^n$ are not antipodal, then $x$ and $y$ span a unique two dimensional subspace of $\E^n$ and hence there is a unique geodesic between $x$ and $y$. A <i>hyperplane</i> in $\S^n$ is an intersection of $\S^n$ with an $n$-dimensional subspace of $\E^{n+1}$.
    * (<i>$d$ is a metric</i>). That $d$ is positive-definite and symmetric is easy to see. Indeed, $d\l(x,y\r)=0$ iff $\inprod{x}{y}=1$. But $\l|\inprod{x}{y}\r|\leq\|x\|\|y\|=1$, so equality holds iff $x=y$. The <i>spherical angle</i> between two minimal great arcs starting at a common point $x$ with initial vectors $u$ and $v$ is $\gamma_{u,v}\coloneqq\arccos\inprod{u}{v}$. A <i>triangle</i> in $\S^n$ is the data of three distinct points $x,y,z\in\S^n$ and three minimal great arcs between them. Letting $a\coloneqq d\l(y,z\r)$, $b\coloneqq d\l(x,z\r)$, and $c\coloneqq d\l(x,y\r)$, we have the <i>spherical law of cosines</i> as $\cos c=\cos a\cos b+\sin a\sin b\cos\gamma_{u,v}$ where $\gamma_{u,v}$ is the spherical angle of the triangle at $z$. Indeed, we compute
    $$\begin{equation}
        \cos c=\cos d\l(x,y\r)=\inprod{x}{y}=\inprod{\cos bz+\sin bu}{\cos bz+\sin bv}=\cos a\cos b+\sin a\sin b\inprod{u}{v},
    \end{equation}$$
    from which the result follows by noting that $\inprod{u}{v}=\cos\gamma_{u,v}$. We now prove the triangle inequality for the triangle considered above. Since $\cos$ is a strictly decreasing function on $\l[0,\pi\r]$ from $1$ to $-1$, the function $f:\gamma\mapsto\cos a\cos b+\sin a\sin b\cos\gamma$ decreases from $\cos\l(b-a\r)$ to $\cos\l(a+b\r)$. Thus $\cos c\geq\cos\l(a+b\r)$ by the spherical law of cosines, so $c\leq a+b$. Note that equality holds iff $\gamma=\pi$ (when $f$ achieves its minimum) and $a+b\leq\pi$ (when $\cos$ is decreasing), which is precisely when $z$ lies in the minimal great arc joining $x$ and $y$.
    * (<i>Geodesic</i>). Observe that $d\l(c\l(t\r),c\l(t'\r)\r)=\arccos\inprod{\cos tx+\sin tv}{\cos t'x+\sin t'v}=\arccos\cos\l(t-t'\r)=\l|t-t'\r|$, so $c:x\pathto y$ is a geodesic segment.
    * (<i>Convexity</i>). Any closed ball of radius $r<\pi/2$ is convex. Indeed, let $r<\pi/2$ and consider the closed ball $\bar{B}\l(z,r\r)$ for any $z\in\S^n$. If $x,y\in\bar{B}\l(z,r\r)$, then $d\l(x,y\r)<\pi$ and so there is a unique minimal great arc joining $x$ and $y$. Any point on this arc lies in the positive cone spanned by $x$ and $y$, so it is of the form $\lambda x+\mu y$ for some $\lambda,\mu\geq0$ with $\lambda+\mu\geq\|\lambda x+\mu y\|=1$. By definition, a point $z'$ lies in $\bar{B}\l(z,r\r)$ iff $\inprod{z'}{z}\geq\cos r$, so since $\lambda+\mu\geq1$, we see that
    $$\begin{equation}
        \inprod{\lambda x+\mu y}{z}=\lambda\inprod{x}{z}+\mu\inprod{y}{z}\geq\l(\lambda+\mu\r)\cos r\geq\cos r.
    \end{equation}$$
    Thus $\lambda x+\mu y\in\bar{B}\l(z,r\r)$, as desired.
* ($\kappa=-1$). The <i>hyperbolic space</i> $\H^n$ is the set $\l\{x\in\E^{n,1}\st\l(x,x\r)=-1,x_{n+1}>0\r\}$ equipped with the metric defined uniquely by $\cosh d\l(x,y\r)=-\l(x,y\r)$, where $\E^{n,1}$ is $\R^n$ equipped with the <i>Lorentzian</i> form $\l(x,y\r)\coloneqq-x_{n+1}y_{n+1}+\sum_{i=1}^nx_iy_i$. It is a uniquely geodesic space with $c:x\pathto y$ given by $c\l(t\r)\coloneqq\cosh tx+\sinh tv$ for $t\in\l[0,a\r]$, where $a\geq0$ and $v\in\E^{n,1}$ is the unique unit vector in $x^\perp\cap\span\l\{x,y\r\}$. These geodesics are called <i>hyperbolic segments with initial vector $v$</i>, and their extensions to $t\in\R$ are called <i>hyperbolic lines</i>. A <i>hyperplane</i> in $\H^n$ is a (non-empty) intersection of $\H^n$ with an $n$-dimensional subspace of $\E^{n,1}$.
    * (<i>Lemma</i>). Observe that $\l(x,x\r)=-1$ implies $x_{n+1}\geq1$, and that $\cosh$ admits an inverse on $\arccosh:\l[1,\infty\r)\to\R_0^+$ that is increasing and unbounded above. We claim that for every $x,y\in\H^n$, we have $\l(x,y\r)\leq-1$ and $\l(x-y,x-y\r)\geq0$, both with equality iff $x=y$. Indeed, letting $\|\slot\|$ denote the standard norm on $\E^n$, we have by Cauchy-Schwarz that $\l(x,y\r)=-x_{n+1}y_{n+1}+\sum_{i=1}^{n}x_iy_i\leq-x_{n+1}y_{n+1}+\|x\|\|y\|$. But since $\l(x,x\r)=-1$, we see that $\|x\|^2=x_{n+1}^2-1$ and similarly $\|y\|^2=y_{n+1}^2-1$, so
    $$\begin{equation}
        \l(x,y\r)\leq-x_{n+1}y_{n+1}+\sqrt{\l(x_{n+1}^2-1\r)\l(y_{n+1}^2-1\r)}.
    \end{equation}$$
    That the right-hand-side is $\leq-1$ is equivalent to $\l(x_{n+1}^2-1\r)\l(y_{n+1}^2-1\r)\leq\l(x_{n+1}y_{n+1}-1\r)^2$, which occurs iff $\l(x_{n+1}+y_{n+1}\r)^2\geq0$. This is true, and equality holds iff $x_{n+1}=y_{n+1}$ and $\tpl{x_1,\dots,x_n}$ and $\tpl{y_1,\dots,y_n}$ are linearly dependent. The latter condition hold iff $x_i=y_i$ for all $1\leq i\leq n$ since $x,y\in\H^n$. Also, note that $\l(x-y,x-y\r)=\l(x,x\r)+\l(y,y\r)-2\l(x,y\r)\geq-1-1+2=0$, with equality iff $x=y$.
    * (<i>$d$ is a metric</i>). The above lemma shows that the distance $d$ is well-defined and is positive-definite. Indeed, $d\l(x,y\r)=0$ iff $\l(x,y\r)=-1$, which occurs iff $x=y$. The <i>hyperbolic angle</i> between two hyperbolic segments starting at a common point $x$ with initial vectors $u$ and $v$ is $\gamma_{u,v}\coloneqq\arccos\l(u,v\r)$. A <i>triangle</i> in $\H^n$ is the data of three distinct points $x,y,z\in\H^n$ and three hyperbolic segments between them. Letting $a\coloneqq d\l(y,z\r)$, $b\coloneqq d\l(x,z\r)$, and $c\coloneqq d\l(x,y\r)$, we have the <i>hyperbolic law of cosines</i> as $\cosh c=\cosh a\cosh b-\sinh a\sinh b\cos\gamma_{u,v}$ where $\gamma_{u,v}$ is the hyperbolic angle of the minimal great arcs of the triangle starting at $z$. Indeed, we compute
    $$\begin{equation}
        \cosh c=-\l(x,y\r)=-\l(\cosh bz+\sinh bu,\cosh cz+\sinh cv\r)=-\l[\cosh a\cosh b\l(z,z\r)+\sinh a\sinh v\l(u,v\r)\r],
    \end{equation}$$
    from which the result follows by noting that $\l(u,v\r)=\cos\gamma_{u,v}$. We now prove the triangle inequality for the triangle considered above. Since $\cos$ is a strictly decreasing function on $\l[0,\pi\r]$ from $1$ to $-1$, the function $f:\gamma\mapsto\cosh a\cosh b-\sinh a\sinh b\cos\gamma$ increases from $\cosh\l(b-a\r)$ to $\cosh\l(a+b\r)$. Thus $\cosh c\leq\cosh\l(a+b\r)$ by the hyperbolic law of cosines, so $c\leq a+b$. Note that equality holds iff $\gamma=\pi$ (when $f$ achieves is maximum), which occurs precisely when $z$ lies in the hyperbolic segment joining $x$ and $y$.
    * (<i>Geodesic</i>). First, note that for all $x\in\H^n$, the form $\l(\slot,\slot\r)$ restricted to $x^\perp$ is positive-definite. Indeed, if $0\neq v\in x^\perp$ is such that $\l(v,v\r)\leq0$, then they are linearly independent and hence span a $2$-dimensional subspace $V$ where $\l(\slot,\slot\r)$ is represented by the matrix $\diag\l(-1,\leq0\r)$. But $\l(\slot,\slot\r)$ is positive-definite on the subspace $\R^n\subset\E^{n,1}$ spanned by the first $n$ basis vectors, and since its intersection with $V$ is non-trivial, we have a contradiction. Now, for each distinct $x\neq y\in\H^n$, we can take $v\coloneqq y+\inprod{y}{x}x$, for then $\inprod{v}{x}=0$ and hence $v\in x^\perp$. Since $\inprod{v}{v}>0$, we can rescale it so that $\inprod{v}{v}=1$, which gives us the unique hyperbolic segment from $x$ to $y$. Finally, observe that
    $$\begin{equation}
        d\l(c\l(t\r),c\,(t')\r)=\arccosh\l(-\inprod{\cosh tx+\sinh tv}{\cosh t'x+\sinh t'v}\r)=\arccosh\l(-\cosh t\cosh t'\inprod{x}{x}-\sinh t\sinh t'\inprod{v}{v}\r)=\arccosh\l(\cosh\l(t-t'\r)\r)=\l|t-t'\r|,
    \end{equation}$$
    so $c:x\pathto y$ is a geodesic segment.
    * (<i>Convexity</i>). Any ball in $\H^n$ is convex. Indeed, consider the ball $B\l(z,r\r)$ for any $z\in\H^n$ and any $r>0$. Take $x,y\in B\l(z,y\r)$ and consider the unique hyperbolic segment joining them. Any point on this hyperbolic segment lies in the positive cone spanned by $x$ an $y$, so it is of the form $\lambda x+\mu y$ for some $\lambda,\mu\geq0$ with $-\lambda-\mu=\lambda\|x\|+\mu\|y\|\geq\|\lambda x+\mu y\|=-1$. By definition, a point $z'$ lies in $B\l(z,r\r)$ iff $-\inprod{z}{z'}<\cosh r$, so, since $\lambda+\mu\leq1$, we see that
    $$\begin{equation}
        -\inprod{\lambda x+\mu y}{z}=-\lambda\inprod{x}{z}-\mu\inprod{y}{z}<\l(\lambda+\mu\r)\cosh r\leq\cosh r
    \end{equation}$$
    Thus $\lambda x+\mu y\in B\l(z,r\r)$, as desired.

In all three cases, we can define a <i>reflection</i> about a hyperplane $H\subset M^n_\kappa$ as the isometry $r_H:x\mapsto x-2\inprod{x}{u}_\kappa u$ where $u\in H^\perp$ is a unit vector (unique up to sign). For all $x,y\in M^n_\kappa$, the set of points equidistant from $x$ and $y$ form the <i>hyperplane bisector</i> of $x$ and $y$, which is the hyperplane determined by $u\coloneqq x-y$.<span style="float:right;">$\blacklozenge$</span>
