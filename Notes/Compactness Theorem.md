---
mathLink-blocks:
    syntactic-compactness: Syntactic Compactness
---

<div class="topSpace"></div>

Date Created: 15/12/2023 17:41:04
References: #Ref/Anu23 #Ref/Anu23_318 #Ref/Mar02
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Ultrafilter#^ultrafilter-lemma]], [[Ultraproduct#^los-theorem]]
References: [[Completeness Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Compactness Theorem; Gödel 1930 & Maltsev 1936).

Let $\mc{L}$ be a language in $\FOL$. If an $\mc{L}$-theory $T$ is finitely satisfiable, then it admits a model of cardinality $\leq\max\l\{\l|\mc{L}\r|,\aleph_0\r\}$.

```

<b>Remark.</b> This theorem also follows from the Completeness Theorem and <i>syntactic-compactness</i>, that $T$ is consistent iff every finite subtheory $T'\subseteq T$ is consistent.
* Indeed, if $\phi$ witnesses inconsistency for $T$, then there exist finite subtheories $T_0,T_1\subseteq T$ such that $T_0\proves\phi$ and $T_1\proves\lnot\phi$. Their union $T'\coloneqq T_0\cup T_1$ is then an inconsistent finite subtheory of $T$, a contradiction. ^syntactic-compactness

With these facts, since $T$ is finitely satisfiable, every finite subtheory of $T$ is consistent and hence the entire theory $T$ is consistent; the Completeness Theorem then gives the desired model. Below, we give a ‘purely semantic’ proof of the Compactness Theorem instead.
&emsp;&emsp;Note that the Compactness Theorem also shows that if $T\models\phi$, then there is a finite subtheory $T'\subseteq T$ such that $T'\models\phi$. Indeed, if $T\models\phi$, then $T\cup\l\{\lnot\phi\r\}$ is not satisfiable and hence there is a finite non-satisfiable subtheory $T_0\subseteq T\cup\l\{\lnot\phi\r\}$. Put $T'\coloneqq T_0\cap T$, so $T'\cup\l\{\lnot\phi\r\}$ is not satisfiable and hence $T'\models\phi$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Suppose w.l.o.g. that $T$ is infinite and let $I$ be the set of all finite subtheories of $T$. For each $i\in I$, let $\mc{A}_i\models i$ and let $X_i\subseteq I$ be the set of all finite subtheories of $T$ containing $i$. Since $X_i\cap X_{i'}=X_{i\cup i'}$ for all $i,i'\in I$, the collection $F\coloneqq\l\{X\subseteq I\st X\supseteq X_i\textrm{ for some }i\in I\r\}$ is a filter on $I$ and hence admits an ultrafilter $U\supset F$. We claim that the ultraproduct $\mc{A}\coloneqq\prod_i\mc{A}_i\big/U$ models $T$. Heuristically, $\mc{A}\models\phi$ for each $\phi\in T$ since $X_{\l\{\phi\r\}}$ contains ‘enough’ finite subtheories of $T$ that satisfies $\phi$.
* Indeed, take $\phi\in T$. If $j\in X_{\l\{\phi\r\}}$, then $\phi\in j$ and hence $\mc{A}_j\models\phi$. Thus $X_{\l\{\phi\r\}}\subseteq\l\{i\in I\st\mc{A}_i\models\phi\r\}$, so $\l\{i\in I\st\mc{A}_i\models\phi\r\}\in U$ and hence $\mc{A}\models\phi$ by Łoś’s Theorem.<span style="float:right;">$\blacksquare$</span>
