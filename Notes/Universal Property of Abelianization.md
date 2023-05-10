<div class="topSpace"></div>

Date Created: 10/05/2023 11:39:52
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Universal Property of Quotient Groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Universal Property of Abelianization).

_Let $G$ be a group. Then the abelianization $\pi:G\to G^\textrm{ab}$ is universal among homomorphisms into abelian groups. That is, for any abelian group $H$ and homomorphism $\phi:G\to H$, the following diagram commutes:_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2023-05-10_114112/image.svg", width=175></center>

```

**Remark.** In other words, for any $N\nsubgrpeq G$, the quotient $G/N$ is abelian iff $\l[G,G\r]\subgrpeq N$,  for consider the homomorphism $\phi:G\to G/N$. If $G/N$ is abelian, the universality of $G^\textrm{ab}$ furnishes a homomorphism $\tilde{\phi}:G/\l[G,G\r]\to G/N$. Thus $\l[G,G\r]\subgrpeq N$. The converse is clear.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Observe that $\l[G,G\r]\subgrpeq\ker\phi$ since $\phi\l(xyx^{-1}y^{-1}\r)=\phi\l(x\r)\phi\l(y\r)\phi\l(x\r)^{-1}\phi\l(y\r)^{-1}=e$ for all $x,y\in G$, so the result follows by universality of the quotient.<span style="float:right;">$\blacksquare$</span>
