<div class="topSpace"></div>

Date Created: 21/09/2022 09:46:17
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X,X',Y,Y'$ be sets. If $X\eqnum X'$ and $Y\eqnum Y'$, then $X\times Y\eqnum X'\times Y'$._

```

_Proof_. Since $X\eqnum X'$, there exists a bijection $f:X\to X'$. Similarly, there exists a bijection $g:Y\to Y'$. Define the function
$$\begin{equation}
    \phi:X\times Y\to X'\times Y'\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \tpl{x,y}\mapsto\l(f\l(x\r),g\l(y\r)\r).
\end{equation}$$
We claim that $\phi$ is a bijection, so $X\times Y\eqnum X'\times Y'$.
* (Injection): Take $\tpl{x_1,y_1},\tpl{x_2,y_2}\in X\times Y$ such that $\phi\l(x_1,y_1\r)=\phi\l(x_2,y_2\r)$. Then $\tpl{f\l(x_1\r),g\l(y_1\r)}=\tpl{f\l(x_2\r),g\l(y_2\r)}$, which implies that $f\l(x_1\r)=f\l(x_2\r)$ and $g\l(y_1\r)=g\l(y_2\r)$. Since $f$ and $g$ are both, in particular, injections, we have $x_1=x_2$ and $y_1=y_2$. Thus $\tpl{x_1,y_1}=\tpl{x_2,y_2}$.

* (Surjection): Take $\tpl{x',y'}\in X'\times Y'$, so $x'\in X'$ and $y'\in Y'$. Since $f$ and $g$ are both, in particular, surjections, we see that there exist $x\in X$ and $y\in Y$ such that $f\l(x\r)=x'$ and $g\l(y\r)=y'$. Observe then that
$$\begin{equation}
    \phi\l(x,y\r)=\tpl{f\l(x\r),g\l(y\r)}=\tpl{x',y'}.\qedin
\end{equation}$$
