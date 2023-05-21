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

_Let $X$ be a topological space. Then every covering map $p:E\to X$ is a fibration. More specifically, for any topological space $Y$, any homotopy $F:Y\times I\to X$, and any continuous map $\tilde{f}_0:Y\times\l\{0\r\}\to E$ lifting_ $f_0\coloneqq\l.F\r|_{Y\times\l\{0\r\}}$_, there exists a unique homotopy $\tilde{F}:Y\times I\to E$ lifting $F$ such that_ $\tilde{f}_0=\l.\tilde{F}\r|_{Y\times\l\{0\r\}}$_._

```

_Proof_. Let $Y$ be a topological space and fix $y_0\in Y$. Let $F:Y\times I\to X$ be a homotopy and let $\tilde{f}_0:Y\times\l\{0\r\}\to E$ lift $f_0\coloneqq\l.F\r|_{V\times\l\{0\r\}}$. Since $p$ is a covering map, there exists an open cover $\l\{U_i\r\}$ of $X$ such that $p^{-1}\!\l(U_i\r)=\coprod_{j\in J}V_{ij}$ for some open sets $V_{ij}\subseteq E$ such that $\l.p\r|_{V_{ij}}:V_{ij}\to U_i$ is a homeomorphism. For each $\tpl{y_0,t_i}\in Y\times I$, let $U_i\subseteq X$ be an open set containing $F\l(y_0,t_i\r)$. Continuity of $F$ then furnishes an open set $N_i\times\l(a_i,b_i\r)\ni\tpl{y_0,t_i}$ such that $F\l(N_i\times\l(a_i,b_i\r)\r)\subseteq U_i\subseteq X$. The collection $\l\{N_i\times\l(a_i,b_i\r)\r\}$ covers $\l\{y_0\r\}\times I$, so by compactness one obtains an open set $N\coloneqq\bigcap_{i=1}^{m}N_i$ containing $y_0$ and a partition $0=t_0<t_1<\cdots<t_n=1$ of $I$ such that each $F\l(N\times\l[t_i,t_{i+1}\r]\r)\subseteq U_i$ is evenly-covered. We define $\tilde{F}:N\times\l[0,t_i\r]\to E$ by induction on $i$; for $i=0$, we may let $\tilde{F}\coloneqq\tilde{f}_0$ since $N\subseteq Y$.

Suppose $\tilde{F}:N\times\l[0,t_i\r]\to E$ has been constructed for some $i\geq0$. Then since $F\l(y_0,t_i\r)\in U_i$, there exists a unique open set $V_i\subseteq p^{-1}\!\l(U_i\r)$ containing $\tilde{F}\l(y_0,t_i\r)$ that maps homeomorphically onto $U_i$. Replacing $N\times\l\{t_i\r\}$ by its intersection with $\l.\tilde{F}\r|_{N\times\l\{t_i\r\}}^{-1}\!\l(V_i\r)$, if necessary, we may assume that $\tilde{F}\l(N\times\l\{t_i\r\}\r)\subseteq V_i$. Extend $\tilde{F}$ so that
![[Images/2023-05-18_202211/image.svg|160]]commutes; that is, let $\l.\tilde{F}\r|_{N\times\l[t_i,t_{i+1}\r]}\coloneqq\l(\l.p\r|_{U_i}\r)^{-1}\circ\l.F\r|_{N\times\l[t_i,t_{i+1}\r]}$. Our modification of $N\times\l\{t_i\r\}$ ensures that $\l.\tilde{F}\r|_{N\times\l\{t_i\r\}}$ coincides with this extension, so the functions glue to give a lift $\l.\tilde{F}\r|_{N\times I}$ of $\l.F\r|_{N\times I}$. We now argue that such a lifting is unique when restricted to $\l\{y_0\r\}\times I$, which ensures that the functions $\l.\tilde{F}\r|_{N\times I}$ agree on the overlaps when the above construction is repeated with different $y_0\in Y$. Existence and uniqueness of the global lifting $\tilde{F}:Y\times I\to E$ then follows by glueing.
* Let $y_0,y_0'\in Y$ and, abusing notation by dropping $\l\{y_0\r\}$ and $\l\{y_0'\r\}$, repeat the construction for $\tilde{F}':\l[0,t_i\r]\to E$. For $i=0$, we have $\tilde{F}=\tilde{F}'=\tilde{f}_0$, so suppose inductively that $\tilde{F}=\tilde{F}'$ on $\l[0,t_i\r]$. Since $\l[t_i,t_{i+1}\r]$ is connected, so is $\tilde{F}\l(\l[t_i,t_{i+1}\r]\r)$ and thus lies in a single open set $V_i\subseteq p^{-1}\!\l(U_i\r)$ containing $\tilde{F}\l(t_i\r)$ that maps homeomorphically onto $U_i$. Similarly for $\tilde{F}'\l(\l[t_i,t_{i+1}\r]\r)$, but since $\tilde{F}\l(t_i\r)=\tilde{F}'\l(t_i\r)$, they lie in the same open set $V_i$. Since $p\circ\tilde{F}=p\circ\tilde{F}'$ on $\l[t_i,t_{i+1}\r]$ and $p$ is injective on $V_i$, we see that $\tilde{F}=\tilde{F}'$ on $\l[t_i,t_{i+1}\r]$, as desired.<span style="float:right;">$\blacksquare$</span>
