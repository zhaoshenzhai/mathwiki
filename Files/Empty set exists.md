<br />
<br />

Date Created: 16/01/2022 14:03:24
Tags: #Proposition #Closed

Proved by: [[Axiom Schema of Specification]]
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_There exists an empty set. Formally, $\ex e\l[\operatorname{emp}\l(e\r)\r]$._

```

_Proof_. Let $z$ be a set. Using the Axiom Schema of Specification with the formula $\phi$ being $x\neq x$, we have
$$\begin{equation}
    \ex e\l[\fa x\l(x\in e\Leftrightarrow x\in z\land x\neq x\r)\r].
\end{equation}$$
Now, $x\neq x$ is always false, and so is $x\in z\land x\neq x$; by definition of the biconditional, we see that $x\in e$ is always false. Therefore, we have $\ex e\l[\fa x\l(x\not\in e\r)\r]$, which, by definition, is equivalent to $\ex e\l[\operatorname{emp}\l(e\r)\r]$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The existence of a set $z$ does not follow from the axioms of ZFC Set Theory. Instead, it is a theorem in first-order logic.<span style="float:right;">$\blacklozenge$</span>
