<div class="topSpace"></div>

Date Created: 24/06/2022 14:07:51
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Cauchy-Schwarz Inequality]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

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

* (Triangle inequality): Take $v,w\in V$ and observe that
$$\begin{equation}
    \begin{aligned}
        \|v+w\|^2&=\bilform{v+w}{v+w} && \textrm{Definition of $\|\slot\|$} \\
        &=\bilform{v}{v}+\bilform{v}{w}+\bilform{w}{v}+\bilform{w}{w} && \textrm{Additivity} \\
        &=\|v\|^2+\|w\|^2+\bilform{v}{w}+\bilform{w}{v} && \textrm{Definition of $\|\slot\|$} \\
        &=\|v\|^2+\|w\|^2+\bilform{v}{w}+\bar{\bilform{v}{w}} && \textrm{Conjugate-symmetry} \\
        &=\|v\|^2+\|w\|^2+2\Re\bilform{v}{w} && 2\Re z=z+\bar{z} \\
        &\leq\|v\|^2+\|w\|^2+2\Re\l(\|v\|\|w\|\r) && \textrm{Cauchy-Schwarz Inequality} \\
        &=\|v\|^2+\|w\|^2+2\|v\|\|w\| && \|\slot\|:V\to\R \\
        &=\l(\|v\|+\|w\|\r)^2; && \textrm{Group terms}
    \end{aligned}
\end{equation}$$
taking roots gives the desired result.
* (Absolute homogeneity): Take $v\in V$ and $\alpha\in K$, and observe that
$$\begin{equation}
    \begin{aligned}
        \|\alpha v\|^2&=\bilform{\alpha v}{\alpha v} && \textrm{Definition of $\|\slot\|$} \\
        &=\alpha\bar{\alpha}\bilform{v}{v} && \textrm{Sesquilinearity of $\bilform{\slot}{\slot}$} \\
        &=\l|\alpha\r|^2\bilform{v}{v} && \textrm{Definition of $\l|\,\slot\,\r|$} \\
        &=\l|\alpha\r|^2\|v\|^2; && \textrm{Definition of $\|\slot\|$}
    \end{aligned}
\end{equation}$$
taking roots gives the desired result.<span style="float:right;">$\blacksquare$</span>
