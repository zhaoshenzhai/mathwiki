<div class="topSpace"></div>

Date Created: 20/09/2022 12:48:40
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: [[Euclid's Lemma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: [[Unique Factorization Domain (UFD)]]

``` ad-Theorem
title: Theorem (Fundamental Theorem of Arithmetic).

Let $n\in\mb{N}$ with $n>1$. Then, for some $k\geq1$, there exist prime numbers $p_1<\cdots<p_k$ and positive integers $\alpha_1,\dots,\alpha_k$ such that $n=p_1^{\alpha_1}\cdots p_k^{\alpha_k}$. Moreover, if $n=q_1^{\beta_1}\cdots q_l^{\beta_l}$ for prime numbers $q_1<\cdots<q_l$ and positive integers $\beta_1,\dots,\beta_l$, then $k=l$ and, for all $i\in\l\{1,\dots,k\r\}$, we have $p_i=q_i$ and $\alpha_i=\beta_i$.

```

<i>Proof.</i> We proceed by strong induction. For $n=2$, we have $2=2^1$ and it is not the product of powers of any other primes. Now let $n>2$ and assume that the result holds true for all $m\in\mb{N}$ with $2\leq m<n$. If $n$ is prime, then $n=n^1$ and since $n$ does not have any other positive factors (other than $1$), this is the unique factorization and we are done. Thus assume that there exist $n_1,n_2\in\mb{N}$ with $1<n_1,n_2<n$ such that $n=n_1n_2$. By the induction hypothesis, there exist unique primes $\pi_1<\cdots<\pi_r$ and $\tau_1<\cdots<\tau_s$ and unique positive integers $a_1,\dots,a_r$ and $b_1,\dots,b_s$ such that
$$\begin{equation}
    n_1=\pi_1^{a_1}\cdots\pi_r^{a_r}\ \ \ \ \mathrm{and}\ \ \ \ n_2=\tau_1^{b_1}\cdots\tau_s^{b_s}.
\end{equation}$$
Let $P\coloneqq\l\{\pi_1,\dots,\pi_r,\tau_1,\dots,\tau_s\r\}$ (without repeats) and let $m:P\to\mb{N}$ be the multiset defined by
$$\begin{equation}
    m\l(p\r)\coloneqq
        \begin{dcases}
            a_i & \mathrm{if\ }\ex i:p=\pi_i\mathrm{\ and\ }\fa j:p\neq\tau_j\\
            b_j & \mathrm{if\ }\ex j:p=\tau_j\mathrm{\ and\ }\fa i:p\neq\pi_i\\
            a_i+b_j & \mathrm{if\ }\ex i,j:p=\pi_i=\tau_j
        \end{dcases}
\end{equation}$$
for all $p\in P$. Set $k\coloneqq\l|P\r|$ and
$$\begin{equation}
    \begin{alignedat}{3}
        p_1&\coloneqq\min P &&\alpha_1&&\coloneqq m\l(p_1\r)\\
        p_2&\coloneqq\min P\setminus\l\{p_1\r\} &&\alpha_2&&\coloneqq m\l(p_2\r)\\
           &\vdotswithin{\coloneqq}&& &&\vdotswithin{\coloneqq}\\
        p_k&\coloneqq\min P\setminus\l\{p_1,\dots,p_{k-1}\r\} \ \ \ \ \ \ \ \ &&\alpha_k&&\coloneqq m\l(p_k\r).
    \end{alignedat}
\end{equation}$$
Observe then that $p_1<\cdots<p_k$ are all distinct and that $n=p_1^{\alpha_1}\cdots p_k^{\alpha_k}$. For uniqueness, assume that there exist primes $q_1<\cdots<q_l$ and positive integers $\beta_1,\dots,\beta_l$ such that $n=q_1^{\beta_1}\cdots q_l^{\beta_l}$ too. If $k=l=1$ and $\alpha_1=\beta_1=1$, then we are done. Otherwise, we have
$$\begin{equation}
    q_1^{\beta_1}\cdots q_l^{\beta_l}=p_1\l(p_1^{\alpha_1-1}\cdots p_k^{\alpha_k}\r)\ \ \ \ \Rightarrow\ \ \ \ p_1\l|\l(q_1^{\beta_1}\cdots q_l^{\beta_l}\r)\r..
\end{equation}$$
By Euclid’s Lemma, there exists $j\in\l\{1,\dots,l\r\}$ such that $p_1\divides q_j$. But since $p$ is prime, it must be the case that $p_1=q_j$. Similarly, there exists $i\in\l\{1,\dots,k\r\}$ such that $q_1\divides p_i$ which implies that $q_1=p_i$. Thus we obtain
$$\begin{equation}
    p_1\leq p_i=q_1\leq q_j=p_1,
\end{equation}$$
so $p_1=q_1$ and hence can be cancelled from both expressions of $n$ to obtain
$$\begin{equation}
    n'\coloneqq p_1^{\alpha_1-1}\cdots p_k^{\alpha_k}=q_1^{\beta_1-1}\cdots q_l^{\beta_l}.
\end{equation}$$
Since $p_1=q_1>1$, we see that $n'<n$. Since $k,l>1$, we have $n'\geq2$. By the induction hypothesis, we have $k=l$, and, for all $i\in\l\{1,\dots,k\r\}$, we have $p_i=q_i$ and $\alpha_i=\beta_i$.<span style="float:right;">$\blacksquare$</span>
