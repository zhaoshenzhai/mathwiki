<div class="topSpace"></div>

Date Created: 16/10/2023 20:11:33
References: #Ref/Mac10 #Ref/Rui19
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: [[Group]]
Examples: [[Fundamental Groupoid]], [[Group Action]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>groupoid</b> is a locally-small category such that every morphism is an isomorphism.

```

<b>Remark.</b> The <i>core groupoid</i> of a category $C$ is the groupoid $\Core\l(C\r)$ with the same objects as $C$ but whose morphisms are only isomorphisms in $C$. Since functors preserve isomorphisms, this extends naturally to a functor $\Core:\catscat\to\catgrpd$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $G$ be a groupoid. For a fixed object $x\in G$, the <i>isotropy group</i> of $G$ at $x$ is the automorphism group $G\l(x,x\r)$ and the <i>orbit</i> of $x$ is the subset of $\Obj\l(G\r)$ consisting of objects $y$ such that $G\l(x,y\r)\neq\em$.
* If $x,y\in\Obj\l(G\r)$ are in the same orbit, say $y=gx$ for some $g\in G\l(x,y\r)$, then the conjugate map $h\mapsto ghg^{-1}$ is an isomorphism from $G\l(x,x\r)$ to $G\l(y,y\r)$.

Note that the orbits of $G$ partitions $\Obj\l(X\r)$, and a groupoid $G$ is said to be <i>transitive</i> if it only has one orbit. In this case, all isotropy groups are isomorphic.<span style="float:right;">$\blacklozenge$</span>
