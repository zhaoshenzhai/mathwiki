---
title: Theory
date: 2025-06-07
tags: [In_Progress]
---

# Definition and Examples

\begin{definition}

Let $L$ be a \ref[(first-order) language]{first-order_language}. An _$L$-theory_ $T$ is a set of $L$-sentences.

<br>

&emsp;&emsp;Given a non-empty \ref[$L$-structure]{model} $M$, we write $M\models T$, and say that _$M$ models T_, if $M\models\sigma$ for each $\sigma\in T$.

\end{definition}

\begin{example}

Let $M$ be an $L$-structure. The _theory of $M$_ is the $L$-theory $\Th M\coloneqq\\{\sigma\in\Sent(L)\st M\models\sigma\\}$. Observe that $M\models T$ iff $T\subeq\Th M$, and a \ref[consistent]{theory#consistency-and-completeness} $L$-theory is \ref[complete]{theory#consistency-and-completeness} iff for any model $M\models T$, we have $T=\Th M$.

\end{example}

## Categories of models

Depending on the choice of morphisms, we obtain the \ref[categories]{categories} $\cat{Mod}(T)$, $\cat{Emb}(T)$, and $\cat{Elem}(T)$ of models $M\models T$ with $L$-homomorphisms (resp. $L$-embeddings, $L$-elementary embeddings).

\begin{fact}[\ref{}]

$\cat{Elem}(T)$ admits directed colimits. \TODO

\end{fact}

# Classes of Theories

## Consistency and Completeness

An $L$-theory is said to be _consistent_ (resp. _complete_) if it satisfies any of the 7 conditions in Fact \iref{characterization_consistency} (resp. Fact \iref{characterization_completeness}).

\begin{fact}[\ref[Completeness Theorem]{completeness_theorem}, \ref{characterization_consistency}]\label{characterization_consistency}

The following are equivalent for an $L$-theory $T$:
* (Model-existence/satisfiability). There is an $L$-structure $M$ such that $M\models T$.
* (Semantic-consistency). (a) $T\not\models\bot$ or (b) there is no $\sigma$ such that $T\models\sigma\land\lnot\sigma$ or (c) $T\not\models\sigma$ for some $\sigma$.
* (Syntactic-consistency). (a) $T\not\proves\bot$ or (b) there is no $\sigma$ such that $T\proves\sigma\land\lnot\sigma$ or (c) $T\not\proves\sigma$ for some $\sigma$.

\end{fact}

\begin{corollary}[\ref[Compactness Theorem]{compactness_theorem}]

An $L$-theory is consistent iff every finite subset of $T$ is consistent.

\end{corollary}

\begin{fact}[\ref[Completeness Theorem]{completeness_theorem}, \ref{}]\label{characterization_completeness}

The following are equivalent for an $L$-theory $T$:
* (Model-uniqueness). For any two $L$-structures such that $M,N\models T$, we have $M\equiv N$.
* (Semantic-completeness). For each $L$-sentence $\sigma$, either $T\models\sigma$ or $T\models\lnot\sigma$.
* (Syntactic-completeness). For each $L$-sentence $\sigma$, either $T\proves\sigma$ or $T\proves\lnot\sigma$.

\end{fact}

## Skolem, Henkin, and Morley

It is sometimes convenient to assume that an $L$-theory $T$ 'witnesses' certain statements using symbols within $L$. Here are examples of such classes of theories.
* An $L$-theory $T$ is _Skolem_ (or _has built-in Skolem functions_) if for any $L$-formula $\phi(x,\bar{y})$, there is a function symbol $f_\phi\in\mc{F}$ such that $T\models\fa\bar{y}(\ex x\phi(x,\bar{y})\rightarrow\phi(f_\phi(\bar{y}),y))$; any such $f_\phi$ is said to be a _Skolem function_ for $\phi$.
* An $L$-theory $T$ is _Henkin_ (or _has Henkin witnesses_) if for any $L$-formula $\phi(x)$, there is a constant symbol $c_\phi\in\mc{C}$ such that $T\models\ex x\phi(x)\rightarrow\phi(c_\phi)$; any such $c_\phi$ is said to be a _Henkin witness_ for $\phi$.
* \TODO[Morley]

\begin{fact}[\ref[$T^s$]{skolem_theory#skolemization}, \ref[$T^h$]{henkin_theory#henkinization}, \ref[$T^m$]{}]

Every $L$-theory $T$ admits a _Skolemization_ $T^s\supseteq T$ (resp. _Henkinization_ $T^h\supseteq T$, resp. _Morleyization_ $T^m\supseteq T$) over a larger language $L^s\supseteq L$ (resp. $L^h\supseteq L$, $L^m\supseteq L$).

\end{fact}

## \ref[Axiomatization]{axiomatization}

Let $\Gamma$ be a set of $L$-sentences. An $L$-theory admits a _$\Gamma$-axiomatization_ if for any $L$-structure $M$, we have $M\models T$ iff $M\models\Gamma$.

## Categoricity

Let $\kappa$ be an infinite cardinal. An $L$-theory $T$ is said to be _$\kappa$-categorical_ if whenever $M,N\models T$ both have cardinality $\kappa$, then $M\iso N$.

\begin{fact}[\ref[Morley's Categoricity Theorem]{morleys_categoricity_theorem}]

\TODO

\end{fact}

## Stability

\TODO
