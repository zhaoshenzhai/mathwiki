---
title: Extending Consistent Theories
date: 2025-06-27
tags: [In_Progress]
---

Let $L$ be a \ref[first-order language]{first-order_language} and let $T$ be an \ref[$L$-theory]{theory}.

\begin{theorem}\label{theorem}

If $T$ is consistent, then for any $L$-sentence $\sigma$, one of $T\cup\l\\{\sigma\r\\}$ and $T\cup\l\\{\lnot\sigma\r\\}$ is consistent.

\end{theorem}

\begin{corollary}

Every consistent $L$-theory $T$ admits a consistent completion $\bar{T}\supseteq T$.

\end{corollary}

\begin{proof}

Since inconsistent theories have inconsistent finite subtheories, an arbitrary union of consistent theories is consistent. Thus, by Zorn's Lemma, there is an $\subeq$-maximal consistent theory $\bar{T}\supseteq T$, which is complete since for any $L$-sentence $\sigma$, one of $\bar{T}\cup\l\\{\sigma\r\\}$ and $\bar{T}\cup\l\\{\lnot\sigma\r\\}$ is consistent by Theorem \iref{theorem}, and thus either $\sigma\in\bar{T}$ or $\lnot\sigma\in\bar{T}$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

&emsp;&emsp;The proof of Theorem \iref{theorem} will require the following fact.

\begin{fact}[\ref[Characterization of consistency]{characterization_consistency}]\label{inconsistent}

For any $L$-sentence $\sigma$, $T\cup\l\\{\sigma\r\\}$ is inconsistent iff $T\proves\lnot\sigma$.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{theorem}]

Otherwise $T\proves\lnot\sigma$ and $T\proves\lnot\lnot\sigma$ by Fact \iref{inconsistent}, and since $\proves\lnot\lnot\sigma\rightarrow\sigma$, we have $T\proves\sigma\land\lnot\sigma$. This shows that $T$ is inconsistent, a contradiction.<span style="float:right;">$\blacksquare$</span>

\end{proof}
