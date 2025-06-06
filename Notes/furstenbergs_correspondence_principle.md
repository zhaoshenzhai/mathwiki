---
title: Furstenberg's Correspondence Principle
date: 2025-06-06
tags: [In_Progress]
---

\begin{theorem}[Furstenberg Correspondence \cite{Fur97}]\label{correspondence}

Let $\Gamma$ be an \ref[amenable]{amenable} \ref[semigroup]{semigroup}. For any $A\subeq\Gamma$, there is a \ref[pmp action]{measure-preserving_dynamical_system} $\Gamma\act(X,\mu)$ and a measurable set $\widetilde{A}\subeq X$ such that $\bar{d}(A)=\mu(\widetilde{A})$.

<br>

&emsp;&emsp;In fact, for any $g_1,\dots,g_k\in\Gamma$, we have $\bar{d}(A\cap g_1^{-1}A\cap\cdots\cap g_k^{-1}A)\geq\mu(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap \cdots\cap g_k^{-1}A)$.

\end{theorem}

\begin{fact}[\ref[Banach-Alaoglo]{}]\label{banach_alaoglu}

\TODO

\end{fact}

\begin{proof}[of Theorem \iref{correspondence}]

By passing to a subsequence, we may assume that $\bar{d}(A)=\lim_n|A\cap F_n|/|F_n|$. Consider the shift action $\Gamma\act2^\Gamma$ by $(\gamma x)(g)\coloneqq x(g\gamma)$ and let $\widetilde{A}\coloneqq\\{x\in2^\Gamma\st x(1_\Gamma)=1\\}$. Viewing $\chi_A\in2^\Gamma$, we see for all $\gamma,g\in\Gamma$ that $\gamma\chi_A\in g^{-1}\widetilde{A}$ iff $\gamma\in g^{-1}A$. We will define a measure $\mu$ on $2^\Gamma$ with the desired property by approximation.

<br>

&emsp;&emsp;For each $n\in\N$, consider the weighted Dirac measure $\mu\_n\coloneqq\sum\_{\gamma\in F_n}\delta\_{\gamma\chi_A}/|F_n|$ on $2^\Gamma$, so that
\begin{equation*}
    \mu_n(\widetilde{A})=\frac{1}{|F_n|}\sum_{\gamma\in F_n}\delta_{\gamma\chi_A}(\widetilde{A})=\frac{|A\cap F_n|}{|F_n|}.
\end{equation*}
By Fact \iref{banach_alaoglu}, the space of probability measures on $2^\Gamma$ is weak$^\ast$-compact, and thus, after passing to a subsequence, there is a weak$^\ast$-limit $\mu\_n\to\mu$. Observe that that $\Gamma\act(2^\Gamma,\mu)$ is pmp \TODO, and moreover, $\mu(\bar{A})=\bar{d}(A)$. For each $i<k$, observe that $\gamma\in g_i^{-1}A$ iff $\delta_{\gamma\chi_A}(g_i^{-1}(\widetilde{A}))=1$, and thus
\begin{equation*}
    \begin{aligned}
        \bar{d}(A\cap g_1^{-1}A\cap\cdots\cap g_k^{-1}A)&\geq\liminf\_{n\to\infty}\frac{|A\cap g_1^{-1}A\cap\cdots\cap g_k^{-1}A\cap F_n|}{|F_n|}=\liminf\_{n\to\infty}\frac{1}{|F_n|}\sum\_{\gamma\in F_n}\delta\_{\gamma\chi\_A}(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap\cdots\cap g_k^{-1}\widetilde{A}) \\\\
            &=\liminf\_{n\to\infty}\mu\_n(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap\cdots\cap g_k^{-1}\widetilde{A})=\mu(\widetilde{A}\cap g_1^{-1}\widetilde{A}\cap\cdots\cap g_k^{-1}\widetilde{A}),
    \end{aligned}
\end{equation*}
as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}
