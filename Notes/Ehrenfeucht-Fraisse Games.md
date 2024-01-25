---
mathLink: Ehrenfeucht-Fraïssé Games
---

<div class="topSpace"></div>

Date Created: 24/01/2024 16:16:32
References: #Ref/Mar02
Tags: #Type/Theorem #Topic/Logic/Model_Theory

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

<i>Proof.</i> The isomorphism claim is relatively easy: If $\mc{A}\iso\mc{B}$, then $\textrm{Prover}$ can win $G_\omega\!\l(\mc{A},\mc{B}\r)$ according to this isomorphism. Conversely, we enumerate $\mc{A}=\l\{a_0,a_1,\dots\r\}$ and $\mc{B}=\l\{b_0,b_1,\dots\r\}$. Consider the game $G_\omega\!\l(\mc{A},\mc{B}\r)$ where $\textrm{Spoiler}$ plays $a_0,b_1,a_2,b_3,\dots$ and where $\textrm{Prover}$ uses the winning strategy. Then the partial isomorphism $f_n:\tpl{a_i}_{i<n}\mapsto\tpl{b_i}_{i<n}$ built after the $n^\textrm{th}$ step of this game extends to an isomorphism $f\coloneqq\bigcup_nf_n:\mc{A}\to\mc{B}$, as desired.

Suppose now that $\sigma$ is a finite relational language. For $n\in\N$, we write $\mc{A}\elemequiv_n\mc{B}$ iff $\mc{A}$ and $\mc{B}$ satisfy the same $\sigma$-sentences $\phi$ with $\qd(\phi)\leq n$. Since every $\sigma$-sentence $\phi$ has $\qd(\phi)<\infty$, it suffices to show that $\mc{A}\elemequiv_n\mc{B}$ iff $\textrm{Prover}$ has a winning strategy for $G_n\!\l(\mc{A},\mc{B}\r)$. We induct on $n$, where the base case $n=0$ is trivial. It will be useful to consider an extension $\sigma^\ast\coloneqq\sigma\sqcup\l\{c\r\}$, where $c$ is a constant symbol; for every $\sigma$-structure $\mc{M}$ and $m\in\mc{M}$, we let $\tpl{\mc{M},m}$ be the $\sigma^\ast$-structure interpreting $c$ as $m$.
* Suppose that $\mc{A}\elemequiv_n\mc{B}$, and let $\textrm{Spoiler}$ play $a_0\in\mc{A}$. We claim that there is some $b_0\in\mc{B}$ such that whenever $\phi(x)$ is a $\sigma$-formula with $\qd(\phi)<n$, then $\mc{A}\models\phi(a_0)$ iff $\mc{B}\models\phi(b_0)$. This allows $\textrm{Prover}$ to play $b_0$ and obtain a winning strategy by induction. Indeed, since $\sigma$ is a finite relational language, we have a finite list, up to equivalence, of all the $\sigma$-formulas $\phi(x)$ with $\qd(\phi)<n$ as $\phi_0(x),\dots,\phi_m(x)$. Let $S\coloneqq\l\{i\leq m\st\mc{A}\models\phi_i(a)\r\}$ and consider the $\sigma$-formula
$$\begin{equation}
    \Phi(x)\coloneqq\bigwedge_{i\in S}\phi_i(x)\land\bigwedge_{i\not\in S}\lnot\phi_i(x).
\end{equation}$$
Then $\mc{A}\models\Phi(a_0)$ and $\qd\l(\ex x\Phi(x)\r)\leq n$, so there is some $b_0\in B$ such that $\mc{B}\models\Phi(b_0)$, which is as desired. Thus $\tpl{\mc{A},a_0}\elemequiv_{n-1}\tpl{\mc{B},b_0}$ by construction, so induction gives us a winning strategy for $\textrm{Prover}$ for $G_{n-1}\!\l(\tpl{\mc{A},a_0},\tpl{\mc{B},b_0}\r)$ from which we can play to obtain a partial embedding $f^\ast:\tpl{a_i}_{i=1}^{n-1}\to\tpl{b_i}_{i=1}^{n-1}$. This extends to a partial embedding $f:\tpl{a_i}_{i<n}\to\tpl{b_i}_{i<n}$, and so we have found a winning strategy for $\textrm{Prover}$, as desired.
* Assume that $\textrm{Prover}$ has a winning strategy for $G_n\!\l(\mc{A},\mc{B}\r)$ but $\mc{A}\not\elemequiv_n\mc{B}$. Since all $\sigma$-formulas with $\qd\leq n$ is a Boolean combination of those of the form $\ex x\phi(x)$, where $\qd(\phi)<n$, we may w.l.o.g. assume that $\mc{A}\models\ex x\phi(x)$ while $\mc{B}\models\fa x\lnot\phi(x)$. Choose $a\in\mc{A}$ such that $\mc{A}\models\phi(a)$, and let $\textrm{Spoiler}$ play $a$. Let $\textrm{Prover}$ respond with $b\in\mc{B}$ in accordance with its winning strategy. This winning strategy carries forth to $G_{n-1}\!\l(\tpl{\mc{A},a},\tpl{\mc{B},b}\r)$, so by induction we have $\tpl{\mc{A},a}\elemequiv_{n-1}\tpl{\mc{B},b}$. But $\tpl{\mc{A},a}\models\psi$ whereas $\tpl{\mc{B},b}\models\lnot\psi$, where $\psi$ is the $\sigma^\ast$-formula defined by $\psi\coloneqq\phi(c)$ and has $\qd(\psi)<n$, a contradiction.<span style="float:right;">$\blacksquare$</span>
