<div class="topSpace"></div>

Date Created: 05/02/2024 14:52:05
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: <i>Not Applicable</i>
References: [[Lowenheim-Skolem Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Tarski-Vaught Test).

Let $\mc{M},\mc{N}$ be $\mc{L}$-structures. Then $\mc{M}\elemembed\mc{N}$ iff for every $\mc{L}$-formula $\phi(\vec{x},y)$ and every $\vec{a}\in M$, if $\mc{N}\models\ex y\phi(\vec{a},y)$, then $\mc{N}\models\phi(\vec{a},a')$ for some $a'\in M$.

```

<b>Remark.</b> This test gives us examples of $\mc{L}$-structures $\mc{M}\substructeq\mc{N}$ such that $\mc{M}\elemequiv\mc{N}$ but are <i>not</i> elementary. Indeed, consider the isomorphic $\mc{L}$-structures $\mc{M}\coloneqq\tpl{\N_{>0},<}$ and $\mc{N}\coloneqq\tpl{\N,<}$, where the $\mc{L}$-formula $\phi(y)\coloneqq\lnot\ex z(z<y)$ is only witnessed by $0\not\in M$ in $\mc{N}$. In general, the failure of an $\mc{L}$-substructure to be elementary is the lack of those witnesses, called <i>Skolem witnesses</i>, which are used in the <i>Downward Löwenheim-Skolem Theorem</i> to build elementary substructures.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> For the forward direction, note that $\mc{N}\models\ex y\phi(\vec{a},y)$ implies that $\mc{M}\models\ex y\phi(\vec{a},y)$ by elementarity, so $\mc{M}\models\phi(\vec{a},a')$ for some $a'\in M$. Again by elementarity, we have $\mc{N}\models\phi(\vec{a},a')$ for some $a'\in M$, as desired.
&emsp;&emsp;Conversely, let $\phi(\vec{x})$ be an $\mc{L}$-formula and take $\vec{a}\in M$. We show that $\mc{M}\models\phi(\vec{a})$ iff $\mc{N}\models\phi(\vec{a})$ by induction on the complexity of $\phi$, for which the only non-trivial case is when $\phi(\vec{x})=\ex y\psi(\vec{x},y)$. Indeed, note that $\mc{N}\models\phi(\vec{a})$ iff $\mc{N}\models\ex y\psi(\vec{a},y)$, so the Tarski-Vaught condition furnishes a witness $a'\in M$ such that $\mc{N}\models\psi(\vec{a},a')$. That $\mc{M}\models\psi(\vec{a},a')$ holds by induction, so $\mc{M}\models\phi(\vec{a})$ as desired. Note that this also shows $\mc{M}\substructeq\mc{N}$, since we may take $\phi(x)\coloneqq x=c$ to show that $c\in M$ for each $c\in\mc{C}$, and take $\phi(\vec{x},y)\coloneqq f(\vec{x})=y$ to show that $f(\vec{a})\in M$ for each $f\in\mc{F}_n$ and $\vec{a}\in M^n$.<span style="float:right;">$\blacksquare$</span>
