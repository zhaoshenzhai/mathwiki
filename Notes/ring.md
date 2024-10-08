---
title: Ring
date: 2024-06-06T15:26:58-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The concept of a *ring* naturally arises when studying the endomorphism {{< link file="group.md" display="group" type="references" >}} of an {{< link file="abelian_group.md" display="abelian" type="references" >}} group $G$. Indeed, $\End G$ is itself abelian, but more importantly, it has an extra operation of composition. These operations are compatible in the sense below.

{{< env type="definition" >}}

A *ring* is a tuple $(R,+,\cdot,0,1)$ consisting of a {{< link file="monoid.md" display="monoid" type="references" >}} $(R,\cdot,1)$ and an abelian group $(R,+,0)$, where the two structures are compatible in the following way: For all $r,s,t\in R$, we have the *distributive laws*
$$\begin{equation}
    (r+s)\cdot t=r\cdot t+s\cdot t\ \ \ \ \ \ \ \ \mathit{and}\ \ \ \ \ \ \ \ t\cdot(r+s)=t\cdot r+t\cdot s.
\end{equation}$$

{{< /env >}}

**Remark.** Note that although many rings arise as $\End(G)$ for some abelian group $G$, they do not exhaust all rings; a counterexample is the ring $\Z/2\Z\times\Z/2\Z$, or the family of rings $\F_{p^2}$ for $p$ prime (the latter are {{< link file="finite_field.md" display="finite fields" type="references" >}}). See, however, {{< link file="cayleys_theorem.md" display="Cayley’s Theorem" type="properties" >}} for rings, which states that every ring $R$ is a *{{< link file="subring.md" display="subring" type="constructions" >}}* of $\End(R)$, where $R$ is its underlying abelian group.

<div class="space"></div>

&emsp;&emsp;The relevant structure-preserving maps for rings are as follows.

{{< env type="definition" >}}

A function $f:R\to S$ between rings is a *homomorphism* if it is a homomorphism between groups that preserves identity <span style="color:gray">[$f(1_R)=1_S$]</span> and the multiplication operation <span style="color:gray">[$f(r_1\cdot r_2)=f(r_1)\cdot f(r_2)$ for all $r_1,r_2\in R$]</span>.

{{< /env >}}

<h2 class="hide" id="arithmetic_in_rings">Arithmetic in Rings</h2>

In this context, the operation $\cdot$ is often called *multiplication* (usually suppressed, so we write $rs$ for $r\cdot s$), which plays well with *addition*; for instance, we have $0r=r=r$ and $-r=(-1)r$ for all $r\in R$. However, ‘cancellation’ (i.e. $rs=rt$ implies $s=t$ for all $r\neq0$) does *not* hold in arbitrary rings. The issue is that there are elements $0\neq r\in R$ such that $rs=0$ for some $s\neq0$, which are called *(left-)zero-divisors*. Those are the only trouble makers, in that $r$ is a left-zero-divisor iff the left-multiplication map $s\mapsto rs$ fails to be injective.

>{{< env type="proof" hide="false" >}}

If $r$ is a left-zero-divisor, then $0,s\mapsto rs=0$ for some $s\neq0$. If not, and $rs=rt$, then $r(s-t)=rs-rt=0$, so $s=t$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

Another point to beware of is that elements may not be *(left)-units*, which are elements $r\in R$ such that $rs=1$ for some $s\in R$. These elements test whether the left-multiplication map is surjective or not.

>{{< env type="proof" hide="false" >}}

If $rs=1$ for some $s\in R$ and $t\in R$, then $r(st)=(rs)t=t$. If not, then $1$ is not in the image of this map.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

Thus one should be careful in the arithmetic of rings, but those pitfalls will be eliminated in special types of rings (namely, {{< link file="integral_domain.md" display="integral domains" type="references" >}} and {{< link file="division_ring.md" display="division rings" type="references" >}}, respectively).

<h2 id="category_of_rings">The {{< link file="category.md" display="Category" type="references" >}} of Rings</h2>

With ring homomorphisms as morphisms, rings form a category $\catring$. This category is{{< link file="catring_is_complete.md" type="justifications" mod="dag" >}} {{< link file="complete_category.md" display="complete" type="references" >}} and cocomplete, as witnessed by the standard constructions of products, coproducts, kernels, cokernels, {{< link file="subring.md" display="subobjects" type="constructions" >}}, and {{< link file="quotient_ring.md" display="quotients" type="constructions" >}}. We also have a {{< link file="functor.md" display="functor" type="references" >}} $\catring\to\catgrp$ taking a ring $R$ to its {{< link file="group_of_units.md" display="group of units" type="constructions" >}}, which is left-{{< link file="adjunction.md" display="adjoint" type="references" >}} to the {{< link file="group_ring.md" display="group ring" type="sufficiencies" >}} construction.

<br>

&emsp;&emsp;The zero-ring is clearly a final object. More importantly, the {{< link file="integers.md" display="integers" type="examples" >}} $\Z$ is an initial object.

>{{< env type="proof" hide="true" >}}

Indeed, for every ring $R$ there is a group homomorphism $f:\Z\to R$ sending $n\mapsto n1_R$, which is a ring homomorphism since
$$\begin{equation}
    f(nm)=(nm)1_R=n(m1_R)=(n1_R)(m1_R)=f(n)f(m)
\end{equation}$$
by distributivity; it is unique by the requirement that $f(1)=1_R$ and $f$ preserves addition.

{{< /env >}}

# Modules and Algebras

# Examples and Generalizations

## Types of Rings

Beyond the generalities above, much more can be said about specific types of rings.
* Commutative rings are those whose multiplication is commutative, and they are studied in the field of {{< link file="commutative_algebra.md" display="commutative algebra" type="references" >}}. <span style="color:gray">[In these notes, basically every ring is commutative, but we will always specify so.]</span>
* {{< link file="integral_domain.md" display="Integral domains" type="types" >}} are commutative rings with no non-zero zero-divisors. They abstract the properties of the {{< link file="integers.md" display="integers" type="examples" >}}, and they are stratified via their number-theoretic properties into {{< link file="unique_factorization_domain.md" display="UFDs" type="types" >}}, {{< link file="principal_ideal_domain.md" display="PIDs" type="types" >}}, and {{< link file="euclidean_domain.md" display="Euclidean domains" type="types" >}}.
* {{< link file="division_ring.md" display="Division rings" type="types" >}} are those in which every non-zero element is invertible. {{< link file="wedderburns_little_theorem.md" display="Wedderburn’s Little Theorem" type="properties" >}} states that all *finite* division rings are commutative, so they are finite fields.
* The most special rings are {{< link file="field.md" display="fields" type="types" >}}, which are commutative division rings, whose {{< link file="galois_theory.md" display="Galois theory" type="references" >}} kicked-off abstract algebra and led to the definition of groups.

<h2 class="noSpace">Monoid Objects</h2>
