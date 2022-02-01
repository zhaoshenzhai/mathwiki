<br />
<br />

Date Created: 23/01/2022 12:26:56
Tags: #Proposition #Closed 

Proved by: [[Reflexive closure of strict orders is non-strict]], [[Strict lexicographical order is a strict partial order]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $\leq$ and $\preceq$ be partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by
$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\preceq y_2\r)\r]
\end{equation}$$
for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a partial order on $X\times Y$.

--- admonition

_Proof_. Since $\sqsubseteq\,=\rfcl\sqsubset$ and $\sqsubset$ is a strict partial order, we see that $\sqsubseteq$ is a partial order on $X\times Y$.<span style="float:right;">$\blacksquare$</span>
