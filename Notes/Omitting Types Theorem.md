<div class="topSpace"></div>

Date Created: 05/02/2024 23:46:58
References: #Ref/Mar02
Tags: #Type/Theorem #In_Progress

Proved by: [[Henkin Construction]]
References: [[Completeness Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Omitting Types Theorem).

Let $T$ be a complete $\mc{L}$-theory over a countable language $\mc{L}$ and let $p(\vec{x})$ be an $n$-type of $T$. There is a countable model $\mc{M}\models T$ omitting $p$ iff $p$ is non-isolated.

```

<b>Remark.</b> <span style="color:pink">countable</span>

---

<i>Proof.</i> If $p$ is isolated by $\phi(\vec{x})$, then $T\cup\l\{\ex\vec{x}\phi(\vec{x})\r\}$ is satisfiable and hence $\ex\vec{x}\phi(\vec{x})\in T$ by completeness. Thus any model $\mc{M}\models T$ realizes $p$. Conversely, suppose that $p$ is non-isolated and let $\mc{L}^\ast\coloneqq\mc{L}\sqcup\mc{C}$ where $\mc{C}\coloneqq\l\{c_0,c_1,\dots\r\}$ are new constant symbols. We proceed, as in the proof of the Completeness Theorem, by extending $T$ to a complete $\mc{L}^\ast$-theory $T^\ast$ admitting Henkin witnesses in $\mc{C}$, and we do so in a way so that the canonical Henkin construction $\mc{M}\models T^\ast$ over $\mc{C}$ omits $p$ by ensuring that for all $\vec{c}\in\mc{C}$, we have $T^\ast\models\lnot\phi(\vec{c})$ for some $\phi(\vec{x})\in p$. To this end, let $\l\{\phi_n\r\}$ be an enumeration of all $\mc{L}^\ast$-sentences. We construct a sequence $\l\{\theta_n\r\}$ of $\mc{L}^\ast$-sentences with $\models\theta_m\rightarrow\theta_n$ for all $m>n$ such that, assuming inductively that $T\cup\l\{\theta_s\r\}$ is satisfiable and $s+1$ is one of $3n+i$ for $i=1,2,3$, we have in the corresponding cases that:
* <i>(Completeness)</i>. Either $T\models\theta_s\rightarrow\phi_n$ or $T\models\theta_s\rightarrow\lnot\phi_n$. In this case, we let $\theta_{s+1}\coloneqq\theta_s\land\phi_n$ if $T\cup\l\{\theta_s,\phi_n\r\}$ is satisfiable, and $\theta_{s+1}\coloneqq\theta_s\land\lnot\phi_n$ otherwise.
* <i>(Henkin in $\mc{C}$)</i>. If $\phi_n=\ex v\psi(v)$ and $T\models\theta_s\rightarrow\phi_n$, we define $\theta_{s+1}$ so that $T\models\theta_{s+1}\rightarrow\psi(c)$ for some $c\in\mc{C}$. Indeed, let $c\in\mc{C}$ be a constant symbol not in $\theta_s$ and set $\theta_{s+1}\coloneqq\theta_s\land\psi(c)$. Since $T\cup\l\{\theta_s\r\}$ is satisfiable, it admits a model $\mc{N}\models T\cup\l\{\theta_s\r\}$. Then $\mc{N}\models\phi_n$, so there is some $b\in N$ such that $\mc{N}\models\psi(b)$. Interpreting $c^\mc{N}\coloneqq b$ gives us $\mc{N}\models\theta_{s+1}$, so $T\cup\l\{\theta_{s+1}\r\}$ is satisfiable.
* <i>(Omits $p$)</i>. Let $\vec{c}\coloneqq\tpl{c_1,\dots,c_m}\in\mc{C}^m$ and consider the $\mc{L}$-formula $\psi(\vec{v})$ obtained from the $\mc{L}^\ast$-sentence $\theta_s$ by replacing each occurrence of $c_j$ by $v_j$, replacing every other $c\in\mc{C}\comp\l\{c_1,\dots,c_m\r\}$ by some variable $v_c$, and finally padding the resulting expression with $\ex v_c$ for each such $c$.
