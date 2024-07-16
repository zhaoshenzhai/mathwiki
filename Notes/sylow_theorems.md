---
title: The Sylow Theorems
date: 2024-07-16T14:47:17-04:00
references: [Alu09]
tags: [Group_Theory, In_Progress]
---

# Motivation & Statements

Let $G$ be a {{< link file="finite_group" display="finite group" type="references" >}}. By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="references" >}}, every {{< link file="subgroup" display="subgroup" type="references" >}} $H\substructeq G$ must have order dividing $|G|$. The converse is not necessarily true; that is, if $d$ divides $|G|$, there *may not* be a subgroup $H\substructeq G$ with order $d$.

<br>

&emsp;&emsp;However, that $\Z$ is a {{< link file="unique_factorization_domain" display="UFD" type="references" >}} motivates us to write $|G|=p^rm$ for some prime $p$ and some $m$ not dividing $p$. Then, it turns out that there is a subgroup $S_p\substructeq G$ with order $p^r$, called a *$p$-Sylow subgroup* of $G$, and we a lot of control over their existence (*Sylow I*), their relations (*Sylow II*), and the number of $p$-Sylow subgroups (*Sylow III*):

{{< env type="theorem" name="The Sylow Theorems" >}}

Let $G$ be a finite group and let $p$ be a prime divisor of $|G|$. Write $|G|=p^rm$, with $m\perp p$.
1. <span style="color:gray">(Sylow I).</span> $G$ contains a $p$-Sylow subgroup, and every $p$-subgroup $H\substructeq G$ is contained in conjugates thereof.
2. <span style="color:gray">(Sylow II).</span> All $p$-Sylow subgroups of $G$ are conjugate.
3. <span style="color:gray">(Sylow III).</span> Letting $n_p$ be the number of $p$-Sylow subgroups of $G$, we have $n_p\equiv1\\,\mod\\,p$ and $n_p\divides m$.

{{< /env >}}

This also gives a strengthening of {{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="references" >}}, which states that $G$ contains a subgroup $H_p$ of order $p$.

# Stricture of $p$-subgroups

The proof of the Sylow Theorems essentially boil down to analyzing the structure of its $p$-subgroups.
