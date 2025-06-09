---
title: Downward Löwenheim-Skolem Theorem
date: 2025-06-07
tags: [In_Progress]
---

# Statement and Proof

Let $L$ be a \ref[first-order language]{first-order_language}.

\begin{theorem}[Löwenheim-Skolem]\label{downward_lowenheim-skolem}

For any infinite \ref[$L$-structure]{model} $M$, any subset $A\subseteq M$, and any cardinal $\kappa$ such that $|A|+|L|+\aleph_0\leq\kappa\leq|M|$, there is an elementary substructure $N\esubeq M$ containing $A$ of cardinality $\kappa$.

\end{theorem}

&emsp;&emsp;In order to generate a substructure $N\subseq M$ from $A$, we need to close $A$ under function applications. Here, we need to do a bit more and also close $A$ under witnesses of quantifiers:

\begin{fact}[\ref[Tarski-Vaught Test]{tarski-vaught_test}]\label{tarski-vaught}

Let $N\subseq M$ be $L$-structures. Then $N\esubeq M$ iff for every formula $\phi(\bar{x},y)$ and for every $\bar{a}\in N$, we have $M\models\ex y\phi(\bar{a},y)$ iff $M\models\phi(\bar{a},a)$ for some $a\in N$.

\end{fact}

\begin{fact}[\ref[Cardinal arithmetic]{cardinal_arithmetic}]\label{cardinal}

For every infinite cardinal $\kappa$, we have $\kappa^2=\kappa$.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{downward_lowenheim-skolem}]

Since $|A|\leq\kappa\leq|M|$, we can expand $A$ so that, without loss of generality, we have $|A|=\kappa$. We inductively construct subsets $N_\alpha\subseq M$ such that $|N_\alpha|\leq\kappa$ for each $\alpha<\kappa$, starting with $N_0\coloneqq A$. Given $N_\alpha$, we construct $N_{\alpha+1}$ by adding in witnesses to $M\models\ex y\phi(\bar{a},y)$ for every $\bar{a}\in N_\alpha$ and formula $\phi(\bar{x},y)$. Since $\kappa\geq|L|+\aleph_0$ and $\kappa\geq|N_\alpha|$, we have $|N_{\alpha+1}|\leq|N_\alpha|\cdot\aleph_0\leq\kappa$ by Fact \iref{cardinal}. Set $N\coloneqq\bigcup_{\alpha<\kappa}N_\alpha$, which we claim is as desired.

<br>

&emsp;&emsp;Indeed, observe that for each $f\in\mc{F}$, $\alpha<\kappa$, and $\bar{a}\in N_\alpha$, the witness of $\ex y(f(\bar{a})=y)$ lies in $N$, so $N\subseq M$. The hypothesis of Fact \iref{tarski-vaught} now holds by construction of $M$, so $N\esubeq M$. Moreover, $|N|=\kappa$ by Fact \iref{cardinal}.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Set-theoretic extension

When $L=L_\mathrm{set}$ is the language of set theory, we can require $N$ to be \ref[transitive]{transitive}.

\begin{corollary}

For any infinite $L_\mathrm{set}$-structure $M$ satisfying $\mathsf{Extensionality}$ and any transitive set $A\subeq M$, there is a transitive set $N$ containing $A$ such that $N\equiv M$ and $|N|=|A|+\aleph_0$.

\end{corollary}

\begin{proof}

By Theorem \iref{downward_lowenheim-skolem}, there is an elementary substructure $N_0\esubeq M$ containing $A$ of cardinality $|A|+\aleph_0$. Then $N_0$ models $\mathsf{Extensionality}$ too, so letting $N\coloneqq\pi(N_0)$ be the Mostowski Collapse of $N_0$, which is transitive, we have $(N,\in)\iso(N_0,\in)$ by \TODO. Since $A$ is transitive, $\pi(A)=A$ and hence $A\subeq N$ too, and $N\equiv M$ follows since $N\iso N_0\esubeq M$.<span style="float:right;">$\blacksquare$</span>

\end{proof}
