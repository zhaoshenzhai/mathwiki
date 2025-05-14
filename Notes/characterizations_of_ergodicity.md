---
title: Characterizations of Ergodicity
date: 2025-05-13
tags: [In_Progress]
---

Let $(X,\mu)$ be a probability \ref[measure space]{measure}. We provide several characterizations for when a pmp $T:X\to X$ is \ref[ergodic]{ergodic}. The first two are basic reformulations of ergodicity, but others are highly non-trivial results.

# Basic Characterizations

Recall that every pmp $T:X\to X$ induces a Koopman operator $\widehat{T}:L^1(X,\mu)\to L^1(X,\mu)$ given by $f\mapsto f\circ T$, and we say that a measurable function $f:X\to Y$ is _$T$-invariant_ if $\widehat{T}(f)=f$.

<br>

&emsp;&emsp;Equivalently, $f$ is $T$-invariant if it is $\E_T$-invariant (i.e., constant on each $\E_T$-class), where $\E_T$ is the _orbit equivalence relation of $T$_ given by $x\E_Ty$ iff $T^n(x)=T^m(y)$ for some $n,m<\omega$.

\begin{theorem}[Functional]\label{functional_characterization}

A pmp transformation $T:X\to X$ is ergodic iff every $T$-invariant measurable function $f:X\to Y$ to a \ref[standard Borel space]{measurable_space#borel-sigma-algebra} is constant a.e..

\end{theorem}

\begin{proof}

If $A\subeq X$ is an $\E_T$-invariant measurable set, then $\chi_A:X\to\l\\{0,1\r\\}$ is a $T$-invariant measurable function, so it is constant a.e., and hence $A$ is either null or conull.

<br>

&emsp;&emsp;For the main direction, it suffices by the \ref[Borel Isomorphism Theorem]{borel_isomorphism_theorem} to consider the case when $Y\coloneqq2^\omega$, so let $f:X\to2^\omega$ be a $T$-invariant measurable function. We wish to find some $y\in2^\omega$ such that $f^{-1}(y)$ is conull, for then $f$ is constant at $y$ a.e.. Indeed, first note that $f^{-1}(B)$ is $T$-invariant for each Borel set $B\subeq2^\omega$, so it is either null or conull by hypothesis. Call a word $w\in2^{<\omega}$ _heavy_ if $f^{-1}([w])$ is conull. Clearly $\e$ is heavy, and inductively choosing heavy vertices in $2^\omega$ furnishes an infinite heavy branch $y\coloneqq(y_n)$, i.e., some $y\in2^\omega$ such that $f^{-1}([y|n])$ is conull for each $n<\omega$. Observe then that $f^{-1}(y)=\bigcap_{n<\omega}f^{-1}([y|n])$ is conull, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{theorem}[Density]\label{density_characterization}

A pmp transformation $T:X\to X$ is ergodic iff $[A]\_{\E\_T}$ is conull for every positively-measured subset $A\subeq X$. Equivalently, if for a.e. $x\in X$, we have $[x]\_{\E\_T}\cap A\neq\e$.

\end{theorem}

\begin{proof}

If $A\subeq X$ is an $\E_T$-invariant measurable set that is not null, then $A=[A]\_{\E\_T}$ is conull by hypothesis.

<br>

&emsp;&emsp;Conversely, if $\mu(A)>0$, then $\mu([A]\_{\E\_T})>0$ provided that $[A]\_{\E\_T}$ is measurable in the first place, so that $[A]\_{\E\_T}$ is conull by ergodicity of $T$. To see that $[A]_{\E_T}$ is measurable, apply the \ref[Poincaré Recurrence Theorem]{poincare\_recurrence} to obtain some forward recurrent $A\_0\subeq\_\mu A$, so that $[A\_0]\_{\E\_T}=\bigcup\_{n<\omega}T^{-n}(A\_0)$ is measurable. Note that $[A\_0]\_{\E\_T}$ is conull by the same argument above, and since $[A\_0]\_{\E\_T}\subeq[A]\_{\E\_T}$, we see that $[A]\_{\E\_T}=\_\mu[A\_0]\_{\E\_T}$ is measurable too.<span style="float:right;">$\blacksquare$</span>

\end{proof}

# Pointwise Ergodic Theorem

Let $(X,\mu)$ be a probability space and let $T:X\to X$ be pmp. The _time average_ of a function $f\in L^1(X,\mu)$ is the limit of $A_n^Tf(x)\coloneqq\frac{1}{n}\sum_{i<n}T^if(x)$ as $n\to\infty$, and the _space average_ of $f$ is $\int f\\,\d\mu$.

\begin{fact}[\ref[Birkhoff's Pointwise Ergodic Theorem]{pointwise_ergodic_theorem}]

If $T$ is ergodic, then for every $f\in L^1(X,\mu)$, we have
\begin{equation*}
    \lim_{n\to\infty}A_n^Tf=_\mu\int f\\,\d\mu.
\end{equation*}

\end{fact}

Using this, we can obtain several other characterizations of the ergodicity of $T$.

\begin{theorem}

For any pmp transformation $T:X\to X$, the following are equivalent.
1. $T$ is ergodic.
2. For all $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
3. For all $f\in L^\infty(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
4. For all measurable $B\subeq X$, we have $|\\{i<n\st T^ix\in B\\}|/n\to\mu(B)$ for $\mu$-a.e. $x\in X$.

\end{theorem}

\begin{proof}

$(1)\Rightarrow(2)$ is the Pointwise Ergodic Theorem.

\end{proof}
