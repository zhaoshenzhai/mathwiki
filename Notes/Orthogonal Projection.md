<div class="topSpace"></div>

Date Created: 28/06/2022 22:58:12
Tags: #Type/Definition #Topic/Linear_Algebra

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Orthogonal projection minimizes distances]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Orthogonal Decomposition]], [[Basic properties of orthogonal projections]]

``` ad-Definition
title: Definition.

Let $V$ be an inner product space. For $U$ a finite-dimensional linear subspace of $V$, the <b>orthogonal projection of $V$ onto $U$</b> is the linear operator
$$\begin{equation}
    \proj_U\!:V\to U\ \ \ \ \ \ \ \ \mathit{mapping}\ \ \ \ \ \ \ \ v\mapsto\proj_U\!\l(v\r)
\end{equation}$$
where $\proj_U\!\l(v\r)$ is the unique element in $U$ such that $v-\proj_U\!\l(v\r)\in U^\perp$.

```

<b>Remark.</b> In other words, decomposing $V$ into $U\oplus U^\perp$, we may write every $v\in V$ uniquely as a sum $v=u+w$ with $u\in U$ and $w\in U^\perp$. The orthogonal projection is then $\proj_U\!\l(v\r)\coloneqq u$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $U=\span\l\{u\r\}$ for some $u$, then $P_u\coloneqq\proj_U\!\l(v\r)=\frac{\inprod{v}{u}}{\inprod{u}{u}}u$. Indeed, it is clear that $P_u$ is a linear map onto $U$, so it remains to show that $v-P_u\!\l(v\r)\in U^\perp$. But this is clear since
$$\begin{equation}
    \inprod{v-\frac{\inprod{v}{u}}{\inprod{u}{u}}u}{\alpha u}=\bar{\alpha}\l(\inprod{v}{u}-\frac{\inprod{v}{u}}{\inprod{u}{u}}\inprod{u}{u}\r)=0
\end{equation}$$
for all $\alpha\in K$.<span style="float:right;">$\blacklozenge$</span>
