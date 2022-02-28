<br />
<br />

Date Created: 30/01/2022 17:39:40
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $R$ be a well-founded relation on $X$. Then $R$ is irreflexive on $X$._

```

_Proof_. If $X=\em$, then the result is vacuously true. Suppose otherwise, so take $x\in X$ and consider the subset $\l\{x\r\}\subseteq X$. Since $R$ is well-founded on $X$, there exists $x\in\l\{x\r\}$, namely $x$ itself, such that $\lnot xRx$. The element $x\in X$ is arbitrary, so $R$ is irreflexive on $X$.<span style="float:right;">$\blacksquare$</span>
