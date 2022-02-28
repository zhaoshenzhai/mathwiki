<br />
<br />

Date Created: 27/01/2022 11:56:26
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: [[Left inverse iff injection]], [[Right inverse iff surjection (Choice)]], [[Left and right inverses coincide (Function)]], [[Composition of relations is associative]], [[Composition with identities preserve functions]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$. Then $f$ is a bijection iff it is invertible._

```

_Proof_. ($\Rightarrow$): Since $f$ is a bijection, it is both an injection and a surjection, so there exist left and right inverses $g,h:Y\to X$ of $f$, respectively. It follows that $g=h$ and thus $g$ is both a left and a right inverse of $f$. Therefore, $f$ is invertible.

($\Leftarrow$): Since $f$ is invertible, $f$ has both a left and right inverse so $f$ is both injective and surjective. It follows, by definition, that $f$ is bijective.<span style="float:right;">$\blacksquare$</span>
