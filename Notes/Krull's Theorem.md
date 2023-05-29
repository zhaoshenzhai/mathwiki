---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 09/01/2023 12:16:56
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Krull).

Let $R$ be a nontrivial commutative ring with unity. If $I\subset R$ is a proper ideal, then there is a maximal ideal $M\subset R$ containing $I$.

```

**Remark.** In particular, every nontrivial commutative ring has a maximal ideal.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Let $\mc{F}$ be the set of all proper ideals of $R$ containing $I$. Since $I\in\mc{F}$, we see that $\mc{F}\neq\em$. Let $\mc{C}\subseteq\mc{F}$ be a chain; that is, let $\mc{C}$ be totally ordered set whose order is the partial order restricted from $\mc{F}$. We claim that $\bigcup\mc{C}$ is an ideal in $R$.
* Obviously $0\in\bigcup\mc{C}$. Take $x_1,x_2\in\bigcup\mc{C}$, so there exists $J_1,J_2\in\mc{C}$ such that $x_1\in J_1$ and $x_2\in J_2$. Since $\mc{C}$ is a chain, either $J_1\subseteq J_2$ or $J_2\subseteq J_1$. W.l.o.g., assume $J_1\subseteq J_2$, so $x_1,x_2\in J_2$ and hence $x_1+x_2\in J_2\subseteq\bigcup\mc{C}$. Similarly, $-x_1\in\bigcup\mc{C}$ and $rx_1\in\bigcup\mc{C}$ for all $r\in R$.

Furthermore, $\bigcup\mc{C}$ is proper since if $1\in\bigcup\mc{C}$, then $1\in J$ for some $J\in\mc{C}$. But then $J=R$, a contradiction. Thus $\bigcup\mc{C}\in\mc{F}$, so every chain $\mc{C}$ in $\mc{F}$ has an upper bound $\mc{C}\subseteq\bigcup\mc{C}\in\mc{F}$. By Zorn$\textrm{'}$s Lemma, $\mc{F}$ has a maximal element.<span style="float:right;">$\blacksquare$</span>
