---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/12/2022 11:05:26
Tags: #Proposition #Topics/Topology

Proved by: [[Compact implies closed (Hausdorff)]], [[De Morgan's Laws]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: [[Nested Interval Theorem]]
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Cantor$\textrm{'}$s Intersection Theorem).

_Let_ $\l\{K_\alpha\r\}_{\alpha\in\mc{A}}$ _be a collection of compact subsets of a Hausdorff space $X$. If the intersection every finite subcollection of_ $\l\{K_\alpha\r\}$ _is non-empty, then_ $\bigcap_{\alpha\in\mc{A}}K_\alpha\neq\em$_._

```

**Remark.** In particular, if $\l\{K_n\r\}$ is a sequence of non-empty compact subsets of $X$ such that $K_n\supseteq K_{n+1}$ for all $n\in\N$, then $\bigcap_{i=1}^\infty K_n\neq\em$.
* Note that instead of the Hausdorff condition on $X$, one can impose that each $K_\alpha$ is closed.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Assume, for sake of contradiction, that $\bigcap_{\alpha\in\mc{A}}K_\alpha=\em$. For every $\alpha\in\mc{A}$, set $U_\alpha\coloneqq X\comp K_\alpha$, which is open, and observe that
$$\begin{equation}
    \bigcup_{\alpha\in\mc{A}}U_\alpha=\bigcup_{\alpha\in\mc{A}}X\comp K_\alpha=X\comp\bigcap_{\alpha\in\mc{A}}K_\alpha=X.
\end{equation}$$
Thus $\l\{U_\alpha\r\}$ is an open cover of $X$, and since $X$ is compact, there exist finitely-many indices $\alpha_1,\dots,\alpha_k$ such that $X=\bigcup_{i=1}^{k}U_{\alpha_i}$. But then
$$\begin{equation}
    \bigcap_{i=1}^{k}K_{\alpha_1}=\bigcap_{i=1}^{k}X\comp U_{\alpha_i}=X\comp\bigcup_{i=1}^{k}U_{\alpha_i}=X\comp X=\em,
\end{equation}$$
a contradiction.<span style="float:right;">$\blacksquare$</span>
