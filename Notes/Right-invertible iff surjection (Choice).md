---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/01/2022 12:42:19
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Exists function in relation iff Choice]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f:X\to Y$ with $X\neq\em$. Then $f$ is right-invertible iff $f$ is surjective.

```

<i>Proof.</i> ($\Rightarrow$): Let $h:Y\to X$ be a right-inverse of $f$. Then, for any $y\in Y$, we have $y=\id_Y\l(y\r)=\l(f\circ h\r)\l(y\r)=f\l(h\l(y\r)\r)$. Since $h\l(y\r)\in X$, we see that $f$ is a surjection.

($\Leftarrow$): Assume that $f$ is a surjection, so for all $y\in Y$, there exists $x\in X$ such that $y=f\l(x\r)$; such an $x$ is generically not unique since $f$ need not be an injection. Using Choice, let $h\subseteq f^{-1}$ be a function with $\dom h=\dom f^{-1}=Y$; here, $f^{-1}$ is the inverse of the relation $f$. Since $h$ is function, we see that for all $y\in Y$, there exists a unique $x$ such that $\tpl{y,x}\in h$. This implies that $\tpl{y,x}\in f^{-1}$ and thus $\tpl{x,y}\in f$. Since $x=h\l(y\r)$, we see that $f\l(h\l(y\r)\r)=y$; this holds for all $y\in Y$, so $h$ is a right-inverse of $f$.<span style="float:right;">$\blacksquare$</span>
