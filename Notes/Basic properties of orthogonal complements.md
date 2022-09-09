<div class="topSpace"></div>

Date Created: 25/06/2022 15:57:52
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Basic properties of orthogonal vectors]], [[Linear map fixes zero vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then the following algebraic identities hold:_
* $\l\{0\r\}^\perp=V$ _and_ $V^\perp=\l\{0\r\}$_._

* _For all subsets $U\subseteq V$:_
    * _$U^\perp$ is a linear subspace of $V$._
    * _$U\cap U^\perp\subseteq\l\{0\r\}$._
    * _For all $W\subseteq V$ with $U\subseteq W$, we have $W^\perp\subseteq U^\perp$._
    * _If $U=\span\l\{u_1,\dots,u_m\r\}$ for some $u_1,\dots,u_m\in U$, then $v\in U^\perp$ iff $v\perp u_j$ for all $j\in\l\{1,\dots,m\r\}$._

```

_Proof_. The first two assertions seem to be $\textrm{`}$dual$\textrm{'}$.
* ($\l\{0\r\}^\perp=V$): By definition, $v\in\l\{0\r\}^\perp$ iff $\bilform{v}{u}=0$ for all $u\in\l\{0\r\}$, which reduces to $\bilform{v}{0}=0$. But this is true for all $v\in V$ since $0$ is orthogonal to every vector in $V$. Conversely, every $v\in V$ is orthogonal to $0$.

* ($V^\perp=\l\{0\r\}$): By definition, $v\in V^\perp$ iff $\bilform{v}{u}=0$ for all $u\in V$, so, in particular, $\bilform{v}{v}=0$. This forces $v=0$. Conversely, $0$ is orthogonal to every vector $v\in V$.

Let $U$ be a subset of $V$. Note that if $U$ is a sub_space_ of $V$, then $U\cap U^\perp=\l\{0\r\}$.
* ($U^\perp$ is a subspace of $V$): It suffices to show that $0\in U^\perp$ and, for all $v_1,v_2\in U^\perp$ and $\alpha\in K$, that $\alpha v_1+v_2\in U^\perp$.
    * ($0\in U^\perp$): Since the function $\bilform{\slot}{u}:V\to K$ is linear for all $u\in U$, we see that $\bilform{0}{u}=0$ for all $u\in U$. Thus $0\in U^\perp$.

    * ($\alpha v_1+v_2\in U^\perp$): Take $u\in U$ and observe that
    $$\begin{equation}
        \begin{aligned}
            \bilform{\alpha v_1+v_2}{u}&=\alpha\bilform{v_1}{u}+\bilform{v_2}{u} && \textrm{Linearity in the first slot} \\
            &=\alpha\l(0\r)+\l(0\r) && v_1,v_2\in U^\perp \\
            &=0. && \textrm{Simplification}
        \end{aligned}
    \end{equation}$$
* ($U\cap U^\perp\subseteq\l\{0\r\}$): Take $v\in U\cap U^\perp$, so $v\in U$ and $\bilform{v}{u}=0$ for all $u\in U$. In particular, $\bilform{v}{v}=0$, so $v=0$.
* ($U\subseteq W\Rightarrow W^\perp\subseteq U^\perp$): Take $v\in W^\perp$, so $\bilform{v}{w}=0$ for all $w\in W$. Since $U\subseteq W$, we have $\bilform{v}{u}=0$ for all $u\in U$, so $v\in U^\perp$.
* ($v\in U^\perp\Leftrightarrow v\perp e_j$ for all $j$): The forward direction is trivial. Conversely, take $u\in U$, so there exist scalars $\alpha_1,\dots,\alpha_m\in K$ such that $u=\sum_{j=1}^m\alpha_je_j$. Observe then that
$$\begin{align}
    \bilform{v}{u}&=\bilform{v}{\sum_{j=1}^m\alpha_je_j} && \textrm{Substitution} \\
    &=\sum_{j=1}^m\bar{\alpha_j}\bilform{v}{e_j} && \textrm{Sesquilinearity} \\
    &=0. && v\perp e_j\textrm{ for all $j$}\qedin
\end{align}$$
