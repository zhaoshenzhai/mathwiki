---
custom_alias: Homogeneous $m\times n$ linear system with $n>m$ has non-trivial solutions
---

<br />
<br />

Date Created: 28/03/2022 15:32:39
Tags: #Proposition #Closed

Proved by: [[Linear map to a lower dimensional space is not injective]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be an field and take $A\in\mat{m\times n}{K}$ with $n>m$. Then the homogeneous linear system $A\v{x}=\v{0}$ has a non-trivial solution._

```

**Remark.** That is, a homogeneous linear system with more unknowns than equations are underdetermined, so it has non-zero solutions.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the linear map $T:K^n\to K^m:\v{x}\mapsto A\v{x}$. Since $n>m$, we see that $T$ is not injective, so there exists a non-zero $\v{x}\in K^n$ with $T\l(\v{x}\r)=A\v{x}=\v{0}$.<span style="float:right;">$\blacksquare$</span>
