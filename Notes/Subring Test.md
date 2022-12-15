<div class="topSpace"></div>

Date Created: 14/11/2022 21:33:46
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: [[Subgroup Test]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Subring Test).

_Let $\tpl{R,+,\cdot,0}$ be a ring and fix a subset $S\subseteq R$. Let_ $+'\coloneqq\l.+\r|_{S\times S}$ _and_ $\cdot'\coloneqq\l.\cdot\r|_{S\times S}$_, and fix $0'\in S$. Then $\tpl{S,+',\cdot',0'}$ is a subring of $\tpl{R,+,\cdot,0}$ iff_
* _$\tpl{S,+',0'}$ is a subgroup of $\tpl{R,+,0}$, and_
* _$\fa s_1,s_2\in S:s_1\cdot' s_2\in S$._

```

_Proof_.
* ($\Rightarrow$): Since $S$ is a subring of $R$, we see that $\tpl{S,+',\cdot',0'}$ is a ring and hence $\tpl{S,+',0'}$ is a group. As in the proof for the Subgroup Test, we see that $0'=0$ and hence $\tpl{S,+',0}$ is a subgroup of $\tpl{R,+,0}$. Now, the fact that $\cdot'$ closes in $S$ follows readily from the fact that $\tpl{S,+',\cdot',0}$ is a ring.

* ($\Leftarrow$): Being a subgroup, we see that $\tpl{S,+',\cdot',0}$ is an Abelian group. Now, since $\cdot':S\times S\to S$ closes and is associative, we see that $\l(S,\cdot'\r)$ is a monoid. The distributive laws hold trivially.<span style="float:right;">$\blacksquare$</span>
