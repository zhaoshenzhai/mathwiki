<div class="topSpace"></div>

Date Created: 28/06/2023 19:31:14
References: #Ref/Lan02 #Ref/Alu09
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Basic properties of p-groups]], [[Cauchy's Theorem]], [[Class Equation]], [[Orbit-Stabilizer Theorem]], [[Lagrange's Theorem]], [[Integers#^invertible-iff-coprime]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Sylow Theorems).

Let $G$ be a finite group and write $\l|G\r|=p^rm$ for some $r,m\in\N$ and some prime $p$ with $p\ndivides m$. We have the following ‘Sylow Theorems’:
* (First Sylow Theorem). Sylow $p$-groups of $G$ exist, and any $p$-subgroup $H\substructeq G$ is contained in a Sylow $p$-subgroup.
* (Second Sylow Theorem). All Sylow $p$-subgroups of $G$ are conjugate.
* (Third Sylow Theorem). Let $n_p$ be the number of Sylow $p$-subgroups of $G$. Then $n_p\equiv1\mod p$ and $n_p\divides m$.

```

<b>Remark.</b> The Sylow Theorems provide the strongest converse to Lagrange’s Theorem. Namely, if $\l|G\r|=p^rm$ is of the form above, then $G$ admits subgroups of order $p^i$ for every $0\leq i\leq r$.
* If $G$ admits exactly one Sylow $p$-subgroup $P$, then it is normal. Indeed, we have $\l[G:N_G\!\l(P\r)\r]=1$ from the proof below, so $N_G\!\l(P\r)=G$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $H\substructeq G$ be any $p$-subgroup of $G$, which, if it is not Sylow, extends to a subgroup $K\substructeq G$ containing $H$ such that $\l[K:H\r]=p$. Thus $K$ is also a $p$-subgroup of $G$, so continuing this way shows that $H$ extends to a Sylow $p$-subgroup of $G$. Note that such a $p$-subgroup $H\substructeq G$ always exist by Cauchy’s Theorem.

Let $P$ be a fixed Sylow $p$-subgroup of $G$.
*  We claim that every $p$-subgroup $H\substructeq G$ is contained in a Sylow $p$-subgroup of $G$ conjugate to $P$, which in particular implies that every Sylow $p$-subgroup $Q\substructeq G$ is conjugate to $P$. Indeed, let $H$ act on $G/P$ by left-multiplication. By the class equation, the number of fixed points of this action is congruent to $\l|G/P\r|$ modulo $p$. But since $P$ is Sylow, $\l|G/P\r|$ does not contain a factor of $p$ and hence this action admits a fixed point $gP$ for some $g\in G$. Thus $\l(hg\r)P=gP$ for all $h\in G$, so $g^{-1}Hg\substructeq P$ and hence $H\substructeq gPg^{-1}$. Since $\l|gPg^{-1}\r|=\l|P\r|$, we see that $gPg^{-1}$ is Sylow, as desired.
* Let $G$ act on the set $X\coloneqq\l\{gPg^{-1}\substructeq G\st g\in G\r\}$ of all Sylow $p$-subgroups of $G$ by conjugation, so $n_p=\l|X\r|=\l|\Orb_G\!\l(P\r)\r|=\l[G:\Stab_G\!\l(P\r)\r]=\l[G:N_G\!\l(P\r)\r]$. Observe then that
$$\begin{equation}
    m=\l[G:P\r]=\l[G:N_G\!\l(P\r)\r]\cdot\l[N_G\!\l(P\r):P\r]=n_p\cdot\l[N_G\!\l(P\r):P\r]\equiv n_p\cdot\l[G:P\r]\mod p=n_pm\mod p,
\end{equation}$$
so in particular $m\equiv n_pm\mod p$. Since $p\ndivides m$ and $p$ is prime, we see that $n_1\equiv1\mod p$, as desired.<span style="float:right;">$\blacksquare$</span>
