<div class="topSpace"></div>

Date Created: 07/05/2023 19:09:47
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Characterizations of normality]], [[Basic properties of cosets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group. Then $\l[G,G\r]\nsubgrpeq G$ and the quotient $G^\textrm{ab}\coloneqq G/\l[G,G\r]$ is abelian._

```

_Proof_. To show that $\l[G,G\r]\nsubgrpeq G$, we first note that $g\l[x,y\r]g^{-1}=\l[gxg^{-1},gyg^{-1}\r]$ and that $\l[x,y\r]^{-1}=\l[y,x\r]$. Thus $g\l[x,y\r]^{-1}g^{-1}=\l[gxg^{-1},gyg^{-1}\r]^{-1}$ too. Then since
$$\begin{equation}
    \l[G,G\r]=\l\{\l[x_1,y_1\r]^{\epsilon_i}\cdots\l[x_n,y_n\r]^{\epsilon_n}\mid x_i,y_i\in G\land\epsilon_i=\pm1\r\},
\end{equation}$$
we see that
$$\begin{equation}
    \begin{aligned}
        g\l[G,G\r]g^{-1}&=\l\{g\l[x_1,y_1\r]^{\epsilon_1}g^{-1}\cdots g\l[x_n,y_n\r]^{\epsilon_n}g^{-1}\mid x_i,y_i\in G\land\epsilon_i=\pm1\r\} \\
        &=\l\{\l[gx_1g^{-1},gy_1g^{-1}\r]^{\epsilon_1}\cdots\l[gx_ng^{-1},gy_ng^{-1}\r]^{\epsilon_n}\mid x_i,y_i\in G\land\epsilon_i=\pm1\r\} \\
        &\subgrpeq\l[G,G\r].
    \end{aligned}
\end{equation}$$
To check that $G^\textrm{ab}$ is abelian, take $x,y\in G$ and observe that
$$\begin{equation}
    x\l[G,G\r]\cdot y\l[G,G\r]=\l(xy\r)\l[G,G\r]=\l(xyy^{-1}x^{-1}yx\r)\l[G,G\r]=\l(yx\r)\l[G,G\r]=y\l[G,G\r]\cdot x\l[G,G\r].\qedin
\end{equation}$$
