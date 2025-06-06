---
title: Furstenberg's Correspondence Principle
date: 2025-06-06
tags: [In_Progress]
---

Let $\Gamma$ be an \ref[amenable]{amenable} \ref[semigroup]{semigroup}, say $\N$, and fix a Følner sequence $F_n\subeq\Gamma$. The _upper density_ of a subset $A\subeq\Gamma$ with respect to the sequence $(F_n)$ is $\bar{d}(A)\coloneqq\limsup_n|A\cap F_n|/|F_n|$. For $\Gamma=\N$, we can take $F_n\coloneqq\l\\{0,\dots,n-1\r\\}$.

\begin{theorem}[Furstenberg Correspondence \cite{Fur97}]\label{correspondence}

For any $A\subeq\Gamma$, there is a \ref[pmp action]{measure-preserving_dynamical_system} $\Gamma\act(X,\mu)$ and a measurable set $\widetilde{A}\subeq X$ such that $\bar{d}(A)=\mu(\widetilde{A})$.

<br>

&emsp;&emsp;In fact, for any $g_1,\dots,g_k\in\Gamma$, we have $\bar{d}(A\cap g_1^{-1}A\cap\cdots\cap g_k^{-1}A)\geq\mu(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap \cdots\cap g_k^{-1}A)$.

\end{theorem}

&emsp;&emsp;We prove this following \cite{Tse22}. First, we will need the following functional analytic result, which we use to construct the measure $\mu$ on $X$ by approximation.

\begin{fact}[\ref[Banach-Alaoglo]{}]\label{banach_alaoglu}

\TODO

\end{fact}

&emsp;&emsp;With this in hand, we proceed to the main proof.

<div class="space"></div>

\begin{proof}[of Theorem \iref{correspondence}]

By passing to a subsequence, we may assume that $\bar{d}(A)=\lim_n|A\cap F_n|/|F_n|$. Consider the shift action $\Gamma\act2^\Gamma$ by $(\gamma x)(g)\coloneqq x(g\gamma)$ and let $\widetilde{A}\coloneqq\\{x\in2^\Gamma\st x(1_\Gamma)=1\\}$. For each $n\in\N$, consider the measure $\mu\_n\coloneqq\sum\_{\gamma\in F_n}\delta\_{\gamma\chi_A}/|F_n|$ on $2^\Gamma$, where we view $\chi_A$ as an element of $2^\N$, so that
\begin{equation*}
    \mu_n(\widetilde{A})=\frac{1}{|F_n|}\sum_{\gamma\in F_n}\delta_{\gamma\chi_A}(\widetilde{A})=\frac{|A\cap F_n|}{|F_n|}
\end{equation*}
since $\gamma\chi_A\in g^{-1}\widetilde{A}$ iff $\gamma\in g^{-1}A$ for all $\gamma,g\in\Gamma$. By Fact \iref{banach_alaoglu}, the space of probability measures on $2^\Gamma$ is weak$^\ast$-compact, and thus, after passing to a subsequence, there is a weak$^\ast$-limit $\mu\_n\to\mu$. Observe that $\Gamma\act(2^\Gamma,\mu)$ is pmp \TODO, and moreover, $\mu(\bar{A})=\bar{d}(A)$. For each $i<k$, observe that $\gamma\in g_i^{-1}A$ iff $\delta_{\gamma\chi_A}(g_i^{-1}(\widetilde{A}))=1$, and thus
\begin{equation*}
    \begin{aligned}
        \bar{d}(A\cap g_1^{-1}A\cap\cdots\cap g_k^{-1}A)&\geq\liminf\_{n\to\infty}\frac{|A\cap g_1^{-1}A\cap\cdots\cap g_k^{-1}A\cap F_n|}{|F_n|}=\liminf\_{n\to\infty}\frac{1}{|F_n|}\sum\_{\gamma\in F_n}\delta\_{\gamma\chi\_A}(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap\cdots\cap g_k^{-1}\widetilde{A}) \\\\
            &=\liminf\_{n\to\infty}\mu\_n(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap\cdots\cap g_k^{-1}\widetilde{A})=\mu(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap\cdots\cap g_k^{-1}\widetilde{A}),
    \end{aligned}
\end{equation*}
as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}
