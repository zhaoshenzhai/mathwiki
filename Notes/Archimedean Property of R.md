---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/09/2022 19:44:55
Tags: #Type/Theorem #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Archimedean Property of $\R$).

Take $x,y\in\R$. If $x>0$, there there exists some $n\in\N$ such that $nx>y$.

```

<i>Proof.</i> Consider the set $A\coloneqq\l\{nx\in\R\mid n\in\N\r\}$. Suppose, for sake of contradiction, that $y\geq nx$ for all $n\in\N$. Thus $A$ is bounded above by $y$, and since $A\neq\em$, we see that there exists a supremum $\alpha\coloneqq\sup A$ in $\R$. Since $x>0$, we see that $\alpha-x<\alpha$ and hence $\alpha-x$ cannot be an upper bound for $A$. Thus $\alpha-x<mx$ for some $mx\in A$, so $\alpha<\l(m+1\r)x\in A$. But since $\alpha$ is an upper bound of $A$, this is impossible.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** An often-used corollary of the Archimedean Property is that for all $\epsilon>0$, there exists some $n\in\N^+$ such that $\frac{1}{n}<\epsilon$. To see this, apply the property with $x\coloneqq\epsilon$ and $y\coloneqq1$ to furnish some $n\in\N$ such that $n\epsilon>1$. Then, since $n\neq0$, we obtain $\frac{1}{n}<\epsilon$.<span style="float:right;">$\blacklozenge$</span>
