---
title: Smith Normal Form
date: 2024-09-03T21:43:56-04:00
references: []
tags: [In_Progress]
---

# Motivation & Statement

{{< env type="theorem" name="Smith Normal Form" >}}

Let $R$ be a {{< link file="principal_ideal_domain.md" display="PID" type="references" >}}.

{{< /env >}}

# Algorithms for the Smith Normal Form

In addition to being a PID, further restrictions on $R$ allow us to (algorithmically!) compute the Smith Normal Form for any matrix $A\in\mc{M}_{m\times n}(R)$. We present two algorithms below, one for when $R$ is a {{< link file="euclidean_domain.md" display="Euclidean domain" type="references" >}}, and then other when $R$ is a {{< link file="field.md" display="field" type="references" >}} (in which case the algorithm is commonly called the *Gaussian algorithm*). Both algorithms require the notion of an *elementary matrix*.

<br>

&emsp;&emsp;Indeed, both algorithms hinge on the fact that $GL_n(R)$ can be {{< link file="subgroup.md" display="generated" type="references" secID="subgroup_generation" secDisplay="Subgroup Generation" >}} by ‘simple’ matrices, which are those that correspond (via left/right multiplication) to the following operations on a matrix, which we illustrate with $R\coloneqq\\,${{< link file="integers.md" display="$\Z$" type="references" >}}, $n\coloneqq3$, and $m\coloneqq2$.
* *Switch two rows/columns*, which can be done with the identity matrix but with the rows/columns swapped.
* *Add a multiple of one row/column to another*, which can be done with the identity matrix but with the multiple in a zero entry.
* *Multiply a row/column by a unit*, which can be done with the identity matrix but with a $1$ on the diagonal replaced by said unit.
$$\begin{equation}
    \begin{pmatrix}
        1 & 2 \\\\
        3 & 4 \\\\
        5 & 6
    \end{pmatrix}
    \begin{pmatrix}
        0 & 1 \\\\
        1 & 0
    \end{pmatrix}=
    \begin{pmatrix}
        2 & 1 \\\\
        4 & 3 \\\\
        6 & 5
    \end{pmatrix}\ \ \ \ \ \ \ \ 
    \begin{pmatrix}
        1 & 2 \\\\
        3 & 4 \\\\
        5 & 6
    \end{pmatrix}
    \begin{pmatrix}
        1 & m \\\\
        0 & 1
    \end{pmatrix}=
    \begin{pmatrix}
        1 & 2+m \\\\
        3 & 4+3m \\\\
        5 & 6+5m
    \end{pmatrix}\ \ \ \ \ \ \ \ 
    \begin{pmatrix}
        1 & 2 \\\\
        3 & 4 \\\\
        5 & 6
    \end{pmatrix}
    \begin{pmatrix}
        u & 0 \\\\
        0 & 1
    \end{pmatrix}=
    \begin{pmatrix}
        1u & 2 \\\\
        3u & 4 \\\\
        5u & 6
    \end{pmatrix}
\end{equation}$$

The first operation is an involution, and the inverses of the other two are obtained by the same operations by replacing the unit (resp. multiple) by its multiplicative (resp. additive) inverse. With those matrices in hand, we are ready for the algorithms.

<h2 id="over_euclidean_domains">Over {{< link file="euclidean_domain.md" display="Euclidean Domains" type="references" >}}</h2>

The presence of a Euclidean valuation $N$ allows us to inductively kill off non-diagonal entries and express the diagonal ones as successive divisors. These operations correspond to multiplying by the above elementary matrices, so any matrix $A\in\mc{M}_{m\times n}(R)$ can be set into Smith Normal Form in this way. The algorithm is as follows.

<br>

&emsp;&emsp;Let $A=(a\_{ij})\in\mc{M}_{m\times n}(R)$ and write it in block matrix form $A=\l(
\begin{smallmatrix}
    a & B \\\\
    C & A'
\end{smallmatrix}\r)$, where $B,C$ are appropriate row/column matrices and $A'\in\mc{M}\_{(m-1)\times(n-1)}(R)$. By swapping rows/columns, we may assume that $a\neq0$ has the minimal valuation amongst all $a\_{ij}$.

<br>

&emsp;&emsp;For each non-zero $b_j\in B$, division gives $b_j=aq_j+r_j$ for some $q_j,r_j\in R$, with either $r_j=0$ or $N(r_j)<N(a)$. In the latter case, place $r_j$ in the $(1,1)$-entry and repeat; since the valuation are non-negative numbers, this process terminates, so we may assume that $r_j=0$. Thus, adding a $(-q_j)$-multiple of the first column to the $j^\textrm{th}$ column clears the $(1,j)$-entry. Similar manipulations to non-zero entries $c_i\in C$ clears the $(i,1)$-entries too, so we may assume that $B=0$ and $C=0$. At this point, $A=\l(
\begin{smallmatrix}
    a & 0 \\\\
    0 & A'
\end{smallmatrix}\r)$, and if any $a'\in A'$ has small valuation than $a$, repeat the *entire* process until there is none.

<br>

&emsp;&emsp;If $a\divides a'$ for every $a'\in A'$, then by induction there are matrices $P',Q'$ such that $Q'A'P'$ is in Smith Normal Form, so
$$\begin{equation}QAP\coloneqq
    \begin{pmatrix}
        1 & 0 \\\\
        0 & Q'
    \end{pmatrix}
    \begin{pmatrix}
        a & 0 \\\\
        0 & A'
    \end{pmatrix}
    \begin{pmatrix}
        1 & 0 \\\\
        0 & P'
    \end{pmatrix}
\end{equation}$$
is the desired Smith Normal Form for $A$. Otherwise, $a\ndivides a'$ for some $a'\coloneqq a_{ij}\in A'$, so division furnishes $q,r\in R$ with $a'=aq+r$ and $N(r)<N(a)$. Add the $i^\textrm{th}$ row to the first, which preserves $a$ in the $(1,1)$-entry, so we can add a $(-q)$-multiple of the first column to the $j^\textrm{th}$ and make $a_{ij}=r$. Since $N(r)<N(a)$, we can repeat the *entire* process with $r$ in place of $a$, and this process terminates.

<div class="space"></div>

**Remark.** This algorithm also proves that if $R$ is a Euclidean domain, then $GL_n(R)$ is generated by elementary matrices.

>{{< env type="proof" hide="false" >}}

Let $D\coloneqq QAP$ be the Smith Normal Form for a fixed invertible matrix $A\in GL_n(R)$ as obtained by the above algorithm, so in particular $P,Q$ are both products of elementary matrices. Then $A=Q^{-1}DP^{-1}$, so it suffices to show that $D$ is a product of elementary matrices. Write $D=\diag(d_1,\dots,d_n,0,\dots,0)$ with $d_1\divides\cdots\divides d_n$, which is invertible since $D=QAP$.

<br>

&emsp;&emsp;Its {{< link file="determinant.md" display="determinant" type="references" >}} $\det D=\prod_{i\leq n}d_i$ is thus a unit{{< link file="determinant.md" type="proved_by" mod="dag" secID="general_linear_group" secDisplay="General Linear Group" >}}, and since $R$ is a {{< link file="unqiue_factorization_domain.md" display="*unique* factorization domain" type="references" >}}, we see that $\det D$ a product of units. Thus so is each $d_i$, so multiplying by the inverse of said units reduces $D\rightsquigarrow I_n$ via elementary matrices, as desired.

{{< /env >}}

<h2 id="over_fields">Over {{< link file="field.md" display="Fields" type="references" >}}</h2>

Let $R$ be a field. The presence of multiplicative inverses allows us to bypass Euclidean division and proceed much more directly. Indeed, let $A=(a_{ij})=\l(
\begin{smallmatrix}
    a & B \\\\
    C & A'
\end{smallmatrix}\r)\in\mc{M}_{m\times n}(R)$; by swapping rows/columns, we may assume that $a\neq0$, so we can multiply it by $a^{-1}$ and further assume that $a=1$. Adding the $(-a\_{1j})$-multiple of the first column to the second clears out the $(1,j)$-entry, and similar manipulations clear out $C$ too, so we may assume that $B=0$ and $C=0$. Then $A=\l(
\begin{smallmatrix}
    1 & 0 \\\\
    0 & A'
\end{smallmatrix}\r)$, so we are done by induction.

<div class="space"></div>

**Remark.** This algorithm establishes much more; namely, if $R$ is a field, then any matrix $A\in\mc{M}_{m\times n}(R)$ is equivalent to a matrix of the form $\l(
\begin{smallmatrix}
    I_r & 0 \\\\
    0 & 0
\end{smallmatrix}\r)$ for some (unique) $r\leq\min\l\\{m,n\r\\}$.
