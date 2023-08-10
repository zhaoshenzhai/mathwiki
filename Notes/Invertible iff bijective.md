---
mathLink: auto
mathLink-blocks:
   injection-iff-left-invertible: Injection $\Leftrightarrow$ left-invertible
   surjection-iff-right-invertible: Surjection $\Leftrightarrow$ right-invertible
---

<div class="topSpace"></div>

Date Created: 27/01/2022 11:56:26
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: [[Axiom of Choice]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f:X\to Y$ with $X\neq\em$. Then $f$ is a bijection iff it is invertible.
* Moreover, $f$ is injective iff it is left-invertible, and, assuming the Axiom of Choice, $f$ is surjective iff it is right-invertible.

```

<i>Proof.</i> Suppose that $f$ is a bijection. Define the function $g:Y\to X$ mapping $y\in Y$ to the unique $x\in X$ such that $f\l(x\r)=y$. Then $g\circ f=\id_X$ and $f\circ g=\id_Y$, so $f$ is invertible. Conversely, if $f\l(x\r)=f\l(x'\r)$, then applying $g$ on the left gives us $x=x'$, so $f$ is injective. Moreover, for all $y\in Y$, we have $y=\id_Y\!\l(y\r)=f\l(g\l(y\r)\r)$, so $f$ is surjective too.
* The above proof also shows that left-invertible functions are injective, and that right-invertible functions are surjective.

Suppose now that $f$ is injective. Fix any $x_0\in X$ and define the function $g:Y\to X$ mapping $y\in f\l(X\r)$ to the unique $x\in X$ such that $f\l(x\r)=y$, and mapping every other $y\in Y\comp f\l(X\r)$ to $x_0$. This is a left-inverse of $f$.
^injection-iff-left-invertible

Finally, suppose that $f$ is surjective. Using Choice, let $h\subseteq f^{-1}$ be a function with $\dom h=\dom f^{-1}=Y$; here, $f^{-1}$ is the inverse of the relation $f$. Since $h$ is function, we see that for all $y\in Y$, there exists a unique $x$ such that $\tpl{y,x}\in h$. This implies that $\tpl{y,x}\in f^{-1}$ and thus $\tpl{x,y}\in f$. Since $x=h\l(y\r)$, we see that $f\l(h\l(y\r)\r)=y$; this holds for all $y\in Y$, so $h$ is a right-inverse of $f$.<span style="float:right;">$\blacksquare$</span>
^surjection-iff-right-invertible
