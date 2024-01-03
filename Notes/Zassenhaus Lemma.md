<div class="topSpace"></div>

Date Created: 14/07/2023 17:28:21
References:
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Basic properties of subgroups]], [[Isomorphism Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Zassenhaus).

Let $H\nsubgrpeq H^\ast$ and $K\nsubgrpeq K^\ast$ be subgroups of a group $G$. Then $H\l(H^\ast\cap K\r)\nsubgrpeq H\l(H^\ast\cap K^\ast\r)$ and $K\l(K^\ast\cap H\r)\nsubgrpeq K\l(K^\ast\cap H^\ast\r)$, and the quotients are isomorphic:
$$\begin{equation}
    \frac{H\l(H^\ast\cap K^\ast\r)}{H\l(H^\ast\cap K\r)}\iso\frac{K\l(K^\ast\cap H^\ast\r)}{K\l(K^\ast\cap H\r)}.
\end{equation}$$

```

<i>Proof.</i> Consider the set $A\coloneqq\l(H^\ast\cap K\r)\l(H\cap K^\ast\r)$. We claim that $A$ is a normal subgroup of $H^\ast\cap K^\ast$, that $A=\l(H\cap K^\ast\r)\l(H^\ast\cap K\r)$, and that
$$\begin{equation}
    \frac{H\l(H^\ast\cap K^\ast\r)}{H\l(H^\ast\cap K\r)}\iso\frac{H^\ast\cap K^\ast}{A},
\end{equation}$$
from which the result follows by interchanging $H$ and $K$. Indeed, $H^\ast\cap K\nsubgrpeq H^\ast\cap K^\ast$ since for all $x\in H^\ast\cap K$ and $g\in H^\ast\cap K^\ast$, we see that $x\in K$ and $g\in K^\ast$, from which it follows that $g^{-1}xg\in K$; that $g^{-1}xg\in H^\ast$ is clear. Similarly, we have $H\cap K^\ast\nsubgrpeq H^\ast\cap K^\ast$, so the first two claims follow. For the isomorphism, we construct a homomorphism $\phi:H\l(H^\ast\cap K^\ast\r)\to\l(H^\ast\cap K^\ast\r)/A$ as follows. For $x\in H\l(H^\ast\cap K^\ast\r)$, say $x=hg$ for some $h\in H$ and $g\in H^\ast\cap K^\ast$, set $\phi\l(x\r)\coloneqq gA$.
* (Well-definition). If $x=h'g'$ for some $h'\in H$ and $g'\in H^\ast\cap K^\ast$, then $hg=h'g'$ and hence $g'g^{-1}=h'^{-1}h\in H\cap\l(H^\ast\cap K^\ast\r)=H\cap K^\ast\substructeq A$. But $g'\in H^\ast\cap K^\ast$, so normality of $A$ in $H^\ast\cap K^\ast$ implies that $g'^{-1}\l(g'g^{-1}\r)g'=g^{-1}g'\in A$ too. Thus $g'A=gA$, as desired.
* (Homomorphism). Take $x_1,x_2\in H\l(H^\ast\cap K^\ast\r)$, say $x_i=h_ig_i$ for some $h_i\in H$ and $g_i\in H^\ast\cap K^\ast$. Then $x_1x_2=h_1g_1h_2g_2$, but since $g_1h_2g_1^{-1}\in H$, we see that $g_1h_2=h'g_1$ for some $h'\in H$. Thus $x_1x_2=h_1h'g_1g_2$, from which it follows that $\phi\l(x_1\r)\phi\l(x_2\r)=g_1g_2=\phi\l(x_1x_2\r)$.

That $\phi$ is surjective is clear, so the result follows from the First Isomorphism Theorem if $\ker\phi=H\l(H^\ast\cap K\r)$. Indeed, $x=hg\in\ker\phi$ iff $g=\phi\l(x\r)\in A$, in which case $x=hg\in HA=H\l(H^\ast\cap K\r)\l(H\cap K^\ast\r)=H\l(H^\ast\cap K\r)$. Thus $H\l(H^\ast\cap K\r)\nsubgrpeq H\l(H^\ast\cap K^\ast\r)$, and we have the desired isomorphism.<span style="float:right;">$\blacksquare$</span>
