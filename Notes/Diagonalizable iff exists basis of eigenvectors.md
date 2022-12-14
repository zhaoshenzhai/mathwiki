---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 11/06/2022 18:43:08
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector over some field $K$, say with $n\coloneqq\dim V$, and consider a linear operator $T:V\to V$. Then $T$ is diagonalizable iff there exists a basis $\mc{B}\coloneqq\l\{v_1,\dots,v_n\r\}$ of $V$ consisting of eigenvectors of $T$, in which case the $\l(j,j\r)^\textrm{\it{th}}$-entry $\lambda_j$ of_ $\l[T\r]_\mc{B}$ _is the eigenvalue corresponding to $v_j$._

```

_Proof_.
* ($\Rightarrow$): Since $T$ is diagonalizable, there exists a basis $\mc{B}\coloneqq\l\{v_1,\dots,v_n\r\}$ of $V$ such that $\l[T\r]_\mc{B}$ is a diagonal matrix, say $\l[T\r]_\mc{B}\coloneqq\l[t_{ij}\r]$ for some $t_{ij}\in K$. Let $\lambda_j\coloneqq t_{jj}$ for all $j\in\l\{1,\dots,n\r\}$ and observe that
$$\begin{equation}
    \begin{aligned}
        T\l(v_j\r)&=\sum_{i=1}^nt_{ij}v_i && \textrm{Definition of }\l[T\r]_{\mc{B}} \\
        &=t_{jj}v_j && \l[T\r]_\mc{B}\textrm{ is diagonal} \\
        &=\lambda_jv_j. && \textrm{Definition of }\lambda_j
    \end{aligned}
\end{equation}$$

* ($\Leftarrow$): Conversely, if $\mc{B}=\l\{v_1,\dots,v_n\r\}$ is a set of eigenvectors of $T$, then $T\l(v_j\r)=\lambda_jv_j$ for some $\lambda_j\in K$. But then the $\l(i,j\r)^\textrm{th}$-entry of $\l[T\r]_\mc{B}$ is $\lambda_j\delta_{ij}$, so $\l[T\r]_\mc{B}$ is a diagonal matrix. Observe that $\l[T\r]_\mc{B}=\diag\l(\lambda_1,\dots,\lambda_n\r)$.<span style="float:right;">$\blacksquare$</span>
