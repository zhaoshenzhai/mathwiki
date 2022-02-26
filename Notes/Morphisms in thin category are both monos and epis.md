<br />
<br />

Date Created: 24/02/2022 12:46:42
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a thin category. Then all morphisms $f:X\to Y$ are both monomorphisms and epimorphisms._

```

_Proof_. Consider any $Z\in\obj\l(\cat{C}\r)$. If there exist morphisms $\alpha_1,\alpha_2:Z\to X$, then $\hom\l(Z,X\r)\neq\em$ and is thus, by definition of a thin category, a singleton. It follows that $\alpha_1$ must coincide with $\alpha_2$ and thus $f$ is a monomorphism. Similarly, if there exist morphisms $\beta_1,\beta_2:Y\to Z$, then $\hom\l(Y,Z\r)\neq\em$ and is thus a singleton. It follows that $\beta_1=\beta_2$ and thus $f$ is also an epimorphism.<span style="float:right;">$\blacksquare$</span>
