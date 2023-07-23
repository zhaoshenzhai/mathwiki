<div class="topSpace"></div>

Date Created: 02/02/2022 13:39:26
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: [[Omega is an initial segment of ON]], [[Well-ordering well-orders subsets]], [[ON is well-ordered by membership]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. If $X$ is inductive, then $X$ contains all natural numbers.

```

<i>Proof.</i> Suppose, for sake of contradiction, that $n$ is a natural number such that $n\not\in X$. Let $Y\coloneqq S\l(n\r)\comp X$; since $n\in S\l(n\r)$, we see that $n\in Y$ and thus $Y\neq\em$. Because every element of $S\l(n\r)$ is a natural number, we see that $S\l(n\r)\subseteq\ON$ so $\in$ is well-founded on $S\l(n\r)$ and thus on $Y$ too; it follows that there exists an $\in$-minimal element $l\in Y$. Since $l$ is a natural number, we see that either $l=\em$ or is a successor order; the former case is contradictory since $\em\in X$, so there exists an ordinal $i$ such that $l=S\l(i\r)$. Since $i\in l$, we see that $i\not\in Y$ and hence either $i\not\in S\l(n\r)$ or $i\in X$. But $l\in Y\subseteq S\l(n\r)$ and $i\in l$, so, since $\in$ is transitive on $\ON$, we have $i\in S\l(n\r)$. Thus $i\in X$ and, since $X$ is inductive, $l=S\l(i\r)\in X$. This contradicts the fact that $l\in Y$.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> The Principle of Ordinary Induction plays a dual role.
* On one hand, it justifies our definition of the set of natural numbers $\omega$: If $n$ is a natural number, then $n\in X$ for any inductive set $X$ whose existence is stipulated by $\axiinfty$.

* On the other, it serves as a proof method, called ‘proof by induction’: If we wish to prove $\fa n\in\omega:\phi\l(n\r)$, it suffices to prove
$$\begin{equation}
    \phi\l(\em\r)\ \ \ \ \textrm{and}\ \ \ \ \fa n\in\omega:\phi\l(n\r)\Rightarrow\phi\l(S\l(n\r)\r),
\end{equation}$$
for then we can construct the set $X\coloneqq\l\{n\in\omega\st\phi\l(n\r)\r\}$ and conclude that $X$ is inductive since $\em\in X$ and $\fa x\in X:S\l(x\r)\in X$. By the Principle of Ordinary Induction, we see that $\omega\subseteq X$; since $X\subseteq\omega$, we see that $X=\omega$ and thus $\fa n\in\omega:\phi\l(n\r)$.<span style="float:right;">$\blacklozenge$</span>
