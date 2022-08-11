---
mathLink: $\axiext$
---

<div class="topSpace"></div>

Date Created: 16/01/2022 10:57:06
Tags: #Axiom #Later/Set_Theory

Equivalences: _Not Applicable_
Constructions: _Not Applicable_

``` ad-Axiom
title: Axiom (Extensionality).

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Extensionality** is the $\mc{L}$-formula_
$$\begin{equation}
    \axiext\,\colon\!\Leftrightarrow\fa x\fa y\l[\fa u\l(u\in x\Leftrightarrow u\in y\r)\Rightarrow x=y\r].
\end{equation}$$

```

> Informally, the truth of this axiom is clear if we recall that the intended universe of set theory consists of all $\textrm{\it{hereditary sets}}$. That is, if $x$ is in our universe, then $x$ is a set and all members of $x$ are also in our universe and hence also sets. Then $\fa u\l(u\in x\Leftrightarrow u\in y\r)$ says that $x$ and $y$ are sets with exactly the same members, so they must be the same set.
<span style="float:right;">- Kenneth Kunan; Set Theory, I.4</span>
