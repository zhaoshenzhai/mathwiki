<div class="topSpace"></div>

Date Created: 17/05/2023 23:27:46
Tags: #Type/Proposition #Topic/Algebraic_Topology

Proved by: [[Basic properties of homotopies of paths]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a path-connected topological space and fix $x_0,x_0'\in X$. Then $\pi_1\l(X,x_0\r)\iso\pi_1\l(X,x_0'\r)$._

```

_Proof_. Let $\sigma:\l[0,1\r]\to X$ be a path from $x_0$ to $x_0'$ and defined a map $f:\pi_1\l(X,x_0\r)\to\pi_1\l(X,x_0'\r)$ by $f\l(\l[\gamma\r]\r)\coloneqq\l[\sigma^-\ast\gamma\ast\sigma\r]$ for all loops $\gamma$ at $x_0$. Note that $\sigma^-\ast\gamma\ast\sigma$ is a loop at $x_0'$ and $f$ is well-defined. To see that $f$ is a homomorphism, let $\gamma_0$ and $\gamma_1$ be loops at $x_0$ and compute
$$\begin{equation}
    f\l(\l[\gamma_0\r]\l[\gamma_1\r]\r)=f\l(\l[\gamma_0\ast\gamma_1\r]\r)=\l[\sigma^-\ast\gamma_0\ast\gamma_1\ast\sigma\r]=\l[\sigma^-\ast\gamma_0\ast\sigma\ast\sigma^-\ast\gamma_1\ast\sigma\r]=\l[\sigma^-\ast\gamma_0\ast\sigma\r]\l[\sigma^-\ast\gamma_1\ast\sigma\r]=f\l(\l[\gamma_0\r]\r)f\l(\l[\gamma_1\r]\r).
\end{equation}$$
Lastly, the function $g:\pi_1\l(X,x_0'\r)\to\pi_1\l(X,x_0\r)$ mapping $\l[\delta\r]\mapsto\l[\sigma\ast\delta\ast\sigma^-\r]$ for all loops $\delta$ at $x_0'$ is well-defined with
$$\begin{equation}
    \l(g\circ f\r)\l(\l[\gamma\r]\r)=g\l(\l[\sigma^-\ast\gamma\ast\sigma\r]\r)=\l[\sigma\ast\sigma^-\ast\gamma\ast\sigma\ast\sigma^-\r]=\l[\gamma\r]
\end{equation}$$
for all loops $\gamma$ at $x_0$, and similarly $\l(f\circ g\r)\l(\l[\delta\r]\r)=\l[\delta\r]$ for all loops $\delta$ at $x_0'$, so $f$ is invertible.<span style="float:right;">$\blacksquare$</span>
