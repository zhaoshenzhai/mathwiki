---
mathLink: Saturated $\Leftrightarrow$ Homogeneous $+$ Universal
---

<div class="topSpace"></div>

Date Created: 28/02/2024 23:18:12
References: #Ref/NONE
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Saturated $\Leftrightarrow$ Homogeneous $+$ Universal).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$ and fix an infinite cardinal $\kappa$. Let $\mc{M}\models T$. The following are equivalent.
1. $\mc{M}$ is $\kappa$-saturated.
2. $\mc{M}$ is $\kappa$-homogeneous and $\kappa^+$-universal. <span style="color:gray">If $\kappa\neq\aleph_0$, we may replace ‘$\kappa^+$-universal’ with ‘$\kappa$-universal’.</span>
3. $\mc{M}$ is $\kappa$-homogeneous and realizes all types in $S_n(T)$.


```

<i>Proof.</i> First, observe that if $A\subseteq M$, then for $f:A\eleminto\mc{M}$ and every $b\in M\comp A$, the collection $\Gamma(x)\coloneqq\l\{\phi(f(\vec{a}),x)\st\vec{a}\in A^m\textrm{ and }\mc{M}\models\phi(\vec{a},b)\r\}$ is a complete $1$-type. Indeed, if $\phi(f(\vec{a},x))\in\Gamma(x)$, then $\mc{M}\models\phi(\vec{a},b)$ and hence $\mc{M}\models\ex x\phi(\vec{a},x)$. Since $f$ is partial elementary, we see that $\mc{M}\models\ex x\phi(f(\vec{a},x))$, as desired.
* <span style="color:gray">($1\Rightarrow2$).</span> To show that $\mc{M}$ is $\kappa$-homogeneous, let $A\subseteq M$ with $\l|A\r|<\kappa$ and suppose that $f:A\eleminto\mc{M}$. For any $b\in M\comp A$, there is some $c\in M$ realizing $\Gamma(x)$ as above, so $\tp^\mc{M}(\vec{a},b)$ is contained in $\tp^\mc{M}(f(\vec{a}),c)$. Thus $f\cup\l\{(b,c)\r\}$ is partial-elementary, as desired. Now, let $\mc{N}\models T$ with $\l|N\r|\leq\kappa$. Enumerating $N=\l\{a_\alpha\st\alpha<\kappa\r\}$ and let $A_\alpha\coloneqq\l\{a_\beta\st\beta<\alpha\r\}\subseteq N$. We construct an increasing sequence $f_\alpha:A_\alpha\eleminto\mc{M}$ inductively by setting $f_0\coloneqq\em$ and $f_\alpha\coloneqq\bigcup_{\beta<\alpha}f_\beta$ at limits. At successors, we let $c\in M$ realize $\Gamma(x)$ as above so that $f_{\alpha+1}\coloneqq f_\alpha\cup\l\{(a_\alpha,c)\r\}$ is partial elementary. Then $f\coloneqq\bigcup_\alpha f_\alpha:\mc{N}\eleminto\mc{M}$, as desired.
