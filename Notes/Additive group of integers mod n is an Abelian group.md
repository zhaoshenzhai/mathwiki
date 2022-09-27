---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/09/2022 14:33:38
Tags: #Proposition #Courses/MATH235

Proved by: [[Same equivalence class iff related]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $n\in\N^+$ and consider the quotient set $\Z/n\Z$ of $\Z$ under the equivalence relation $\mod{n}$. Then the binary operation_
$$\begin{equation}
    +_n:\Z/n\Z\times\Z/n\Z\to\Z/n\Z \ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \l(\l[a\r],\l[b\r]\r)\mapsto\l[a+b\r]
\end{equation}$$
_is well-defined and makes $\tpl{\Z/n\Z,+_n}$ into an Abelian group._

```

_Proof_. To check that $+_n$ is well-defined, take $a,a',b,b'\in\Z$ such that $a\mod{n}a'$ and $b\mod{n}b'$. Then there exist integers $k,l\in\Z$ such that $a=kn+a'$ and $b=ln+b'$, so
$$\begin{equation}
    a+b=kn+a'+ln+b'=\l(k+l\r)n+\l(a'+b'\r).
\end{equation}$$
Thus $a+b\mod{n}a'+b'$, so $\l[a+b\r]=\l[a'+b'\r]$. The group axioms are all inherited from that of $\Z$.
* Take $\l[a\r],\l[b\r],\l[c\r]\in\Z/n\Z$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(\l[a\r]+_n\l[b\r]\r)+_n\l[c\r]&=\l[a+b\r]+_n\l[c\r] && \textrm{Definition of $+_n$} \\
        &=\l[\l(a+b\r)+c\r] && \textrm{Definition of $+_n$} \\
        &=\l[a+\l(b+c\r)\r] && \textrm{Associativity of $+$} \\
        &=\l[a\r]+_n\l[b+c\r] && \textrm{Definition of $+_n$} \\
        &=\l[a\r]+_n\l(\l[b\r]+_n\l[c\r]\r). && \textrm{Definition of $+_n$}
    \end{aligned}
\end{equation}$$

* Observe that $\l[a\r]+_n\l[0\r]=\l[a+0\r]=\l[a\r]$ for all $\l[a\r]\in\Z/n\Z$, so $\l[0\r]$ is the identity element of $\Z/n\Z$.
* Take $\l[a\r]\in\Z/n\Z$ and set $-\l[a\r]\coloneqq\l[-a\r]$. Observe then that $\l[a\r]+_n\l(-\l[a\r]\r)=\l[a\r]+_n\l[-a\r]=\l[a-a\r]=\l[0\r]$.

Furthermore, the fact that $\Z/n\Z$ is Abelian is also trivial; take $\l[a\r],\l[b\r]\in\Z/n\Z$ and observe that $\l[a\r]+_n\l[b\r]=\l[a+b\r]=\l[b+a\r]=\l[b\r]+_n\l[a\r]$.<span style="float:right;">$\blacksquare$</span>
