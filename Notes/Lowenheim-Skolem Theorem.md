---
mathLink: Löwenheim-Skolem Theorem
mathLink-blocks:
    Skolem-paradox: Skolem Paradox
---

<div class="topSpace"></div>

Date Created: 21/12/2023 16:03:46
Tags: #Type/Theorem #In_Progress

Proved by: [[Elementarity#^Tarski-Vaught-test]], [[Compactness Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Löwenheim-Skolem).

Let $\mc{A}$ be an infinite $\sigma$-structure. Then $\mc{A}$ admits an elementary substructure/extension of any cardinality $\kappa\geq\max\l\{\l|\sigma\r|,\aleph_0\r\}$. More precisely:
* (Downward Löwenheim-Skolem). For any subset $S\subseteq A$, there is an elementary substructure $\mc{A}_0\elemembed\mc{A}$ with $A_0\supseteq S$ such that $\l|A_0\r|\leq\max\l\{\l|S\r|,\l|\sigma\r|,\aleph_0\r\}$.
* (Upward Löwenheim-Skolem). For any cardinal $\kappa\geq\max\l\{\l|A\r|,\l|\sigma\r|,\aleph_0\r\}$, there is an elementary extension $\mc{A}'\elemextend\mc{A}$ of cardinality $\kappa$.

```

<b>Remark.</b> With $S\coloneqq\em$, the Downward Löwenheim-Skolem theorem gives us that any satisfiable $\sigma$-theory has a model of cardinality at-most $\max\l\{\l|\sigma\r|,\aleph_0\r\}$. This has the (at first) striking consequence, called <i>Skolem paradox</i>, that if $\ZFC$ is satisfiable, then it has a countable model $\mc{M}$. But $\mc{M}$ has its own version of reals $\R^\mc{M}$, which by Cantor’s theorem is uncountable! To resolve this ‘paradox’ one needs to observe that countability refers to the existence of a bijection $\R^\mc{M}\to\N$, which does exist for us, but this bijection, viewed as a subset of $\R^\mc{M}\times\N$, is not an element of $M$. Within $\mc{M}$, one cannot ‘see’ this bijection, so $\R^\mc{M}$ is uncountable in $\mc{M}$.<span style="float:right;">$\blacklozenge$</span> ^Skolem-paradox

---

<i>Proof.</i> For the Downward Löwenheim-Skolem theorem, we use the Tarski-Vaught Test to observe that for $\mc{A}_0\elemembed\mc{A}$ to be elementary, the underlying set $A_0$ needs to witness every the existence of $\mc{A}\models\ex y\phi(\vec{a},y)$ for every $\sigma$-formula $\phi(\vec{x},y)$ and every $\vec{a}\in A^{|\vec{x}|}$. To ‘throw in’ such witnesses, we consider a <i>Skolem function</i> $f_{\phi(\vec{x},y)}$ for $\phi(\vec{x},y)$, which is any partial function $f_{\phi(\vec{x},y)}:A^{|\vec{x}|}\parto A$ such that, for every $\vec{a}\in A^{|\vec{x}|}$, if $\mc{A}\models\ex y\phi(\vec{a},y)$, then $f_{\phi(\vec{x},y)}(\vec{a})$ witnesses this existence, i.e. $\vec{a}\in\dom f_{\phi(\vec{x},y)}$ and $\mc{A}\models\phi(\vec{a},f_{\phi(\vec{x},y)}(\vec{a}))$. Using the Axioms of Choice, let $f_{\phi(\vec{x},y)}$ be a Skolem function for each $\sigma$-formula $\phi(\vec{x},y)$. We build an increasing sequence $\tpl{S_n}_n$ of subsets of $A$ by setting $S_0\coloneqq S$ and, assuming that $S_n$ is defined, letting $S_{n+1}\coloneqq S_n\cup\bigcup_{\phi(\vec{x},y)}f_{\phi(\vec{x},y)}\big(S_n^{|\vec{x}|}\big)$. Set $A_0\coloneqq\bigcup_nS_n$, which supports an elementary $\sigma$-substructure of $\mc{A}$ since:
* For every $c\in\mc{C}\l(\sigma\r)$, the $\sigma$-formula $\ex y\l(c=y\r)$ is witnessed by $c^\mc{A}$ in $\mc{A}$, so $f_{c=y}\,(\em)\in A_0$ witnesses it too.
* Take $g\in\mc{F}_m(\sigma)$. For every $\vec{a}\in A_0^m$, there are $n_j\in\N$ such that each $a_j\in S_{n_j}$, so $\vec{a}\in S_n$ where $n\coloneqq\max_jn_j$. The $\sigma$-formula $\ex y\l(g(\vec{a})=y\r)$ is witnessed by $g^\mc{A}(\vec{a})$ in $\mc{A}$, so $f_{g(\vec{x})=y}\,(\vec{a})\in S_{n+1}\subseteq A_0$ witnesses it too. Together with the above, this shows that $A_0$ supports a substructure $\mc{A}_0\substructeq\mc{A}$.
* Finally, let $\phi(\vec{x},y)$ be a $\sigma$-formula and take $\vec{a}\in A_0^{|\vec{x}|}$, so $\vec{a}\in S_n^{|\vec{x}|}$ for some $n$ as above. By construction, $\mc{A}\models\ex y\phi(\vec{a},y)$ gives us a witness $f_{\phi(\vec{x},y)}(\vec{a})\in S_{n+1}\subseteq A_0$, so $\mc{A}_0\elemembed\mc{A}$ by the Tarski-Vaught Test. For the cardinality claim, simply note that $\l|\ExtForm(\sigma)\r|=\max\l\{\l|\sigma\r|,\aleph_0\r\}$.
