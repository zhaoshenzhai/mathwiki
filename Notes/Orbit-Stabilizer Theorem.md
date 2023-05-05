<div class="topSpace"></div>

Date Created: 05/05/2023 14:32:11
Tags: #Theorem #Topics/Group_Theory

Proved by: [[Universal Property of Quotient Sets]]
References: [[Lagrange's Theorem]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Orbit-Stabilizer).

_Let $G$ be a group acting on a set $X$ and fix $x\in X$. Then there is a bijection between the orbit $Gx$ and cosets $G/G_x$ of the stabilizer $G_x$, so $\l|Gx\r|=\l[G:G_x\r]$._

```

**Remark.** If $G$ is finite, then $\l|Gx\r|=\l[G:G_x\r]=\l|G\r|/\l|G_x\r|$ by Lagrange$\textrm{'}$s Theorem.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the function $f:G\to Gx$ mapping $g\mapsto gx$. Then, for all $g,h\in G$, we see that
$$\begin{equation}
    f\l(g\r)=f\l(h\r)\ \ \ \ \Leftrightarrow\ \ \ \ gx=hx\ \ \ \ \Leftrightarrow\ \ \ \ h^{-1}gx=x\ \ \ \ \Leftrightarrow\ \ \ \ h^{-1}g\in Gx\ \ \ \ \Leftrightarrow\ \ \ \ g\in hGx,
\end{equation}$$
so the universal property of the quotient set furnishes a (unique) bijection $\tilde{f}:G/G_x\to Gx$. Thus $\l|Gx\r|=\l[G:G_x\r]$, and if $G$ is finite, then $\l[G:G_x\r]=\l|G\r|/\l|G_x\r|$ by Lagrange$\textrm{'}$s Theorem.<span style="float:right;">$\blacksquare$</span>
