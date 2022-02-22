<br />
<br />

Date Created: 20/02/2022 19:16:39
Tags: #Proposition #Closed 

Proved by: [[Left inverse iff injection]], [[Identity is idempotent]], [[Composition of relations is associative]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Consider the category $\cat{Set}$ and let $f:X\to Y$ be a function. Then $f$ is an injection iff $f$ is a monomorphism._

```

_Proof_. ($\Rightarrow$): Since $f$ is an injection, there exists a left inverse $g:Y\to X$. Consider the functions $\alpha_1,\alpha_2:Z\to X$ such that $f\circ\alpha_1=f\circ\alpha_2$ and compute
$$\begin{equation}
    \begin{alignedat}{2}
        \alpha_1&=\id_X\circ\alpha_1&&\textrm{Identity is idempotent}\\
        &=\l(g\circ f\r)\circ\alpha_1\ \ \ \ \ \ \ \ &&g\textrm{ is a left inverse of }f\\
        &=g\circ\l(f\circ\alpha_1\r)&&\textrm{Associativity of composition}\\
        &=g\circ\l(f\circ\alpha_2\r)&&\textrm{Assumption}\\
        &=\l(g\circ f\r)\circ\alpha_2&&\textrm{Associativity of composition}\\
        &=\id_X\circ\alpha_2&&g\textrm{ is a left inverse of }f\\
        &=\alpha_2,&&\textrm{Identity is idempotent}
    \end{alignedat}
\end{equation}$$
from which it follows that $f$ is a monomorphism.

($\Leftarrow$): Let $Z$ be a singleton, that is, let $Z\coloneqq\l\{z\r\}$ for some set $z$. Take $x_1,x_2\in X$ and define the functions
$$\begin{equation}
    \alpha_1,\alpha_2:Z\to X\ \ \ \ \textrm{mapping}\ \ \ \ \alpha_1\l(z\r)\coloneqq x_1\ \ \ \ \textrm{and}\ \ \ \ \alpha_2\l(z\r)\coloneqq x_2.
\end{equation}$$
Observe then that
$$\begin{alignat}{2}
    f\circ\alpha_1=f\circ\alpha_2\ \ \ \ &\Rightarrow\ \ \ \ \alpha_1=\alpha_2&&f\textrm{ is a monomorphism}\\
    \l(f\circ\alpha_1\r)\l(z\r)=\l(f\circ\alpha_2\r)\l(z\r)\ \ \ \ &\Rightarrow\ \ \ \ \alpha_1\l(z\r)=\alpha_2\l(z\r)\ \ \ \ \ \ \ \ &&z\in Z\\
    f\l(\alpha_1\l(z\r)\r)=f\l(\alpha_2\l(z\r)\r)\ \ \ \ &\Rightarrow\ \ \ \ x_1=x_2&&\textrm{Composition of functions; substitution}\\
    f\l(x_1\r)=f\l(x_2\r)\ \ \ \ &\Rightarrow\ \ \ \ x_1=x_2.&&\textrm{Substitution}\qedin
\end{alignat}$$
