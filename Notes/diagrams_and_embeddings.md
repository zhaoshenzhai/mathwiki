---
title: Diagrams and Embeddings
date: 2025-06-12
tags: [In_Progress]
---

Throughout, fix a \ref[language]{first-order_language} $L$ and an \ref[$L$-structure]{model} $M$. Recall that the language $L_M$ is defined by adjoining fresh constants $c_a$ for each $a\in M$ to $L$. Thus, each $L_M$-structure has a _reduct_ to an $L$-structure.

\begin{definition}

The _elementary diagram_ (resp. _atomic diagram_) of $M$ is the set $\Diag_\mathrm{el}(M)\coloneqq\Th_{L_M}(M)$ (resp. $\Diag(M)$) of all $L_M$-sentences $\phi(c_\bar{a})$ such that $M\models\phi(c_\bar{a})$, where $\phi(\bar{x})$ is an (atomic) $L$-formula and $\bar{a}\in M$.

\end{definition}

\begin{theorem}

Let $N$ be an $L_M$-structure and let $N_0$ denote its reduct to an $L$-structure.
1. If $N\models\Diag(M)$, then there is an $L$-embedding $M\into N_0$.
2. If $N\models\Diag_\mathrm{el}(M)$, then there is an \ref[$L$-elementary embedding]{elementarity} $M\into_eN_0$.

\end{theorem}

\begin{proof}

Consider the map $j:M\to N$ defined by $a\mapsto c_a^N$, which we claim is as desired.
1. Suppose that $N\models\Diag(M)$. If $a,a'\in M$ are distinct, then $(c_a\neq c_{a'})\in\Diag(M)$, and hence $j(a)\neq j(a')$. If $f\in\mc{F}$ and $\bar{a}\in M$, let $b\coloneqq f^M(\bar{a})$ so that $(f(c_\bar{a})=c_b)\in\Diag(M)$, and hence $j(f^M(\bar{a}))=j(b)=f^N(j(\bar{a}))$. If $R\in\mc{R}$ and $\bar{a}\in R^M$, then $R(c_\bar{a})\in\Diag(M)$ and hence $j(\bar{a})\in R^N$.
2. If in addition $N\models\Diag_\mathrm{el}(M)$, then $j$ is an elementary embedding since for every $L$-formula $\phi(\bar{a})$ and $\bar{a}\in M$, we have $M\models\phi(\bar{a})$ iff $\phi(c_\bar{a})\in\Diag_\mathrm{el}(M)$, and thus $N\models\phi(j(\bar{a}))$. The same argument with $\lnot\phi$ in place of $\phi$ shows that if $N\models\phi(j(\bar{a}))$, then $M\models\phi(\bar{a})$.<span style="float:right;">$\blacksquare$</span>

\end{proof}
