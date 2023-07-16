<div class="topSpace"></div>

Date Created: 16/07/2023 13:48:06
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Localization).

Let $S\subseteq R$ be a multiplicative subset of a commutative ring $R$. Then the map $\iota:R\to S^{-1}R:r\mapsto r/1$ is initial amongst ring homomorphisms $\phi:R\to Z$ to a commutative ring $Z$ with $\phi\l(S\r)\subseteq Z^\times$.
![[Images/2023-01-16_134335/image.svg|125]]Furthermore, such a homomorphism $\sigma:S^{-1}R\to Z$ is an isomorphism iff every $r\in\ker\phi$ satisfies $sr=0$ for some $s\in S$ and every $z\in Z$ can be written in the form $z=\phi\l(r\r)\phi\l(s\r)^{-1}$ for some $r\in R$ and $s\in S$.

```

<i>Proof.</i> Firstly, every $s/1\in\iota\l(S\r)$ is invertible since $s\in S$, so $1/s\in S^{-1}R$ and hence $s/1\cdot 1/s=\l(s1\r)/\l(1s\r)=1/1$. Now, let $\phi:R\to Z$ be an object in the category. Any homomorphism $\sigma:S^{-1}R\to Z$ must be such that
$$\begin{equation}
    \sigma\l(r/s\r)=\sigma\l(r/1\cdot1/s\r)=\sigma\l(r/1\r)\cdot\sigma\l(1/s\r)=\sigma\l(r/1\r)\sigma\l(s/1\r)^{-1}.
\end{equation}$$
Since $\sigma\l(a/1\r)=\sigma\l(\iota\l(a\r)\r)=\phi\l(a\r)$ for all $a\in R$, we see that $\sigma\l(r/s\r)=\phi\l(r\r)\phi\l(s\r)^{-1}$. We show that $\sigma$ defined as such is a ring homomorphism. Indeed, it is well-defined since if $t\l(r_1s_2-r_2s_1\r)=0$ for some $t\in S$, then $\phi\l(t\r)\l[\phi\l(r_1\r)\phi\l(s_2\r)-\phi\l(r_2\r)\phi\l(s_1\r)\r]=0$. Note that $\phi\l(t\r)\in Z^\times$ is invertible, so $\phi\l(r_1\r)\phi\l(s_2\r)-\phi\l(r_2\r)\phi\l(s_1\r)=0$. Multiplying by $\phi\l(s_i\r)^{-1}$ gives us $\phi\l(r_1\r)\phi\l(s_1\r)^{-1}=\phi\l(r_2\r)\phi\l(s_2\r)^{-1}$, as desired. It is also a homomorphism since
$$\begin{equation}
    \begin{gathered}
        \sigma\l(\frac{r_1}{s_1}+\frac{r_2}{s_2}\r)=\sigma\l(\frac{r_1s_2+r_2s_1}{s_1s_2}\r)=\phi\l(r_1s_2+r_2s_1\r)\phi\l(s_1s_2\r)^{-1}=\phi\l(r_1\r)\phi\l(s_1\r)^{-1}+\phi\l(r_2\r)\phi\l(s_2\r)^{-1}=\sigma\l(\frac{r_1}{s_1}\r)+\sigma\l(\frac{r_2}{s_2}\r) \\
        \sigma\l(\frac{r_1}{s_1}\cdot\frac{r_2}{s_2}\r)=\sigma\l(\frac{r_1r_2}{s_1s_2}\r)=\phi\l(r_1r_2\r)\phi\l(s_1s_2\r)^{-1}=\l[\phi\l(r_1\r)\phi\l(s_1\r)^{-1}\r]\l[\phi\l(r_2\r)\phi\l(s_2\r)^{-1}\r]=\sigma\l(\frac{r_1}{s_1}\r)\cdot\sigma\l(\frac{r_2}{s_2}\r).
    \end{gathered}
\end{equation}$$
For the characterization, suppose that $\sigma:S^{-1}R\to Z$ is an isomorphism such that $\phi=\sigma\circ\iota$.
* Take $s\in S$. Then $\phi\l(s\r)=\sigma\l(s/1\r)\in Z$ is a unit since $s/1\cdot1/s=\l(s1\r)/\l(1s\r)=1/1$ is a unit in $S^{-1}R$.
* Take $r\in R$. If $\phi\l(r\r)=\sigma\l(r/1\r)=0$, then $r/1=0/1$ and hence $sr=0$ for some $s\in S$.
* Take $z\in Z$. Then $z=\sigma\l(r/s\r)$ for some $r/s\in S^{-1}R$, whence $z=\sigma\l(r/1\cdot1/s\r)=\sigma\l(\iota\l(r\r)\r)\sigma\l(\iota\l(s\r)\r)^{-1}=\phi\l(r\r)\phi\l(s\r)^{-1}$ for some $r\in R$ and $s\in S$.

Conversely, suppose that $\phi:R\to Z$ satisfies the three properties. It suffices to show that the map $\sigma:S^{-1}R\to Z$ defined by $\sigma\l(r/s\r)\coloneqq\phi\l(r\r)\phi\l(s\r)^{-1}$ is an isomorphism. Indeed, it is clearly surjective, and if $r/s\in\ker\sigma$, then $\phi\l(r\r)\phi\l(s\r)^{-1}=0$ and hence $\phi\l(r\r)=0$. Thus $sr=0$ for some $s\in S$, so $r/s=0/1$.<span style="float:right;">$\blacksquare$</span>
