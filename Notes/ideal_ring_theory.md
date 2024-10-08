---
title: Ideal (Ring Theory)
date: 2024-06-06T19:14:55-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix a {{< link file="ring.md" display="ring" type="references" >}} $R$. Its underlying {{< link file="abelian_group.md" display="abelian group" type="references" >}} $G$ admits a notion of {{< link file="congruence_relation.md" display="congruences" type="references" >}}, which are {{< link file="equivalence_relation.md" display="equivalence relations" type="references" >}} $\sim$ on $G$ that respect the group structure, and those correspond exactly to{{< link file="normal_subgroup.md" type="justifications" mod="dag" secID="normal_iff_congruence" secDisplay="Normal $\Leftrightarrow$ Congruence" >}} {{< link file="normal_subgroup.md" display="normal" type="references" >}} {{< link file="subgroup.md" display="subgroups" type="references" >}} of $G$. Since $G$ is abelian, they correspond to all subgroups.

<br>

&emsp;&emsp;However, the presence of the multiplication operation motivates us to consider congruences on $G$ that also respect multiplication, in that $r_1\sim r_2$ and $s_1\sim s_2$ implies $r_1s_1\sim r_2s_2$. It turns out that those congruences correspond directly to special subgroups of $G$ (*not* {{< link file="subring.md" display="subrings" type="references" >}} of $R$), namely, the *ideals*:

<div class="space"></div>

**Remark.** Just like how $G$ can be viewed as a {{< link file="groupoid.md" display="groupoid" type="references" >}} with a single object, $R$ can be viewed as a {{< link file="preadditive_category.md" display="preadditive category" type="references" >}} with a single object. Then, the ‘special congruences’ discussed above are the actual congruences in this category. <span style="color:red">**TODO** (verify this).</span>

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

Ideals $\mf{a}\nsubgrpeq R$ turn out to be exactly the objects one can {{< link file="quotient_ring.md" display="quotient" type="references" >}} $R$ with so that $\pi:R\onto R/\mf{a}$ is a ring homomorphism. In this case, we have $\ker\pi=\mf{a}$, and conversely, the kernel of any ring homomorphism $f:R\to S$ is an ideal. This gives us a three-fold equivalence between congruences of $R$, ideals in $R$, and kernels of homomorphisms $f:R\to S$.

<br>

&emsp;&emsp;If $R$ is commutative, then special types of ideals reflect special properties of quotients of $R$. Most notably, an ideal $\mf{p}\nsubgrpeq R$ is *{{< link file="prime_and_maximal_ideals.md" display="prime" type="types" >}}* iff $R/\mf{q}$ is an {{< link file="integral_domain.md" display="integral domain" type="references" >}}, and an ideal $\mf{m}\nsubgrpeq R$ is *{{< link file="prime_and_maximal_ideals.md" display="maximal" type="types" >}}* iff $R/\mf{m}$ is a {{< link file="field.md" display="field" type="references" >}}.

## Generation of Ideals

Just like how any subset $A\subseteq G$ of a group $G$ {{< link file="subgroup.md" display="generates" type="references" secID="subgroup_generation" secDisplay="Subgroup Generation" >}} a subgroup $\gen{A}\substructeq G$, subsets $A\subseteq R$ of a ring $R$ generates an ideal in the same way. We first need to note that an intersection $\bigcap_\alpha\mf{a}_\alpha$ of (left/right-)ideals is still an (left/right-)ideal.
* <span style="color:gray">(Explicitly).</span> The most direct construction is by letting $\gen{A}$ be the set of all finite sums $\sum_{i<n}r_ia_is_i$ for some $a_i\in A$ and $r_i,s_i\in R$, which makes $\gen{A}\nsubgrpeq R$. To generate a left ideal $RA$ (resp. right ideal $AR$), we only include the sums $\sum_{i<n}r_ia_i$ (resp. $\sum_{i<n}a_is_i$).
* <span style="color:gray">(Top-down).</span> We can let $\gen{A}$ be the intersection of all (left/right) ideals of $R$ containing $A$.
* <span style="color:gray">(Bottom-up).</span> We can construct $\gen{A}$ starting with $A$ and inductively closing it under addition and (left/right-)multiplication by $R$.

An ideal $\mf{a}\nsubgrpeq R$ is said to be *principal* if $\mf{a}$ is generated by single element. More generally, $\mf{a}$ is *finitely-generated* if $\mf{a}=\gen{a_1,\dots,a_n}$.

## Arithmetic of Ideals

Other than the intersection, there are several other operations of ideals. The two most important ones are their *sum* and their *product*.
1. For an arbitrary family $\mf{\alpha}\_\alpha\nsubgrpeq R$ of ideals, their *sum* is the ideal $\sum\_\alpha\mf{a}\_\alpha$ consisting of all finite sums $\sum\_\alpha r\_\alpha$ where $r\_\alpha\in\mf{a}\_\alpha$ vanishes for cofinitely-many $\alpha$. Equivalently, it is the ideal generated by $\bigcup_\alpha\mf{a}_\alpha$.
2. Their *product* of ideals $\mf{a},\mf{b}\nsubgrpeq R$ is the ideal $\mf{a}\mf{b}$ generated by the set of all products $ab$ for $a\in\mf{a}$ and $b\in\mf{b}$. Similarly for the product of *finitely-many* ideals (but *not* for infinite products). It is clear that $\mf{a}\mf{b}\subseteq\mf{a}\cap\mf{b}$, but the converse is not necessarily true.
