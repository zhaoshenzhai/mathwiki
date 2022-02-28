<br />
<br />

Date Created: 22/02/2022 18:55:36
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix a morphism $f:X\to Y$. If $f$ has a right inverse, then $f$ is an epimorphism._

```

_Proof_. Let $g:Y\to X$ be a right inverse of $f$ and take $Z\in\obj\l(\cat{C}\r)$. Consider any morphism $\alpha_1,\alpha_2:Y\to Z$ such that $\alpha_1\circ f=\alpha_2\circ f$ and compute
$$\begin{equation}
    \begin{alignedat}{2}
        \alpha_1&=\alpha_1\circ\id_Y&&\axicat{2}\\
        &=\alpha_1\circ\l(f\circ h\r)&&h\textrm{ is a right inverse of }f\\
        &=\l(\alpha_1\circ f\r)\circ h\ \ \ \ \ \ \ \ &&\axicat{1}\\
        &=\l(\alpha_2\circ f\r)\circ h&&\textrm{Assumption}\\
        &=\alpha_2\circ\l(f\circ h\r)&&\axicat{1}\\
        &=\alpha_2\circ\id_Y&&h\textrm{ is a right inverese of }f\\
        &=\alpha_2,&&\axicat{2}
    \end{alignedat}
\end{equation}$$
from which it follows that $f$ is an epimorphism.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The converse does not generically hold. Take, for instance, the preorder category induced by $\l\langle\Z,\leq\r\rangle$ where $\leq$ is the standard ordering on $\mb{Z}$. Every morphism $\l\langle m,n\r\rangle$ where $m,n\in\Z$ is an epimorphism since for all $k\in\Z$, if there exists $\alpha_1,\alpha_2:n\to k$, then necessarily $\alpha_1=\alpha_2$ as $\hom\l(n,k\r)=\l\{\l\langle n,k\r\rangle\r\}$ is a singleton. However, for any $a,b\in\Z$ with $a<b$, the morphism $\l\langle a,b\r\rangle$ does not have a right-inverse (nor a left one, in fact) since $b\not\leq a$ and thus $\hom\l(b,a\r)=\em$.<span style="float:right;">$\blacklozenge$</span>
