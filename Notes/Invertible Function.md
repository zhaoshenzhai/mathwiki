<div class="topSpace"></div>

Date Created: 26/01/2022 18:48:16
Tags: #Definition

Types: [[Linear Isomorphism]]
Examples: [[Identity Function]], [Elementary Matrices/Operations](Elementary%20Matrices%20and%20Operations.md)
Constructions: [[Isomorphic Sets]]
Generalizations: [[Inverse (Relation)]], [[Invertible Morphism]]

Properties: [[Inverse of bijection is a bijection]], [[Inverse of linear map is linear]]
Sufficiencies: [[Left and right inverses coincide (function)]]
Equivalences: [Invertible $\Leftrightarrow$ bijective](Invertible%20iff%20bijective.md)
Justifications: [[Inverse of function is unique]]

``` ad-Definition
title: Definition.

_Let $X$ and $Y$ be sets. A function $f:X\to Y$ is said to be **invertible** if there exists $g:Y\to X$ such that $g$ is both a left and right-inverse of $f$; that is, if_
$$\begin{equation}
    g\circ f=\id_X\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ f\circ g=\id_Y,
\end{equation}$$
_in which case we write $g\coloneqq f^{-1}$ and call it the **inverse of $f$**._

```

**Remark.** This relationship can also be expressed by stating that the diagram

<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-02-26_120126/image.svg", width=150></center>

commutes.<span style="float:right;">$\blacklozenge$</span>
