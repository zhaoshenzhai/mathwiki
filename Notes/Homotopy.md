<div class="topSpace"></div>

Date Created: 19/05/2023 13:01:16
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Deformation Retraction]]
Constructions: [[Fundamental Group]], [[Homotopy Equivalence]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of homotopies of paths]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Simply-connected iff homotopic paths]]
Justifications: [[Homotopy is a congruence in category of topological space]]

``` ad-Definition
title: Definition.

Let $f_0,f_1:X\to Y$ be continuous maps between topological spaces $X$ and $Y$. A **(free) homotopy from $f_0$ to $f_1$** is a continuous map $F:X\times I\to Y$ such that $F\l(x,0\r)=f_0\!\l(x\r)$ and $F\l(x,1\r)=f_1\!\l(x\r)$ for all $x\in X$.
* If there exists a homotopy $F$ from $f_0$ to $f_1$, then $f_0$ and $f_1$ are said to be **homotopic** and we write $f_0\htopeq f_1$.
* If $X=I$, then $F:I\times I\to Y$ is said to be **free homotopy of paths**.

Let $S\subseteq X$ be such that $\l.f_0\r|_S=\l.f_1\r|_S$. A **homotopy from $f_0$ to $f_1$ rel $S$** is a homotopy $F:X\times I\to Y$ such that $F\l(x,t\r)=f_0\!\l(x\r)=f_1\!\l(x\r)$ for all $x\in S$ and $t\in I$.
* If such a homotopy exists, we say that $f_0$ and $f_1$ are **homotopic rel $S$** and we write $f_0\htopeq f_1\rel S$.
* If $S=\l\{x_0\r\}$, then, letting $y_0\coloneqq f_0\!\l(x_0\r)=f_1\!\l(x_0\r)$, the maps $f_0,f_1:\tpl{X,x_0}\to\tpl{Y,y_0}$ are pointed and we call $F'\coloneqq F\l(x_0,\slot\r)$ a **pointed homotopy**.
* If $X=I$ and $S=\del I$, then $F:I\times I\to Y$ is said to be a **homotopy of paths**.

In any case, for a continuous map $f:X\to Y$, the **homotopy class of $f$** is the equivalence class $\l[f\r]$ under $\htopeq$.

```

<b>Remark.</b> A homotopy $F:X\times I\to Y$ induces a family of functions $f_t\coloneqq F\l(\slot,t\r):X\to Y$, called a **deformation from $f_0$ to $f_1$**.
* We also denote a homotopy $F:X\times I\to Y$ from $f_0$ to $f_1$ by $F:f_0\htopeq f_1$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $\gamma_0,\gamma_1:I\to Y$ are paths, then $\gamma_0\htopeq\gamma_1$ will always mean that they are homotopic rel $\del I$. In a path-connected space, the contractibility of $I$ shows that all paths $\gamma:I\to Y$ are freely homotopic, so no confusion shall arise.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A function $f:X\to Y$ is **null-homotopic** if there is a constant function $c$ such that $f\htopeq c$.<span style="float:right;">$\blacklozenge$</span>
