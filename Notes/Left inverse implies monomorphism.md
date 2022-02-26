<br />
<br />

Date Created: 22/02/2022 18:43:24
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix a morphism $f:X\to Y$. If $f$ has a left inverse, then $f$ is a monomorphism._

```

_Proof_. Let $g:Y\to X$ be a left inverse of $f$ and take $Z\in\obj\l(\cat{C}\r)$. Consider any morphisms $\alpha_1,\alpha_2:Z\to X$ such that $f\circ\alpha_1=f\circ\alpha_2$ and compute
$$\begin{equation}
    \begin{alignedat}{2}
        \alpha_1&=\id_X\circ\alpha_1&&\axicat{2}\\
        &=\l(g\circ f\r)\circ\alpha_1\ \ \ \ \ \ \ \ &&g\textrm{ is a left inverse of }f\\
        &=g\circ\l(f\circ\alpha_1\r)&&\axicat{1}\\
        &=g\circ\l(f\circ\alpha_2\r)&&\textrm{Assumption}\\
        &=\l(g\circ f\r)\circ\alpha_2&&\axicat{1}\\
        &=\id_X\circ\alpha_2&&g\textrm{ is a left inverse of }f\\
        &=\alpha_2,&&\axicat{2}
    \end{alignedat}
\end{equation}$$
from which it follows that $f$ is a monomorphism.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The converse does not generically hold. Take, for instance, the preorder category induced by $\l\langle\Z,\leq\r\rangle$ where $\leq$ is the standard ordering on $\mb{Z}$. Every morphism $\l\langle m,n\r\rangle$ where $m,n\in\Z$ is a monomorphism since for all $k\in\Z$, if there exists $\alpha_1,\alpha_2:k\to m$, then necessarily $\alpha_1=\alpha_2$ as $\hom\l(k,m\r)=\l\{\l\langle k,m\r\rangle\r\}$ is a singleton. However, for any $a,b\in\Z$ with $a<b$, the morphism $\l\langle a,b\r\rangle$ does not have a left-inverse (nor a right one, in fact) since $b\not\leq a$ and thus $\hom\l(b,a\r)=\em$.<span style="float:right;">$\blacklozenge$</span>
