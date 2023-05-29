<div class="topSpace"></div>

Date Created: 05/04/2023 11:34:56
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: [[Eigenvalue iff root of characteristic polynomial]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $T:V\to V$ be a linear operator on an inner product space $V$ and let $\lambda\in K$ be an eigenvalue of $T$.
* If $T$ is self-adjoint, then $\lambda\in\R$.
* If $T$ is positive, then $\lambda\geq0$.
* If $T$ is positive-definite, then $\lambda>0$.
* If $T$ is unitary, then $\l|\lambda\r|=1$.

```

<b>Remark.</b> In particular, this shows that the characteristic polynomial $\cchi$ of a self-adjoint operator $T$ splits over $\R$ (since $\cchi$ splits over $\C$ and all roots are real).<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take a non-zero vector $v\in V$ such that $Tv=\lambda v$, so $\lambda\inprod{v}{v}=\inprod{\lambda v}{v}=\inprod{Tv}{v}$.
* If $T$ is self-adjoint, then $\lambda\inprod{v}{v}=\inprod{Tv}{v}=\inprod{v}{T^\adj v}=\inprod{v}{Tv}=\inprod{v}{\lambda v}=\bar{\lambda}\inprod{v}{v}$, so $\lambda=\bar{\lambda}$ and hence $\lambda\in\R$.
* If $T$ is positive, then $T=S^\adj S$ for some $S\in\End\l(V\r)$. Then $\lambda\|v\|^2=\lambda\inprod{v}{v}=\inprod{Tv}{v}=\inprod{S^\adj Sv}{v}=\inprod{Sv}{Sv}=\|Sv\|^2$ and so $\lambda\geq0$.
* If $T$ is positive-definite, then $\lambda=\|Sv\|^2/\|v\|^2$ as above. But if $S$ is invertible, then $Sv\neq0$ and so $\|Sv\|>0$. Thus $\lambda>0$.
* If $T$ is unitary, then $\l|\lambda\r|\|v\|=\|\lambda v\|=\|Tv\|=\|v\|$, so $\l|\lambda\r|=1$.<span style="float:right;">$\blacksquare$</span>
