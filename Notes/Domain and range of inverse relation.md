---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2022 09:39:56
Tags: #Type/Proposition #Later/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a binary relation. Then
$$\begin{equation}
    \dom R^{-1}=\ran R\ \ \ \ \mathit{and}\ \ \ \ \ran R^{-1}=\dom R.
\end{equation}$$

```

<i>Proof.</i> Simply compute:
$$\begin{gather}
    \dom R^{-1}=\l\{y\st\ex x:yR^{-1}x\r\}=\l\{y\st\ex x:xRy\r\}=\dom R\\
    \ran R^{-1}=\l\{x\st\ex y:yR^{-1}x\r\}=\l\{x\st\ex y:xRy\r\}=\dom R.\qedin
\end{gather}$$
