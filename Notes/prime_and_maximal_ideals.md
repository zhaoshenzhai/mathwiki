---
title: Prime and Maximal Ideals
date: 2024-08-30T16:11:08-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix a commutative {{< link file="ring.md" display="ring" type="references" >}} $R$. Any ideal $\mf{a}\nsubgrpeq R$ induces a {{< link file="quotient_ring.md" display="quotient ring" type="references" >}} $R/\mf{a}$ that makes $\pi:R\onto R/\mf{a}$ a ring homomorphism. If $\mf{a}\neq R$, then $R/\mf{a}$ might have a simpler structure than $\mf{a}$, say, $R/\mf{a}$ might be an {{< link file="integral_domain.md" display="integral domain" type="references" >}} or a {{< link file="field.md" display="field" type="references" >}}.

{{< env type="definition" >}}

A non-trivial ideal $\mf{a}\nsubgrp R$ is said to be *prime* (resp. *maximal*) if $R/\mf{a}$ is an integral domain (resp. a field).

{{< /env >}}

**Remark.** Note that $\mf{p}$ is prime iff $rs\in\mf{p}$ implies either $r\in\mf{p}$ or $s\in\mf{p}$, which is reminiscent to prime numbers in {{< link file="integers.md" display="$\Z$" type="references" >}}. Moreover, $\mf{m}$ is maximal iff it is $\subseteq$-maximal in the {{< link file="lattice.md" display="lattice" type="references" >}} of non-trivial ideals of $R$. The latter follows from the {{< link file="quotient_ring.md" display="Lattice Isomorphism Theorem" type="justifications" section="Universal Property" >}}: any ideal $\bar{\mf{a}}\nsubgrpeq R/\mf{m}$ corresponds to some (unique) ideal $\mf{a}\nsubgrpeq R$ containing $\mf{m}$, so a non-trivial ideal $\bar{\mf{a}}\nsubgrp R/\mf{m}$ vanishes iff $\mf{m}$ is $\subseteq$-maximal, and the former occurs{{< link file="field.md" type="justifications" mod="dag" >}} iff $R/\mf{m}$ is a field.

<div class="space"></div>

**Remark.** Maximal ideals are clearly prime. Conversely, if $R$ is a {{< link file="principal_ideal_domain.md" display="PID" type="references" >}}, then non-zero prime ideals are also maximal. The importance of $R$ being a PID is that we can use divisibility arguments like those in $\Z$ to establish properties about ideals.

<div class="space"></div>

{{< env type="proof" hide="true" >}}

Let $\mf{a}\nsubgrp R$ be prime and suppose that $\mf{a}\subseteq\mf{b}$ for some ideal $\mf{b}\nsubgrp R$. Since $R$ is a PID, $\mf{a}=\gen{a}$ and $\mf{b}=\gen{b}$ for some $a,b\in R$, and since $\gen{a}\subseteq\gen{b}$, we have $a=bc$ for some $c\in R$. That $\mf{a}$ is prime implies that either $b\in\gen{a}$ or $c\in\gen{a}$; the former implies that $\mf{a}=\mf{b}$. If $c\in\gen{a}$, then $c=ad$ for some $d\in R$, and hence $a=abd$. But then $bd=1$ since $R$ is an integral domain, so $\mf{b}=\gen{b}=R$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

&emsp;&emsp;The question now remains whether every ring admits a maximal ideal. The answer is yes, and, in fact, more is true:

{{< env type="theorem" name="Krull" >}}

Every proper ideal $\mf{a}\nsubgrp R$ extends to a maximal ideal $\mf{a}\subseteq\mf{m}\nsubgrp R$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Let $(\mc{I},\subseteq)$ be the {{< link file="poset.md" display="poset" type="references" >}} of all proper ideals of $R$ containing $\mf{a}$, which is non-empty since $\mf{a}\in\mc{I}$. Since the union of any chain $\mc{C}\subseteq\mc{I}$ of proper ideals of $R$ is a proper ideal (if $\bigcup\mc{C}=(1)$, then $1\in\mf{b}$ for some $\mf{b}\in\mc{C}$, contradiction; if $a\in\bigcup\mc{C}$, then $a\in\mf{b}$ for some $\mf{b}\in\mc{C}$, so $ras\in\mf{b}\subseteq\bigcup\mc{C}$ for any $r,s\in R$; etc), $\mc{I}$ admits a maximal element by {{< link file="zorns_lemma.md" display="Zorn’s Lemma" type="proved_by" >}}.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
