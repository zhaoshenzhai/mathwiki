---
mathLink-blocks:
    regular-representation: Regular Representation
    cayley: Cayley’s Theorem
    equivariant-quotients-iff-conjugate-subgroups: $G/H$ and $G/K$ are $G$-isomorphic $\Leftrightarrow$ $H$ and $K$ are conjugate
---

<div class="topSpace"></div>

Date Created: 02/09/2023 12:47:13
References: #Ref/Alu09 #Ref/Lan02
Tags: #Type/Example #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>
^cayley

``` ad-Example
title: Example.

Let $G$ be a group. The <b>(left) regular action</b> of $G$ is the action $\phi:G\to\Aut\l(G\r)$ given by $\phi_g\!\l(x\r)\coloneqq gx$ for all $g,x\in G$. 
* This action is both faithful and transitive. That $\phi:G\into\Aut\l(G\r)$ is called <b>Cayley’s Theorem</b>.
* For two subgroups $H,K\substructeq G$, their quotients $G/H$ and $G/K$ with the left-regular action are $G$-equivariant iff $H$ and $K$ are conjugate.

 This action induces the <b>regular representation</b> $\rho:G\to\GL\l(V\r)$ where $V\coloneqq F^k\!\l(G\r)$ is the free $k$-vector space of $G$ by $\rho\l(g\r)e_x\coloneqq e_{gx}$ for all $g\in G$ and $e_x\in V$.

```
^regular-representation

<b>Remark.</b> More generally, for a subgroup $H\substructeq G$, the regular action of $G$ on $G/H$ is given by $\phi_g\!\l(xH\r)\coloneqq\l(gx\r)H$ for all $g,x\in G$.
*  This is transitive since for all $xH,yH\in G/H$, we have $yH=\l(yx^{-1}\r)xH$. However, it is <i>not</i> faithful.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> This action is faithful since $g\in\ker\phi$ iff $gh=h$ for all $h\in G$, which occurs iff $g=e$. It is transitive since for all $x,y\in G$, we have $y=gx$ with $g\coloneqq yx^{-1}$. Let $H,K\substructeq G$ be subgroups.
^equivariant-quotients-iff-conjugate-subgroups
* ($\Rightarrow$). Let $f:G/H\to G/K$ be a $G$-isomorphism, say with $f\l(H\r)=gK$ for some $g\in G$. For all $h\in H$, we have that $gK=f\l(H\r)=f\l(hH\r)=hf\l(H\r)=hgK$, so $g^{-1}hg\in K$ and hence $g^{-1}Hg\subseteq K$. Since $f\l(g^{-1}H\r)=g^{-1}f\l(H\r)=g^{-1}gK=K$, we see that $f^{-1}\!\l(K\r)=g^{-1}H$ and so the same argument shows that $gKg^{-1}\subseteq H$. Conjugating, we see that $K\subseteq g^{-1}Hg$ and so $H$ and $K$ are conjugate.
* ($\Leftarrow$). Conversely, let $g\in G$ be such that $g^{-1}Hg=K$ and define a map $f:G/H\to G/K$ by $xH\mapsto xgK$. This is well-defined since if $x_1H=x_2H$, then $x_1^{-1}x_2\in H$ and hence $g^{-1}x_1^{-1}x_2g\in g^{-1}Hg=K$. Thus $\l(x_1g\r)^{-1}\l(x_2g\r)\in K$, so $x_1gK=x_2gK$. The same argument backwards shows that $f$ is an injection, and it is a surjection since $x_2K=f\l(x_2g^{-1}H\r)$ for all $x_2\in G$. Finally, it is $G$-equivariant since $f\l(a\cdot xH\r)=f\l(gxH\r)=axgK=a\cdot f\l(xH\r)$.<span style="float:right;">$\blacksquare$</span>
