---
mathLink: Ehrenfeucht-Fraïssé Games
---

<div class="topSpace"></div>

Date Created: 24/01/2024 16:16:32
References: #Ref/Mar02
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Ehrenfeucht-Fraïssé Games).

Let $\sigma$ be a signature in $\FOL$ and let $\mc{A}$ and $\mc{B}$ be $\sigma$-structures. Fix an ordinal $\gamma$. The <b>Ehrenfeucht-Fraïssé Game</b> is the game $G_\gamma\!\l(\mc{A},\mc{B}\r)$ of length $\gamma$ consisting of two players, the $\textrm{Spoiler}$ and the $\textrm{Prover}$, such that at the $i^{th}$ step, $\textrm{Spoiler}$ plays $a_i\in\mc{A}$ (resp. $b_i\in\mc{B}$) and challenges $\textrm{Prover}$ to respond with some $b_i\in\mc{B}$ (resp. $a_i\in\mc{A}$). The $\textrm{Prover}$ wins iff $f:\tpl{a_i}_{i<\gamma}\to\tpl{b_i}_{i<\gamma}$ mapping each $a_i\mapsto b_i$ is a partial isomorphism.
* If $\mc{A}$ and $\mc{B}$ are countable, then $\mc{A}\iso\mc{B}$ iff $\textrm{Prover}$ has a winning strategy in $G_\omega\!\l(\mc{A},\mc{B}\r)$.
* If $\sigma$ is a finite relational language, then $\mc{A}\elemequiv\mc{B}$ iff $\textrm{Prover}$ has a winning strategy in $G_n\!\l(\mc{A},\mc{B}\r)$ for all $n\in\N$.

```

<i>Proof.</i> The isomorphism claim is relatively easy: If $\mc{A}\iso\mc{B}$, then $\textrm{Prover}$ can win $G_\omega\!\l(\mc{A},\mc{B}\r)$ according to this isomorphism. Conversely, we enumerate $\mc{A}=\l\{a_0,a_1,\dots\r\}$ and $\mc{B}=\l\{b_0,b_1,\dots\r\}$. Consider the game where $\textrm{Spoiler}$ plays $a_0,b_1,a_2,b_3,\dots$ in this order and where $\textrm{Prover}$ uses the winning strategy. The partial isomorphism $f_n:\tpl{a_i}_{i<n}\mapsto\tpl{b_i}_{i<n}$ built after the $n^\textrm{th}$ step of this game extends to an isomorphism $f\coloneqq\bigcup_nf_n:\mc{A}\to\mc{B}$, as desired.

Suppose now that $\sigma$ is a finite relational language. For a fixed $n\in\N$, we write $\mc{A}\elemequiv_n\mc{B}$ iff $\mc{A}$ and $\mc{B}$ satisfy the same $\sigma$-sentences $\phi$ with $\qd(\phi)\leq n$. Since every $\sigma$-sentence $\phi$ has $\qd(\phi)<\infty$, it suffices to show that $\mc{A}\elemequiv_n\mc{B}$ iff $\textrm{Prover}$ has a winning strategy for $G_n\!\l(\mc{A},\mc{B}\r)$. We induct on $n$, for which the base case $n=0$ is trivial.
* Suppose first that $\mc{A}\elemequiv_n\mc{B}$, and let $\textrm{Spoiler}$ play $a\in\mc{A}$. We claim that there is some $b\in\mc{B}$ such that whenever $\phi$ is a $\sigma$-formula with $\qd(\phi)<n$, then $\mc{A}\models\phi(a)$ iff $\mc{B}\models\phi(b)$. Given this, we let $\textrm{Prover}$ play $b$. To obtain a winning strategy for $\textrm{Prover}$, let $\sigma^\ast\coloneqq\sigma\sqcup\l\{c\r\}$ for some constant symbol and consider the $\sigma^\ast$-structures $\tpl{\mc{A},a}$ and $\tpl{\mc{B},b}$ obtained by interpreting $c$ as $a$ and $b$, respectively. Then $\tpl{\mc{A},a}\elemequiv_{n-1}\tpl{\mc{B},b}$ by construction, so induction gives us a winning strategy for $\textrm{Prover}$ for $G_{n-1}\!\l(\tpl{\mc{A},a},\tpl{\mc{B},b}\r)$. Play out this game using this winning strategy to obtain a partial embedding $f^\ast:\tpl{a_i}_{i=1}^{n-1}\to\tpl{b_i}_{i=1}^{n-1}$, which extends a partial embedding $f:\tpl{a_i}_{i<n}\to\tpl{b_i}_{i<n}$ where $a_0\coloneqq a$ and $b_0\coloneqq b$. Thus we have found a winning strategy for $\textrm{Prover}$, as desired. Now, to find such a $b\in\mc{B}$, we use the fact that $\sigma$ is a finite relational language to list, up to equivalence, all the formulas $\phi(x)$ with $\qd(\phi)<n$ as $\phi_0(x),\dots,\phi_m(x)$. With $S\coloneqq\l\{i\leq m\st\mc{A}\models\phi_i(a)\r\}$, we set
$$\begin{equation}
    \Phi(x)\coloneqq\bigwedge_{i\in S}\phi_i(x)\land\bigwedge_{i\not\in S}\lnot\phi_i(x).
\end{equation}$$
Then $\mc{A}\models\Phi(x)$ and $\qd\l(\ex x\Phi(x)\r)\leq n$, so the assumption $\mc{A}\elemequiv_n\mc{B}$ gives us some $b\in B$ such that $\mc{B}\models\Phi(b)$. This is the desired element.
* 
