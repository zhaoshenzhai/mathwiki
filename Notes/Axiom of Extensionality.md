---
mathLink: $\axiext$
---

<div class="topSpace"></div>

Date Created: 16/01/2022 10:57:06
Tags: #Axiom

Equivalences: _Not Applicable_
Constructions: _Not Applicable_

``` ad-Axiom
title: Axiom (Extensionality).

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Extensionality** is the $\mc{L}$-formula_
$$\begin{equation}
    \axiext\,\colon\!\Leftrightarrow\fa A\fa B\l[\fa x\l(x\in A\Leftrightarrow x\in B\r)\Rightarrow A=B\r].
\end{equation}$$

```

> Informally, the truth of this axiom is clear if we recall that the intended universe of set theory consists of all $\textrm{\it{hereditary sets}}$. That is, if $A$ is in our universe, then $A$ is a set and all members of $a$ are also in our universe and hence also sets. Then $\fa x\l(x\in A\Leftrightarrow x\in B\r)$ says that $A$ and $b$ are sets with exactly the same members, so they must be the same set.
<span style="float:right;">- Kenneth Kunan; Set Theory, I.4</span>
