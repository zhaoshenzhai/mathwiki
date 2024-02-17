---
mathLink-blocks:
    ultrafilter-lemma: Ultrafilter Lemma
---

<div class="topSpace"></div>

Date Created: 25/01/2024 15:13:54
References: #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Ultraproduct]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Zorn's Lemma]]

``` ad-Definition
title: Definition (Filters and Ultrafilters).

Let $\tpl{B,\land,\lor,\lnot,0,1}$ be a Boolean algebra. A <b>filter</b> on $B$ is a subset $F\subseteq B$ that is closed upwards and closed under finite meets, and is called <b>proper</b> if $0\not\in F$.

* An <b>ultrafilter</b> on $B$ is a proper $\subseteq$-maximal filter. Equivalently, it is a filter $U$ on $B$ such that for all $a\in B$, either $a\in U$ or $\lnot a\in U$.
* A filter $F$ on $B$ is <b>principal</b> if there is some atom $a_0\in B$ such that $F=\l\{a\in B\st a\geq a_0\r\}$.

```

<b>Remark.</b> We justify the equivalence of the definition of an ultrafilter $U$ as follows. Let $U$ be a proper $\subseteq$-maximal filter on $B$ and take $a\in B$. If $a\not\in U$, consider the collection $U'\coloneqq\l\{b\in I\st b\geq\lnot c\textrm{ for some }c\in U\r\}$, which is a filter on $B$ containing $U$. Since $\lnot a\in U'$, the maximality of $U$ forces $\lnot a\in U$. The converse is easy.
* By Zorn’s Lemma, every filter $F$ is contained in an ultrafilter. Indeed, the union of any chain in the collection $\mc{F}\coloneqq\l\{G\subseteq B\st G\supseteq F\textrm{ is a filter}\r\}$ is contained in $\mc{F}$, so we have a $\subseteq$-maximal element $U\supseteq F$. This gives us the existence of a non-principal ultrafilter $U$.<span style="float:right;">$\blacklozenge$</span> ^ultrafilter-lemma

---

<b>Remark.</b> If $I$ is a set, a <i>filter</i> on $I$ is a filter on the Boolean algebra $\pow(I)$. Note that we can view an ultrafilter $U$ on $I$ as a finitely-additive $2$-valued measure on $I$.<span style="float:right;">$\blacklozenge$</span>
