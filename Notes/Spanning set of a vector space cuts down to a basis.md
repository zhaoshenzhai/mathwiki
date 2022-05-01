<br />
<br />

Date Created: 01/05/2022 17:26:24
Tags: #Proposition #Later/Linear_Algebra/Choice

Proved by: [[Enlargement of linearly independent set by adjoining non-spanned vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a vector space over $K$. If $U\subseteq V$ is a spanning set of $V$, then there exists a basis $\mc{B}\subseteq U$ of $V$._

```

**Remark.** In other words, every spanning set of a vector space can be cut down to a basis. This proof requires Zorn's Lemma.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the collection
$$\begin{equation}
    \ms{L}\coloneqq\l\{\mc{L}\in\pow\l(U\r)\mid\mc{L}\textrm{ is linearly independent}\r\}
\end{equation}$$
of all linearly independent subsets of $U$ and let $\mc{B}\in\ms{L}$ be of greatest cardinality; that is, let $\mc{B}\in\ms{L}$ be such that
$$\begin{equation}
    \fa\mc{L}\in\ms{L}:\l|\mc{B}\r|\geq\l|\mc{L}\r|.
\end{equation}$$
We claim that $\mc{B}$ is a basis for $V$. (**INSERT ZORN'S LEMMA**)

Since $\mc{B}\in\ms{L}$, we see that $\mc{B}\subseteq U\subseteq V$ is linearly independent, so it suffices to show that $\span\mc{B}=V$. Assume, for sake of contradiction, that $\span\mc{B}\neq V$. Certainly then there exists some $v\in V$ not spanned by $V$; we claim that there exists such an element $u\in U$ too. Indeed, the fact that $\span U=V$ implies that $U\subseteq\span\mc{B}\Rightarrow\span\mc{B}=V$, so there must exist some $u\in U$ such that $u\not\in\span\mc{B}$; observe that $u\not\in\mc{B}$ too. But then $\mc{B}\cup\l\{u\r\}$ is a linearly independent subset of $U$ with $\l|\mc{B}\cup\l\{u\r\}\r|>\l|\mc{B}\r|$, contradicting that fact that $\mc{B}$ has greatest cardinality.<span style="float:right;">$\blacksquare$</span>
