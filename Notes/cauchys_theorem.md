---
title: Cauchy’s Theorem
date: 2024-07-14T19:39:27-04:00
references: [Alu09]
tags: [In_Progress]
---

# Motivation & Statement

Let $G$ be a {{< link file="finite_group" display="finite group" type="references" >}}. By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="justifications" >}}, every {{< link file="subgroup" display="subgroup" type="references" >}} $H\substructeq G$ must have order dividing $|G|$. The converse is not necessarily true; that is, if $d$ divides $|G|$, there *may not* be a subgroup $H\substructeq G$ with order $d$.

<br>

&emsp;&emsp;*Cauchy’s Theorem* can be regarded as a partial converse thereof, stating that if $p$ is a *prime* divisor of $|G|$, then there is a ({{< link file="cyclic_group" display="cyclic" type="references" mod="space" >}}) subgroup $H\substructeq G$ of order $p$.

{{< env type="theorem" name="Cauchy" >}}

Let $G$ be a finite group. If $p$ is a prime divisor of $|G|$, then $G$ contains an element of {{< link file="order" display="order" type="references" >}} $p$.

{{< /env >}}

In fact, more is true, and $G$ has a subgroup of order $p^i$ for *every* $i\leq n$. This follows from the {{< link file="sylow_theorems" display="Sylow Theorems" type="generalizations" >}}, and can be proved from Cauchy’s Theorem by induction.

# Proof Techniques

## {{< link file="abelian_group" display="Abelian" type="references" >}} Case

If $G$ is abelian, then there is a proof obtained by analyzing the lattice of subgroups of $G$.

>{{< env type="proof" hide="true" name="Abelian case" >}}

We proceed by induction on $|G|$. Let $H\substruct G$ be a maximal, which exists sine $|G|$ is finite. If $p$ divides $|H|$, then we are done by induction, so suppose otherwise and set $K\coloneqq\gen{x}$. Since $G$ is abelian, we have $HK=KH$, and hence {{< link file="subgroup_products" type="proved_by" mod="dag" section="Criteria for $HK\substructeq G$" >}} $H\substruct HK\substructeq G$. Maximality of $H$ then forces $HK=G$, so
$$\begin{equation}
    |G|=|HK|=\frac{|H||K|}{|H\cap K|}.
\end{equation}$$
Thus $p$ divides $|H||K|$, so $p$ divides $|K|=\ord x$. Thus $\ord x=pk$ for some $k\in\N$, and hence $\ord x^k=p$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
