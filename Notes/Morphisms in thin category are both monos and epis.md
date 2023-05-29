<div class="topSpace"></div>

Date Created: 24/02/2022 12:46:42
Tags: #Type/Proposition #Later/Category_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\cat{C}$ be a thin category. Then all morphisms $f:X\to Y$ are both monomorphisms and epimorphisms.

```

<i>Proof.</i> Consider any $Z\in\Obj\l(\cat{C}\r)$. If there exist morphisms $\alpha_1,\alpha_2:Z\to X$, then $\Hom\l(Z,X\r)\neq\em$ and is thus, by definition of a thin category, a singleton. It follows that $\alpha_1$ must coincide with $\alpha_2$ and thus $f$ is a monomorphism. Similarly, if there exist morphisms $\beta_1,\beta_2:Y\to Z$, then $\Hom\l(Y,Z\r)\neq\em$ and is thus a singleton. It follows that $\beta_1=\beta_2$ and thus $f$ is also an epimorphism.<span style="float:right;">$\blacksquare$</span>
