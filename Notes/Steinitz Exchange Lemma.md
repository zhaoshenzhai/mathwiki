<div class="topSpace"></div>

Date Created: 06/04/2022 21:12:19
Tags: #Type/Theorem #Topic/Linear_Algebra

Proved by: [[Linearly dependent iff exists span redundant element]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Steinitz Exchange Lemma).

Let $S\coloneqq\l\{s_1,\dots,s_n\r\}$ and $L\coloneqq\l\{l_1,\dots,l_m\r\}$ be finite subsets of a (finite-dimensional) vector space $V$ over a field $K$. If $L$ is a linearly independent set and $\span S=V$, then $\l|L\r|\leq\l|S\r|$.

Furthermore, there exists a subset $T\subseteq S$ with $\l|T\r|=\l|S\r|-\l|L\r|$ such that $\span\l(L\cup T\r)=V$.

```

<i>Proof.</i> We proceed by induction on $m$.
* If $m=0$, then $L=\em$ and thus $\l|L\r|\leq\l|S\r|$ trivially. Take $T\coloneqq S$ and observe that $\span\l(L\cup T\r)=\span T=\span S=V$.

Assume now that the theorem holds for some $m\in\N$ and let $L=\l\{l_1,\dots,l_{m+1}\r\}$ be linearly independent. It follows then that $L'\coloneqq\l\{l_1,\dots,l_m\r\}$ is linearly independent, so, by our induction hypothesis, we see that $m=\l|L'\r|\leq\l|S\r|=n$ and there is some subset $T'\coloneqq\l\{s_1,\dots,s_{n-m}\r\}\subseteq S$ such that $\span\l(L'\cup T'\r)=V$. Thus there exist coefficients $\alpha_1,\dots,\alpha_m,\beta_1,\dots,\beta_{n-m}$ such that
$$\begin{equation}
    l_{m+1}=\sum_{i=1}^m\alpha_il_i+\sum_{i=1}^{\mathclap{n-m}}\beta_is_i.\cref{\ast_1}
\end{equation}$$
Note that the second sum must not vanish, lest $l_{m+1}\in\span\l\{l_1,\dots,l_m\r\}$, contradicting the independence of $L$. This amounts to $n>m$ and $\beta_j\neq0$ for some $j\in\l\{1,\dots,n-m\r\}$; w.l.o.g., assume $j=1$. Hence $\l|L\r|=m+1\leq n=\l|S\r|$, proving the first part. For the second, rearrange $\ref{\ast_1}$ to obtain
$$\begin{equation}
    s_1=\frac{1}{\beta_1}\l(l_{m+1}-\sum_{i=1}^m\alpha_il_i-\sum_{i=2}^{\mathclap{n-m}}\beta_is_i\r).\cref{\ast_2}
\end{equation}$$
Let $T\coloneqq\l\{s_2,s_3,\dots,s_{n-m}\r\}$, so $\l|T\r|=n-m-2+1=n-\l(m+1\r)=\l|S\r|-\l|L\r|$. It remains to show that $\span\l(L\cup T\r)=V$. To this end, observe that $\span\l(L'\cup T'\r)=V$ is the smallest subspace of $V$ containing $L'\cup T'$, so the result follows if we show that $L'\cup T'\subseteq\span\l(L\cup T\r)$. Clearly $L'\cup T\subseteq\span\l(L\cup T\r)$, and $\ref{\ast_2}$ implies that $s_1\in\span\l(L\cup T\r)$.<span style="float:right;">$\blacksquare$</span>
