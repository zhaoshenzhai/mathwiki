---
mathLink: $A$ invertible $\Leftrightarrow$ $L_A$ invertible
---

<br />
<br />

Date Created: 29/05/2022 17:24:27
Tags: #Proposition #Closed

Proved by: [Linear map invertible $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix representation invertible](Linear%20map%20invertible%20repr%20under%20basis%20matrix%20representation%20invertible.md), [[Basic properties of left-multiplication of matrices]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{n}{K}$ for some fixed $n\in\N^\ast$. Then $A$ is invertible iff its induced left-multiplication map $L_A$ is invertible, in which case_ $\l(L_A\r)^{-1}=L_{A^{-1}}$_._

```

_Proof_. Observe that $L_A:K^n\to K^n$ is invertible iff its matrix representation $\l[L_A\r]$ (relative to the standard basis of $K^n$) is invertible, but since $\l[L_A\r]=A$, it suffices to prove that the inverse of $L_A$ is given by $L_{A^{-1}}$. To this end, compute
$$\begin{align}
    L_A\circ L_{A^{-1}}&=L_{AA^{-1}}\ \ \ &&\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ L_{A^{-1}}\circ L_A\!\!\!\!\!\!\!\!\!\!\!\!&&=L_{A^{-1}A} && \textrm{Left-multiplication respects matrix multiplication} \\
    &=L_{I_n}&&\textrm{and}\ \ \ \ \ \ \ \ &&=L_{I_n} && \textrm{Definition of $A^{-1}$} \\
    &=\id_{K^n}&&&&=\id_{K^n}. && \textrm{Left-multiplication preserves identity}\qedin
\end{align}$$
