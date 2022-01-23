<br />
<br />

Date Created: 21/01/2022 10:09:11
Tags: #Proposition #Closed 

Proved by: [[Replacement image implies function iff Replacement]]
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $X$ be a set. The identity function $\id_X\!=\l\{z\mid \ex x\in X:z=\l\langle x,x\r\rangle\r\}$ is a function.

--- admonition

_Proof_. Consider the formula $\phi\l(x,y\r)\,\colon\!\Leftrightarrow x=y$. Observe that $\fa x\in X,\ex!y:\phi\l(x,y\r)$, namely $x$ itself. Thus there exists a function $\id_X$ with $\dom\id_X\!=X$ and $\fa x\in X:\phi\l(x,x\r)$. This function is constructed as the set
$$\begin{alignat}{2}
    \id_X\!&=\l\{z\mid\ex x\in X,\ex y:\l(\phi\l(x,y\r)\land z=\l\langle x,y\r\rangle\r)\r\}\ \ \ \ \ \ \ \ &&\textrm{Replacement image is a function}\\
    &=\l\{z\mid\ex x\in X,\ex y:\l(x=y\land z=\l\langle x,y\r\rangle\r)\r\}&&\textrm{Substitution}\\
    &=\l\{z\mid\ex x\in X:z=\l\langle x,x\r\rangle\r\}.&&\textrm{Set }y=x\qedin
\end{alignat}$$
