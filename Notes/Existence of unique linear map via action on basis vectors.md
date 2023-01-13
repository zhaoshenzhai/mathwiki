<div class="topSpace"></div>

Date Created: 02/05/2022 16:29:57
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Criteria for equality of linear maps via spanning set]], [[Unique Representation Theorem (Linear Algebra)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and let_ $\mc{B}\coloneqq\l\{b_i\r\}_{i\in I}$ _be a basis for $V$. Given arbitrary vectors_ $\l\{w_i\r\}_{i\in I}\subseteq W$_, there exists a unique linear map_
$$\begin{equation}
    T:V\to W\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \fa i\in I:T\l(b_i\r)=w_i.
\end{equation}$$

```

_Proof_. If such a linear map exists, it is unique since $\mc{B}$ is, in particular, a spanning set of $V$. To show existence, take $v\in V$ and define
$$\begin{equation}
    T\l(v\r)\coloneqq\sum\limits_{i\in I}\alpha_iw_i
\end{equation}$$
where $\l\{\alpha_i\r\}_{i\in I}\subseteq K$ is the unique set of scalars such that $v=\sum_{i\in I}\alpha_ib_i$. This uniqueness proves that $T$ is indeed a function with $\dom T=V$. Indeed, taking $v=b_i$ for some $i\in I$ shows that $T\l(b_i\r)=w_i\in W$ since each $b_i$ is uniquely represented by itself; that is, $\alpha_j=\delta_{ij}$ for all $j\in I$. Furthermore, we see that $T\l(v\r)$ is a linear combination of $\l\{w_i\r\}_{i\in I}$, so $T:V\to W$. It remains to show that $T$ is linear. To this end, take $v_1,v_2\in V$ and $\gamma\in K$, and observe that
$$\begin{align}
    T\l(\gamma v_1+v_2\r)&=T\l(\gamma\sum\limits_{i\in I}\alpha_i b_i+\sum\limits_{i\in I}\beta_ib_i\r) && \textrm{Unique Representation Theorem} \\
    &=T\l(\sum\limits_{i\in I}\l(\gamma\alpha_i+\beta_i\r)b_i\r) && \textrm{Distribution} \\
    &=\sum\limits_{i\in I}\l(\gamma\alpha_i+\beta_i\r)w_i && \textrm{Definition of $T$} \\
    &=\gamma\sum\limits_{i\in I}\alpha_iw_i+\sum\limits_{i\in I}\beta_iw_i && \textrm{Distribution} \\
    &=\gamma T\l(v_1\r)+T\l(v_2\r). && \textrm{Definition of $T$}\qedin
\end{align}$$
