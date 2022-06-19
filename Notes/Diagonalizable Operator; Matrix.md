---
custom_alias: Diagonalizable Operator$\slash$Matrix
---

<br />
<br />

Date Created: 11/06/2022 18:08:57
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [Diagonalizable $\Leftrightarrow$ exists basis of eigenvectors](Diagonalizable%20iff%20exists%20basis%20of%20eigenvectors.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a finite-dimensional vector space over some field $K$. A linear operator $T:V\to V$ is said to be **diagonalizable** if there exists a basis $\mc{B}$ of $V$ such that_ $\l[T\r]_\mc{B}$ _is a diagonal matrix._

```

**Remark.** We say that a matrix $A\in\mat{n}{K}$ is **diagonalizable** if $L_A$ is. Observe, by changing basis from the standard basis $\mc{S}$ of $K^n$ to $\mc{B}$, that
$$\begin{equation}
    \begin{aligned}
        \l[L_A\r]_\mc{B}&=Q_{\mc{B}\to\mc{S}}^{-1}\l[L_A\r]_\mc{S}Q_{\mc{B}\to\mc{S}} && Q_{\mc{B}\to\mc{S}}\coloneqq\l[\id_{K^n}\r]_\mc{B}^\mc{S} \\
        &=Q_{\mc{B}\to\mc{S}}^{-1}AQ_{\mc{B}\to\mc{S}}, && \l[L_A\r]_\mc{S}=A
    \end{aligned}
\end{equation}$$
so the statement that there exists a basis $\mc{B}$ of $K^n$ such that $\l[L_A\r]_\mc{B}$ is diagonal is equivalent to saying that there exists a matrix $Q\in\mat{n}{K}$ such that $Q^{-1}AQ$ is diagonal.<span style="float:right;">$\blacklozenge$</span>
