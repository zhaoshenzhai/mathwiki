<br />
<br />

Date Created: 02/05/2022 16:09:47
Tags: #Proposition #In_Progress

Proved by: [[Criteria for equality of functions]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider linear maps $T_1,T_2\in\hom\l(V,W\r)$. If_ $S\coloneqq\l\{s_i\r\}_{i\in I}$ _is a spanning set of $V$, then_
$$\begin{equation}
    \fa i\in I:T_1\l(s_i\r)=T_2\l(s_i\r) \ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ T_1=T_2.
\end{equation}$$

```

_Proof_. It suffices to show that $T_1\l(v\r)=T_2\l(v\r)$ for all $v\in V$. To this end, take $v\in V$ and observe that
$$\begin{equation}
    v=\sum\limits_{i\in I}\alpha_is_i
\end{equation}$$
for some $\l\{\alpha_i\r\}_{i\in I}$ where $\alpha_i=0$ for all but finitely-many $i\in I$. Observe then that
$$\begin{equation}
    \begin{aligned}
        T_1\l(v\r)&=T_1\l(\sum\limits_{i\in I}\alpha_is_i\r) && \textrm{Substitution} \\
        &=\sum\limits_{i\in I}\alpha_iT_1\l(s_i\r) && \textrm{Linearity of $T_1$} \\
        &=\sum\limits_{i\in I}\alpha_iT_2\l(s_i\r) && \textrm{Assumption} \\
        &=T_2\l(\sum\limits_{i\in I}\alpha_is_i\r) && \textrm{Linearity of $T_2$} \\
        &=T_2\l(v\r) && \textrm{Substitution}
    \end{aligned}
\end{equation}$$
where each sum is defined since only finite-many coefficients are non-zero.<span style="float:right;">$\blacksquare$</span>
