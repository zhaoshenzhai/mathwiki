<div class="topSpace"></div>

Date Created: 15/10/2022 20:13:16
Tags: #Proposition #In_Progress

Proved by: [[Inner product induces a norm]], [[Convergent implies bounded]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Let $\tpl{x_n}$ and $\tpl{y_n}$ be sequences in $V$ such that_ $\lim\limits_{n\to\infty}x_n=x$ _and_ $\lim\limits_{n\to\infty}y_n=y$ _for some $x,y\in V$. Then the following properties hold._
* _(Linearity): For all $\alpha\in K$,_ $\lim\limits_{n\to\infty}\l(\alpha x_n+y_n\r)=\alpha x+y$_._
* _(Multiplicativity):_ $\lim\limits_{n\to\infty}\bilform{x_n}{y_n}=\bilform{x}{y}$_._

```

_Proof_.
* If $\alpha=0$, then we are done. Otherwise, let $\epsilon>0$. Since $x_n\to x$ and $y_n\to y$, we see that
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
        d\l(x_ny_n-xy\r)&=d\l(x_ny_n-x_ny+x_ny-xy\r) && \textrm{Insert $x_ny$} \\
        &\leq d\l(x_ny_n-x_ny\r)+d\l(x_ny-xy\r) && \textrm{Triangle Inequality} \\
        &=\l|x_n\r|d\l(y_n-y\r)+\l|y\r|d\l(x_n-x\r) && \textrm{Absolute homogeneity} \\
        &\leq Bd\l(y_n-y\r)+\l|y\r|d\l(x_n-x\r) && \l|x_n\r|\leq B
    \end{aligned}
\end{equation}$$
