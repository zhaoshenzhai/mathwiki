---
title: Category
date: 2024-05-22T21:52:00-04:00
references: [Ref/Mac10]
tags: [Topic/Category_Theory]
---

The language of *categories* is dubbed ‘abstract nonsense’ $-$ not because it is nonsense $-$ but because it refers to *abstract structure* (as opposed to the *meaning* of what the structures represent). We start informally by making the following

{{< env "definition" >}}

A **category** $C$ consists of a class $\mc{O}$ of **objects**, and,
* for any two objects $x,y\in\mc{O}$, a class $C(x,y)$ of **morphisms** in $C$;
* for any object $x\in\mc{O}$, an **identity** morphism $1_x\in C(x,x)$,
* for any three objects $x,y,z\in\mc{O}$, a **composition map**
$$\begin{equation}
    \circ:C(y,z)\times C(x,y)\to C(x,z);
\end{equation}$$

subject to the following conditions.
* <span style="color:gray">(Associativity).</span> For all morphisms $f,g,h$ in the configuration
$$\begin{equation}
    x\overset{f}{\rightarrow}y\overset{g}{\rightarrow}z\overset{h}{\rightarrow}w
\end{equation}$$
we have $h\circ(g\circ f)=(h\circ g)\circ f$.
* <span style="color:gray">(Unit).</span> For all morphisms $f\in C(x,y)$, we have $f\circ1\_x=f=1\_y\circ f$.

{{< /env >}}


