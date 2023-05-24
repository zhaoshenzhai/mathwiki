<div class="topSpace"></div>

Date Created: 23/05/2023 21:55:54
Tags: #Type/Proposition #In_Progress

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a path-connected and locally path-connected space. Then $X$ admits a simply-connected cover $p:\widetilde{X}\to X$ iff $X$ is semilocally simply-connected._

```

_Proof_. The forward direction is easy since for every $x\in X$, there exists a neighborhood $U$ of $x$ lifting to a sheet $\widetilde{U}$ that projects homeomorphically only $U$. Every loop $\gamma$ in $U$ then lifts to a loop in $\widetilde{U}$, which is null-homotopic in $\widetilde{X}$ since $\widetilde{X}$ is simply-connected. Projecting the homotopy shows that $\gamma$ is null-homotopic in $X$, so the map $\iota_\ast$ induced by $\iota$ is trivial in $\pi_1\l(X,x_0\r)$.

Conversely, let $X$ be a semilocally simply-connected space and fix $x_0\in X$. Define the set $\widetilde{X}\coloneqq\l\{\l[\gamma\r]\mid\gamma:I\to X\textrm{\ and\ }\gamma\l(0\r)=x_0\r\}$, where $\l[\gamma\r]$ denotes the path-homotopy class of $\gamma$ in $X$, and consider the map $p:\widetilde{X}\to X:\l[\gamma\r]\mapsto\gamma\l(1\r)$ which is well-defined since path-homotopies fix endpoints. We topologize $\widetilde{X}$, that makes $p$ continuous and a covering map, as follows.
* Let $\mc{B}$ be the collection of all path-connected subsets $U\subseteq X$ such that $\iota_\ast:\pi_1\l(U\r)\into\pi_1\l(X\r)$ is trivial, which we claim is a basis for the topology on $X$. Indeed, every $x\in X$ has a path-connected neighborhood $U$ such that $\iota_\ast:\pi_1\l(U\r)\into\pi_1\l(X\r)$ is trivial, so $\mc{B}$ covers $X$. Furthermore, if $U_1,U_2\in\mc{B}$ and $x\in U_1\cap U_2$, then, since $U_1\cap U_2$ is open, there is an path-connected neighborhood $V\subseteq U_1\cap U_2$ of $x$. Furthermore, the inclusion $V\into X$ factors as $V\into U_i\into X$ which induces inclusions $\pi_1\l(V\r)\into\pi_1\l(U_i\r)\into\pi_1\l(X\r)$, the latter being trivial. Thus the inclusion $\iota_\ast:\pi_1\l(V\r)\into\pi_1\l(X\r)$ is trivial.
* Now, for any $U\in\mc{B}$ and any path $\gamma:I\to X$ starting at $x_0$ and ending in $U$, let $\widetilde{U}\subseteq\tilde{X}$ consist of all classes $\l[\gamma\ast\delta\r]$ for paths $\delta:I\to U$ compatible with $\gamma$. Then, since $U$ is path-connected, every $x\in U$ admits a path $\delta:\gamma\l(1\r)\rightsquigarrow x$ in $U$, so $\l.p\r|_{\widetilde{U}}:\widetilde{U}\to U$ is surjective. For injectivity, note that if $\delta_1,\delta_2:\gamma\l(1\r)\rightsquigarrow x$ are two paths in $U$ with the same-endpoint $x$, then $\delta_1\ast\delta_2^-$ is a loop in $U$ that null-homotopes in $X$ to the constant path at $\gamma\l(1\r)$. Thus $\l[\delta_1\r]=\l[\delta_2\r]$, so $\l[\gamma\ast\delta_1\r]=\l[\gamma\ast\delta_2\r]$.
* We claim that the collection $\widetilde{\mc{B}}$ of all sets $\widetilde{U}$ is a basis for a topology on $\widetilde{X}$.
