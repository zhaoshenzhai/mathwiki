---
mathLink: Löwenheim-Skolem Theorem
mathLink-blocks:
    Skolem-paradox: Skolem Paradox
---

<div class="topSpace"></div>

Date Created: 21/12/2023 16:03:46
References: #Ref/Anu23 #Ref/Mar02
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Skolem Theory#^skolem-hull]], [[Tarski-Vaught Test]], [[Compactness Theorem]], [[Elementarity#^embeddings-via-diagrams]], [[Cantor-Schroder-Bernstein Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Löwenheim-Skolem).

If $\mc{M}$ be an infinite $\mc{L}$-structure, then $\mc{M}$ admits an elementary substructure/extension of any cardinality $\kappa\geq\l|\mc{L}\r|+\aleph_0$. More precisely:
* (Downward Löwenheim-Skolem). For any subset $A\subseteq M$, there is an elementary substructure $\mc{M}_0\elemembed\mc{M}$ with $M_0\supseteq A$ such that $\l|M_0\r|\leq\l|A\r|+\l|\mc{L}\r|+\aleph_0$.
* (Upward Löwenheim-Skolem). For any cardinal $\kappa\geq\l|\mc{M}\r|+\l|\mc{L}\r|+\aleph_0$, there is an elementary extension $\mc{M}'\elemextend\mc{M}$ of cardinality $\kappa$.

```

<b>Remark.</b> With $S\coloneqq\em$, the Downward Löwenheim-Skolem theorem gives us that any satisfiable $\mc{L}$-theory has a model of cardinality at-most $\max\l\{\l|\mc{L}\r|,\aleph_0\r\}$. This has the (at first) striking consequence, called <i>Skolem paradox</i>, that if $\ZFC$ is satisfiable, then it has a countable model $\mc{M}$. But $\mc{M}$ has its own version of reals $\R^\mc{M}$, which by Cantor’s theorem is uncountable! To resolve this ‘paradox’ one needs to observe that countability refers to the existence of a bijection $\R^\mc{M}\to\N$, which does exist for us, but this bijection, viewed as a subset of $\R^\mc{M}\times\N$, is not an element of $M$. Within $\mc{M}$, one cannot ‘see’ this bijection, so $\R^\mc{M}$ is uncountable in $\mc{M}$.<span style="float:right;">$\blacklozenge$</span> ^Skolem-paradox

---

<i>Proof.</i> For the Downwards Löwenheim-Skolem theorem, we Skolemize $\mc{M}\models T\coloneqq\Th\mc{M}$ to a model $\mc{M}^\ast\models T^\ast$ in the language $\mc{L}^\ast\supseteq\mc{L}$ with built-in Skolem functions, and set $\mc{M}_0\coloneqq\mc{H}(A)$. Then $\mc{M}_0\substructeq\mc{M}$ and has cardinality $\leq|A|+|\mc{L}|+\aleph_0$, so it remains to show that $\mc{M}_0\elemembed\mc{M}$. To this end, we use the Tarski-Vaught Test.
>Let $\phi(\vec{x},y)$ be an $\mc{L}^\ast$-formula and take $\vec{a}\in M_0$. By definition, we have $\mc{H}(A)=\bigcup_nA_n$, where $A_0\coloneqq A\cup\{c^\mc{M}\st c\in\mc{C}\}$ and $A_{n+1}\coloneqq A_n\cup\bigcup_{f\in\mc{F}^\ast}f^\mc{M}(A_n)$; here, $\mc{F}^\ast$ are the function symbols in $\mc{L}^\ast$, which in particular includes the Skolem functions. Since there are $n_j<\omega$ such that $a_n\in A_{n_j}$, we see that $\vec{a}\in A_n$ where $n\coloneqq\max_jn_j$. If $\mc{M}\models\ex y\phi(\vec{a},y)$, then, since $T^\ast$ is Skolem, we have $\mc{M}\models\phi(f(\vec{a}),\vec{a})$ for some $f\in\mc{F}^\ast$. Since $f(\vec{a})\in A_{n+1}\subseteq M_0$, we obtain the desired witness and thus $\mc{M}_0\elemembed\mc{M}$.

For the Upward direction, let $\mc{L}'\coloneqq\mc{L}\sqcup\l\{c_\alpha\r\}_{\alpha<\kappa}$ and consider the $\mc{L}'$-theory $T'\coloneqq\Diag_\textrm{el}\mc{M}\cup\l\{c_\alpha\neq c_\beta\st\alpha\neq\beta,\alpha,\beta<\kappa\r\}$. Since $\mc{M}$ is infinite, $T'$ is finitely-satisfiable by interpreting the finitely-many constants $c_{\alpha_1},\dots,c_{\alpha_n}$ in some finite $\Delta\subseteq T'$ as distinct elements, so Compactness furnishes obtain an elementary extension $\mc{M}'\elemextend\mc{M}$ of cardinality at-least $\kappa$. Using the Downwards Löwenheim-Skolem Theorem, we may assume that $\l|\mc{M}'\r|\leq\kappa$, so $\l|\mc{M}'\r|=\kappa$ as desired.<span style="float:right;">$\blacksquare$</span>
