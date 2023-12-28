---
mathLink-blocks:
    sequential-characterizations-of-topology: Sequential characterizations of topology
    hausdorff-iff-every-net-converges-to-at-most-one-point: Hausdorff $\Leftrightarrow$ uniqueness of limits
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

We have the following characterizations of topological notions on a space $X$ using nets. <span style="color:pink">Moreover, $X$ is sequential iff they hold with ‘net’ replaced by ‘sequence’.</span>
* (Closure). For a subset $A\subseteq X$ and $x\in X$, we have $x\in\bar{A}$ iff there is a net $x_\blob\subseteq A$ such that $x_\blob\to x$.
* (Continuity). A map $f:X\to Y$ is continuous iff for every convergent net $x_\blob$, say $x_\blob\to x$, we have $f\l(x_\blob\r)\to f\l(x\r)$.
* (Hausdorff). $X$ is Hausdorff iff every net $x_\blob$ in $X$ converges to at-most one point.
* (Cluster). A point $x\in X$ is a cluster point of a net $x_\blob:I\to X$ iff $x_\blob$ has a subnet converging to $x$.

```
^sequential-characterizations-of-topology

<b>Remark.</b> In particular, for a point $x\in X$, we see that $x\in A'$ iff there is a net $x_\blob\subseteq A\comp\l\{x\r\}$ converging to $x$, and in the same vein $x\in\del A$ iff there are nets $x_\blob\subseteq A$ and $x'_\blob\subseteq A^c$ such that $x_\blob,x'_\blob\to x$. Furthermore, $A$ is closed iff any net in $A$ contains all its limit points.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> In what follows, let $\mc{U}$ denote the collection of all open neighborhoods of $x$ directed by reverse inclusion, i.e. $U\leq V$ whenever $U\supseteq V$.

<i>(Closure)</i>. If $x\in\bar{A}$, pick $x_U\in U\cap A$ for each $U\in\mc{U}$ and observe that $x_\blob\to x$. The converse is clear.
* 

<i>(Continuity)</i>. Suppose that $f$ is continuous at $x$ take a neighborhood $V\ni f\l(x\r)$. Then $U\coloneqq f^{-1}\!\l(V\r)$ is a neighborhood of $x$, so if $x_\blob\to x$, then $x_\blob$ is eventually in $U$ and hence $f\l(x_\blob\r)$ is eventually in $V$. Thus $f\l(x_\blob\r)\to f\l(x\r)$, as desired. Conversely, if $f$ is not continuous, then there is an open set $V\subseteq Y$ such that $U\coloneqq f^{-1}\!\l(V\r)$ is not open. Thus there is some $x\in U\comp U^\circ=U\cap\bar{U^c}$, so we have a net $x_\blob\subseteq U^c$ such that $x_\blob\to x$. But $f\l(x_\blob\r)\not\in V$ despite $f\l(x\r)\in V$, so $f\l(x_\blob\r)\not\to f\l(x\r)$.
*

<i>(Hausdorff)</i>. If $X$ is Hausdorff and $x_\blob$ converges to distinct $x,x'\in X$, then there are disjoint neighborhoods $U\ni x$ and $U'\ni x'$ such that $x_\blob$ is eventually in both $U$ and $U'$, a contradiction. Conversely, if $X$ is not Hausdorff, let $x,x'\in X$ be distinct points with no disjoint neighborhoods and consider the system $\mc{U}\cap\mc{U}'$ of neighborhoods of both $x$ and $x'$. Each $U\cap U'\in\mc{U}\cap\mc{U}'$ is non-empty by hypothesis, and so $x_\blob\to x,x'$. ^hausdorff-iff-every-net-converges-to-at-most-one-point
* 

<i>(Cluster)</i>. Let $y_\blob:J\to X$ be a subnet of $x_\blob$ converging to $x$ and take a neighborhood $U\ni x$. Since $y_\blob\to x$, choose $j_1\in J$ such that $y_j\in U$ whenever $j\geq j_1$. Fix $i\in I$, so there exists some $j_2\in J$ such that $i_j\geq i$ whenever $j\geq j_2$. Let $j$ be an upper bound for both $j_1$ and $j_2$, so $i_j\geq i$ is such that $x_{i_j}=y_j\in U$ and hence $x$ is a cluster point of $x_\blob$. Conversely, let $J\coloneqq\mc{U}\times I$ be directed by $\tpl{U,i}\leq\tpl{U',i'}$ iff $U\leq U'$ and $i\leq i'$. If $x$ is a cluster point of $x_\blob$, then for every $i\in I$ and $U\in\mc{U}$, there is some $j_\tpl{U,i}\geq i$ such that $x_{j_\tpl{U,i}}\in U$. Then $\phi:J\to I$ mapping $\tpl{U,i}\mapsto j_\tpl{U,i}$ makes $x_\blob\circ\phi$ a subnet of $x_\blob$ that converges to $x$, since if $\tpl{U',i'}\geq\tpl{U,i}$, then $\phi\l(U',i'\r)\geq i'\geq i$ and $x_{\phi\l(U',i'\r)}\in U'\subseteq U$.
* 
