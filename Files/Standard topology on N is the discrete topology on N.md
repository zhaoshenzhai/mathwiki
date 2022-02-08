<br />
<br />

Date Created: 07/02/2022 15:43:53
Tags: #Proposition #Closed 

Proved by: [[Discrete topology (explicit = basis)]], [[Criteria for collection to be a basis for an existing topology]], [[Successor of natural number is a natural number]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $\mb{N}$ be the set of natural numbers. Then the standard topology_ $\mc{T}\coloneqq\mc{T}\l(<\r)\coloneqq\mc{T}\l(\mc{B}_\textrm{or}\r)$ _on $\mb{N}$ is the discrete topology on $\mb{N}$._

--- admonition

_Proof_. Consider the collection $\mc{B}\coloneqq\l\{\l\{n\r\}\in\mc{P}\l(\mb{N}\r)\mid n\in\mb{N}\r\}$; it suffices to prove that $\mc{B}$ is a basis that generates $\mc{T}$.
* ($\mc{B}\subseteq\mc{T}$): Take $\l\{n\r\}\in\mc{B}$ where $n\in\mb{N}$ and observe that
$$\begin{equation}
    \l\{n\r\}=
    \begin{dcases}
        \l(n-1,n+1\r) & \textrm{if }n\neq0\\
        \l[0,1\r) & \textrm{else.}
    \end{dcases}
\end{equation}$$
In both cases, we have $\l\{n\r\}\in\mc{T}$.

* ($\fa U\in\mc{T},\fa x\in U,\ex B\in\mc{B}:x\in B\subseteq U$): Take $U\in\mc{T}=\mc{T}\l(\mc{B}_\textrm{or}\r)$ and $x\in U$, so there exists $\mc{A}\subseteq\mc{B}_\textrm{or}$ such that $U=\bigcup\mc{A}$ and there exists $A\in\mc{A}$ such that $x\in A$. Recall that $\mc{B}_\textrm{or}\subseteq\mc{P}\l(\mb{N}\r)$, so $\mc{A}\subseteq\mc{P}\l(\mb{N}\r)$ and thus $A\subseteq\mb{N}$ for all $A\in\mc{A}$. It follows that $x\in\mb{N}$ and hence $\l\{x\r\}\in\mc{B}$. Since $x\in U$, we see that $\l\{x\r\}\subseteq U$.<span style="float:right;">$\blacksquare$</span>
