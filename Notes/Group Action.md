<div class="topSpace"></div>

Date Created: 04/05/2023 22:12:02
Tags: #Definition #Topics/Group_Theory

Types: [[Faithful Action]], [[Transitive Action]]
Examples: [[Conjugation Action]]
Constructions: [[Orbit]], [[Stabilizer]], [[Vector Space]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $G$ be a group and $X$ a be a set. A **(left) $G$-action on $X$** is a homomorphism $\phi:G\to\Aut\l(X\r)$. The set $X$, together with the action $\phi$, is called a **$G$-set**._

```

**Remark.** Instead of such a homomorphism, a $G$-action on $X$ can equivalently be given as a map $\cdot:G\times X\to X$ given by $g\cdot x\coloneqq\phi_g\!\l(x\r)$. In this way, that $\phi$ is a homomorphism translates to $g\cdot\l(h\cdot x\r)=\l(gh\r)\cdot x$ and $e\cdot x=x$ for all $g,h\in G$ and $x\in X$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Note that $\ker\phi=\l\{g\in G\mid\fa x\in X:gx=x\r\}=\bigcap_{x\in X}G_x$ is the intersection of all stabilizers.<span style="float:right;">$\blacklozenge$</span>
