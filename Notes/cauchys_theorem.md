---
title: Cauchy’s Theorem
date: 2024-07-14T19:39:27-04:00
references: [Alu09]
tags: [In_Progress]
---

# Motivation & Statement

Let $G$ be a {{< link file="finite_group" display="finite group" type="references" >}}. By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="justifications" >}}, every {{< link file="subgroup" display="subgroup" type="references" >}} $H\substructeq G$ must have order dividing $|G|$. The converse is not necessarily true; that is, if $d$ divides $|G|$, there *may not* be a subgroup $H\substructeq G$ with order $d$.

<br>

&emsp;&emsp;*Cauchy’s Theorem* can be regarded as a partial converse, stating that if $p$ is a *prime* divisor of $|G|$, then there is a ({{< link file="cyclic_group" display="cyclic" type="references" mod="space" >}}) subgroup $H\substructeq G$ of order $p$.

{{< env type="theorem" name="Cauchy" >}}

Let $G$ be a finite group. If $p$ is a prime divisor of $|G|$, then $G$ contains an element of {{< link file="order" display="order" type="references" >}} $p$.

{{< /env >}}

# {{< link file="abelian_group" display="Abelian" type="references" >}} Case
