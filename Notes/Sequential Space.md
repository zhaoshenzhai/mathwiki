---
mathLink: Sequential/Fréchet Spaces
mathLink-blocks:
    sequential-closure-and-interior: Sequential Closure/Interior
---

<div class="topSpace"></div>

Date Created: 27/12/2023 16:20:55
Tags: #Type/Definition #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Characterizations of topology via nets#^sequential-characterizations-of-topology]]
Generalizations: <i>Not Applicable</i>

Properties: [[Sequential implies k-space]]
Sufficiencies: [[First and Second Countable Spaces#^first-countable-implies-frechet-urysohn]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,\tau}$ be a topological space. A subset $A\subseteq X$ is <b>sequentially closed</b> if whenever $x_\blob\subseteq A$ is a sequence and $x_\blob\to x$, then $x\in A$.
* The collection $\tau_s\coloneqq\l\{U\subseteq X\st U^c\textrm{\it{  is sequentially closed in }}X\r\}$ is a topology on $X$, finer than $\tau$, and $X$ is said to be <b>sequential</b> if $\tau=\tau_s$.

Moreover, $X$ is said to be <b>Fréchet-Urysohn</b> if for every subset $A\subseteq X$ and $x\in\bar{A}$, there is a sequence $x_\blob\subseteq A$ such that $x_\blob\to x$.

```

<b>Remark.</b> Note that every closed subset $A\subseteq X$ is sequentially closed, so $X$ is sequential iff the converse holds too. Explicitly, a subset $U\subseteq X$ is sequentially open iff whenever $x_\blob$ is a sequence in $X$ such that $x_\blob\to x$ for some $x\in U$, then $U$ contains cofinitely-many $x_n$’s. Given a subset $A\subseteq X$ of a topological space, we define its <i>sequential closure</i> and <i>sequential interior</i> respectively as ^sequential-closure-and-interior
$$\begin{equation}
    \scl A\coloneqq\l\{x\in X\st\l(\ex x_\blob\subseteq X\r)x_\blob\to x\r\}\ \ \ \ \textrm{and}\ \ \ \ \sint A\coloneqq\l\{a\in A\st\l(\fa x_\blob\subseteq X\r)\l(x_\blob\to a\textrm{ implies }\fa^\infty n:x_n\in A\r)\r\}.
\end{equation}$$
Clearly $A$ is sequentially closed (resp. sequentially open) iff $A=\scl A$ (resp. $A=\sint A$).<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every Fréchet-Urysohn space is sequential. Indeed, let $A$ be sequentially closed in $X$. If $A$ is not closed in $X$, then there is some $x\in\bar{A}\comp A$. But there is a sequence $\tpl{x_n}\subseteq A$ such that $x_n\to x$, and so $x\in A$, a contradiction.<span style="float:right;">$\blacklozenge$</span>
