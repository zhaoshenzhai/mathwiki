---
title: Upward Löwenheim-Skolem Theorem
date: 2025-06-07
tags: [In_Progress]
---

Let $L$ be a \ref[first-order language]{first-order_language}.

\begin{theorem}[Löwenheim-Skolem]

For any infinite \ref[$L$-structure]{model} $M$ and any cardinal $\kappa\geq|M|+|L|+\aleph_0$, there is an elementary extension $N\esupeq M$ of cardinality $\kappa$.

\end{theorem}

&emsp;&emsp;The proof is a classic application of the Compactness theorem, along with some other model-theoretic fluff:

\begin{fact}[\ref[Compactness Theorem]{compactness_theorem}]\label{compactness}

An \ref[$L$-theory]{theory} $T$ is satisfiable iff every finite subtheory of $T$ is satisfiable.

\end{fact}

\begin{fact}[\ref{diagrams_and_embeddings}]\label{char_elem_emb}

Let $M$ be an $L$-structure. If $N$ is an $L_M$-structure such that $N\models\Diag_\mathrm{el}(M)$, then there is an $L$-elementary embedding $M\into_eN$.

\end{fact}

\begin{fact}[\ref[Downward Löwenheim-Skolem]{downward_lowenheim-skolem_theorem}]\label{down}

For any infinite $L$-structure $N$ and any cardinal $\kappa\leq|N|$ such that $\kappa\geq|L|+\aleph_0$, there is an elementary substructure $N_0\esubeq N$ of cardinality $\kappa$.

\end{fact}

<div class="space"></div>

\begin{proof}

Consider the language $L'\coloneqq L(M)\sqcup\l\\{c_\alpha\st\alpha<\kappa\r\\}$, where each $c_\alpha$ is a new constant symbol. The $L'$-theory $T\coloneqq\Diag_\mathrm{el}(M)\cup\l\\{c_\alpha\neq c_\beta\st\alpha,\beta\in\kappa\land\alpha\neq\beta\r\\}$ is satisfiable by Fact \iref{compactness}:
> If $T_0\subeq T$ is finite, then there exist $\alpha_1,\dots,\alpha_n<\kappa$ such that $T_0\subeq\Diag_\mathrm{el}(M)\cup\\{c_{\alpha_i}\neq c_{\alpha_j}\st i\neq j\leq n\\}$, and taking $a_1,\dots,a_n\in M$ distinct, which is possible since $M$ is infinite, makes $(M,\bar{a})\models T_0$.

Thus there is a model $N\models T$, so by Fact \iref{char_elem_emb}, an isomorphic copy thereof is an elementary extension of $M$. Finally, observe that $\kappa\into N$, so by Fact \iref{down}, we can assume without loss of generality that $|N|=\kappa$.<span style="float:right;">$\blacksquare$</span>

\end{proof}
