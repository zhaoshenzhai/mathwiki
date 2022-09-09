<div class="topSpace"></div>

Date Created: 30/03/2022 13:50:51
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{K,+,\cdot,0,1}$ be a field and consider any vector space $\tpl{V,K,\boxplus,\boxdot,0_V}$ over $K$. Then the following algebraic identities hold:_
* _(Right-absorbing element of $\boxdot$): $\fa\alpha\in K:\alpha\boxdot0_V=0_V$._

* _(Left-absorbing element of $\boxdot$): $\fa v\in V:0\boxdot v=0_V$._
* _(Dichotomy of $0_V$ w.r.t. $\boxdot$): $\fa\alpha\in K,\fa v\in V:\alpha\boxdot v=0_V\Rightarrow\l(\alpha=0\lor v=0_V\r)$._
* _(Compatibility of $K$-additive inverse and $\boxdot$): $\fa v\in V:\l(-1\r)\boxdot v=-v=1\boxdot\l(-v\r)$._

_In addition, we have the following cancellation laws:_
* _(Left-cancellation of scalars): $\fa\alpha\in K,\fa v,w\in V:\alpha\neq0\Rightarrow\l(\alpha\boxdot v=\alpha\boxdot w\Rightarrow v=w\r)$._

* _(Right-cancellation of vectors): $\fa\alpha,\beta\in K,\fa v\in V:v\neq0_V\Rightarrow\l(\alpha\boxdot v=\beta\boxdot v\Rightarrow\alpha=\beta\r)$._

```

_Proof_. Take $\alpha\in K$ and $v\in V$.
* (Right-absorbing element of $\boxdot$): Observe that
$$\begin{equation}
    \begin{aligned}
        \alpha\boxdot0_V&=0_V\boxplus\l(\alpha\boxdot0_V\r) && \textrm{$0_V$ is the neutral element of $\boxplus$} \\
        &=\l[-\l(\alpha\boxdot0_V\r)\boxplus\l(\alpha\boxdot0_V\r)\r]\boxplus\l(\alpha\boxdot0_V\r) && \textrm{$-\l(\alpha\boxdot0_V\r)$ is the $\boxplus$-inverse of $\alpha\boxdot0_V$} \\
        &=-\l(\alpha\boxdot0_V\r)\boxplus\l[\l(\alpha\boxdot0_V\r)\boxplus\l(\alpha\boxdot0_V\r)\r] && \textrm{Associativity of $\boxplus$} \\
        &=-\l(\alpha\boxdot0_V\r)\boxplus\l[\alpha\boxdot\l(0_V\boxplus0_V\r)\r] && \textrm{Left-distribution of scalars} \\
        &=-\l(\alpha\boxdot0_V\r)\boxplus\l(\alpha\boxdot0_V\r) && \textrm{$0_V$ is the neutral element of $\boxplus$} \\
        &=0_V. && \textrm{$-\l(\alpha\boxdot0_V\r)$ is the $\boxplus$-inverse of $\alpha\boxdot0_V$}
    \end{aligned}
\end{equation}$$

* (Left-absorbing element of $\boxdot$): Similarly, observe that
$$\begin{equation}
    \begin{aligned}
        0\boxdot v &=0_V\boxplus\l(0\boxdot v\r) && \textrm{$0_V$ is the neutral element of $\boxplus$} \\
        &=\l[-\l(0\boxdot v\r)\boxplus\l(0\boxdot v\r)\r]\boxplus0\boxdot v && \textrm{$-\l(0\boxdot v\r)$ is the $\boxplus$-inverse of $0\boxdot v$} \\
        &=-\l(0\boxdot v\r)\boxplus\l[\l(0\boxdot v\r)\boxplus\l(0\boxdot v\r)\r] && \textrm{Associativity of $\boxplus$} \\
        &=-\l(0\boxdot v\r)\boxplus\l(0+0\r)\boxdot v && \textrm{Right-distribution of vectors} \\
        &=-\l(0\boxdot v\r)\boxplus0\boxdot v && \textrm{$0$ is the neutral element of $+$} \\
        &=0_V. && \textrm{$-\l(0\boxdot v\r)$ is the $\boxplus$-inverse of $0\boxdot v$}
    \end{aligned}
\end{equation}$$
* (Dichotomy of $0_V$ w.r.t. $\boxdot$): Consider the equation $\alpha\boxdot v=0_V$. If $\alpha=0$, there is nothing to show. Assume $\alpha\neq0$ and observe that
$$\begin{equation}
    \begin{aligned}
        v&=1\boxdot v && \textrm{$1$ is the left-identity element of $\boxdot$} \\
        &=\l(\alpha^{-1}\cdot\alpha\r)\boxdot v &&\textrm{$\alpha\neq0$; $\alpha^{-1}$ is the $\cdot$-inverse of $\alpha$} \\
        &=\alpha^{-1}\boxdot\l(\alpha\boxdot v\r) && \textrm{Compatibility of $\cdot$ and $\boxdot$} \\
        &=\alpha^{-1}\boxdot0_V && \textrm{Assumption} \\
        &=0_V. &&\textrm{$0_V$ is the right-absorbing element of $\boxdot$}
    \end{aligned}
\end{equation}$$
* (Compatibility of $K$-additive inverse and $\boxdot$): Finally, observe that
$$\begin{equation}
    \begin{aligned}
        \l(-1\r)\boxdot v&=0_V\boxplus\l[\l(-1\r)\boxdot v\r] && \textrm{$0_V$ is the neutral element of $\boxplus$} \\
        &=\l[\l(-v\r)\boxplus v\r]\boxplus\l[\l(-1\r)\boxdot v\r] && \textrm{$(-v)$ is the $\boxplus$-inverse of $v$} \\
        &=\l(-v\r)\boxplus\l[v\boxplus\l(\l(-1\r)\boxdot v\r)\r] &&\textrm{Associativity of $\boxplus$} \\
        &=\l(-v\r)\boxplus\l[\l(1\boxdot v\r)\boxplus\l(\l(-1\r)\boxdot v\r)\r] &&\textrm{1 is the left-identity element of $\boxdot$} \\
        &=\l(-v\r)\boxplus\l[\l(1+\l(-1\r)\r)\boxdot v\r] && \textrm{Right-distribution of vectors} \\
        &=\l(-v\r)\boxplus\l(0\boxdot v\r) &&\textrm{$-1$ is the $+$-inverse of $1$} \\
        &=\l(-v\r)\boxplus0_V &&\textrm{$0$ is the left-absorbing element of $\boxdot$} \\
        &=-v. && \textrm{$0_V$ is the neutral element of $\boxplus$}
    \end{aligned}
\end{equation}$$
Now for the cancellation laws.
* Take $v,w\in V$ and $\alpha\in K$ non-zero. Observe then that $\alpha\boxdot v=\alpha\boxdot w$ implies
$$\begin{equation}
    \begin{aligned}
        v&=1\boxdot v && \textrm{$1$ is the left-identity element of $\boxdot$} \\
        &=\l(\alpha^{-1}\cdot\alpha\r)\boxdot v && \textrm{$\alpha^{-1}$ is the $\cdot$-inverse of $\alpha$} \\
        &=\alpha^{-1}\boxdot\l(\alpha\boxdot v\r) && \textrm{Compatibility of $\cdot$ and $\boxdot$} \\
        &=\alpha^{-1}\boxdot\l(\alpha\boxdot w\r) && \textrm{Assumption} \\
        &=\l(\alpha^{-1}\cdot\alpha\r)\boxdot w && \textrm{Compatibility of $\cdot$ and $\boxdot$} \\
        &=1\boxdot w && \textrm{$\alpha^{-1}$ is the $\cdot$-inverse of $\alpha$} \\
        &=w. && \textrm{$1$ is the left-identity element of $\boxdot$}
    \end{aligned}
\end{equation}$$
* Take $\alpha,\beta\in K$ and $v\in V$ non-zero. Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha\boxdot v&=\beta\boxdot v && \textrm{Assumption} \\
        \l[\alpha\boxdot v\r]\boxplus\l[-\l(\beta\boxdot v\r)\r]&=\beta\boxdot v\boxplus\l[-\l(\beta\boxdot v\r)\r] && \textrm{Substitution} \\
        \l[\alpha\boxdot v\r]\boxplus\l[\l(-\beta\r)\boxdot v\r]&=\beta\boxdot v\boxplus\l[-\l(\beta\boxdot v\r)\r] && \textrm{Compatibility of $\cdot$ and $\boxdot$} \\
        \l[\alpha\boxdot v\r]\boxplus\l[\l(-\beta\r)\boxdot v\r]&=0_V && \textrm{$-\l(\beta\boxdot v\r)$ is the $\boxplus$-inverse of $\beta\boxdot v$} \\
        \l[\alpha+\l(-\beta\r)\r]\boxdot v&=0_V, && \textrm{Right-distribution of vectors}
    \end{aligned}
\end{equation}$$
which, because $v\neq0_V$, the dichotomy of $0_V$ w.r.t. $\boxdot$ implies that $\alpha+\l(-\beta\r)=0$. The result follows.<span style="float:right;">$\blacksquare$</span>
