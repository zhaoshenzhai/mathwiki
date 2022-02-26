<br />
<br />

Date Created: 29/01/2022 13:45:14
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\sim$ be an equivalence relation on $X$ and fix $x,y\in X$. Then_ $\l[x\r]_\sim=\l[y\r]_\sim$ _iff_ $x\sim y$_._

```

_Proof_. ($\Rightarrow$): Because $\sim$ is reflexive, we have $x\sim x$ and thus $x\in\l[x\r]_\sim$. It follows that $x\in\l[y\r]_\sim$ and thus $x\sim y$.

($\Leftarrow$): Let $t\in\l[y\r]_\sim$, so $t\sim y$. Since $\sim$ is symmetric, we have $y\sim t$ too and thus, by transitivity, we have $x\sim t$. It follows that $t\sim x$ and thus $t\in\l[x\r]_\sim$. Hence $\l[y\r]_\sim\subseteq\l[x\r]_\sim$. Similarly, we have $\l[x\r]_\sim=\l[y\r]_\sim$ and thus equality follows.<span style="float:right;">$\blacksquare$</span>
