<div class="topSpace"></div>

Date Created: 05/02/2024 19:52:58
References: #Ref/Mar02
Tags: #Type/Proposition #Later/Logic/Model_Theory

Proved by: [[Compactness Theorem]], [[Elementarity#^embeddings-via-diagrams]], [[Extension of partial elemntary map to an embedding into an elementary extension]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Realizing Types).

Let $\mc{M}$ be a $\sigma$-structure and fix $A\subseteq M$. Every $n$-type $p(\vec{x})$ in $\mc{M}$ over $A$ can be realized in some elementary extension $\mc{N}\elemextend\mc{M}$. Moreover:
* The type $p(\vec{x})$ is complete, i.e. $p\in S_n^\mc{M}(A)$, iff there is an elementary extension $\mc{N}\elemextend\mc{M}$ and some $\vec{a}\in N^n$ such that $p=\tp^\mc{N}(\vec{a}/A)$.
* <span style="color:pink">If $\vec{a}_1,\vec{a}_2\in M^n$ have the same type over $A$, then there is an elementary extension $N\elemextend\mc{M}$ and an $A$-preserving $f\in\Aut_\sigma\mc{N}$ such that $f(\vec{a}_1)=\vec{a}_2$.</span>

```

<b>Remark.</b> This shows us that every type is contained in some complete type $\tp^\mc{N}(\vec{a}/A)$ in an elementary extension $\mc{N}\elemextend\mc{M}$. Moreover, complete types are exactly the ones that tell us the possible first-order properties an element in an elementary extension can have.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We claim that the $\sigma_{M,\vec{x}}$-theory $T\coloneqq p(\vec{x})\cup\Diag_\textrm{el}\mc{M}$ is satisfiable, for then any model $\mc{N}\models T$ elementarily extends $\mc{M}$ and the interpretation $\vec{a}$ of $\vec{x}$ in $\mc{N}$ gives us the realization $\mc{N}\models\phi(\vec{a})$ for all $\phi\in p$. To this end, let $\Delta\subseteq T$ be finite, which we may w.l.o.g. assume to be the $\sigma$-formula $\phi(\vec{x},\vec{a})\land\psi(\vec{a},\vec{b})$ by taking conjunctions, where $\phi(\vec{x},\vec{a})\in p$, $\psi(\vec{y},\vec{z})$ is a $\sigma$-formula with $\mc{M}\models\psi(\vec{a},\vec{b})$, $\vec{a}\in A$, and $\vec{b}\in A^c$. Since $p(\vec{x})$ is a type, let $\mc{N}_0$ be model $p(\vec{x})\cup\Th_A\mc{M}$. Note that $\ex\vec{z}\psi(\vec{a},\vec{z})\in\Th_A\mc{M}$, so $\mc{N}_0\models\phi(\vec{x},\vec{a})\land\ex\vec{z}\psi(\vec{a},\vec{z})$. Interpreting the $\sigma_M$-constants $\vec{b}$ as witnesses to $\ex\vec{z}\psi(\vec{a},\vec{z})$ makes $\mc{N}_0\models\Delta$, so $T$ admits the desired model $\mc{N}$ by Compactness.
* For the second claim, that $\mc{M}\elemembed\mc{N}$ and $\vec{a}\in N^n$ gives us that $p=\tp^\mc{N}(\vec{a}/A)\in S_n^\mc{N}(A)=S_n^\mc{M}(A)$. Conversely, let $\mc{N}\elemextend\mc{M}$ be an elementary extension realizing $p$, so $p\subseteq\tp^\mc{N}(\vec{a}/A)$ for some $\vec{a}\in N^n$. Since $p$ is complete, either $\phi(\vec{x})\in p$ or $\lnot\phi(\vec{x})\in p$ for each $\phi(\vec{x})\in\Form(\sigma_A)$ and so $p=\tp^\mc{N}(\vec{a}/A)$.

Finally, suppose that $\tp^\mc{M}(\vec{a}_1/A)=\tp^\mc{M}(\vec{a}_2/A)$.
