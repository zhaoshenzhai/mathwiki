---
title: The Sylow Theorems
date: 2024-07-16T14:47:17-04:00
references: [Alu09]
tags: [Group_Theory/Later]
---

# Motivation & Statements

How many subgroups does a {{< link file="finite_group.md" display="finite group" type="references" >}} $G$ have? And can we classify them to study $G$ itself? Well, by {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="references" >}}, every {{< link file="subgroup.md" display="subgroup" type="references" >}} $H\substructeq G$ must have order dividing $|G|$, so this limits their possibilities. A natural question to ask at this point is whether this is the *only* restriction, that is, if $d$ divides $|G|$, does there necessarily exist a subgroup $H\substructeq G$ of order $G$? Alas, this is not true, since $G\coloneqq A_4$ has no subgroup of order $6$.
<br>
&emsp;&emsp;However, that $\Z$ is a {{< link file="unique_factorization_domain.md" display="UFD" type="references" >}} motivates us to write $|G|=p^rm$ for some prime $p$ not dividing $m$, so we can focus on the existence of subgroups one prime at a time. Then, it turns out that there is a subgroup $S_p\substructeq G$ with order $p^r$, called a *{{< link file="p_group.md" display="$p$-Sylow subgroup" type="references" >}}* of $G$, and we a lot of control over their existence (*Sylow I*), their structure (*Sylow II*), and the number of such $p$-Sylow subgroups (*Sylow III*):
<div class="space"></div>
{{< env type="theorem" name="The Sylow Theorems" >}}

Let $G$ be a finite group and write $|G|=p^rm$ for some prime $p$ with $m\perp p$.
1. <span style="color:gray">(Sylow I).</span> $G$ contains a $p$-Sylow subgroup $S_p$ and every $p$-subgroup $H\substructeq G$ extends to a $p$-Sylow subgroup.
2. <span style="color:gray">(Sylow II).</span> All $p$-Sylow subgroups of $G$ are conjugate.
3. <span style="color:gray">(Sylow III).</span> The number $n_p$ of all $p$-Sylow subgroups of $G$ divides $m$ and is congruent to $1$ modulo $p$. {{< /env >}}

This is nice! It gives precise quantitative control over a large class of subgroups of $G$, which is a major step towards understanding the structure of $G$ itself. For instance, if we know via *Sylow III* that $G$ admits a unique $p$-Sylow subgroup $P$, then it is automatically {{< link file="normal_subgroup.md" display="normal" type="references" >}} by *Sylow II*, and this allows us to form the {{< link file="quotient_group.md" display="quotient" type="references" >}} $G/P$, which has order $m<|G|$.

# Proof of the Sylow Theorems

Essentially, the proof of all three Sylow Theorems boil down to careful application of the ‘{{< link file="p_group.md" display="fixed point theorems" type="proved_by" secID="fixed_point_theorems_of_p_groups" secDisplay="Fixed-point Theorems for $p$-groups" >}} for $p$-groups’, which is extremely simple: if we have an action $\phi:P\act X$ of a $p$-group on a finite set, then $|Z|\equiv|X|\\,\mod\\,p$ where $Z$ is the fixed points of $\phi$.

<h2 id="cauchys_theorem">Cauchy’s Theorem</h2>

Subgroups $P\substructeq G$ with order $p^s$ for some $s\leq r$ are called the *$p$-subgroups* of $G$, so we need to understand their structure. The fundamental lemma that drives *Sylow I* is that they exist when $s=1$:

{{< env type="theorem" name="Cauchy" >}}

If $G$ is a finite group and $p$ is a prime divisor of $|G|$, then $G$ contains an element of order $p$. {{< /env >}}

We give two proofs. The first illustrates the ‘{{< link file="abelian_group.md" display="abelian" type="references" >}} $\rightsquigarrow$ {{< link file="conjugation_action.md" display="center" type="references" >}}’ technique, and the second is an application of the {{< link file="fixed_point_theorems_of_p_groups.md" display="fixed point theorems" type="references" secDisplay="Non-triviality of $Z(G)$" secID="non-triviality_of_Z(G)" >}}.
<div class="space"></div>
{{< env type="proof" hide="false" name="abelian $\rightsquigarrow$ center" >}}

First, consider the case when $G$ is abelian. We proceed by induction on $|G|$, so let $H\substruct G$ be maximal. If $p$ divides $|H|$, then we are done by induction, so suppose otherwise and set $K\coloneqq\gen{x}$. Since $G$ is abelian, we have $HK=KH$, and hence we have{{< link file="subgroup_products.md" type="proved_by" mod="dag" secID="criteria_for_subgroup_product" secDisplay="Criteria for $HK\substructeq G$" >}} $H\substruct HK\substructeq G$. Maximality of $H$ then forces $HK=G$, so $|G|=|HK|=|H||K|/|H\cap K|$. Thus $p$ divides $|H||K|$, so $p$ divides $|K|=\ord x$. Writing $\ord x=pk$ for some $k\in\N$, we see that $\ord x^k=p$ is as desired.
<br>
&emsp;&emsp;In general, consider the abelian subgroup $Z(G)\substructeq G$. If $p$ divides $|Z(G)|$, we are done. Otherwise, by the {{< link file="the_class_equation.md" display="Class Equation" type="proved_by" >}} we have
$$\begin{equation}
    |G|=|Z(G)|+\sum_{a\in A}[G:Z_G(a)],
\end{equation}$$
where $A\subseteq G$ is a transversal of non-trivial conjugacy classes. Since $p$ divides $|G|$ but not $|Z(G)|$, this furnishes some $a\in A$ such that $p\ndivides[G:Z_G(a)]$, so $p$ divides $|Z_G(a)|$. Finally, since $a\not\in Z(G)$, the subgroup $Z_G(a)\substruct G$ is proper, so we are done by induction.<span style="float:right;">$\blacksquare$</span> {{< /env >}}
<div class="space"></div>
{{< env type="proof" hide="false" name="fixed point theorem" >}}

Let $S\subseteq G^p$ be the subset of tuples $(x_1,\dots,x_p)$ such that $x_1\cdots x_p=e$. Then $|S|=|G|^{p-1}$, so $p$ divides $|S|$. Moreover, $S$ is closed under cyclic permutations, so we have an action $\phi:\Z/p\Z\act S$ generated by $1\cdot(x_1,\dots,x_p)\coloneqq(x_2,\dots,x_p,x_1)$.
<br>
&emsp;&emsp;Observe that $\Z/p\Z$ is a $p$-group, so{{< link file="fixed_point_theorems_of_p_groups.md" type="proved_by" mod="dag" secDisplay="Non-triviality of $Z(G)$" secID="non-triviality_of_Z(G)" >}} $|Z|\equiv|S|\\,\mod\\,p$ where $Z$ is the fixed-points of $\phi$. Thus $p\geq2$ divides $|Z|$ too, so $|Z|>1$. But elements in $Z$ are $(x,\dots,x)\in S$ for $x\in G$, so there is some non-trivial $x\in G$ with $x^p=e$, as desired.<span style="float:right;">$\blacksquare$</span> {{< /env >}} <div class="space"></div>

## Tower of $p$-subgroups

We now construct a tower of $p$-subgroups with composition factors of order $p$, so with the existence of the base case, *Sylow I* follows
by repeated application of the following Proposition. First, we need a lemma.

{{< env type="lemma" >}}

If $H\substructeq G$ is a $p$-subgroup, then{{< link file="conjugation_action.md" type="references" secID="action_on_subgroups" secDisplay="Action on Subgroups" mod="dag" >}} $[N_G(H):H]\equiv[G:H]\\,\mod\\,p$. {{< /env >}}

{{< env type="proof" hide="false" >}}

We are done if $H$ is trivial. Otherwise, $H$ acts on $G/H$ by left-multiplication, whose fixed-points are the cosets $gH$ such that $h(gH)=gH$ for all $h\in H$, which are those such that $H\subseteq g^{-1}Hg$ $-$ or equivalently, $g\in N_G(H)$. Thus, the fixed-points thereof are the cosets $gH$ of $H$ where $g\in N_G(H)$, of which there are $[N_G(H):H]$ many. Now, apply the {{< link file="fixed_point_theorems_of_p_groups.md" display="fixed point theorem" type="proved_by" secDisplay="Non-triviality of $Z(G)$" secID="non-triviality_of_Z(G)" >}}.<span style="float:right;">$\blacksquare$</span> {{< /env >}}

{{< env type="proposition" >}}

If a $p$-subgroup $H\substructeq G$ is not $p$-Sylow, then there is a $p$-subgroup $K\substructeq G$ such that $H\nsubgrpeq K$ and $[K:H]=p$. {{< /env >}}

{{< env type="proof" hide="false" >}}

Since $H$ is not a $p$-Sylow subgroup, we see that $p$ divides $[G:H]$, and hence $p$ divides $[N_G(H):H]$ too. By Cauchy’s Theorem, there is an element in $N_G(H)/H$ of order $p$, which generates a cyclic subgroup $K_0$ with $|K_0|=p$. Set $K\coloneqq\pi^{-1}(K_0)\substructeq G$, which clearly contains $H$. Since $\pi(H)\nsubgrpeq\pi(K)$, we have by the {{< link file="quotient_group.md" display="Lattice Isomorphism Theorem" type="proved_by" secID="lattice_isomorphism_theorem" secDisplay="Lattice Isomorphism Theorem" >}} that $H\nsubgrpeq K$ and $K/H\iso\pi(K)/\pi(H)\iso K_0$, and thus $[K:H]=|K_0|=p$ as desired.<span style="float:right;">$\blacksquare$</span> {{< /env >}} <div class="space"></div>

## Structure of $p$-Sylow subgroups

Given that a $p$-Sylow subgroup $S_p\substructeq G$ exists, the rest is just combinatorics.
<div class="space"></div>
{{< env type="proof" hide="false" name="of Sylow II" >}}

We need to show that if $P$ is a $p$-Sylow subgroup, then $P=gS_pg^{-1}$ for some $g\in G$. Indeed, let $P$ act on $G/S_p$ by left-multiplication, so there are{{< link file="fixed_point_theorems_of_p_groups.md" type="proved_by" mod="dag" secDisplay="Non-triviality of $Z(G)$" secID="non-triviality_of_Z(G)" >}} $|G/S_p|=[G:S_p]$ number of fixed points modulo $p$. But $[G:S_p]=m\perp p$, so this action admits a fixed point $gS_p$ for some $g\in G$. Hence $g^{-1}Pg\substructeq S_p$, so $P=gS_pg^{-1}$ by order considerations.<span style="float:right;">$\blacksquare$</span> {{< /env >}}
<div class="space"></div>
{{< env type="proof" hide="false" name="of Sylow III" >}}

Note that $n_p$ is the cardinality of the {{< link file="conjugation_action.md" display="conjugacy class" type="references" secID="action_on_subgroups" secDisplay="Action on Subgroups" >}} of $S_p$, which by {{< link file="orbit_stabilizer_theorem.md" display="Orbit-Stabilizer" type="proved_by" >}} is $[G:N_G(S_p)]$, so we have by {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="proved_by" >}} that $m=[G:S_p]=n_p[N_G(S_p):S_p]$. Thus $n_p\divides m$. Furthermore, we have by the Lemma that $m$ is congruent to $[N_G(S_p):S_p]$ modulo $p$, so $mn_p\equiv m\\,\mod\\,p$. As $m\perp p$ and $p$ is prime, this gives $n_p\equiv1\\,\mod\\,p$ as desired.<span style="float:right;">$\blacksquare$</span> {{< /env >}}

# Applications
