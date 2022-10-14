<div class="topSpace"></div>

Date Created: 13/10/2022 08:20:48
Tags: #Theorem

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Binomial Theorem).

_Let $a,b\in\R$ and fix $n\in\N$. Then_
$$\begin{equation}
    \l(a+b\r)^n=\sum_{k=0}^{n}\binom{n}{k}a^kb^{n-k}.
\end{equation}$$

```

_Proof_. Take $n,k\in\N$. We shall use the facts that $\binom{n}{k}=0$ for all $n<k$ and that
$$\begin{equation}
    \binom{n+1}{k+1}=\binom{n}{k+1}+\binom{n}{k}.\cref{\ast}
\end{equation}$$
We proceed by mathematical induction.
* If $n=0$, then $\l(a+b\r)^0=1$ and $\sum_{k=0}^0\binom{0}{k}a^kb^{0-k}=\binom{0}{0}a^0b^{0-0}=1\cdot1\cdot1=1$.

Assume now that $\l(a+b\r)^m=\sum_{k=0}^m\binom{m}{k}a^kb^{m-k}$ for some $m\in\N$. Then
$$\begin{equation*}
    \begin{aligned}
        \l(a+b\r)^{m+1}&=\l(a+b\r)\l(a+b\r)^m && \textrm{Split the product} \\
                       &=\l(a+b\r)\sum_{k=0}^m\binom{m}{k}a^kb^{m-k} && \textrm{Induction hypothesis} \\
                       &=\sum_{k=0}^{m}\binom{m}{k}a^{k+1}b^{m-k}+\sum_{k=0}^{m}\binom{m}{k}a^kb^{m+1-k} && \textrm{Distribution} \\
                       &=\sum_{k=0}^{m}\binom{m}{k}a^{k+1}b^{m-k}+\sum_{k=-1}^{m-1}\binom{m}{k+1}a^{k+1}b^{m-k} && \textrm{Reindex $k'\coloneqq k-1$} \\
                       &=
                           \l\{\begin{aligned}
                               &\sum_{k=0}^{m+1}\binom{m}{k}a^{k+1}b^{m-k}-\underbrace{\binom{m}{m+1}a^{m+2}b^{-1}}_{\mathclap{=0}}+ \\
                               &\sum_{k=0}^{m+1}\binom{m}{k+1}a^{k+1}b^{m-k}+\underbrace{\binom{m}{0}a^0b^{m+1}}_{\mathclap{=b^{m+1}}}-\underbrace{\binom{m}{m+1}a^{m+1}b^0}_{\mathclap{=0}}-\underbrace{\binom{m}{m+2}a^{m+2}b^{-1}}_{\mathclap{=0}}
                           \end{aligned}\r. && \textrm{Add/split off terms} \\
                       &=b^{m+1}+\sum_{k=0}^{m+1}\l[\binom{m}{k}+\binom{m}{k+1}\r]a^{k+1}b^{m-k} && \textrm{Combine sums} \\
                       &=b^{m+1}+\sum_{k=0}^{m+1}\binom{m+1}{k+1}a^{k+1}b^{m-k} && \ref{\ast} \\
                       &=b^{m+1}+\sum_{k=1}^{m+2}\binom{m+1}{k}a^kb^{m+1-k} && \textrm{Reindex $k''\coloneqq k+1$} \\
                       &=b^{m+1}+\sum_{k=0}^{m+1}\binom{m+1}{k}a^kb^{m+1-k}+\underbrace{\binom{m+1}{m+2}a^{m+2}b^{-1}}_{\mathclap{=0}}-\underbrace{\binom{m+1}{0}a^0b^{m+1}}_{\mathclap{=b^{m+1}}} && \textrm{Add/split off terms} \\
                       &=\sum_{k=0}^{m+1}\binom{m+1}{k}a^kb^{m+1-k}. && \textrm{Simplification}
    \end{aligned}
\end{equation*}$$
Thus the statement holds for $n=m+1$ too, so we are done.<span style="float:right;">$\blacksquare$</span>
