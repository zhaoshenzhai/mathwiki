<br />
<br />

Date Created: 30/03/2022 13:50:51
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field and consider any vector space $\l\langle V,K,\oplus,\odot,0_V\r\rangle$ over $K$. Some algebraic consequences are:_
* _(Right-absorbing element of $\odot$): $\fa\alpha\in K:\alpha\odot0_V=0_V$._

* _(Left-absorbing element of $\odot$): $\fa v\in V:0\odot v=0_V$._
* _(Dichotomy of $0_V$ w.r.t. $\odot$): $\fa\alpha\in K,\fa v\in V:\alpha\odot v=0_V\Rightarrow\l(\alpha=0\lor v=0_V\r)$._
* _(Compatibility of $K$-additive inverse and $\odot$): $\fa v\in V:\l(-1\r)\odot v=-v=1\odot\l(-v\r)$._

```

_Proof_. Take $\alpha\in K$ and $v\in V$.
* (Right-absorbing element of $\odot$): Observe that
$$\begin{equation}
    \begin{aligned}
        \alpha\odot0_V&=0_V\oplus\l(\alpha\odot0_V\r) && \textrm{$0_V$ is the neutral element of $\oplus$} \\
        &=\l[-\l(\alpha\odot0_V\r)\oplus\l(\alpha\odot0_V\r)\r]\oplus\l(\alpha\odot0_V\r) && \textrm{$-\l(\alpha\odot0_V\r)$ is the $\oplus$-inverse of $\alpha\odot0_V$} \\
        &=-\l(\alpha\odot0_V\r)\oplus\l[\l(\alpha\odot0_V\r)\oplus\l(\alpha\odot0_V\r)\r] && \textrm{Associativity of $\oplus$} \\
        &=-\l(\alpha\odot0_V\r)\oplus\l[\alpha\odot\l(0_V\oplus0_V\r)\r] && \textrm{Left-distributivity of scalars} \\
        &=-\l(\alpha\odot0_V\r)\oplus\l(\alpha\odot0_V\r) && \textrm{$0_V$ is the neutral element of $\oplus$} \\
        &=0_V. && \textrm{$-\l(\alpha\odot0_V\r)$ is the $\oplus$-inverse of $\alpha\odot0_V$}
    \end{aligned}
\end{equation}$$

* (Left-absorbing element of $\odot$): Similarly, observe that
$$\begin{equation}
    \begin{aligned}
        0\odot v &=0_V\oplus\l(0\odot v\r) && \textrm{$0_V$ is the neutral element of $\oplus$} \\
        &=\l[-\l(0\odot v\r)\oplus\l(0\odot v\r)\r]\oplus0\odot v && \textrm{$-\l(0\odot v\r)$ is the $\oplus$-inverse of $0\odot v$} \\
        &=-\l(0\odot v\r)\oplus\l[\l(0\odot v\r)\oplus\l(0\odot v\r)\r] && \textrm{Associativity of $\oplus$} \\
        &=-\l(0\odot v\r)\oplus\l(0+0\r)\odot v && \textrm{Right-distributivity of vectors} \\
        &=-\l(0\odot v\r)\oplus0\odot v && \textrm{$0$ is the neutral element of $+$} \\
        &=0_V. && \textrm{$-\l(0\odot v\r)$ is the $\oplus$-inverse of $0\odot v$}
    \end{aligned}
\end{equation}$$
* (Dichotomy of $0_V$ w.r.t. $\odot$): Consider the equation $\alpha\odot v=0_V$. If $\alpha=0$, there is nothing to show. Assume $\alpha\neq0$ and observe that
$$\begin{equation}
    \begin{aligned}
        v&=1\odot v && \textrm{$1$ is the left-identity element of $\odot$} \\
        &=\l(\alpha^{-1}\cdot\alpha\r)\odot v &&\textrm{$\alpha\neq0$; $\alpha^{-1}$ is the $\cdot$-inverse of $\alpha$} \\
        &=\alpha^{-1}\odot\l(\alpha\odot v\r) && \textrm{Compatibility of $\cdot$ and $\odot$} \\
        &=\alpha^{-1}\odot0_V && \textrm{Assumption} \\
        &=0_V. &&\textrm{$0_V$ is the right-absorbing element of $\odot$}
    \end{aligned}
\end{equation}$$
* (Compatibility of $K$-additive inverse and $\odot$): Finally, observe that
$$\begin{align}
    \l(-1\r)\odot v&=0_V\oplus\l[\l(-1\r)\odot v\r] && \textrm{$0_V$ is the neutral element of $\oplus$} \\
    &=\l[\l(-v\r)\oplus v\r]\oplus\l[\l(-1\r)\odot v\r] && \textrm{$(-v)$ is the $\oplus$-inverse of $v$} \\
    &=\l(-v\r)\oplus\l[v\oplus\l(\l(-1\r)\odot v\r)\r] &&\textrm{Associativity of $\oplus$} \\
    &=\l(-v\r)\oplus\l[\l(1\odot v\r)\oplus\l(\l(-1\r)\odot v\r)\r] &&\textrm{1 is the left-identity element of $\odot$} \\
    &=\l(-v\r)\oplus\l[\l(1+\l(-1\r)\r)\odot v\r] && \textrm{Right-distributivity of vectors} \\
    &=\l(-v\r)\oplus\l(0\odot v\r) &&\textrm{$-1$ is the $+$-inverse of $1$} \\
    &=\l(-v\r)\oplus0_V &&\textrm{$0$ is the left-absorbing element of $\odot$} \\
    &=-v. && \textrm{$0_V$ is the neutral element of $\oplus$}\qedin
\end{align}$$
