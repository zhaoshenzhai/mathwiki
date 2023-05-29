<div class="topSpace"></div>

Date Created: 19/01/2022 16:57:32
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Russel's Paradox]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

The collection of all singletons form a proper class. Formally, $\fa v\ex u\l(\l\{u\r\}\not\in v\r)$.

```

_Proof_. Suppose, for sake of contradiction, that such a set $v$ exists, i.e. $\ex v\fa u\l(\l\{u\r\}\in v\r)$. Consider the union $\bigcup v$. For any set $x$, we have
$$\begin{equation}
    x\in\bigcup v\Leftrightarrow\ex z\l(x\in z\land z\in v\r)
\end{equation}$$
by definition of union. But the latter formula is always true; simply take $z=\l\{x\r\}$. Obviously $x\in\l\{x\r\}$ and, by assumption, we have $\l\{x\r\}\in v$. Thus $\bigcup v$ is $\textrm{`}$set of all sets$\textrm{'}$, which contradicts the fact that there is none.<span style="float:right;">$\blacksquare$</span>
