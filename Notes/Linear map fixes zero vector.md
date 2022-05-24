<br />
<br />

Date Created: 02/04/2022 16:48:29
Tags: #Proposition #Closed 

Proved by: [[Algebraic identities of vector spaces]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{K,+,\cdot,0,1}$ be a field and let $\tpl{V,K,\oplus_V,\odot_V,0_V}$ and $\tpl{W,K,\oplus_W,\odot_W,0_W}$ be vector spaces over $K$. Then, for every linear map $T:V\to W$, we have $T\l(0_V\r)=0_W$._

```

_Proof_. The result follows from the following computation:
$$\begin{align}
    T\l(0_V\r)&=T\l(0\odot_Vv\r) && \textrm{$0$ is the left-absorbing element of $\odot_V$} \\
    &=0\odot_WT\l(v\r) && \textrm{Homogeneity of $T$} \\
    &=0_W. && \textrm{$0$ is the left-absorbing element of $\odot_W$}\qedin
\end{align}$$
