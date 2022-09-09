---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 16/02/2022 21:13:45
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_A poset $\tpl{X,\leq}$ satisfies the least upper bound property iff it satisfies the greatest lower bound property._

```

_Proof_. We shall prove the forwards direction; the backwards direction is completely analogous. To this end, take a non-empty subset $B\subseteq X$ that is bounded below. Define the set
$$\begin{equation}
    A\coloneqq\l\{a\in X\mid\fa b\in B:a\leq b\r\},
\end{equation}$$
that is, let $A$ be the set of all lower bounds of $B$; we shall prove that $\alpha\coloneqq\sup A$ exists and that $\inf B=\alpha$.
* ($\sup A$ exists): Since $B$ is bounded below, $\ex a\in X,\fa b\in B:a\leq b$, i.e. $A\neq\em$. We claim that every $b\in B$ is an upper bound of $A$, so $A$ is bounded above since $B\neq\em$. This is seen directly since $\fa b\in B,\fa a\in A:a\leq b$ by definition of $A$ (and switching quantifiers). Since $\tpl{X,\leq}$ is Dedekind-complete, we see that $A$ admits a supremum $\alpha\coloneqq\sup A$.

* ($\inf B=\alpha$): We need to show that $\alpha$ is a lower bound of $B$ such that if there exists $\gamma\in X$ greater than $\alpha$, then $\gamma$ is not a lower bound of $B$.
    * ($\alpha$ is a lower bound of $B$): It suffices to show that $\alpha\in A$. Suppose, for sake of contradiction, that $\alpha$ is not a lower bound of $B$, so $\ex\beta\in B:\beta<\alpha$. But since $\alpha$ is the least upper bound of $A$, we see that $\beta$ is not an upper bound of $A$. Furthermore, since every $b\in B$ is an upper bound of $A$, it must be the case that $\beta\not\in B$, a contradiction. 

    * ($\alpha$ is the greatest lower bound of $B$): Take $\gamma\in X$ such that $\alpha<\gamma$. Since $\alpha$ is an upper bound of $A$, we see that $\gamma\not\in A$ and is thus, by definition of $A$, not a lower bound of $B$.<span style="float:right;">$\blacksquare$</span>
