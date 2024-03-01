---
mathLink: Existence of prime/atomic models
---

<div class="topSpace"></div>

Date Created: 18/02/2024 15:54:24
References: #Ref/Mar02
Tags: #Type/Theorem #In_Progress

Proved by: [[Henkin Construction]], [[Basic properties of consistent theories]], [[Compactness Theorem]]
References: [[Completeness Theorem]]
Justifications: [[Prime iff atomic and countable]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Existence of prime/atomic models).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. Then $T$ admits a prime model iff the isolated types in $S_n(T)$ are dense for all $n$.
* <span style="color:pink">If $A\subseteq\mc{M}\models T$ is countable and $|S_n^\mc{M}(A)|<2^{\aleph_0}$, then $T$ has a prime model. In particular, the same holds if $\l|S_n(T)\r|<2^{\aleph_0}$.</span>

```

<b>Remark.</b> Since a model $\mc{M}\models T$ is prime iff it is countable and atomic, we may replace ‘prime’ with ‘atomic’ as long as we can build countable atomic models.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{M}\models T$ be a (countable) atomic model and let $\phi(\vec{x})$ be an $\mc{L}$-formula with $\l[\phi(\vec{x})\r]\subseteq S_n(T)$ non-empty. Since $T\cup\l\{\phi(\vec{x})\r\}$ is satisfiable, we have $T\proves\ex\vec{x}\phi(\vec{x})$. Thus $\mc{M}\models\ex\vec{x}\phi(\vec{x})$, so $\mc{M}\models\phi(\vec{a})$ for some $\vec{a}\in M$. Then $\tp^\mc{M}(\vec{a})\in\l[\phi(\vec{x})\r]$, and $\tp^\mc{M}(\vec{a})$ is isolated, so $\l[\phi(\vec{x})\r]$ contains an isolated type as desired.
&emsp;&emsp;Conversely, suppose that the isolated types in $S_n(T)$ are dense for all $n\in\N$ and let $\mc{L}^\ast\coloneqq\mc{L}\sqcup\mc{C}$ where $\mc{C}\coloneqq\l\{c_0,c_1,\dots\r\}$ are new constant symbols. We proceed, as in the proof of the Completeness Theorem, by extending $T$ to a complete $\mc{L}^\ast$-theory $T^\ast$ admitting Henkin witnesses in $\mc{C}$, and we do so in a way so that the canonical Henkin construction $\mc{M}\models T^\ast$ over $\mc{C}$ is atomic by ensuring that $\tp^\mc{M}(\vec{c})$ is isolated for all $\vec{c}\in\mc{C}$.
&emsp;&emsp;To this end, let $\l\{\phi_k\r\}$ be an enumeration of all $\mc{L}^\ast$-sentences. We construct a sequence $\l\{\theta_s\r\}$ of $\mc{L}^\ast$-sentences with $\theta_{s+1}\proves\theta_s$ for all $s$ such that, assuming inductively that $T\cup\l\{\theta_s\r\}$ is satisfiable and $s+1=3k+i$ for some $i=1,2,3$ and $k\in\N$, we have in the corresponding cases that:
* <span style="color:gray"><i>(Complete)</i>.</span> Either $T\proves\theta_s\rightarrow\phi_k$ or $T\proves\theta_s\rightarrow\lnot\phi_k$. In this case, we let $\theta_{s+1}\coloneqq\theta_s\land\phi_k$ if $T\cup\l\{\theta_s,\phi_k\r\}$ is satisfiable, and $\theta_{s+1}\coloneqq\theta_s\land\lnot\phi_k$ otherwise.
* <span style="color:gray"><i>(Henkin in $\mc{C}$)</i>.</span> If $\phi_k=\ex v\psi(v)$ and $T\proves\theta_s\rightarrow\phi_k$, we define $\theta_{s+1}$ so that $T\proves\theta_{s+1}\rightarrow\psi(c)$ for some $c\in\mc{C}$. Indeed, let $c\in\mc{C}$ be a constant symbol not in $\theta_s$ and set $\theta_{s+1}\coloneqq\theta_s\land\psi(c)$. Since $T\cup\l\{\theta_s\r\}$ is satisfiable, it admits a model $\mc{N}\models T\cup\l\{\theta_s\r\}$. Then $\mc{N}\models\phi_k$, so there is some $a\in N$ such that $\mc{N}\models\psi(a)$. Interpreting $c^\mc{N}\coloneqq a$ gives us $\mc{N}\models\theta_{s+1}$, so $T\cup\l\{\theta_{s+1}\r\}$ is satisfiable. Otherwise, let $\theta_{s+1}\coloneqq\theta_s$.
* <span style="color:gray"><i>(Atomic)</i>.</span> Let $\psi(\vec{x})\coloneqq\psi(x_0,\dots,x_n)$ be an $\mc{L}$-formula such that $\theta_s=\psi(c_0,\dots,c_n)$, where $n$ is the least number such that all $\mc{C}$-constants occurring in $\theta_s$ are from $\l\{c_0,\dots,c_n\r\}$. Then $T\cup\l\{\psi(\vec{x})\r\}$ is satisfiable, so $\l[\psi(\vec{x})\r]\neq\em$ and is open. By density, there is a type $p\in\l[\psi(\vec{x})\r]$ isolated by some $\eta(\vec{x})\in\mc{L}$. Set $\theta_{s+1}\coloneqq\theta_s\land\eta(\vec{c})$, and observe that $T\cup\l\{\theta_{s+1}\r\}$ is satisfiable since $T\cup\l\{\eta(\vec{x}),\psi(\vec{x})\r\}\subseteq T\cup p$ is.

With $\theta_0\coloneqq\ex x(x=x)$, this completes the construction, and the $\mc{L}^\ast$-theory $T^\ast\coloneqq T\cup\l\{\theta_0,\theta_1,\dots\r\}$ is satisfiable since each finite fragment thereof is. It is complete since if $\phi$ is an $\mc{L}^\ast$-sentence, then $\phi=\phi_k$ for some $k$ and $T\proves\theta_{3k+1}\rightarrow\phi_k$. It is Henkin in $\mc{C}$ since if $\psi(v)$ is an $\mc{L}^\ast$-formula and $T^\ast\proves\ex v\psi(v)$, then $\ex v\psi(v)$ is $\phi_k$ for some $k$ and hence $T^\ast\proves\psi(c)$ for some $c\in\mc{C}$ by construction. Finally, if $\vec{a}\in M$, then there is some $n\in\N$ and some $s=3k+2$ such that each $a_j\in\l\{c_0,\dots,c_n\r\}$ and $n$ is the least number such that all $\mc{C}$-constants occurring in $\theta_s$ are from $\l\{c_0,\dots,c_n\r\}$. By construction, $\mc{M}\models\eta(c_0^\mc{M},\dots,c_n^\mc{M})$ and $\eta(\vec{x})$ isolates a type $p\in S_n(T)$. Thus $\tp^\mc{M}(\vec{a})$ is an isolated type, as desired.<span style="float:right;">$\blacksquare$</span>
