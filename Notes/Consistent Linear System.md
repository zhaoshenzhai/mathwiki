<br />
<br />

Date Created: 22/03/2022 15:01:28
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Classification of consistent linear systems of equations (infinite field)]]
Sufficiencies: [$m\times n$ homogeneous linear system with $m<n$ $\Rightarrow$ non-trivial solutions](m%20by%20n%20homogeneous%20linear%20system%20with%20m<n%20has%20a%20non-trivial%20solution.md)
Equivalences: [[Gaussian Elimination]], [[Gauss-Jordan Elimination]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field. The linear system_
$$\begin{equation}
    \l\{\begin{alignedat}{7}
        &A_{11}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&A_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{A_{11}x_1}&&&&&&&&\vdotswithin{A_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &A_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&A_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$ is said to be **consistent** if_
$$\begin{equation}
    \ex s_1,\dots,s_n\in K,\fa i\in\l\{1,\dots,m\r\}:A_{i1}s_1+\cdots+A_{in}s_n=b_i;
\end{equation}$$
_that is, if $\l\langle s_1,\dots,s_n\r\rangle$ is a solution to every linear equation in the system._

```
