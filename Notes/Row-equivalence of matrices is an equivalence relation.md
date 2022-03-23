<br />
<br />

Date Created: 23/03/2022 19:38:41
Tags: #Proposition #Closed 

Proved by: [[Elementary row operations have inverses of the same type]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then the row-equivalence relation $\sim$ on $\mat{m\times n}{K}$ is an equivalence relation._

```

_Proof_. Take $\v{M}_1,\v{M}_2,\v{M}_3\in\mat{m\times n}{K}$.
* (Reflexive): Take any elementary row operation $e$. Since $e$ has an inverse, we see that $\v{M}_1=\l(e^{-1}\circ e\r)\l(\v{M}_1\r)$ and thus $\v{M}_1\sim\v{M}_1$.

* (Symmetric): Assume that $\v{M}_2\sim\v{M}_1$, so there exist elementary row operations $e_1,\dots,e_k$ such that $\v{M}_2=\l(e_k\circ\cdots\circ e_1\r)\l(\v{M}_1\r)$. Applying the elementary row operations $e_k^{-1},\dots,e_1^{-1}$ on both sides from left to right, reassociating, and cancelling, we see that
$$\begin{equation}
    \v{M}_1=e_1^{-1}\circ\cdots\circ e_k^{-1}\l(\v{M}_2\r)
\end{equation}$$
and thus $\v{M}_1\sim\v{M}_2$.
* (Transitive): Assume that $\v{M}_3\sim\v{M}_2$ and $\v{M}_2\sim\v{M}_1$, so there exist elementary row operations $e_1,\dots,e_k,f_1,\dots,f_l$ such that
$$\begin{equation}
    \v{M}_3=\l(f_l\circ\cdots\circ f_1\r)\l(\v{M}_2\r)\ \ \ \ \textrm{and}\ \ \ \ \v{M}_2=\l(e_k\circ\cdots\circ e_1\r)\l(\v{M}_1\r).
\end{equation}$$
Observe then that
$$\begin{equation}
    \begin{aligned}
        \v{M}_3&=\l(f_l\circ\cdots f_1\r)\l[\l(e_k\circ\cdots\circ e_i\r)\l(\v{M}_1\r)\r]&&\textrm{Substitution}\\
        &=\l(f_l\circ\cdots f_1\circ e_k\circ\cdots\circ e_1\r)\l(\v{M}_1\r),&&\textrm{Composition of functions is associative}
    \end{aligned}
\end{equation}$$
so $\v{M}_3\sim\v{M}_1$.<span style="float:right;">$\blacksquare$</span>
