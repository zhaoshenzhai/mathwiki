---
title: Module
date: 2024-06-06T18:07:45-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $R$ be a {{< link file="ring.md" display="ring" type="references" >}}. Similarly to how a {{< link file="group.md" display="group" type="references" >}} $G\into\Aut X$ injects{{< link file="cayleys_theorem.md" type="justifications" mod="dag" secID="groups" secDisplay="Groups" >}} into some {{< link file="symmetry_group.md" display="symmetry group" type="references" >}} of a set $X$, and how this motivates us to study {{< link file="group_action.md" display="actions" type="references" >}} $G\to\Aut X$ in general, that $R\into\End M$ injects{{< link file="cayleys_theorem.md" type="justifications" mod="dag" secID="rings" secDisplay="Rings" >}} into an endomorphism ring of some {{< link file="abelian_group.md" display="abelian" type="references" >}} group motivates us to study ‘ring actions’ $R\to\End M$. Those ‘ring actions’ are called *$R$-modules*.

{{< env type="definition" >}}

A *left-$R$-module* is an abelian group $M$ equipped with a ring homomorphism $\sigma:R\to\End M$.

<br>

&emsp;&emsp;<span style="color:gray">Equivalently, it is the data of $M$ along with a map $\rho:R\times M\to M$, written $rm\coloneqq\rho(r,m)$, such that $r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$, and $1m=m$ for all $r,s\in R$ and $m,n\in M$.</span>

{{< /env >}}

A *right-$R$-module* is a left-$R^\textrm{op}$-module, where $R^\textrm{op}$ is the opposite ring. If $R$ is commutative, then this distinction is immaterial. In general, however, care must be taken to distinguish them, since in general $R\not\iso R^\textrm{op}$.

<br>

&emsp;&emsp;The relevant structure-preserving maps for $R$-modules are as follows.

{{< env type="definition" >}}

A function $f:M\to N$ between $R$-modules is an *$R$-module homomorphism* if it is a homomorphism between groups that preserves the actions <span style="color:gray">[$f(rm+n)=rf(m)+f(n)$ for all $r\in R$ and $m,n\in M$]</span>.

{{< /env >}}

In the case when $k\coloneqq R$ is a {{< link file="field.md" display="field" type="references" >}}, $k$-modules are called *{{< link file="vector_space.md" display="$k$-vector spaces" type="references" >}}* and $k$-vector space homomorphisms are called *$k$-linear maps*.

## The Category $\catmod[R]$

With $R$-module homomorphisms as morphisms, left-$R$-modules form a category $\catmod$. There is also have another category $\catrmod$ with *right*-$R$-modules. Either way, those two categories are complete and cocomplete, as witnessed by the standard constructions of biproducts, kernels, cokernels, subobjects, and quotients.

# General Techniques

## Linear Algebra

This refers primarily to the study of $k$-vector spaces for $k$ a field, but many results from linear algebra actually extend to $R$-modules for an arbitrary commutative ring $R$. Fix a commutative ring $R$.

<br>

&emsp;&emsp;Every set $I$ generates a {{< link file="free_module.md" display="free" type="constructions" >}} $R$-module $F^R(I)$ where maps $I\to M$ extend to unique homomorphisms $f:F^R(I)\to M$; in the case that $f$ is an isomorphism, we say that $I\to M$ is a *{{< link file="basis_module_theory.md" display="basis" type="constructions" >}}* for $M$. The modules that admit bases are said to be *{{< link file="free_module.md" display="free" type="types" >}}*, but not all modules are free. This is where additional assumptions on the ring $R$ come in.
* If $R$ is a field, then every $R$-module is free. In fact, an {{< link file="integral_domain.md" display="integral domain" type="references" >}} $R$ is a field iff every $R$-module is free.
* If $R$ is

## Homological Algebra

<span style="color:red">**TODO**.</span>

# Examples and Generalizations

## Conditions on $R$

<span style="color:red">**TODO**.</span>

## Types of Modules

<span style="color:red">**TODO**.</span>
