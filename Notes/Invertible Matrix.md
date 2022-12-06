<div class="topSpace"></div>

Date Created: 07/04/2022 07:20:30
Tags: #Definition

Types: _Not Applicable_
Examples: [[Basis Transition Map; Change of Basis Matrix]], [[Identity Matrix]], [[Elementary Matrices and Operations]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Cancellation laws (invertible matrix)]], [[Product of invertible matrices is invertible]], [[Inversion is an involution]]
Sufficiencies: _Not Applicable_
Equivalences: [[Linear map invertible repr under basis matrix representation invertible]], [[Matrix Invertibility Theorem]], [[Matrix invertible iff augmented matrix reducible to identity]]
Justifications: [[Inverse of matrix is unique]], [[Left and right inverses coincide (matrix)]]

``` ad-Definition
title: Definition.

_Let $K$ be a field, fix $m,n\in\N^+$, and consider a matrix $A\in\mat{m\times n}{K}$._
* _If there exists a matrix $B\in\mat{n\times m}{K}$ such that $BA=I_n$, then $A$ is said to be **left-invertible** and $B$ is called a **left-inverse of $A$**._
* _If there exists a matrix $C\in\mat{n\times m}{K}$ such that $AC=I_m$, then $A$ is said to be **right-invertible** and $C$ is called a **right-inverse of $A$**._

_If $n=m$ and $A$ has both a left and a right inverse, then $A$ is said to be invertible and $A^{-1}\coloneqq C=D$ is called the **inverse of $A$**._

```
