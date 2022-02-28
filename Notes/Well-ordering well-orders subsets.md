<br />
<br />

Date Created: 30/01/2022 18:40:57
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: [[Subset relation is transitive]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $R$ be a well-order on $X$. If $S\subseteq X$, then $R$ well-orders $S$ too._

```

_Proof_. Any subset $T$ of $S$ is also a subset of $X$, and, since $R$ well-orders $X$, there exists a minimal element in $T$. Hence $R$ is a well-founded relation $S$. Since $R$ is connected and is a strict partial order on $X$, it is connected and is a strict partial order on $S$, and hence it is a strict total order on $S$ too.<span style="float:right;">$\blacksquare$</span>
