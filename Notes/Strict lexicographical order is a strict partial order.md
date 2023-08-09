<div class="topSpace"></div>

Date Created: 01/02/2022 10:38:04
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $<$ and $\prec$ be strict partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by
$$\begin{equation}
    \tpl{x_1,y_1}\sqsubset\tpl{x_2,y_2}\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\prec y_2\r)\r]
\end{equation}$$
for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a strict partial order on $X\times Y$.

```

<i>Proof.</i> Take $x_1,x_2,x_3\in X$ and $y_1,y_2,y_3\in Y$ with
$$\begin{equation}
    \tpl{x_1,y_1}\sqsubset\tpl{x_2,y_2}\ \ \ \ \textrm{and}\ \ \ \ \tpl{x_2,y_2}\sqsubset\tpl{x_3,y_3}.
\end{equation}$$
* If $x_1<x_2$ and $x_2<x_3$, then, because $<$ is transitive on $X$, we have $x_1<x_3$.
* If $x_1<x_2$ and $x_2=x_3\land y_2\prec y_3$, then, by the substitution, we have $x_1<x_3$.
* If $x_1=x_2\land y_1\prec y_2$ and $x_2<x_3$, then, by substitution, we have $x_1<x_3$.
* If $x_1=x_2\land y_1\prec y_2$ and $x_2=x_3\land y_1\prec y_3$, then, by substitution and because $\prec$ is transitive on $Y$, we have $x_1=x_3\land y_1\prec y_3$.

In all cases, we see that $\tpl{x_1,y_1}\sqsubset\tpl{x_3,y_3}$; therefore, $\sqsubset$ is transitive on $X\times Y$. To show that $\sqsubset$ is irreflexive, take $\tpl{x,y}\in X\times Y$. Since $<$ and $\prec$ are irreflexive on $X$ and $Y$, respectively, we see that $\lnot\l(x<x\r)$ and $\lnot\l(y\prec y\r)$. Therefore, neither condition for $\tpl{x,y}\sqsubset\tpl{x,y}$ holds and thus $\sqsubset$ is irreflexive on $X\times Y$.<span style="float:right;">$\blacksquare$</span>
