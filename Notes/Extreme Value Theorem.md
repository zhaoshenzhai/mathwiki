<div class="topSpace"></div>

Date Created: 28/12/2022 21:42:50
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Image of union is union of images]], [[Compositions of images slash preimages]]
References: [[Least slash greatest on compacta of R]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Extreme Value Theorem).

Let $X$ and $Y$ be topological spaces, and consider a continuous function $f:X\to Y$. If $X$ is compact, then $\im f$ is compact.

```

**Remark.** In particular, this shows that for a continuous function $f:X\to\R$ with compact domain, $f$ has a least and greatest value.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Let $\l\{V_\alpha\r\}$ be a collection of open sets of $Y$ that covers $\im f$. Since $f$ is continuous, each $\preim_f\!\l(V_\alpha\r)$ is open and hence $\l\{\preim_f\!\l(V_\alpha\r)\r\}$ is an open cover of $X$. But $X$ is compact, so there exist finitely-many indices $\alpha_1,\dots,\alpha_k$ such that $X=\bigcup_{i=1}^k\preim_f\!\l(V_{\alpha_i}\r)$. Observe then that
$$\begin{equation}
    \im f=\im_f\!\l(X\r)=\im_f\!\l(\bigcup_{i=1}^k\preim_f\!\l(V_{\alpha_i}\r)\r)=\bigcup_{i=1}^k\im_f\!\l(\preim_f\!\l(V_{\alpha_i}\r)\r)\subseteq\bigcup_{i=1}^k V_{\alpha_i},
\end{equation}$$
so the finite collection $\l\{V_{\alpha_i}\r\}_{i=1}^k$ covers $\im f$.<span style="float:right;">$\blacksquare$</span>
