<div class="topSpace"></div>

Date Created: 15/01/2022 14:02:37
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Axiom of Extensionality]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $u$, $v$, $x$, and $y$ be sets. Then $\tpl{u,v}=\tpl{x,y}$ iff $u=x$ and $v=y$.

```

_Proof_. If $u=x$ and $v=y$, then, by $\axiext$, we have $\l\{\l\{u\r\},\l\{u,v\r\}\r\}=\l\{\l\{x\r\},\l\{x,y\r\}\r\}$ and thus $\tpl{u,v}=\tpl{x,y}$. Conversely, suppose that $\tpl{u,v}=\tpl{x,y}$, so $\l\{\l\{u\r\},\l\{u,v\r\}\r\}=\l\{\l\{x\r\},\l\{x,y\r\}\r\}$. There are two cases; either $u=v$ or $u\neq v$:
* If $u=v$, then
$$\begin{equation}
    \l\{\l\{u\r\},\l\{u,v\r\}\r\}=\l\{\l\{u\r\},\l\{u,u\r\}\r\}=\l\{\l\{u\r\},\l\{u\r\}\r\}=\l\{\l\{u\r\}\r\},
\end{equation}$$
so $\l\{\l\{x\r\},\l\{x,y\r\}\r\}$ contains only one element. It follows that $\l\{x\r\}=\l\{x,y\r\}=\l\{u\r\}$, so $x=y=u=v$.
* Assume now that $u\neq v$. Suppose, for contradiction, that $x=y$. Then
$$\begin{equation}
    \l\{\l\{x\r\},\l\{x,y\r\}\r\}=\l\{\l\{x\r\}\r\},
\end{equation}$$
so $\l\{\l\{u\r\},\l\{u,v\r\}\r\}$ contains only one element, namely $\l\{x\r\}$. It follows that $u=v$, a contradiction. Recall that either $\l\{u\r\}=\l\{x\r\}$ or $\l\{u\r\}=\l\{x,y\r\}$, but the latter cannot be the case since $x\neq y$ so at least one of $x$ and $y$ must not be equal to $u$. Thus $\l\{u\r\}=\l\{x\r\}$ and so $u=x$. Observe then that $\l\{u,v\r\}=\l\{x,v\r\}$; since we also have $\l\{u,v\r\}=\l\{x,y\r\}$, it follows that $v=y$.<span style="float:right;">$\blacksquare$</span>
