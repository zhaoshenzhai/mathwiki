<div class="topSpace"></div>

Date Created: 17/05/2023 20:28:17
Tags: #Type/Proposition #Topic/Topology

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\gamma:I\to X$ be a path in a topological space $X$. For any continuous map $\phi:I\to I$ fixing $0$ and $1$, the paths $\gamma$ and $\gamma\circ\phi$ are homotopic. Moreover:
* If $\gamma_0,\gamma_1:x_0\pathto x_1$ are homotopic, then $\gamma_0^-\htopeq\gamma_1^-$. Furthermore, if $\delta_0,\delta_1:x_1\pathto x_2$ are homotopic, then $\gamma_0\ast\delta_0\htopeq\gamma_1\ast\delta_1$.
* The collection $\Pi_1\!\l(X\r)$ of all homotopy classes of paths in $X$ forms a groupoid under concatenation.

```

<b>Remark.</b> In particular, for any fixed $x_0\in X$, the collection $\pi_1\!\l(X,x_0\r)$ of all homotopy classes of loops based at $x_0$ is a group.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Define $H\l(s,t\r)\coloneqq\gamma\l(\l(1-t\r)s+t\phi\l(s\r)\r)$, which is a homotopy from $\gamma$ to $\gamma\circ\phi$. Let $\epsilon_i$ and $\epsilon$ respectively denote the constant paths at $x_i$ and $\gamma\l(0\r)$.
* If $H$ is a homotopy from $\gamma_0$ to $\gamma_1$, then $H'\!\l(s,t\r)\coloneqq H\l(1-s,t\r)$ is a homotopy from $\gamma_0^-$ to $\gamma_1^-$. Furthermore, if $H_1$ and $H_2$ are homotopies from $\gamma_0$ to $\gamma_1$ and $\delta_0$ to $\delta_1$, respectively, then $H\l(s,t\r)\coloneqq H_1\!\l(2s,t\r)$ if $s\in\l[0,1/2\r]$ and $H\l(s,t\r)\coloneqq H_2\!\l(2s-1,t\r)$ otherwise is a homotopy from $\gamma_0\ast\delta_0$ to $\gamma_1\ast\delta_1$.

In particular, the operations $\l[\gamma_1\r]\ast\l[\gamma_2\r]\coloneqq\l[\gamma_1\ast\gamma_2\r]$ and $\l[\gamma\r]^-\coloneqq\l[\gamma^-\r]$ are well-defined. We claim that $\Pi_1\!\l(X\r)$ forms a groupoid under concatenation.
* To show that $\Pi_1\!\l(X\r)$ is a category, we find reparametrizations $\phi$. Let $\phi_1\!\l(s\r)\coloneqq0$ if $s\in\l[0,1/2\r]$ and $\phi_1\!\l(s\r)\coloneqq2s-1$ otherwise and observe that $\epsilon_0\ast\gamma_0=\gamma\circ\phi_1$, so $\epsilon_0\ast\gamma_0\htopeq\gamma_0$. Similarly, letting $\phi_2\!\l(s\r)\coloneqq2s$ for $s\in\l[0/1,2\r]$ and $\phi_2\!\l(s\r)\coloneqq1$ for $s\in\l[1/2,1\r]$ shows that $\gamma_0\htopeq\gamma_0\ast\epsilon_1$. Finally, letting $\phi_3$ be the unique piecewise affine linear map fixing $0$ and $1$ such that $\phi_3\!\l(1/4\r)=1/2$ and $\phi_3\!\l(1/2\r)=3/4$ gives us that $\l(\gamma_0\ast\gamma_1\r)\ast\gamma_2\htopeq\gamma_0\ast\l(\gamma_1\ast\gamma_2\r)$, as desired.
![[Images/2023-05-17_215146/image.svg|550]]
* To show that $\Pi_1\!\l(X\r)$ is a groupoid, we note that $H:\l[0,1\r]\times\l[0,1\r]\to X$ defined by $H\l(s,t\r)\coloneqq\gamma\l(2s\l(1-t\r)\r)$ for $s\in\l[0,1/2\r]$ and $H\l(s,t\r)\coloneqq\gamma\l(\l(2-2s\r)\l(1-t\r)\r)$ otherwise is a homotopy from $\gamma\ast\gamma^-$ to $\epsilon$. Thus $\l[\gamma\r]\ast\l[\gamma\r]^-=\l[\gamma\ast\gamma^-\r]=\l[\epsilon\r]$, as desired.<span style="float:right;">$\blacksquare$</span>
