<div class="topSpace"></div>

Date Created: 27/09/2022 00:04:17
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Order divides power iff power gives identity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group and fix some $g\in G$ of finite order. Then, for all $n\in\N^+$, we have_
$$\begin{equation}
    \ord{g^n}=\frac{\lcm\l(n,\ord{g}\r)}{n}=\frac{\l|g\r|}{\gcd\l(n,\ord{g}\r)}.
\end{equation}$$

```

_Proof_. The second equality follows from the link above. Thus it suffices to show that $n\ord{g^n}=\lcm\l(n,\ord{g}\r)$, for since $\lcm\l(n,\ord{g}\r)$ is a multiple of $n$, we may divide by $n$ to obtain the desired equality.
* ($n\ord{g^n}$ is a common multiple of $n$ and $\ord{g}$): Obviously $n$ divides $n\ord{g^n}$. Also, observe that
$$\begin{equation}
    g^{n\ord{g^n}}=\l(g^n\r)^{\ord{g^n}}=e,
\end{equation}$$
so $\l|g\r|$ divides $n\ord{g^n}$.

* ($n\ord{g^n}$ is the least common multiple): Suppose that $m\in\Z$ is another common multiple of $n$ and $\ord{g}$, so $n$ and $\ord{g}$ both divide $m$. Then $m=kn$ for some $k\in\Z$ and, since $\ord{g}$ divides $m$, we have
$$\begin{equation}
    \l(g^n\r)^k=g^{nk}=g^m=e.
\end{equation}$$
But then $\ord{g^n}$ divides $k$, so there exists some $l\in\Z$ such that $k=l\ord{g^n}$. Thus $m=kn=ln\ord{g^n}$, so $n\ord{g^n}$ divides $m$.<span style="float:right;">$\blacksquare$</span>
