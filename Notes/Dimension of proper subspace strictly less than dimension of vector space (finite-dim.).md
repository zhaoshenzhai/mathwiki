---
custom_alias: Dimension of proper subspace $<$ dimension of vector space (finite-dim.)
---

<br />
<br />

Date Created: 23/04/2022 12:48:57
Tags: #Proposition #Closed

Proved by: [$\l|\textrm{Linearly independent set}\r|\leq\l|\textrm{Spanning set}\r|$ (finite-dim.)](Cardinality%20of%20linearly%20independent%20sets%20no%20more%20than%20that%20of%20spanning%20sets%20(finite-dim.).md), [[Enlargement of linearly independent set by adjoining non-spanned vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a finite-dimensional vector space over $K$. If $W$ is a proper subspace of $V$, then $\dim W<\dim V$._

```

_Proof_. Let $\mc{B}_W$ and $\mc{B}_V$ be bases of $W$ and $V$, respectively. Since $W$ is a proper subspace of $V$, it is a proper subset thereof so there exists $v\in V$ not in $W$. Since $\span\mc{B}_W=W$, we see that $v\not\in\span\mc{B}_W$ and thus $\mc{B}_W\cup\l\{v\r\}$ is a linearly independent subset of $W$. It follows then that $\mc{B}_W\cup\l\{v\r\}$ is a linearly independent subset of $V$ too, and since $\span\mc{B}_V=V$, we see that $\l|\mc{B}_W\cup\l\{v\r\}\r|\leq\l|\mc{B}_V\r|$. The result follows since $\mc{B}_W$ and $\l\{v\r\}$ is disjoint, so $\dim W+1\leq\dim V$.<span style="float:right;">$\blacksquare$</span>
