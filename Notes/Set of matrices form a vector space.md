<br />
<br />

Date Created: 31/03/2022 21:26:30
Tags: #Proposition #Closed 

Proved by: [[Additive matrix group is an Abelian group]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot\r\rangle$ be a field and fix $m,n\in\N$. Then the set $\mat{m\times n}{K}$ forms a vector space under the operations of matrix addition and scalar-matrix multiplication._

```

_Proof_. Observe that $\l\langle\mat{m\times n}{K},\oplus,0_{mn}\r\rangle$ is an Abelian group, so it suffices to verify the rest of the vector space axioms.
* ($\axivec[1]$): Take $\alpha_1,\alpha_2\in K$ and $\l[a_{ij}\r]\in\mat{m\times n}{K}$, and observe that
$$\begin{equation}
    \begin{aligned}
        \alpha_1\odot\l(\alpha_2\odot\l[a_{ij}\r]\r)&=\alpha_1\odot\l[\alpha_2\cdot a_{ij}\r] && \textrm{Definition of $\odot$} \\
        &=\l[\alpha_1\cdot\l(\alpha_2\cdot a_{ij}\r)\r] && \textrm{Definition of $\odot$} \\
        &=\l[\l(\alpha_1\cdot\alpha_2\r)\cdot a_{ij}\r]&& \textrm{Associativity of $\cdot$} \\
        &=\l(\alpha_1\cdot\alpha_2\r)\odot\l[a_{ij}\r]. && \textrm{Definition of $\odot$}
    \end{aligned}
\end{equation}$$
* ($\axivec[2]$): Take $\l[a_{ij}\r]\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        1\odot\l[a_{ij}\r]&=\l[1\cdot a_{ij}\r] && \textrm{Definition of $\odot$} \\
        &=\l[a_{ij}\r]. && \textrm{1 is the multiplicative identity of $K$}
    \end{aligned}
\end{equation}$$
* ($\axivec[3]$): Take $\alpha\in K$ and $\l[a_{ij}\r],\l[b_{ij}\r]\in\mat{m\times n}{K}$, and observe that
$$\begin{equation}
    \begin{aligned}
        \alpha\odot\l(\l[a_{ij}\r]\oplus\l[b_{ij}\r]\r)&=\alpha\odot\l[a_{ij}+b_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=\l[\alpha\cdot\l(a_{ij}+b_{ij}\r)\r] && \textrm{Definition of $\odot$} \\
        &=\l[\l(\alpha\cdot a_{ij}\r)+\l(\alpha\cdot b_{ij}\r)\r] && \textrm{Distribution of $\cdot$ over $+$} \\
        &=\l[\alpha\cdot a_{ij}\r]\oplus\l[\alpha\cdot b_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=\l(\alpha\odot\l[a_{ij}\r]\r)\oplus\l(\alpha\cdot\l[b_{ij}\r]\r). && \textrm{Definition of $\odot$}
    \end{aligned}
\end{equation}$$
* ($\axivec[4]$): Take $\alpha_1,\alpha_2\in K$ and $\l[a_{ij}\r]\in\mat{m\times n}{K}$, and observe that

$\begin{align}
    \l(\alpha_1+\alpha_2\r)\odot\l[a_{ij}\r]&=\l[\l(\alpha_1+\alpha_2\r)\cdot a_{ij}\r] && \textrm{Definition of }\odot \\
    &=\l[\l(\alpha_1\cdot a_{ij}\r)+\l(\alpha_2\cdot a_{ij}\r)\r] && \textrm{Distribution of }\cdot\textrm{ over }+ \\
    &=\l[\alpha\cdot a_{ij}\r]\oplus\l[\alpha_2\cdot a_{ij}\r] && \textrm{Definition of }\oplus \\
    &=\l(\alpha_1\odot\l[a_{ij}\r]\r)\oplus\l(\alpha_2\odot\l[a_{ij}\r]\r). && \textrm{Definition of }\odot\qedin
\end{align}$
