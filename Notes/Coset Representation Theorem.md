<div class="topSpace"></div>

Date Created: 28/06/2023 14:51:23
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Orbit-Stabilizer Theorem]], [[Isomorphism Theorems]], [[Lagrange's Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Coset Representation Theorem).

Let $G$ be a group and fix $n\in\N$. Then the set of all subgroups $H\subgrpeq G$ with index $n$ is in bijection with the set of all pointed transitive $G$-sets $\tpl{S,s_0}$ of size $n$.
* If $G$ is finitely-generated, say with $G=\gen{x_1,\dots,x_r}$, then there at most $\l(n!\r)^r$-many subgroups $H\subgrpeq G$ of index $n$.
* If $H\subgrpeq G$ is of index $n$, then $H$ contains a normal subgroup $K\nsubgrpeq G$ such that $\l[G:K\r]$ divides $n!$.
* If $G$ is a finite group and $p$ is the small prime dividing $\l|G\r|$, then every subgroup $H\subgrpeq G$ of index $p$ is normal.

```

<i>Proof.</i> Let $H\subgrpeq G$ be of index $n$ and consider the left-multiplication action of $G$ on $G/H$ given by $\phi_g\!\l(xH\r)\coloneqq\l(gx\r)H$ for all $g,x\in G$. This is a transitive action since for all $xH,yH\in G/H$, we have $yH=\l(yx^{-1}\r)xH$. Observe that $\l|G/H\r|=\l[G:H\r]=n$, as desired. Conversely, let $\tpl{S,s_0}$ be a pointed transitive $G$-set of size $n$ and set $H\coloneqq\Stab_G\!\l(s_0\r)\subgrpeq G$. Then $\l[G:H\r]=\l[G:\Stab_G\!\l(s_0\r)\r]=\l|\Orb_G\!\l(s_0\r)\r|=S$ by the Orbit-Stabilizer Theorem, as desired.
* It suffices to show that the collection of all pointed transitive $G$-sets $\tpl{S,s_0}$ of size $n$ is finite. Indeed, such a $G$-set is given by an action $\phi:G\to\Aut\l(S\r)$, and since $G=\gen{x_1,\dots,x_r}$, this homomorphism is uniquely determined by where it sends its generators. Since $\phi\l(x_i\r)\in\Aut\l(S\r)=S_n$ for each $x_i$, there are $n!$ choices for each generator and hence there are $\l(n!\r)^r$ choices for $\phi$.
* Let $\phi:G\to\Aut\l(G/H\r)$ be its associated action and set $K\coloneqq\ker\phi$. Then $K\nsubgrpeq G$ is contained in $H$, and $\phi$ descends to an injection $G/K\into\Aut\l(G/H\r)=S_n$.
* Let $H\subgrpeq G$ be a subgroup of index $p$, so there exists a normal subgroup $K\nsubgrpeq G$ contained in $H$ such that $\l[G:K\r]$ divides $p!$. Note that
$$\begin{equation}
    \l[G:K\r]=\l[G:H\r]\l[H:K\r]=p\l[H:K\r]
\end{equation}$$
divides $p!$, so $\l[H:K\r]$ divides $p!/p=\l(p-1\r)!$. Observe that the prime divisors of $\l(p-1\r)!$ are all less than $p$. But Lagrange’s Theorem shows that $\l[H:K\r]$ divides $\l|G\r|$, so, by minimality of $p$, the prime divisors of $\l[H:K\r]$ are all no less than $p$. This is a contradiction unless $\l[H:K\r]=1$, in which case $H=K\nsubgrpeq G$.<span style="float:right;">$\blacksquare$</span>
