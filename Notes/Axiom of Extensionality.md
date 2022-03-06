<br />
<br />

Date Created: 16/01/2022 10:57:06
Tags: #Axiom #Open

Equivalences: _Not Applicable_
Constructions: [[Zermelo-Fraenkel Set Theory with Choice]]

``` ad-Axiom
title: Axiom (Extensionality).

_Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$. The **Axiom of Extensionality** is the $\mc{L}$-formula_
$$\begin{equation}
    \fa x\fa y\l[\fa u\l(u\in x\Leftrightarrow u\in y\r)\Rightarrow x=y\r].
\end{equation}$$

```

> Informally, the truth of this axiom is clear if we recall that the intended universe of set theory consists of all $\textit{hereditary sets}$. That is, if $x$ is in our universe, then $x$ is a set and all members of $x$ are also in our universe and hence also sets. Then $\fa u\l(u\in x\Leftrightarrow u\in y\r)$ says that $x$ and $y$ are sets with exactly the same members, so they must be the same set.
<span style="float:right;">- Kenneth Kunan; Set Theory, I.4</span>

---

**Remark.** We can quantify $\textrm{`}$within sets$\textrm{'}$, that is, for any set $x$ and formula $\phi\l(u\r)$, write
* $\l(\fa u\in x\r)\phi\l(u\r)$ or $\fa u\in x:\phi\l(u\r)$ for the formula $\fa u\l[u\in x\Rightarrow\phi\l(u\r)\r]$, and write
* $\l(\ex u\in x\r)\phi\l(u\r)$ or $\ex u\in x:\phi\l(u\r)$ for the formula $\ex u\l[u\in x\land\phi\l(u\r)\r]$.<span style="float:right;">$\blacklozenge$</span>
