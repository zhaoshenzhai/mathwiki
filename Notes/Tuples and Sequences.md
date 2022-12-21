<div class="topSpace"></div>

Date Created: 29/01/2022 11:31:28
Tags: #Definition

Types: _Not Applicable_
Examples: [[Sequences in a Topological Space]]
Constructions: [[Subsequences]], [[Tuple Space (Linear Algebra)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Function space constructed from a Cartesian product]]

``` ad-Definition
title: Definition.

_Let $X$ be a set and consider an indexed family_ $\l\{x_i\r\}_{i\in I}\subseteq X$_._
* _If $I=\Z$ (or some infinite subset thereof), then_ $\l\{x_i\r\}_{i\in I}$ _is said to be an **infinite sequence in $X$** and is denoted by either_ $\tpl{x_i}_{i\in I}$ _or_ $\tpl{x_1,x_2,\dots}$_._
* _If $I=\l\{1,\dots,n\r\}$ for some $n\in\N$, then _$\l\{x_i\r\}_{i\in I}$ _is said to be an **$n$-tuple in $X$** (or a **finite sequence in $X$**) and is denoted by $\tpl{x_1,\dots,x_n}$._

_More generally, let_ $\l\{X_j\r\}_{j\in J}$ _be an indexed family of sets and consider an indexed family_ $\l\{x_j\r\}_{j\in J}$ _where $x_j\in X_j$ for all $j\in J$._
* _If $J=\N$, then_ $\l\{x_j\r\}_{j\in J}$ _is said to be an_ **_infinite sequence through_ $\l\{X_j\r\}_{j\in J}$**_._
* _If $J=\l\{1,\dots,n\r\}$ for some $n\in\N$, then_ $\l\{x_j\r\}_{j\in J}$ _is said to be an_ **_$n$-tuple through_ $\l\{X_j\r\}_{j\in J}$**_._

```

**Remark.** In other words, infinite sequences and $n$-tuples in $X$ are functions of the form
$$\begin{equation}
    \l[
        \begin{aligned}
            f:\omega&\to X \\
            i&\mapsto x_i\coloneqq f\l(i\r)
        \end{aligned}
    \r]\in X^\omega\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \l[
        \begin{aligned}
            f:n&\to X \\
            i&\mapsto x_i\coloneqq f\l(i\r)
        \end{aligned}
    \r]\in X^n,
\end{equation}$$
though, in both cases, we usually use $\omega$ as $\N^+$ (as is done above). Similarly, infinite sequences and $n$-tuples through $\l\{X_j\r\}_{j\in J}$ are functions of the form
$$\begin{equation}
    \l[
        \begin{aligned}
            f:\omega&\to\bigcup_{j\in\omega}X_j \\
            j&\mapsto x_j\coloneqq f\l(j\r)
        \end{aligned}
    \r]\in\prod\limits_{j\in\omega}X_j\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \l[
        \begin{aligned}
            f:n&\to\bigcup_{j\in n}X_j \\
            j&\mapsto x_j\coloneqq f\l(j\r)
        \end{aligned}
    \r]\in\prod_{i=1}^nX_i.\exqedin
\end{equation}$$
