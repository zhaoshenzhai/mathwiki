<div class="topSpace"></div>

Date Created: 01/02/2022 10:38:04
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Binary relation iff subset of Cartesian product]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $<$ and $\prec$ be strict partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by
$$\begin{equation}
    \tpl{x_1,y_1}\sqsubset\tpl{x_2,y_2}\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r]
\end{equation}$$
for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a strict partial order on $X\times Y$.

```

_Proof_. We shall first prove that $\sqsubset$ is a binary relation and then that $\sqsubset$ is a strict partial order on $X\times Y$.
* ($\sqsubset$ is a binary relation): Formally, $\sqsubset$ is defined as
$$\begin{equation}
    \sqsubset\,\coloneqq\l\{u\mid\ex x_1,x_2\in X,\ex y_1,y_2\in Y:u=\tpl{\tpl{x_1,y_2},\tpl{x_2,y_2}}\land x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r\}.
\end{equation}$$
Observe, by definition of the Cartesian product, that $\tpl{x_1,y_1},\tpl{x_2,y_2}\in X\times Y$ and thus
$$\begin{equation}
    \tpl{\tpl{x_1,y_1},\tpl{x_2,y_2}}\in\l(X\times Y\r)\times\l(X\times Y\r);
\end{equation}$$
incidentally, this also proves that $\sqsubset$ is, in fact, a set. More importantly, we see that $\sqsubset\,\subseteq\l(X\times Y\r)\times\l(X\times Y\r)$ and is thus a binary relation $X\times Y$.
* ($\sqsubset$ is a strict partial order): Take $x_1,x_2,x_3\in X$ and $y_1,y_2,y_3\in Y$ with$$\begin{equation}
    \tpl{x_1,y_1}\sqsubset\tpl{x_2,y_2}\ \ \ \ \textrm{and}\ \ \ \ \tpl{x_2,y_2}\sqsubset\tpl{x_3,y_3}.
 \end{equation}$$
    * If $x_1<x_2$ and $x_2<x_3$, then, because $<$ is transitive on $X$, we have $x_1<x_3$.
    * If $x_1<x_2$ and $x_2=x_3\land y_2\prec y_3$, then, by the substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\prec y_2$ and $x_2<x_3$, then, by substitution, we have $x_1<x_3$.
    * If $x_1=x_2\land y_1\prec y_2$ and $x_2=x_3\land y_1\prec y_3$, then, by substitution and because $\prec$ is transitive on $Y$, we have $x_1=x_3\land y_1\prec y_3$.

    In all cases, we see that $\tpl{x_1,y_1}\sqsubset\tpl{x_3,y_3}$; therefore, $\sqsubset$ is transitive on $X\times Y$. To show that $\sqsubset$ is irreflexive, take $\tpl{x,y}\in X\times Y$. Since $<$ and $\prec$ are irreflexive on $X$ and $Y$, respectively, we see that $\lnot\l(x<x\r)$ and $\lnot\l(y\prec y\r)$. Therefore, neither condition for $\tpl{x,y}\sqsubset\tpl{x,y}$ holds and thus $\sqsubset$ is irreflexive on $X\times Y$.<span style="float:right;">$\blacksquare$</span>
