<br />
<br />

Date Created: 01/06/2022 15:30:57
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Change of Basis Matrix]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [$\psi_{\mc{B}\to\mc{B}'}\!\l(\l[v\r]_\mc{B}\r)=\l[v\r]_{\mc{B}'}=Q_{\mc{B}\to\mc{B}'}\l[v\r]_\mc{B}$](Basis%20transition%20map%20acts%20as%20left-multiplication%20by%20change%20of%20basis%20matrix.md)
Justifications: [$\phi_\mc{B}:V\simto K^n$ ($\dim V=n$)](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md), [[Isomorphism of objects is an equivalence relation]]

``` ad-Definition
title: Definition.

_Let $V$ be a finite dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and let $\mc{B}$ and $\mc{B}'$ be bases thereof. The **basis transition map from $\mc{B}$ to $\mc{B}'$** is the unique linear isomorphism_ $\psi:K^n\to K^n$ _such that the diagram_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-06-01_153315/image.svg", width=145></center>

_commutes; that is,_ $\psi\coloneqq\phi_{\mc{B}'}\circ\phi_\mc{B}^{-1}$_._

```

**Remark.** The transition map can also be written as $\psi_{\mc{B}\to\mc{B}'}$ to emphasize that it takes the coordinate representations of vectors in $\mc{B}$ and maps them to its corresponding representation in $\mc{B}'$.<span style="float:right;">$\blacklozenge$</span>
