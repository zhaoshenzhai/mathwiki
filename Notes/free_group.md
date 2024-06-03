---
title: Free Group
date: 2024-06-03T15:36:38-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix a set $X$. We would like to construct a group $F(X)$ containing $X$ ‘canonically’ and ‘in the most efficient way’. The latter is encoded by a universal property, and the former makes $F:\catset\to\catgrp$ a left-adjoint to the forgetful functor $U:\catgrp\to\catset$.


{{< env "definition" >}}

Let $X$ be a set. A **free group** on $X$ is a group $F(X)$ equipped with a function $j:X\to F(X)$ that is universal in the following sense:

<br>

&emsp;&emsp;For every group $G$ and any function $f:X\to UG$, there is a unique group homomorphism $f':F(X)\to G$ such that $Ff'\circ j=f$.

{{< /env >}}

Stated otherwise, $(F(X),j)$ is the universal arrow from $X$ to $U$, and so is unique up to (unique) isomorphism.
