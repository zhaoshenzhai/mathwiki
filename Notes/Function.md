<div class="topSpace"></div>

Date Created: 14/01/2022 14:25:20
Tags: #Definition #Topics/Set_Theory

Types: [[Injection]], [[Surjection]], [[Invertible Function]], [[n-ary Operation]], [[Group Homomorphism]], [[Ring Homomorphism]], [[Linear Map]]
Examples: [[Functions in a Topological Space]], [[Kronecker Delta]]
Constructions: [[Image (Function)]], [[Preimage (Function)]], [[Restriction slash Extension (Function)]], [[Composition (Function)]], [[Function Space (Set Theory)]], [[Indexed Family]]
Generalizations: [[Morphism (Category Theory)]], [[Class Function]]

Properties: [[Collection of all functions is a proper class]]
Sufficiencies: [[Canonical Decomposition of Functions]], [[Criteria for equality of functions]], [[Formula in replacement image constructs a function]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_A binary relation $f$ is a **function** if $\fa x\in\dom f,\ex!y:\tpl{x,y}\in f$; that is, if the relation $f$ is left-total and right-unique._

```

**Remark.** If $f$ is a function with $\dom f=X$ and $\ran f\subseteq Y$ for some sets $X$ and $Y$, write $f:X\to Y$ and call $f$ a **function from $X$ into $Y$**. Note that there are $\textrm{`}$infinitely$\textrm{'}$ many sets $Y$ such that $f:X\to Y$. For all $x\in\dom f$, the unique $y\in\ran f$ such that $\tpl{x,y}\in f$ is denoted by $f\l(x\r)$ and we write $x\mapsto y$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** It is sometimes convenient to define a function as a triple $f\coloneqq\tpl{\Gamma_{\mathclap{f}}\ ,X,Y}$ where $\Gamma_{\mathclap{f}}\,$ is our original definition of a function, referred now as the **graph of $f$**. All notations above still apply, but since $Y$ is now fixed, call it the **codomain of $f$** and write $\cdm f\coloneqq Y$. This makes surjectivity a property of the function $f$ itself, and, more importantly, makes functions morphisms of the category $\catset$ (our original definition violates $\axicat[3]$).

Usually, if we write $f:X\to Y$, then this definition is implied.<span style="float:right;">$\blacklozenge$</span>
