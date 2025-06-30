---
title: Characterizations of Consistent Theories
date: 2025-06-27
tags: [In_Progress]
---

# Statements and Proofs

Let $L$ be a \ref[first-order language]{first-order_language}. We give several useful characterizations for when an \ref[$L$-theory]{theory} is consistent.

\begin{theorem}\label{theorem}

The following are equivalent for an $L$-theory $T$.
1. $T$ is consistent: there is no $L$-sentence $\sigma$ such that $T\proves\sigma\land\lnot\sigma$.
2. $T\not\proves\bot$, where $\bot\coloneqq\ex x\lnot(x=x)$.
3. $T\not\proves\sigma$ for some $L$-sentence $\sigma$.

\end{theorem}

&emsp;&emsp;We will need the following two elementary facts.

\begin{fact}\label{contradiction}

For any $L$-formulas $\phi$ and $\psi$, we have $\proves(\phi\land\lnot\phi)\rightarrow\psi$.

\end{fact}

\begin{fact}\label{anything}

For any $L$-formula $\phi$, we have $\proves\bot\rightarrow\phi$ where $\bot\coloneqq\ex x\lnot(x=x)$.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{theorem}]

That (2) implies (3) is trivial.

* If (3) holds but there is an $L$-sentence $\sigma$ such that $T\proves\sigma\land\lnot\sigma$, then $T$ proves every $L$-sentence by Fact \iref{contradiction}.
* If (1) holds but $T\proves\bot$, then $T\proves\sigma\land\lnot\sigma$ for any $L$-sentence $\sigma$ by Fact \iref{anything}.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Localized inconsistency

We can also test whether the inconsistency of $T$ arises from a single sentence:

\begin{theorem}

For any $L$-theory $T$ and any $L$-sentence $\sigma$, the $L$-theory $T\cup\l\\{\sigma\r\\}$ is inconsistent iff $T\proves\lnot\sigma$.

\end{theorem}

\begin{proof}

If $T\proves\lnot\sigma$, then $T\cup\l\\{\sigma\r\\}\proves\sigma\land\lnot\sigma$, so that $T\cup\l\\{\sigma\r\\}$ is inconsistent by Theorem \iref{theorem}. Conversely, if $T\cup\l\\{\sigma\r\\}$ is inconsistent, then again by Theorem \iref{theorem}, we have $T\cup\l\\{\sigma\r\\}\proves\bot$.

\end{proof}
