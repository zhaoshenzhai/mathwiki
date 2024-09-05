---
title: Integers
date: 2024-06-03T15:19:04-04:00
references: [DF03]
tags: [Group_Theory, Ring_Theory]
---

The set of *integers*, denoted $\Z$, appear everywhere in algebra:
* In {{< link file="group.md" display="group" type="references" >}} theory, it is the {{< link file="free_group.md" display="free group" type="references" >}} on one generator, and is used to construct all {{< link file="cyclic_group.md" display="cyclic" type="constructions" >}} groups, and more generally, all {{< link file="finitely_generated_group.md" display="finitely-generated" type="references" >}} {{< link file="abelian_group.md" display="abelian" type="references" >}} groups. The latter claim follows from the {{< link file="structure_theorem_for_fg_modules_over_pid.md" display="Structure Theorem" type="justifications" >}}.
* In {{< link file="ring.md" display="ring" type="references" >}} theory, it is the initial object in {{< link file="ring.md" display="$\catring$" type="references" section="The Category $\catring$" >}}, and is the most important example of a {{< link file="principal_ideal_domain.md" display="PID" type="references" >}}. In fact, abelian groups are just {{< link file="module.md" display="$\Z$-modules" type="constructions" >}}, and rings are just $\Z$-algebras.

The fundamental property of $\Z$, and that underlies all of its group and ring-theoretic properties, is the *Division Algorithm*.

{{< env type="theorem" name="Division Algorithm for $\Z$" >}}

For any $a,b\in\Z$ with $b\neq0$, there exist unique $q,r\in\Z$ with $0\leq r<|b|$ such that $a=qb+r$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

We may assume $b>0$; otherwise, applying it to $-b$ furnishes unique $q',r'\in\Z$ with $0\leq r'<-b$ such that $a=q'(-b)+r'$. Setting $q\coloneqq-q'$ and $r\coloneqq r'$ gives us the desired result. To this end, set $S\coloneqq\l\\{a-kb\in\N\st k\in\Z\r\\}$, which is non-empty since
$$\begin{equation}
    0\leq a+a^2b=a-(-a^2)b\in S.
\end{equation}$$
Since $\N$ is {{< link file="well-ordered_set.md" display="well-ordered" type="references" >}}, we have a minimal element $r\in S$, so $q\in\Z$ with $a-qb=r$. If $r\geq b$, then $0\leq r-b=a-(1+q)b\in S$ with $r-b<r$, a contradiction.

<br>

&emsp;&emsp;For uniqueness, if $q',r'\in\Z$ also satisfy the conclusions, then $qb+r=q'b+r'$, so that $r'-r=(q-q')b$. Assume w.l.o.g. that $r'\geq r$, and thus $0\leq r'-r=(q-q')b<b$. Cancelling $b$ gives us $0\leq q-q'<1$, forcing $q=q'$ and $r=r'$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

{{< env type="corollary" >}}

$\Z$ is a {{< link file="euclidean_domain.md" display="Euclidean domain" type="references" >}}, and is hence{{< link file="EUD_implies_PID.md" type="justifications" mod="dag" >}} a {{< link file="principal_ideal_domain.md" display="PID" type="references" >}}, hence{{< link file="PID_implies_UFD.md" type="justifications" mod="dag" >}} a {{< link file="unique_factorization_domain.md" display="UFD" type="references" >}}.

{{< /env >}}

{{< env type="corollary" >}}

{{< link file="subgroup.md" display="Subgroups" type="references" >}} and {{< link file="ideal_ring_theory.md" display="ideals" type="references" >}} of $\Z$ are precisely $n\Z$ for $n\in\N$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Let $G\substructeq\Z$. If non-trivial, it contains a minimal positive element $n\in G$; we claim that $G=n\Z$. Since $G$ is closed, ‘$\supseteq$’ holds. If $m\in G$, then $m=qn+r$ for $q,r\in\Z$ with $0\leq r<n$. Then $r=m-qn\in G$, which by minimality of $n$ forces $r=0$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
