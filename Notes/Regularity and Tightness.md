<div class="topSpace"></div>

Date Created: 18/10/2023 22:54:23
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Regularity/Tightness).

Let $X$ be a metric space equipped with a finite Borel measure $\mu$. Then, for every $\mu$-measurable set $A\subseteq X$, we have
$$\begin{equation}
    \mu\l(A\r)=\inf\l\{\mu\l(U\r)\st U\supseteq A\textrm{ \it{open}}\r\}=\sup\l\{\mu\l(C\r)\st C\subseteq A\textrm{ \it{closed}}\r\}\cref{\ast}
\end{equation}$$
In particular, a set $A\subseteq X$ is $\mu$-measurable iff $A$ is $\mu$-almost a $G_\delta$ set containing $A$, which occurs iff $A$ is $\mu$-almost an $F_\sigma$ set contained in $A$.

```

<b>Remark.</b> The two equalities in $\ref{\ast}$ are respectively called <i>outer regularity</i> and <i>inner regularity</i>. Since $\mu$ is finite, they also imply that
$$\begin{equation}
    0=\inf\l\{\mu\l(U\comp A\r)\st U\supseteq A\textrm{ open}\r\}=\l\{\mu\l(A\comp C\r)\st C\subseteq A\textrm{ closed}\r\}.
\end{equation}$$
Regularity result does <i>not</i> extend to arbitrary $\sigma$-finite measures

<i>Proof.</i> 
