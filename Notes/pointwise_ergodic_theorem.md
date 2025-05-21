---
title: Pointwise Ergodic Theorem
date: 2025-05-13
tags: [In_Progress]
---

Let $(X,\mu,T)$ be a \ref[measure-preserving dynamical system]{measure-preserving_dynamical_system}. Birkhoff's _Ergodic Hypothesis_ states that the time and space averages for certain functions $f\in L^1(X,\mu)$ coincide. It turns out that this hypothesis holds iff $T$ is \ref[ergodic]{ergodic}.

# Statement and Proof

Given a function $f\in L^1(X,\mu)$ and $x\in X$, we can study the values $f$ take on the forward orbit $I_n^T(x)\coloneqq\\{T^ix\\}_{i<n}$ restrict to $n$ time steps. The _time average_ of $(f,x)$ for the first $n$ time steps is $A\_n^Tf(x)\coloneqq\frac{1}{n}\sum\_{i<n}f(T^i(x))$, which, considering the system uniformly, induces a function $A_n^Tf:X\to\R$. One can then take $n\to\infty$ to obtain the _time average_ of $f$ as $\lim_nA_n^Tf$. On the other hand, we can consider the _space average_ $\int f\\,\d\mu$, which is the average value of $f$ at a particular time. It turns out that these two averages coincide a.e. iff $T$ is ergodic.

\begin{theorem}[Birkhoff's Pointwise Ergodic Theorem]\label{pointwise}

Let $(X,\mu,T)$ be a measure-preserving dynamical system. If $T$ is ergodic, then for every $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.

\end{theorem}

## Setup and the Tiling Lemma

The proof of this theorem will require several facts.

\begin{fact}[\ref[Functional characterization of ergodicity]{characterizations_of_ergodicity}]\label{characterization}

A pmp transformation $T:X\to X$ is ergodic iff every $T$-invariant measurable function $f:X\to\R$ is constant a.e..

\end{fact}

\begin{fact}[\ref[Local-Global Bridge]{local-global_bridge}]\label{local-global_bridge}

For each $f\in L^1(X,\mu)$ and $n<\omega$, we have $\int f\\,\d\mu=\int A_n^Tf\\,\d\mu$.

\end{fact}

\begin{fact}[\ref[99{%}-bounded]{99_bounded}]\label{99_bounded}

For each $f\in L^1(X,\mu)$ and $\epsilon>0$, there is a measurable set $X\_0\subeq X$ such that $\l.f\r|\_{X\_0}$ is bounded and $\int\_{X\comp X\_0}f\\,\d\mu\leq\epsilon$.

\end{fact}

&emsp;&emsp;We will also need the following _tiling lemma_, which is specific to our situation. Let $\eta:X\to\N$ be measurable.

\begin{lemma}[Tiling Lemma]\label{tiling}

For any $\epsilon>0$ and each $x\in X$ except on a measure-$\epsilon$ set, the interval $I_n^T(x)$ for large enough $n<\omega$ can be tiled, up to an $\epsilon$-fraction, by intervals of the form $I_y\coloneqq I_{\eta(y)}^T(y)$ for $y\in X$.

\end{lemma}

\begin{proof}

By Fact \iref{99_bounded}, choose $L\geq0$ such that $B\coloneqq\\{x\in X\st\eta(x)>L\\}$ has measure at-most $\epsilon^2/2$, so for each $n<\omega$, the set $Z_n\coloneqq\\{x\in X\st A_n^T\chi_B(x)<\epsilon/2\\}$ is co-$\epsilon$ since, by Fact \iref{local-global_bridge}, we have
\begin{equation*}
    \epsilon^2/2\geq\mu(B)=\int\chi_B\\,\d\mu\overset{!}{=}\int A_n^T\chi_B\\,\d\mu\geq\int_{X\comp Z}A_n^T\chi_B\\,\d\mu\geq\frac{\epsilon}{2}\mu(X\comp Z).
\end{equation*}
For each $x\in Z_n$, we can tile $I_n^T(x)$ from left to right, skipping 'bad' points (i.e., intervals $I_y$ with $y\in B$), which leaves out at-most an $(\epsilon/2+L/n)$-fraction of $I_n^T(x)$; choose $n\gg0$ such that $L/n<\epsilon/2$.<span style="float:right;">$\square$</span>

\end{proof}

## Main proof

With these tools in hand, we can finally proceed to the main proof.

<div class="space"></div>

\begin{proof}[of Theorem \iref{pointwise}]

By replacing $f$ by $f-\int f\\,\d\mu$, we can without loss of generality assume that $\int f\\,\d\mu=0$. To show that $\lim_nA_n^Tf=0$, it suffices to show that $\limsup_nA_n^Tf\leq0$, for then $-\liminf_nA_n^Tf=\limsup_nA_n^T(-f)\leq0$ as well. To this end, we first note that $l\coloneqq\limsup_nA_n^Tf:X\to\R$ is $T$-invariant. Indeed, for any $x\in X$, we have
\begin{equation*}
    A_n^Tf(x)=\frac{1}{n}f(x)+\frac{n-1}{n}A_{n-1}^Tf(x),
\end{equation*}
so taking $\limsup_n$ gives $l(x)=l(Tx)$ as desired. Thus $l$ is constant a.e. by Fact \iref{characterization}, say at $l_0\in\R$.

<br>

&emsp;&emsp;Suppose towards a contradiction that $f^\ast\coloneqq l_0/2>0$, so for each $x\in X$, there is a minimal $\eta(x)<\omega$ such that $A_{\eta(x)}^Tf(x)\geq f^\ast$. Thus, we can cover $X$ by intervals $I_x\coloneqq I_{\eta(x)}^Tx$ so that the average of $f$ on those intervals is no less than $f^\ast$. If we can make the lengths of those intervals uniform, i.e., find some $N<\omega$ such that $A_N^Tf\geq f^\ast$, then
\begin{equation*}
    0=\int f\\,\d\mu=\int A_N^Tf\\,\d\mu\geq\int f^\ast\\,\d\mu=f^\ast>0
\end{equation*}
by Fact \iref{local-global_bridge}, a contradiction. This is too much to ask for, but the Tiling Lemma says that we are not too far off.

<br>

&emsp;&emsp;More formally, first use Fact \iref{99_bounded} to restrict to a measurable set $X_0\subeq X$ on which $f$ is bounded, say $f\geq-M$ for some $M\geq0$, and $\int_{X\comp X_0}(f-f^\ast)\\,\d\mu\leq f^\ast/2$, so $\int\_{X\comp X\_0}f\\,\d\mu\geq f^\ast/2$; restrict $f\_0\coloneqq\l.f\r|\_{X\_0}$. By Lemma \iref{tiling} applied to some $\epsilon>0$ to be chosen later, there is some $N\gg0$ and some $Z\subeq X\_0$ of measure $\geq\mu(X_0)-\epsilon$ such that for each $x\in Z$, the interval $I\_N^T(x)$ is tiled by $I\_y$'s up to an $\epsilon$-fraction. Since $f\_0\geq f$, we have $A\_{\eta(y)}f\_0\geq f^\ast$ too, so for all $x\in Z$,
\begin{equation*}
    A_N^Tf_0(x)\geq(1-\epsilon)f^\ast+\epsilon(-M)=f^\ast-\epsilon(M+f^\ast)\geq f^\ast/2
\end{equation*}
for sufficiently small $\epsilon>0$. But then we can replicate the contradiction above to obtain
\begin{equation*}
    0=\int f\\,\d\mu=\int_{X\comp X_0}f\\,\d\mu+\int_Zf_0\\,\d\mu+\int_{X_0\comp Z}f_0\\,\d\mu\geq\frac{f^\ast}{2}+\int_ZA_N^Tf_0\\,\d\mu+\mu(X_0\comp Z)(-M)\geq f^\ast-\epsilon M>0
\end{equation*}
for sufficiently small $\epsilon>0$, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}
