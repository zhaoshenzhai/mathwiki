<br />
<br />

Date Created: 01/02/2022 10:41:22
Tags: #Proposition #Closed 

Proved by: [[Strict lexicographical order is total if orders are strictly total]], [[Well-ordering well-orders subsets]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_Let $<$ and $\prec$ be well-orders on the sets $X$ and $Y$, respectively, Then the strict lexicographical order $\sqsubset$ on $X\times Y$ is a well-order on $X\times Y$._

```

_Proof_. Since $<$ and $\prec$ are strict total orders on $X$ and $Y$, respectively, we see that $\sqsubset$ is a strict total order on $X\times Y$. Hence it suffices to show that $\sqsubset$ is well-founded on $X\times Y$. To this end, take a non-empty subset $S\subseteq X\times Y$. Observe then that $S$ is a binary relation with $\dom S\subseteq X$, so $<$ is a well-ordering on $\dom S$ too. Therefore, there exists a $<$-minimal element $x_0\in\dom S$. Observe also that
$$\begin{equation}
    \tilde{Y}\coloneqq\l\{y\mid\l\langle x_0,y\r\rangle\in S\r\}\subseteq\ran S\subseteq Y,
\end{equation}$$
so there exists a $\prec$-minimal element $y_0\in\tilde{Y}$; we claim that $\l\langle x_0,y_0\r\rangle$ is a $\sqsubset$-minimal element in $S$. Suppose, for sake of contradiction, that
$$\begin{equation}
    \ex\l\langle p,q\r\rangle\in S:\l\langle p,q\r\rangle\sqsubset\l\langle x_0,y_0\r\rangle.
\end{equation}$$
It follows that either $p<x_0$ or $p=x_0\land q\prec y_0$; the former case is contradictory since $x_0$ is $<$-minimal in $\dom S$. For the latter case, observe that $q\in\tilde{Y}$ since $\l\langle x_0,q\r\rangle=\l\langle p,q\r\rangle\in S$; this is contradictory since it implies that $q\not\prec y_0$.<span style="float:right;">$\blacksquare$</span>
