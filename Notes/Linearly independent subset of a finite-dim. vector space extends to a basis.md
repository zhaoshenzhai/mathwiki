<br />
<br />

Date Created: 23/04/2022 11:25:09
Tags: #Proposition #Closed

Proved by: [$\l|\textrm{Linearly independent set}\r|\leq\l|\textrm{Spanning set}\r|$ (finite-dim.)](Cardinality%20of%20linearly%20independent%20sets%20no%20more%20than%20that%20of%20spanning%20sets%20(finite-dim.).md), [[Enlargement of linearly independent set by adjoining non-spanned vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a finite-dimensional vector space over $K$. If $S\subseteq V$ is a linearly independent subset of $V$, then there exists a finite basis_ $\mc{B}\coloneqq\l\{b_1,\dots,b_{\dim V}\r\}$ _of $V$ such that $S\subseteq\mc{B}$._

```

**Remark.** In other words, every linearly independent subset of a finite-dimensional vector space can be extended to a (finite) basis. Furthermore, it proves that every finite-dimensional vector space has a basis.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We first observe that any linearly independent subset $S\subseteq V$ must contain no more than $\dim V$ elements, for if not, then any spanning set, and thus any basis, will contain more than $\dim V$ elements. Therefore, we may let $S=\l\{b_1,\dots,b_n\r\}$ for some $n\leq\dim V$. We proceed algorithmically as follows.
* Step 1: If $\span S=V$, then $\mc{B}\coloneqq S$ is a basis of $V$ and we are done. Otherwise, there exists some $b_{n+1}\in V$ that is not spanned by $S$ and so $S_1\coloneqq S\cup\l\{b_{n+1}\r\}$ is linearly independent.

For all $j>1$:
* Step $j$: If $\span S_{j-1}=V$, then $\mc{B}\coloneqq S_{j-1}=S\cup\l\{b_{n+1},\dots,b_{n+j-1}\r\}$  is a basis of $V$ and we are done since $S_{j-1}$ is linearly dependent. Otherwise, there exists some $b_{n+j}\in V$ that is not spanned by $S$ and so $S_j\coloneqq S_{j-1}\cup\l\{b_{n+j}\r\}$ is linearly independent.

Observe that this process terminates in step $j=\dim V-n+1$ since
$$\begin{equation}
    \begin{aligned}
        S_{\dim V-n}&=S\cup\l\{b_{n+1},\dots,b_{n+\dim V-n}\r\} \\
        &=S\cup\l\{b_{n+1},\dots,b_{\dim V}\r\}
    \end{aligned}
\end{equation}$$
must span $V$. If not, then $S_{\dim V-n+1}=S\cup\l\{b_{n+1},\dots,b_{\dim V+1}\r\}$ would be linearly independent, contradicting the fact that any linearly independent subset of $V$ contains at most $\dim V$ elements. Therefore, the set
$$\begin{equation}
   \mc{B}\coloneqq S\cup\l\{b_{n+1},\dots,b_{\dim V}\r\}
\end{equation}$$
is a finite basis of $V$ containing $S$.<span style="float:right;">$\blacksquare$</span>
