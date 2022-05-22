<br />
<br />

Date Created: 22/01/2022 09:50:41
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ and $g:Y'\to Z$ be functions. Then $g\circ f$ is a function with_
$$\begin{equation}
    \dom\l(g\circ f\r)=\l\{x\in X\mid f\l(x\r)\in Y'\r\}\ \ \ \ \textrm{\it{and}}\ \ \ \ \fa x\in\dom\l(g\circ f\r):\l(g\circ f\r)\l(x\r)=g\l(f\l(x\r)\r).
\end{equation}$$

```

_Proof_. We shall first prove that the relation $g\circ f$ has the prescribed domain and then prove that $g\circ f$ is indeed a function.
* ($\l\{x\in X\mid f\l(x\r)\in Y'\r\}\subseteq\dom\l(g\circ f\r)$): Take $x\in X$, so $\tpl{x,f\l(x\r)}\in f$. If $f\l(x\r)\in\dom g$, then $\tpl{f\l(x\r),g\l(f\l(x\r)\r)}\in g$. Set $y=f\l(x\r)$ and $z=g\l(f\l(x\r)\r)$, so $\ex y\l(y=f\l(x\r)\land z=g\l(y\r)\r)$. It follows, by definition of composition, that
$$\begin{equation}
    \tpl{x,z}=\tpl{x,g\l(f\l(x\r)\r)}\in g\circ f
\end{equation}$$
and thus $x\in\dom\l(g\circ f\r)$.
* ($\dom\l(g\circ f\r)\subseteq\l\{x\in X\mid f\l(x\r)\in Y'\r\}$): Take a set $x$ such that $\ex z:x\l(g\circ f\r)z$, so $\tpl{x,z}\in g\circ f$ and thus $\ex y:\tpl{x,y}\in f\land\tpl{y,z}\in g$. Set $y=f\l(x\r)$, so $\tpl{f\l(x\r),z}\in g$. It follows, by definition of the domain, that $f\l(x\r)\in\dom g=Y$.

To prove that $g\circ f$ is a function, take $x\in\dom\l(g\circ f\r)$; we need to prove that there exists a unique set $z$ such that $\tpl{x,z}\in g\circ f$. Suppose otherwise, so, by definition of composition, there exist $y$ and $y'$ such that
$$\begin{equation}
    \tpl{x,y}\in f\land\tpl{y,z}\in g\ \ \ \ \textrm{and}\ \ \ \ \tpl{x,y'}\in f\land\tpl{y',z'}\in g.
\end{equation}$$
Since $f$ is a function, we have that $y=y'$. Similarly, $g$ is a function, so $z=z'$. If we write $y=f\l(x\r)$ and $z=g\l(y\r)$, we have $\l(g\circ f\r)\l(x\r)=g\l(f\l(x\r)\r)$.<span style="float:right;">$\blacksquare$</span>
