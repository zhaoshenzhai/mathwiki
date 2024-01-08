---
mathLink: $\catfgrep[\C]{G}\iso\catfgmod[{\C\l[G\r]}]$
---

<div class="topSpace"></div>

Date Created: 02/09/2023 13:48:55
References: #Ref/NONE
Tags: #Type/Proposition #Topic/Category_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a finite group. There is an isomorphism of categories $\catfgrep[\C]{G}\iso\catfgmod[{\C\l[G\r]}]$.

```

<i>Proof.</i> First, note that there is an embedding $\C\into\C\l[G\r]$ by $z\mapsto z1$. This embedding shows us that a basis $\l\{v_i\r\}$ for a $\C$-vector space $V$ is also a basis for $V$ viewed as a $\C\l[G\r]$-module. Conversely, a basis $\l\{m_i\r\}$ for a $\C\l[G\r]$-module $M$ induces a basis $\l\{g\cdot m_i\r\}_{g\in G}$ for $M$ as a $\C$-vector space. Here, we let $\cdot$ denote the $\C\l[G\r]$-action on $M$.
* We construct a functor $F:\catfgrep[\C]{G}\to\catfgmod[{\C\l[G\r]}]$ as follows. For a representation $\rho:G\to\GL\l(V\r)$ of $G$, we equip $V$ with a $\C\l[G\r]$-module structure by $g\cdot v\coloneqq\rho\l(g\r)v$ and extended linearly. Every morphism $T:\tpl{\rho,V}\to\tpl{\tau,W}$ of representations is then a morphism of $\C\l[G\r]$-modules since
$$\begin{equation}
    T\l[\l(\sum a_gg\r)\cdot v\r]=T\l(\sum a_g\rho\l(g\r)v\r)=\sum a_g\l[T\circ\rho\l(g\r)\r]v=\sum a_g\l[\tau\l(g\r)\circ T\r]\l(v\r)=\l(\sum a_gg\r)\cdot T\l(v\r).
\end{equation}$$
* Conversely, we make a $\C\l[G\r]$-module $M$ into a $\C$-vector space by $zm\coloneqq z1\cdot m$ and define a representation $\rho:G\to\GL\l(M\r)$ by $\rho\l(g\r)m\coloneqq g\cdot m$. Every morphism $T:M\to N$ of $\C\l[G\r]$-modules is then a morphism of representations $\tpl{\rho,M}\to\tpl{\tau,N}$ since $\l[T\circ\rho\l(g\r)\r]\l(m\r)=T\l(g\cdot m\r)=g\cdot T\l(m\r)=\tau\l(g\r)T\l(m\r)=\l[\tau\l(g\r)\circ T\r]\l(m\r)$.

The composition of the two functors in either order is the identity functor, so we are done.<span style="float:right;">$\blacksquare$</span>
