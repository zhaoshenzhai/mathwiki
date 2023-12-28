---
mathLink-blocks:
    sequential-characterizations-of-topology: Sequential characterizations of topology
---

<div class="topSpace"></div>

Date Created: 27/12/2023 22:37:31
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X,Y$ be topological spaces. The following are characterizations of topological notions using nets. If $X,Y$ are sequential, we may replace ‘net’ by ‘sequence’.
* (Closure). For a subset $A\subseteq X$ and $x\in X$, we have $x\in\bar{A}$ iff there is a net $x_\blob\subseteq A$ such that $x_\blob\to x$.
* (Continuity). A map $f:X\to Y$ is continuous iff for every convergent net $x_\blob$, say $x_\blob\to x$, we have $f\l(x_\blob\r)\to f\l(x\r)$.
* (Hausdorff). $X$ is Hausdorff iff every net $x_\blob$ in $X$ converges to at-most one point.
* (Cluster). For a net $x_\blob$ in $X$, a point $x\in X$ is a cluster point of $x_\blob$ iff $x_\blob$ has a subnet converging to $x$.

```
^sequential-characterizations-of-topology

<b>Remark.</b> In particular, for a point $x\in X$, we see that $x\in A'$ iff there is a net $x_\blob\subseteq A\comp\l\{x\r\}$ converging to $x$, and in the same vein $x\in\del A$ iff there are nets $x_\blob\subseteq A$ and $x'_\blob\subseteq A^c$ such that $x_\blob,x'_\blob\to x$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof (closure).</i> If $x\in\bar{A}$, consider the system $\mc{U}$ of neighborhoods of $x$ directed by reverse inclusion. Pick $x_U\in U\cap A$ for each $U\in\mc{U}$ and observe that $x_U\to x$ since for each $U\in\mc{U}$, we have $x_V\in U\cap A$ for any $V\geq U$ (i.e. $V\subseteq U$). The converse is clear.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (continuity).</i> Suppose that $f$ is continuous at $x$ take a neighborhood $V\ni f\l(x\r)$. Then $U\coloneqq f^{-1}\!\l(V\r)$ is a neighborhood of $x$, so if $x_\blob\to x$, then $x_\blob$ is eventually in $U$ and hence $f\l(x_\blob\r)$ is eventually in $V$. Thus $f\l(x_\blob\r)\to f\l(x\r)$, as desired. Conversely, if $f$ is not continuous, then there is an open set $V\subseteq Y$ such that $U\coloneqq f^{-1}\!\l(V\r)$ is not open. Thus there is some $x\in U\comp U^\circ=U\cap\bar{U^c}$, so we have a net $x_\blob\subseteq U^c$ such that $x_\blob\to x$. But $f\l(x_\blob\r)\not\in V$ despite $f\l(x\r)\in V$, so $f\l(x_\blob\r)\not\to f\l(x\r)$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (Hausdorff).</i> 

---

<i>Proof (cluster).</i> 
