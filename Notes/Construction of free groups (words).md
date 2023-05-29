<div class="topSpace"></div>

Date Created: 10/05/2023 14:26:23
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $A$ be a set. Construct a set $F\l(A\r)$ as follows.
* Let $A^{-1}\iso A$ be any set disjoint from $A$ and write $a^{-1}$ for the corresponding element of $a$ in $A^{-1}$. Fix any set $e\not\in A\cup A^{-1}$ and let $A\coloneqq A\cup A^{-1}\cup\l\{e\r\}$ be the set of **alphabets**.
* A **word over $A$** is a sequence $\tpl{a_1,a_2,\dots}$ in $A$ such that $a_i=e$ eventually. The maximum $n\in\N$ such that $a_n\neq e$ is the **length of $w$**. Let $W$ denote the set of all words over $A$.
* An **elementary reduction over $W$** is a function $r:W\to W$ defined as follows. Let $w\coloneqq\tpl{a_1,a_2\dots}$ be a word over $A$.
    * If $a_i=e$ for some $i$ and $a_j\neq e$ for some $j>i$, then $r\l(w\r)\coloneqq\tpl{a_1,\dots,a_{i-1},a_{i+1},\dots}$.
    * If $a_{i+1}=a_i^{-1}$ for some $i$, then $r\l(w\r)\coloneqq\tpl{a_1,\dots,a_{i-1},a_{i+2},\dots}$.
    * Otherwise, $r\l(w\r)\coloneqq w$.
* The **reduction over $W$** is the function $R:W\to W$ defined as follows. Let $\tpl{a_1,\dots,a_n,e,e,\dots}\in W$ and set $R\l(w\r)\coloneqq r^n\!\l(w\r)$.
* Let $F\l(A\r)\coloneqq\im R$ be the set of reduced words on $A$ and let $j:A\to F\l(A\r)$ be the embedding that maps $a\mapsto\tpl{a,e,e,\dots}$.
* Define the binary operation $\ast:F\l(A\r)\times F\l(A\r)\to F\l(A\r)$ as follows. For reduced words $w\coloneqq\tpl{a_1,\dots,a_k,e,e,\dots}$ and $w'\coloneqq\tpl{a_1',\dots,a_l',e,e,\dots}$, define $w\ast w'$ by reducing the juxtaposition; that is, let $w\ast w'\coloneqq R\tpl{a_1,\dots,a_k,a_1',\dots,a_l',e,e,\dots}\eqqcolon R\l(ww'\r)$.

Then $F\l(A\r)$, equipped with $\ast$ and the map $j:A\to F\l(A\r)$, is a free group on $A$.

```

<i>Proof.</i> First, note that every $w\in F\l(A\r)$ is of the form $\tpl{a_1^{\epsilon_1},\dots,a_n^{\epsilon_n},e,e,\dots}$ for some $n\in\N$, $a_i\in A$, and $\epsilon_i=\pm1$, where $a_{i+1}^{\epsilon_{i+1}}\neq a_i^{-\epsilon_i}$ for all $i$. Indeed, let $w\in W$ be a word of length $n$. If $r\l(w\r)\neq w$, then $r$ decreases the length of $w$ by at least $1$ and so $r^m\!\l(w\r)=w$ for some $m\leq n$. Thus taking $R\l(w\r)\coloneqq r^n\!\l(w\r)$ ensures that $R\l(w\r)$ is of the desired form. We now prove that $F\l(A\r)$ forms a group under $\ast$. Let $u\coloneqq j\l(e\r)$.
* That $w\ast u=w=u\ast w$ for all $w\in F\l(A\r)$ is clear. For all $w\coloneqq\tpl{a_1,\dots,a_n,e,e}\in F\l(A\r)$, let $w^{-1}\coloneqq\tpl{a_n^{-1},\dots,a_1^{-1},e,e}$ be the word by inverting the alphabets and reversing the order. Then $w^{-1}\in F\l(A\r)$ and satisfies $w\ast w^{-1}=u=w^{-1}\ast w$. Associativity can be checked in cases.

Finally, we check that $F\l(A\r)$ equipped with the embedding $j:A\to F\l(A\r)$ satisfies the universal property. Let $G$ be a group and $f:A\to G$ be a function. Any homomorphism $\phi:F\l(A\r)\to G$ such that $f=\phi\circ j$ must satisfy $\phi\l(a_1^{\epsilon_1},\dots,a_n^{\epsilon_n},e,e,\dots\r)=f\l(a_1\r)^{\epsilon_1}\cdots f\l(a_n\r)^{\epsilon_n}$, and the function defined this way is a homomorphism.<span style="float:right;">$\blacksquare$</span>
