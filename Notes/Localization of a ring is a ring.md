<div class="topSpace"></div>

Date Created: 13/01/2023 14:48:08
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: [[Integral domain iff cancellable]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be an integral domain and let $S\subseteq R$ be multiplicative. Define the relation $\sim$ on $R\times S$ by_
$$\begin{equation}
    \tpl{r_1,s_1}\sim\tpl{r_2,s_2}\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ r_1s_2=r_2s_1
\end{equation}$$
_for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Then $\sim$ is an equivalence relation on $R\times S$. Furthermore, letting $\frac{r}{s}\coloneqq\l[\tpl{r,s}\r]$ and $S^{-1}R$ denote the set of all equivalence classes, the operations_
$$\begin{equation}
    \begin{aligned}
        +:S^{-1}R\times S^{-1}R&\to S^{-1}R \\
        \tpl{\frac{r_1}{s_1},\frac{r_2}{s_2}}&\mapsto\frac{r_1s_2+r_2s_1}{s_1s_2}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \cdot:S^{-1}R\times S^{-1}R&\to S^{-1}R \\
        \tpl{\frac{r_1}{s_1},\frac{r_2}{s_2}}&\mapsto\frac{r_1r_2}{s_1s_2}
    \end{aligned}
\end{equation}$$
_are well-defined and makes $\tpl{S^{-1}R,+,\cdot}$ into an integral domain. Furthermore, if $S=R\comp\l\{0\r\}$, then $S^{-1}R$ is a field._

```

_Proof_. We first prove that $\sim$ is an equivalence relation. That $\sim$ is reflexive and symmetric is obvious, so we prove that it is transitive. Take $\l[\tpl{r_i,s_i}\r]\in S^{-1}R$ for $i\in\l\{1,2,3\r\}$ such that $\tpl{r_1,s_1}\sim\tpl{r_2,s_2}$ and $\tpl{r_2,s_2}\sim\tpl{r_3,s_3}$. Then $r_1s_2=r_2s_1$ and $r_2s_3=r_3s_2$, so
$$\begin{equation}
    r_1s_2s_3=r_2s_1s_3=r_3s_1s_2.
\end{equation}$$
Since $R$ is an integral domain, we see that $r_1s_3=r_3s_1$, and hence $\tpl{r_1,s_1}\sim\tpl{r_3,s_3}$. We now show that the operations $+$ and $\cdot$ are well-defined. Indeed, if $\tpl{r_1,s_1}\sim\tpl{r_1',s_1'}$ and $\tpl{r_2,s_2}\sim\tpl{r_2',s_2'}$, then $r_1s_1'=r_1's_1$ and $r_2s_2'=r_2's_2$. Observe then that
$$\begin{equation}
    \l(r_1s_2+r_2s_1\r)\l(s_1's_2'\r)=r_1s_1's_2s_2'+r_2s_1s_1's_2'=r_1's_1s_2s_2'+r_2's_1s_1's_2=\l(r_1's_2'+r_2's_1'\r)\l(s_1s_2\r),
\end{equation}$$
so $\tpl{r_1s_2+r_2s_1,s_1s_2}\sim\tpl{r_1's_2'+r_2's_1',s_1's_2'}$ and hence $+$ is well-defined. Similarly, observe that
$$\begin{equation}
    \l(r_1r_2\r)\l(s_1's_2'\r)=\l(r_1s_1'\r)\l(r_2s_2'\r)=\l(r_1's_1\r)\l(r_2's_2\r)=\l(r_1'r_2'\r)\l(s_1s_2\r),
\end{equation}$$
so $\tpl{r_1r_2,s_1,s_2}\sim\tpl{r_1'r_2',s_1's_2'}$ and hence $\cdot$ is well-defined. We now verify the ring axioms, but it is clear that $+$ and $\cdot$ are commutative, associative, and that the distributive laws hold.
* (Additive identity): Take $\frac{r}{s}\in S^{-1}R$ and observe that $\frac{0}{1}+\frac{r}{s}=\frac{0s+1r}{1s}=\frac{r}{s}$.
* (Additive inverse): Take $\frac{r}{s}\in S^{-1}R$ and observe that $\frac{a}{s}+\frac{-a}{s}=\frac{as+\l(-as\r)}{s^2}=\frac{0}{s^2}=\frac{0}{1}$ where the last equality follows from $1\cdot0=s^2\cdot0$.
* (Multiplicative identity): Take $\frac{r}{s}\in S^{-1}R$ and observe that $\frac{r}{s}\cdot\frac{1}{1}=\frac{1r}{1s}=\frac{r}{s}$.

To show that $S^{-1}R$ is an integral domain, take $\frac{r_1}{s_1},\frac{r_2}{s_2}\in S^{-1}R$ non-zero, so $r_1\neq0$ and $r_2\neq0$. Then $r_1r_2\neq0$, so $\frac{r_1}{s_1}\cdot\frac{r_2}{s_2}=\frac{r_1r_2}{s_1s_2}\neq\frac{0}{1}$.
* Lastly, if $S=R\comp\l\{0\r\}$ and if $\frac{r}{s}\neq\frac{0}{1}$, then $r\neq0$ and hence $r\in S$. Thus $\frac{s}{r}\in S^{-1}R$, and since $\frac{r}{s}\cdot\frac{s}{r}=\frac{rs}{sr}=\frac{1}{1}$, we see that $\frac{r}{s}$ in invertible with inverse $\frac{s}{r}$.<span style="float:right;">$\blacksquare$</span>
