<br />
<br />

Date Created: 01/06/2022 15:30:57
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Change of Basis Matrix]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [$\psi_{\mc{B}\to\mc{B}'}\!\l(\l[v\r]_\mc{B}\r)=Q_{\mc{B}\to\mc{B}'}\l[v\r]_\mc{B}$](Basis%20transition%20map%20acts%20as%20left-multiplication%20by%20change%20of%20basis%20matrix.md)
Justifications: [[Composition of linear maps is a linear map]], [[Inverse of linear map is linear]]

``` ad-Definition
title: Definition.

_Let $V$ be a finite dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and let $\mc{B}$ and $\mc{B}'$ be bases thereof. The **basis transition map from $\mc{B}$ to $\mc{B}'$** is the unique linear map_ $\psi:K^n\to K^n$ _such that the diagram_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-06-01_153315/image.svg", width=145></center>

_commutes; that is,_ $\psi\coloneqq\phi_{\mc{B}'}\circ\phi_\mc{B}^{-1}$_._

```

**Remark.** The transition map can also be written as $\psi_{\mc{B}\to\mc{B}'}$ to emphasize that it takes the coordinate representations of vectors in $\mc{B}$ and maps them to its corresponding representation in $\mc{B}'$.<span style="float:right;">$\blacklozenge$</span>
