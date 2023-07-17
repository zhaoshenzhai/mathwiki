<div class="topSpace"></div>

Date Created: 23/11/2022 16:46:30
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Unique Factorization Domain (UFD)]]
Generalizations: <i>Not Applicable</i>

Properties: [[Gauss's Lemma (Irreducibility)]], [[Irreducible implies prime (UFD)]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Maximal implies prime]]

``` ad-Definition
title: Definition.

Let $R$ be an integral domain. An element $a\in R$ is <b>irreducible</b> if it is non-zero, not a unit, and if $a=rs$ implies that either $r$ or $s$ is a unit in $R$.

```

<b>Remark.</b> Since $R$ is an integral domain, we see that a non-zero non-unit element $a=rs\in R$ is irreducible iff either $a\sim r$ or $a\sim s$, which by definition occurs iff $\gen{a}=\gen{r}$ or $\gen{a}=\gen{s}$. A less obvious characterization is that this occurs iff $\gen{a}$ is maximal amongst proper principal ideals.
* ($\Rightarrow$): If $a\in R$ is irreducible, suppose $b\in R$ is such that $\gen{a}\subseteq\gen{b}\subset R$. Then $a\in\gen{b}$, so $a=br$ for some $r\in R$. Thus either $b\in R^\times$ or $r\in R^\times$, but since $\gen{b}\neq R$, we have $r\in R^\times$.
* ($\Leftarrow$): Write $a=rs$ for some $r,s\in R$. Then $a\in\gen{r}$, so $\gen{a}\subseteq\gen{r}$ and hence either $\gen{a}=\gen{r}$ or $\gen{r}=R$. In the latter case, we have $r\in R^\times$. Otherwise, we have $a\sim r$, and since $R$ is an integral domain, we see that $a=ru$ for some $u\in R^\times$. Thus $rs=ru$, so $s=u\in R^\times$.

In a PID where all ideals are principal, we see that a non-zero element $a\in R$ is irreducible iff $\gen{a}$ is maximal. Thus $\gen{a}$ is prime, so $a\in R$ is a prime element. Thus, in a PID, irreducible elements are exactly the prime elements.<span style="float:right;">$\blacklozenge$</span>
