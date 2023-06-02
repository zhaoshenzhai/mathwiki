---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 16/02/2022 21:13:45
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

A poset $\tpl{X,\leq}$ satisfies the least upper bound property iff it satisfies the greatest lower bound property.

```

<i>Proof.</i> We shall prove the forwards direction; the backwards direction is completely analogous. To this end, take a non-empty subset $B\subseteq X$ that is bounded below. Define the set $A\coloneqq\l\{a\in X\mid\fa b\in B:a\leq b\r\}$, that is, let $A$ be the set of all lower bounds of $B$; we shall prove that $\alpha\coloneqq\sup A$ exists and that $\inf B=\alpha$.
* ($\sup A$ exists): Since $B$ is bounded below, $\ex a\in X,\fa b\in B:a\leq b$, i.e. $A\neq\em$. We claim that every $b\in B$ is an upper bound of $A$, so $A$ is bounded above since $B\neq\em$. This is seen directly since $\fa b\in B,\fa a\in A:a\leq b$ by definition of $A$ (and switching quantifiers). Since $\tpl{X,\leq}$ is Dedekind-complete, we see that $A$ admits a supremum $\alpha\coloneqq\sup A$.

* ($\inf B=\alpha$): Suppose, for sake of contradiction, that $\alpha$ is not a lower bound of $B$, so $\ex\beta\in B:\beta<\alpha$. But since $\alpha$ is the least upper bound of $A$, we see that $\beta$ is not an upper bound of $A$. Furthermore, since every $b\in B$ is an upper bound of $A$, it must be the case that $\beta\not\in B$, a contradiction. To show that $\inf B=\alpha$, take $\gamma\in X$ such that $\alpha<\gamma$. Since $\alpha$ is an upper bound of $A$, we see that $\gamma\not\in A$ and is thus, by definition of $A$, not a lower bound of $B$.<span style="float:right;">$\blacksquare$</span>
