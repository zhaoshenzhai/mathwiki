---
mathLink-blocks:
    Skolemization: Skolemization
    skolem-hull: Skolem Hull
---

<div class="topSpace"></div>

Date Created: 04/04/2024 15:52:44
References: #Ref/Mar02
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Lowenheim-Skolem Theorem]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Skolem Theory).

Let $\mc{L}$ be a first order language. An $\mc{L}$-theory $T$ is <b>Skolem</b> if for every $\mc{L}$-formula $\phi(x,\vec{y})$, we have $T\proves\ex x\phi(x,\vec{y})\rightarrow\phi(f(\vec{y}),\vec{y})$ for some function symbol $f\in\mc{L}$.

```

<b>Remark.</b> Every $\mc{L}$-theory $T$ can be <i>Skolemized</i>, in the sense that there is a language $\mc{L}^\ast\supseteq\mc{L}$ with $\l|\mc{L}^\ast\r|=\l|\mc{L}\r|+\aleph_0$ and a Skolem theory $T^\ast\supseteq T$ such that every model $\mc{M}\models T$ admits an expansion $\mc{M}^\ast\models T^\ast$. We call $T^\ast$ a <i>Skolemization</i> of $T$. Note, however, that Skolemizing is highly non-unique.
>Indeed, let $\mc{L}^\ast\coloneqq\bigcup_n\mc{L}_n$, where $\mc{L}_0\coloneqq\mc{L}$ and $\mc{L}_{n+1}\coloneqq\mc{L}_n\sqcup\l\{f_\phi\st\phi(x,\vec{y})\in\mc{L}_n\r\}$, and similarly let $T^\ast\coloneqq\bigcup_nT_n$ where each $T_n$ is an $\mc{L}_n$-theory defined inductively by $T_0\coloneqq T$ and $T_{n+1}\coloneqq T_n\sqcup\l\{\fa\vec{y}(\ex x\phi(x,\vec{y})\rightarrow\phi(f_\phi(\vec{y}),\vec{y})\st\phi\in\mc{L}_n\r\}$. This $\mc{L}^\ast$-theory $T^\ast$ is as desired, since if $\mc{M}\models T_n$ and $\phi(x,\vec{y})\in\mc{L}_n$, we can use Choice to obtain a partial function $g:M^n\parto M$ such that for every $\vec{a}\in M^n$, if $\mc{M}\models\ex x\phi(x,\vec{a})$, then $\vec{a}\in\dom g$ and $\mc{M}\models\phi(g(\vec{a}),\vec{a})$. Interpret $f_\phi^\mc{M}\coloneqq g$. ^Skolemization

Given a subset $A\subseteq\mc{M}^\ast\models T^\ast$, the $\mc{L}^\ast$-substructure $\mc{H}(A)\coloneqq\gen{A}_{\mc{M}^\ast}\subseteq\mc{M}^\ast$ is called the <i>Skolem hull</i> of $A$. It highly depends on the specific Skolemization of $\mc{M}$.<span style="float:right;">$\blacklozenge$</span> ^skolem-hull
