<div class="topSpace"></div>

Date Created: 09/05/2023 12:40:54
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Fundamental Theorem of Group Homomorphisms]], [[Basic properties of subgroups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Isomorphism Theorems).

_Let $G$ and $G'$ be groups. Then the following $\textrm{`}$isomorphism theorems$\textrm{'}$ hold._
* _(First Isomorphism Theorem): If $\phi:G\to G'$ is a homomorphism, then $G/\ker\phi\iso\im\phi$._
* _(Second Isomorphism Theorem): If $H,K\subgrpeq G$ and $H\subgrpeq N_G\!\l(K\r)$, then $HK/K\iso H/\l(H\cap K\r)$._
* _(Third Isomorphism Theorem): If $H,K\nsubgrpeq G$ and $H\subgrpeq K$, then $\l(G/H\r)/\!\l(K/H\r)\iso G/K$._

```

_Proof_. The First Isomorphism Theorem is simply a restatement of the Fundamental Theorem of Homomorphisms.
* (Second Isomorphism Theorem): First, note that $HK\subgrpeq G$. Then, since $H\subgrpeq N_G\!\l(K\r)$ and $K\subgrpeq N_G\!\l(K\r)$ trivially, we see that $HK\subgrpeq N_G\!\l(K\r)$ and hence $K\nsubgrpeq HK$. Also, since $H\subgrpeq N_G\!\l(K\r)$, we see that $hK=Kh$ for all $h\in H$ and hence $k\l(H\cap K\r)=\l(H\cap K\r)h$ for all $h\in H$. Hence $H\cap K\nsubgrpeq H$. Now, consider the map $\phi:H\to HK/K$ as the restriction of the projection $\pi:HK\to HK/K$ to the subgroup $H\subgrpeq HK$. Then $\phi$ is a surjective homomorphism, so $H/\ker\phi\iso HK/K$ by the First Isomorphism Theorem. Since $\ker\pi=K$, we see that $\ker\phi=H\cap\ker\pi=H\cap K$, as desired.

* (Third Isomorphism Theorem): Since $H\nsubgrpeq G$, we see that $H\nsubgrpeq K$ too. To show that $K/H\nsubgrpeq G/H$, take $gH\in G/H$ and $kH\in K/H$. Then, since $K\nsubgrpeq G$, we see that $\l(gH\r)\l(kH\r)=\l(gk\r)H=\l(k'g\r)H=\l(k'H\r)\l(gH\r)$. Now, consider the map $\phi:G/H\to G/K$ mapping $gH\mapsto gK$. Since $H\subgrpeq K$, this map is well-defined. Clearly $\phi$ is a surjective homomorphism, so $\l(G/H\r)/\ker\phi\iso G/K$ by the First Isomorphism Theorem. But $gH\in\ker\phi$ iff $g\in K$, which occurs iff $gH\in K/H$.<span style="float:right;">$\blacksquare$</span>
