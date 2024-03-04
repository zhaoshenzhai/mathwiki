<div class="topSpace"></div>

Date Created: 05/02/2024 23:46:58
References: #Ref/Mar02
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Henkin Construction]], [[Basic properties of consistent theories]], [[Compactness Theorem]]
References: [[Completeness Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Omitting Types Theorem).

Let $T$ be a complete $\mc{L}$-theory over a countable language $\mc{L}$ and let $p(\vec{x})$ be an $n$-type of $T$. There is a countable model $\mc{M}\models T$ omitting $p$ iff $p$ is non-isolated.

```

<b>Remark.</b> The proof given below can be modified to omit <i>countably</i>-many types $\Sigma\coloneqq\l\{p_l(\vec{x})\r\}_{l<\omega}$ at once. Indeed, fix a bijection $f:\N\times\N\to\N$. We proceed exactly as below to ensure that $T^\ast$ is $\mc{L}^\ast$-Henkin in $\mc{C}$, i.e. when $s+1$ is either $3k+1$ or $3k+2$, but when $s+1=3k+3$, say with $f(m,l)=k$, we ensure as we do below that $\bar{c}_m$ does not realize $p_l(\vec{x})$. This ensures that no tuple in the canonical Henkin construction $\mc{M}\models T^\ast$ realizes any $p_l(\vec{x})\in\Sigma$, so $\mc{M}$ omits $\Sigma$ as desired.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> If $p$ is isolated by $\phi(\vec{x})$, then $T\cup\l\{\phi(\vec{x})\r\}$ is satisfiable and hence $T\proves\ex\vec{x}\phi(\vec{x})$. Thus any model of $T$ realizes $p$. Conversely, suppose that $p$ is non-isolated and let $\mc{L}^\ast\coloneqq\mc{L}\sqcup\mc{C}$ where $\mc{C}\coloneqq\l\{c_0,c_1,\dots\r\}$ are new constant symbols. We proceed, as in the proof of the Completeness Theorem, by extending $T$ to a complete $\mc{L}^\ast$-theory $T^\ast$ admitting Henkin witnesses in $\mc{C}$, and we ensure that the canonical Henkin construction $\mc{M}\models T^\ast$ over $\mc{C}$ omits $p$ by ensuring that for all $\vec{c}\in\mc{C}$, we have $T^\ast\models\lnot\phi(\vec{c})$ for some $\phi(\vec{x})\in p$.
&emsp;&emsp;To this end, let $\l\{\phi_k\r\}$ and $\l\{\vec{c}_m\r\}$ be an enumeration of all $\mc{L}^\ast$-sentences and of $\mc{C}^n$, respectively. We construct a sequence $\l\{\theta_s\r\}$ of $\mc{L}^\ast$-sentences with $\theta_{s+1}\proves\theta_s$ for all $s$ such that, assuming inductively that $T\cup\l\{\theta_s\r\}$ is satisfiable and $s+1=3k+i$ for some $i=1,2,3$ and $k\in\N$, we have in the corresponding cases that:
* <span style="color:gray"><i>(Complete)</i>.</span> Either $T\proves\theta_s\rightarrow\phi_k$ or $T\proves\theta_s\rightarrow\lnot\phi_k$. In this case, we let $\theta_{s+1}\coloneqq\theta_s\land\phi_k$ if $T\cup\l\{\theta_s,\phi_k\r\}$ is satisfiable, and $\theta_{s+1}\coloneqq\theta_s\land\lnot\phi_k$ otherwise.
* <span style="color:gray"><i>(Henkin in $\mc{C}$)</i>.</span> If $\phi_k=\ex v\psi(v)$ and $T\proves\theta_s\rightarrow\phi_k$, we define $\theta_{s+1}$ so that $T\proves\theta_{s+1}\rightarrow\psi(c)$ for some $c\in\mc{C}$. Indeed, let $c\in\mc{C}$ be a constant symbol not in $\theta_s$ and set $\theta_{s+1}\coloneqq\theta_s\land\psi(c)$. Since $T\cup\l\{\theta_s\r\}$ is satisfiable, it admits a model $\mc{N}\models T\cup\l\{\theta_s\r\}$. Then $\mc{N}\models\phi_k$, so there is some $a\in N$ such that $\mc{N}\models\psi(a)$. Interpreting $c^\mc{N}\coloneqq a$ gives us $\mc{N}\models\theta_{s+1}$, so $T\cup\l\{\theta_{s+1}\r\}$ is satisfiable. Otherwise, let $\theta_{s+1}\coloneqq\theta_s$.
* <span style="color:gray"><i>(Omits $p$)</i>.</span> Let $\vec{c}_m\coloneqq\tpl{c_1,\dots,c_n}\in\mc{C}^n$ and consider the $\mc{L}$-formula $\psi(\vec{x})$ obtained from the $\mc{L}^\ast$-sentence $\theta_s$ by replacing each occurrence of $c_j$ by $x_j$, replacing every other $c\in\mc{C}\comp\l\{c_1,\dots,c_n\r\}$ by some variable $x_c$, and finally padding the resulting expression with $\ex x_c$ for each such $c$. Since $T\cup\l\{\psi(\vec{x})\r\}$ is satisfiable and $p(\vec{x})$ is non-isolated, there is some $\mc{L}$-formula $\phi(\vec{x})\in p$ such that $T\not\proves\fa\vec{x}(\psi(\vec{x})\rightarrow\phi(\vec{x}))$. Let $\theta_{s+1}\coloneqq\theta_s\land\lnot\phi(\vec{c})$, which we claim is satisfiable. Indeed, there is some $\mc{N}\models T$ and some $\vec{a}\in N$ such that $\mc{N}\models\psi(\vec{a})\land\lnot\phi(\vec{a})$. Interpreting each $c_j\in\bar{c}_m$ as $a_j$ and each $c\in\mc{C}\comp\l\{c_1,\dots,c_n\r\}$ as witnesses to $x_c$ in $\psi(\vec{x})$ makes $\mc{N}\models\theta_{s+1}$.

With $\theta_0\coloneqq\ex x(x=x)$, this completes the construction, and the $\mc{L}^\ast$-theory $T^\ast\coloneqq T\cup\l\{\theta_0,\theta_1,\dots\r\}$ is satisfiable since each finite fragment thereof is. It is complete since if $\phi$ is an $\mc{L}^\ast$-sentence, then $\phi=\phi_k$ for some $k$ and $T\proves\theta_{3k+1}\rightarrow\phi_k$. It is Henkin in $\mc{C}$ since if $\psi(v)$ is an $\mc{L}^\ast$-formula and $T^\ast\proves\ex v\psi(v)$, then $\ex v\psi(v)$ is $\phi_k$ for some $k$ and hence $T^\ast\proves\psi(c)$ for some $c\in\mc{C}$ by construction. Finally, if $\vec{a}\in M$, then there is some $\vec{c}_m\in\mc{C}^n$ such that $\vec{c}_m=\vec{a}$. We have $T^\ast\proves\lnot\phi(\vec{a})$ for some $\phi(\vec{x})\in p$ by construction, so $\mc{M}\models\lnot\phi(\vec{a})$ and hence $\vec{a}$ does not realize $p$ in $\mc{M}$. Thus $\mc{M}$ omits $p$, as desired.<span style="float:right;">$\blacksquare$</span>
