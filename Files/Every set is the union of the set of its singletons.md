<br />
<br />

Date Created: 25/01/2022 12:13:46
Tags: #Proposition #Closed 

Proved by: [[Element of set is a subset of its union]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $X$ be a set. Then_ $X=\bigcup_{x\in X}\l\{x\r\}=\bigcup\l\{\l\{x\r\}\in\mc{P}\l(X\r)\mid x\in X\r\}$_._

--- admonition

_Proof_. Let $\mc{S}\coloneqq\l\{\l\{x\r\}\in\mc{P}\l(x\r)\mid x\in X\r\}$.
* ($\subseteq$): Take $x\in X$, so $\l\{x\r\}\in\mc{P}\l(X\r)$ and thus $\l\{x\r\}\in\mc{S}$. It follows that $\l\{x\r\}\subseteq\bigcup\mc{S}$ and thus $x\in\bigcup\mc{S}$.
* ($\supseteq$): Take $x\in\bigcup\mc{S}$, so there exists $S\in\mc{S}$ such that $x\in S$. Observe that $S$ is of the form $\l\{y\r\}$ for some $y\in X$, and since $x\in S$, we see that $x=y\in X$.<span style="float:right;">$\blacksquare$</span>
