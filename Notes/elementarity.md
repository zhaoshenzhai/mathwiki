---
title: Elementarity
date: 2025-06-12
tags: [In_Progress]
---

Throughout, fix a \ref[first-order language]{first-order_language} $L$. Recall the following notions:
* The \ref[complete theory]{theory} of an \ref[$L$-structure]{model} $M$ is the set $\Th_L(M)$ of all $L$-sentences $\sigma$ such that $M\models\sigma$.
* The language $L_M$ is obtained by adjoining fresh constants $c_a$ for each $a\in M$ to $L$, and $M$ can be _expanded_ to an $L_M$-structure by interpreting each $c_a$ as $a$. Conversely, each $L_M$-structure has a _reduct_ to an $L$-structure.

# Elementary Embeddings

\begin{definition}

Let $M$ and $N$ be $L$-structures. A map $h:M\to N$ is an _elementary embedding_ if for every $L$-formula $\phi(\bar{x})$ and $\bar{a}\in M$, we have $M\models\phi(\bar{a})$ iff $N\models\phi(\bar{a})$, in which case we write $h:M\into_eN$.

<br>

&emsp;&emsp;If $M\subeq N$ and the inclusion $\iota:M\into N$ is an elementary embedding, then we say that $M$ is an _elementary substructure_ of $N$, written $M\esubeq N$.

\end{definition}

## Characterizations

The _elementary \ref[diagram]{diagrams_and_embeddings}_ (resp. _atomic diagram_) of $M$ is the set $\Diag_\mathrm{el}(M)\coloneqq\Th_{L_M}(M)$ (resp. $\Diag(M)$) of all $L_M$-sentences $\phi(\bar{a})$ such that $M\models\phi(\bar{a})$, where $\phi(\bar{x})$ is an (atomic) $L$-formula and $\bar{a}\in M$.

\begin{fact}[\ref{diagrams_and_embeddings}]

Let $M$ be an $L$-structure and let $N$ be an $L_M$-structure.
1. If $N\models\Diag(M)$, then there is an $L$-embedding $M\into N$.
1. If $N\models\Diag_\mathrm{el}(M)$, then there is an $L$-elementary embedding $M\into_eN$.

\end{fact}

\begin{fact}[\ref[Tarski-Vaught Test]{tarski-vaught_test}]\label{tarski-vaught}

Let $M\subseq N$ be $L$-structures. Then $M\esubeq N$ iff for every formula $\phi(\bar{x},y)$ and for every $\bar{a}\in M$, we have $N\models\ex y\phi(\bar{a},y)$ iff $N\models\phi(\bar{a},a)$ for some $a\in M$.

\end{fact}

## Existence

Several theorems asserting the existence of elementary extensions with certain properties:

\begin{fact}[Löwenheim-Skolem]\label{lowenheim-skolem}

Every infinite $L$-structure $M$ admits elementary substructures/extensions of any cardinality $\kappa\geq\l|L\r|+\aleph_0$. More precisely:
* (\ref[Downward]{downward_lowenheim-skolem_theorem}). For any subset $A\subseteq M$ and $|A|+|L|+\aleph_0\leq\kappa\leq|M|$, there exists $A\subeq N\esubeq M$ of cardinality $\kappa$.
* (\ref[Upward]{upward_lowenheim-skolem_theorem}). For any $\kappa\geq\l|M\r|+\l|L\r|+\aleph_0$, there exists $N\esupeq M$ of cardinality $\kappa$.

\end{fact}

# Elementary equivalence

\begin{definition}

Two $L$-structures $M$ and $N$ are _elementarily equivalent_ if $\Th M=\Th N$.

\end{definition}


\begin{fact}\label{iso_implies_equiv}

If $M\iso N$, then $M\equiv N$.

\end{fact}

\begin{remark}

The converse of Fact \iref{iso_implies_equiv} fails dramatically: by Fact \iref{lowenheim-skolem}, for any infinite $L$-structure $M$, there are (proper-class many) $L$-structures $N$ such that $M\equiv N$ but $M\not\iso N$.

\end{remark}

\begin{remark}

The notion $M\equiv N$ is _not_ that of an isomorphism in the \ref[category]{category} $\cat{Elem}\_L$; it is much weaker. Indeed, if there is an elementary embedding $h:M\into\_eN$, then $M\equiv N$. For a counterexample of the converse, consider the language $L\coloneqq\l\\{S\r\\}$ with a single unary function symbol, so the predecessor map $h:M\to N$ between $M\coloneqq(\N_{>0},S)$ and $N\coloneqq(\N_,S)$, where $S$ is interpreted as the successor, is an isomorphism, and hence $M\equiv N$. But $M\not\esubeq N$ by Fact \iref{tarski-vaught} since the truth of the $L$-formula $\phi(x)\coloneqq\lnot\ex y(S(y)=x)$ in $N$ is only witnessed by $0\in N\comp M$.

\end{remark}
