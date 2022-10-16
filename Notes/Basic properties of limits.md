<div class="topSpace"></div>

Date Created: 15/10/2022 20:13:16
Tags: #Proposition #In_Progress #Courses/MATH254

Proved by: [[Convergent implies bounded]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $\tpl{x_n}$ and $\tpl{y_n}$ be sequences in $K$ such that_ $\lim\limits_{n\to\infty}x_n=x$ _and_ $\lim\limits_{n\to\infty}y_n=y$ _for some $x,y\in K$. Then the following properties hold._
* _(Linearity): For all $\alpha\in K$,_ $\lim\limits_{n\to\infty}\l(\alpha x_n+y_n\r)=\alpha x+y$_._
* _(Multiplicativity):_ $\lim\limits_{n\to\infty}\l(x_n\cdot y_n\r)=x\cdot y$_._

```

_Proof_.
* If $\alpha=0$, there is nothing to show. Otherwise, let $\epsilon>0$. Since $x_n\to x$ and $y_n\to y$, we see that
$$\begin{equation}
    \fa^\infty n\in\N:d\l(x_n,x\r)<\frac{\epsilon}{2\alpha}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \fa^\infty n\in\N:d\l(y_n,y\r)<\frac{\epsilon}{2}.\cref{\ast}
\end{equation}$$
Thus, for all eventually $n\in\N$, we have
$$\begin{equation}
    \begin{aligned}
        d\l(\l(\alpha x_n+y_n\r)-\l(\alpha x+y\r)\r)&=d\l(\alpha\l(x_n-x\r)+\l(y_n-y\r)\r) && \textrm{Group terms} \\
        &\leq\alpha d\l(x_n-x\r)+d\l(y_n-y\r) && \textrm{Triangle Inequality} \\
        &<\alpha\frac{\epsilon}{2\alpha}+\frac{\epsilon}{2} && \ref{\ast} \\
        &=\epsilon. && \textrm{Simplification}
    \end{aligned}
\end{equation}$$

* Since $\tpl{x_n}$ converges, it is bounded and hence there exists some $r\in\R$ such that $\l|x_n\r|\leq r$ for all $n\in\N$. Observe then that
$$\begin{equation}
    \begin{aligned}
        d\l(x_ny_n,xy\r)&\leq d\l(x_ny_n,x_ny\r)+d\l(x_ny,xy\r) && \textrm{Triangle Inequality} \\
        &=\l|x_n\r|d\l(y_n,y\r)+\l|y\r|d\l(x_n,x\r) && \textrm{Absolute homogeneity} \\
        &\leq Bd\l(y_n,y\r)+\l|y\r|d\l(x_n,x\r). && \l|x_n\r|\leq B
    \end{aligned}
\end{equation}$$
Since $d\l(x_n,x\r)\to0$ and $d\l(y_n,y\r)\to0$ as $n\to\infty$, we see that any linear combination thereof converges to $0$ as $n\to\infty$.<span style="float:right;">$\blacksquare$</span>
