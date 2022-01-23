<br />
<br />

Date Created: 23/01/2022 12:26:56
Tags: #Proposition #Closed 

Proved by: [[Binary relation iff subset of Cartesian product]]
Proves: [[Lexicographical order is total if orders are total]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $<$ and $\prec$ be partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by
$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\triangleleft\l\langle x_2,y_2\r\rangle\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r]
\end{equation}$$
for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a partial order on $X\times Y$.

--- admonition

_Proof_. We shall first prove that $\triangleleft$ is a binary relation and then that $\triangleleft$ is a partial order on $X\times Y$.
* ($\triangleleft$ is a binary relation): Formally, $\triangleleft$ is defined as
$$\begin{equation}
    \triangleleft\coloneqq\l\{u\mid\ex x_1,x_2\in X,\ex y_1,y_2\in Y:u=\l\langle\l\langle x_1,y_2\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\land x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r\}.
\end{equation}$$
Observe, by definition of the Cartesian product, that $\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\in X\times Y$ and thus
$$\begin{equation}
    \l\langle\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\in\l(X\times Y\r)\times\l(X\times Y\r);
\end{equation}$$
incidentally, this also proves that $\triangleleft$ is, in fact, a set. More importantly, we see that $\triangleleft\subseteq\l(X\times Y\r)\times\l(X\times Y\r)$ and is thus a binary relation.
* ($\triangleleft$ is a partial order): Take $x_1,x_2,x_3\in X$ and $y_1,y_2,y_3\in Y$ with$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\triangleleft\l\langle x_2,y_2\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \l\langle x_2,y_2\r\rangle\triangleleft\l\langle x_3,y_3\r\rangle.
 \end{equation}$$
    * If $x_1<x_2$ and $x_2<x_3$, then, because $<$ is transitive on $X$, we have $x_1<x_3$.
    * If $x_1<x_2$ and $x_2=x_3\land y_2\prec y_3$, then, by the substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\prec y_2$ and $x_2<x_3$, then, by substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\prec y_2$ and $x_2=x_3\land y_1\prec y_3$, then, by substitution and because $\prec$ is transitive on $Y$, we have $x_1=x_3\land y_1\prec y_3$.

    In all cases, we see that $\l\langle x_1,y_1\r\rangle\triangleleft\l\langle x_3,y_3\r\rangle$; therefore, $\triangleleft$ is transitive on $X\times Y$. Furthermore, it is irreflexive since both $<$ and $\prec$ are; we have $x\not<x$ and $y\not\prec y$ for all $x\in X$ and $y\in Y$ and thus $\lnot\l(\l\langle x,y\r\rangle\triangleleft\l\langle x,y\r\rangle\r)$.<span style="float:right;">$\blacksquare$</span>
