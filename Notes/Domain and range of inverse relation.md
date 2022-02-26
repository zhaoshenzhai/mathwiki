<br />
<br />

Date Created: 22/01/2022 09:39:56
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation. Then_
$$\begin{equation}
    \dom R^{-1}=\ran R\ \ \ \ \textit{and}\ \ \ \ \ran R^{-1}=\dom R.
\end{equation}$$

```

_Proof_. Simply compute:
$$\begin{gather}
    \dom R^{-1}=\l\{y\mid\ex x:yR^{-1}x\r\}=\l\{y\mid\ex x:xRy\r\}=\dom R\\
    \ran R^{-1}=\l\{x\mid\ex y:yR^{-1}x\r\}=\l\{x\mid\ex y:xRy\r\}=\dom R.\qedin
\end{gather}$$
