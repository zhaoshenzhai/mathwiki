<br />
<br />

Date Created: 04/05/2022 12:41:37
Tags: #Proposition #Closed

Proved by: [[Function group is a group]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a non-empty set and let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field. Then the function space $\l\langle K^X,K,\oplus,\odot,0_f\r\rangle$ from $X$ into $K$ is a vector space over $K$._

```

_Proof_. Observe that $\l\langle K^X,\oplus,0_f\r\rangle$ is an Abelian group, so it suffices to verify the rest of the vector space axioms.
* ($\axivec[1]$): Take $\alpha_1,\alpha_2\in K$ and $f\in K^X$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha_1\odot\l(\alpha_2\odot f\r)\r]\l(x\r)&=\alpha_1\cdot\l(\alpha_2\odot f\r)\l(x\r) && \textrm{Definition of $\odot$} \\
        &=\alpha_1\cdot\l[\alpha_2\cdot f\l(x\r)\r] && \textrm{Definition of $\odot$} \\
        &=\l(\alpha_1\cdot\alpha_2\r)\cdot f\l(x\r) && \textrm{Associativity of $\cdot$} \\
        &=\l[\l(\alpha_1\cdot\alpha_2\r)\odot f\r]\l(x\r) && \textrm{Definition of $\odot$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $\alpha_1\odot\l(\alpha_2\odot f\r)=\l(\alpha_1\cdot\alpha_2\r)\odot f$.

* ($\axivec[2]$): Take $f\in K^X$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(1\odot f\r)\l(x\r)&=1\cdot f\l(x\r) && \textrm{Definition of $\odot$} \\
        &=f\l(x\r) && \textrm{$1$ is the multiplicative identity of $K$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $1\odot f=f$.
* ($\axivec[3]$): Take $\alpha\in K$ and $f,g\in K^X$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha\odot\l(f\oplus g\r)\r]\l(x\r)&=\alpha\cdot\l(f\oplus g\r)\l(x\r) && \textrm{Defintion of $\odot$} \\
        &=\alpha\cdot\l[f\l(x\r)+g\l(x\r)\r] && \textrm{Definition of $\oplus$} \\
        &=\l[\alpha\cdot f\l(x\r)\r]+\l[\alpha\cdot g\l(x\r)\r] && \textrm{Distribution of $+$ over $\cdot$} \\
        &=\l(\alpha\odot f\r)\l(x\r)+\l(\alpha\odot g\r)\l(x\r) && \textrm{Definition of $\odot$} \\
        &=\l[\l(\alpha\odot f\r)\oplus\l(\alpha\odot g\r)\r]\l(x\r) && \textrm{Definition of $\oplus$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $\alpha\odot\l(f\oplus g\r)=\l(\alpha\odot f\r)\oplus\l(\alpha\odot g\r)$.
* ($\axivec[4]$): Take $\alpha_1,\alpha_2\in K$ and $f\in K^X$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\l(\alpha_1+\alpha_2\r)\odot f\r]\l(x\r)&=\l(\alpha_1+\alpha_2\r)\cdot f\l(x\r) && \textrm{Definitio of $\odot$} \\
        &=\l[\alpha_1\cdot f\l(x\r)\r]+\l[\alpha_2\cdot f\l(x\r)\r] && \textrm{Distribution of $+$ over $\cdot$} \\
        &=\l[\l(\alpha_1\odot f\r)\l(x\r)\r]+\l[\l(\alpha_2\odot f\r)\l(x\r)\r] && \textrm{Definition of $\odot$} \\
        &=\l[\l(\alpha_1\odot f\r)\oplus\l(\alpha_2\odot f\r)\r]\l(x\r) && \textrm{Definition of $\oplus$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $\l(\alpha_1+\alpha_2\r)\odot f=\l(\alpha_1\odot f\r)\oplus\l(\alpha_2\odot f\r)$.<span style="float:right;">$\blacksquare$</span>
