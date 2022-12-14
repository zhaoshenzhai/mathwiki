---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 17/10/2022 11:34:16
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and fix $k\in\N^+$. Then any two $k$-cycles in $\Sym\l(X\r)$ are conjugate._

```

_Proof_. Let $\alpha\coloneqq\l(a_1\ \cdots\ a_k\r)$ and $\beta\coloneqq\l(b_1\ \cdots\ b_k\r)$ be two $k$-cycles in $\Sym\l(X\r)$ and set
$$\begin{equation}
    \sigma:X\to X\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ x\mapsto
    \begin{dcases}
        b_i & \textrm{if }\ex i:x=a_i \\
        \phi\l(x\r) & \textrm{else}
    \end{dcases}
\end{equation}$$
where $\phi:X\comp\l\{a_1,\dots,a_k\r\}\to X\comp\l\{b_1,\dots,b_k\r\}$ is an arbitrary bijection that exist since the cardinalities coincide. Since $\alpha$ is a cycle, we see that the $a_i$$\textrm{'}$s are all distinct and hence $\sigma$ is well-defined; we claim that $\sigma\in\Sym\l(X\r)$ and that $\alpha=\sigma^{-1}\beta\sigma$.
* ($\sigma\in\Sym\l(X\r)$): To show that $\sigma$ is injective, take $x_1,x_2\in X$ such that $\sigma\l(x_1\r)=\sigma\l(x_2\r)$. We first note that $x_1=a_i$ for some $i$ iff $x_2=a_j$ for some $j$. Assume that $x_1=a_i$ for some $i$; the converse is analogous. If $x_2\neq a_j$ for any $j$, then $\sigma\l(x_2\r)=\phi\l(x_2\r)\not\in B\ni\sigma\l(x_1\r)$ and so $\sigma\l(x_1\r)\neq\sigma\l(x_2\r)$. Thus we have two cases, instead of four.
    * If $x_1=a_i$ for some $i$, then there exist $j$ such that $x_2=a_j$. Thus $\sigma\l(x_1\r)=b_i$ and $\sigma\l(x_2\r)=b_j$, but this forces $i=j$, so $x_1=a_i=a_j=x_2$.
    * If $x_1\neq a_i$ for any $i$, then $x_2\neq a_j$ for any $j$. Thus $\sigma\l(x_1\r)=\phi\l(x_2\r)$ and $\sigma\l(x_2\r)=\phi\l(x_2\r)$, so $\phi\l(x_1\r)=\phi\l(x_2\r)$. Since $\phi$ is a bijection, we have $x_1=x_2$.

  For surjectivity, take $y\in X$ and observe that $\sigma\l(a_i\r)=y$ if there exists some $i$ such that $y=a_i$, and $\sigma\l(\phi^{-1}\l(y\r)\r)=y$ otherwise.

* ($\alpha=\sigma^{-1}\beta\sigma$): Take $x\in X$, so either $x=a_i$ for some $i$ or not. In the former case, observe that $\alpha\l(x\r)=\alpha\l(a_i\r)=a_{i+1}$ and
$$\begin{equation}
    \begin{aligned}
        \l(\sigma^{-1}\beta\sigma\r)\l(a_i\r)&=\sigma^{-1}\l(\beta\l(\sigma\l(a_i\r)\r)\r) && \textrm{Definition of composition} \\
        &=\sigma^{-1}\l(\beta\l(b_i\r)\r) && \textrm{Definition of $\sigma$; }x=a_i \\
        &=\sigma^{-1}\l(b_{i+1}\r) && \textrm{Definition of $\beta$} \\
        &=a_{i+1}. && \textrm{Definition of $\sigma$; }\sigma\l(a_{i+1}\r)=b_{i+1}
    \end{aligned}
\end{equation}$$
Otherwise, we see that $\alpha\l(x\r)=x$ and
$$\begin{align}
    \l(\sigma^{-1}\beta\sigma\r)\l(x\r)&=\sigma^{-1}\l(\beta\l(\sigma\l(x\r)\r)\r) && \textrm{Definition of composition} \\
    &=\sigma^{-1}\l(\beta\l(\phi\l(x\r)\r)\r) && \textrm{Definition of $\sigma$; }x\neq a_i \\
    &=\sigma^{-1}\l(\phi\l(x\r)\r) && \phi\l(x\r)\not\in\l\{b_1,\dots,b_k\r\} \\
    &=x. && \textrm{Definition of $\sigma$; }\sigma\l(\phi^{-1}\l(x\r)\r)=x\qedin
\end{align}$$
