<br />
<br />

Date Created: 25/06/2022 15:45:09
Tags: #Proposition #Closed

Proved by: [[Linear map fixes zero vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $U$ is a subset of $V$, then its orthogonal complement_
$$\begin{equation}
    U^\perp\coloneqq\l\{v\in V\mid\fa u\in U:v\perp u\r\}
\end{equation}$$
_is a linear subsapce of $V$._

```

_Proof_. It suffices to show that $0\in U^\perp$ and, for all $v_1,v_2\in U^\perp$ and $\alpha\in K$, that $\alpha v_1+v_2\in U^\perp$.
* ($0\in U^\perp$): Since the function $\bilform{\slot}{u}:V\to K$ is linear for all $u\in U$, we see that $\bilform{0}{u}=0$ for all $u\in U$. Thus $0\in U^\perp$.

* ($\alpha v_1+v_2\in U^\perp$): Take $u\in U$ and observe that
$$\begin{align}
    \bilform{\alpha v_1+v_2}{u}&=\alpha\bilform{v_1}{u}+\bilform{v_2}{u} && \textrm{Linearity in the first slot} \\
    &=\alpha\l(0\r)+\l(0\r) && v_1,v_2\in U^\perp \\
    &=0. && \textrm{Simplification}\qedin
\end{align}$$
