---
title: Density Characterization of Ergodicity
date: 2025-05-31
tags: [In_Progress]
---

# Statement and Proof

Let $(X,\mu,T)$ be a \ref[measure preserving dynamical system]{measure-preserving_dynamical_system}. A set $A\subeq X$ is _$T$-forward recurrent_ if for each $x\in X$, we have $T^n(x)\in A$ for some $n\geq1$. We will need the following corollary of \ref[Poincaré Recurrence]{poincare_recurrence_theorem}.

\begin{fact}[\ref{poincare_recurrence_theorem#measurable_saturation}]\label{measurable_saturation}

For each measurable $A\subeq X$, there exists $A_0\subeq_\mu A$ such that $[A_0]_T=\bigcup_nT^{-n}(A_0)$.

\end{fact}

\begin{theorem}[Density]\label{density_characterization}

A pmp transformation $T:X\to X$ is \ref[ergodic]{measure-preserving_dynamical_system#ergodic-transformations} iff $[A]\_{\E\_T}$ is conull for every positively-measured subset $A\subeq X$. Equivalently, if for a.e. $x\in X$, we have $[x]\_{\E\_T}\cap A\neq\e$.

\end{theorem}

\begin{proof}

If $A\subeq X$ is an $\E_T$-invariant measurable set that is not null, then $A=[A]\_{\E\_T}$ is conull by hypothesis.

<br>

&emsp;&emsp;Conversely, if $\mu(A)>0$, then $\mu([A]\_{\E\_T})>0$ provided that $[A]\_{\E\_T}$ is measurable in the first place, so that $[A]\_{\E\_T}$ is conull by ergodicity of $T$. To see that $[A]_{\E_T}$ is measurable, apply Fact \iref{measurable_saturation} to obtain some conull $A\_0\subeq\_\mu A$ such that $[A\_0]\_{\E\_T}=\bigcup\_{n<\omega}T^{-n}(A\_0)$, which is measurable. Note that $[A\_0]\_{\E\_T}$ is conull by the same argument above, and since $[A\_0]\_{\E\_T}\subeq[A]\_{\E\_T}$, we see that $[A]\_{\E\_T}=\_\mu[A\_0]\_{\E\_T}$ is measurable too.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Strengthening

This gives us a qualitative characterization of ergodicity. It turns out that we can boost this to a quantitative characterization too, of, say, of _often_ each orbit $[x]\_{\E\_T}$ intersects $A$.

\begin{fact}[\ref[Birkhoff's Pointwise Ergodic Theorem]{pointwise_ergodic_theorem}]

A pmp transformation $T:X\to X$ is ergodic iff for each measurable set $A\subeq X$, we have $\lim_n\frac{1}{n}|A\cap\\{x,Tx,\dots,T^{n-1}x\\}|=\mu(A)$ for $\mu$-a.e. $x\in X$.

\end{fact}
