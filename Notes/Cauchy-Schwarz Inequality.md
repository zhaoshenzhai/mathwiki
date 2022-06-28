<br />
<br />

Date Created: 26/06/2022 17:19:32
Tags: #Theorem #Closed

Proved by: [[Pythagorean Theorem]], [Linearly dependent $\Leftrightarrow$ scalar multiple](Linearly%20dependent%20iff%20scalar%20multiple.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Cauchy-Schwarz Inequality).

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then, for all $v,w\in V$, we have_
$$\begin{equation}
    \l|\bilform{v}{w}\r|\leq\|v\|\|w\|.
\end{equation}$$
_Equality holds iff $\l\{v,w\r\}$ is linearly dependent._

```

_Proof_. If $w=0$, then both sides reduce to $0$. Otherwise, assume $w\neq0$ and set
$$\begin{equation}
    z\coloneqq v-\frac{\bilform{v}{w}}{\|w\|^2}w.
\end{equation}$$
Geometrically, $z$ is the projection of $v$ onto $\l(\span\l\{w\r\}\r)^\perp$, which we see via the computation
$$\begin{equation}
    \begin{aligned}
        \bilform{z}{w}&=\bilform{v-\frac{\bilform{v}{w}}{\|w\|^2}w}{w} && \textrm{Substitution} \\
        &=\bilform{v}{w}-\frac{\bilform{v}{w}}{\|w\|^2}\bilform{w}{w} && \textrm{Linearity in the first slot} \\
        &=\bilform{v}{w}-\bilform{v}{w} && \bilform{w}{w}=\|w\|^2 \\
        &=0. && \textrm{Simplification}
    \end{aligned}
\end{equation}$$
Observe then that
$$\begin{equation}
    \begin{aligned}
        \|v\|^2&=\l\|z+\frac{\bilform{v}{w}}{\|w\|^2}w\r\|^2  && \textrm{Substitution} \\
        &=\|z\|^2+\l|\frac{\bilform{v}{w}}{\|w\|^2}\r|^2\|w\|^2 && \textrm{Pythagorean Theorem} \\
        &=\|z\|^2+\frac{\l|\bilform{v}{w}\r|^2}{\|w\|^2} && \|w\|^2>0 \\
        &\geq\frac{\l|\bilform{v}{w}\r|^2}{\|w\|^2}, && \|z\|^2\geq0
    \end{aligned}
\end{equation}$$
so $\l|\bilform{v}{w}\r|^2\leq\|v\|^2\|w\|^2$. The result follows by taking roots. The computation above shows that equality holds iff $\|z\|^2=0$, which occurs iff $z=0$. Thus
$$\begin{equation}
    v=\frac{\bilform{v}{w}}{\|w\|^2}w,
\end{equation}$$
showing that $\l\{v,w\r\}$ is linearly dependent. Conversely, if $\l\{v,w\r\}$ is linearly dependent, then $v=cw$ for some $c\in K$. Observe then that
$$\begin{equation}
    \l|\bilform{v}{w}\r|=\l|\bilform{cw}{w}\r|=\l|c\bilform{w}{w}\r|=\l|c\r|\|w\|^2=\l(\l|c\r|\|w\|\r)\|w\|=\|v\|\|w\|.\qedin
\end{equation}$$
