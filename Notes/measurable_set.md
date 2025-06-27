---
title: Measurable Set
date: 2025-06-26
tags: [In_Progress]
---

Let $(X,\mc{B},\mu)$ be a \ref[measure space]{measure}. Sets $B\in\mc{B}$ are often called 'measurable' sets, since $\mu:\mc{B}\to[0,\infty]$ assigns to each $A\in\mc{B}$ a measure $\mu(A)$, but we can also closed $\mc{B}$ downward to obtain a larger collection of measurable sets.

# Definition and Properties

\begin{definition_}

A set $Z\subeq X$ is _$\mu$-null_ if $Z\subeq Z'$ for some $Z'\in\mc{B}$. We let $\Null_\mu$ denote the $\sigma$-ideal of $\mu$-null sets.

\end{definition_}

\begin{definition}

A set $A\subeq X$ is _$\mu$-measurable_ if $A=B\cup Z$ for some $B\in\mc{B}$ and some $Z\in\Null_\mu$.

\end{definition}

&emsp;&emsp;We write $\Meas_\mu$ for the collection of all $\mu$-measurable sets. Replacing $\mc{B}$ with $\Meas_\mu$ is generally harmless:

\begin{theorem}\label{extension}

The measure $\mu$ admits a unique extension to a measure $\bar{\mu}$ on $\Meas_\mu$.

\end{theorem}

\begin{definition_}

A measure space $(X,\mc{B},\mu)$ is _complete_ if $\mc{B}=\Meas_\mu$, in which case $\bar{\mu}=\mu$.

\end{definition_}

\begin{lemma}\label{cup_comp}

For any $B\in\mc{B}$ and $Z\in\Null_\mu$, we have:
1. $B\cup Z=B'\comp Z'$ for some $B'\in\mc{B}$ and $Z'\in\Null_\mu$.
2. $B\comp Z=B'\cup Z'$  for some $B'\in\mc{B}$ and $Z'\in\Null_\mu$.

\end{lemma}

\begin{proof}

Take $Z\subeq\widehat{Z}\in\mc{B}$ such that $\mu(\widehat{Z})=0$, so $B'\coloneqq B\cup\widehat{Z}\in\mc{B}$ and $Z'\coloneqq\widehat{Z}\comp Z\in\Null_\mu$, and hence
\begin{equation*}
    B'\comp Z'=(B\cup\widehat{Z})\comp(\widehat{Z}\comp Z)=(B\cup\widehat{Z})\cap(\widehat{Z}^c\cup Z)=B\cup Z.
\end{equation*}
This establishes (1), and (2) is similar.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{lemma}

$\Meas_\mu=\l\langle\mc{B}\cup\Null_\mu\r\rangle_\sigma$.

\end{lemma}

\begin{proof}

Since $\l\langle\mc{B}\cup\Null_\mu\r\rangle_\sigma\subeq\Meas_\mu$, it suffices to show that $\Meas_\mu$ is a $\sigma$-algebra.

<br>

&emsp;&emsp;Indeed, if $B\cup Z\in\Meas_\mu$, then $(B\cup Z)^c=B^c\cap Z^c=B^c\comp Z\in\Meas_\mu$ by Lemma \iref{cup_comp}, and if $B_n\cup Z_n\in\Meas_\mu$, then $\bigcup_n(B_n\cup Z_n)=(\bigcup_nB_n)\cup(\bigcup_nZ_n)\in\Meas_\mu$ since $\Null_\mu$ is a $\sigma$-ideal.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

\begin{proof}[of Theorem \iref{extension}]

Let $\bar{\mu}(B\cup Z)\coloneqq\mu(B)$, which is well-defined since if $B_1\cup Z_1=B_2\cup Z_2$ for some $B_i\in\mc{B}$ and $Z_i\in\Null_\mu$, then letting $B\coloneqq B_1\cap B_2$ and $\widehat{Z}\supseteq Z_1\cup Z_2$ be $\mu$-null, we have $\mu(B)\leq\mu(B_i)\leq\mu(B\cup\widehat{Z})=\mu(B)$; note that we have $B_i\subeq B\cup\widehat{Z}$ since $B_1\comp B_2\subeq Z_2$ and $B_2\comp B_1\subeq B_1$. Thus $\mu(B_i)=\mu(B)$ for $i=1,2$, as desired. Such an extension is unique since if $\nu|\mc{B}=\mu$, then $\mu(B)=\nu(B)\leq\nu(B\cup Z)\leq\mu(B\cup\widehat{Z})=\mu(B)$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

# Non-measurable sets

\TODO
