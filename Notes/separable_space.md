---
title: Separable Space
date: 2024-08-28T20:39:23-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

A standard technique from analysis is when establishing a property for some {{< link file="topological_space" display="topological space" type="references" >}} $X$, one first proves it for a dense subset $C\subseteq X$. It is thus useful to prove the existence of ‘nice’ dense sets. The following is singles out a very crude such class of spaces.

{{< env type="definition" >}}

A topological space $X$ is said to be *separable* if it admits a countably dense subset $Q\subseteq X$.

{{< /env >}}

This provides a limitation on the ‘complexity’ of $X$, and, in the setting of a {{< link file="metrizable_space" display="metrizable space" type="references" >}} $X$, this limitation is equivalent{{< link file="metrizable_limitations_on_complexity" type="equivalences" mod="dag" >}} to some others (like {{< link file="second_countable_space" display="second countability" type="references" >}}, being Lindelöf, and the CCC). Thus, we usually focus on the metrizable case, and more often than not, on *{{< link file="polish_space" display="Polish" type="types" >}}* spaces (those which are *completely* metrizable).

<div class="space"></div>

## Hereditary Properties

Any subset $Y\subseteq X$ of a separable metrizable space is also separable.

>{{< env type="proof" hide="false" >}}

Let $Q$ be a countable dense subset of $X$. For each $q\in Q$ and $n\geq1$, let $y_{q,n}\in Y$ be such that $d(q,y_{q,n})\leq d(q,Y)+1/n$. Set $D\coloneqq\l\\{y_{q,n}\in Y\st q\in Q,n\geq1\r\\}$, which we claim witnesses separability of $Y$.

<br>

&emsp;&emsp;Indeed, that $D$ is countable is clear. To show that it is dense, take $y\in Y$ and $\epsilon>0$. Since $Q$ is dense in $X$, there is some $q\in Q$ such that $d(q,y)<\epsilon/3$, and by construction, there is a large enough $n\in\N$ such that
$$\begin{equation}
    d(y,y_{q,n})\leq d(q,y)+d(q,y_{q,n})<d(q,y)+d(q,Y)+\epsilon/3\leq 2d(q,y)+\epsilon/3<\epsilon.\qedin
\end{equation}$$

{{< /env >}}
