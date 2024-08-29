---
title: Ideal
date: 2024-06-06T19:14:55-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix a {{< link file="ring" display="ring" type="references" >}} $R$. Its underlying {{< link file="abelian_group" display="abelian group" type="references" >}} $G$ admits a notion of {{< link file="congruence_relation" display="congruences" type="references" >}}, which are {{< link file="equivalence_relation" display="equivalence relations" type="references" >}} $\sim$ on $G$ that respect the group structure, and those correspond exactly to{{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Congruence" >}} {{< link file="normal_subgroup" display="normal subgroups" type="references" >}} of $G$. Since $G$ is abelian, they correspond to all subgroups.

<br>

&emsp;&emsp;However, the presence of the multiplication operation motivates us to consider congruences on $G$ that also respect multiplication, in that $r_1\sim r_2$ and $s_1\sim s_2$ implies $r_1s_1\sim r_2s_2$. It turns out that those congruences correspond directly to special subgroups of $G$ (*not* {{< link file="subring" display="subrings" type="references" >}} of $R$), namely, the *ideals*:

<div class="space"></div>

**Remark.** Just like how $G$ can be viewed as a {{< link file="groupoid" display="groupoid" type="references" >}} with a single object, $R$ can be viewed as a {{< link file="preadditive_category" display="preadditive category" type="references" >}} with a single object. Then, the ‘special congruences’ discussed above are the actual congruences in this category.

{{< env type="definition" >}}

Let $R$ be a ring. A *left ideal* in $R$ is a subgroup $(\mf{a},+)\substructeq R$ such that $r\mf{a}\subseteq\mf{a}$ for all $r\in R$.

<br>

&emsp;&emsp;Similarly for *right* ideals and *(two-sided)* ideals.

{{< /env >}}
