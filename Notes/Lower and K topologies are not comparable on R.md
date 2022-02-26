<br />
<br />

Date Created: 05/02/2022 17:43:45
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t bases]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the lower limit and $K$ topologies_ $\mc{T}_\textrm{LL}$ _and_ $\mc{T}_\textrm{K}$_ on $\R$, respectively, are not comparable._


```

_Proof_. ($\mc{T}_\textrm{LL}\not\subseteq\mc{T}_\textrm{K}$): Take $\l[1/2,1\r)\in\mc{B}_\textrm{LL}$ and choose $x=1/2$. Then for all $B\in\mc{B}_\textrm{K}$, we have $x\not\in B$.

($\mc{T}_\textrm{K}\not\subseteq\mc{T}_\textrm{LL}$): Take $B=\l(-1,1\r)\comp K\in\mc{B}_\textrm{K}$ and choose $x=0$. Then any $\l[a,b\r)\in\mc{B}_\textrm{LL}$ containing $x$ necessarily implies that $b>0$, so there exists some $q=1/n$ such that $q<b$ for large enough $n\in\N$. Thus $q\in\l[a,b\r)$ but $q\not\in B$, so $\l[a,b\r)\not\subseteq B$.<span style="float:right;">$\blacksquare$</span>
