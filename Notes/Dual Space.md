<div class="topSpace"></div>

Date Created: 25/01/2023 09:37:02
Tags: #Type/Definition #Topic/Module_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Riesz Representation Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Dimension Theorem]], [[Basis Extension Theorem]]

``` ad-Definition
title: Definition.

Let $V$ be a $k$-vector space. The <b>dual space of $V$</b> is the vector space $V^\dual\coloneqq\Hom\l(V,k\r)$, whose elements $\omega:V\to k$ are said to be <b>linear forms</b>.

```

<b>Remark.</b> Taking the dual defines a contravariant functor $\l(\slot\r)^\dual:\catvect[k]\to\catvect[k]$ mapping each morphism $T:V\to W$ to the morphism $T^\dual:W^\dual\to V^\dual$ defined by $T^\dual\!\l(\gamma\r)\coloneqq\gamma\circ T$. This functor is an anti-equivalence of $\catfgvect[k]$ to itself.
* Indeed, we have a natural isomorphism $\phi:1\to\l(\slot\r)^{\dual\dual}$ defined, for all $V\in\Obj\l(\catfgvect[k]\r)$, by $\phi_V:V\to V^{\dual\dual}$ mapping $v\mapsto\l(\hat{v}:\omega\mapsto\omega\l(v\r)\r)$. This map is clearly linear, and since $V$ is finitely-generated, it suffices to show that it is injective. Take $v\in\ker\phi_V$, so $\phi_V\!\l(v\r)\l(\omega\r)=0$ for all $\omega\in V^\dual$. If $v\neq0$, then considering the dual basis $\l\{\psi,\epsilon_2,\dots,\epsilon_n\r\}$ of any basis extension $\l\{v,e_2,\dots,e_n\r\}$ of $\l\{v\r\}$ shows us that $\psi\l(v\r)=1$ with $\psi\in V^\dual$, a contradiction. It remains to show that $\phi$ is a natural transformation, so take $T\in\Hom\l(V,W\r)$ and observe that
$$\begin{equation}
    \l(\phi_W\circ T\r)\l(v\r)\l(\omega\r)=\widehat{T\l(v\r)}\l(\omega\r)=\omega\l(T\l(v\r)\r)=\hat{v}\l(\omega\circ T\r)=\hat{v}\l(T^\dual\!\l(\omega\r)\r)=\l(\hat{v}\circ T^\dual\r)\l(\omega\r)=T^{\dual\dual}\!\l(\hat{v}\r)\l(\omega\r)=\l(T^{\dual\dual}\circ\phi_V\r)\l(v\r)\l(\omega\r)
\end{equation}$$
for all $v\in V$ and $\omega\in V^\dual$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $V$ is finite-dimensional, we have that $\dim V^\dual=\dim\Hom\l(V,k\r)=\dim V\cdot\dim k=\dim V$, so $V\iso V^\dual$. However, this isomorphism depends on a choice of basis, and is hence not ‘natural’.<span style="float:right;">$\blacklozenge$</span>
