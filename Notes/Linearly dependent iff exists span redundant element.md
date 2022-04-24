---
alias: auto_aliasing
---

<br />
<br />

Date Created: 05/04/2022 20:13:04
Tags: #Proposition #Closed

Proved by: [[Linear span is set of all linear combinations]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then the following statements are equivalent:_
1. _$S$ is linearly dependent._
2. _There exists a sequence $s_1,\dots,s_n\in S$ with $n>0$ and some $l\in\l\{1,\dots,n\r\}$ such that_
$$\begin{equation}
    s_l\in\span\l\{s_1,\dots,s_{l-1}\r\}.
\end{equation}$$
2. _There exists a sequence $s_1,\dots,s_n\in S$ with $n>0$ and some $l\in\l\{1,\dots,n\r\}$ such that_
$$\begin{equation}
    \span\l\{s_1,\dots,s_n\r\}=\span\l(\l\{s_1,\dots,s_n\r\}\setminus\l\{s_l\r\}\r).
\end{equation}$$

```

_Proof_.
* ($1\Rightarrow2$): Since $S$ is linearly dependent, there exist $\alpha_1,\dots,\alpha_n\in K$, not all of which are zero, and a sequence $s_1,\dots,s_n\in S$ such that
$$\begin{equation}
    \sum_{i=1}^n\alpha_is_i=0_V
\end{equation}$$
for some $n\in\N^\ast$. We claim that $l=\max\l\{i\in\l\{1,\dots,n\r\}\mid\alpha_i\neq0\r\}$.

  * If $l=1$, then $\alpha_1\neq0$ and $\alpha_i=0$ for all $i\in\l\{2,\dots,n\r\}$. It follows then that $\alpha_1s_1=0_V$, so $s_1=0_V$. Observe then that
$$\begin{equation}
    s_1\in\l\{0_V\r\}=\span\l(\em\r)=\span\l\{s_1,\dots,s_0\r\}.
\end{equation}$$

  * Otherwise, if $l>1$, then $\sum_{i=1}^l\alpha_is_i=0_V$ which implies that
$$\begin{equation}
    \alpha_ls_l=-\sum_{i=1}^{l-1}\alpha_is_i.
\end{equation}$$
Since $\alpha_l\neq0$, we see that
$$\begin{equation}
    s=\sum_{i=1}^{l-1}\l(-\frac{\alpha_i}{\alpha_1}\r)s_i
\end{equation}$$
from which the result follows.
* ($2\Rightarrow3$): The backwards inclusion is trivial since $\l\{s_1,\dots,s_n\r\}\setminus\l\{s_l\r\}\subseteq\l\{s_1,\dots,s_n\r\}$. For the forward direction, take $v\in\span\l\{s_1,\dots,s_n\r\}$ so there exist coefficients $\alpha_1,\dots,\alpha_n\in K$ such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_is_i
\end{equation}$$
By hypothesis, there exists $l\in\l\{1,\dots,n\r\}$ such that $s_l\in\span\l\{s_1,\dots,s_{l-1}\r\}$, so
$$\begin{equation}
    s_l=\sum_{i=1}^{l-1}\beta_is_i
\end{equation}$$
for some $\beta_1,\dots,\beta_{l-1}\in K$. Observe then that
$$\begin{equation}
    \begin{aligned}
        v&=\sum_{i=1}^{l-1}\alpha_is_i+\alpha_l\sum_{i=1}^{l-1}\beta_is_i+\sum_{\mathclap{i=l+1}}^n\alpha_is_i \\
        &=\sum_{i=1}^{l-1}\l(\alpha_i+\alpha_l\beta_i\r)s_i+\sum_{\mathclap{i=l+1}}^n\alpha_is_i
    \end{aligned}
\end{equation}$$
which is a linear combination of vectors in $\l\{s_1,\dots,s_n\r\}\setminus\l\{s_l\r\}$. The result follows.
* ($3\Rightarrow1$): Since $\span\l\{s_1,\dots,s_n\r\}=\span\l(\l\{s_1,\dots,s_n\r\}\setminus\l\{s_l\r\}\r)$ for some $l\in\l\{1,\dots,n\r\}$, we see that
$$\begin{equation}
    s_l\in\span\l(\l\{s_1,\dots,s_n\r\}\setminus\l\{s_l\r\}\r).
\end{equation}$$
Thus there exist coefficients $\alpha_1,\dots,\alpha_{l-1},\alpha_{l+1},\dots,\alpha_n$ such that
$$\begin{equation}
    s_l=\sum_{i=1}^{l-1}\alpha_is_i+\sum_{\mathclap{i=l+1}}^n\alpha_is_i.
\end{equation}$$
It follows then that
$$\begin{equation}
    \sum_{i=1}^{l-1}\alpha_is_i+\l(-1\r)s_l+\sum_{\mathclap{i=l+1}}^n\alpha_is_i=0_V,
\end{equation}$$
so, setting $\alpha_l\coloneqq-1$, we see that
$$\begin{equation}
    \sum_{i=1}^n\alpha_is_i=0_V\ \ \ \ \textrm{and}\ \ \ \ \alpha_l\neq0.\qedin
\end{equation}$$
