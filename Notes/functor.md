---
title: Functor
date: 2024-05-28T16:05:23-04:00
references: []
tags: []
---

# Motivation & Definition

{{< env type="definition" >}}

Let $C$ and $D$ be categories. A *(covariant) functor* $F:C\to D$ is the data of two functions:
* an *object* function, assigning some $Fc\in D$ to each $c\in C$, and
* a *morphism* function, assigning some $Ff:Fc\to Fc'$ to each $f:c\to c'$,

such $F$ preserves identities <span style="color:gray">[$F1_c=1_{Fc}$ for all $c\in C$]</span> and compositions <span style="color:gray">[$F(f\circ g)=Fg\circ Ff$]</span>.

<br>

&emsp;&emsp;A *contravariant functor* is a covariant functor $F:C^\textrm{op}\to D$.

{{< /env >}}

## The Category of Categories
