<br />
<br />

Date Created: 02/02/2022 13:39:26
Tags: #Proposition #Closed 

Proved by: [Natural numbers form an initial segment of $\textrm{ON}$](Natural%20numbers%20form%20an%20initial%20segment%20of%20ON.md), [[Well-ordering well-orders subsets]], [$\textrm{ON}$ is well-ordered by membership](ON%20is%20well-ordered%20by%20membership.md)
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. If $X$ is inductive, then $X$ contains all natural numbers._

```

_Proof_. Suppose, for sake of contradiction, that $n$ is a natural number such that $n\not\in X$. Let $Y\coloneqq S\l(n\r)\setcomp X$; since $n\in S\l(n\r)$, we see that $n\in Y$ and thus $Y\neq\em$. Because every element of $S\l(n\r)$ is a natural number, we see that $S\l(n\r)\subseteq\ord$ so $\in$ is well-founded on $S\l(n\r)$ and thus on $Y$ too; it follows that there exists an $\in$-minimal element $l\in Y$. Since $l$ is a natural number, we see that either $l=\em$ or is a successor order; the former case is contradictory since $\em\in X$, so there exists an ordinal $i$ such that $l=S\l(i\r)$. Since $i\in l$, we see that $i\not\in Y$ and hence either $i\not\in S\l(n\r)$ or $i\in X$. But $l\in Y\subseteq S\l(n\r)$ and $i\in l$, so, since $\in$ is transitive on $\ord$, we have $i\in S\l(n\r)$. Thus $i\in X$ and, since $X$ is inductive, $l=S\l(i\r)\in X$. This contradicts the fact that $l\in Y$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The Principle of Ordinary Induction plays a dual role.
* On one hand, it justifies our definition of the set of natural numbers $\omega$: If $n$ is a natural number, then $n\in X$ for any inductive set $X$ whose existence is stipulated by the Axiom of Infinity.
* On the other, it serves as a proof method, called $\textrm{`}$proof by induction$\textrm{'}$: If we wish to prove $\fa n\in\omega:\phi\l(n\r)$, it suffices to prove
$$\begin{equation}
    \phi\l(\em\r)\ \ \ \ \textrm{and}\ \ \ \ \fa n\in\omega:\phi\l(n\r)\Rightarrow\phi\l(S\l(n\r)\r),
\end{equation}$$
for then we can construct the set $X\coloneqq\l\{n\in\omega\mid\phi\l(n\r)\r\}$ and conclude that $X$ is inductive since $\em\in X$ and $\fa x\in X:S\l(x\r)\in X$. By the Principle of Ordinary Induction, we see that $\omega\subseteq X$; since $X\subseteq\omega$, we see that $X=\omega$ and thus $\fa n\in\omega:\phi\l(n\r)$.<span style="float:right;">$\blacklozenge$</span>
