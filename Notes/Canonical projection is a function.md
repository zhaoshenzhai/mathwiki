<br />
<br />

Date Created: 29/01/2022 13:58:07
Tags: #Proposition #Closed 

Proved by: [[Same equivalence class iff related]]
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\sim$ be an equivalence relation on $X$. The canonical projection_ $\pi_\sim=\l\{z\mid\ex x\in X:z=\l\langle x,\l[x\r]_\sim\r\rangle\r\}$ _is a function._

```

_Proof_. Consider the formula $\phi\l(x,y\r)\,\colon\!\Leftrightarrow x\in y\land y\in X/\!\sim$. Observe that $x\in\l[x\r]_\sim$; if there exists some other $z\in X$ such that $x\in\l[z\r]_\sim$, we have $x\sim z$ and hence $\l[x\r]_\sim=\l[z\r]_\sim$. It follows that $\fa x\in X,\ex!y:\phi\l(x,y\r)$. Thus there exists a function $\pi_\sim$ with $\dom\pi_\sim=X$ and $\fa x\in X:\phi\l(x,\l[x\r]_\sim\r)$. This function is constructed as the set
$$\begin{alignat}{2}
    \pi_\sim&=\l\{z\mid\ex x\in X,\ex y:\l(\phi\l(x,y\r)\land z=\l\langle x,y\r\rangle\r)\r\}&&\textrm{Replacement image is a function}\\
    &=\l\{z\mid\ex x\in X,\ex y:\l(x\in y\land y\in X/\!\sim\land\,z=\l\langle x,y\r\rangle\r)\r\}\ \ \ \ \ \ \ \ &&\textrm{Substitution}\\
    &=\l\{z\mid\ex x\in X:z=\l\langle x,\l[x\r]_\sim\r\rangle\r\}.&&\textrm{Set }y=\l[x\r]_\sim\qedin
\end{alignat}$$
