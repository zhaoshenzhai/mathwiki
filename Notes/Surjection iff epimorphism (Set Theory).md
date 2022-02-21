<br />
<br />

Date Created: 21/02/2022 13:19:31
Tags: #Proposition #Closed

Proved by: [[Right inverse iff surjection (Choice)]], [[Identity is idempotent]], [[Composition of relations is associative]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ be a function. Then $f$ is a surjection iff $f$ is an epimorphism._

```

_Proof_. ($\Rightarrow$): Since $f$ is a surjection, there exists a right inverse $h:Y\to X$. Consider the functions $\alpha_1,\alpha_2:Y\to Z$ such that $\alpha_1\circ f=\alpha_2\circ f$ and compute
$$\begin{equation}
    \begin{alignedat}{2}
        \alpha_1&=\alpha_1\circ\id_Y&&\textrm{Identity is idempotent}\\
        &=\alpha_1\circ\l(f\circ h\r)&&h\textrm{ is a right inverse of }f\\
        &=\l(\alpha_1\circ f\r)\circ h\ \ \ \ \ \ \ \ &&\textrm{Associativity of composition}\\
        &=\l(\alpha_2\circ f\r)\circ h&&\textrm{Assumption}\\
        &=\alpha_2\circ\l(f\circ h\r)&&\textrm{Associativity of composition}\\
        &=\alpha_2\circ\id_Y&&h\textrm{ is a right inverese of }f\\
        &=\alpha_2,&&\textrm{Identity is idempotent}
    \end{alignedat}
\end{equation}$$
from which it follows that $f$ is an epimorphism.

($\Leftarrow$): Let $Z$ be a pair set, that is, $Z\coloneqq\l\{z_1,z_2\r\}$ for any sets $z_1$ and $z_2$. Define the functions
$$\begin{equation}
    \alpha_1,\alpha_2:Y\to Z\ \ \ \ \textrm{mapping}\ \ \ \ \alpha_1\l(y\r)\coloneqq z_1\ \ \ \ \textrm{and}\ \ \ \ \alpha_2\l(y\r)\coloneqq
        \begin{dcases}
            z_1 & \textrm{if }y\in\im f\\
            z_2 & \textrm{else}
        \end{dcases}
\end{equation}$$
for all $y\in Y$. Take $x\in X$ and observe that
$$\begin{equation}
    \begin{alignedat}{2}
        \l(\alpha_1\circ f\r)\l(x\r)&=\alpha_1\l(f\l(x\r)\r)&&\textrm{Composition of functions}\\
        &=z_1&&f\l(x\r)\in Y\\
        &=\alpha_2\l(f\l(x\r)\r)&&f\l(x\r)\in\im f\\
        &=\l(\alpha_2\circ f\r)\l(x\r),\ \ \ \ \ \ \ \ &&\textrm{Composition of functions}
    \end{alignedat}
\end{equation}$$
so, since $f$ is an epimorphism, we see that $\alpha_1=\alpha_2$. By construction, this requires $y\in\im f$ for all $y\in Y$ and hence $f$ is surjective.<span style="float:right;">$\blacksquare$</span>
