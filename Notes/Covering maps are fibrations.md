<div class="topSpace"></div>

Date Created: 18/05/2023 14:50:14
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Continuous functions is a sheaf]], [[Intermediate Value Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a topological space. Then every covering map $p:\widetilde{X}\to X$ is a fibration. More specifically, for any topological space $Y$, any homotopy $F:Y\times I\to X$, and any continuous map $\widetilde{f}_0:Y\times\l\{0\r\}\to\widetilde{X}$ lifting_ $f_0\coloneqq\l.F\r|_{Y\times\l\{0\r\}}$_, there exists a unique homotopy $\widetilde{F}:Y\times I\to\widetilde{X}$ lifting $F$ such that_ $\widetilde{f}_0=\l.\widetilde{F}\r|_{Y\times\l\{0\r\}}$_._
![[Images/2023-05-22_132245/image.svg|150]]

```

_Proof_. Let $Y$ be a topological space and fix $y_0\in Y$. Let $F:Y\times I\to X$ be a homotopy and let $\widetilde{f}_0:Y\times\l\{0\r\}\to\widetilde{X}$ lift $f_0\coloneqq\l.F\r|_{Y\times\l\{0\r\}}$. Since $p$ is a covering map, there exists an open cover $\l\{U_i\r\}$ of $X$ such that $p^{-1}\!\l(U_i\r)=\coprod_{j\in J}\widetilde{U}_{ij}$ for some open sets $\widetilde{U}_{ij}\subseteq\widetilde{X}$ such that $\l.p\r|_{\widetilde{U}_{ij}}:\widetilde{U}_{ij}\to U_i$ is a homeomorphism. For each $\tpl{y_0,t_i}\in Y\times I$, let $U_i\subseteq X$ be an open set containing $F\l(y_0,t_i\r)$. Continuity of $F$ then furnishes an open set $N_i\times\l(a_i,b_i\r)\ni\tpl{y_0,t_i}$ such that $F\l(N_i\times\l(a_i,b_i\r)\r)\subseteq U_i\subseteq X$. The collection $\l\{N_i\times\l(a_i,b_i\r)\r\}$ covers $\l\{y_0\r\}\times I$, so by compactness one obtains an open set $N\coloneqq\bigcap_{i=1}^{m}N_i$ containing $y_0$ and a partition $0=t_0<t_1<\cdots<t_n=1$ of $I$ such that each $F\l(N\times\l[t_i,t_{i+1}\r]\r)\subseteq U_i$ is evenly-covered. We define $\widetilde{F}:N\times\l[0,t_i\r]\to\widetilde{X}$ by induction on $i$; for $i=0$, we may let $\widetilde{F}\coloneqq\widetilde{f}_0$ since $N\subseteq Y$.

Suppose $\widetilde{F}:N\times\l[0,t_i\r]\to\widetilde{X}$ has been constructed for some $i\geq0$. Then since $F\l(y_0,t_i\r)\in U_i$, there exists a unique open set $\widetilde{U}_i\subseteq p^{-1}\!\l(U_i\r)$ containing $\widetilde{F}\l(y_0,t_i\r)$ that maps homeomorphically onto $U_i$. Replacing $N\times\l\{t_i\r\}$ by its intersection with $\l.\widetilde{F}\r|_{N\times\l\{t_i\r\}}^{-1}(\widetilde{U}_i)$, if necessary, we may assume that $\widetilde{F}\l(N\times\l\{t_i\r\}\r)\subseteq\widetilde{U}_i$. Extend $\widetilde{F}$ so that
![[Images/2023-05-18_202211/image.svg|160]]commutes; that is, let $\l.\widetilde{F}\r|_{N\times\l[t_i,t_{i+1}\r]}\coloneqq\l(\l.p\r|_{U_i}\r)^{-1}\circ\l.F\r|_{N\times\l[t_i,t_{i+1}\r]}$. Our modification of $N\times\l\{t_i\r\}$ ensures that $\l.\widetilde{F}\r|_{N\times\l\{t_i\r\}}$ coincides with this extension, so the functions glue to give a lift $\l.\widetilde{F}\r|_{N\times I}$ of $\l.F\r|_{N\times I}$. We now argue that such a lifting is unique when restricted to $\l\{y_0\r\}\times I$, which ensures that the functions $\l.\widetilde{F}\r|_{N\times I}$ agree on the overlaps when the above construction is repeated with different $y_0\in Y$. Existence and uniqueness of the global lifting $\widetilde{F}:Y\times I\to\widetilde{X}$ then follows by glueing.
* Let $y_0,y_0'\in Y$ and, abusing notation by dropping $\l\{y_0\r\}$ and $\l\{y_0'\r\}$, repeat the construction for $\widetilde{F}':\l[0,t_i\r]\to\widetilde{X}$. For $i=0$, we have $\widetilde{F}=\widetilde{F}'=\widetilde{f}_0$, so suppose inductively that $\widetilde{F}=\widetilde{F}'$ on $\l[0,t_i\r]$. Since $\l[t_i,t_{i+1}\r]$ is connected, so is $\widetilde{F}\l(\l[t_i,t_{i+1}\r]\r)$ and thus lies in a single open set $\widetilde{U}_i\subseteq p^{-1}\!\l(U_i\r)$ containing $\widetilde{F}\l(t_i\r)$ that maps homeomorphically onto $U_i$. Similarly for $\widetilde{F}'\l(\l[t_i,t_{i+1}\r]\r)$, but since $\widetilde{F}\l(t_i\r)=\widetilde{F}'\l(t_i\r)$, they lie in the same open set $\widetilde{U}_i$. Since $p\circ\widetilde{F}=p\circ\widetilde{F}'$ on $\l[t_i,t_{i+1}\r]$ and $p$ is injective on $\widetilde{U}_i$, we see that $\widetilde{F}=\widetilde{F}'$ on $\l[t_i,t_{i+1}\r]$, as desired.<span style="float:right;">$\blacksquare$</span>
