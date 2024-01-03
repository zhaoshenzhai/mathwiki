---
mathLink-blocks:
    jordan-decomposition: Jordan Decomposition Theorem
---

<div class="topSpace"></div>

Date Created: 22/11/2023 20:32:05
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Hahn Decomposition Theorem).

Let $\tpl{X,\mc{B}}$ be a measurable space. For any signed measure $\nu$ on $\mc{B}$, there is a unique partition $X=X_+\sqcup X_-$ (up to purely $+$-ve sets) where $X_\pm$ are purely $\pm$-ve.

```

<b>Remark.</b> In particular, $\nu=\l.\nu\r|_{X_+}-\l.\nu\r|_{X_-}$ is a Jordan decomposition for $\nu$. Furthermore, if $\nu<\infty$, then there is some $M>0$ such that $\nu\leq M$; take $M\coloneqq\nu\l(X_+\r)$.<span style="float:right;">$\blacklozenge$</span> ^jordan-decomposition

---

<i>Proof.</i> Assume w.l.o.g. that $\nu<\infty$. We claim that every non-null positive set $P\subseteq X$ contains a purely-positive subset $P_+\subseteq P$ with $\nu\l(P_+\r)\geq\nu\l(P\r)$. Indeed, we remove ‘all’ negative sets from $P$ by $1/2$-measure exhaustion. Let $N_0\subseteq P$ be a $1/2$-largest negative subset of $P$, i.e. let $N_0\subseteq P$ be such that
$$\begin{equation}
    -\nu\l(N_0\r)\geq\frac{1}{2}\bar{\sup}\l\{-\nu\l(N\r)\st N\subseteq P,\nu\l(N\r)\leq0\r\}
\end{equation}$$
where $\bar{\sup}\coloneqq\min\l\{1,\sup\r\}$; capping the supremum prevents us from taking infinitely-large negative sets. Then $P\comp N_0$ is still negative, so we repeat. If $\tpl{N_n}_{n<k}$ is a disjoint sequence of negative subsets of $P$, let $N_k$ be the $1/2$-largest negative subset of $P\comp\bigsqcup_{n<k}N_n$. Let $P_+\coloneqq P\comp\bigsqcup_nN_n$ and note that $\nu\l(P_+\r)=\nu\l(P\r)-\sum_n\nu\l(N_n\r)$ since $\nu<\infty$, so $\nu\l(P_+\r)\geq\nu\l(P\r)$. Also, $\sum_n\nu\l(N_n\r)<\infty$ is summable, so in particular $\lim_n\nu\l(N_n\r)=0$. If $N\subseteq P_+$ is a non-null negative set, then there is some $m\in\N$ such that $-\nu\l(N_m\r)<\min\l\{1,-\nu\l(N\r)\r\}/2$, which contradicts the choice of $N_m$. Thus $P_+\subseteq P$ is purely-positive, as desired.

We now collect ‘all’ the purely-positive sets in $X$, again by $1/2$-measure exhaustion. Let $P_0$ be a $1/2$-largest purely-positive set, and continue as before to obtain a disjoint sequence $\tpl{P_n}$ of purely-positive sets. Let $X_+\coloneqq\bigsqcup_nP_n$ and $X_-\coloneqq X\comp X_+$, so $X_+$ is purely-positive. Note that $\sum_n\nu\l(P_n\r)=\nu\l(X_+\r)<\infty$, so in particular $\lim_n\nu\l(P_n\r)=0$. Note that $X_-$ is purely-negative since if there is a non-null positive subset $P\subseteq X_-$, then there is a purely-positive $P_+\subseteq P$ with $\nu\l(P_+\r)\geq\nu\l(P\r)\geq0$. Hence there is some $m\in\N$ such that $\nu\l(P_m\r)<\min\l\{1,\nu\l(P_+\r)\r\}/2$, which contradicts the choice of $P_m$. Thus $X=X_+\sqcup X_-$ is the desired decomposition.<span style="float:right;">$\blacksquare$</span>
