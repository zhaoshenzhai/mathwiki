---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/12/2022 14:18:41
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ and fix $A\subseteq X$ and $B\subseteq Y$. Then_
* _$A\subseteq\preim_f\l(\im_f\l(A\r)\r)$; equality holds if $f$ is injective, and_
* _$\im_f\l(\preim_f\l(B\r)\r)\subseteq B$; equality holds if $f$ is surjective._

```

_Proof_.
* Take $a\in A$, so there exists some $b\in Y$ such that $f\l(a\r)=b$. But then $b\in\im_f\l(A\r)$, so $a\in\preim_f\l(\im_f\l(A\r)\r)$. Conversely, for all $a\in\preim_f\l(\im_f\l(A\r)\r)$, we see that $f\l(a\r)\in\im_f\l(A\r)$. Thus $f\l(a\r)=b$ for some $b\in Y$ such that $b=f\l(a'\r)$ for some $a'\in A$. With $f$ injective, this forces $a=a'$, so $a\in A$.

* Take $b\in\im_f\l(\preim_f\l(B\r)\r)$, so there exists some $a\in\preim_f\l(B\r)$ such that $f\l(a\r)=b$. But then $b=f\l(a\r)\in B$. Conversely, for all $b\in B$, $f$ being surjective furnishes some $a\in A$ such that $f\l(a\r)=b$. Then $a\in\preim_f\l(B\r)$, so $b\in\im_f\l(\preim_f\l(B\r)\r)$.<span style="float:right;">$\blacksquare$</span>
