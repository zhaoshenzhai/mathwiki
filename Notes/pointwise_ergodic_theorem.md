---
title: Pointwise Ergodic Theorem
date: 2025-05-13
tags: [atom]
---

# Statement and Proof

Let $(X,\mu,T)$ be a \ref[measure-preserving dynamical system]{measure-preserving_dynamical_system}. For each $n<\omega$ and $x\in X$, let $I\_n^T(x)\coloneqq\\{T^i(x)\\}\_{i<n}$ be the _forward interval of $x$ under $T$ with $n$ time steps_, and given a function $f\in L^1(X,\mu)$, let $A\_n^Tf\coloneqq\frac{1}{n}\sum\_{i<n}f\circ T^i$ be the _time average_ of $f$ over this interval.

\begin{theorem}[Birkhoff's Pointwise Ergodic Theorem]\label{pointwise}

Let $(X,\mu,T)$ be a measure-preserving dynamical system. If $T$ is \ref[ergodic]{measure-preserving_dynamical_system#ergodic-transformations}, then for every $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.

\end{theorem}

\begin{corollary}

Let $(X,\mu,T)$ be a measure-preserving dynamical system. The following are equivalent.
1. $T$ is ergodic.
2. For all $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
3. For all $f\in L^\infty(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
4. For all measurable $A\subeq X$, we have $\lim_n|A\cap I_n^T(x)|/n=\mu(A)$ for $\mu$-a.e. $x\in X$.

\end{corollary}

\begin{proof}[of Corollary]

Theorem \iref{pointwise} gives (1) $\Rightarrow$ (2), and since $L^\infty\subeq L^1$, (2) trivially implies (3). For (3) $\Rightarrow$ (4), let $f\coloneqq\chi_A$ and note that $A^T_nf=|A\cap I_n^T(x)|/n$ and $\int f\\,\d\mu=\mu(A)$.

<br>

&emsp;&emsp;Finally, if (4) holds and $A\subeq X$ is a $T$-invariant measurable set, then $A^T_n\chi_A(x)=|A\cap I_n^T(x)|/n$ is constant at either $0$ or $1$ for all $n<\omega$ and $x\in X$, so taking the limit gives $\mu(A)\in\l\\{0,1\r\\}$ as desired.<span style="float:right;">$\square$</span>

\end{proof}

## Tiling proof of Theorem \iref{pointwise}

We give here a combinatorial proof of Theorem \iref{pointwise}, due to Tserunyan \cite{Tse22}.

\begin{fact}[\ref[Functional]{ergodic_characterization_functional}]\label{characterization}

$T$ is ergodic iff every $T$-invariant measurable function $f:X\to\R$ is constant a.e..

\end{fact}

\begin{fact}[\ref[Local-Global Bridge]{local-global_bridge}]\label{local-global_bridge}

For each $f\in L^1(X,\mu)$ and $n<\omega$, we have $\int f\\,\d\mu=\int A_n^Tf\\,\d\mu$.

\end{fact}

\begin{fact}[\ref[99{%}-bounded]{99_bounded}]\label{99_bounded}

For each $f\in L^1(X,\mu)$ and $\epsilon>0$, there is a measurable set $X\_0\subeq X$ such that $\l.f\r|\_{X\_0}$ is bounded and $\int\_{X\comp X\_0}f\\,\d\mu\leq\epsilon$.

\end{fact}

\begin{lemma}[Tiling Lemma]\label{tiling}

For any $\epsilon>0$, there exists $n\gg0$ such that for each $x\in X$ except on a measure-$\epsilon$ set, the interval $I_n^T(x)$ can be tiled, up to an $\epsilon$-fraction, by intervals of the form $I_y\coloneqq I_{\eta(y)}^T(y)$ for $y\in X$.

\end{lemma}

\begin{proof}

By Fact \iref{99_bounded}, choose $L\geq0$ such that $B\coloneqq\\{x\in X\st\eta(x)>L\\}$ has measure at-most $\epsilon^2/2$, so for each $n<\omega$, the set $Z_n\coloneqq\\{x\in X\st A_n^T\chi_B(x)<\epsilon/2\\}$ is co-$\epsilon$ since, by Fact \iref{local-global_bridge}, we have
\begin{equation*}
    \epsilon^2/2\geq\mu(B)=\int\chi_B\\,\d\mu\overset{!}{=}\int A_n^T\chi_B\\,\d\mu\geq\int_{X\comp Z_n}A_n^T\chi_B\\,\d\mu\geq\frac{\epsilon}{2}\mu(X\comp Z_n).
\end{equation*}
For each $x\in Z_n$, we can tile $I_n^T(x)$ from left to right, skipping 'bad' intervals (i.e., intervals $I_y$ with $y\in B$), which leaves out at-most an $(\epsilon/2+L/n)$-fraction of $I_n^T(x)$ untiled by the $I_y$'s; choose $n\gg0$ such that $L/n<\epsilon/2$.<span style="float:right;">$\square$</span>

\end{proof}

With these tools in hand, we can finally proceed to the main proof.

<div class="space"></div>

\begin{proof}[of Theorem \iref{pointwise}]

By replacing $f$ by $f-\int f\\,\d\mu$, we can without loss of generality assume that $\int f\\,\d\mu=0$. To show that $\lim_nA_n^Tf=0$, it suffices to show that $\limsup_nA_n^Tf\leq0$, for then $-\liminf_nA_n^Tf=\limsup_nA_n^T(-f)\leq0$ as well. To this end, we first note that $l\coloneqq\limsup_nA_n^Tf:X\to\R$ is $T$-invariant. Indeed, for any $x\in X$, we have
\begin{equation*}
    A_n^Tf(x)=\frac{1}{n}f(x)+\frac{n-1}{n}A_{n-1}^Tf(x),
\end{equation*}
so taking $\limsup_n$ gives $l(x)=l(Tx)$ as desired. Thus $l$ is constant a.e. by Fact \iref{characterization}, say at $l_0\in\R$.

<br>

&emsp;&emsp;Suppose towards a contradiction that $f^\ast\coloneqq l_0/2>0$, so for each $x\in X$, there is a minimal $\eta(x)<\omega$ such that $A_{\eta(x)}^Tf(x)\geq f^\ast$. Thus, we can cover $X$ by intervals $I_x\coloneqq I_{\eta(x)}^Tx$ so that the average of $f$ on those intervals is no less than $f^\ast$. If we can make the lengths of those intervals uniform, i.e., find some $n<\omega$ such that $A_n^Tf\geq f^\ast$, then
\begin{equation*}
    0=\int f\\,\d\mu=\int A_n^Tf\\,\d\mu\geq\int f^\ast\\,\d\mu=f^\ast>0
\end{equation*}
by Fact \iref{local-global_bridge}, a contradiction. This is too much to ask for, but the Tiling Lemma says that we are not too far off.

<br>

&emsp;&emsp;More formally, first use Fact \iref{99_bounded} to restrict to a measurable set $X_0\subeq X$ on which $f$ is bounded, say $f\geq-M$ for some $M\geq0$, and $\int_{X\comp X_0}(f-f^\ast)\\,\d\mu\leq f^\ast/2$, so $\int\_{X\comp X\_0}f\\,\d\mu\geq f^\ast/2$; restrict $f\_0\coloneqq\l.f\r|\_{X\_0}$. By Lemma \iref{tiling} applied to some $\epsilon>0$ to be chosen later, there is some $n\gg0$ and some $Z\subeq X\_0$ of measure $\geq\mu(X_0)-\epsilon$ such that for each $x\in Z$, the interval $I\_n^T(x)$ is tiled by $I\_y$'s up to an $\epsilon$-fraction. Since $f\_0\geq f$, we have $A^T\_{\eta(y)}f\_0(y)\geq f^\ast$ too, so for all $x\in Z$,
\begin{equation*}
    A_n^Tf_0(x)\geq(1-\epsilon)f^\ast+\epsilon(-M)=f^\ast-\epsilon(M+f^\ast)\geq f^\ast/2
\end{equation*}
for sufficiently small $\epsilon>0$. But then we can replicate the contradiction above to obtain
\begin{equation*}
    0=\int f\\,\d\mu=\int_{X\comp X_0}f\\,\d\mu+\int_Zf_0\\,\d\mu+\int_{X_0\comp Z}f_0\\,\d\mu\geq\frac{f^\ast}{2}+\int_ZA_n^Tf_0\\,\d\mu+\mu(X_0\comp Z)(-M)\geq f^\ast-\epsilon M>0
\end{equation*}
for sufficiently small $\epsilon>0$, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

# Generalizations

## Non-ergodic transformations

\TODO

## Amenable group actions

\TODO
