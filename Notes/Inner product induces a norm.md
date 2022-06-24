<br />
<br />

Date Created: 24/06/2022 14:07:51
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then the function_
$$\begin{equation}
    \|\slot\|:V\to\R\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ v\mapsto\sqrt{\bilform{v}{v}}
\end{equation}$$
_is a norm on $V$._

```

_Proof_. We verify the axioms for a norm on $V$.
* (Positive-definiteness): Take $v\in V$. Obviously $\|v\|=\sqrt{\bilform{v}{v}}\geq0$, and $\|v\|=0$ iff $\sqrt{\bilform{v}{v}}=0$ iff $\bilform{v}{v}=0$ iff $v=0$.

* (Triangle inequality): 
* (Absolute homogeneity): Take $v\in V$ and $\alpha\in K$, and observe that
$$\begin{equation}
    \begin{aligned}
        \|\alpha v\|^2&=\bilform{\alpha v}{\alpha v} && \textrm{Definition of $\|\slot\|$} \\
        &=\alpha\bar{\alpha}\bilform{v}{v} && \textrm{Sesquilinearity of $\bilform{\slot}{\slot}$} \\
        &=\l|\alpha\r|^2\bilform{v}{v} && \textrm{Definition of $\l|\slot\r|$} \\
        &=\l|\alpha\r|^2\|v\|^2; && \textrm{Definition of $\|\slot\|$}
    \end{aligned}
\end{equation}$$
taking roots gives the desired result.<span style="float:right;">$\blacksquare$</span>
