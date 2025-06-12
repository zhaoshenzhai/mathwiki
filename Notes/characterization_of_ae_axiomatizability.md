---
title: Characterization of AE-axiomatizability
renderedTitle: Characterization of $\fa\ex$-axiomatizability
date: 2025-06-12
tags: [In_Progress]
---

Throughout, let $L$ be a \ref[language]{first-order_language} and recall the following facts, which will be used without reference.

\begin{fact*}[\ref[Diagrams]{diagrams_and_embeddings}]

Let $N$ be an $L_M$-\ref[structure]{model}.
1. If $N\models\Diag M$, then there is an $L$-embedding $M\into N$.
2. If $N\models\Diag_\mathrm{el}M$, then there is an $L$-\ref[elementary]{elementary} embedding $M\into_eN$.

\end{fact*}

\begin{fact*}[\ref[Compactness Theorem]{compactness_theorem}]

If an $L$-\ref[theory]{theory} $T$ is finitely-satisfiable, then it is satisfiable.

\end{fact*}

# Statement and Proof

We give a characterization for when an $L$-theory is \ref[$\fa\ex$-axiomatizable]{axiomatization}.

\begin{theorem}\label{char}

An $L$-theory $T$ is $\fa\ex$-axiomatizable iff $T$ is closed under increasing chain of models, i.e., for any increasing sequence $M_\alpha\models T$ of models, we have $\bigcup_\alpha M_\alpha\models T$.

\end{theorem}

&emsp;&emsp;The proof of this theorem relies on the following facts.

\begin{fact}[\ref[Tarski's Chain Theorem]{tarskis_elementary_chain_theory}]\label{chain}

Let $M_\alpha$ be an elementary chain of $L$-structures and set $M\coloneqq\bigcup_\alpha M_\alpha$. Then $M_\alpha\esubeq M$ for each $\alpha$.

\end{fact}

\begin{fact}[\ref[Models of $T_\fa$]{characterization_of_universal_axiomatizability}]\label{universal_char}

Let $T$ be an $L$-theory and let $T_\fa$ be the universal consequences of $T$. For any $L$-structure $N$, we have $N\models T_\fa$ iff there is a model $M\models T$ containing $N$.

\end{fact}

<div class="space"></div>

\begin{proof}\label[of Theorem \iref{char}]

Suppose that $\Gamma$ is a $\fa\ex$-axiomatization of $T$ and let $M_\alpha\models T$ be an increasing chain. To show that $M\coloneqq\bigcup_\alpha M_\alpha\models T$, it suffices to show that $M\models\sigma$ for all sentences $T\models\sigma$ of the form $\fa\bar{x}\ex\bar{y}\phi(\bar{x},\bar{y})$ where $\phi$ is quantifier-free. To this end, take $\bar{a}\in M$, so $\bar{a}\in M_\alpha$ for some $\alpha$. Since $M_\alpha\models\sigma$, we see that $M_\alpha\models\ex\bar{y}\phi(\bar{a},\bar{y})$. But the latter is an existential formula, so $M\models\ex\bar{y}\phi(\bar{a},\bar{y})$, and hence $M\models\sigma$ as desired.

<br>

&emsp;&emsp;Conversely, let $T_{\fa\ex}$ be the set of all $\fa\ex$-consequences of $T$. If $M\models T$, then clearly $M\models T_{\fa\ex}$. If $M\models T_{\fa\ex}$, we show that $M\models T$ by constructing a chain $M\eqqcolon M_0\subeq N_1\subeq M_1\subeq N_2\subeq\cdots$ of $L$-structures such that $N_n\models T$ for each $n<\omega$ and $(M_n)$ is an elementary chain, so that $M^\ast\coloneqq\bigcup_nM_n=\bigcup_nN_n\models T$ by hypothesis. Finally, we have $M\esubeq M^\ast$ by Fact \iref{chain}, so that $M\models T$ too. The construction of said chain will be done in two steps.
1. First, we show that there is some model $N\models T$ containing $M$ such that if $\sigma$ is an $\ex\fa$ $L$-sentence and $M\models\sigma$, then $N\models\sigma$ too. Indeed, it suffices to show that the $L_M$-theory $T'\coloneqq T\cup\Diag M\cup\Gamma$, where $\Gamma$ is the set of all $\ex\fa$-sentences $\sigma$ such that $M\models\sigma$, is satisfiable. Suppose towards a contradiction that $T'$ is not satisfiable, so by Compactness, there is a finite set $\Delta\coloneqq\l\\{\sigma_1,\dots,\sigma_n\r\\}\subeq\Gamma$ such that $T_0\coloneqq T\cup\Diag M\cup\Delta$ is unsatisfiable. Thus $T\cup\l\\{\bigwedge_i\sigma_i\r\\}$ is also unsatisfiable, so $T\models\lnot\sigma_i$ for some $i$. Since $\sigma_i$ is an $\ex\fa$-sentence, we see that $\lnot\sigma_i$ is a $\fa\ex$-sentence, and hence $M\models\lnot\sigma_i$ by hypothesis. This contradicts the fact that $M\models\sigma_i$.
2. Next, we show that there exists an elementary extension $M'$ of $M$ such that $N\subseteq M'$. To this end, it suffices by Fact \iref{universal_char} to show that $N\models(\Diag\_\mathrm{el}M)\_\fa$. Indeed, if $\Diag\_\mathrm{el}M\models\sigma$ is a universal $L\_M$-sentence, then $\sigma=\phi(\bar{a}/\bar{x})$ for some universal $L$-formula $\phi(\bar{x})$ and some $\bar{a}\in M$. Thus $M\models\ex\bar{x}\phi(\bar{x})$, so $N\models\ex\bar{x}\phi(\bar{x})$ too by construction of $N$, and hence $N\models\sigma$ by interpreting $\bar{a}$ as any witness for $\bar{x}$, as desired.

Since $M\esubeq M'$, we see that $M'\models T_{\fa\ex}$ too, so this construction can be iterated to give the desired chain.<span style="float:right;">$\blacksquare$</span>

\end{proof}
