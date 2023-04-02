<div class="topSpace"></div>

Date Created: 28/03/2023 13:42:19
Tags: #Proposition #Later/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: [[Riemann integrable implies bounded]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f,g:\l[a,b\r]\to\R$ be Riemann integrable functions on $\l[a,b\r]$. Then the following properties hold._
* _(Linearity): For any $\lambda\in\R$, $f+\lambda g$ is Riemann integrable on $\l[a,b\r]$ with_ $\int_{a}^{b}\l(f+\lambda g\r)=\int_{a}^{b}f+\lambda\int_{a}^{b}g$_._
* _(Respects order): If $f\leq g$ on $\l[a,b\r]$, then_ $\int_{a}^{b}f\leq\int_{a}^{b}g$_._
* _(Additivity of bounds): For any $c\in\l(a,b\r)$, $f$ is Riemann integrable on both $\l[a,b\r]$ and $\l[c,b\r]$ with_ $\int_{a}^{c}f+\int_{c}^{b}f=\int_{a}^{b}f$_._
* _(Boundedness): Letting $M\coloneqq\underset{x\in\l[a,b\r]}{\max}f\l(x\r)$, we have_ $\l|\int_{a}^{b}f\r|\leq M\l(b-a\r)$_._

```

_Proof_. Let $\epsilon>0$. Then, since $f,g\in\RI{\l[a,b\r]}$, there exists some $\delta>0$ such that
$$\begin{equation}
    \l|S\l(f,\mc{P}\r)-\int_{a}^{b}f\r|<\frac{\epsilon}{2}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l|S\l(g,\mc{P}\r)-\int_{a}^{b}g\r|<\min\l\{\frac{\epsilon}{2\lambda},\frac{\epsilon}{2}\r\}
\end{equation}$$
for any tagged partition $\mc{P}$ of $\l[a,b\r]$ with $\|\mc{P}\|<\delta$.
* (Linearity): It is clear that $S\l(f+\lambda g,\mc{P}\r)=S\l(f,\mc{P}\r)+\lambda S\l(g,\mc{P}\r)$, so
$$\begin{equation}
    \l|S\l(f+\lambda g\r)-\l(\int_{a}^{b}f+\lambda\int_{a}^{b}g\r)\r|=\l|\l(S\l(f,\mc{P}\r)-\int_{a}^{b}f\r)+\lambda\l[S\l(g,\mc{P}\r)-\int_{a}^{b}f\r]\r|\leq\l|S\l(f,\mc{P}\r)-\int_{a}^{b}f\r|+\lambda\l|S\l(g,\mc{P}\r)-\int_{a}^{b}g\r|=\frac{\epsilon}{2}+\frac{\lambda\epsilon}{2\lambda}=\epsilon.
\end{equation}$$

* (Respects order): It is clear that $S\l(f,\mc{P}\r)\leq S\l(g,\mc{P}\r)$. Note that $\int_{a}^{b}f-\epsilon/2<S\l(f,\mc{P}\r)$ and $S\l(g,\mc{P}\r)<\int_{a}^{b}g+\epsilon/2$, so we have
$$\begin{equation}
    \int_{a}^{b}f\leq\int_{a}^{b}g+\epsilon.
\end{equation}$$
But $\epsilon>0$ is arbitrary, so the result follows.
* (Additivity of bounds): 
* (Boundedness): 
