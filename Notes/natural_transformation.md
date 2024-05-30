---
title: Natural Transformation
date: 2024-05-29T13:41:19-04:00
references: []
tags: []
---

# Motivation & Definition

{{< env "definition" >}}

Let $F,G:C\to D$ be covariant functors between categories $C$ and $D$. A **natural transformation** $\eta:F\to G$ is a function assigning to each $c\in C$ a morphism $\eta_c:Fc\to Gc$ of $D$ such that for every $f\in C(c,c')$, the diagram

{{< tikz name="natural_transformation" width="275" >}}
\begin{equation*}
    \begin{tikzcd}
        c \ar[d, "f"] & Fc \ar[d, "Ff"'] \ar[r, "\eta_c"] & Gc \ar[d, "Gf"] \\
        c' & Fc' \ar[r, "\eta_{c'}"] & Gc'
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

commutes.

{{< /env >}}
