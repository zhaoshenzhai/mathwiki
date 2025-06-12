---
title: Axiomatization
date: 2025-06-12
tags: [In_Progress]
---

Throughout, fix a \ref[first-order language]{first-order_language} $L$ and an \ref[$L$-theory]{theory} $T$.

# Definitions and Examples

\begin{theorem}

Let $\Gamma$ be a collection of $L$-sentences. We say that $T$ is _$\Gamma$-axiomatizable_ if for any \ref[$L$-structure]{model} $M$, we have $M\models T$ iff $M\models\Gamma$, in which case we say that $\Gamma$ is an _axiomatization_ of $T$.

\end{theorem}

## Finite-axiomatizability

We say that $T$ is _finitely-axiomatizable_ if $\Gamma$ is finite.

\begin{fact}[\ref{}]

If $T$ is finitely-axiomatizable, then there is a finite axiomatization $\Gamma\subeq T$.

\end{fact}

## Universal-axiomatizability

We say that $T$ is _universally-axiomatizable_ if $\Gamma$ consists of $\fa$-sentences.

\begin{fact}[\ref[Characterization of $\fa$-axiomatizability]{characterization_of_universal_axiomatizability}]

An $L$-theory $T$ is universally-axiomatizable iff $T$ is closed under submodels, i.e., if $M\models T$ and $N\subseq M$, then $N\models T$ as well.

\end{fact}

## $\fa\ex$-axiomatizability

We say that $T$ is _$\fa\ex$-axiomatizable_ if $\Gamma$ consists of $\fa\ex$-sentences.

\begin{fact}[\ref[Characterization of $\fa\ex$-axiomatizability]{characterization_of_ae_axiomatizability}]

An $L$-theory $T$ is $\fa\ex$-axiomatizable iff $T$ is closed under unions of increasing chains of models, i.e., for any increasing sequence $M_\alpha\models T$ of models, we have $\bigcup_\alpha M_\alpha\models T$.

\end{fact}
