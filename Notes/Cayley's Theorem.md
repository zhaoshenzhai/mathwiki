---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/10/2022 10:49:46
Tags: #Theorem #Courses/MATH235

Proved by: [[Basic properties of groups]], [[Criteria for equality of functions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Cayley$\textrm{'}$s Theorem).

_Let $G$ be a group. Then there exists an injective group homomorphism $\phi:G\into\Sym\l(G\r)$._

```

**Remark.** That is, every group is isomorphic to some permutation group.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $x\in G$ and define $\phi:x\mapsto\lambda_x$ where $\lambda_x:G\to G:g\mapsto xg$ is the left-multiplication map. We claim that $\lambda_x\in\Sym\l(G\r)$ and that $\phi$ is an injective homomorphism.
* ($\lambda_x\in\Sym\l(G\r)$): For injectivity, take $g_1,g_2\in G$ such that $\lambda_x\l(g_1\r)=\lambda_x\l(g_2\r)$. Then $xg_1=xg_2$, so $g_1=g_2$. For surjectivity, take $g\in G$ and observe that $\lambda_x\l(x^{-1}g\r)=x\l(x^{-1}g\r)=g$.

* ($\phi$ is a homomorphism): Take $x,y\in G$ and observe that
$$\begin{equation}
    \phi\l(xy\r)\l(g\r)=\lambda_{xy}\l(g\r)=\l(xy\r)g=x\l(yg\r)=\lambda_x\l(yg\r)=\lambda_x\l(\lambda_y\l(g\r)\r)=\l(\lambda_x\lambda_y\r)\l(g\r)=\l[\phi\l(x\r)\phi\l(y\r)\r]\l(g\r)
\end{equation}$$
for all $g\in G$, so $\phi\l(xy\r)=\lambda_{xy}=\lambda_x\lambda_y=\phi\l(x\r)\phi\l(y\r)$.
* ($\phi$ is injective): Take $x,y\in G$ such that $\phi\l(x\r)=\phi\l(y\r)$, so $\lambda_x=\lambda_y$. Then, in particular, we have $\lambda_x\l(e\r)=xe=x$ and $\lambda_y\l(e\r)=ye=y$, so $x=y$.<span style="float:right;">$\blacksquare$</span>
