<div class="topSpace"></div>

Date Created: 01/05/2022 23:08:55
Tags: #Type/Theorem #Later/Set_Theory/Choice

Proved by: [[Enlargement of linearly independent set by adjoining non-spanned vector]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: [[Basis Extension Theorem (Finite)]]
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Basis Extension Theorem).

Let $V$ be a $K$-vector space. If $U\subseteq V$ is linearly independent, then there exists a basis $\mc{B}$ of $V$ with $U\subseteq\mc{B}$.

```

**Remark.** In other words, every linearly independent subset of a vector space can be extended to a basis. The finite-dimensional case can be proved using just induction (in fact, it is constructive), but the infinite-dimensional case requires Zorn$\textrm{'}$s Lemma.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the collection
$$\begin{equation}
    \ms{L}\coloneqq\l\{\mc{L}\in\pow\l(V\r)\mid U\subseteq\mc{L}\land\mc{L}\textrm{ is linearly independent}\r\}
\end{equation}$$
of all linearly independent subsets of $V$ containing $U$ (which is non-empty since $U$ is linearly independent), and let $\mc{B}\in\ms{L}$ be of greatest cardinality; that is, let $\mc{B}\in\ms{L}$ be such that
$$\begin{equation}
    \fa\mc{L}\in\ms{L}:\l|\mc{B}\r|\geq\l|\mc{L}\r|.
\end{equation}$$
We claim that $\mc{B}$ is a basis for $V$. (**Insert Zorn$\textrm{'}$s Lemma**)

Since $\mc{B}\in\ms{L}$, we see that $\mc{B}$ is linearly independent and so it suffices to show that $\span\mc{B}=V$. Assume, for sake of contradiction, that $\span\mc{B}\neq V$, so there exists some $v\in V$ not spanned by $\mc{B}$; observe that $v\not\in\mc{B}$ too. But then $\mc{B}\cup\l\{v\r\}$ is a linearly independent subset of $V$ with $\l|\mc{B}\cup\l\{v\r\}\r|>\l|\mc{B}\r|$ and $U\subseteq\mc{B}\subseteq\mc{B}\cup\l\{v\r\}$, contradicting the fact that $\mc{B}$ has the greatest cardinality.<span style="float:right;">$\blacksquare$</span>
