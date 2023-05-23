<div class="topSpace"></div>

Date Created: 21/05/2023 08:06:03
Tags: #Type/Theorem #Topic/Topology #Topic/Ring_Theory

Proved by: [[Fundamental group of the circle]]
References: [[Polynomial ring over fields is a EUD]], [[Root iff factor]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Fundamental Theorem of Algebra).

_Every non-constant polynomial $p\in\C\l[z\r]$ has a root in $\C$._

```

**Remark.** Successively applying polynomial division, this is equivalent to the factorization $p=c\prod_{i\in I}\l(x-r_i\r)^{n_i}$ for some $c\in\C$, distinct $r_i\in\C$, and $n_i\in\N^+$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. W.l.o.g., let $p\l(z\r)\coloneqq z^n+a_1z^{n-1}+\cdots+a_n$ and suppose that $p$ does not have any complex roots. For all $r\geq0$, consider the loop $f_r:\l[0,1\r]\to S^1$ defined by
$$\begin{equation}
    f_r\!\l(s\r)\coloneqq\frac{p\l(re^{2\pi is}\r)/p\l(r\r)}{\l|p\l(re^{2\pi is}\r)/p\l(r\r)\r|},\cref{\ast}
\end{equation}$$
which is based at $1$. The homotopy $H\l(s,r\r)\coloneqq f_r\!\l(s\r)$ shows, for all $r\geq0$, that $f_r$ is homotopic to the constant loop $\omega_0\coloneqq f_0$ in $\pi_1\!\l(S^1,1\r)$. On the other hand, let $R>1$ be bigger than $\l|a_1\r|+\cdots+\l|a_n\r|$. Then, for all $\l|z\r|=R$, we have
$$\begin{equation}
    \l|z^n\r|>\l(\l|a_1\r|+\cdots+\l|a_n\r|\r)\l|z^{n-1}\r|>\l|a_1z^{n-1}\r|+\l|a_2z^{n-2}\r|+\cdots+\l|a_n\r|\geq\l|a_1z^{n-1}+\cdots+a_n\r|
\end{equation}$$
and hence $p_t\!\l(z\r)\coloneqq z^n+t\l(a_1z^{n-1}+\cdots+a_n\r)$ has no roots on $S^1\iso\l\{\l|z\r|=R\r\}$ for any $0\leq t\leq 1$. Consider the polynomial $\widetilde{f}_t$ defined by replacing $p$ with $p_t$ and setting $r\coloneqq R$ in $\ref{\ast}$, which, as $t$ varies from $0$ to $1$, is a homotopy from $\omega_n\coloneqq e^{2\pi ins}$ to $f_R$. Thus $\omega_n\htopeq f_R\htopeq\omega_0$, and since $\Phi:\Z\to\pi_1\!\l(S^1\r):n\mapsto\l[\omega_n\r]$ is injective, we see that $n=0$. Thus $p$ is constant, giving us the desired contradiction.<span style="float:right;">$\blacklozenge$</span>
