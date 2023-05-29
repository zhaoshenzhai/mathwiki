<div class="topSpace"></div>

Date Created: 27/01/2022 10:54:11
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f$ and $g$ be functions. If $\dom f=\dom g$ and $f\l(x\r)=g\l(x\r)$ for all $x$ in their common domain, then $f=g$.

```

<i>Proof.</i> Take $\tpl{x,y}\in f$, so $x\in\dom f$ and thus $x\in\dom g$. Hence there exists a unique $y'$ such that $\tpl{x,y'}\in f$. Since $y=f\l(x\r)=g\l(x\r)=y'$, we see that $\tpl{x,y}\in g$ too and thus $f\subseteq g$. Similarly, we have $g\subseteq f$ and thus $f=g$.<span style="float:right;">$\blacksquare$</span>
