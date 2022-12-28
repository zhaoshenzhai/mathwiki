---
mathLink: Linear $m\times n$ system $A\v{x}=\v{b}$ with $m>n$ is inconsistent for some $\v{b}\in K^m$
---

<div class="topSpace"></div>

Date Created: 14/05/2022 16:10:29
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Linear map to a larger dimensional space is not surjective]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and take a matrix $A\in\mat{m\times n}{K}$ with $m>n$. Then there exists $\v{b}\in K^m$ such that the (inhomogeneous) linear system $A\v{x}=\v{b}$ is inconsistent._

```

**Remark.** That is, a linear system with more equations than unknowns overdetermine the system, so it is inconsistent for some choice of (non-zero) constant term.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Since $n<m$, we see that the linear map $L_A:K^n\to K^m$ is not surjective, so there exists $\v{b}\in K^m$ such that no $\v{s}\in K^n$ is such that $L_A\l(\v{s}\r)=A\v{s}=\v{b}$.<span style="float:right;">$\blacksquare$</span>
