<br />
<br />

Date Created: 18/01/2022 16:08:40
Tags: #Proposition #Closed  

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]]
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $v$ and $U$ be sets. Then there exists a unique set $z$ whose elements are exactly the sets $v\comp u$ for all sets $u\in U$. Formally,
$$\begin{equation}
    \fa v\fa U\ex!z\fa x\l[x\in z\Leftrightarrow\l(\ex u\in U\r)x=v\comp u\r].
\end{equation}$$

--- admonition

_Proof_. Let $\phi\l(x\r)$ denote the formula $\l(\ex u\in U\r)x=v\comp u$; we claim that
$$\begin{equation}
    \phi\l(x\r)\Rightarrow x\in\ms{P}v.
\end{equation}$$
To this end, take a set $x$ with $x=v\comp u$ for some $u\in U$. Since $v\comp u\subseteq v$, we have, by definition of the power set, $v\comp u\in\ms{P}v$. Thus $x\in\ms{P}v$.<span style="float:right;">$\blacksquare$</span>
