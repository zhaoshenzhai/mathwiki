---
title: Carathéodory's Extension Theorem
date: 2025-05-02
tags: [In_Progress]
---

# Motivation and Statements

## Setup

Let $X$ be a set.

\begin{definition}\label{premeasure}

A _premeasure_ on an algebra $\mc{A}$ is a finitely-additive map $\mu:\mc{A}\to[0,\infty]$ such that $\mu(\em)=0$.

\end{definition}

\begin{definition}

Let $\mc{A}\subeq\pow(X)$ be a collection of subsets of $X$ containing $\em$ and covering $X$, and let $m:\mc{A}\to[0,\infty]$ be a map. The _outer measure_ induced by $m$ is the map $m^\ast:\pow(X)\to[0,\infty]$ defined by
\begin{equation*}
    m^\ast(S)\coloneqq\inf\l\\{\sum_{n<\omega}m(A_n)\st A_n\in\mc{A}\mathrm{\ and\ }S\subeq\bigcup_{n<\omega}A_n\r\\}.
\end{equation*}

\end{definition}

\begin{lemma}\label{outer_monotone}

For any $m:\mc{A}\to[0,\infty]$, its outer measure $m^\ast$ is:
* monotone: for all $A,B\in\pow(X)$ with $A\subeq B$, we have $m^\ast(A)\leq m^\ast(B)$.
* countably subadditive: for all $A_i\in\pow(X)$, we have $m^\ast(\bigsqcup_{n<\omega}A_n)\leq\sum_{n<\omega}m^\ast(A_n)$.

\end{lemma}

\begin{proof}

**<span style="color:red">TODO</span>**

<span style="float:right;">$\square$</span>

\end{proof}

\begin{lemma}\label{outer_restriction_premeasure}

For any algebra $\mc{A}$ on $X$ and premeasure $\mu:\mc{A}\to[0,\infty]$, we have $\l.\mu^\ast\r|_\mc{A}=\mu$.

\end{lemma}

\begin{proof}

**<span style="color:red">TODO</span>** <span style="float:right;">$\square$</span>

\end{proof}

## Statements and proofs

\begin{theorem}[Carathéodory's Extension Theorem]

Every $\sigma$-finite premeasure $\mu_0$ on an algebra $\mc{A}$ admits a unique extension to a measure $\mu:\l\langle\mc{A}\r\rangle_\sigma\to X$.

\end{theorem}
