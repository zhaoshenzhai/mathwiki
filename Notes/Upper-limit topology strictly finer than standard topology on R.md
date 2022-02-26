<br />
<br />

Date Created: 05/02/2022 11:01:34
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t bases]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the upper limit topology_ $\mc{T}_\textrm{UL}$ _is strictly finer than the standard topology_ $\mc{T}_\textrm{st}$ _on $\R$._

```

_Proof_. Take $\l(a,b\r)\in\mc{B}_\textrm{st}$ and $x\in\l(a,b\r)$. Let $\l(a,x\r]\in\mc{B}_\textrm{UL}$ and observe that $x\in\l(a,x\r]\subseteq\l(a,b\r)$, so $\mc{T}_\textrm{st}\subseteq\mc{T}_\textrm{UL}$. The converse does not hold, for let $\l(c,d\r]\in\mc{B}_\textrm{UL}$ and choose $x=d$. Any $\l(e,f\r)\in\mc{B}_\textrm{st}$ containing $x$ necessarily implies that $d<f$, so $\l(e,f\r)\not\subseteq\l(c,d\r]$. Thus $\mc{T}_\textrm{st}\subset\mc{T}_\textrm{UL}$.<span style="float:right;">$\blacksquare$</span>
