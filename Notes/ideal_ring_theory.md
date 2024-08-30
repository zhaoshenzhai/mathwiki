---
title: Ideal (Ring Theory)
date: 2024-06-06T19:14:55-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix a {{< link file="ring" display="ring" type="references" >}} $R$. Its underlying {{< link file="abelian_group" display="abelian group" type="references" >}} $G$ admits a notion of {{< link file="congruence_relation" display="congruences" type="references" >}}, which are {{< link file="equivalence_relation" display="equivalence relations" type="references" >}} $\sim$ on $G$ that respect the group structure, and those correspond exactly to{{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Congruence" >}} {{< link file="normal_subgroup" display="normal subgroups" type="references" >}} of $G$. Since $G$ is abelian, they correspond to all subgroups.

<br>

&emsp;&emsp;However, the presence of the multiplication operation motivates us to consider congruences on $G$ that also respect multiplication, in that $r_1\sim r_2$ and $s_1\sim s_2$ implies $r_1s_1\sim r_2s_2$. It turns out that those congruences correspond directly to special subgroups of $G$ (*not* {{< link file="subring" display="subrings" type="references" >}} of $R$), namely, the *ideals*:

<div class="space"></div>

**Remark.** Just like how $G$ can be viewed as a {{< link file="groupoid" display="groupoid" type="references" >}} with a single object, $R$ can be viewed as a {{< link file="preadditive_category" display="preadditive category" type="references" >}} with a single object. Then, the ‘special congruences’ discussed above are the actual congruences in this category. <span style="color:red">**TODO** (verify this).</span>

{{< env type="definition" >}}

Let $R$ be a ring. A *left ideal* in $R$ is a subgroup $(\mf{a},+)\substructeq R$ such that $r\mf{a}\subseteq\mf{a}$ for all $r\in R$.

<br>

&emsp;&emsp;Similarly for *right* ideals and *(two-sided) ideals*. If $\mf{a}\substructeq R$ is an ideal, we write $\mf{a}\nsubgrpeq R$.

{{< /env >}}

Essentially the same proof that normal subgroups correspond to congruences for groups works here:

>{{< env type="proof" hide="true" >}}

Given a congruence $\sim$, the subset $\mf{a}\coloneqq\l\\{r\in R\st n\sim0\r\\}$ is a subgroup of $R$. For all $r\in R$, we have $rn\sim r0=0$, so $r\mf{a}\subseteq\mf{a}$. Similarly, we have $\mf{a}r\subseteq\mf{a}$, so $\mf{a}$ is a two-sided ideal.

<br>

&emsp;&emsp;Conversely, given a two-sided ideal $\mf{a}\nsubgrpeq R$, the relation $\sim$ on $R$ defined by $r_1\sim r_2$ iff $r_1-r_2\in\mf{a}$ is an equivalence relation respecting addition. It respects multiplication too, since if $r_1\sim r_2$ and $s_1\sim s_2$, then $r_1-r_2\in\mf{a}$ and $s_1-s_2\in\mf{a}$, and hence
$$\begin{equation}
    r_1s_1-r_2s_2=r_1s_1-r_1s_2+r_1s_2-r_2s_2=r_1(s_1-s_2)+(r_1-r_2)s_2\in\mf{a}.\qedin
\end{equation}$$

{{< /env >}}

Ideals $\mf{a}\nsubgrpeq R$ turn out to be exactly the objects one can {{< link file="quotient_ring.md" display="quotient" type="references" >}} $R$ with so that $\pi:R\onto R/\mf{a}$ is a ring homomorphism. In this case, we have $\ker\pi=\mf{a}$, and conversely, the kernel of any ring homomorphism $f:R\to S$ is an ideal. This gives us a three-fold equivalence between congruences of $R$, ideals in $R$, and quotients of $R$.

<div class="space"></div>

## Arithmetic of Ideals

# Prime & Maximal Ideals
