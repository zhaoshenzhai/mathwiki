<br />
<br />

Date Created: 01/02/2022 10:38:04
Tags: #Proposition #Closed 

Proved by: [[Binary relation iff subset of Cartesian product]]
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $<$ and $\prec$ be strict partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by_
$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r]
\end{equation}$$
_for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a strict partial order on $X\times Y$._

```

_Proof_. We shall first prove that $\sqsubset$ is a binary relation and then that $\sqsubset$ is a strict partial order on $X\times Y$.
* ($\sqsubset$ is a binary relation): Formally, $\sqsubset$ is defined as
$$\begin{equation}
    \sqsubset\,\coloneqq\l\{u\mid\ex x_1,x_2\in X,\ex y_1,y_2\in Y:u=\l\langle\l\langle x_1,y_2\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\land x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r\}.
\end{equation}$$
Observe, by definition of the Cartesian product, that $\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\in X\times Y$ and thus
$$\begin{equation}
    \l\langle\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\in\l(X\times Y\r)\times\l(X\times Y\r);
\end{equation}$$
incidentally, this also proves that $\sqsubset$ is, in fact, a set. More importantly, we see that $\sqsubset\,\subseteq\l(X\times Y\r)\times\l(X\times Y\r)$ and is thus a binary relation $X\times Y$.
* ($\sqsubset$ is a strict partial order): Take $x_1,x_2,x_3\in X$ and $y_1,y_2,y_3\in Y$ with$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle\ \ \ \ \textrm{and}\ \ \ \ \l\langle x_2,y_2\r\rangle\sqsubset\l\langle x_3,y_3\r\rangle.
 \end{equation}$$
    * If $x_1<x_2$ and $x_2<x_3$, then, because $<$ is transitive on $X$, we have $x_1<x_3$.
    * If $x_1<x_2$ and $x_2=x_3\land y_2\prec y_3$, then, by the substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\prec y_2$ and $x_2<x_3$, then, by substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\prec y_2$ and $x_2=x_3\land y_1\prec y_3$, then, by substitution and because $\prec$ is transitive on $Y$, we have $x_1=x_3\land y_1\prec y_3$.

    In all cases, we see that $\l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_3,y_3\r\rangle$; therefore, $\sqsubset$ is transitive on $X\times Y$. To show that $\sqsubset$ is irreflexive, take $\l\langle x,y\r\rangle\in X\times Y$. Since $<$ and $\prec$ are irreflexive on $X$ and $Y$, respectively, we see that $\lnot\l(x<x\r)$ and $\lnot\l(y\prec y\r)$. Therefore, neither condition for $\l\langle x,y\r\rangle\sqsubset\l\langle x,y\r\rangle$ holds and thus $\sqsubset$ is irreflexive on $X\times Y$.<span style="float:right;">$\blacksquare$</span>
