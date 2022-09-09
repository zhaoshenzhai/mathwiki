<div class="topSpace"></div>

Date Created: 23/03/2022 19:38:41
Tags: #Proposition

Proved by: [[Elementary matrices slash operations have inverses of the same type]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then the row-equivalence relation $\sim$ on $\mat{m\times n}{K}$ is an equivalence relation._

```

_Proof_. Take $A_1,A_2,A_3\in\mat{m\times n}{K}$.
* (Reflexive): Take any elementary row operation $e$. Since $e$ has an inverse, we see that $A_1=\l(e^{-1}\circ e\r)\l(A_1\r)$ and thus $A_1\sim A_1$.

* (Symmetric): Assume that $A_2\sim A_1$, so there exist elementary row operations $e_1,\dots,e_k$ such that $A_2=\l(e_k\circ\cdots\circ e_1\r)\l(A_1\r)$. Applying the elementary row operations $e_k^{-1},\dots,e_1^{-1}$ on both sides from left to right, reassociating, and cancelling, we see that
$$\begin{equation}
    A_1=e_1^{-1}\circ\cdots\circ e_k^{-1}\l(A_2\r)
\end{equation}$$
and thus $A_1\sim A_2$.
* (Transitive): Assume that $A_3\sim A_2$ and $A_2\sim A_1$, so there exist elementary row operations $e_1,\dots,e_k,f_1,\dots,f_l$ such that
$$\begin{equation}
    A_3=\l(f_l\circ\cdots\circ f_1\r)\l(A_2\r)\ \ \ \ \textrm{and}\ \ \ \ A_2=\l(e_k\circ\cdots\circ e_1\r)\l(A_1\r).
\end{equation}$$
Observe then that
$$\begin{equation}
    \begin{aligned}
        A_3&=\l(f_l\circ\cdots f_1\r)\l[\l(e_k\circ\cdots\circ e_i\r)\l(A_1\r)\r]&&\textrm{Substitution}\\
        &=\l(f_l\circ\cdots f_1\circ e_k\circ\cdots\circ e_1\r)\l(A_1\r),&&\textrm{Composition of functions is associative}
    \end{aligned}
\end{equation}$$
so $A_3\sim A_1$.<span style="float:right;">$\blacksquare$</span>
