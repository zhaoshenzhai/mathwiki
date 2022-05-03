<br />
<br />

Date Created: 04/04/2022 18:26:02
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication (columns)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $m\times n$ matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N^\ast$. Letting $T_A:K^n\to K^m$ be the linear map induced by $A$, we have that_
$$\begin{equation}
    \col\l(A\r)=\im\l(T_A\r).
\end{equation}$$

```

_Proof_. Take $\v{y}\in\col\l(A\r)$. The result follows from the following chain of equivalences:

$\begin{align}
    \v{y}\in\col\l(A\r)&\Leftrightarrow\v{y}\in\span\l\{\v{a}_1,\dots,\v{a}_n\r\} && \textrm{Definition of column space; }\v{a}_j\coloneqq\l[a_{1j}\ \ \cdots\ \ a_{mj}\r] \\
    &\Leftrightarrow\ex x_1,\dots,x_n\in K:\v{y}=\sum_{j=1}^nx_j\v{a}_j && \textrm{Definition of linear span} \\
    &\Leftrightarrow\ex\v{x}\in K^n:\v{y}=A\v{x} && \textrm{Matrix multiplication (columns); let }\v{x}\coloneqq\l\langle x_1,\dots,x_n\r\rangle \\
    &\Leftrightarrow\ex\v{x}\in K^n:\v{y}=T_A\l(\v{x}\r) && \textrm{Definition of }T_A \\
    &\Leftrightarrow\v{y}\in\im\l(T_A\r). && \textrm{Definition of image}\qedin
\end{align}$

---

**Remark.** In particular, this shows that $\col\l(A\r)=K^m$ iff $A\v{x}=\v{b}$ has a solution for every $\v{b}\in K^m$. If $A$ is square, this is equivalent to $A$ being invertible.<span style="float:right;">$\blacklozenge$</span>
