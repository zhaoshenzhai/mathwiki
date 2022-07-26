---
mathLink: $\axiinfty$
---

<br />
<br />

Date Created: 02/02/2022 11:09:41
Tags: #Axiom #Later/Set_Theory

Equivalences: _Not Applicable_
Constructions: [[Set of Natural Numbers]]

``` ad-Axiom
title: Axiom.

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Infinity** is the $\mc{L}$-formula_
$$\begin{equation}
    \axiinfty\,\colon\!\Leftrightarrow\ex z\l[\l[\ex e\l(\fa x\lnot\l(x\in e\r)\land e\in z\r)\r]\land\l[\fa y\l(y\in z\Rightarrow\ex s\l(\fa x\l(x\in s\Leftrightarrow x\in y\lor x=y\r)\land s\in z\r)\r)\r]\r].
\end{equation}$$

```

**Remark.** Letting $\mc{L}'\coloneqq\mc{L}\cup\l\{\em,S\r\}$ where $\em$ is a constant symbol interpreted as the empty set and $S$ is a function symbol interpreted as the successor, we can rewrite $\axiinfty$ as the $\mc{L}'$-formula
$$\begin{equation}
    \ex z\l[\em\in z\land\fa y\l(y\in z\Rightarrow S\l(y\r)\in z\r)\r].
\end{equation}$$
That is, it is the statement that there exists an inductive set $z$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** This axiom does not directly define the $\textrm{`}$set of all natural numbers$\textrm{'}$ $\omega$. Rather, it asserts the existence of some inductive set that, by the Principle of Ordinary Induction, contains $\omega$ as a subset.<span style="float:right;">$\blacklozenge$</span>
