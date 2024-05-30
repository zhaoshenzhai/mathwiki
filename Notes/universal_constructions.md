---
title: Universal Constructions
date: 2024-05-29T17:38:25-04:00
references: []
tags: []
---

# Motivation & Definition

## Universal Arrows

{{< env "definition" >}}

Let $F:D\to C$ be a functor and fix $c\in C$. A **universal arrow** from $c$ to $F$ is an initial object in $(c\downto F)$. That is, it is a pair $(r,u)$, with $r\in D$ and $u:c\to Fr$, making $\phi_d:\widetilde{f}\mapsto F\widetilde{f}\circ u$ a bijection of hom-sets for each $d\in D$:

{{< tikz name="universal_arrow" width="250" >}}
\begin{equation*}
    \begin{tikzcd}
        c \ar[r, "u"] \ar[dr, "f"'] & Fr \ar[d, "F\widetilde{f}"] & r \ar[d, "\ex!\widetilde{f}", dashed] \\
        & Fd & d
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

{{< /env >}}

## The Category of Elements

<br><br>

## Representable Functors

# The Yoneda Lemma

## Characterizations of Universality

# Examples

## Limits and Colimits

<br><br>

## Free Constructions

# Adjunctions and Kan Extensions
