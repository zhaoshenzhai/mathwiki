<br />
<br />

Date Created: 15/01/2022 17:21:16
Tags: #Proposition #Closed

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]], [[Element of set is a subset of its union]], [[Union with another set is monotone w.r.t. subsets]], [[Intersection with another set is monotone w.r.t. subsets]]
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $v$ and $U$ be sets. Then there exists a unique set $z_1$ whose elements are exactly the sets $v\cup u$ for all sets $u\in U$. Similarly, there exists a unique set $z_2$ whose elements are exactly the sets $v\cap u$ for all sets $u\in U$. Formally, 
$$\begin{equation}
    \begin{gathered}
        \fa v\fa U\ex!z_1\fa x\l[x\in z_1\Leftrightarrow\l(\ex u\in U\r)x=v\cup u\r]\\
        \fa v\fa U\ex!z_2\fa x\l[x\in z_2\Leftrightarrow\l(\ex u\in U\r)x=v\cap u\r].
    \end{gathered}
\end{equation}$$

--- admonition

_Proof_. We shall prove the statement for $z_1$; the proof for $z_2$ is analogous. Let $\psi\l(x\r)$ denote the formula $\l(\ex u\in U\r)x=v\cup u$. It suffices to prove that there exists a set $w$ and a formula $\phi\l(x\r)$, not free in $z_1$, such that $\psi\l(x\r)\Leftrightarrow x\in w\land\phi\l(x\r)$. Indeed, we claim that
$$\begin{equation}
    w=\ms{P}\l(v\cup\bigcup U\r)\ \ \ \ \textrm{and}\ \ \ \ \phi\l(x\r)\Leftrightarrow\psi\l(x\r).
\end{equation}$$
* (proof that $\psi\l(x\r)\Rightarrow x\in w\land\phi\l(x\r)$): Certainly $\psi\l(x\r)\Rightarrow\phi\l(x\r)$, so it suffices to prove that $\psi\l(x\r)\Rightarrow x\in w$. Thus take a set $x$ with $x=v\cup u$ for some $u\in U$. Since $u\subseteq\bigcup U$, we have $v\cup u\subseteq v\cup\bigcup U$. By definition of the power set, we have $v\cup u\in\ms{P}\l(v\cup\bigcup U\r)$, and so $x\in\ms{P}\l(v\cup\bigcup U\r)$.
* (proof that $x\in w\land\phi\l(x\r)\Rightarrow\psi\l(x\r)$): This is trivial, for $\phi\l(x\r)\Rightarrow\psi\l(x\r)$.<span style="float:right;">$\blacksquare$</span>