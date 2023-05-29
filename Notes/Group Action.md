<div class="topSpace"></div>

Date Created: 04/05/2023 22:12:02
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Faithful Action]], [[Transitive Action]]
Examples: [[Conjugation Action]]
Constructions: [[Orbit]], [[Stabilizer]], [[Equivariant Map]], [[Vector Space]], [[Category of G-Sets]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group and $X$ a be a set. A **(left) $G$-action on $X$** is a homomorphism $\phi:G\to\Aut\l(X\r)$. The set $X$, together with the action $\phi$, is called a **$G$-set**.

```

<b>Remark.</b> Instead of such a homomorphism, a $G$-action on $X$ can equivalently be given as a map $\cdot:G\times X\to X$ given by $g\cdot x\coloneqq\phi_g\!\l(x\r)$. In this way, that $\phi$ is a homomorphism translates to $g\cdot\l(h\cdot x\r)=\l(gh\r)\cdot x$ for all $g,h\in G$ and $x\in X$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Note that $\ker\phi=\l\{g\in G\mid\fa x\in X:gx=x\r\}=\bigcap_{x\in X}G_x$ is the intersection of all stabilizers.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every group admits the **trivial action** $\phi:G\to\Aut\l(G\r):g\mapsto\phi_g$ by $\phi_h\!\l(h\r)\coloneqq gh$ for all $g,h\in G$. The fact that it is faithful is Cayley$\textrm{'}$s Theorem.<span style="float:right;">$\blacklozenge$</span>
