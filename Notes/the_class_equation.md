---
title: The Class Equation
date: 2024-06-21T14:50:24-04:00
references: []
tags: [In_Progress]
---

# Statement & Proof

A {{< link file="group" display="group" type="references" >}} $G$ {{< link file="group_action" display="acting" type="references" >}} on a finite set $S$ naturally partitions $S$ into its orbits $S=\bigsqcup_{i\in I}Gs_i$, which can either be trivial or non-trivial.
* The trivial ones are singletons $\l\\{s_i\r\\}$ for which each $s_i$ is fixed by all $g\in G$. We call those the *fixed points* of the action, denoted $Z\coloneqq\l\\{s\in S\st gs=s\textrm{ for all }g\in G\r\\}$.
* The non-trivial ones are of the form $\l\\{s_1,\dots,s_n\r\\}$ for some $n\in\N$ constrained by the {{< link file="orbit_stabilizer_theorem" display="Orbit-Stabilizer Theorem" type="references" >}}. Obviously this is the case for the trivial orbits too (with $n=1$), 
