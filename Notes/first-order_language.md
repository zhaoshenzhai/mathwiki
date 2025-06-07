---
title: First-order Language
date: 2025-06-07
tags: [In_Progress]
---

# Definitions

\begin{definition}

A _(first-order) language_ is a tuple $L\coloneqq(\mc{F},\mc{R},\mf{a})$ consisting of a set $\mc{F}$ of _function symbols_, a set $\mc{R}$ of _relation symbols_, and an _arity function_ $\mf{a}:\mc{F}\sqcup\mc{R}\to\N$.

\end{definition}

For each $n\in\N$, we write $\mc{F}_n\coloneqq\mc{F}\cap\mf{a}^{-1}(n)$ and $\mc{R}_n\coloneqq\mc{R}\cap\mf{a}^{-1}(n)$ for the _$n$-ary_ function (resp. relation) symbols, and write $\mc{C}\coloneqq\mc{F}_0$ for the _constant symbols_.

## Terms and formulas

Let $L$ be a language. The _alphabet $A_L$ of first-order language in $L$_ is the set consisting of $L$, the symbols $\land$, $\lor$, $\lnot$, $\rightarrow$, $\leftrightarrow$, $\fa$, $\ex$, $=$, $\raise6mu{,}$, $($, $)$, and an (countably-)infinite set $\l\\{x_0,x_1,\dots\r\\}$ of variables.
* The set of _$L$-terms_ is the smallest set of strings in the alphabet $A_L$ containing $\mc{C}$, the variables, and is closed under function symbol applications: if $\tau_1,\dots,\tau_n$ are $L$-terns and $f\in\mc{F}_n$, then $f(\tau_1,\dots,\tau_n)$ is an $L$-term.
* The set of _$L$-formulas_ is the smallest set of strings in the alphabet $A_L$ such that
    1. If $\tau_1$ and $\tau_2$ are $L$-terms, then $\tau_1=\tau_2$ is an $L$-formula.
    2. If $\tau_1,\dots,\tau_n$ are $L$-terms and $R\in\mc{R}_n$, then $R(\tau_1,\dots,\tau_n)$ is an $L$-formula.
    3. If $\phi_1$ and $\phi_2$ are $L$-formulas, then so are $\phi_1\land\phi_2$, $\phi_2\lor\phi_2$, $\lnot\phi_1$, $\phi_1\rightarrow\phi_2$, and $\phi_1\leftrightarrow\phi_2$.
    4. If $\phi$ is an $L$-formula and $x$ is a variable, then $\fa x\phi$ and $\ex x\phi$ are $L$-formulas.

The $L$-formulas formed using only (1) and (2) are said to be _atomic_, and the ones formed without (4) are said to be _quantifier-free_. A variable $x$ is said to be _free_ in an $L$-formula $\phi$ if $\phi$ does not contain any substring of the form $\fa x\psi$ and $\ex x\psi$, where $\psi$ is an $L$-formula.
* A _constant $L$-term_ is an $L$-term containing no variables. If $\tau$ is an $L$-term and $x_1,\dots,x_n$ is a list of variables containing all variables occurring in $\tau$, we write $\tau(x_1,\dots,x_n)$ or $\tau(\bar{x})$ for $\tau$.
* An _$L$-sentence_ is an $L$-formula without free variables. If $\phi$ is an $L$-formula and $x_1,\dots,x_n$ is a list of variables contain all free variables in $\phi$, we write $\phi(x_1,\dots,x_n)$ or $\phi(\bar{x})$ for $\phi$.
* If $\phi(x_1,\dots,x_n)$ is an $L$-formula and $\tau_1,\dots,\tau_n$ are $L$-terms, we write $\phi(\bar{\tau}/\bar{x})$ for the _substitution_ of $\bar{x}$ by $\bar{\tau}$ in $\phi$, obtained by replacing each occurrence of $x_i$ by $\tau_i$.
