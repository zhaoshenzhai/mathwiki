---
mathLink: Saturated $\Leftrightarrow$ Homogeneous $+$ Universal
---

<div class="topSpace"></div>

Date Created: 28/02/2024 23:18:12
References: #Ref/Mar02
Tags: #Type/Proposition #In_Progress

Proved by: [[Realizing Types]], [[Lowenheim-Skolem Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Saturated $\Leftrightarrow$ Homogeneous $+$ Universal).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$ and fix an infinite cardinal $\kappa$. For any $\mc{M}\models T$, the following are equivalent.
1. $\mc{M}$ is $\kappa$-saturated.
2. $\mc{M}$ is $\kappa$-homogeneous and $\kappa^+$-universal. <span style="color:gray">If $\kappa\neq\aleph_0$, we may replace ‘$\kappa^+$-universal’ with ‘$\kappa$-universal’.</span>
3. $\mc{M}$ is $\kappa$-homogeneous and realizes all types in $S_n(T)$.


```

<i>Proof.</i> First, observe that if $A\subseteq M$, then for $f:A\eleminto\mc{M}$ and every $a\in M\comp A$, the collection $\Gamma_{\!a}(x)\coloneqq\l\{\phi(f(\vec{a}),x)\st\vec{a}\in A^m\textrm{ and }\mc{M}\models\phi(\vec{a},a)\r\}$ is a complete $1$-type. Indeed, if $\phi(f(\vec{a},x))\in\Gamma_{\!a}(x)$, then $\mc{M}\models\phi(\vec{a},a)$ and hence $\mc{M}\models\ex x\phi(\vec{a},x)$. Since $f$ is partial elementary, we see that $\mc{M}\models\ex x\phi(f(\vec{a},x))$, as desired.

We need the following lemma. Let $\mc{N},\mc{M}\models T$. If $\mc{M}$ is $\kappa$-homogeneous and every type $S_n(T)$ realized in $\mc{N}$ is realized in $\mc{M}$, then for every $A\subseteq N$ with $\l|A\r|\leq\kappa$, we have a partial elementary map $f:A\eleminto\mc{M}$. The proof is by induction on $\l|A\r|$.
<span class="floatRight">![[Images/2024-03-01_114417/image.svg|280]]</span>

&emsp;&emsp;If $A=\l\{a_1,\dots,a_m\r\}$ is finite, then there is some $\vec{b}\in M$ such that $\tp^\mc{N}(\vec{a})=\tp^\mc{M}(\vec{b})$ by assumption, so $\vec{a}\eleminto\vec{b}$ is as desired. Let $\l|A\r|=\lambda\leq\kappa$ and enumerate each $A_\alpha\coloneqq\l\{a_\beta\st\beta<\alpha\r\}$. We construct an increasing sequence $f_\alpha:A_\alpha\eleminto\mc{M}$ inductively by setting $f_0\coloneqq\em$ and $f_\alpha\coloneqq\bigcup_{\beta<\alpha}f_\beta$ at limits. At successors, since $\l|A_{\alpha+1}\r|<\lambda$, there exists by induction some partial elementary map $g:A_{\alpha+1}\eleminto\mc{M}$. Consider the ‘shift’ map $h\coloneqq f_\alpha\circ g^{-1}:g(A_\alpha)\eleminto\mc{M}$. Since $\l|g(A_\alpha)\r|<\kappa$ and $\mc{M}$ is  $\kappa$-homogeneous, there is some $b\in M$ such that $h^\ast:g(a_\alpha)\mapsto b$ extends $h$. Then $f_{\alpha+1}\coloneqq f_\alpha\cup\l\{(a_\alpha,b)\r\}=h^\ast\circ g$ is the desired partial elementary map, completing the induction. Finally, $f\coloneqq\bigcup_{\alpha<\lambda}f_\alpha:A\eleminto\mc{M}$ is as desired.

* <span style="color:gray">($1\Rightarrow2,3$).</span> To show that $\mc{M}$ is $\kappa$-homogeneous, let $A\subseteq M$ with $\l|A\r|<\kappa$ and suppose that $f:A\eleminto\mc{M}$. For any $b\in M\comp A$, there is some $c\in M$ realizing $\Gamma_{\!b}(x)$ as above, so $\tp^\mc{M}(\vec{a},b)$ is contained in $\tp^\mc{M}(f(\vec{a}),c)$. Thus $f\cup\l\{(b,c)\r\}$ is partial-elementary, as desired. That $\mc{M}$ is universal follows from the Lemma with $A\coloneqq\mc{N}$.
* <span style="color:gray">($2\Rightarrow1$).</span> Let $A\subseteq M$ with $\l|A\r|<\kappa$. Let $p\in S_1^\mc{M}(A)$, which can be realized in some elementary extension $\mc{N}_0\elemextend\mc{M}$. By Löwenheim-Skolem, we have an elementary substructure $A\subseteq\mc{N}\elemembed\mc{N}_0$ with $\l|N\r|<\kappa$ if $\kappa\neq\aleph_0$, and $\l|N\r|=\aleph_0$ otherwise, such that $p=\tp^\mc{N}(a/A)$ for some $a\in N$. Thus there is some $f:\mc{N}\eleminto\mc{M}$, and since $\l.f\r|_A$ is partial elementary, we have by $\kappa$-homogeneity that $p=\tp^\mc{N}(a/A)=\tp^\mc{M}(f(a)/f(A))=\tp^\mc{M}(b/A)$ for some $b\in M$. Thus $p$ is realized in $\mc{M}$, as desired.
* <span style="color:gray">($3\Rightarrow1$).</span>
