<br />
<br />

Date Created: 23/01/2022 12:26:56
Tags: #Proposition #Closed 

Proved by: [[Binary relation iff subset of Cartesian product]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $\leq$ and $\preceq$ be partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by
$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\preceq y_2\r)\r]
\end{equation}$$
for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a partial order on $X\times Y$.

--- admonition

_Proof_. We shall first prove that $\sqsubseteq$ is a binary relation and then that $\sqsubseteq$ is a partial order on $X\times Y$.
* ($\sqsubseteq$ is a binary relation): Formally, $\sqsubseteq$ is defined as
$$\begin{equation}
    \sqsubseteq\,\coloneqq\l\{u\mid\ex x_1,x_2\in X,\ex y_1,y_2\in Y:u=\l\langle\l\langle x_1,y_2\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\land x_1<x_2\lor\l(x_1=x_2\land y_1\preceq y_2\r)\r\}.
\end{equation}$$
Observe, by definition of the Cartesian product, that $\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\in X\times Y$ and thus
$$\begin{equation}
    \l\langle\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\in\l(X\times Y\r)\times\l(X\times Y\r);
\end{equation}$$
incidentally, this also proves that $\sqsubseteq$ is, in fact, a set. More importantly, we see that $\sqsubseteq\,\subseteq\l(X\times Y\r)\times\l(X\times Y\r)$ and is thus a binary relation.
* ($\sqsubseteq$ is a partial order): Take $x_1,x_2,x_3\in X$ and $y_1,y_2,y_3\in Y$ with$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \l\langle x_2,y_2\r\rangle\sqsubseteq\l\langle x_3,y_3\r\rangle.
 \end{equation}$$
    * If $x_1<x_2$ and $x_2<x_3$, then, because $<$ is transitive on $X$, we have $x_1<x_3$.
    * If $x_1<x_2$ and $x_2=x_3\land y_2\preceq y_3$, then, by the substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\preceq y_2$ and $x_2<x_3$, then, by substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\preceq y_2$ and $x_2=x_3\land y_1\preceq y_3$, then, by substitution and because $\preceq$ is transitive on $Y$, we have $x_1=x_3\land y_1\preceq y_3$.

    In all cases, we see that $\l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_3,y_3\r\rangle$; therefore, $\sqsubseteq$ is transitive on $X\times Y$. Furthermore, it is reflexive since $x=x\land y\preceq y$ and thus $\l\langle x,y\r\rangle\sqsubseteq\l\langle x,y\r\rangle$. Assume now that $\l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle$ and $\l\langle x_2,y_2\r\rangle\sqsubseteq\l\langle x_1,y_1\r\rangle$. There are four cases, three of which lead to contradictions:
    * If $x_1<x_2$ and $x_2<x_1$, then, by transitivity, we have $x_1<x_1$ which implies that $x_1\leq x_1$, a contradiction.
    * If $x_1<x_2$ and $x_2=x_1\land y_2\preceq y_1$, then, by substitution, we have $x_1<x_1$ which is again a contradiction.
    * If $x_1=x_2\land y_1\preceq y_2$ and $x_2<x_1$, we have $x_1<x_1$ which is another contradiction.
    * If $x_1=x_2\land y_1\preceq y_2$ and $x_2=x_1\land y_2\preceq y_1$, then, by antisymmetry of $\preceq$, we see that $y_1=y_2$ and thus $\l\langle x_1,y_1\r\rangle=\l\langle x_2,y_2\r\rangle$.
    
    It follows that $\sqsubseteq$ is antisymmetric on $X\times Y$ too, so it is a partial order.<span style="float:right;">$\blacksquare$</span>
