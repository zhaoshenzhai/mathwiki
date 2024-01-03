<div class="topSpace"></div>

Date Created: 14/07/2023 18:26:00
References:
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Zassenhaus Lemma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Schreier Refinement Theorem).

Let $G$ be a group. Then any two normal series
$$\begin{equation}
    G=G_0\nsupgrp G_1\nsupgrp\cdots\nsupgrp G_n=\l\{e\r\}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ G=H_0\nsupgrp H_1\nsupgrp\cdots\nsupgrp H_m=\l\{e\r\}
\end{equation}$$
of $G$ have equivalent refinements, in the sense that they can be refined so that $n=m$ and that $G_i/G_{i+1}\iso H_{i'}/H_{i'+1}$ for some permutation $i\mapsto i'$.

```

<b>Remark.</b> The special case of this theorem where the two normal series are composition series of $G$ is called the Jordan-Hölder Theorem. Applying this to finite groups, where composition series exist, this gives us a ‘unique prime factorization’ of finite groups. The way that the composition factors are ‘glued’ together to reconstruct the original group is called the <i>extension problem</i>.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Consider the sets $G_{ij}\coloneqq G_{i+1}\l(G_i\cap H_j\r)$ for $0\leq i\leq n-1$ and $0\leq j\leq m$, which for a fixed $i$, is a descending series with $G_{i0}=G_i$ and $G_{im}=G_{i+1}$. Applying the Zassenhaus Lemma to the subgroups $G_{i+1}\nsubgrp G_i$ and $H_{j+1}\nsubgrp H_j$ shows us that $G_{i,j+1}=G_{i+1}\l(G_i\cap H_{j+1}\r)\nsubgrpeq G_{i+1}\l(G_i\cap H_j\r)=G_{ij}$, and, in particular, that $G_{ij}$ are all subgroups of $G$. This gives us a refinement
$$\begin{equation}
    G=G_{00}\nsupgrp G_{01}\nsupgrp\cdots\nsupgrp G_{0,m-1}\nsupgrp G_{10}\nsupgrp\cdots G_{1,m-1}\nsupgrp\cdots\nsupgrp G_{n-1,0}\nsupgrp\cdots\nsupgrp G_{n-1,m-1}\nsupgrp\l\{e\r\}
\end{equation}$$
of the first subgroup series with length $nm+1$. Similarly, letting $H_{ij}\coloneqq H_{j+1}\l(H_j\cap G_i\r)$ for $0\leq i\leq n$ and $0\leq j\leq m-1$ gives us a refinement of the second subgroup series with the same length. Finally, applying the Zassenhaus Lemma again to the subgroups $G_{i+1}\nsubgrpeq G_i$ and $H_{j+1}\nsubgrp H_j$ for $0\leq i\leq n-1$ and $0\leq j\leq m-1$ gives us the isomorphism
$$\begin{equation}
    \frac{G_{ij}}{G_{i,j+1}}=\frac{G_{i+1}\l(G_i\cap H_j\r)}{G_{i+1}\l(G_i\cap H_{j+1}\r)}\iso\frac{H_{j+1}\l(H_j\cap G_i\r)}{H_{j+1}\l(H_j\cap G_{i+1}\r) }=\frac{H_{ij}}{H_{i+1,j}},
\end{equation}$$
so the composition factors of the two refinements are, up to a permutation of indices, isomorphic.<span style="float:right;">$\blacksquare$</span>
