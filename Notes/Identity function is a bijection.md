<br />
<br />

Date Created: 27/01/2022 10:06:17
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: [[Identity morphism is an isomorphism]]

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. The identity function on $X$ is a bijection._

```

_Proof_. To see that $\id_X$ is an injection, take $x,x'\in X$ and observe that $\id_X\l(x\r)=x$ and $\id_X\l(x'\r)=x'$. If $\id_X\l(x\r)=\id_X\l(x'\r)$, then $x=x'$, so $\id_X$ is an injection. To prove that $\ran\id_X=X$, take $y\in X$. We need to find some $x\in X$ such that $\id_X\l(x\r)=y$, but $\id_X\l(x\r)=x$, so take $x=y$.<span style="float:right;">$\blacksquare$</span>
