---
title: Ring
date: 2024-06-06T15:26:58-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The concept of a *ring* naturally arises when studying the endomorphism {{< link file="group" display="group" type="references" >}} of an {{< link file="abelian_group" display="abelian" type="references" >}} group $G$. Indeed, $\End G$ is itself abelian $-$ but more importantly, it has an extra operation of composition. These operations are compatible in the sense that:

{{< env type="definition" >}}

A **ring** is a monoid $(R,\cdot,1)$ equipped with the structure of an abelian group $(R,+,0)$ such that for all $r,s,t\in R$, we have
$$\begin{equation}
    (r+s)\cdot t=r\cdot t+s\cdot t\ \ \ \ \ \ \ \ \mathit{and}\ \ \ \ \ \ \ \ t\cdot(r+s)=t\cdot r+t\cdot s.
\end{equation}$$

{{< /env >}}

The relevant structure-preserving maps for rings are as follows.

{{< env type="definition" >}}

A function $f:R\to S$ between rings is a **homomorphism** if it is a group homomorphism $f:(R,+)\to(S,+)$, such that $f(1_R)=1_S$ and
$$\begin{equation}
    f(r_1\cdot r_2)=f(r_1)\cdot f(r_2)
\end{equation}$$
for all $r_1,r_2\in R$.

{{< /env >}}

## The Category $\catring$

This category is {{< link file="catring_is_complete" type="justifications" mod="dag" >}} {{< link file="complete_category" display="complete" type="references" >}} and cocomplete, witnessed by the standard constructions of products, coproducts, kernels, cokernels, subobjects, and quotients.

# Modules and Algebras



<span style="color:red">Fill this in...</span>

# Examples and Generalizations

## Types of Rings

Beyond the generalities above, much more can be said about specific types of rings.
* {{< link file="commutative_ring" display="Commutative rings" type="types" >}} are those whose multiplication is commutative, and they are studied in the field of {{< link file="commutative_algebra" display="commutative algebra" type="references" >}}.
* {{< link file="integral_domain" display="Integral domains" type="types" >}} are commutative rings with no non-zero zero-divisors. They abstract the properties of the {{< link file="integers" display="integers" type="examples" >}}, and they are stratified via their number-theoretic properties into {{< link file="unique_factorization_domain" display="UFDs" type="types" >}}, {{< link file="principal_ideal_domain" display="PIDs" type="types" >}}, and {{< link file="euclidean_domain" display="Euclidean domains" type="types" >}}.
* {{< link file="division_ring" display="Division rings" type="types" >}} are those in which every non-zero element is invertible.
* The most special rings are {{< link file="field" display="fields" type="types" >}}, which are commutative division rings, whose {{< link file="galois_theory" display="Galois theory" type="references" >}} kicked-off abstract algebra and led to the definition of groups.

## Monoid Objects
