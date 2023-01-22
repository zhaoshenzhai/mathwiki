<div class="topSpace"></div>

Date Created: 23/04/2022 11:25:09
Tags: #Theorem #Topics/Linear_Algebra

Proved by: [[Steinitz Exchange Lemma]], [[Enlargement of linearly independent set by adjoining non-spanned vector]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Basis Extension Theorem).

_Let $K$ be a field and let $V$ be a finite-dimensional vector space over $K$. If $U\subseteq V$ is a linearly independent subset of $V$, then there exists a finite basis_ $\mc{B}$ _of $V$ with $U\subseteq\mc{B}$._

```

**Remark.** In other words, every linearly independent subset of a finite-dimensional vector space can be extended to a (finite) basis. This holds for the infinite-dimensional case too, but the below proof fails as it relies on induction; a correct proof, requiring Zorn's Lemma, is presented in the link above.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We first observe that any linearly independent subset $U\subseteq V$ must contain no more than $\dim V$ elements, for if not, then any spanning set, and thus any basis, will contain more than $\dim V$ elements. Therefore, we may let $U=\l\{u_1,\dots,u_n\r\}$ for some $n\leq\dim V$. We proceed algorithmically as follows.
* Step 1: If $\span U=V$, then $\mc{B}\coloneqq U$ is a basis for $V$ and we are done. Otherwise, there exists some $s_1\in V$ that is not spanned by $U$ and so $U_1\coloneqq U\cup\l\{s_1\r\}$ is linearly independent.

For all $j>1$:
* Step $j$: If $\span U_{j-1}=V$, then $\mc{B}\coloneqq U_{j-1}=U\cup\l\{s_1,\dots,s_{j-1}\r\}$  is a basis for $V$ and we are done since $U_{j-1}$ is linearly dependent. Otherwise, there exists some $s_j\in V$ that is not spanned by $U$ and so $U_j\coloneqq U_{j-1}\cup\l\{s_j\r\}$ is linearly independent.

Observe that this process terminates in step $j=\dim V-n+1$ since
$$\begin{equation}
    U_{\dim V-n}=U\cup\l\{s_1,\dots,s_{\dim V-n}\r\}
\end{equation}$$
must span $V$. If not, then $U_{\dim V-n+1}=U\cup\l\{s_1,\dots,s_{\dim V-n+1}\r\}$ would be linearly independent with cardinality $\dim V+1$, contradicting the fact that any linearly independent subset of $V$ contains at most $\dim V$ elements. Therefore, the set
$$\begin{equation}
   \mc{B}\coloneqq U\cup\l\{s_1,\dots,s_{\dim V-n}\r\}
\end{equation}$$
is a (finite) basis for $V$ containing $U$.<span style="float:right;">$\blacksquare$</span>
