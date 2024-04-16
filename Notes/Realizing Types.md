<div class="topSpace"></div>

Date Created: 05/02/2024 19:52:58
References: #Ref/Mar02
Tags: #Type/Proposition #Topic/Logic/Model_Theory

Proved by: [[Compactness Theorem]], [[Elementarity#^embeddings-via-diagrams]], [[Elementarity#^extension-of-partial-elementary]]
References: [[Homogeneous Model]], [[Saturated Model]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Realizing Types).

Let $\mc{M}$ be an $\mc{L}$-structure and fix $A\subseteq M$. Every $n$-type $p(\vec{x})$ in $\mc{M}$ over $A$ can be realized in some elementary extension $\mc{N}\elemextend\mc{M}$. Moreover:
* The type $p(\vec{x})$ is complete, i.e. $p\in S_n^\mc{M}(A)$, iff there is an elementary extension $\mc{N}\elemextend\mc{M}$ and some $\vec{a}\in N^n$ such that $p=\tp^\mc{N}(\vec{a}/A)$.
* If $\vec{a}_1,\vec{a}_2\in M^n$ have the same type over $A$, then there is an elementary extension $\mc{N}\elemextend\mc{M}$ and an $A$-preserving $h\in\Aut_\mc{L}\mc{N}$ mapping $\vec{a}_1\mapsto\vec{a}_2$.

```

<b>Remark.</b> This shows us that every type is contained in some complete type $\tp^\mc{N}(\vec{a}/A)$ in an elementary extension $\mc{N}\elemextend\mc{M}$. Moreover, complete types are exactly the ones that tell us the possible first-order properties an element in an elementary extension can have. If $\mc{M}$ is homogeneous, then no elementary extension is needed.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We claim that the $\mc{L}_{M,\vec{x}}$-theory $T\coloneqq p(\vec{x})\cup\Diag_\textrm{el}\mc{M}$ is satisfiable, for then any model $\mc{N}\models T$ elementarily extends $\mc{M}$ and the interpretation $\vec{a}$ of $\vec{x}$ in $\mc{N}$ gives us the realization $\mc{N}\models p(\vec{a})$. Consider the $\mc{L}$-formula $\Delta(\vec{x},\vec{a},\vec{b})\coloneqq\phi(\vec{x},\vec{a})\land\psi(\vec{a},\vec{b})$, where $\phi(\vec{x},\vec{a})\in p$ and $\mc{M}\models\psi(\vec{y},\vec{z})$ with $\vec{a}\in A$ and $\vec{b}\in A^c$. Let $\mc{N}_0$ be any model of $p(\vec{x})\cup\Th_A\mc{M}$. Since $\ex\vec{z}\psi(\vec{a},\vec{z})\in\Th_A\mc{M}$, we have $\mc{N}_0\models\phi(\vec{x},\vec{a})\land\ex\vec{z}\psi(\vec{a},\vec{z})$, and interpreting the $\mc{L}_M$-constants $\vec{b}$ as witnesses to $\ex\vec{z}\psi(\vec{a},\vec{z})$ makes $\mc{N}_0\models\Delta$. Thus $T$ admits the desired model $\mc{N}$ by Compactness.
* For the second claim, that $\mc{M}\elemembed\mc{N}$ and $\vec{a}\in N^n$ gives us that $p=\tp^\mc{N}(\vec{a}/A)\in S_n^\mc{N}(A)=S_n^\mc{M}(A)$. Conversely, let $\mc{N}\elemextend\mc{M}$ be an elementary extension realizing $p$, so $p\subseteq\tp^\mc{N}(\vec{a}/A)$ for some $\vec{a}\in N^n$. Since $p$ is complete, either $\phi(\vec{x})\in p$ or $\lnot\phi(\vec{x})\in p$ for each $\phi(\vec{x})\in\mc{L}_A$ and so $p=\tp^\mc{N}(\vec{a}/A)$.
* Finally, suppose that $\tp^\mc{M}(\vec{a}_1/A)=\tp^\mc{M}(\vec{a}_2/A)$ and consider the map $f:A\cup\l\{\vec{a}_1\r\}\to\mc{M}$ fixing $A$ and sending $\vec{a}_1\mapsto\vec{a}_2$. By assumption, $f$ is a partial elementary map, and hence extends to an elementary embedding $h_0:\mc{M}\eqqcolon\mc{M}_0\eleminto\mc{N}_0$ for some elementary extension $\mc{N}_0\elemextend\mc{M}$. Then $h_0^{-1}:h_0(M)\eleminto\mc{M}$ is elementary, so it extends to an elementary embedding $g_0:\mc{N}_0\eleminto\mc{M}_1$ for some elementary extension $\mc{M}_1\elemextend\mc{M}_0$. Repeating this gives us an extension $h_1:\mc{M}_1\eleminto\mc{N}_1\elemextend\mc{N}_0$ of $h_0$, so continuing inductively gives us the desired.<span style="float:right;">$\blacksquare$</span>
