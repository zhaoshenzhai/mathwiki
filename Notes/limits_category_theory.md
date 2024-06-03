---
title: Limits & Colimits
date: 2024-05-29T20:16:10-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix a category $C$.

{{< env "definition" >}}

Let $C,J$ be categories and fix a functor $F\in C^J$. A **colimit** of $F$ is a universal arrow $(r,u)$ from $F$ to the diagonal functor $\Delta:C\to C^J$.

{{< tikz name="limits_category_theory" width="425" >}}
\begin{equation*}
    \begin{tikzcd}
        t\eqqcolon\lim F\ar[r, "v"] & F \ar[r, "u"] \ar[dr, "f"'] & \colim F\coloneqq r \ar[d, "\ex!\widetilde{f}", dashed] \\
        c \ar[ur, "g"'] \ar[u, "\ex!\widetilde{g}", dashed] & & c
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

Similarly, a **limit** of $F$ is a universal arrow $(t,v)$ from $\Delta$ to $F$.

{{< /env >}}

## Representable Functors

<br><br>

## Universal Elements

# Examples

## (Co)products

<br><br>

## (Co)equalizers

<br><br>

## Fibered (Co)products

<br><br>

## Directed (Co)limits
