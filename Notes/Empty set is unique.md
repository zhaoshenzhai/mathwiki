<br />
<br />

Date Created: 16/01/2022 13:52:13
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed

Proved by: [[Axiom of Extensionality]]
Generalizations: [[Set-builder notation is unique]]

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $x$ and $y$ be sets. If $x$ and $y$ are both empty, then $x=y$. Formally,_
$$\begin{equation}
    \fa x\fa y\l[\operatorname{emp}\l(x\r)\land\operatorname{emp}\l(y\r)\Rightarrow x=y\r].
\end{equation}$$

```

_Proof_. By definition, we have $\operatorname{emp}\l(x\r)\Leftrightarrow\fa z\l(z\not\in x\r)$ and $\operatorname{emp}\l(y\r)\Leftrightarrow\fa z\l(z\not\in y\r)$. In other words, $z\in x$ and $z\in y$ are both false for all sets $z$, so, by definition of the biconditional, we see that $z\in x\Leftrightarrow z\in y$. It follows from the Axiom of Extensionality that $x=y$.<span style="float:right;">$\blacksquare$</span>
