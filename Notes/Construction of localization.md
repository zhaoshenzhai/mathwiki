<div class="topSpace"></div>

Date Created: 15/07/2023 22:59:12
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a commutative ring and let $S\subseteq R$ be a multiplicative subset. Define the relation $\sim$ on $R\times S$ by
$$\begin{equation}
    \tpl{r_1,s_1}\sim\tpl{r_2,s_2}\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ \ex t\in S:t\l(r_1s_2-r_2s_1\r)=0
\end{equation}$$
for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Let $S^{-1}R$ denote the set of all equivalence classes $r/s\coloneqq\l[\tpl{r,s}\r]$ equipped with the binary operations
$$\begin{equation}
    r_1/s_1+r_2/s_2\coloneqq\l(r_1s_2+r_2s_1\r)/\l(s_1s_2\r)\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ r_1/s_1\cdot r_2/s_2\coloneqq\l(r_1r_2\r)/\l(s_1s_2\r).
\end{equation}$$
Then the homomorphism $\iota:R\to S^{-1}R$ mapping $r\mapsto r/1$ is the localization of $R$ by $S$. Furthermore, if $R$ is an integral domain, then:
* The localization $S^{-1}R$ is also an integral domain.
* If $0\not\in S$, then $\iota$ is injective.
* If $S=R\comp\l\{0\r\}$, then $S^{-1}R$ is a field.

```

<i>Proof.</i> We first verify that $\sim$ is an equivalence relation and that the operations are well-defined.
* (Equivalence relation). That $\sim$ is reflexive and symmetric is obvious, so we prove that it is transitive. Take $\l[\tpl{r_i,s_i}\r]\in S^{-1}R$ for $i\in\l\{1,2,3\r\}$ such that $\tpl{r_1,s_1}\sim\tpl{r_2,s_2}$ and $\tpl{r_2,s_2}\sim\tpl{r_3,s_3}$. Then $t\l(r_1s_2-r_2s_1\r)=0$ and $t'\l(r_2s_3-r_3s_2\r)=0$ for some $t,t'\in S$, so
$$\begin{equation}
    0=tt's_3\l(r_1s_2-r_2s_1\r)+tt's_1\l(r_2s_3-r_3s_2\r)=tt'\l(r_1s_2s_3-r_2s_1s_3+r_2s_1s_3-r_3s_1s_2\r)=tt's_2\l(r_1s_3-r_3s_1\r).
\end{equation}$$
Since $S$ is multiplicative, we see that $tt's_2\in S$ and hence $\tpl{r_1,s_1}\sim\tpl{r_3,s_3}$.
* (Well-definition) If $\tpl{r_1,s_1}\sim\tpl{r_1',s_1'}$ and $\tpl{r_2,s_2}\sim\tpl{r_2',s_2'}$, then $t_1\l(r_1s_1'-r_1's_1\r)=0$ and $t_2\l(r_2s_2'-r_2's_2\r)=0$ for some $t_1,t_2\in S$. Observe then that
$$\begin{equation}
    0=t_1t_2\l(\l(r_1s_1'-r_1's_1\r)\l(s_2s_2'\r)+\l(r_2s_2'-r_2's_2\r)s_1s_1'\r)=t_1t_2\l(r_1s_2s_1's_2'+r_2s_1s_1's_2'-r_1's_1s_2s_2'-r_2's_1s_2s_1'\r)=t_1t_2\l(\l(r_1s_2+r_2s_1\r)s_1's_2'-\l(r_1's_2'+r_2's_1'\r)\l(s_1s_2\r)\r)
\end{equation}$$
so $\tpl{r_1s_2+r_2s_1,s_1s_2}\sim\tpl{r_1's_2'+r_2's_1',s_1's_2'}$ and hence $+$ is well-defined. Similarly, observe that
$$\begin{equation}
    0=t_1t_2\l(\l(r_1s_1'-r_1's_1\r)\l(r_2s_2'\r)+\l(r_2s_2'-r_2's_2\r)\l(r_1's_1\r)\r)=t_1t_2\l(r_1r_2s_1's_2'-r_1'r_2s_1s_2'+r_1'r_2s_1s_2'-r_1'r_2's_1s_2\r)=t_1t_2\l(r_1r_2s_1's_2'-r_1'r_2's_1s_2\r)
\end{equation}$$
so $\tpl{r_1r_2,s_1,s_2}\sim\tpl{r_1'r_2',s_1's_2'}$ and hence $\cdot$ is well-defined.

* (Ring axioms): it is clear that $+$ and $\cdot$ are commutative, associative, and that the distributive laws hold. Take $r/s\in S^{-1}R$ and observe that
$$\begin{equation}
    0/1+r/s=\l(0s+1\r)/\l(1s\r)=r/s,\ \ \ \ \ \ \ \ a/s+\l(-a/s\r)=\l(as+\l(-as\r)\r)/\l(s^2\r)=0/s^2=0/1,\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ r/s\cdot1/1=\l(1r\r)/\l(1s\r)=r/s.
\end{equation}$$

We now prove that $\iota:R\to S^{-1}R$ is initial in the category whose objects are homomorphisms $\phi:R\to Z$ to a commutative ring with $\phi\l(S\r)\subseteq Z^\times$ and whose morphisms from $\phi_1:R\to Z_1$ to $\phi_2:R\to Z_2$ are homomorphisms $\sigma:Z_1\to Z_2$ such that $\phi_2=\sigma\circ\phi_1$.
* Firstly, every $s/1\in\iota\l(S\r)$ is invertible since $s\in S$, so $1/s\in S^{-1}R$ and hence $s/1\cdot 1/s=\l(s1\r)/\l(1s\r)=1/1$.

Now, let $\phi:R\to Z$ be an object in the category. Any homomorphism $\sigma:S^{-1}R\to Z$ must be such that
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
Assume now that $R$ is an integral domain.
* If $r_1/s_1,r_2/s_2\in S^{-1}/R$ are non-zero, then $r_1,r_2\neq0$. Hence $r_1r_2\neq0$, so $r_1/s_1\cdot r_2/s_2=\l(r_1r_2\r)/\l(s_1s_2\r)\neq0/1$.
* If $\iota\l(r_1\r)=\iota\l(r_2\r)$, then $r_1/1=r_2/1$ and hence $t\l(r_1-r_2\r)=0$ for some $t\in S$. But $t\neq0$, so $r_1=r_2$.
* If $S=R\comp\l\{0\r\}$, then $r/s\in\iota\l(S\r)$ for every non-zero $r/s\neq0/1$.<span style="float:right;">$\blacksquare$</span>
