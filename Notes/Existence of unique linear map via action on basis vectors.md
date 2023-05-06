<div class="topSpace"></div>

Date Created: 02/05/2022 16:29:57
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Unique Representation Theorem (Basis)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces and let_ $\mc{B}\coloneqq\l\{b_i\r\}$ _be a basis for $V$. For any function $f:\mc{B}\to W$, there exists a unique linear map $T:V\to W$ such that_ $\l.T\r|_\mc{B}=f$_._

```

**Remark.** That is, in order to specify a linear map $T:V\to W$, it suffices to know its action on a basis $\mc{B}$ of $V$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Let $w_i\coloneqq f\l(b_i\r)$. If such a linear map exists, it is unique we may extend by linearity. To show existence, take $v\in V$ and define $T\l(v\r)\coloneqq\sum\alpha_iw_i$ where $\l\{\alpha_i\r\}\subseteq K$ is the unique set of scalars such that $v=\sum\alpha_ib_i$. This uniqueness proves that $T$ is indeed a function with $\dom T=V$. Indeed, taking $v=b_i$ for some $i\in I$ shows that $T\l(b_i\r)=w_i\in W$ since each $b_i$ is uniquely represented by itself; that is, $\alpha_j=\delta_{ij}$ for all $j\in I$. Furthermore, we see that $T\l(v\r)$ is a linear combination of $\l\{w_i\r\}$, so $T:V\to W$. It remains to show that $T$ is linear. To this end, take $v_1,v_2\in V$ and $\gamma\in K$, and observe that
$$\begin{equation}
    T\l(\gamma v_1+v_2\r)=T\l(\gamma\sum\alpha_i b_i+\sum\beta_ib_i\r)=T\l(\sum\l(\gamma\alpha_i+\beta_i\r)b_i\r)=\sum\l(\gamma\alpha_i+\beta_i\r)w_i=\gamma\sum\alpha_iw_i+\sum\beta_iw_i=\gamma T\l(v_1\r)+T\l(v_2\r).\qedin
\end{equation}$$
