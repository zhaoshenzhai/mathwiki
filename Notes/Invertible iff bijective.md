---
alias: auto_aliasing
---

<br />
<br />

Date Created: 27/01/2022 11:56:26
Tags: #Proposition #Closed 

Proved by: [Left inverse $\Leftrightarrow$ injection](Left%20inverse%20iff%20injection.md), [Right inverse $\Leftrightarrow$ surjection (Choice)](Right%20inverse%20iff%20surjection%20(Choice).md), [[Left and right inverses coincide (Function)]], [[Composition of relations is associative]], [[Identity function is the identity of function composition]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$. Then $f$ is a bijection iff it is invertible._

```

_Proof_. ($\Rightarrow$): Since $f$ is a bijection, it is both an injection and a surjection, so there exist left and right inverses $g,h:Y\to X$ of $f$, respectively. It follows that $g=h$ and thus $g$ is both a left and a right inverse of $f$. Therefore, $f$ is invertible.

($\Leftarrow$): Since $f$ is invertible, $f$ has both a left and right inverse so $f$ is both injective and surjective. It follows, by definition, that $f$ is bijective.<span style="float:right;">$\blacksquare$</span>
