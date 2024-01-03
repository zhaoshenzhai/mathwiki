<div class="topSpace"></div>

Date Created: 14/07/2023 19:51:48
References: #Ref/Lan02
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Isomorphism Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a group. If $G$ is solvable, then any subgroup and homomorphic image of $G$ are also solvable.
* If $1\to H\to G\to K\to1$ is a short exact sequence of groups, then $G$ is solvable iff both $H$ and $K$ are solvable.

```

<i>Proof.</i> Let $H\substructeq G$. If $G=G_0\nsupgrp G_1\nsupgrp\cdots\nsupgrp G_n=1$ is an abelian series for $G$, then its intersection $H=H\cap G_0\nsupgrp H\cap G_1\nsupgrp\cdots\nsupgrp H\cap G_n=1$ is an abelian series for $H$. Indeed, that $H\cap G_{i+1}\nsubgrp H\cap G_i$ is clear, so it remains to show that $\l(H\cap G_i\r)/\l(H\cap G_{i+1}\r)$ is abelian, which we do so by showing that it injects into $G_i/G_{i+1}$. Consider the restriction $\pi'$ of the projection $\pi:G_i\to G_i/G_{i+1}$ to $H\cap G_i$. Since $H\cap G_{i+1}\substructeq G_{i+1}=\ker\pi$ and $G_{i+1}\subseteq G_i$, we see that $H\cap G_{i+1}\leq\ker\pi'$. Conversely, if $x\in\ker\pi'$ for some $x\in H\cap G_i$, then $x\in H\cap G_{i+1}$ and hence $H\cap G_{i+1}=\ker\pi'$. Thus $\l(H\cap G_i\r)/\l(H\cap G_{i+1}\r)$ injects in $G_i/G_{i+1}$, as desired.

If $\phi:G\to K$ is a surjective homomorphism to a group $K$, then $K=\phi\l(G_0\r)\nsupgrp\phi\l(G_1\r)\nsupgrp\cdots\nsupgrp\phi\l(G_n\r)=1$ is an abelian series for $K$. Since $\phi$ is surjective, we see from $G_{i+1}\nsubgrp G_i$ that $\phi\l(G_{i+1}\r)\nsubgrp\phi\l(G_i\r)$, so it remains to show that $\phi\l(G_i\r)/\phi\l(G_{i+1}\r)$ is abelian. Consider the function $f:G_i/G_{i+1}\to\phi\l(G_i\r)/\phi\l(G_{i+1}\r)$ defined by $f\l(gG_{i+1}\r)\coloneqq\phi\l(g\r)\phi\l(G_{i+1}\r)$. This is a well-defined surjective homomorphism, so, since $G_i/G_{i+1}$ is abelian, then so is $f\l(G_i/G_{i+1}\r)=\phi\l(G_i\r)/\phi\l(G_{i+1}\r)$.
* If $1\to H\to G\to K\to1$ is an exact sequence, then $H\into G$ and $G\onto K$. Thus $H$ and $K$ are subgroups and homomorphic images of $G$, respectively, so they are solvable. Conversely, the exactness of the sequence gives us $K\iso G/H$, so both $H$ and $G/H$ are solvable. Let $G/H=\bar{G_0}\nsupgrp\bar{G_1}\nsupgrp\cdots\nsupgrp\bar{G_n}=\l\{e\r\}$ be an abelian series of $G/H$. By the Lattice Isomorphism Theorem, every composition factor $\bar{G_i}$ of $G/H$ corresponds to a subgroup $G_i\substructeq G$ containing $H$, which is given by the projection $\pi\l(G_i\r)=\bar{G_i}$. Since $\bar{G_{i+1}}\nsubgrp\bar{G_i}$, we see that $\pi\l(G_{i+1}\r)\nsubgrp\pi\l(G_i\r)$ and hence $G_{i+1}\nsubgrp G_i$. Furthermore, we have the isomorphism $G_i/G_{i+1}\iso\bar{G_i}/\bar{G_{i+1}}$, so $G_i/G_{i+1}$ is abelian. Chaining this series with an abelian series $H=H_0\nsupgrp H_1\nsupgrp\cdots\nsupgrp H_m=\l\{e\r\}$ of $H$ gives us an abelian series
$$\begin{equation}
    G=G_0\nsupgrp G_1\nsupgrp\cdots\nsupgrp G_n=H=H_0\nsupgrp H_1\nsupgrp\cdots\nsupgrp H_m=\l\{e\r\}
\end{equation}$$
of $G$, as desired.<span style="float:right;">$\blacksquare$</span>
