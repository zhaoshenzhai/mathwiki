---
title: Model
date: 2025-06-07
tags: [In_Progress]
---

# Tarskian Definition

\begin{definition}

Let $L\coloneqq(\mc{F},\mc{R},\mf{a})$ be a \ref[first-order language]{language}. An _$L$-structure_ is a tuple $\mc{M}\coloneqq(M,i)$ consisting of a set $M$, called the _universe_, and an _interpretation function_ $i$ assigning
* to each function symbol $f\in\mc{F}$, an $\mf{a}(f)$-ary function $f^\mc{M}:M^{\mf{a}(f)}\to M$, and
* to each relation symbol $R\in\mc{F}$, an $\mf{a}(R)$-ary relation $R^\mc{M}\subeq M^{\mf{a}(R)}$.

Given an $L$-structure $\mc{M}$ and an \ref[$L$-theory]{theory} $T$, we write $\mc{M}\models T$ and say that _$\mc{M}$ is a model $T$_ if $\mc{M}\models\sigma$ for each $\sigma\in T$, where $\mc{M}\models\sigma$ is defined inductively in the obvious way (see Definition \iref{interpret_formula} below).

\end{definition}

For ease of notation, we write $M$ for $\mc{M}$. We define the _interpretation_ of $L$-terms and $L$-formulas in $M$.

\begin{definition}

The _interpretation_ of an $L$-term $\tau(\bar{x})$ in $M$ is the function $\tau^M:M^{|\bar{x}|}\to M$ defined by:
* If $\tau=c\in\mc{C}$, then $\tau^M(\bar{a})\coloneqq c^M$ for all $\bar{a}\in M^{|\bar{x}|}$.
* If $\tau=x$ is a variable, then $x=x_i$ for some $1\leq i\leq n$, and let $\tau^M(\bar{a})\coloneqq a_i$ for all $\bar{a}\in M^{|\bar{x}|}$.
* If $\tau=f(\tau_1,\dots,\tau_n)$ for some $f\in\mc{F}_n$, then $\tau^M(\bar{a})\coloneqq f^M(\tau_1^M(\bar{a}),\dots,\tau_n^M(\bar{a}))$ for all $\bar{a}\in M^{|\bar{x}|}$.

\end{definition}

\begin{definition}\label{interpret_formula}

The _interpretation_ of an $L$-formula $\phi(\bar{x})$ in $M$ is the relation $\phi^M\subeq M^{|\bar{x}|}$ defined by:
* If $\phi=(\tau_1=\tau_2)$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\tau_1^M(\bar{a})=\tau_2^M(\bar{a})\\}$.
* If $\phi=R(\tau_1,\dots,\tau_n)$ for some $R\in\mc{R}_n$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st(\tau_1^M(\bar{a}),\dots,\tau_n^M(\bar{a}))\in R^M\\}$.
* If $\phi=\phi_1\circ\phi_2$ where $\circ\in\l\\{\land,\lor,\rightarrow,\leftrightarrow\r\\}$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\bar{a}\in\phi_1^M\circ\bar{a}\in\phi_2^M\\}$.
* If $\phi=\lnot\psi$, then $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\lnot\bar{a}\in\psi^M\\}$.
* If $\phi=\ex y\\,\psi$, then $\psi=\psi(\bar{x},y)$, and $\phi^M\coloneqq\\{\bar{a}\in M^{|\bar{x}|}\st\ex b\in M((\bar{a},b)\in\psi^M)\\}$.

If $\bar{a}\in\phi^M$, we write $M\models\phi(\bar{a})$ instead, and say that $M$ _models_ $\phi(\bar{a})$. The notation $\phi(M)\coloneqq\phi^M$ is also used.

\end{definition}

The _elementary diagram_ (resp. _atomic diagram_) of $M$ is the set $\Diag_\mathrm{el}(M)\coloneqq\Th_{L_M}(M)$ (resp. $\Diag(M)$) of $L_M$-sentences $\phi(\bar{a})$ such that $M\models\phi(\bar{a})$, where $\phi(\bar{x})$ is an (atomic) $L$-formula.

## Elementary classes

A class $\mc{K}$ of $L$-structures is said to be _axiomatizable_ (or an _elementary class_) if there is an $L$-theory $T$ such that $\mc{K}=\l\\{M\st M\models T\r\\}$.

\begin{example}

Some examples of (non-)axiomatizable classes of $L$-structures, for suitable $L$.
* Sets, infinite sets (but not finite sets).
* Groups, abelian groups, ordered abelian groups (but not cyclic groups, torsion groups, or non-torsion groups).
* Rings, fields, fields of fixed characteristic, algebraically-closed fields, differential fields.
* Graphs, bipartite graphs (but not connected graphs, disconnected graphs, or non-bipartite graphs).
* Linear orders, partial orders, equivalence relations.

\end{example}

## Category of structures

An _$L$-homomorphism_ between $L$-structures $N$ and $N$ is a map $h:M\to N$ such that for each $\bar{a}\in M$, we have $h(f^M(\bar{a}))=f^N(h(\bar{a}))$ for each $f\in\mc{F}$ and $\bar{a}\in R^M\Rightarrow h(\bar{a})\in R^N$ for each $R\in\mc{R}$. An $L$-homomorphism $h:M\to N$ is said to be an _$L$-embedding_ if $h$ is injective and the preceding '$\Rightarrow$' is '$\Leftrightarrow$'.

<br>

&emsp;&emsp;Correspondingly, we have the two \ref[categories]{category} $\cat{Hom}_L$ of $L$-structures and $L$-homomorphisms and $\cat{Emb}_L$ of $L$-structures and $L$-embeddings. Another notion of a morphism, giving rise to the category $\cat{Elem}_L$, is as follows.

\begin{definition}

Let $M$ and $N$ be $L$-structures. A map $h:M\to N$ is an _elementary embedding_ if for every $L$-formula $\phi(\bar{x})$ and every $\bar{a}\in M$, we have $M\models\phi(\bar{a})$ iff $N\models\phi(h(\bar{a}))$, in which case we write $h:M\into_eN$.

\end{definition}

&emsp;&emsp;Let $M$ and $N$ be $L$-structures such that $M\subeq N$. If the inclusion $\iota:M\into N$ is a homomorphism (resp. an embedding, an elementary embedding), we say that $M$ is a _substructure_ (resp. _induced substructure_, _elementary substructure_) of $N$, and write $M\subseq N$ (resp. $M\subseq_iN$, $M\esubeq N$).

\begin{fact}[\ref{}]

Let $M$ be an $L$-structure and let $N$ be an $L_M$-structure.
1. We have $N\models\Diag(M)$ iff there is an $L$-embedding $M\into N$.
1. We have $N\models\Diag_\mathrm{el}(M)$ iff there is an $L$-elementary embedding $M\into N$.

\end{fact}

\begin{fact}[\ref[Tarski-Vaught Test]{tarski-vaught_test}]\label{tarski-vaught}

Let $M\subseq_iN$ be $L$-structures. Then $M\esubeq N$ iff for every formula $\phi(\bar{x},y)$ and for every $\bar{a}\in M$, we have $N\models\phi(\bar{a},a)$ for some $a\in M$ iff $N\models\ex y\phi(\bar{a},y)$.

\end{fact}

&emsp;&emsp;Two $L$-structures $M$ and $N$ are said to be _elementarily equivalent_ if $\Th M=\Th N$, where $\Th M$ is the _theory_ of $M$ consisting of all $L$-sentences $\sigma$ such that $M\models\sigma$, in which case we write $M\equiv N$.

\begin{fact}

If $M\iso N$, then $M\equiv N$.

\end{fact}

\begin{remark}

The notion $M\equiv N$ is _not_ that of an isomorphism in $\cat{Elem}\_L$; it is much weaker. Indeed, if there is an elementary embedding $h:M\into\_eN$, then $M\equiv N$. For a counterexample of the converse, consider the language $L\coloneqq\l\\{S\r\\}$ with a single unary function symbol, so the predecessor map $h:M\to N$ between $M\coloneqq(\N_{>0},S)$ and $N\coloneqq(\N_,S)$, where $S$ is interpreted as the successor, is an isomorphism, and hence $M\equiv N$. But $M\not\esubeq N$ by Fact \iref{tarski-vaught} since the truth of the $L$-formula $\phi(x)\coloneqq\lnot\ex y(S(y)=x)$ in $N$ is only witnessed by $0\in N\comp M$.

\end{remark}
