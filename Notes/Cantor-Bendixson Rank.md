<div class="topSpace"></div>

Date Created: 04/04/2024 17:03:55
References: #Ref/NONE
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Cantor-Bendixson Rank).

Let $X$ be a topological space, and let $X'$ denote the set of all limit points of $X$. For any ordinal $\alpha$, the <b>$\alpha$-th Cantor-Bendixson derivative</b> of $X$ is defined inductively by $X^{(0)}\coloneqq X$, $X^{(\alpha+1)}\coloneqq(X^{(\alpha)})'$, and $X^{(\beta)}\coloneqq\bigcap_{\alpha<\beta}X^{(\beta)}$ for limit $\beta$.
&emsp;&emsp;The <b>Cantor-Bendixson rank</b> of $X$ is the least $\alpha\in\Ord$ such that $X^{(\alpha+1)}=X^{(\alpha)}$, denoted $\CB(X)$.

```
