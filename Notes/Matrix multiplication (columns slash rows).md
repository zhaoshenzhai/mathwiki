---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 31/03/2022 20:09:00
Tags: #Proposition

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$, the columns_ $\v{c}_k$ _and the rows $\v{r}_i$ of their product $AB$ are given by_
$$\begin{equation}
    \v{c}_k=A\v{b}_{\blob;k}=\sum_{j=1}^nb_{jk}\v{a}_{\blob;j}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \v{r}_i=\v{a}_{i;\blob}B=\sum_{j=1}^na_{ij}\v{b}_{j;\blob}.
\end{equation}$$

```

**Remark.** In particular, we see that the $k^\textrm{th}$ column of $AB$ is the linear combinations of columns of $A$ with coefficients being the entries of $\v{b}_{\blob;k}$. Similarly, the $i^\textrm{th}$ row of $AB$ is the linear combination of the rows of $B$ with coefficients being the entries of $\v{a}_{i;\blob}$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $k\in\l\{1,\dots,p\r\}$ and observe that
$$\begin{equation}
    \begin{aligned}
        \v{c}_k&=\l[\l(AB\r)_{1k}\ \ \cdots\ \ \l(AB\r)_{mk}\r]^\trans && \textrm{Definition of $\v{c}_k$; notation} \\
        &=\l[\sum_{j=1}^na_{1j}b_{jk}\ \ \cdots\ \ \sum_{j=1}^na_{mj}b_{jk}\r]^\trans. && \textrm{Definition of matrix multiplication}
    \end{aligned}
\end{equation}$$
Since $\sum_{j=1}^na_{ij}b_{jk}=\l(A\l[b_{1k}\ \ \cdots\ \ b_{nk}\r]^\trans\r)_{i1}=\l(A\v{b}_{\blob;k}\r)_{i1}$ for all $i\in\l\{1,\dots,m\r\}$, we see that $\l(\v{c}_k\r)_{i1}=\l(A\v{b}_{\blob;k}\r)_{i1}$ and thus the first equality holds. For the second, observe that
$$\begin{equation}
    \begin{aligned}
        \l[\sum_{j=1}^na_{1j}b_{jk}\ \ \cdots\ \ \sum_{j=1}^na_{mj}b_{jk}\r]^\trans&=\sum_{j=1}^n\l[a_{1j}b_{jk}\ \ \cdots\ \ a_{mj}b_{jk}\r]^\trans && \textrm{Definition of matrix addition} \\
        &=\sum_{j=1}^nb_{jk}\l[a_{1j}\ \ \cdots\ \ a_{mj}\r]^\trans && \textrm{Definition of scalar multiplication} \\
        &=\sum_{j=1}^nb_{jk}\v{a}_{\blob;j}. && \textrm{Definition of $\v{a}_{\blob;j}$}.
    \end{aligned}
\end{equation}$$
Similarly, take $i\in\l\{1,\dots,m\r\}$ and observe that
$$\begin{equation}
    \begin{aligned}
        \v{r}_i&=\l[\l(AB\r)_{i1}\ \ \cdots\ \ \l(AB\r)_{ip}\r] && \textrm{Definition of $\v{r}_i$} \\
        &=\l[\sum_{j=1}^na_{ij}b_{j1}\ \ \cdots\ \ \sum_{j=1}^na_{ij}b_{jp}\r]. && \textrm{Definition of matrix multiplication}
    \end{aligned}
\end{equation}$$
Since $\sum_{j=1}^na_{ij}b_{jk}=\l(\l[a_{i1}\ \ \cdots\ \ a_{in}\r]B\r)_{1k}=\l(\v{a}_{i;\blob}B\r)_{1k}$ for all $k\in\l\{1,\dots,p\r\}$, we see that $\l(\v{r}_i\r)_{1k}=\l(\v{a}_{i;\blob}B\r)_{1k}$ and thus the first equality holds. For the second, observe that
$$\begin{align}
    \l[\sum_{j=1}^na_{ij}b_{j1}\ \ \cdots\ \ \sum_{j=1}^na_{ij}b_{jp}\r]&=\sum_{j=1}^n\l[a_{ij}b_{j1}\ \ \cdots\ \ a_{ij}b_{jp}\r] && \textrm{Definition of matrix addition} \\
    &=\sum_{j=1}^na_{ij}\l[b_{j1}\ \ \cdots\ \ b_{jp}\r] && \textrm{Definition of scalar multiplication} \\
    &=\sum_{j=1}^na_{ij}\v{b}_{j;\blob}. && \textrm{Definition of $\v{b}_{j;\blob}$} \qedin
\end{align}$$
