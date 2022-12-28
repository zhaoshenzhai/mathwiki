<div class="topSpace"></div>

Date Created: 25/06/2022 20:35:44
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Basic properties of complex conjugation]], [[Basic properties of linear maps]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then the following algebraic identities hold:_
* _(Symmetric): $\fa v,w\in V:v\perp w\Leftrightarrow w\perp v$._
* _$\fa v\in V:0\perp v$._
* _$\fa v\in V:v\perp v\Rightarrow v=0$._

```
_Proof_. Take $v,w\in V$.
* The result follows from the following chain of equivalences:
$$\begin{equation}
    \begin{aligned}
        v\perp w&\Leftrightarrow\bilform{v}{w}=0 && \textrm{Definition of $\perp$} \\
        &\Leftrightarrow\bar{\bilform{w}{v}}=0 && \textrm{Conjugate-symmetry} \\
        &\Leftrightarrow\bilform{w}{v}=0 && \textrm{Properties of $\bar{\l(\slot\r)}$} \\
        &\Leftrightarrow w\perp v. && \textrm{Definition of $\perp$}
    \end{aligned}
\end{equation}$$

* Observe that $0\perp v\Leftrightarrow\bilform{0}{v}=0$, and since the function $\bilform{\slot}{v}:V\to K$ is linear, we see that $\bilform{0}{v}=0$.
* If $v\perp v$, then $\bilform{v}{v}=0$ and hence $v=0$ since $\bilform{\slot}{\slot}$ is positive-definite.<span style="float:right;">$\blacksquare$</span>
