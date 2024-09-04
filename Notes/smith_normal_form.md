---
title: Smith Normal Form
date: 2024-09-03T21:43:56-04:00
references: []
tags: [In_Progress]
---

# Motivation & Statement

{{< env type="theorem" name="Smith Normal Form" >}}

Let $R$ be a {{< link file="principal_ideal_domain.md" display="PID" type="references" >}}.

{{< /env >}}

# Algorithms for the Smith Normal Form

To this end, consider the following operations a matrix $A\in\mc{M}_{m\times n}(R)$, which we illustrate with $R\coloneqq\\,${{< link file="integers" display="$\Z$" type="references" >}}, $n\coloneqq3$, and $m\coloneqq2$.
* *Switch two rows/columns*, which can be done with the identity matrix but with the rows/columns swapped.
* *Add a multiple of one row/column to another*, which can be done with the identity matrix but with the multiple in a zero entry.
* *Multiply a row/column by a unit*, which can be done with the identity matrix but with a $1$ on the diagonal replaced by said unit.
$$\begin{equation}
    \begin{pmatrix}
        1 & 2 \\\\
        3 & 4 \\\\
        5 & 6
    \end{pmatrix}
    \begin{pmatrix}
        0 & 1 \\\\
        1 & 0
    \end{pmatrix}=
    \begin{pmatrix}
        2 & 1 \\\\
        4 & 3 \\\\
        6 & 5
    \end{pmatrix}\ \ \ \ \ \ \ \ 
    \begin{pmatrix}
        1 & 2 \\\\
        3 & 4 \\\\
        5 & 6
    \end{pmatrix}
    \begin{pmatrix}
        1 & m \\\\
        0 & 1
    \end{pmatrix}=
    \begin{pmatrix}
        1 & 2+m \\\\
        3 & 4+3m \\\\
        5 & 6+5m
    \end{pmatrix}\ \ \ \ \ \ \ \ 
    \begin{pmatrix}
        1 & 2 \\\\
        3 & 4 \\\\
        5 & 6
    \end{pmatrix}
    \begin{pmatrix}
        u & 0 \\\\
        0 & 1
    \end{pmatrix}=
    \begin{pmatrix}
        1u & 2 \\\\
        3u & 4 \\\\
        5u & 6
    \end{pmatrix}
\end{equation}$$

The first operation is an involution, and the inverses of the other two are obtained by the same operations by replacing the unit (resp. multiple) by its multiplicative (resp. additive) inverse. Thus, the *elementary matrices* corresponding to those operations are invertible, so we can multiply $A$ on the left and right by said matrices to reduce it down to a simpler form.

<div class="space"></div>

## Over {{< link file="field.md" display="Fields" type="references" >}}

<div class="space"></div>

## Over {{< link file="euclidean_domain.md" display="Euclidean Domains" type="references" >}}
