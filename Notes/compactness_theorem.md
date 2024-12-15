---
title: Compactness Theorem
date: 2024-12-15T16:09:38-05:00
references: []
tags: [In_Progress]
---

# Statement and Proofs

{{< env type="theorem" name="Compactness Thoerem; Gödel 1930 & Maltsev 1936" >}}

Let $L$ be a first-order language. If an $L$-theory $T$ is finitely-satisfiable, then $T$ is satisfiable. In fact, $T$ admits a model $M\models T$ with $|M|\leq\max\l\\{|L|,\aleph_0\r\\}$.{{< /env >}}

{{< env type="proof" hide="false" name="from Completeness" >}}

Every $L$-theory is *syntactically-compact*, in the sense that $T$ is consistent iff every $T$ is finitely-consistent.
> Indeed, if $\phi$ witnesses inconsistency of $T$, then there are finite subtheories $\Delta_0,\Delta_1\subseteq T$ such that $\Delta_0\proves\phi$ and $\Delta_1\proves\lnot\phi$. Their union $\Delta\coloneqq\Delta_0\cup\Delta_1$ is then an inconsistent finite subtheory of $T$, a contradiction.

The {{< link file="completeness_theorem.md" display="Completeness Theorem" type="proved_by" >}} then applies, since if $T$ is finitely-satisfiable, it is finitely-consistent, and hence consistent by the above.<span style="float:right;">$\blacksquare$</span>{{< /env >}}<div class="space"></div>

{{< env type="proof" hide="false" name="with Ultraproducts" >}}

Suppose w.l.o.g. that $T$ is infinite and let $\mc{D}$ be the collection of all finite-subtheories of $T$. For each $\Delta\in\mc{D}$, let $M_\Delta\models\Delta$, and let $X_\Delta\subseteq\mc{D}$ be the subcollection of all finite-subtheories of $T$ containing $\Delta$. Since $X_{\Delta_1}\cap X_{\Delta_2}=X_{\Delta_1\cup\Delta_2}$ for any two $\Delta_i\in\mc{D}$, the collection $F\coloneqq\l\\{X\subseteq\mc{D}\st X\supseteq X_\Delta\textrm{ for some }\Delta\in\mc{D}\r\\}$ is a filter, which extends to an ultrafilter $U\supseteq F$.
<br>
&emsp;&emsp;We claim that the {{< link file="ultraproduct.md" display="ultraproduct" type="references" >}} $M\coloneqq\prod_{\Delta\in\mc{D}}M_\Delta/U$ models $T$. Indeed, for any $\phi\in T$, we have $M_\Delta\models\phi$ for all $\Delta\in X_{\l\\{\phi\r\\}}$, and thus $X_{\l\\{\phi\r\\}}\subseteq\l\\{\Delta\in\mc{D}\st M_\Delta\models\phi\r\\}$. Since $X_{\l\\{\phi\r\\}}\in U$, we have $\l\\{\Delta\in\mc{D}\st M_\Delta\models\phi\r\\}\in U$, and hence $M\models\phi$ by {{< link file="ultraproduct.md" display="Łoś’s Theorem" type="proved_by" secID="los_theorem" secDisplay="Łoś’s Theorem" >}}.<span style="float:right;">$\blacksquare$</span>
{{< /env >}}
