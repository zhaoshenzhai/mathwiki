<div class="topSpace"></div>

Date Created: 29/06/2022 10:06:15
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Basic properties of orthogonal complements]], [[Pythagorean Theorem]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $U$ is a finite-dimensional linear subspace of $V$, then the following algebraic identities hold:_
1. _$\proj_U\!:V\to V$ is a linear operator._

2. _$\im\proj_U=U$ with $\proj_U\!\l(u\r)=u$ for all $u\in U$._
3. _$\ker\proj_U=U^\perp$._
4. _$\proj_U^2=\proj_U$._
5. _$\l\|\proj_U\l(v\r)\r\|\leq\|v\|$ for all $v\in V$._

```

_Proof_. 
1. Take $v_1,v_2\in V$ and $\alpha\in K$, so there exist unique vectors $u_1,u_2\in U$ and $w_1,w_2\in U^\perp$ such that $v_1=u_1+w_1$ and $v_2=u_2+w_2$. Observe then that
$$\begin{equation}
    \alpha v_1+v_2=\l(\alpha u_1+u_2\r)+\l(\alpha w_1+w_2\r),
\end{equation}$$
and since both $U$ and $U^\perp$ are linear subspaces of $V$, we have
$$\begin{equation}
    \begin{aligned}
        \proj_U\!\l(\alpha v_1+v_2\r)&=\alpha u_1+u_2 && \textrm{Definition of $\proj_U$} \\
        &=\alpha\proj_U\!\l(v_1\r)+\proj_U\!\l(v_2\r). && v_i=u_i+w_i\textrm{ uniquely}
    \end{aligned}
\end{equation}$$

2. The forward inclusion holds by definition of $\proj_U$. Conversely, $U$ admits the decomposition $U=U\oplus\l\{0\r\}$, so every $u\in U$ can be expressed uniquely as $u=u+0$. Thus $\proj_U\!\l(u\r)=u$.
3. If $\proj_U\!\l(v\r)=0$ for some $v\in V$, then $v$ can be expressed uniquely as $v=0+w$ for some $w\in U^\perp$. But this forces $v=w$, so $v\in U^\perp$. Conversely, $U^\perp$ admits the decomposition $U^\perp=\l\{0\r\}\oplus U^\perp$, so every $w\in U^\perp$ can be expressed uniquely as $w=0+w$. Thus $\proj_U\!\l(w\r)=0$.
4. Take $v\in V$, so $v=u+w$ with $u\in U$ and $w\in U^\perp$. Observe then that
$$\begin{equation}
    \proj_U\!\l(\proj_U\!\l(v\r)\r)=\proj_U\!\l(u\r)=u=\proj_U\!\l(v\r)
\end{equation}$$
by the results above.
5. Take $v\in V$, so $v=u+w$ with $u\in U$ and $w\in U^\perp$. Observe then that
$$\begin{align}
    \l\|\proj_U\!\l(v\r)\r\|&=\|u\| && \textrm{Definition of $\proj_U$} \\
    &\leq\|u\|+\|w\| && \|w\|\geq0 \\
    &=\|u+w\| && u\perp w\textrm{; Pythagoras} \\
    &=\|v\|. && \textrm{Substitution}\qedin
\end{align}$$
