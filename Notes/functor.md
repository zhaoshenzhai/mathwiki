---
title: Functor
date: 2024-05-28T16:05:23-04:00
references: []
tags: []
---

# Motivation & Definition

{{< env type="definition" >}}

Let $C$ and $D$ be categories. A **(covariant) functor** $F:C\to D$ is the data of two functions:
* An **object** function, assigning some $Fc\in D$ to each $c\in C$, and
* A **morphism** function, assigning some $Ff:Fc\to Fc'$ to each $f:c\to c'$,

interacting in such a way that
$$\begin{equation}
    F1_c=1_{Fc}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ F(f\circ g)=Ff\circ Fg
\end{equation}$$
for all objects $c\in C$ and morphisms $f,g\in C$ whenever $f\circ g\in C$ is defined.

{{< /env >}}

## The Category of Categories
