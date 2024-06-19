---
title: Free Group
date: 2024-06-03T15:36:38-04:00
references: [Alu09, Mac10]
tags: [In_Progress]
---

# Motivation & Definition

Fix a set $X$. We would like to ‘canonically’ construct a group $F(X)$ containing $X$ ‘in the most efficient way’. The latter is encoded by a {{< link file="universal_constructions" display="universal property" type="references" >}}, and the former makes $F:\catset\to\catgrp$ a {{< link file="adjunction" display="left-adjoint" type="references" >}} to the forgetful {{< link file="functor" display="functor" type="references" >}} $U:\catgrp\to\catset$.


{{< env "definition" >}}

Let $X$ be a set. A **free group** on $X$ is a group $F(X)$ equipped with a function $j:X\to F(X)$ that is universal in the following sense:

<br>

&emsp;&emsp;For every group $G$ and any function $f:X\to UG$, there is a unique group homomorphism $f':F(X)\to G$ such that $Ff'\circ j=f$.

{{< /env >}}

In other words, $(F(X),j)$ is the universal arrow from $X$ to $U$, and so is unique up to (unique) isomorphism.

# Constructions

## Classes of Words

<div class="space"></div>

## Reduced Words
