<div class="topSpace"></div>

Date Created: 20/10/2022 17:41:09
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Sequential Limit Theorems in R]], [[Limit of geometric]], [[Squeezed Distance Lemma]], [[Comparison Test (Sequence)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Ratio Test for Sequences).

Let $\tpl{x_n}_{n\in\N}$ be a sequence in $\R$ such that $\fa^\infty n\in\N:x_n\neq0$ and set
$$\begin{equation}
    L\coloneqq\lim\limits_{n\to\infty}\l|\frac{x_{n+1}}{x_n}\r|.
\end{equation}$$
If $L<1$, then $\lim\limits_{n\to\infty}x_n=0$. Otherwise, if $L>1$, then $\lim\limits_{n\to\infty}\l|x_n\r|=+\infty$.

```

<b>Remark.</b> If $L=1$, then the test is inconclusive.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Since $\l|x_{n+1}/x_n\r|\geq0$ for all $n\in\N$, we see that $L\geq0$.
* ($L<1$). Let $\lambda\in\R$ be such that $L<\lambda<1$ and set $\epsilon\coloneqq\lambda-L>0$. Then, since $\l|x_{n+1}/x_n\r|$ converges to $L$, we see that
$$\begin{equation}
    \l|\l|\frac{x_{n+1}}{x_n}\r|-L\r|<\epsilon
\end{equation}$$
for all eventually $n\in\N$, say for all $n\geq N$. Hence
$$\begin{equation}
    \l|\frac{x_{n+1}}{x_n}\r|<L+\epsilon=L+\l(\lambda-L\r)=\lambda
\end{equation}$$
for all $n\geq N$, so we obtain the sequence
$$\begin{equation}
    0<\l|x_{n+1}\r|<\l|x_n\r|\lambda<\l|x_{n-1}\r|\lambda^2<\cdots<\l|x_{N+1}\r|\lambda^{n-N}<\l|x_N\r|\lambda^{n-N+1}
\end{equation}$$
of inequalities. Thus
$$\begin{equation}
    d\l(x_n,0\r)=\l|x_n\r|<\l|x_N\r|\lambda^{n-N}=\frac{\l|x_N\r|}{\lambda^N}\lambda^n,
\end{equation}$$
and since $\lambda^n\to0$ as $n\to\infty$, we see that $\lim\limits_{n\to\infty}x_n=0$.

* ($L>1$): Let $\lambda\in\R$ be such that $1<\lambda<L$ and set $\epsilon\coloneqq L-\lambda>0$. Then, since $\l|x_{n+1}/x_n\r|$ converges to $L$, we see that
$$\begin{equation}
    \l|\l|\frac{x_{n+1}}{x_n}\r|-L\r|<\epsilon
\end{equation}$$
for all eventually $n\in\N$, say for all $n\geq N$. Hence
$$\begin{equation}
    -\epsilon<\l|\frac{x_{n+1}}{x_n}\r|-L
\end{equation}$$
for all $n\geq N$, so
$$\begin{equation}
    \l|\frac{x_{n+1}}{x_n}\r|>L-\epsilon=L-\l(L-\lambda\r)=\lambda
\end{equation}$$
for all $n\geq N$. Thus we obtain the sequence
$$\begin{equation}
    \l|x_{n+1}\r|>\l|x_n\r|\lambda>\l|x_{n-1}\r|\lambda^2>\cdots>\l|x_{N+1}\r|\lambda^{n-N}>\l|x_N\r|\lambda^{n-N+1}
\end{equation}$$
of inequalities, so
$$\begin{equation}
    d\l(x_n,0\r)=\l|x_n\r|>\l|x_N\r|\lambda^{n-N}=\frac{\l|x_N\r|}{\lambda^N}\lambda^n.
\end{equation}$$
But since $\frac{\l|x_N\r|}{\lambda^N}\lambda^n\to+\infty$ as $n\to\infty$ and $d\l(x_n,0\r)>\frac{\l|x_N\r|}{\lambda^N}\lambda^n$ for sufficiently large $n\in\N$, we see that $\tpl{\l|x_n\r|}$ converges to $+\infty$.<span style="float:right;">$\blacksquare$</span>
