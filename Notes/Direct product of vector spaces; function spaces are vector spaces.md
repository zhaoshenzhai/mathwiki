---
mathLink: Direct product of vector spaces$\slash$function spaces are vector spaces
---

<br />
<br />

Date Created: 04/05/2022 12:41:37
Tags: #Proposition #Closed

Proved by: [Direct product of groups$\slash$function groups are groups](Direct%20product%20of%20groups;%20function%20groups%20are%20groups.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{\mc{V}_i\r\}_{i\in I}\coloneqq\l\{\tpl{V_i,K,+_i,\cdot_i,0_i}\r\}_{i\in I}$ _be an indexed family of vector spaces over some field $\tpl{K,+,\cdot,0,1}$. Then the vector space_ $\mc{V}\coloneqq\tpl{\prod_{i\in I}V_i,K,\boxplus,\boxdot,0_f}$_, consisting of_
* _the direct product_ $\tpl{\prod_{i\in I}V_i,\boxplus,0_f}$ _of_ $\l\{\tpl{V_i,+_i,0_i}\r\}_{i\in I}$ _and_
* _the left $K$-action $\boxdot$ on_ $\prod_{i\in I}V_i$ _defined, for all $\alpha\in K$ and_ $f\in\prod_{i\in I}V_i$_, by $\l(\alpha\boxdot f\r)\l(i\r)\coloneqq\alpha\cdot_if\l(i\r)$ for all $i\in I$,_

_is a vector space over $K$._

```

**Remark.** In particular, if each $\tpl{V_i,+_i,\cdot_i,0_i}$ is the field $\tpl{K,+,\cdot,0}$, then $\mc{V}=\tpl{K^I,K,\boxplus,\boxdot,0_f}$ is the function space from $I$ into $K$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Observe that $\tpl{\prod_{i\in I}V_i,\boxplus,0_f}$ is an Abelian group, so it suffices to verify the rest of the vector space axioms.
* (Compatibility of $\cdot$ and $\boxdot$): Take $\alpha_1,\alpha_2\in K$ and $f\in\prod_{i\in I}V_i$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha_1\boxdot\l(\alpha_2\boxdot f\r)\r]\l(i\r)&=\alpha_1\cdot_i\l(\alpha_2\boxdot f\r)\l(i\r) && \textrm{Definition of $\boxdot$} \\
        &=\alpha_1\cdot_i\l[\alpha_2\cdot_if\l(i\r)\r] && \textrm{Definition of $\boxdot$} \\
        &=\l(\alpha_1\cdot\alpha_2\r)\cdot_if\l(i\r) && \textrm{Compatibility of $\cdot$ with $\cdot_i$} \\
        &=\l[\l(\alpha_1\cdot\alpha_2\r)\boxdot f\r]\l(i\r) && \textrm{Definition of $\boxdot$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $\alpha_1\boxdot\l(\alpha_2\boxdot f\r)=\l(\alpha_1\cdot\alpha_2\r)\boxdot f$.

* (Left-identity of $\boxdot$): Take $f\in\prod_{i\in I}V_i$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(1\boxdot f\r)\l(i\r)&=1\cdot_if\l(i\r) && \textrm{Definition of $\boxdot$} \\
        &=f\l(i\r) && \textrm{Left-identity of $\cdot_i$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $1\boxdot f=f$.
* (Left-distribution of scalars): Take $\alpha\in K$ and $f,g\in\prod_{i\in I}V_i$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha\boxdot\l(f\boxplus g\r)\r]\l(i\r)&=\alpha\cdot_i\l(f\boxplus g\r)\l(i\r) && \textrm{Definition of $\boxdot$} \\
        &=\alpha\cdot_i\l[f\l(i\r)+_ig\l(i\r)\r] && \textrm{Definition of $\boxplus$} \\
        &=\l[\alpha\cdot_if\l(i\r)\r]+_i\l[\alpha\cdot_ig\l(i\r)\r] && \textrm{Left-distribution of scalars in $\mc{V}_i$} \\
        &=\l(\alpha\boxdot f\r)\l(i\r)+_i\l(\alpha\boxdot g\r)\l(i\r) && \textrm{Definition of $\boxdot$} \\
        &=\l[\l(\alpha\boxdot f\r)\boxplus\l(\alpha\boxdot g\r)\r]\l(i\r) && \textrm{Definition of $\boxplus$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $\alpha\boxdot\l(f\boxplus g\r)=\l(\alpha\boxdot f\r)\boxplus\l(\alpha\boxdot g\r)$.
* (Right-distribution of vectors): Take $\alpha_1,\alpha_2\in K$ and $f\in\prod_{i\in I}V_i$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\l(\alpha_1+\alpha_2\r)\boxdot f\r]\l(i\r)&=\l(\alpha_1+\alpha_2\r)\cdot_if\l(i\r) && \textrm{Definition of $\boxdot$} \\
        &=\l[\alpha_1\cdot_if\l(i\r)\r]+_i\l[\alpha_2\cdot_if\l(i\r)\r] && \textrm{Right-distribution of vectors in $\mc{V}_i$} \\
        &=\l[\l(\alpha_1\boxdot f\r)\l(i\r)\r]+_i\l[\l(\alpha_2\boxdot f\r)\l(i\r)\r] && \textrm{Definition of $\boxdot$} \\
        &=\l[\l(\alpha_1\boxdot f\r)\boxplus\l(\alpha_2\boxdot f\r)\r]\l(i\r) && \textrm{Definition of $\boxplus$}
    \end{aligned}
\end{equation}$$
for all $i\in I$, so $\l(\alpha_1+\alpha_2\r)\boxdot f=\l(\alpha_1\boxdot f\r)\boxplus\l(\alpha_2\boxdot f\r)$.<span style="float:right;">$\blacksquare$</span>
