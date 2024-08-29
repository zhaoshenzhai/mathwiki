---
title: Module
date: 2024-06-06T18:07:45-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $R$ be a (not-necessarily {{< link file="commutative_ring" display="commutative" type="references" >}}) {{< link file="ring" display="ring" type="references" >}}.

{{< env type="definition" >}}

A *(left) $R$-module* is an {{< link file="abelian_group" display="Abelian group" type="references" >}} $(M,+)$ equipped with a left {{< link file="monoid_action" display="$R$-action" type="references" >}} $R\to\End_\catabgrp(M)$. That is, a function $R\times M\to M$ such that
$$\begin{equation}
    r(m+n)=rm+rn,\ \ \ \ (r+s)m=rm+sm,\ \ \ \ (rs)m=r(sm),\ \ \ \ \mathit{and}\ \ \ \ 1m=m
\end{equation}$$
for all $r,s\in R$ and $m,n\in M$.

{{< /env >}}

The relevant structure-preserving maps for $R$-modules are as follows.

{{< env type="definition" >}}

A function $f:M\to N$ between $R$-modules is a *homomorphism* if it is a group homomorphism $f:(M,+)\to(N,+)$ such that
* <span style="color:gray">(Linearity).</span> For all $m\in M$ and $r\in R$, we have $f(rm)=rf(m)$.

{{< /env >}}

## The Category $\catmod[R]$

# General Techniques

## Linear Algebra

<div class="space"></div>

## Homological Algebra

# Examples and Generalizations

## Conditions on $R$

<div class="space"></div>

## Types of Modules
