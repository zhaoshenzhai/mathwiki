<br />
<br />

Date Created: 05/02/2022 11:06:10
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t bases]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the lower limit topology_ $\mc{T}_\textrm{LL}$ _is strictly finer than the standard topology_ $\mc{T}_\textrm{st}$ _on $\R$._

```

_Proof_. Take $\l(a,b\r)\in\mc{B}_\textrm{st}$ and $x\in\l(a,b\r)$. Let $\l[x,b\r)\in\mc{B}_\textrm{LL}$ and observe that $x\in\l[x,b\r)\subseteq\l(a,b\r)$, so $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{LL}$. The converse does not hold, for let $\l[c,d\r)\in\mc{B}_\textrm{LL}$ and choose $x=c$. Any $\l(e,f\r)\in\mc{B}_\textrm{st}$ containing $x$ necessarily implies that $e<c$, so $\l(e,f\r)\not\subseteq\l[c,d\r)$. Thus $\mc{T}_\textrm{st}\subset\mc{T}_\textrm{LL}$.<span style="float:right;">$\blacksquare$</span>
