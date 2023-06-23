<div class="topSpace"></div>

Date Created: 18/05/2023 14:50:14
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Continuous functions is a sheaf]], [[Intermediate Value Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Covering Homotopy Theorem).

Let $X$ be a topological space. Then every covering map $p:\widetilde{X}\to X$ is a fibration. More specifically, for any topological space $Y$, any homotopy $F:Y\times I\to X$, and any continuous map $\widetilde{f}_0:Y\times\l\{0\r\}\to\widetilde{X}$ lifting $f_0\coloneqq\l.F\r|_{Y\times\l\{0\r\}}$, there exists a unique homotopy $\widetilde{F}:Y\times I\to\widetilde{X}$ lifting $F$ such that $\widetilde{f}_0=\l.\widetilde{F}\r|_{Y\times\l\{0\r\}}$.
![[Images/2023-05-22_132245/image.svg|150]]

```

<i>Proof.</i> Since $p$ is a covering map, there exists an open cover $\l\{U_\alpha\r\}$ of $X$, each evenly-covered by $\{\widetilde{U}_{\alpha\beta}\}$. Fix $y_0\in Y$. For each $\tpl{y_0,t_i}\in Y\times I$, let $U_i\subseteq X$ be an open set containing $F\l(y_0,t_i\r)$. Continuity of $F$ then furnishes an open set $N_i\times\l(a_i,b_i\r)\ni\tpl{y_0,t_i}$ such that $F\l(N_i\times\l(a_i,b_i\r)\r)\subseteq U_i\subseteq X$. The collection $\l\{N_i\times\l(a_i,b_i\r)\r\}$ covers $\l\{y_0\r\}\times I$, so by compactness one obtains an open set $N\coloneqq\bigcap N_i$ containing $y_0$ and a partition $0=t_0<t_1<\cdots<t_n=1$ of $I$ such that each $F\l(N\times\l[t_i,t_{i+1}\r]\r)\subseteq U_i$ is evenly-covered. We define $\widetilde{F}:N\times\l[0,t_i\r]\to\widetilde{X}$ by induction on $i$; for $i=0$, we let $\widetilde{F}\coloneqq\widetilde{f}_0$ so that $\widetilde{F}$ restricts to $\widetilde{f}_0$ on $N\times\l\{0\r\}$.

Suppose a lift $\widetilde{F}:N\times\l[0,t_i\r]\to\widetilde{X}$ has been constructed for some $i\geq0$. Then, since $F\l(y_0,t_i\r)\in U_i$, there exists a unique open set $\widetilde{U}_i\subseteq p^{-1}\!\l(U_i\r)$ containing $\widetilde{F}\l(y_0,t_i\r)$ that maps homeomorphically onto $U_i$. Replacing $N\times\l\{t_i\r\}$ by its intersection with $\widetilde{F}^{-1}(\widetilde{U}_i)$, if necessary, we may assume that $\widetilde{F}\l(N\times\l\{t_i\r\}\r)\subseteq\widetilde{U}_i$. Since $p$ is invertible on $\widetilde{U}_i$, extend $\widetilde{F}$ so that
![[Images/2023-05-18_202211/image.svg|160]]commutes. Our modification of $N\times\l\{t_i\r\}$ ensures that the restriction of $\widetilde{F}$ to $N\times\l\{t_i\r\}$ coincides with this extension, so the functions inductively glue to give a lift $\widetilde{F}$ of $F$ on $N\times I$. We now argue that such a lifting is unique when $Y$ is a point (<i>not</i> necessarily $y_0$); abusing notation, we drop $Y$ from the notation and write $F:I\to X$, etc., instead.
* Suppose that $\widetilde{F}'\!:I\to\widetilde{X}$ is another lift of $F$ such that $\widetilde{F}\l(0\r)=\widetilde{F}'\!\l(0\r)=\widetilde{f}_0\!\l(0\r)$. As above, we may obtain a partition $0=t_0<t_1<\cdots,t_n=1$ of $I$ such that each $F\l(\l[t_0,t_{i+1}\r]\r)\subseteq U_i$ is evenly-covered. Proceeding by induction, suppose that $\widetilde{F}=\widetilde{F}'$ on $\l[0,t_i\r]$. Since $\l[t_i,t_{i+1}\r]$ is connected, $\widetilde{F}\l(\l[t_i,t_{i+1}\r]\r)$ is connected too and thus lies in a single open set $\widetilde{U}_i\subseteq p^{-1}\!\l(U_i\r)$ containing $\widetilde{F}\l(t_i\r)$ that maps homeomorphically onto $U_i$. Similarly for $\widetilde{F}'\!\l(\l[t_i,t_{i+1}\r]\r)$, but since $\widetilde{F}\l(t_i\r)=\widetilde{F}'\!\l(t_i\r)$, they lie in the same open set $\widetilde{U}_i$. Since $p\circ\widetilde{F}=p\circ\widetilde{F}'$ on $\l[t_i,t_{i+1}\r]$ and $p$ is injective on $\widetilde{U}_i$, we see that $\widetilde{F}=\widetilde{F}'$ on $\l[t_i,t_{i+1}\r]$, as desired.

Thus, when restricted to $\l\{y\r\}\times I$ for each $y\in N$, the lift $\widetilde{F}:N\times I\to\widetilde{X}$ of $F$ is unique. In general, this shows that if the same construction is repeated for some other $y_0'\in Y$ to obtain a lift $\widetilde{F}'\!:N'\times I\to\widetilde{X}$ of $F$, and if $N\cap N'\neq\em$, the lifts $\widetilde{F}$ and $\widetilde{F}'$ must agree on $\l(N\cap N'\r)\times I$. Thus $\widetilde{F}$ is well-defined on $Y\times I$, and is continuous since it is continuous on each $N\times I$.<span style="float:right;">$\blacksquare$</span>
