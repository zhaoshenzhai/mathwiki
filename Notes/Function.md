<div class="topSpace"></div>

Date Created: 14/01/2022 14:25:20
Tags: #Type/Definition #Topic/Set_Theory

Types: [[Injection]], [[Surjection]], [[Invertible Function]], [[n-ary Operation]], [[Group Homomorphism]], [[Ring Homomorphism]], [[Linear Map]], [[Module Homomorphism]]
Examples: [[Functions in a Topological Space]]
Constructions: [[Image (Function)]], [[Preimage (Function)]], [[Restriction slash Extension (Function)]], [[Composition (Function)]], [[Indexed Family]], [[Category of Sets]]
Generalizations: [[Morphism (Category Theory)]], [[Class Function]]

Properties: [[Collection of all functions is a proper class]]
Sufficiencies: [[Canonical Decomposition of Functions]], [[Criteria for equality of functions]], [[Formula in replacement image constructs a function]]
Equivalences: [[Function space constructed from a Cartesian product]]
Justifications: [[Function space is a set]]

``` ad-Definition
title: Definition.

_A binary relation $f$ is a **function** if for all $x\in\dom f$, there exists a unique $y$ such that $\tpl{x,y}\in f$._

```

**Remark.** If $f$ is a function with $\dom f=X$ and $\ran f\subseteq Y$ for some sets $X$ and $Y$, write $f:X\to Y$ and call $f$ a **function from $X$ into $Y$**. For all $x\in\dom f$, the unique $y\in\ran f$ such that $\tpl{x,y}\in f$ is denoted by $f\l(x\r)$ and we write $x\mapsto y$. The set of all functions from $X$ into $Y$ is denoted $Y^X$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** It is sometimes convenient to define a function as a triple $f\coloneqq\tpl{\Gamma_{\mathclap{f}}\ ,X,Y}$ where $\Gamma_{\mathclap{f}}\,$ is our original definition of a function, referred now as the **graph of $f$**. All notations above still apply, but since $\cdm f\coloneqq Y$ is now fixed, call it the **codomain of $f$**. This makes surjectivity a property of the function $f$ itself, and, more importantly, makes functions morphisms of the category $\catset$ (our original definition violates $\axicat[3]$). If we write $f:X\to Y$, then this definition is implied.<span style="float:right;">$\blacklozenge$</span>
