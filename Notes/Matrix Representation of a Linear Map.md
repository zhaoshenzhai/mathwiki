<div class="topSpace"></div>

Date Created: 16/05/2022 18:16:35
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [Basis Transition Map/Matrix](Basis%20Transition%20Map;%20Change%20of%20Basis%20Matrix.md), [$\l[\id_V\r]_\mc{B}=I_n$ ($\dim V=n$)](Identity%20function%20on%20a%20vector%20space%20is%20represented%20by%20the%20identity%20matrix.md)
Constructions: [$\Phi_\mc{B}^\mc{C}:\hom\l(V,W\r)\simto\mat{m\times n}{K}$ ($\dim V=n$, $\dim W=m$)](Linear%20isomorphism%20between%20linear%20maps%20and%20matrices.md), [Diagonalizable Operator/Matrix](Diagonalizable%20Operator%20slash%20Matrix.md)
Generalizations: _Not Applicable_

Properties: [Composition of linear maps $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix product of representations](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md), [Action of linear map $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ left-multiplication of matrix representation](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md), [Linear map invertible $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix representation invertible](Linear%20map%20invertible%20repr%20under%20basis%20matrix%20representation%20invertible.md), [Rank of a linear map $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ rank of its matrix representation](Rank%20of%20a%20linear%20map%20repr%20under%20basis%20rank%20of%20its%20matrix%20representation.md)
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Unique Representation Theorem (Hamel)]]

``` ad-Definition
title: Definition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and fix two choices of bases_
$$\begin{equation}
    \mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}
\end{equation}$$
_of $V$ and $W$, respectively. To every linear map $T:V\to W$, the **matrix representation of $T$ relative to $\mc{B}$ and $\mc{C}$** is the matrix_ $\l[T\r]_\mc{B}^\mc{C}\coloneqq\l[a_{ij}\r]\in\mat{m\times n}{K}$ _where_ $a_{ij}\in K$ _are the unique coefficients such that_ $T\l(b_j\r)=\sum_{i=1}^ma_{ij}c_i$ _for all $j\in\l\{1,\dots,n\r\}$._

```

**Remark.** Indeed, the function
$$\begin{equation}
    \Phi_\mc{B}^\mc{C}:\hom\l(V,W\r)\to\mat{m\times n}{K}\ \ \ \ \textrm{mapping}\ \ \ \ T\mapsto\l[T\r]_\mc{B}^\mc{C}
\end{equation}$$
is a linear isomorphism, so this correspondence establishes the isomorphism $\hom\l(V,W\r)\iso\mat{m\times n}{K}$. However, it is _not_ a natural isomorphism as choices of bases are required.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** The matrix $\l[T\r]_\mc{B}^\mc{C}=\l[a_{ij}\r]$ is of the form

<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-05-16_183714/image.svg", width=150></center>

That is, $\l(\l[T\r]_\mc{B}^\mc{C}\r)_{\!\!\blob;j\!\!}=\l[T\l(b_j\r)\r]_\mc{C}$ where $\l[\slot\r]_\mc{C}$ is the coordinate representation of $W$ relative to $\mc{C}$.
* If $n=1$, then it is easily seen that $\l[T\r]_\mc{B}^\mc{C}=\l[T\l(b_1\r)\r]_\mc{C}$.
* If $V=W$ and $\mc{B}=\mc{C}$, write $\l[T\r]_\mc{B}\coloneqq\l[T\r]_\mc{B}^\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
