<br />
<br />

Date Created: 18/01/2022 16:08:40
Tags: #Proposition #Closed

Lemmas: [[Set-Builder Notation]], [[Set-builder notation is unique]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $v$ and $U$ be sets. Then there exists a set $z$ whose elements are exactly the sets $v\comp u$ for all sets $u\in U$. Formally,
$$\begin{equation}
    \fa v\fa U\ex z\fa x\l[x\in z\Leftrightarrow\l(\ex u\in U\r)x=v\comp u\r].
\end{equation}$$

--- admonition

_Proof_. Let $\psi\l(x\r)$ denote the formula $\l(\ex u\in U\r)x=v\comp u$. It suffices to prove that there exists a set $w$ and a formula $\phi\l(x\r)$, not free in $z$, such that $\psi\l(x\r)\Leftrightarrow x\in w\land\phi\l(x\r)$. Indeed, we claim that
$$\begin{equation}
    w=\ms{P}v\ \ \ \ \textrm{and}\ \ \ \ \phi\l(x\r)\Leftrightarrow\psi\l(x\r).
\end{equation}$$
* (proof that $\psi\l(x\r)\Rightarrow x\in w\land\phi\l(x\r)$): Certainly $\psi\l(x\r)\Rightarrow\phi\l(x\r)$, so it suffices to prove that $\psi\l(x\r)\Rightarrow x\in w$. Thus take a set $x$ with $x=v\comp u$ for some $u\in U$. Since $v\comp u\subseteq v$, we have, by definition of the power set, $v\comp u\in\ms{P}v$. Thus $x\in\ms{P}v$.
* (proof that $x\in w\land\phi\l(x\r)\Rightarrow\psi\l(x\r)$): This is trivial, for $\phi\l(x\r)\Rightarrow\psi\l(x\r)$.<span style="float:right;">$\blacksquare$</span>
