<div class="topSpace"></div>

Date Created: 23/01/2023 12:56:32
Tags: #Proposition #Topics/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a vector space over some field $K$ and let $P:V\to V$ be a projection on $V$. Then $V=\im P\oplus\ker P$ and, for all $v\in V$, writing $v=v_1+v_2$ for some unique $v_1\in\im P$ and $v_2\in\ker P$ implies that $P\l(v\r)=v_1$._

_Conversely, if $V=V_1\oplus V_2$ and $P:V\to V$ is the linear operator defined by $P\l(v\r)\coloneqq v_1$ where $v_1\in V_1$ is the unique vector such that $v-v_1\in V_2$, then $P$ is a projection on $V$._

```

_Proof_. Take $v\in V$ and observe that $v=P\l(v\r)+\l(v-P\l(v\r)\r)$. Obvious $P\l(v\r)\in\im P$, and since $P^2=P$, we have that
$$\begin{equation}
    P\l(v-P\l(v\r)\r)=P\l(v\r)-P\l(P\l(v\r)\r)=P\l(v\r)-P\l(v\r)-0.
\end{equation}$$
Thus $v-P\l(v\r)\in\ker P$, so $v\in\im P+\ker P$. Now, take $v\in\im P\cap\ker P$, so $v=P\l(u\r)$ for some $u\in V$ and $P\l(v\r)=0$. But then
$$\begin{equation}
    v=P\l(u\r)=P\l(P\l(u\r)\r)=P\l(v\r)=0.
\end{equation}$$
Conversely, take $v\in V$ so that $v=v_1+v_2$ for unique $v_1\in V_1$ and $v_2\in V_2$. Observe that $v_1=v_1+0$, so $P\l(v_1\r)=v_1$ and hence
$$\begin{equation}
    P^2\l(v\r)=P\l(P\l(v\r)\r)=P\l(v_1\r)=v_1=P\l(v\r).\qedin
\end{equation}$$
