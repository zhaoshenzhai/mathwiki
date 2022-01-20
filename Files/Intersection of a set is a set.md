<br />
<br />

Date Created: 20/01/2022 08:11:51
Tags: #Proposition #Closed 

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]]
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $u$ be a non-empty set. Then there exists a unique set $z$ whose elements are exactly the sets $x$ such that for all $v\in u$, we have $x\in v$. Formally,
$$\begin{equation}
    \fa u\ex!z\fa x\l[x\in z\Leftrightarrow\fa v\l(v\in u\Rightarrow x\in v\r)\r].
\end{equation}$$

--- admonition

_Proof_. Let $\psi\l(x\r)$ denote the formula $\fa v\l(v\in u\Rightarrow x\in v\r)$. It suffices to prove that there exists a set $w$ and a formula $\phi\l(x\r)$, not free in $z_1$, such that $\psi\l(x\r)\Leftrightarrow x\in w\land\phi\l(x\r)$. Indeed, we claim that
$$\begin{equation}
    w=u_0\ \ \ \ \textrm{and}\ \ \ \ \phi\l(x\r)\Leftrightarrow\psi\l(x\r)
\end{equation}$$
for any $u_0\in u$, which is ensured to exist.
* (proof that $\psi\l(x\r)\Rightarrow x\in w\land\phi\l(x\r)$): Certainly $\psi\l(x\r)\Rightarrow\phi\l(x\r)$, so it suffices to prove that $\psi\l(x\r)\Rightarrow x\in w$. Thus take a set $x$ such that $\fa v\l(v\in u\Rightarrow x\in v\r)$. In particular, we have $u_0\in u$ and hence $x\in u_0$.
* (proof that $x\in w\land\phi\l(x\r)\Rightarrow\psi\l(x\r)$): This is trivial, for $\phi\l(x\r)\Rightarrow\psi\l(x\r)$.<span style="float:right;">$\blacksquare$</span>
