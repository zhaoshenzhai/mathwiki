---
mathLink: $\l[G:N\r]=2\Rightarrow N\nsubgrpeq G$
---

<div class="topSpace"></div>

Date Created: 27/10/2022 18:19:43
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Orbit-Stabilizer Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $H\subseteq G$ be a subgroup of a group $G$. If $\l[G:H\r]=2$, then $H\nsubgrpeq G$.

```

<i>Proof.</i> Since $H\subgrpeq N_G\!\l(H\r)$, we see that $\l[G:N_G\!\l(H\r)\r]$ is either $1$ or $2$. If it is $1$, then $N_G\!\l(H\r)=G$ and we are done. Otherwise, the orbit of $H$ under the conjugation action of $G$ on $\pow\l(G\r)$ has $2$ elements since $N_G\!\l(H\r)$ is precisely the stabilizer of $H$ under this action. Restricting the action to the orbit of $H$ gives us an action $\phi:G\to S_2$ where stabilizers of one under this action must also stabilize the other (since it has nowhere to go). Thus $\l[G:\ker\phi\r]=2$, and since $H\subseteq\ker\phi$, we see that $H=\ker\phi\nsubgrpeq G$.<span style="float:right;">$\blacksquare$</span>
