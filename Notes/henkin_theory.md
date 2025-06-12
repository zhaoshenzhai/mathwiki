---
title: Henkin Theory
date: 2025-06-12
tags: [In_Progress]
---

Throughout, fix a \ref[first-order language]{first-order_language} $L$.

# Definitions

\begin{definition}

An \ref[$L$-theory]{theory} $T$ is a _Henkin theory_ (or _has Henkin witnesses_) if for every $L$-formula $\phi(x)$, there is a constant symbol $c_\phi\in\mc{C}$ such that $T\models\ex x\phi(x)\rightarrow\phi(c_\phi)$; any such $c_\phi$ is said to be a _Henkin witness_ for $\phi$.

\end{definition}

## Henkinization

A _Henkinization_ of an $L$-theory $T$ is an Henkin theory $T^\ast\supseteq T$ over some language $L^\ast\supseteq L$.

\begin{theorem}

Every consistent $L$-theory $T$ admits a consistent Henkinization $T^\ast\supseteq T$, defined over a language $L^\ast\supseteq L$ such that $|L^\ast|\leq|L|+\aleph_0$.

\end{theorem}

\begin{proof}

Let $L^\ast\coloneqq\bigcup\_{n<\omega}L\_n$, where $L\_0\coloneqq L$ and $L\_{n+1}$ is the language obtained by adjoining to $L_n$ fresh constants $c_\phi$ for each $L_n$-formula $\phi$. For each $n<\omega$, we define an $L_n$-theory $T_n$ by induction, setting $T_0\coloneqq T$ and letting $T_{n+1}$ be $T_n$ adjoined with the formulas $\ex x\phi(x)\rightarrow\phi(c_\phi)$ for each $L_n$-formula $\phi$.

<br>

&emsp;&emsp;By construction, $T^\ast\coloneqq\bigcup_nT_n$ is a Henkin theory and $|L^\ast|\leq|L|+\aleph_0$. It remains to see that if $T_n$ is consistent, then so is $T_{n+1}$, for then $T^\ast$ is consistent too. Indeed, since $T_n$ is consistent, let $M\models T_n$ be a model and interpret, for each $L_n$-formula $\phi$, the constant $c_\phi$ by choosing witnesses in $M$ to $M\models\ex x\phi(x)$, if any.<span style="float:right;">$\blacksquare$</span>

\end{proof}

# Henkin Constructions

\TODO
