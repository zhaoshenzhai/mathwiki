<br />
<br />

Date Created: 04/04/2022 18:26:02
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication (columns)]], [[Linear span is set of all linear combinations]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $m\times n$ matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N$. Letting_ $\v{a}_j\coloneqq\l[a_{1j}\ \ \cdots\ \ a_{mj}\r]^\trans$ _be the $j^{\textrm{\it{th}}}$ column of $A$, we have that_
$$\begin{equation}
    \col\l(A\r)=\span\l\{\v{a}_1,\dots,\v{a}_n\r\}.
\end{equation}$$

```

_Proof_. The result follows from the following chain of equivalences:
$$\begin{align}
    \v{y}\in\col\l(A\r)&\Leftrightarrow\ex\v{x}\in K^n:\v{y}=A\v{x} && \textrm{Definition of column space} \\
    &\Leftrightarrow\ex x_1,\dots,x_n\in K:\v{y}=\sum_{j=1}^nx_j\v{a}_j && \textrm{Matrix multiplication (columns); let $\v{x}=\l\langle x_1,\dots,x_n\r\rangle$} \\
    &\Leftrightarrow\v{y}\in\span\l\{\v{a}_1,\dots,\v{a}_n\r\}. && \textrm{Linear span is set of all linear combinations}\qedin
\end{align}$$
