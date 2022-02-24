<br />
<br />

Date Created: 11/02/2022 13:05:23
Tags: #Proposition #Open 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $v$ and $U$ be sets. Then_
$$\begin{equation}
    \l(\bigcup U\r)\cap v=\bigcup\l\{u\cap v\mid u\in U\r\}.
\end{equation}$$

```

_Proof_. Take $x\in\l(\bigcup U\r)\cap v$. The result follows from the following chain of equivalences:
$$\begin{alignat}{2}
    x\in\l(\bigcup U\r)\cap v&\Leftrightarrow x\in\bigcup U\land x\in v&&\textrm{Definition of intersection}\\
    &\Leftrightarrow\l[\l(\ex u\in U\r)x\in u\r]\land x\in v&&\textrm{Definition of union}\\
    &\Leftrightarrow\l(\ex u\in U\r)\l(x\in u\land x\in v\r)&&u\textrm{ is not free in }x\in v\\
    &\Leftrightarrow\l(\ex u\in U\r)x\in u\cap v&&\textrm{Definition of union}\\
    &\Leftrightarrow\l(\ex y\in\l\{u\cap v\mid u\in U\r\}\r)x\in y\ \ \ \ \ \ \ \ &&\textrm{Substitution}\\
    &\Leftrightarrow x\in\bigcup\l\{u\in v\mid u\in U\r\}.&&\textrm{Definition of union}\qedin
\end{alignat}$$
