<br />
<br />

Date Created: 15/01/2022 21:15:56
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)
Tags: #Axiom #Open

Equivalences: _Not Applicable_
Constructions: [[Union]]

``` ad-Axiom
title: Axiom.

_Consider the first-order logic with a set of non-logical symbols $\mc{L}=\l\{\in\r\}$. The **Axiom of Union** is the $\mc{L}$-formula_
$$\begin{equation}
    \fa u\ex z\fa v\fa x\l[\l(x\in v\land v\in u\r)\Rightarrow x\in z\r].
\end{equation}$$

```

**Remark.** This axiom does not directly define the $\textrm{`}$union$\textrm{'}$ $\bigcup u$ of $u$. Rather, it asserts the existence of some superset of the union, from which the union is then constructed from the Axiom Schema of Specification.<span style="float:right;">$\blacklozenge$</span>
