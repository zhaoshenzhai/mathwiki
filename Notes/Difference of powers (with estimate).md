<div class="topSpace"></div>

Date Created: 20/09/2022 21:44:05
Tags: #Proposition #Topics/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $a,b\in\R$ and fix $n\in\N^+$. Then the following identity holds:_
$$\begin{equation}
    b^n-a^n=\l(b-a\r)\sum_{k=0}^{n-1}b^{n-k-1}a^k.
\end{equation}$$
_Furthermore, if $0<a<b$, the estimate_
$$\begin{equation}
    b^n-a^n\leq\l(b-a\r)nb^{n-1}
\end{equation}$$
_holds, and is strict if $n>1$._

```

_Proof_. We proceed by induction.
* ($n=1$): Observe that $\l(b-a\r)\sum_{k=0}^0b^{1-k-1}a^k=\l(b-a\r)b^0a^0=b-a$.

Assume now that the identity holds for some $m\in\N$. Then
$$\begin{equation}
    \begin{aligned}
        \l(b-a\r)\sum_{k=0}^mb^{m-k}a^k&=\sum_{k=0}^mb^{m-k+1}a^k-\sum_{k=0}^mb^{m-k}a^{k+1} && \textrm{Distribution} \\
        &=\sum_{k=0}^mb^{m-k+1}a^k-\sum_{k=1}^{m+1}b^{m-k+1}a^k && \textrm{Re-index} \\
        &=\sum_{k=0}^mb^{m-k+1}a^k-\sum_{k=0}^mb^{m-k+1}a^k+b^{m+1}-a^{m+1} && \textrm{Split off terms} \\
        &=b^{m+1}-a^{m+1}, && \textrm{Cancellation}
    \end{aligned}
\end{equation}$$
so the statement holds for $n=m+1$ too. Thus, by induction, the statement holds for all $n\in\N^+$.

Assume now that $0<a<b$. Thus $a^k\leq b^k$ for all $k\in\N$, and is strict if $k>0$. Hence we have the estimate
$$\begin{equation}
    \begin{aligned}
        b^n-a^n&\leq\l(b-a\r)\sum_{k=0}^{n-1}b^{n-1-k}b^k && a^k\leq b^k \\
        &=\l(b-a\r)\sum_{k=0}^{n-1}b^{n-1} && \textrm{Cancellation} \\
        &=\l(b-a\r)nb^{n-1}. && \textrm{Summation}
    \end{aligned}
\end{equation}$$
If $n>1$, then there is a term in the sum with $k>0$, so the estimate is strict.<span style="float:right;">$\blacksquare$</span>
