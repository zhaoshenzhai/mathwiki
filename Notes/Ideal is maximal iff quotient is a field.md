---
mathLink: $I$ maximal $\Leftrightarrow$ $R/I$ field
---

<div class="topSpace"></div>

Date Created: 22/11/2022 19:29:25
Tags: #Proposition #Ring_Theory #Courses/MATH235

Proved by: [[Basic properties of cosets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a commutative ring with unit and let $I\subset R$ be a proper ideal. Then $I$ is maximal iff $R/I$ is a field._

```

_Proof_. Since $R$ is a commutative ring with unit, we see that $R/I$ is also a commutative ring with unit.
* ($\Rightarrow$) Take $a+I\in R/I$ such that $a+I\neq0+I$, so $a\not\in I$. Let
$$\begin{equation}
    J\coloneqq\l\{j\in R\mid\ex i\in I,\ex r\in R:j=i+ra\r\},
\end{equation}$$
so $J$ is an ideal of $R$ containing $I$. But $I$ is maximal, so either $J=I$ or $J=R$. But $a=0+1a\in J$, so $J\neq I$ and hence $J=R$. Thus $1\in J$, so there exist $i\in I$ and $r\in R$ such that $1=i+ra$, so
$$\begin{equation}
    \l(a+I\r)\l(r+I\r)=ar+I=\l(1-i\r)+I=\l(1+I\r)+\l(-i+I\r)=1+I.
\end{equation}$$
* ($\Leftarrow$): Let $J$ be an ideal such that $I\subset J\subseteq R$, so there exists $a\in J$ such that $a\not\in I$. Thus $a+I\neq0+I$, and since $R/I$ is a field, we see that it has an inverse $b+I\in R/I$. Then
$$\begin{equation}
    ab+I=\l(a+I\r)\l(b+I\r)=1+I,
\end{equation}$$
so $1=ab+i$ for some $i\in I\subset J$. But $a\in J$ implies that $ab\in J$, so $1\in J$. Then, since $r=r\cdot1\in J$ for all $r\in R$, we see that $J=R$.<span style="float:right;">$\blacksquare$</span>
