---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 12:25:27
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Permutations are conjugate iff same cycle type]]
Constructions: [[Centralizer and Center]], [[Normalizer]], [[Inner Automorphism Group]]
Generalizations: <i>Not Applicable</i>

Properties: [[Class Equation]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Quotients are equivariant iff subgroups are conjugate]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group. The <b>conjugation action on $G$</b> is the left $G$-action $\phi:G\to\Aut\l(G\r):g\mapsto\phi_g$ given by $\phi_g\!\l(x\r)\coloneqq gxg^{-1}$ for all $x,g\in G$.

```

<b>Remark.</b> Observe that $\ker\phi$ consists of all $g\in G$ such that $xg=gx$ for all $x\in G$; that is, $\ker\phi=Z\l(G\r)$. Furthermore, for all $x\in G$, we have:
* The orbit $Gx$ consists of all $y\in G$ such that $y=gxg^{-1}$ for some $g\in G$. An element $y\in Gx$ is said to be <b>conjugate to $x$</b> and $Gx$ is the <b>conjugacy class of $x$</b>.
* The stabilizer $G_x$ consists of all $g\in G$ such that $xgx^{-1}=g$; that is, $G_x=C_G\!\l(x\r)=N_G\!\l(x\r)$.

Generalizing, we let $G$ act on $\pow\l(G\r)$ by $\phi_g\!\l(S\r)\coloneqq gSg^{-1}$ for all $S\subseteq X$. Then the stabilizer subgroup of $S$ under $\phi$ is exactly the normalizer $N_G\!\l(S\r)$, and the normal subgroups $N\nsubgrpeq G$ are exactly the subgroups with trivial orbit. Furthermore, letting $N_G\!\l(S\r)$ act on $S$ via conjugation by $\phi_g\!\l(x\r)\coloneqq gxg^{-1}\in S$ for all $g\in N_G\!\l(S\r)$ and $x\in S$ gives us the centralizer $C_G\!\l(S\r)$ as the kernel of $\phi$. Note that $\phi_g\!\l(x\r)\in S$ for all $g\in N_G\!\l(S\r)$ by definition of the normalizer.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $G$ is abelian, then $\phi_g\!\l(h\r)=h$ is the trivial action of $G$ on itself.<span style="float:right;">$\blacklozenge$</span>
