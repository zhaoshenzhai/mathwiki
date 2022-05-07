<br />
<br />

Date Created: 07/05/2022 17:49:49
Tags: #Proposition #Closed

Proved by: [[Image of linear map is a subspace of its codomain]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. If $S$ is a spanning set of $V$, then_
$$\begin{equation}
    \im T=\span\l(\im_TS\r).
\end{equation}$$

```

_Proof_. Let $S\coloneqq\l\{s_i\r\}_{i\in I}$ for some index set $I$. We proceed by double containment.
* $\l(\supseteq\r)$: Since $T\l(s_i\r)\in\im T$ for all $i\in I$, we see that $\im_TS\subseteq\im T$. But since $\im T$ is a subspace of $W$, we see that $\span\l(\im_TS\r)\subseteq\im T$.

* $\l(\subseteq\r)$: Take $w\in\im T$, so $T\l(v\r)=w$ for some $v\in V$. Since $\span S=V$,
$$\begin{equation}
    v=\sum\limits_{i\in I}\alpha_is_i 
\end{equation}$$
for some $\l\{\alpha_i\r\}_{i\in I}\!\subseteq K^n$ with $\alpha_i=0$ for all but finitely-many $i\in I$. Observe then that
$$\begin{equation}
    \begin{aligned}
        T\l(v\r)&=T\l(\sum\limits_{i\in I}\alpha_is_i\r) && \textrm{Substitution} \\
        &=\sum\limits_{i\in I}\alpha_iT\l(s_i\r), && \textrm{Linearity of $T$}
    \end{aligned}
\end{equation}$$
so $w$ can be written as a linear combination of vectors in $\im_TS$. The result follows.<span style="float:right;">$\blacksquare$</span>
