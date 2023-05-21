<div class="topSpace"></div>

Date Created: 17/05/2023 20:28:17
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Continuous functions is a sheaf]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\gamma_0,\gamma_1:\l[0,1\r]\to X$ be paths in a topological space $X$. Then the following properties hold._
* _If $\phi:\l[0,1\r]\to\l[0,1\r]$ is a continuous map with $\phi\l(0\r)=0$ and $\phi\l(1\r)=1$, then $\gamma$ and $\gamma\circ\phi$ are homotopic._
* _If $\gamma_0,\gamma_1:x_0\rightsquigarrow x_1$ are homotopic, then $-\gamma_0$ and $-\gamma_1$ are homotopic paths from $x_1$ to $x_0$. Furthermore, if $\delta_0,\delta_1:x_1\rightsquigarrow x_2$ are homotopic, then $\gamma_0\ast\delta_0$ and $\gamma_1\ast\delta_1$ are homotopic paths from $x_0$ to $x_2$._

_Furthermore, if $x_0\overset{\gamma_0}{\rightsquigarrow}x_1\overset{\gamma_1}{\rightsquigarrow}x_2\overset{\gamma_2}{\rightsquigarrow}x_3$ and $\epsilon_0$ and $\epsilon_1$ are constant paths at $x_0$ and $x_1$, respectively, then the following hold:_
* _$\epsilon_0\ast\gamma_0\htopeq\gamma_0\htopeq\gamma_0\ast\epsilon_1$._
* _$\gamma_0\ast\gamma_0^-\htopeq\epsilon_0$._
* _$\l(\gamma_0\ast\gamma_1\r)\ast\gamma_2\htopeq\gamma_0\ast\l(\gamma_1\ast\gamma_2\r)$._

```

_Proof_.
* Define $H\l(s,t\r)\coloneqq\gamma\l(\l(1-t\r)s+t\phi\l(s\r)\r)$, which is a homotopy from $\gamma$ to $\gamma\circ\phi$.
* If $H$ is a homotopy from $\gamma_0$ to $\gamma_1$, then $H'\l(s,t\r)\coloneqq H\l(1-s,t\r)$ is a homotopy from $-\gamma_0$ to $-\gamma_1$. Furthermore, if $H_1$ and $H_2$ are homotopies from $\gamma_0$ to $\gamma_1$ and $\delta_0$ to $\delta_1$, respectively, then $H\l(s,t\r)\coloneqq H_1\l(2s,t\r)$ for $1\leq s\leq1/2$ and $H\l(s,t\r)\coloneqq H_2\l(2s-1,t\r)$ for $1/2\leq s\leq1$ is a homotopy from $\gamma_0\ast\delta_0$ to $\gamma_1\ast\delta_1$.

For the identity and associativity properties, we use a suitable reparametrization.
* Let $\phi\l(s\r)\coloneqq0$ for $0\leq s\leq1/2$ and $\phi\l(s\r)\coloneqq2s-1$ for $1/2\leq s\leq1$. Then $\epsilon_0\ast\gamma_0=\gamma\circ\phi$, and since $\phi$ fixes $0$ and $1$, we see that $\epsilon_0\ast\gamma_0\htopeq\gamma_0$. Similarly, letting $\phi'\l(s\r)\coloneqq2s$ for $0\leq s\leq1/2$ and $\phi'\l(s\r)\coloneqq1$ for $1/2\leq s\leq1$ shows that $\gamma_0\htopeq\gamma_0\ast\epsilon_1$.

![[Images/2023-05-17_215146/image.svg]]

* By definition, $\l(\gamma_0\ast\gamma_0^-\r)\l(s\r)=\gamma_0\l(2s\r)$ for $0\leq s\leq1/2$ and $\l(\gamma_0\ast\gamma_0^-\r)\l(s\r)=\gamma_0\l(2-2s\r)$ for $1/2\leq s\leq1$. Then the homotopy $H:\l[0,1\r]\times\l[0,1\r]\to X$ defined by
    $$\begin{equation}
        H\l(s,t\r)\coloneqq
        \begin{dcases}
            \gamma_0\l(2s\l(1-t\r)\r) & \textrm{for}\ \ 0\leq s\leq1/2 \\
            \gamma_0\l(\l(2-2s\r)\l(1-t\r)\r) & \textrm{for}\ \ 1/2\leq s\leq1
        \end{dcases}
    \end{equation}$$
is a homotopy from $\gamma_0\ast\gamma_0^-$ to $\epsilon_0$.
* Let $\phi:\l[0,1\r]\to\l[0,1\r]$ be the unique piecewise affine linear map fixing $0$ and $1$ such that $\phi\l(1/2\r)=1/4$ and $\phi\l(3/4\r)=1/2$; see graph below.![[Images/2023-05-17_220620/image.svg]]Then $\l(\gamma_0\ast\gamma_1\r)\ast\gamma_2=\l(\gamma_0\ast\l(\gamma_1\ast\gamma_2\r)\r)\circ\phi$, as desired.<span style="float:right;">$\blacksquare$</span>
