---
mathLink-blocks:
    intermediate-value-theorem: Intermediate Value Theorem
---

<div class="topSpace"></div>

Date Created: 28/12/2022 22:22:37
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Path-connected Space#^path-connected-implies-connected]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A topological space $X$ is <b>disconnected</b> if there exist non-empty disjoint open subsets $U,V\subseteq X$ such that $X=U\cup V$. Otherwise, $X$ is said to be <b>connected</b>.

```

<b>Remark.</b> We have the <i>Intermediate Value Theorem</i>, which states that if $f:X\to Y$ is a continuous function and $X$ is connected, then so is $f\l(X\r)$.
^intermediate-value-theorem
* Indeed, suppose that $f\l(X\r)=V_1\cup V_2$ for non-empty disjoint open sets $V_1,V_2$ in $Y$. Then $f^{-1}\!\l(V_1\r)$ and $f^{-1}\!\l(V_2\r)$ are non-empty, and they are disjoint since if there exists some $x\in f^{-1}\!\l(V_1\r)\cap f^{-1}\!\l(V_2\r)$, then $f\l(x\r)\in V_1\cap V_2$. By continuity of $f$, the two sets are also open in $X$, contradicting the connectedness of $X$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Note that $X$ is disconnected iff it contains a non-trivial clopen set. Also, if $A\subseteq X$ is connected, then so is $\bar{A}$.
* Indeed, suppose otherwise, so $\bar{A}=U\cup V$ for some non-empty disjoint open subsets $U,V\subseteq\bar{A}$. Note that $U\cap A$ and $V\cap A$ are disjoint open subsets of $A$ and that $A=\bar{A}\cap A=\l(U\cup V\r)\cap A=\l(U\cap A\r)\cup\l(V\cap A\r)$, so, since $A$ is connected, one of $U\cap A$ and $V\cap A$ must be empty. Assume w.l.o.g. that $U\cap A=\em$, so $U$ contains a limit point of $A$. This neighborhood $U$ thus intersects $A$ non-trivially, and since $A\subseteq V$, we see that $U\cap V\neq\em$.<span style="float:right;">$\blacklozenge$</span>
