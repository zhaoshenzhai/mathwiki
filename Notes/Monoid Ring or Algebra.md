---
mathLink: auto
---


<div class="topSpace"></div>

Date Created: 04/06/2023 16:48:01
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a ring and let $M$ be a monoid. The <b>monoid ring of $M$ over $R$</b> is the ring $\tpl{R\l[M\r],+,\ast}$ consisting of:
* The set $R\l[M\r]$ containing all functions $\alpha:M\to R$ with finite support.
* The operation $+$ inherited from $\tpl{R,+}$, defined component-wise.
* The operation $\ast$, called <b>convolution</b>, defined by $\l(\alpha\ast\beta\r)\l(z\r)\coloneqq\sum_{xy=z}\alpha\l(x\r)\beta\l(y\r)$ for all $z\in M$.

Additionally, $R\l[M\r]$ can be equipped with an $R$-algebra structure via the action $\l(r\alpha\r)\l(x\r)\coloneqq r\alpha\l(x\r)$, in which case $R\l[M\r]$ is called a <b>monoid algebra</b>.
* If $G\coloneqq M$ is a group, then $R\l[G\r]$ is called the <b>group ring/algebra of $G$ over $R$</b>.
* If $K\coloneqq R$ is a field, then $K\l[M\r]$ is a $K$-vector space.

```

<b>Remark.</b> We require elements in $R\l[M\r]$ to be functions of <i>finite</i> support for the convolution to make sense. Also, note that the function $\delta$ sending $e\mapsto1$ and $m\mapsto0$ for all $m\neq e$ is the multiplicative identity of $R\l[M\r]$. That $\ast$ is associative follows from the computation
$$\begin{equation}
    \l(\l(\alpha\beta\r)\gamma\r)\l(z\r)=\sum_{xy=z}\l(\alpha\beta\r)\l(x\r)\gamma\l(y\r)=\sum_{uv=x}\l(\sum_{xy=z}\alpha\l(u\r)\beta\l(v\r)\r)\gamma\l(y\r)=\sum_{xy=z}\l(\sum_{uv=x}\alpha\l(u\r)\beta\l(v\r)\gamma\l(y\r)\r)=\sum_{uvy=z}\alpha\l(u\r)\beta\l(v\r)\gamma\l(y\r),
\end{equation}$$
where the last sum is taken over all $\tpl{u,v,y}$ such that $uvy=z$. Similarly for $\l(\alpha\l(\beta\gamma\r)\r)\l(z\r)$, so they coincide for all $z\in M$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> To lighten the notation, we write $\alpha\in R\l[M\r]$ as $\sum_{x\in M}\alpha_xx$, where $\alpha_x\coloneqq\alpha\l(x\r)$, so $+$ and $\ast$ look like
$$\begin{equation}
    \l(\sum_{x\in M}\alpha_xx\r)+\l(\sum_{x\in M}\beta_xx\r)=\sum_{x\in G}\l(\alpha_x+\beta_x\r)x\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l(\sum_{x\in M}\alpha_xx\r)\ast\l(\sum_{y\in M}\beta_yy\r)=\sum_{x,y\in M}\alpha_x\beta_yxy.
\end{equation}$$
This also makes it clear that $R\l[M\r]$ is free with basis $\l\{\delta_m\mid m\in M\r\}\iso M$, where $\delta_m\!\l(m\r)\coloneqq1$ and vanishes otherwise.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Both $R$ and $M$ embed into $R\l[M\r]$ in the natural way; using the $\sum$ notation (with one term), we have $r\into re$ for all $r\in R$ and $x\into 1x$ for all $x\in M$.<span style="float:right;">$\blacklozenge$</span>
