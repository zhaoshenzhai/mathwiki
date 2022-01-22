<br />
<br />

Date Created: 21/01/2022 18:23:06
Tags: #Proposition #Closed

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]], [[Cartesian product is monotone w.r.t. subsets]], [[Subset relation is transitive]]
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $X$ and $Y$ be sets. Then there exists a unique set $z$ whose elements are exactly the functions from $X$ into $Y$. Formally,
$$\begin{equation}
    \fa X\fa Y\ex!z:\l(f\in z\Leftrightarrow f:X\to Y\r).
\end{equation}$$

--- admonition

_Proof_. Let $\phi\l(f\r)$ denote the formula $f:X\to Y$; we claim that
$$\begin{equation}
    \phi\l(f\r)\Rightarrow x\in\ms{P}\l(X\times Y\r)
\end{equation}$$
To this end, take a function $f:X\to Y$. By definition, we have that $f$ is a binary relation with $\dom f=X$ and $\ran f\subseteq Y$. Observe that
$$\begin{equation}
    f\subseteq\dom f\times\ran f\subseteq X\times Y,
\end{equation}$$
and thus $f\subseteq X\times Y$. It follows that $f\in\ms{P}\l(X\times Y\r)$.<span style="float:right;">$\blacksquare$</span>
