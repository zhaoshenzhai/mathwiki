---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 15/10/2022 20:13:16
Tags: #Proposition #Courses/MATH254

Proved by: [[Convergent implies bounded]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{x_n}$ and $\tpl{y_n}$ be sequences in $\R$ such that_ $\lim\limits_{n\to\infty}x_n=x$ _and_ $\lim\limits_{n\to\infty}y_n=y$ _for some $x,y\in \R$. Then the following properties hold:_
* _(Linearity): For all $\alpha\in\R$,_ $\lim\limits_{n\to\infty}\l(\alpha x_n+y_n\r)=\alpha x+y$_._
* _(Multiplicativity):_ $\lim\limits_{n\to\infty}\l(x_n\cdot y_n\r)=x\cdot y$_._
* _(Invertibility): If $x\neq0$, then_ $\lim\limits_{n\to\infty}\frac{1}{x_n}=\frac{1}{x}$ _where $\fa^\infty n\in\N:x_n\neq0$._
* _(Respects absolute value):_ $\lim\limits_{n\to\infty}\l|x_n\r|=\l|x\r|$_._
* _(Respects root): If $\fa^\infty n\in\N:x_n\geq0$, then_ $\lim\limits_{n\to\infty}\sqrt{x_n}=\sqrt{x}$_._
* _(Respects boundedness): For all $a\in\R$, if $\fa^\infty n\in\N:x_n\geq a$ (resp. $x_n\leq a$), then $x\geq a$ (resp. $x\leq a$)._
* _(Respects order): If $\fa^\infty n\in\N:x_n\leq y_n$, then $x\leq y$._

```

_Proof_.
* (Linearity): If $\alpha=0$, there is nothing to show. Otherwise, let $\epsilon>0$. Since $x_n\to x$ and $y_n\to y$, we see that
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

* (Multiplicativity): Since $\tpl{x_n}$ converges, it is bounded and hence there exists some $r\in\R$ such that $\l|x_n\r|\leq r$ for all $n\in\N$. Observe then that
$$\begin{equation}
    \begin{aligned}
        d\l(x_ny_n,xy\r)&\leq d\l(x_ny_n,x_ny\r)+d\l(x_ny,xy\r) && \textrm{Triangle Inequality} \\
        &=\l|x_n\r|d\l(y_n,y\r)+\l|y\r|d\l(x_n,x\r) && \textrm{Absolute homogeneity} \\
        &\leq Bd\l(y_n,y\r)+\l|y\r|d\l(x_n,x\r). && \l|x_n\r|\leq B
    \end{aligned}
\end{equation}$$
Since $d\l(x_n,x\r)\to0$ and $d\l(y_n,y\r)\to0$ as $n\to\infty$, we see that any linear combination thereof converges to $0$ as $n\to\infty$.
* (Invertibility): Since $x\neq0$, we see that $\epsilon\coloneqq2d\l(x,0\r)>0$. Thus, by the Triangle Inequality, we have
$$\begin{equation}
    d\l(x_n,0\r)\leq d\l(x,x_n\r)+d\l(x_n,0\r)
\end{equation}$$
and hence
$$\begin{equation}
    d\l(x_n,0\r)\geq d\l(x,0\r)-d\l(x,x_n\r)>2\epsilon-\epsilon=\epsilon
\end{equation}$$
for all eventually $n\in\N$. Observe then that
$$\begin{equation}
    d\l(\frac{1}{x_n}-\frac{1}{x}\r)=\l|\frac{1}{x_n}-\frac{1}{x}\r|=\l|\frac{x-x_n}{x_nx}\r|=\frac{\l|x-x_n\r|}{\l|x_n\r|\l|x\r|},
\end{equation}$$
which, for all eventually $n\in\N$, can be evaluated to
$$\begin{equation}
    d\l(\frac{1}{x_n}-\frac{1}{x}\r)<\frac{\l|x-x_n\r|}{2x^2}<\frac{\epsilon}{2x^2}.
\end{equation}$$
* (Respects absolute value): Let $\epsilon>0$, so $d\l(x_n,x\r)=\l|x_n-x\r|<\epsilon$. Then, from the Reverse Triangle Inequality, we see that $\l|\l|x_n\r|-\l|x\r|\r|\leq\l|x_n-x\r|<\epsilon$.
* (Respects root): Let $\epsilon>0$. If $x=0$, then $d\l(x_n,0\r)=x_n<\epsilon^2$ for all eventually $n\in\N$, so $d\l(\sqrt{x_n},0\r)=\sqrt{x_n}<\epsilon$ for all eventually $n\in\N$. Otherwise, if $x>0$, then $d\l(x_n,x\r)<\epsilon\sqrt{x}$ for all eventually $n\in\N$ and hence
$$\begin{equation}
    d\l(\sqrt{x_n},\sqrt{x}\r)=\l|\sqrt{x_n}-\sqrt{x}\r|=\frac{\l|\sqrt{x_n}-\sqrt{x}\r|\l|\sqrt{x_n}+\sqrt{x}\r|}{\l|\sqrt{x_n}+\sqrt{x}\r|}=\frac{\l|x_n-x\r|}{\l|\sqrt{x_n}+\sqrt{x}\r|}\leq\frac{d\l(x_n,x\r)}{\sqrt{x}}<\epsilon
\end{equation}$$
for all eventually $n\in\N$.
* (Respects boundedness): If $x<a\leq x_n$, then $\epsilon\coloneqq d\l(x,a\r)>0$. Hence
$$\begin{equation}
    d\l(x_n,x\r)=\l|x_n-x\r|=x_n-x<d\l(x,a\r)
\end{equation}$$
and thus
$$\begin{equation}
    x_n<x+d\l(x,a\r)=x+\l|x-a\r|=x+a-x=a,
\end{equation}$$
a contradiction.

* (Respects order): Observe that $x_n-y_n\leq0$, so $\lim\limits_{n\to\infty}\l(x_n-y_n\r)\leq0$. Since the limit is linear, we can split the sum to obtain the desired result.<span style="float:right;">$\blacksquare$</span>
