<br />
<br />

Date Created: 27/01/2022 10:41:34
Tags: #Proposition #Closed 

Proved by: [[Criteria for equality of functions]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$. Then $f\circ\id_X=f$ and $\id_Y\circ f=f$. In other words, the diagram_

<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-02-09_213021/image.svg", width=240></center>

_commutes._

```

_Proof_. Observe that
$$\begin{equation}
    \dom f=\dom\l(f\circ\id_X\r)=\dom\l(\id_Y\circ f\r)=X,
\end{equation}$$
so take $x\in X$. Compute
$$\begin{equation}
    \l(f\circ\id_X\r)\l(x\r)=f\l(\id_X\l(x\r)\r)=f\l(x\r)\ \ \ \ \textrm{and}\ \ \ \ \l(\id_Y\circ f\r)\l(x\r)=\id_X\l(f\l(x\r)\r)=f\l(x\r),
\end{equation}$$
so $f\l(x\r)=\l(f\circ\id_X\r)\l(x\r)=\l(\id_Y\circ f\r)\l(x\r)$ for all $x$ in their common domain.<span style="float:right;">$\blacksquare$</span>
