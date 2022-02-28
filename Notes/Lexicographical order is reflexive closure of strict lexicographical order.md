<br />
<br />

Date Created: 01/02/2022 16:28:32
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\leq$ and $\preceq$ be partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by_
$$\begin{equation}
    \l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\preceq y_2\r)\r]
\end{equation}$$
_for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is the reflexive closure of the strict lexicographical order $\sqsubset$ on $X\times Y$._

```

_Proof_. We shall show that $\sqsubseteq\,=\rfcl\sqsubset=\,\sqsubset\cup\id_{X\times Y}$.
* ($\subseteq$): Take $\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle$ such that $\l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle$.
    * If $x_1<x_2$, then $\l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle$ follows immediately.
    * If $x_1=x_2\land y_1\preceq y_2$, then either $x_1=x_2\land y_1\prec y_2$ from which we have $\l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle$, or $x_1=x_2\land y_1=y_2$ from which we have $\l\langle\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle\r\rangle\in\id_{X\times Y}$.

* ($\supseteq$): Take $\l\langle x_1,y_1\r\rangle,\l\langle x_2,y_2\r\rangle$ such that either $\l\langle x_1,y_1\r\rangle\sqsubset\l\langle x_2,y_2\r\rangle$ or $\l\langle x_1,y_1\r\rangle=\l\langle x_2,y_2\r\rangle$.
    * If $x_1<x_2$, then $\l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle$ follows immediately.
    * If $x_1=x_2\land y_1\prec y_2$, then $y_1\preceq y_2$ too and thus $\l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle$.
    * If $\l\langle x_1,y_1\r\rangle=\l\langle x_2,y_2\r\rangle$, then $x_1=x_2$ and $y_1=y_2$. Observe that $y_1\preceq y_2$ too and thus $\l\langle x_1,y_1\r\rangle\sqsubseteq\l\langle x_2,y_2\r\rangle$.<span style="float:right;">$\blacksquare$</span>
