---
mathLink: $\catgset$
---

<div class="topSpace"></div>

Date Created: 10/05/2023 19:33:18
Tags: #Type/Definition #Topic/Category_Theory #Topic/Group_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $G$ be a group. The **category of $G$-sets** is the (locally-small) category $\catgset$ defined by the following data:_
* _The objects are **$G$-sets**; that is, pairs $\tpl{X,\phi}$ where $X$ is a set and $\phi:G\to\Aut\l(X\r)$ is a group action; write $\phi_g\!\l(x\r)\coloneqq\phi\l(g\r)\l(x\r)$._
* _The morphisms are **$G$-equivariant** maps; that is, functions $f:X\to X'$ such that $f\l(\phi_g\!\l(x\r)\r)=\phi'_g\!\l(f\l(x\r)\r)$ for all $g\in G$ and $x\in X$._
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2023-05-10_194110/image.svg", width=175></center>

```

**Remark.** That $\catgset$ is a category follows from the fact that identities and compositions of $G$-equivariant maps are $G$-equivariant.<span style="float:right;">$\blacklozenge$</span>
