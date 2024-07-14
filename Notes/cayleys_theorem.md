---
title: Cayley’s Theorem
date: 2024-06-20T19:25:15-04:00
references: []
tags: [In_Progress]
---

# Motivation & Statement

Whenever one encounters a type of mathematical object, one should ask if there is an associated ‘representation theorem’. Such a theorem for {{< link file="group" display="groups" type="references" >}} is as follows.

{{< env type="theorem" name="Cayley" >}}

Every group $G$ is a {{< link file="subgroup" display="subgroup" type="references" >}} of a symmetry group.

{{< /env >}}

{{< env type="proof" >}}

We show that the left-multiplication {{< link file="group_action" display="action" type="references" >}} $\phi:G\to\Aut G$ is faithful, for then $G\substructeq\Aut G$. Indeed, if $\phi(g_1)=\phi(g_2)$, then we have $\phi(g_1)g=\phi(g_2)g$ for all $g\in G$. That is, we have $g_1g=g_2g$, so $g_1=g_2$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

## Cayley Graph

We can refine this result if $G$ is finitely-generated.

{{< env type="proposition" >}}

Every finitely-generated group is a subgroup of the symmetries of a connected locally-finite (directed) graph.

{{< /env >}}

{{< env type="proof" >}}



{{< /env >}}

# {{< link file="yoneda_lemma" display="The Yoneda Lemma" type="generalizations" >}}


