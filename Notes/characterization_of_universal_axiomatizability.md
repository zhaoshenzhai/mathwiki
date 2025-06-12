---
title: Characterization of Universal Axiomatizability
date: 2025-06-12
tags: [In_Progress]
---

Throughout, let $L$ be a \ref[language]{first-order_language}. We give a characterization for when an $L$-\ref[theory]{theory} is \ref[universally-axiomatizable]{axiomatization}.

# Statement and Proof

\begin{theorem}\label{char}

An $L$-theory $T$ is universally-axiomatizable iff $T$ is closed under \ref[submodels]{model}, i.e., if $N\models T$ and $M\subseq N$, then $M\models T$ as well.

\end{theorem}

We will prove a slightly more general version of the statement. Let $T_\fa$ be the set of all universal consequences of $T$.

\begin{theorem}\label{general}

For any $L$-structure $M$, we have $M\models T_\fa$ iff there is a model $N\models T$ containing $M$.

\end{theorem}

<div class="space"></div>

\begin{proof}[of Theorem \iref{char} assuming \iref{general}]

Suppose that $\Gamma$ is a universal axiomatization of $T$ and let $N\subseq M\models T$. If $\phi(\bar{x})$ is a quantifier-free formula and $\bar{a}\in N$, then $N\models\phi(\bar{a})$ iff $M\models\phi(\bar{a})$, so if $M\models\fa\bar{x}\phi(\bar{x})$, then $N\models\fa\bar{x}\phi(\bar{x})$ too. Thus $N\models\Gamma$, and so $N\models T$ as desired. Conversely, clearly $M\models T$ implies $M\models T_\fa$. If $M\models T_\fa$, then by Theorem \iref{general}, there is a model $N\models T$ containing $M$, so $M\models T$ by hypothesis.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

&emsp;&emsp;It remains to prove Theorem \iref{general}, which will require the following facts.

\begin{fact}[\ref[Diagrams]{diagrams_and_embeddings}]\label{diag_emb}

Let $N$ be an $L_M$-structure. If $N\models\Diag M$, then there is an $L$-embedding $M\into N$.

\end{fact}

\begin{fact}[\ref[Compactness Theorem]{compactness_theorem}]\label{compactness}

If an $L$-theory $T$ is finitely-satisfiable, then it is satisfiable.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{general}]

The converse is similar to the above, so suppose that $M\models T_\fa$. By Fact \iref{diag_emb}, it suffices to show that the $L_M$-theory $T'\coloneqq T\cup\Diag M$ is satisfiable. Suppose towards a contradiction that $T'$ is not satisfiable, so by Fact \iref{compactness}, there is a finite set $\Delta\coloneqq\l\\{\sigma_1,\dots,\sigma_n\r\\}\subeq\Diag M$ such that $T\cup\Delta$ is unsatisfiable.

<br>

&emsp;&emsp;For each $i$, write $\sigma_i=\phi_i(\bar{c}/\bar{x})$ for some quantifier-free $L$-formula $\phi_i(\bar{x})$ and some $\bar{c}\in M$ and consider the $L$-formula $\Phi(\bar{x})\coloneqq\bigwedge_i\phi_i(\bar{x})$. Observe that $T\cup\l\\{\ex\bar{x}\Phi(\bar{x})\r\\}$ is an unsatisfiable $L$-theory, for otherwise we can interpret $\bar{c}$ as any witness for $\bar{x}$ to see that $T\cup\Delta$ is satisfiable. Thus $T$ models $\fa\bar{x}\lnot\Phi(\bar{x})\in\Gamma$, so $M\models\fa\bar{x}\lnot\Phi(\bar{x})$ since $M\models\Gamma$. In particular, we have $M\models\lnot\phi_i(\bar{c}/\bar{x})$ for some $i$, contradicting the fact that $\sigma_i\in\Diag M$.<span style="float:right;">$\blacksquare$</span>

\end{proof}
