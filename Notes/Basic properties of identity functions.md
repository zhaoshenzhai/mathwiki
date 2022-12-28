<div class="topSpace"></div>

Date Created: 27/01/2022 10:41:34
Tags: #Proposition #Set_Theory #Linear_Algebra

Proved by: [[Criteria for equality of functions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

* _(Set Theory): Let $f:X\to Y$. Then $f\circ\id_X=f$ and $\id_Y\circ f=f$; in other words, the following diagram commutes._
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-02-09_213021/image.svg", width=240></center>
* _(Linear Algebra): Let $K$ be a field and let $V$ be a vector space over $K$. Then $\id_V$ is a linear map on $V$. Furthermore, if $n\coloneqq\dim V$ and $\mc{B}=\l\{b_1,\dots,b_n\r\}$ is a basis for $V$, then_ $\l[\id_V\r]_\mc{B}=I_n$_._

```

_Proof_.
* (Set Theory): Observe that
$$\begin{equation}
    \dom f=\dom\l(f\circ\id_X\r)=\dom\l(\id_Y\circ f\r)=X,
\end{equation}$$
so take $x\in X$. Compute
$$\begin{equation}
    \l(f\circ\id_X\r)\l(x\r)=f\l(\id_X\l(x\r)\r)=f\l(x\r)\ \ \ \ \textrm{and}\ \ \ \ \l(\id_Y\circ f\r)\l(x\r)=\id_X\l(f\l(x\r)\r)=f\l(x\r),
\end{equation}$$
so $f\l(x\r)=\l(f\circ\id_X\r)\l(x\r)=\l(\id_Y\circ f\r)\l(x\r)$ for all $x$ in their common domain.

* (Linear Algebra): Take $v,w\in V$ and $\alpha\in K$, and observe that
$$\begin{equation}
    \id_V\l(\alpha v+w\r)=\alpha v+w=\alpha\id_V\l(v\r)+\id_V\l(w\r).
\end{equation}$$
Furthermore, $\l[\id_V\r]_\mc{B}=\l[a_{ij}\r]$ where $a_{ij}\in K$ are the unique coefficients such that $\id_V\l(b_j\r)=\sum_{i=1}^na_{ij}b_i$ for all $j\in\l\{1,\dots,n\r\}$. Since $\id_V\l(b_j\r)=b_j=\sum_{i=1}^n\delta_{ij}b_i$, we see that $a_{ij}=\delta_{ij}$ and hence $\l[\id_V\r]_\mc{B}=\l[\delta_{ij}\r]=I_n$.<span style="float:right;">$\blacksquare$</span>
