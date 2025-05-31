---
title: Functional Characterization of Ergodicity
date: 2025-05-31
tags: [In_Progress]
---

Let $(X,\mu,T)$ be a \ref[measure preserving dynamical system]{measure-preserving_dynamical_system}. A measurable function $f:X\to Y$ (to a measurable space $Y$) is _$T$-invariant_ if $f\circ T=f$. Equivalently, $f$ is $T$-invariant if it is $\E_T$-invariant (i.e., constant on each $\E_T$-class), where $\E_T$ is the _orbit equivalence relation of $T$_ given by $x\E_Ty$ iff $T^n(x)=T^m(y)$ for some $n,m<\omega$.

<br>

&emsp;&emsp;Using $T$-invariant functions, we can characterize the \ref[ergodicity]{measure-preserving_dynamical_system#ergodic-transformations} of $T$ as follows.

\begin{theorem}[Functional]\label{functional_characterization}

A pmp transformation $T:X\to X$ is ergodic iff every $T$-invariant measurable function $f:X\to Y$ to a \ref[standard Borel space]{measurable_space#borel-sigma-algebra} is constant a.e..

\end{theorem}

\begin{proof}

If $A\subeq X$ is an $\E_T$-invariant measurable set, then $\chi_A:X\to\l\\{0,1\r\\}$ is a $T$-invariant measurable function, so it is constant a.e., and hence $A$ is either null or conull.

<br>

&emsp;&emsp;For the main direction, it suffices by the \ref[Borel Isomorphism Theorem]{borel_isomorphism_theorem} to consider the case when $Y\coloneqq2^\omega$ is equipped with its Borel $\sigma$-algebra, which is generate by cylinders. Let $f:X\to2^\omega$ be a $T$-invariant measurable function, so $f^{-1}(B)$ is $T$-invariant for each Borel $B\subeq2^\omega$. In particular, $f^{-1}([w])$ is either null or conull for each word $w\in2^{<\omega}$. We proceed by finding a (necessarily unique) sequence $y\in2^\omega$ such that $f^{-1}(y)$ is conull, as follows. Call a word $w\in2^{<\omega}$ _heavy_ if $f^{-1}([w])$ is conull; clearly $\e$ is heavy, and if $w$ is heavy, then exactly one of $w0$ and $w1$ is heavy. Thus there is a unique heavy branch $\l\\{y|n\r\\}_{n\in\omega}$, which gives rise to the desired sequence $y\in2^\omega$ since $f^{-1}(y)=\bigcap_nf^{-1}([y|n])$ is the intersection of countably-many conull sets, hence conull.<span style="float:right;">$\blacksquare$</span>

\end{proof}
