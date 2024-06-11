---
title: Universal Constructions
date: 2024-05-29T17:38:25-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

## Universal Arrows

{{< env "definition" >}}

Let $F:D\to C$ be a functor and fix $c\in C$. A **universal arrow** from $c$ to $F$ is an initial object in $(c\downto F)$. That is, it is a pair $(r,u)$, with $r\in D$ and $u:c\to Fr$, inducing for each $d\in D$ a bijection
$$\begin{equation}
    \phi_d:D(r,d)\to C(c,Fd):f'\mapsto Ff'\circ u.
\end{equation}$$
This can be visualized as in the following diagram.

{{< tikz name="universal_arrow" width="250" >}}
\begin{equation*}
    \begin{tikzcd}
        c \ar[r, "u"] \ar[dr, "f"'] & Fr \ar[d, "Ff'"] & r \ar[d, "\ex!f'", dashed] \\
        & Fd & d
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

{{< /env >}}

**Remark.** The bijection $\phi_d$ is natural in $d$, for if $g':d\to d'$, then
$$\begin{equation}
    F(g'\circ f')\circ u=Fg'\circ(Ff'\circ u)
\end{equation}$$
for every morphism $f':r\to d$, making its naturality square commute. Conversely, by the {{< link file="yoneda_lemma" display="Yoneda Lemma" type="justifications" >}}, *every* natural isomorphism $\phi:D(r,\slot)\to C(c,F\slot)$ arises in this way via a unique universal arrow $u:c\to Fr$ from $c$ to $F$.<span style="float:right;">$\blacklozenge$</span>

<div class="space"></div>

## Representable Functors

# The Yoneda Lemma

## Characterizations of Universality

# Examples

## Limits and Colimits

<div class="space"></div>

## Free Constructions

# Adjunctions and Kan Extensions
