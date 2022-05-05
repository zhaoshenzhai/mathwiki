---
alias: auto_aliasing
---

<br />
<br />

Date Created: 04/04/2022 17:35:23
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an indexed subset_ $S\coloneqq\l\{s_i\r\}_{i\in I}\!\subseteq V$ _of a vector space $V$ over $K$. Then $v\in V$ is a linear combination of vectors in $S$ iff_
$$\begin{equation}
    v\in\bigcap\l\{U\subseteq V\mid S\subseteq U\land U\textrm{\it{ is a linear subspace of }}V\r\}.
\end{equation}$$

```

_Proof_. Let
$$\begin{equation}
    L\l(S\r)\coloneqq\l\{v\in V\mid v\textrm{ is a linear combination of vectors in }S\r\}.
\end{equation}$$
* ($\Rightarrow$): Take $v\in L\l(S\r)$, so
$$\begin{equation}
    v=\sum\limits_{i\in I}\alpha_is_i
\end{equation}$$
for some $\l\{\alpha_i\r\}_{i\in I}\!\in K^n$ with $\alpha_i=0$ for all but finitely-many $i\in I$. It suffices to take any linear subspace $U\subseteq V$ that contains $S$ and show that $v\in U$, for then $v$ is in the intersection of all such subspaces. To see this, observe that since $S\subseteq U$, we have that $s_i\in U$ for all $i\in I$. Since $U$ is closed under linear combinations, we see that $v\in U$ too.

* ($\Leftarrow$): Conversely, it suffices to show that $L\l(S\r)$ is a linear subspace of $V$ containing $S$, for since $v$ is in the intersection of all such subspaces, $v\in L\l(S\r)$ too and hence $v$ is a linear combination vectors in $S$.
    * ($S\subseteq L\l(S\r)$): Take $s_i\in S$ and observe that $s_i=1s_i$, so $s_i$ is a linear combination of a finite sequence of $S$ with $\alpha_j=\delta_{ij}$ for all $j\in I$.

    * ($L\l(S\r)$ is a linear subspace of $V$): Take $\gamma\in K$ and $l_1,l_2\in L\l(S\r)$, so$$\begin{equation}
        l_1=\sum\limits_{i\in I}\alpha_is_i\ \ \ \ \textrm{and}\ \ \ \ l_2=\sum\limits_{i\in I}\beta_is_i
    \end{equation}$$
    for some $\l\{\alpha_i\r\}_{i\in I},\l\{\beta_i\r\}_{i\in I}\!\in K^n$ with $\alpha_i,\beta_{i'}=0$ for all but finitely-many $i,i'\in I$. Observe then that$$\begin{equation}
        \begin{aligned}
            \gamma l_1+l_2&=\gamma\sum_{i\in I}\alpha_i s_i+\sum_{i\in I}\beta_is_i && \textrm{Substitution} \\
            &=\sum_{i\in I}\l(\gamma\alpha_i\r)s_i+\sum_{i\in I}\beta_is_i && \textrm{Left-distribution in $K$} \\
            &=\sum\limits_{i\in I}\l(\gamma\alpha_i+\beta_i\r)s_i, && \textrm{Right-distribution in $K$}
        \end{aligned}
    \end{equation}$$
    so $\gamma l_1+l_2$ is the linear combination of vectors in $S$ with coefficients $\l\{\gamma\alpha_i+\beta_i\r\}_{i\in I}$ with $\gamma\alpha_i+\beta_i=0$ for all but finitely-many $i\in I$. It follows then that $L\l(S\r)$ is closed under addition and scalar multiplication, and since $0\in L\l(S\r)$ trivially, $L\l(S\r)$ is a linear subspace of $V$.<span style="float:right;">$\blacksquare$</span>
