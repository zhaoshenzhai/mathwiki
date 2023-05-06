<div class="topSpace"></div>

Date Created: 03/04/2023 15:49:50
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Riesz Representation Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be inner product spaces and let $T:V\to W$ be a linear map. Then there exists a unique linear operator $T^\adj:W\to V$ such that $\inprod{Tv}{w}=\inprod{v}{T^\adj w}$ for all $v\in V$ and $w\in W$._

```

_Proof_. We first prove uniqueness.
* If $T^\adj_1,T^\adj_2:W\to V$ are both adjoints of $T$, then $\inprod{Tv}{w}=\inprod{T^\adj_1v}{w}=\inprod{T^\adj_2v}{w}$ for all $v,w\in V$. Then $\inprod{T^\adj_1v-T^\adj_2v}{w}=0$, so, taking $w\coloneqq T^\adj_1v-T^\adj_2v$, we see that $T^\adj_1v=T^\adj_2v$ for all $v\in V$. The result follows.

For existence, fix $w\in W$ and consider the linear form $\eta_w\in V^\adj$ defined by $\eta_w\!\l(v\r)\coloneqq\inprod{Tv}{w}$ for all $v\in V$, which is clearly linear. By the Riesz Representation Theorem, there exists a unique $u\in V$ such that $\eta_w\!\l(v\r)=\inprod{Tv}{w}=\inprod{v}{u}$ for all $v\in V$. Set $T^\adj w\coloneqq u$, which defines a map $T^\adj:V\to V$ such that $\inprod{Tv}{w}=\inprod{v}{T^\adj w}$ for all $v,w\in V$. It remains to show that $T^\adj$ is linear.
* Take $w_1,w_2\in W$ and $\alpha\in K$, so $\inprod{Tv}{w_1}=\inprod{v}{T^\adj w_1}$ and $\inprod{Tv}{w_2}=\inprod{v}{T^\adj w_2}$ for all $v\in V$. Observe then that
$$\begin{equation}
    \inprod{v}{T^\adj\!\l(w_1+\alpha w_2\r)}=\inprod{Tv}{w_1+\alpha w_2}=\inprod{Tv}{w_1}+\bar{\alpha}\inprod{Tv}{w_2}=\inprod{v}{T^\adj w_1}+\bar{\alpha}\inprod{v}{T^\adj w_2}=\inprod{v}{T^\adj w_1+\alpha T^\adj w_2}
\end{equation}$$
for all $v\in V$, so $T^\adj\!\l(w_1+\alpha w_2\r)=T^\adj w_1+\alpha T^\adj w_2$.<span style="float:right;">$\blacksquare$</span>
