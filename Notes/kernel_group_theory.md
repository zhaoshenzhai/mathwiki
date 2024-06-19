---
title: Kernel (Group Theory)
date: 2024-06-06T21:08:25-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Motivation & Definition

A special property of the {{< link file="category" display="category" type="references" >}} of {{< link file="group" display="groups" type="references" >}} is the existence of a {{< link file="initial_object" display="zero" type="references" >}} object; namely, the trivial group $\l\\{0\r\\}$; by definition, we have a morphism $0:G\to\l\\{0\r\\}\to H$ for each pair $G,H$ of groups. Now, for an arbitrary homomorphism $f:G\to H$, we would like to find some group $K$ that ‘forces’ $f$ to ‘equalize’ with $0$ in a {{< link file="universal_constructions" display="universal" type="references" >}} way. This can be done in two $-$ dual $-$ ways, called the *kernel* and *cokernel* of $f$.

<div class="space"></div>

The first is to consider homomorphisms $\alpha:K\to G$ *from* some group $K$, and replace $f$ by $f\circ\alpha:K\to H$. One way to force $f\circ\alpha=0$ is accomplished by the following

{{< env "definition" >}}

The **kernel** of a homomorphism $f:G\to H$ is the {{< link file="subgroup" display="subgroup" type="references" >}}
$$\begin{equation}
    \ker f\coloneqq\l\\{g\in G\st f(g)=e_H\r\\}\substructeq G.
\end{equation}$$

{{< /env >}}

Clearly, $\iota:\ker f\to G$ composes with $f$ to the trivial map. It is moreover {{< link file="catgrp_is_complete" mod="dag" type="justifications" section="Kernels/Cokernels" >}} the ‘most efficient’ way of doing so, in the sense that it is the terminal object in the slice category $(K,\alpha:K\to G)$ making $f\circ\alpha=0$; this can then be interpreted as a  {{< link file="limits_category_theory" display="colimit" type="references" >}}.

<div class="space"></div>

## {{< link file="normal_subgroup" display="Normal Subgroups" type="references" >}}

Kernels of homomorphisms are very special subgroups, in that they correspond precisely to the normal ones.
<br>

&emsp;&emsp;Indeed, if $f:G\to H$ is a homomorphism, then $g(\ker f)g^{-1}=\ker f$ for each $g\in G$ and so $\ker f\nsubgrpeq G$ is normal. Conversely, every normal subgroup $N\nsubgrpeq G$ is the kernel of the {{< link file="quotient_group" display="canonical projection" type="references" >}} $\pi:G\onto G/N$.

# Cokernel

Dually, we consider maps $\beta:H\to K$ *to* some group $K$. The *cokernel* of $f$ is the initial object in the coslice category $(K,\beta:H\to K)$ making $\beta\circ f=0$. It can {{< link file="catgrp_is_complete" mod="dag" type="justifications" section="Kernels/Cokernels" >}} be realized as the canonical {{< link file="quotient_group" display="projection" type="references" >}} $\pi:H\to H/\gen{\im f}_N$, where $\gen{\slot}_N$ takes the {{< link file="normal_subgroup" display="normal closure" type="references" section="Normal Closure" >}}, that is, the smallest normal subgroup containing $\im f$.

<br>

&emsp;&emsp;However, $\l\langle\im f\r\rangle_N$ is not easy to describe at all, so the notion of a cokernel is not that useful in $\catgrp$. However, since $\l\langle\im f\r\rangle_N=\im f$ when $f:G\to H$ is a morphism in $\catabgrp$, we obtain a much more well-behaved cokernel.
