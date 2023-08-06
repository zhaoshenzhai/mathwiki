---
mathLink: auto
mathLink-blocks:
    similarity-of-matrices: Similarity of Matrices
    cyclic-subspace: Cyclic Subspace
---

<div class="topSpace"></div>

Date Created: 04/08/2023 15:27:00
Tags: #Type/Example #Topic/Module_Theory

Examples: <i>Not Applicable</i>
Abstractions: [[Endomorphism (Category Theory)]]
Constructions: [[Eigenvalue]], [[Characteristic Polynomial]]

Properties: <i>Not Applicable</i>
Sufficiencies: [[Canonical Forms]]
Justifications: [[Universal Property of Monoid Rings and Algebras]]

``` ad-Example
title: Example.

The <b>endomorphism $R$-algebra</b> of an $R$-module $M$ over a commutative ring $R$ is the $R$-algebra $\End_{\catmod[R]}\!\l(M\r)$ under the induced addition, left $R$-action, and composition of maps.

```

<b>Remark.</b> Let $M$ be a fin-gen. free $R$-module. After fixing an isomorphism $M\iso R^n$, every $\alpha\in\End\l(R^n\r)$ is determined uniquely by a square matrix $A\in\Mat_n\!\l(R\r)$, which acts on elements in $R^n$ by left-multiplication.
* We say that two matrices $A_1$ and $A_2$ are <b>similar</b> if they represent the same homomorphism up to a <i>single</i> choice of basis for $M$, which occurs iff there is an invertible matrix $P\in\Mat_n\!\l(R\r)$ such that $A_2=PA_1P^{-1}$. Note that this is distinct from ‘equivalence of matrices’, where <i>two</i> choices of bases $B_1$ and $B_2$ for $M$ are made and we treat $\alpha\in\Hom\l(F^R\!\l(B_1\r),F^R\!\l(B_2\r)\r)$.

We lift this notion and say that two endomorphisms $\alpha_1,\alpha_2\in\End\l(M\r)$ are <b>similar</b> iff there is an automorphism $\pi\in\Aut\l(M\r)$ such that $\alpha_2=\pi\alpha_1\pi^{-1}$; this is precisely the conjugation action of $\GL\l(M\r)$ on $\End\l(M\r)$.<span style="float:right;">$\blacklozenge$</span>
^similarity-of-matrices

---

<b>Remark.</b> The data of an operator $\alpha\in\End\l(M\r)$ is the same as an $R\l[t\r]$-module structure on $M$ compatible with its $R$-module structure. Indeed, such an $R\l[t\r]$-module structure is precisely an $R$-algebra homomorphism $\widetilde{\phi}:R\l[t\r]\to\End\l(M\r)$ extending the $R$-module structure $\phi$, which is uniquely determined by its image $\alpha\coloneqq\widetilde{\phi}\l(t\r)$.
* Moreover, the $R\l[t\r]$-module structures on $M$ induced by $\alpha,\beta\in\End\l(M\r)$ are isomorphic as $R\l[t\r]$-modules iff $\alpha$ and $\beta$ are similar. Indeed, a map $\pi:M_\alpha\to M_\beta$ is an $R\l[t\r]$-module homomorphism iff it is an $R$-module homomorphism and $\pi\alpha=\beta\pi$, so $\pi$ is an $R\l[t\r]$-module isomorphism iff it is an $R$-module isomorphism and $\beta=\pi\alpha\pi^{-1}$. The latter is exactly the condition for $\alpha$ and $\beta$ to be similar, as desired.

Under this identification, we can view a cyclic module $\gen{m}_{k\l[x\r]}\iso k\l[x\r]/\!\Ann m$ as a <i>cyclic subspace</i> $C_\alpha\!\l(m\r)\coloneqq\gen{m,\alpha\l(m\r),\alpha^2\!\l(m\r),\dots}_k$. If $M$ is $k$-finitely-generated, then $\dim_kC_\alpha\!\l(m\r)$ is the degree of the unique monic polynomial $p\in k\l[x\r]$ generating $\Ann m$. Indeed, let $d\coloneqq\deg p$. Then $\gen{m,\alpha\l(m\r),\dots,\alpha^{d-1}\!\l(m\r)}_k$ is a $k$-basis for $\gen{m}$ since $p\cdot m=0$ and hence $\alpha^d\!\l(m\r)\in\gen{\alpha^i\!\l(m\r)}_{i=0}^{d-1}$, so it generates $\gen{m}$, and is linearly independent since if $\sum_{i=0}^{k}a_i\alpha^i\!\l(m\r)=0$ is the shortest relation for some $k\leq d-1$ with $a_k\neq0$, then $q\coloneqq x^k+\sum_{i=0}^{k-1}a_i/a_kx^i$ annihilates $m$, contradicting the fact that $p$ is the unique monic polynomial generating $\Ann m$.<span style="float:right;">$\blacklozenge$</span>
^cyclic-subspace
