<br />
<br />

Date Created: 29/03/2022 16:47:41
Tags: #Proposition #Closed

Proved by: [[Additive tuple space is an Abelian group]]
Justifications: _Not Applicable_

Generalizations: [[Set of matrices form a vector space]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot\r\rangle$ be a field and fix $n\in\N^\ast$. Then the $n$-tuple space $\l\langle K^n,K,\oplus,\odot,\v{0}\r\rangle$ over $K$ is a vector space._

```

_Proof_. Observe that $\l\langle K^n,\oplus,\v{0}\r\rangle$ is an Abelian group, so it suffices to verify the rest of the vector space axioms.
* ($\axivec[1]$): Take $\alpha_1,\alpha_2\in K$ and $\v{x}\in K^n$, and observe that
$$\begin{equation}
    \begin{aligned}
        \alpha_1\odot\l(\alpha_2\odot\v{x}\r)&=\alpha_1\odot\l\langle\alpha_2\cdot x_1,\dots,\alpha_2\cdot x_n\r\rangle && \textrm{Definition of $\odot$} \\
        &=\l\langle\alpha_1\cdot\l(\alpha_2\cdot x_1\r),\dots,\alpha_1\cdot\l(\alpha_2\cdot x_n\r)\r\rangle && \textrm{Definition of $\odot$} \\
        &=\l\langle\l(\alpha_1\cdot\alpha_2\r)\cdot x_1,\dots,\l(\alpha_1\cdot\alpha_2\r)\cdot x_n\r\rangle && \textrm{Associativity of $\cdot$} \\
        &=\l(\alpha_1\cdot\alpha_2\r)\odot\v{x}. && \textrm{Definition of $\odot$}
    \end{aligned}
\end{equation}$$
* ($\axivec[2]$): Take $\v{x}\in K^n$ and observe that
$$\begin{equation}
    \begin{aligned}
        1\odot\v{x}&=\l\langle1\cdot x_1,\dots,1\cdot x_n\r\rangle && \textrm{Definition of $\odot$} \\
        &=\v{x}. && \textrm{1 is the multiplicative identity of $K$}
    \end{aligned}
\end{equation}$$
* ($\axivec[3]$): Take $\alpha\in K$ and $\v{x},\v{y}\in K^n$, and observe that
$$\begin{equation}
    \begin{aligned}
        \alpha\odot\l(\v{x}\oplus\v{y}\r)&=\alpha\odot\l\langle x_1+y_1,\dots,x_n+y_n\r\rangle && \textrm{Definition of $\oplus$} \\
        &=\l\langle\alpha\cdot\l(x_1+y_1\r),\dots,\alpha\cdot\l(x_n+y_n\r)\r\rangle && \textrm{Definition of $\odot$} \\
        &=\l\langle\l(\alpha\cdot x_1\r)+\l(\alpha\cdot y_1\r),\dots,\l(\alpha\cdot x_n\r)+\l(\alpha\cdot y_n\r)\r\rangle && \textrm{Distribution of $\cdot$ over $+$} \\
        &=\l\langle\alpha\cdot x_1,\dots,\alpha\cdot x_n\r\rangle\oplus\l\langle\alpha\cdot y_1,\dots,\alpha\cdot y_n\r\rangle && \textrm{Definition of $\oplus$} \\
        &=\l(\alpha\odot\v{x}\r)\oplus\l(\alpha\cdot\v{y}\r). && \textrm{Definition of $\odot$}
    \end{aligned}
\end{equation}$$
* ($\axivec[4]$): Take $\alpha_1,\alpha_2\in K$ and $\v{x}\in K^n$, and observe that

$\begin{align}
    \l(\alpha_1+\alpha_2\r)\odot\v{x}&=\l\langle\l(\alpha_1+\alpha_2\r)\cdot x_1,\dots,\l(\alpha_1+\alpha_2\r)\cdot x_2\r\rangle && \textrm{Definition of }\odot \\
    &=\l\langle\l(\alpha_1\cdot x_1\r)+\l(\alpha_2\cdot x_1\r),\dots,\l(\alpha_1\cdot x_n\r)+\l(\alpha_2\cdot x_n\r)\r\rangle && \textrm{Distribution of }\cdot\textrm{ over }+ \\
    &=\l\langle\alpha_1\cdot x_1,\dots,\alpha_1\cdot x_n\r\rangle\oplus\l\langle\alpha_2\cdot x_1,\dots,\alpha_2\cdot x_n\r\rangle && \textrm{Definition of }\oplus \\
    &=\l(\alpha_1\odot\v{x}\r)\oplus\l(\alpha_2\odot\v{x}\r). && \textrm{Definition of }\odot\qedin
\end{align}$
