<div class="topSpace"></div>

Date Created: 05/02/2024 14:52:05
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Tarski-Vaught Test).

Let $\mc{A},\mc{B}$ be $\sigma$-structures. Then $\mc{A}\elemembed\mc{B}$ iff for every $\sigma$-formula $\phi(\vec{x},y)$ and every $\vec{a}\in A$, if $\mc{B}\models\ex y\phi(\vec{a},y)$, then $\mc{B}\models\phi(\vec{a},a')$ for some $a'\in A$.

```

<b>Remark.</b> This test also gives us simple examples of $\sigma$-structures $\mc{A}\substructeq\mc{B}$ such that $\mc{A}\elemequiv\mc{B}$ but are <i>not</i> elementary. Indeed, consider the isomorphic $\sigma$-structures $\mc{A}\coloneqq\tpl{\N_{>0},<}$ and $\mc{B}\coloneqq\tpl{\N,<}$, where the $\sigma$-formula $\phi(y)\coloneqq\lnot\ex z(z<y)$ is only witnessed by $0\not\in A$ in $\mc{B}$. In general, the failure of a $\sigma$-substructure to be elementary is the lack of those witnesses, called <i>Skolem witnesses</i>, which are used in the <i>Downward Löwenheim-Skolem Theorem</i> to build elementary substructures.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The forward direction is trivial. Conversely, let $\phi(\vec{x})$ be a $\sigma$-formula and take $\vec{a}\in A^{|\vec{x}|}$. We show that $\mc{A}\models\phi(\vec{a})$ iff $\mc{B}\models\phi(\vec{a})$ by induction on the complexity of $\phi$, for which the only non-trivial case is when $\phi(\vec{x})=\ex y\psi(\vec{x},y)$. But $\mc{B}\models\phi(\vec{a})$ iff $\mc{B}\models\ex y\psi(\vec{a},y)$, so the Tarski-Vaught condition furnishes a witness $a'\in A$ such that $\mc{B}\models\psi(\vec{a},a')$. That $\mc{A}\models\psi(\vec{a},a')$ holds by induction, so $\mc{A}\models\phi(\vec{a})$ as desired. Note that this also shows $\mc{A}\substructeq\mc{B}$, since we may take $\phi(x)\coloneqq x=c$ to show that $c\in A$ for each $c\in\mc{C}\l(\sigma\r)$, and take $\phi(\vec{x},y)\coloneqq f(\vec{x})=y$ to show that $f(\vec{a})\in A$ for each $f\in\mc{F}_n\!\l(\sigma\r)$ and $\vec{a}\in A^n$.<span style="float:right;">$\blacksquare$</span>
