<div class="topSpace"></div>

Date Created: 03/06/2022 12:36:03
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Axiom Schema of Specification]], [[Axiom of Extensionality]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The empty set exists and is unique. Formally, $\ex!e\l[\fa z\l(z\not\in e\r)\r]$._

```

_Proof_.
* (Existence): Let $\xi$ be a set. Using $\axispec$ with the formula $\phi$ being $z\neq z$, we have
$$\begin{equation}
    \ex e\l[\fa z\l(z\in e\r)\Leftrightarrow z\in\xi\land z\neq z\r].
\end{equation}$$
Now $z\neq z$ is always false, and so is $z\in\xi\land z\neq z$. Hence, by the definition of the biconditional, we see that $z\in e$ is always false. Therefore, we have $\ex e\l[\fa z\l(z\not\in e\r)\r]$.

* (Uniqueness): Suppose that both $e$ and $e'$ are empty sets, so $\fa z\l(z\not\in e\r)\land\fa z\l(z\not\in e'\r)$. Thus $z\in e$ and $z\in e'$ are both false for all sets $z$, so, by the definition of the biconditional, we see that $z\in e\Leftrightarrow z\in e'$ for all sets $z$. The result follows from $\axiext$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The existence of a set $\xi$ can be proven in pure logic by invoking the axiom $\fa x\l(x=x\r)$.<span style="float:right;">$\blacklozenge$</span>
