---
title: Cayley’s Theorem
date: 2024-06-20T19:25:15-04:00
references: [Alu09]
tags: [Group_Theory/Later]
---

# Motivation & Statement

Whenever one encounters a type of mathematical object, one should ask if there is an associated ‘representation theorem’.

<h2 id="groups">Groups</h2>

Such a theorem for {{< link file="group.md" display="groups" type="references" >}} is as follows.

{{< env type="theorem" name="Cayley" id="cayley" >}}

Every group $G$ is a {{< link file="subgroup.md" display="subgroup" type="references" >}} of a symmetry group.

{{< /env >}}

{{< env type="proof" >}}

We show that the left-multiplication {{< link file="group_action.md" display="action" type="references" >}} $\phi:G\to\Aut G$ is faithful, for then $G\substructeq\Aut G$. Indeed, if $\phi(g_1)=\phi(g_2)$, then we have $\phi(g_1)g=\phi(g_2)g$ for all $g\in G$. That is, we have $g_1g=g_2g$, so $g_1=g_2$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

## Cayley Graph

We can refine this result if $G$ is finitely-generated and obtain a geometric result.

{{< env type="lemma" >}}

Every finitely-generated group is a subgroup of the symmetries of a connected locally-finite (directed) graph.

{{< /env >}}

{{< env type="proof" >}}

<span style="color:red">**TODO**.</span>

{{< /env >}}

<h2 id="rings">Rings</h2>

{{< env type="theorem" >}}

Every ring $R$ is a {{< link file="subring.md" display="subring" type="references" >}} of an endomorphism ring.

{{< /env >}}

{{< env type="proof" hide="false" >}}

<span style="color:red">**TODO** (symbol juggling).</span>

{{< /env >}}

# {{< link file="yoneda_lemma.md" display="The Yoneda Lemma" type="generalizations" >}}
