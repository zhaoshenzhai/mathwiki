---
mathLink: $\frac{1}{an+b}\to0$
---

<div class="topSpace"></div>

Date Created: 04/10/2022 13:01:40
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Archimedean Property of R]], [[Squeezed Distance Lemma]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

For all $a,b\in\R^+$, we have $\lim\limits_{n\to\infty}\frac{1}{an+b}=0$.

```

_Proof_. We shall first prove that $\lim\limits_{n\to\infty}1/n=0$.
* Let $\epsilon>0$. Then, by Archimedeanity of $\R$, there exists some $N\in\N$ such that $1/N<\epsilon$. Then $N>1/\epsilon$, so set
$$\begin{equation}
    N\coloneqq\l\lceil\frac{1}{\epsilon}\r\rceil.
\end{equation}$$
Then, for all $n\geq N$, we see that $n>\l\lceil1/\epsilon\r\rceil>1/\epsilon$ and hence $\epsilon<1/n$. Thus $d\l(0,1/n\r)<\epsilon$, so $\lim\limits_{n\to\infty}1/n=0$.

Now, observe that $an+b>an$ and so $\frac{1}{an+b}<\frac{1}{an}$. Hence
$$\begin{equation}
    d\l(\frac{1}{an+b},0\r)=\l|\frac{1}{an+b}\r|=\frac{1}{an+b}<\frac{1}{an}=\frac{1}{a}\cdot\frac{1}{n},
\end{equation}$$
but since $1/n\to0$ as $n\to\infty$, we see that $\lim\limits_{n\to\infty}\frac{1}{an+b}=0$.<span style="float:right;">$\blacksquare$</span>
