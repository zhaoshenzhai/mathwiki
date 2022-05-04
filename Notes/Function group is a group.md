<br />
<br />

Date Created: 04/05/2022 12:14:10
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a non-empty set and let $\l\langle G,\ast,e\r\rangle$ be a group. Then the function group $\l\langle G^X,\blob,u\r\rangle$ is a group. Furthermore, if $\l\langle G,\ast,e\r\rangle$ is Abelian, then $\l\langle G^X,\blob,u\r\rangle$ is too._

```

_Proof_. We verify the axioms of a group.
* ($\axigrp[1]$): Take $f,g,h\in G^X$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\l(f\blob g\r)\blob h\r]\l(x\r)&=\l(f\blob g\r)\l(x\r)\ast h\l(x\r) && \textrm{Definition of $\blob$} \\
        &=\l[f\l(x\r)\ast g\l(x\r)\r]\ast h\l(x\r) && \textrm{Definition of $\blob$} \\
        &=f\l(x\r)\ast\l[g\l(x\r)\ast h\l(x\r)\r] && \textrm{Associativity of $\ast$} \\
        &=f\l(x\r)\ast\l[\l(g\blob h\r)\l(x\r)\r] && \textrm{Definition of $\blob$} \\
        &=\l[f\blob\l(g\blob h\r)\r]\l(x\r) && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $\l(f\blob g\r)\blob h=f\blob\l(g\blob h\r)$.

* ($\axigrp[2]$): Take $f\in G^X$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(f\blob u\r)\l(x\r)&=f\l(x\r)\ast u\l(x\r) \\
        &=f\l(x\r)\ast e \\
        &=f\l(x\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(u\blob f\r)\l(x\r)&=u\l(x\r)\ast f\l(x\r) && \textrm{Definition of $\blob$}\\
        &=e\ast f\l(x\r) && \textrm{Definition of $u$} \\
        &=f\l(x\r) && \textrm{$e$ is the unit of $G$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $f\blob u=f=u\blob f$.
* ($\axigrp[3]$): Take $f\in G^X$ and define $f^{-1}\in G^X$ by $f^{-1}\l(x\r)\coloneqq\l[f\l(x\r)\r]^{-1}$ for all $x\in X$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \l[f\blob\l(f^{-1}\r)\r]\l(x\r)&=f\l(x\r)\ast\l(f^{-1}\r)\l(x\r) \\
        &=f\l(x\r)\ast\l[f\l(x\r)\r]^{-1} \\
        &=e \\
        &=u\l(x\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\l(f^{-1}\r)\blob f\r]\l(x\r)&=\l(f^{-1}\r)\l(x\r)\ast f\l(x\r) && \textrm{Definition of $\blob$} \\
        &=\l[f\l(x\r)\r]^{-1}\ast f\l(x\r) && \textrm{Defintinition of $f^{-1}$} \\
        &=e && \textrm{$\l[f\l(x\r)\r]^{-1}$ is the inverse of $f\l(x\r)$ in $G$} \\
        &=u\l(x\r) && \textrm{Definition of $u$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $f\blob f^{-1}=u=f^{-1}\blob f$.

Additionally, if $\l\langle G,\ast,e\r\rangle$ is Abelian, take $f,g\in G^X$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(f\blob g\r)\l(x\r)&=f\l(x\r)\ast g\l(x\r) && \textrm{Definition of $\blob$} \\
        &=g\l(x\r)\ast f\l(x\r) && \textrm{$G$ is Abelian} \\
        &=\l(g\blob f\r)\l(x\r) && \textrm{Definition of $\blob$}
    \end{aligned}
\end{equation}$$
for all $x\in X$, so $f\blob g=g\blob f$. Hence $\l\langle G^X,\blob,u\r\rangle$ is Abelian too.<span style="float:right;">$\blacksquare$</span>
