---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/10/2022 10:49:46
Tags: #Theorem #Topics/Group_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Cayley$\textrm{'}$s Theorem).

_Let $G$ be a group. Then there exists an injective group homomorphism $\phi:G\into\Aut\l(G\r)$._

```

**Remark.** That is, every group is isomorphic to some permutation group.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the group action $\phi:G\to\Aut\l(G\r):g\to\phi_g$ by $\phi_g\!\l(h\r)\coloneqq gh$ for all $g,h\in G$; that is, the left regular action on $G$. For all $h\in G$, we see that $g\in G_h$ iff $gh=h$, so $G_h=\l\{e\r\}$. Thus $\ker\phi=\l\{e\r\}$, so $\phi:G\into\Aut\l(G\r)$.<span style="float:right;">$\blacksquare$</span>
