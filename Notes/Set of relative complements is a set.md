<br />
<br />

Date Created: 18/01/2022 16:08:40
Tags: #Proposition #Closed  

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $v$ and $U$ be sets. Then there exists a unique set $z$ whose elements are exactly the sets $v\setcomp u$ for all sets $u\in U$. Formally,_
$$\begin{equation}
    \fa v\fa U\ex!z\fa x\l[x\in z\Leftrightarrow\l(\ex u\in U\r)x=v\setcomp u\r].
\end{equation}$$

```

_Proof_. Let $\phi\l(x\r)$ denote the formula $\l(\ex u\in U\r)x=v\setcomp u$; we claim that
$$\begin{equation}
    \phi\l(x\r)\Rightarrow x\in\pow v.
\end{equation}$$
To this end, take a set $x$ with $x=v\setcomp u$ for some $u\in U$. Since $v\setcomp u\subseteq v$, we have, by definition of the power set, $v\setcomp u\in\pow v$. Thus $x\in\pow v$.<span style="float:right;">$\blacksquare$</span>
