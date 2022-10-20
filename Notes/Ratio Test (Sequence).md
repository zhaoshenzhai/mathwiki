<div class="topSpace"></div>

Date Created: 20/10/2022 17:41:09
Tags: #Proposition #In_Progress

Proved by: [[Basic properties of limits]], [[Limit of power; base between 0 and 1]], [[Squeeze Lemma]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition (Ratio Test).

_Let_ $\tpl{x_n}_{n\in\N}$ _be a sequence in $\R$ and set_
$$\begin{equation}
    L\coloneqq\lim\limits_{n\to\infty}\l|\frac{x_{n+1}}{x_n}\r|.
\end{equation}$$
_If $L<1$, then_ $\lim\limits_{n\to\infty}x_n=0$_. Otherwise, if $L>1$, then_ $\lim\limits_{n\to\infty}x_n=\pm\infty$_._

```

**Remark.** If $L=1$, then the test is inconclusive.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Since $\l|x_{n+1}/x_n\r|\geq0$ for all $n\in\N$, we see that $L\geq0$.
* ($L<1$). Let $\lambda\in\R$ be such that $L<\lambda<1$ and set $\epsilon\coloneqq\lambda-L>0$. Then, since $x_{n+1}/x_n$ converges to $L$, we see that
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

* ($L>1$): 
