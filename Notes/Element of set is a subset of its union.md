<br />
<br />

Date Created: 15/01/2022 17:32:59
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $A$ be a set. For every $a\in A$, we have $a\subseteq\bigcup A$._

```

_Proof_. If $A=\em$, then the result is vacuously true. Assume otherwise and take $a\in A$. If $a=\em$, it is also vacuously true that $\em\subseteq\bigcup A$. Thus take $c\in a$. Certainly there exists some $u\in A$ such that $c\in u$, namely $u=a$. By the definition of union, we have $c\in\bigcup A$. Since $c$ is arbitrary, the result follows.<span style="float:right;">$\blacksquare$</span>
