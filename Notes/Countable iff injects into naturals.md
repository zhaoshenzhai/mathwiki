---
mathLink: $X$ countable $\Leftrightarrow$ $X\into\omega$
---

<div class="topSpace"></div>

Date Created: 13/09/2022 15:29:17
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Inclusion function is an injection]], [[Composition of injections is an injection]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a set. Then $X$ is countable iff $X\into\omega$.

```

_Proof_.
* If $X$ is countable, then either $X$ is finite or $X\eqnum\omega$; the latter case is trivial. For the former, $X\eqnum n$ and so there exists a bijection $\phi:X\simto n$. Consider the natural inclusion $\iota:n\into\omega$, which is an injection. Then the composition $\iota\circ\phi:X\into\omega$ is an injection, so we are done.

* Let $\phi:X\into\omega$ be an injection.
