---
title: Model
date: 2025-06-07
tags: [In_Progress]
---

# Structures and Models

\begin{definition}

Let $L\coloneqq(\mc{F},\mc{R},\mf{a})$ be a \ref[first-order language]{first-order_language}. An _$L$-structure_ is a tuple $\mc{M}\coloneqq(M,i)$ consisting of a set $M$, called the _universe_, and an _interpretation function_ $i$ assigning
* to each function symbol $f\in\mc{F}$, an $\mf{a}(f)$-ary function $f^\mc{M}:M^{\mf{a}(f)}\to M$, and
* to each relation symbol $R\in\mc{F}$, an $\mf{a}(R)$-ary relation $R^\mc{M}\subeq M^{\mf{a}(R)}$.

Given an $L$-structure $\mc{M}$ and an \ref[$L$-theory]{theory} $T$, we write $\mc{M}\models T$ and say that _$\mc{M}$ is a model $T$_ if $\mc{M}\models\sigma$ for each $\sigma\in T$, where $\mc{M}\models\sigma$ is defined inductively in the obvious way (see Definition \iref{interpret_formula} below).

\end{definition}

For ease of notation, we write $M$ for $\mc{M}$. We define the _interpretation_ of $L$-terms and $L$-formulas in $M$.

\begin{definition_}

The _interpretation_ of an $L$-term $\tau(\bar{x})$ in $M$ is the function $\tau^M:M^{|\bar{x}|}\to M$ defined by:
* If $\tau=c\in\mc{C}$, then $\tau^M(\bar{a})\coloneqq c^M$ for all $\bar{a}\in M^{|\bar{x}|}$.
* If $\tau=x$ is a variable, then $x=x_i$ for some $1\leq i\leq n$, and let $\tau^M(\bar{a})\coloneqq a_i$ for all $\bar{a}\in M^{|\bar{x}|}$.
* If $\tau=f(\tau_1,\dots,\tau_n)$ for some $f\in\mc{F}_n$, then $\tau^M(\bar{a})\coloneqq f^M(\tau_1^M(\bar{a}),\dots,\tau_n^M(\bar{a}))$ for all $\bar{a}\in M^{|\bar{x}|}$.

\end{definition_}

\begin{definition_}\label{interpret_formula}

The _interpretation_ of an $L$-formula $\phi(\bar{x})$ in $M$ is the relation $\phi^M\subeq M^{|\bar{x}|}$ defined by:
* If $\phi=(\tau_1=\tau_2)$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\tau_1^M(\bar{a})=\tau_2^M(\bar{a})\\}$.
* If $\phi=R(\tau_1,\dots,\tau_n)$ for some $R\in\mc{R}_n$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st(\tau_1^M(\bar{a}),\dots,\tau_n^M(\bar{a}))\in R^M\\}$.
* If $\phi=\phi_1\circ\phi_2$ where $\circ\in\l\\{\land,\lor,\rightarrow,\leftrightarrow\r\\}$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\bar{a}\in\phi_1^M\circ\bar{a}\in\phi_2^M\\}$.
* If $\phi=\lnot\psi$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\lnot\bar{a}\in\psi^M\\}$.
* If $\phi=\ex y\\,\psi$, then $\psi=\psi(\bar{x},y)$, and $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\ex b\in M((\bar{a},b)\in\psi^M)\\}$.

If $\bar{a}\in\phi^M$, we write $M\models\phi(\bar{a})$ instead, and say that $M$ _models_ $\phi(\bar{a})$. The notation $\phi(M)\coloneqq\phi^M$ is also used.

\end{definition_}

## Category of structures

An _$L$-homomorphism_ between $L$-structures $N$ and $N$ is a map $h:M\to N$ such that for each $\bar{a}\in M$, we have $h(f^M(\bar{a}))=f^N(h(\bar{a}))$ for each $f\in\mc{F}$ and $\bar{a}\in R^M\Rightarrow h(\bar{a})\in R^N$ for each $R\in\mc{R}$. An $L$-homomorphism $h:M\to N$ is said to be an _$L$-embedding_ if $h$ is injective and the preceding '$\Rightarrow$' is '$\Leftrightarrow$'.

<br>

&emsp;&emsp;Correspondingly, we have the two \ref[categories]{category} $\cat{Hom}_L$ of $L$-structures and $L$-homomorphisms and $\cat{Emb}_L$ of $L$-structures and $L$-embeddings. Another notion of a morphism is that of an _\ref[elementary embedding]{elementarity}_, which gives rise to the category $\cat{Elem}_L$:

\begin{definition_}

Let $M$ and $N$ be $L$-structures. A map $h:M\to N$ is an _elementary embedding_ if for every $L$-formula $\phi(\bar{x})$ and $\bar{a}\in M$, we have $M\models\phi(\bar{a})$ iff $N\models\phi(\bar{a})$, in which case we write $h:M\into_eN$.

\end{definition_}

* Let $M$ and $N$ be $L$-structures such that $M\subeq N$. If the inclusion $\iota:M\into N$ is an (elementary) embedding, we say that $M$ is a _substructure_ (resp. an _elementary substructure_) of $N$, and write $M\subseq N$ (resp. $M\esubeq N$).

Let $M$ be an $L$-structure and let $A\subeq M$. The _substructure generated_ by $A$ is the intersection all substructures of $M$ containing $A$; equivalently, $\l\langle A\r\rangle\coloneqq\bigcup_{n<\omega} A_n$, where $A_0\coloneqq A$ and $A_{n+1}\coloneqq A_n\cup\bigcup_{f\in\mc{F}}f^M\big(A_n^{\mf{a}(f)}\big)$.
