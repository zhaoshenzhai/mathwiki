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

Let $I$ be a set and consider the poset $\tpl{\pow\l(I\r),\subseteq}$. A <b>filter</b> on $I$ is a non-empty collection $F\subseteq\pow\l(I\r)$ that is closed upwards and closed under finite meets.
* An <b>ultrafilter</b> on $I$ is a proper $\subseteq$-maximal filter. Equivalently, it is a filter $U$ on $I$ such that for all $X\subseteq I$, either $X\in U$ or $X^c\in U$.
* A filter $F$ on $I$ is <b>principal</b> if there is some $i\in I$ such that $F=\l\{X\subseteq I\st i\in X\r\}$. Otherwise, $F$ is said to be <b>free</b>.

```

<b>Remark.</b> We justify the equivalence of the definition of an ultrafilter $U$ as follows. Let $U$ be a proper $\subseteq$-maximal filter on $I$ and take $X\subseteq I$. If $X\not\in U$, consider the collection $U'\coloneqq\l\{Y\subseteq I\st Y\supseteq Z\comp X\textrm{ for some }Z\in U\r\}$, which is a filter on $I$ containing $U$. Since $X^c\in U'$, the maximality of $U$ forces $X^c\in U$. The converse is easy.
* Thus we can think of an ultrafilter $U$ as a finitely-additive $2$-valued measure $\mu$ on $\pow\l(I\r)$. In particular, every principal filter is an ultrafilter.

By Zorn’s Lemma, every filter $F$ is contained in an ultrafilter. Indeed, the union of any chain in the collection $\mc{F}\coloneqq\l\{G\subseteq\pow\l(I\r)\st G\supseteq F\textrm{ is a filter}\r\}$ is contained in $\mc{F}$, so we have a $\subseteq$-maximal element $U\supseteq F$. This gives us the existence of a non-principal ultrafilter $U$ on $I$, by taking the maximal extension of the <i>Fréchet filter</i> on $\N$ consisting of all cofinite sets.<span style="float:right;">$\blacklozenge$</span> ^ultrafilter-lemma
