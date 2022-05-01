<br />
<br />

Date Created: 01/05/2022 20:24:07
Tags: #Proposition #Later/Linear_Algebra/Choice

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a vector space over $K$. If $U\subseteq V$ is linearly independent, then there exists a basis $\mc{B}$ of $V$ with $U\subseteq\mc{B}$._

```

**Remark.** In other words, every linearly independent subset of a vector space can be extended to a basis. This proof requires Zorn's Lemma.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the collection
$$\begin{equation}
    \ms{S}\coloneqq\l\{\mc{S}\subseteq\pow\l(U\r)\mid U\subseteq\mc{S}\land\span\mc{S}=V\r\}
\end{equation}$$
of all spanning sets of $V$ containing $U$ and let $\mc{B}\in\ms{S}$ be of least cardinality; that is, let $\mc{B}\in\ms{S}$ be such that
$$\begin{equation}
    \fa\mc{S}\in\ms{S}:\l|\mc{B}\r|\leq\mc{S}.
\end{equation}$$
We claim that $\mc{B}$ is a basis for $V$. (**INSERT ZORN'S LEMMA**)

Hi
