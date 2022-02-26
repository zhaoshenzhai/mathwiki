<br />
<br />

Date Created: 27/01/2022 10:12:26
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. The inclusion function on $X$ is an injection._

```

_Proof_. Take $x,x'\in S$ and observe that $\iota\l(x\r)=\id_X\l(x\r)=x$ and $\iota\l(x'\r)=\id_X\l(x'\r)=x'$. If $\iota\l(x\r)=\iota\l(x'\r)$, then $x=x'$, so $\iota$ is an injection.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** Note that $\iota$ is genetically _not_ a surjection for if $y\in X$, the corresponding $x$ such that $y=f\l(x\r)$ may lie in $X\comp S$.<span style="float:right;">$\blacklozenge$</span>
