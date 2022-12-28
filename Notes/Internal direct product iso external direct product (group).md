---
mathLink: $N_1N_2\iso N_1\times N_2$ for $N_1,N_2$ subgroups
---

<div class="topSpace"></div>

Date Created: 27/10/2022 17:33:07
Tags: #Proposition #Group_Theory #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group. If $G$ is an internal direct product of of subgroups $N_1,N_2\subseteq G$, then $G\iso N_1\times N_2$._

```

_Proof_. Write $G=N_1N_2$ and define $\phi:N_1N_2\to N_1\times N_2:n_1n_2\mapsto\tpl{n_1,n_2}$.
* (Well-defined): If $n_1n_2=n_1'n_2'$ for some $n_1,n_1'\in N_1$ and $n_2,n_2'\in N_2$, then $n_1'^{-1}n_1=n_2'n_2^{-1}$. But since $N_1\cap N_2=\l\{e\r\}$, we see that $n_1'^{-1}n_1=e$ and hence $n_1=n_1'$. Similarly, we have $n_2=n_2'$.

It suffices to show that $\phi$ is an isomorphism.
* (Injection): Take $n_1n_2,n_1'n_2'\in N_1N_2$ such that $\phi\l(n_1n_2\r)=\phi\l(n_1'n_2'\r)$. Then $\tpl{n_1,n_2}=\tpl{n_1',n_2'}$, so $n_1=n_1'$ and $n_2=n_2'$. Thus $n_1n_2=n_1'n_2'$.
* (Surjection): Take $\tpl{n_1,n_2}\in N_1\times N_2$ and observe that $\phi\l(n_1n_2\r)=\tpl{n_1,n_2}$.
* (Homomorphism): Take $n_1n_2,n_1'n_2'\in N_1N_2$ and observe that
$$\begin{equation}
    \phi\l(n_1n_2n_1'n_2'\r)=\phi\l(n_1n_1'n_2n_2'\r)=\tpl{n_1n_1',n_2n_2'}=\tpl{n_1,n_2}\tpl{n_1',n_2'}=\phi\l(n_1n_2\r)\phi\l(n_1'n_2'\r).\qedin
\end{equation}$$
