---
title: Tarski-Vaught Test
date: 2025-06-07
tags: [In_Progress]
---

# Statement and Proof

Let $L$ be a \ref[first-order language]{first-order_language}.

\begin{theorem}[Tarski-Vaught Test]

Let $N\subseq M$ be \ref[$L$-structures]{model}. Then $N\esubeq M$ iff for every formula $\phi(\bar{x},y)$ and for every $\bar{a}\in N$, we have $M\models\ex y\phi(\bar{a},y)$ iff $M\models\phi(\bar{a},a)$ for some $a\in N$.

\end{theorem}

\begin{proof}

If $N\esubeq M$, then $M\models\ex y\phi(\bar{a},y)$ iff $N\models\ex y\phi(\bar{a},y)$ by elementarity, which holds iff there is some $a\in N$ such that $N\models\phi(\bar{a},a)$. By elementarity again, we have $M\models\phi(\bar{a},a)$ for some $a\in N$, as desired.

<br>

&emsp;&emsp;Conversely, let $\phi(\bar{x})$ be a formula and $\bar{a}\in N$. We show that $N\models\phi(\bar{a})$ iff $M\models\phi(\bar{a})$ by induction on $\phi$ with trivial atomic and connective cases. If $\phi(\bar{x})=\ex y\psi(\bar{x},y)$, then $M\models\ex y\psi(\bar{a},y)$ iff $M\models\psi(\bar{a},a)$ for some $a\in N$, so $N\models\psi(\bar{a},a)$ for some $a\in N$ by induction. Hence $N\models\ex y\psi(\bar{a},y)$ by definition, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Classes

The above model-theoretic result is formulated within $\mathsf{ZFC}$; in particular, structures are sets. In set theory, one needs a version of the Tarski-Vaught test where $M\subeq N$ are classes.

\begin{theorem}[Tarski-Vaught Test for classes]

Let $\phi_1,\dots,\phi_n$ be a finite set of $L_\mathrm{set}$-formulas which are subformula-closed, and let $N\subseteq M$ be classes. Then $\mathsf{ZFC}$ proves that the following are equivalent.
1. $\bigwedge_{i\leq n}N\esubeq_{\phi_i}M$.
2. The conjunction of $\fa\bar{a}\in N(\phi_i^M(\bar{a})\leftrightarrow\ex a\in N\\,\phi^M_j(\bar{a},a))$, over all formulas $\phi_i(\bar{x})$ of the form $\ex y\phi_j(\bar{x},y)$.

\end{theorem}

\begin{proof}

If (1) holds and $\phi_i(\bar{x})=\ex y\phi_j(\bar{x},y)$, then $M\models\phi_i(\bar{a})$ iff $N\models\phi_i(\bar{a})$, which holds iff there is some $a\in N$ such that $N\models\phi_j(\bar{a},a)$. Since $N\esubeq_{\phi_j}M$, we have $M\models\phi_j(\bar{a},a)$ for some $a\in N$, as desired.

<br>

&emsp;&emsp;Conversely, let $i\leq n$ and take $\bar{a}\in N$. We show that $N\esubeq_{\phi_i}M$ by induction on $\phi_i$ with trivial atomic and connective cases. If $\phi_i(\bar{x})=\ex y\phi_j(\bar{x},y)$, then $M\models\phi_i(\bar{a})$ iff $M\models\phi_j(\bar{a},a)$ for some $a\in N$, so $N\models\phi_j(\bar{a},a)$ for some $a\in N$ by induction. Hence $N\models\ex y\phi_j(\bar{a},y)$ by definition, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}
