---
title: Compactness Theorem
date: 2025-06-07
tags: [In_Progress]
---

# Statement and Proofs

We present the most fundamental result in model theory. Let $L$ be a \ref[first-order language]{first-order_language}. An \ref[$L$-theory]{theory} $T$ is said to be _satisfiable_ if there is an \ref[$L$-structure]{model} $M$ such that $M\models T$.

\begin{theorem}[Compactness Theorem; Gödel 1930]\label{compactness}

An $L$-theory $T$ is satisfiable iff every finite subtheory of $T$ is satisfiable.

\end{theorem}

In fact, in this case, $T$ has a model of \ref[cardinality]{cardinality} at-most $|L|+\aleph_0$ by the \ref[Downward Löwenheim-Skolem Theorem]{downward_lowenheim-skolem_theorem}.

## Syntactic proof

Gödel's original proof uses the following corollary of his Completeness Theorem:

\begin{fact}[\ref[Completeness Theorem]{completeness_theorem}]\label{satisfiable_iff_consistent}

An $L$-theory $T$ is satisfiable iff it is (syntactically-)consistent.

\end{fact}

&emsp;&emsp;With this in hand, the proof of Theorem \iref{compactness} is immediate.

<div class="space"></div>

\begin{proof}[of Theorem \iref{compactness}]

If $T$ is satisfiable, then clearly every finite subset of $T$ is satisfiable. Conversely, if $T$ is not satisfiable, then by Fact \iref{satisfiable_iff_consistent}, there is an $L$-sentence $\sigma$ such that $T\proves\sigma\land\lnot\sigma$. Since proofs are finite, there is a finite subset $T_0\subeq T$ such that $T_0\proves\sigma\lor\lnot\sigma$, so by Fact \iref{satisfiable_iff_consistent} again, $T_0$ is unsatisfiable.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Semantic proof

The above proof leverages the syntactic-semantic duality, and is thus not purely model-theoretic. Using the below non-syntactic results, we can construct a model $M\models T$ using \ref[ultraproducts]{ultraproduct}.

\begin{fact}[\ref[Ultrafilter Lemma]{ultrafilter_lemma}]\label{ultrafilter_lemma}

\TODO

\end{fact}

\begin{fact}[\ref[Łoś's Theorem]{los_theorem}]\label{los}

\TODO

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{compactness}]

Suppose without loss of generality that $T$ is infinite and let $I$ be the collection of all finite subtheories of $T$. For each $i\in I$, let $M\_i\models i$ and let $X\_i\subseteq I$ be the set of all finite subtheories of $T$ containing $i$. Since $X\_i\cap X\_{i'}=X\_{i\cup i'}$ for all $i,i'\in I$, the collection $F\coloneqq\\{X\subseteq I\st X\supseteq X\_i\textrm{ for some }i\in I\\}$ is a filter on $I$ and hence extends to an ultrafilter $U\supset F$ by Fact \iref{ultrafilter_lemma}. We claim that the ultraproduct $M\coloneqq\prod\_iM\_i\big/U$ models $T$. Indeed, take $\sigma\in T$ and observe that $X\_{\\{\sigma\\}}\subseteq\\{i\in I\st M\_i\models\sigma\\}$. Thus $\\{i\in I\st M\_i\models\sigma\\}\in U$, and hence $M\models\sigma$ by Fact \iref{los}.<span style="float:right;">$\blacksquare$</span>

\end{proof}
