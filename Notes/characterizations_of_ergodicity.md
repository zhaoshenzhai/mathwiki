---
title: Characterizations of Ergodicity
date: 2025-05-13
tags: [In_Progress]
---

Let $(X,\mu,T)$ be a \ref[measure preserving dynamical system]{measure-preserving_dynamical_system}. We provide some characterizations for when it is \ref[ergodic]{measure-preserving_dynamical_system#ergodic-transformations}.

# Functional characterization

Recall that a measurable function $f:X\to Y$ (to a measurable space $Y$) is _$T$-invariant_ if $f\circ T=f$. Equivalently, $f$ is $T$-invariant if it is $\E_T$-invariant (i.e., constant on each $\E_T$-class), where $\E_T$ is the _orbit equivalence relation of $T$_ given by $x\E_Ty$ iff $T^n(x)=T^m(y)$ for some $n,m<\omega$.

<br>

&emsp;&emsp;Using $T$-invariant functions, we can characterize the ergodicity of $T$ as follows.

\begin{theorem}[Functional]\label{functional_characterization}

A pmp transformation $T:X\to X$ is ergodic iff every $T$-invariant measurable function $f:X\to Y$ to a \ref[standard Borel space]{measurable_space#borel-sigma-algebra} is constant a.e..

\end{theorem}

\begin{proof}

If $A\subeq X$ is an $\E_T$-invariant measurable set, then $\chi_A:X\to\l\\{0,1\r\\}$ is a $T$-invariant measurable function, so it is constant a.e., and hence $A$ is either null or conull.

<br>

&emsp;&emsp;For the main direction, it suffices by the \ref[Borel Isomorphism Theorem]{borel_isomorphism_theorem} to consider the case when $Y\coloneqq2^\omega$ is equipped with its Borel $\sigma$-algebra, which is generate by cylinders. Let $f:X\to2^\omega$ be a $T$-invariant measurable function, so $f^{-1}(B)$ is $T$-invariant for each Borel $B\subeq2^\omega$. In particular, $f^{-1}([w])$ is either null or conull for each word $w\in2^{<\omega}$. We proceed by finding a (necessarily unique) sequence $y\in2^\omega$ such that $f^{-1}(y)$ is conull, as follows. Call a word $w\in2^{<\omega}$ _heavy_ if $f^{-1}([w])$ is conull; clearly $\e$ is heavy, and if $w$ is heavy, then exactly one of $w0$ and $w1$ is heavy. Thus there is a unique heavy branch $\l\\{y|n\r\\}_{n\in\omega}$, which gives rise to the desired sequence $y\in2^\omega$ since $f^{-1}(y)=\bigcap_nf^{-1}([y|n])$ is the intersection of countably-many conull sets, hence conull.<span style="float:right;">$\blacksquare$</span>

\end{proof}

# Recurrence and the Ergodic Theorems

Recall that a set $A\subeq X$ is _$T$-forward recurrent_ if for each $x\in X$, we have $T^n(x)\in A$ for some $n\geq1$.

\begin{fact}[\ref[Poincaré Recurrence]{poincare_recurrence_theorem}]\label{poincare_recurrence_theorem}

Every measurable set $A\subeq X$ is $T$-forward recurrent on a conull set $A_0\subeq_\mu A$.

\end{fact}

This holds for arbitrary pmp transformations $T:X\to X$. It turns out that ergodicity is equivalent to a strong form of recurrence, namely that for a.e. $x$ in the _entire_ space $X$, we have $T^n(x)\in A$ for some $n<\omega$.

\begin{theorem}[Density]\label{density_characterization}

A pmp transformation $T:X\to X$ is ergodic iff $[A]\_{\E\_T}$ is conull for every positively-measured subset $A\subeq X$. Equivalently, if for a.e. $x\in X$, we have $[x]\_{\E\_T}\cap A\neq\e$.

\end{theorem}

\begin{proof}

If $A\subeq X$ is an $\E_T$-invariant measurable set that is not null, then $A=[A]\_{\E\_T}$ is conull by hypothesis.

<br>

&emsp;&emsp;Conversely, if $\mu(A)>0$, then $\mu([A]\_{\E\_T})>0$ provided that $[A]\_{\E\_T}$ is measurable in the first place, so that $[A]\_{\E\_T}$ is conull by ergodicity of $T$. To see that $[A]_{\E_T}$ is measurable, apply the \ref[Poincaré Recurrence Theorem]{poincare\_recurrence} to obtain some forward recurrent $A\_0\subeq\_\mu A$, so that $[A\_0]\_{\E\_T}=\bigcup\_{n<\omega}T^{-n}(A\_0)$ is measurable. Note that $[A\_0]\_{\E\_T}$ is conull by the same argument above, and since $[A\_0]\_{\E\_T}\subeq[A]\_{\E\_T}$, we see that $[A]\_{\E\_T}=\_\mu[A\_0]\_{\E\_T}$ is measurable too.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

&emsp;&emsp;Thus we see that $T$ is ergodic iff each orbit $[x]_{\E_T}$ intersects $A$, which is a qualitative result. It turns out that we can boost this and obtain a more quantitative statement too, of, say, how _often_ they intersect.

\begin{fact}[\ref[Birkhoff's Pointwise Ergodic Theorem]{pointwise_ergodic_theorem}]

If $T$ is ergodic, then for every $f\in L^1(X,\mu)$, we have
\begin{equation*}
    \textrm{Time average}\coloneqq\lim_{n\to\infty}\frac{1}{n}\sum_{i<n}f(T^i(x))\overset{!}{=}_\mu\int f\\,\d\mu\eqqcolon\textrm{Space average}.
\end{equation*}

\end{fact}

For convenience, we let $A_n^Tf\coloneqq\frac{1}{n}\sum_{i<n}f\circ T^i$ be the average of $f$ over $n$ time steps.

\begin{theorem}

For any pmp transformation $T:X\to X$, the following are equivalent.
1. $T$ is ergodic.
2. For all $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
3. For all $f\in L^\infty(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
4. For all measurable $A\subeq X$, we have $|\\{i<n\st T^ix\in A\\}|/n\to\mu(A)$ for $\mu$-a.e. $x\in X$.

\end{theorem}

\begin{proof}

The Pointwise Ergodic Theorem states that (1) implies (2), and since $L^\infty\subeq L^1$, (2) trivially implies (3). For (3) $\Rightarrow$ (4), let $f\coloneqq\chi_A$ and note that $A^T_nf=|\\{i<n\st T^ix\in A\\}|/n$ and $\int f\\,\d\mu=\mu(A)$.

<br>

&emsp;&emsp;Finally, if (4) holds and $A\subeq X$ is a $T$-invariant measurable set, then $A^T_n\chi_A(x)$ is constant at either $0$ or $1$ for all $n<\omega$ and $x\in X$, so taking the limit gives $\mu(A)\in\l\\{0,1\r\\}$ as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}
