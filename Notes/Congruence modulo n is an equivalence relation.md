---
mathLink: Congruence modulo $n$ is an equivalence relation
---

<div class="topSpace"></div>

Date Created: 10/09/2022 21:37:19
Tags: #Proposition

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $n\in\N$. Then the equivalence relation $\mod{n}$ defined by_
$$\begin{equation}
    a\mod{n}b\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ n\divides\!\l(a-b\r)
\end{equation}$$
_for all $a,b\in\Z$ is an equivalence relation on $\Z$._

```

_Proof_. We shall prove that $\mod{n}$ satisfies the axioms of an equivalence relation.
* (Reflexivity): Take $a\in\Z$. Since $n\l(0\r)=0=a-a$, we see that $n\divides\!\l(a-a\r)$ and hence $a\mod{n}a$.

* (Symmetry): Take $a,b\in\Z$ such that $a\mod{n}b$. Then $n\divides\!\l(a-b\r)$, so there exists some $k\in\Z$ such that $a=kn+b$. But then $b=\l(-k\r)n+a$, so $n\divides\l(b-a\r)$ and hence $b\mod{n}a$.
* (Transitivity): Take $a,b,c\in\Z$ such that $a\mod{n}b$ and $b\mod{n}c$. Then $n\divides\!\l(a-b\r)$ and $n\divides\!\l(b-c\r)$, so there exists $k,l\in\Z$ such that $a=kn+b$ and $b=ln+c$. But then
$$\begin{equation}
    a=kn+\l(ln+c\r)=\l(k+l\r)n+c,
\end{equation}$$
so $n\divides\!\l(a-c\r)$. Hence $a\mod{n}c$.<span style="float:right;">$\blacksquare$</span>
