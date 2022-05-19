<br />
<br />

Date Created: 16/05/2022 18:16:35
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [$\l[\id_V\r]_\mc{B}=I_n$ ($\dim V=n$)](Identity%20function%20on%20a%20vector%20space%20is%20represented%20by%20the%20identity%20matrix.md)
Constructions: [$\hom\l(V,W\r)\iso\mat{m\times n}{K}$ ($\dim V=n$, $\dim W=m$)](Linear%20isomorphism%20between%20linear%20maps%20and%20matrices.md)
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Unique Representation Theorem (Hamel)]]

``` ad-Definition
title: Definition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and fix two choices of bases_
$$\begin{equation}
    \mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}
\end{equation}$$
_of $V$ and $W$, respectively. The **matrix representation of $\hom\l(V,W\r)$ relative to $\mc{B}$ and $\mc{C}$** is the function_
$$\begin{equation}
    \Phi_\mc{B}^\mc{C}:\hom\l(V,W\r)\to\mat{m\times n}{K}\ \ \ \ \textrm{\it{mapping}}\ \ \ \ T\mapsto\l[T\r]_\mc{B}^\mc{C}\coloneqq\l[a_{ij}\r]
\end{equation}$$
_where_ $a_{ij}\in K$ _are the unique coefficients such that_ $T\l(b_j\r)=\sum_{i=1}^ma_{ij}c_i$ _for all $j\in\l\{1,\dots,n\r\}$._

```

**Remark.** The matrix $\l[T\r]_\mc{B}^\mc{C}=\l[a_{ij}\r]$ is of the form

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-05-16_183714/image.svg", width=150></center>

That is, $\l(\l[T\r]_\mc{B}^\mc{C}\r)_{\!\!\blob;j\!\!}=\l[T\l(b_j\r)\r]_\mc{C}$ where $\l[\slot\r]_\mc{C}$ is the standard representation of $W$ relative to $\mc{C}$. If $V=W$ and $\mc{B}=\mc{C}$, write $\l[T\r]_\mc{B}\coloneqq\l[T\r]_\mc{B}^\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
