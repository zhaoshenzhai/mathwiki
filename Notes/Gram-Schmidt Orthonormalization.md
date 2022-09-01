<div class="topSpace"></div>

Date Created: 27/06/2022 16:08:32
Tags: #Theorem

Proved by: [[Linearly dependent iff exists span redundant element]], [[Basic properties of orthogonal vectors]], [[Orthonormal sets are linearly independent]], [[Dimension of subspace less than dimension of vector space (finite-dim.; strict iff proper)]], [[Linearly independent set with same cardinality as dimension (finite) is a basis]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Gram-Schmidt Orthonormalization).

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $\l\{v_1,\dots,v_m\r\}$ is a linearly independent set of vectors in $V$, then the list $\l\{e_1,\dots,e_m\r\}$, defined inductively by_
$$\begin{equation}
    e_1\coloneqq\frac{v_1}{\l\|v_1\r\|}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ e_j\coloneqq\frac{v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i}{\l\|v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i\r\|}\ \ \ \ \textrm{\it{for}}\ \ \ \ j\in\l\{2,\dots,m\r\},
\end{equation}$$
_is an orthonormal list of vectors in $V$ such that $\span\l\{e_1,\dots,e_j\r\}=\span\l\{v_1,\dots,v_j\r\}$ for all $j\in\l\{1,\dots,m\r\}$._

_In particular, if $m=\dim V$, then_ $\l\{e_1,\dots,e_{\dim V}\r\}$ _is an orthonormal basis for $V$._

```

_Proof_. We proceed by induction on $j$.
* When $j=1$, we have $\span\l\{v_1\r\}=\span\l\{\l\|v_1\r\|e_1\r\}=\span\l\{e_1\r\}$, and since $v_1\neq0$, the expression for $e_1$ is well-defined with $\l\|e_1\r\|=1$.

For any $2<j<m$, assume that $\l\{e_1,\dots,e_{j-1}\r\}$ is an orthonormal list of vectors in $V$ such that
$$\begin{equation}
    \span\l\{e_1,\dots,e_{j-1}\r\}=\span\l\{v_1,\dots,v_{j-1}\r\};\cref{\ast}
\end{equation}$$
we wish to show that $\l\{e_1,\dots,e_j\r\}$ is an orthonormal list such that $\span\l\{e_1,\dots,e_j\r\}=\span\l\{v_1,\dots,v_j\r\}$.
* We first note that the expression for $e_j$ is well-defined, for linear independence of $\l\{v_1,\dots,v_m\r\}$ implies that $v_j\not\in\l\{v_1,\dots,v_{j-1}\r\}$ and hence, by $\ref{\ast}$, that $v_j\not\in\l\{e_1,\dots,e_{j-1}\r\}$. It follows then that $v_j$ cannot be written in the form of $\sum_{i=1}^{j-1}\alpha_ie_i$, so the denominator is non-zero.

To show that $\l\{e_1,\dots,e_j\r\}$ is an orthonormal list is to show that $\bilform{e_k}{e_l}=\delta_{kl}$ for all $1\leq k,l\leq j$. But this is already true, by our induction hypothesis, for $1\leq k,l\leq j-1$, and since $\bilform{e_k}{e_l}=0\Rightarrow\bilform{e_l}{e_k}=0$, it suffices to verify the remaining cases for when $k=j$ and $1\leq l<j$. This is seen via
$$\begin{equation}
	\begin{aligned}
		\bilform{e_j}{e_l}&=\bilform{\frac{v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i}{\l\|v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i\r\|}}{e_l} && \textrm{Definition of $e_j$} \\
        &=\frac{\bilform{v_j}{e_l}-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}\bilform{e_i}{e_l}}{\l\|v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i\r\|} && \textrm{Linearity in the first slot} \\
        &=\frac{\bilform{v_j}{e_l}-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}\delta_{il}}{\l\|v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i\r\|} && \l\{e_1,\dots,e_{j-1}\r\}\textrm{ orthonormal} \\
        &=\frac{\bilform{v_j}{e_l}-\bilform{v_j}{e_l}}{\l\|v_j-\sum_{i=1}^{j-1}\bilform{v_j}{e_i}e_i\r\|} && \delta_{il}=0\textrm{ for all }i\neq l
	\end{aligned}
\end{equation}$$
which evaluates to $0$. It remains to show that $\span\l\{e_1,\dots,e_j\r\}=\span\l\{v_1,\dots,v_j\r\}$, for which it suffices to show one containment; the other follows from the fact that $\l\{e_1,\dots,e_j\r\}$ is linearly independent and is hence a basis for $\span\l\{e_1,\dots,e_j\r\}$, so $\dim\span\l\{e_1,\dots,e_j\r\}=j$ which coincides with $\dim\span\l\{v_1,\dots,v_j\r\}$, showing that the sets themselves coincide.
* To show one containment, observe that $v_j\in\span\l\{e_1,\dots,e_j\r\}$ from the definition of $e_j$, so
$$\begin{equation}
    \span\l\{v_1,\dots,v_j\r\}\subseteq\span\l\{e_1,\dots,e_j\r\}
\end{equation}$$
when combined with $\ref{\ast}$.

Finally, if $m=\dim V$, then $\l\{v_1,\dots,v_{\dim V}\r\}$ is a basis for $V$. Hence $\l\{e_1,\dots,e_{\dim V}\r\}$ is an orthonormal spanning set for $V$, showing that it is an orthonormal basis for $V$.<span style="float:right;">$\blacksquare$</span>
