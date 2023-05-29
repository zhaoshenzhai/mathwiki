<div class="topSpace"></div>

Date Created: 03/04/2023 10:42:47
Tags: #Type/Theorem #Topic/Linear_Algebra

Proved by: [[Dimension Theorem]], [[Orthogonal Decomposition]], [[Orthonormal Expansion]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Riesz Representation Theorem).

Let $V$ be a finite-dimensional inner product space. Then the map $\phi:V\to V^\ast:v\mapsto\inprod{\slot}{v}$ is a canonical antilinear isomorphism. That is, for every $\omega\in V^\ast$, there exists a unique $v\in V$ such that $\omega\l(u\r)=\inprod{u}{v}$ for all $u\in V$.

```

_Proof_. For every $v\in V$, the map $\inprod{\slot}{v}:V\to V$ is linear since $\inprod{u_1+\alpha u_2}{v}=\inprod{u_1}{v}+\alpha\inprod{u_2}{v}$ for all $u_1,u_2\in V$ and $\alpha\in K$. Thus $\phi\l(v\r)\in V^\ast$, as claimed. Furthermore, $\phi$ is antilinear since
$$\begin{equation}
    \phi\l(v_1+\lambda v_2\r)=\inprod{\slot}{v_1+\lambda v_2}=\inprod{\slot}{v_1}+\bar{\lambda}\inprod{\slot}{v_2}=\phi\l(v_1\r)+\bar{\lambda}\phi\l(v_2\r).
\end{equation}$$
Injectivity is also easy, for if $\phi\l(v_1\r)=\phi\l(v_2\r)$ for some $v_1,v_2\in V$, then $\inprod{\slot}{v_1}=\inprod{\slot}{v_2}$ as forms. When applied to $v_1-v_2$, we see that $\inprod{v_1-v_2}{v_1-v_2}=0$ and hence $v_1=v_2$. For surjectivity, take $\omega\in V^\ast$, so $\omega:V\to K$ and hence $\dim V=\dim\ker\omega+1$. Let $H\coloneqq\ker\omega$ and let $u_1\in H^\perp$ be any vector of norm $1$. Then $H^\perp=Ku_1$, so $V=Ku_1\oplus H$. Thus any $u\in V$ decomposes uniquely as $u=\lambda u_1+u_0$ for some $u_0\in H$. Note that $\lambda=\inprod{u}{u_1}$, so
$$\begin{equation}
    \omega\l(u\r)=\lambda\omega\l(u_1\r)+\omega\l(u_0\r)=\lambda\omega\l(u_1\r)=\inprod{u}{u_1}\omega\l(u_1\r)=\inprod{u}{\bar{\omega\l(u_1\r)}u_1}.
\end{equation}$$
Set $v\coloneqq\bar{\omega\l(u_1\r)u_1}$, so $\omega\l(u\r)=\inprod{u}{v}$ for all $u\in V$, as desired.<span style="float:right;">$\blacksquare$</span>
