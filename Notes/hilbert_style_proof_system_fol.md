---
title: Hilbert-style Proof System for First-order Logic
date: 2025-06-27
tags: [In_Progress]
---

# Definition

Fix a \ref[first-order language]{first-order_language} $L$, let $\Gamma$ be a set of $L$-formulas, and let $\phi$ be an $L$-formula. We describe here a simple proof system using a (\ref[primitive-recursive]{primitive_recursive}) set $\mc{A}$ of axioms and a single inference rule, that of _Modus Ponens_:

\begin{definition}

A _proof_ of $\phi$ from $\Gamma$ is a finite sequence $\pi\coloneqq(\phi_1,\dots,\phi_l)$ of $L$-formulas with $\phi_l=\phi$ such that for each $i\leq l$, either $\phi_i\in\Gamma$ or is an _axiom_ (see below), or there exist $j,k<i$ such that $\phi_k=\phi_j\rightarrow\phi_i$.

\end{definition}

The _axioms_ $\mc{A}$ of this proof system are as follows, where $\phi,\psi,\chi$ ranges over all $L$-formulas, $u,v$, $w,\bar{x},\bar{y}$ ranges over all variables, $t$ ranges over all $L$-terms, $f\in\mc{F}_n$, and $R\in\mc{R}_n$:
1. (Propositional). $\phi\rightarrow(\psi\rightarrow\phi)$; $(\phi\rightarrow\psi)\rightarrow\big((\phi\rightarrow(\psi\rightarrow\chi))\rightarrow(\phi\rightarrow\chi)\big)$; $(\lnot\phi\rightarrow\psi)\rightarrow\big((\lnot\phi\rightarrow\lnot\psi)\rightarrow\phi\big)$.
2. (First-order). $\fa v\phi\rightarrow\phi(t/v)$; $\phi\rightarrow\fa u\phi(u/v)$.
3. (Equality). $u=u$; $u=v\rightarrow v=u$; $(u=v\land v=w)\rightarrow u=w$; $\bar{x}=\bar{y}\rightarrow f(\bar{x})=f(\bar{y})$; $\bar{x}=\bar{y}\rightarrow R(\bar{x})\rightarrow R(\bar{y})$.

Here, we implicitly assume that all substitutions $\phi(t/v)$ are _valid_: neither $v$ nor any variable in $t$ is quantified in $\phi$.

# Properties

A basic (but fundamental) property of our proof system is the _Deduction Theorem_.

\begin{fact}[\ref[Deduction Theorem]{deduction_theorem}]

For a set $\Gamma$ of formulas, we have $\Gamma,\psi\proves\phi$ iff $\Gamma\proves\psi\rightarrow\phi$ for any formulas $\phi,\psi$.

\end{fact}

## Soundness and completeness

This proof system is _sound_ in the sense that for any \ref[$L$-theory]{theory} $T$, if $T\proves\phi$, then $T\models\phi$. Indeed, any $L$-structure $M$ obviously satisfies each of the axioms in $\mc{A}$, and moreover, satisfiability in $M$ is propagated through Modus Ponens. The converse is true too, indicating that our proof system is _complete_:

\begin{fact}[\ref[Gödel's Completeness Theorem]{completeness_theorem}]

For any $L$-theory $T$ and $L$-sentence $\sigma$, we have $T\proves\sigma$ iff $T\models\sigma$.

\end{fact}

## Consistency

An $L$-theory $T$ is said to be _\ref[consistent]{theory#consistency-and-completeness}_ if there is no $L$-sentence $\sigma$ such that $T\proves\sigma\land\lnot\sigma$.

\begin{fact}[\ref[Characterizations of consistency]{characterization_consistency}]

The following are equivalent for an $L$-theory $T$.
1. $T$ is consistent.
2. $T\not\proves\bot$, where $\bot\coloneqq\ex x\lnot(x=x)$.
3. $T\not\proves\sigma$ for some $L$-sentence $\sigma$.

\end{fact}

\begin{fact}[\ref[Extending consistent theories]{extending_consistent_theories}]

Let $T$ be an $L$-theory.
1. For any $L$-sentence $\sigma$, the theory $T\cup\l\\{\sigma\r\\}$ is inconsistent iff $T\proves\lnot\sigma$.
2. If $T$ is consistent, then for any $L$-sentence $\sigma$, one of $T\cup\l\\{\sigma\r\\}$ and $T\cup\l\\{\lnot\sigma\r\\}$ is consistent.
3. Every consistent $L$-theory $T$ admits a consistent completion $\bar{T}\supseteq T$.

\end{fact}
