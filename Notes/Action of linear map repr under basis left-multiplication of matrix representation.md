---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/05/2022 17:10:55
Tags: #Proposition

Proved by: [Composition of linear maps $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix product of representations](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and fix two choices of bases_
$$\begin{equation}
    \mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}
\end{equation}$$
_of $V$ and $W$, respectively. Consider a linear map $T:V\to W$. Then, for each $v\in V$, we have_
$$\begin{equation}
    \l[T\l(v\r)\r]_\mc{C}=\l[T\r]_\mc{B}^\mc{C}\l[v\r]_\mc{B}.
\end{equation}$$

```

**Remark.** Letting $A\coloneqq\l[T\r]_\mc{B}^\mc{C}$, this relationship can be interpreted by saying that the diagram
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-05-29_220733/image.svg", width=170></center>

commutes. Thus, after identifying $V\iso K^n$ and $W\iso K^m$ via the maps $\phi_\mc{B}$ and $\phi_\mc{C}$, respectively, we may identify $T$ with the left-multiplication map $L_A$. This is useful since it allows us to reduce abstract statements about $T$ to maps between tuple spaces.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Fix $v\in V$. For any linear map $f:\dom f\to V$ (with $\dom f$ being an $\l|\mc{A}\r|$-dimensional vector space), we know that
$$\begin{equation}
    \l[T\circ f\r]_\mc{A}^\mc{C}=\l[T\r]_\mc{B}^\mc{C}\l[f\r]_\mc{A}^\mc{B};
\end{equation}$$
it suffices to find suitable $\dom f$, $\mc{A}$, and $f$ such that $\l[T\circ f\r]_\mc{A}^\mc{C}=\l[T\l(v\r)\r]_\mc{C}$ and $\l[f\r]_\mc{A}^\mc{B}=\l[v\r]_\mc{B}$. Observe that
$$\begin{equation}
    \l[T\circ f\r]_\mc{A}^\mc{C}\in\mat{m\times\l|\mc{A}\r|}{K}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l[T\l(v\r)\r]_\mc{C}\in\mat{m\times1}{K},
\end{equation}$$
so we need $\l|\mc{A}\r|=1$; set $\mc{A}\coloneqq\l\{\alpha\r\}$ for some $\alpha\in\dom f$. Hence we have $\l[f\r]_\mc{A}^\mc{B}=\l[f\l(\alpha\r)\r]_\mc{B}$, so we need $f\l(\alpha\r)=v$. Indeed, a simple choice of $f$ is
$$\begin{equation}
    f:K\to V \ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ k\mapsto v
\end{equation}$$
where $K$ is regarded as a vector space over itself; it is obviously linear. Observe that $\mc{A}=\l\{1\r\}$ is a basis of $K$, so
$$\begin{align}
    \l[T\circ f\r]_\mc{A}^\mc{C}&=\l[\l(T\circ f\r)\l(1\r)\r]_\mc{C} && \l|\mc{A}\r|=1 \\
    &=\l[T\l(f\l(1\r)\r)\r]_\mc{C} && \textrm{Definition of $\circ$} \\
    &=\l[T\l(v\r)\r]_\mc{C}. && f\l(1\r)=v\qedin
\end{align}$$
