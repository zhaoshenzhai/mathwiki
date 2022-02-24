<br />
<br />

Date Created: 01/02/2022 16:00:16
Tags: #Proposition #Closed 

Proved by: [[Strict lexicographical order is a strict partial order]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $<$ and $\prec$ be strict total orders on the sets $X$ and $Y$ respectively. Then their lexicographical order $\sqsubset$ is a strict total order on $X\times Y$._

```

_Proof_. Since $\sqsubset$ is a strict partial order on $X\times Y$, it suffices to show that it is also connected on $X\times Y$. To do so, take $\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\in X\times Y$. We argue by cases.
* If $x_1<x_2$, then $\l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle$ regardless of how $y_1$ and $y_2$ relate.  Similarly for if $x_1>x_2$.
* If $x_1=x_2$ and $y_1\neq y_2$, then, since $\prec$ is connected on $Y$, either $y_1\prec y_2$ or $y_1\succ y_2$. In the former case, we have $\l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle$; in the latter case, we have $\l\langle x_1,y_1\r\rangle\sqsupseteq\l\langle x_2,y_2\r\rangle$.
* If $x_1=x_2$ and $y_1=y_2$, then obviously $\l\langle x_1,y_1\r\rangle=\l\langle x_2,y_2\r\rangle$.<span style="float:right;">$\blacksquare$</span>
