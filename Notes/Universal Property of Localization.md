<div class="topSpace"></div>

Date Created: 16/01/2023 13:35:39
Tags: #Theorem #Topics/Ring_Theory #Courses/MATH457

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Universal Property of Localization).

_Let $R$ be an integral domain and let $S\subseteq R$ be multiplicative. Then the embedding $\iota:R\to S^{-1}R:r\mapsto\frac{r}{1}$ is universal among homomorphisms that map $S$ to units. That is, for any commutative ring $Z$ and any homomorphism $\phi:R\to Z$ such that $\im_S\!\l(\phi\r)\subseteq Z^\times$, the following diagram commutes:_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2023-01-16_134335/image.svg", width=125></center>

```

_Proof_. For any homomorphism $\psi:S^{-1}R\to Z$ and any $\frac{r}{s}\in S^{-1}R$, observe that
$$\begin{equation}
    \psi\l(\frac{r}{s}\r)=\psi\l(\frac{r}{1}\cdot\frac{1}{s}\r)=\psi\l(\frac{r}{1}\r)\cdot\psi\l(\frac{1}{s}\r)=\psi\l(\frac{r}{1}\r)\cdot\psi\l(\frac{s}{1}\r)^{-1}.
\end{equation}$$
Now, for the diagram to commute; that is, for $\phi=\psi\circ\iota$, we need $\psi\l(\frac{a}{1}\r)=\phi\l(a\r)$ for every $a\in R$. Then
$$\begin{equation}
    \psi\l(\frac{r}{s}\r)=\phi\l(r\r)\phi\l(s\r)^{-1},
\end{equation}$$
so such a function is unique if it exists.
* Indeed, $\psi$ is a homomorphism since $\psi\l(\frac{1}{1}\r)=\phi\l(1\r)\phi\l(1\r)^{-1}=1\cdot1^{-1}=1$, and, for all $\frac{r_1}{s_1},\frac{r_2}{s_2}\in S^{-1}R$, we have
$$\begin{equation}
    \begin{gathered}
        \psi\l(\frac{r_1}{s_1}+\frac{r_2}{s_2}\r)=\psi\l(\frac{r_1s_2+r_2s_1}{s_1s_2}\r)=\phi\l(r_1s_2+r_2s_1\r)\phi\l(s_1s_2\r)^{-1}=\phi\l(r_1\r)\phi\l(s_1\r)^{-1}+\phi\l(r_2\r)\phi\l(s_2\r)^{-1}=\psi\l(\frac{r_1}{s_1}\r)+\psi\l(\frac{r_2}{s_2}\r) \\
        \psi\l(\frac{r_1}{s_1}\cdot\frac{r_2}{s_2}\r)=\psi\l(\frac{r_1r_2}{s_1s_2}\r)=\phi\l(r_1r_2\r)\phi\l(s_1s_2\r)^{-1}=\l[\phi\l(r_1\r)\phi\l(s_1\r)^{-1}\r]\l[\phi\l(r_2\r)\phi\l(s_2\r)^{-1}\r]=\psi\l(\frac{r_1}{s_1}\r)\cdot\psi\l(\frac{r_2}{s_2}\r).
    \end{gathered}
\end{equation}$$

To show existence, it suffices to show that $\psi$ is well-defined. First, since $\im_S\!\l(\phi\r)\subseteq Z^\times$, $\phi\l(s\r)$ has an inverse in $Z$. Now, take $\frac{r_1}{s_1}=\frac{r_2}{s_2}\in S^{-1}R$, so $r_1s_2=r_2s_1$ and observe that $\phi\l(r_1\r)\phi\l(s_2\r)=\phi\l(r_2\r)\phi\l(s_1\r)$. Hence $\phi\l(r_1\r)\phi\l(s_1\r)^{-1}=\phi\l(r_2\r)\phi\l(s_2\r)^{-1}$.<span style="float:right;">$\blacksquare$</span>
