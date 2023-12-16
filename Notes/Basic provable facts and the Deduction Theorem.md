---
mathLink: Basic provable facts/Deduction Theorem
---

<div class="topSpace"></div>

Date Created: 16/12/2023 15:08:38
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\sigma$ be a signature. The following basic facts are provable from $\Axioms\l(\sigma\r)$ and the empty $\sigma$-theory.
* $\phi\rightarrow\phi$ $\color{gray}{\textrm{\it{(self-implication)}}}$, $\phi\proves\psi\rightarrow\phi$ $\color{gray}{\textrm{\it{(everything-implies-an-axiom)}}}$, and $\l(\lnot\phi\land\phi\r)\to\psi$ $\color{gray}{\textrm{\it{(contradiction-implies-everything)}}}$.
* $\phi\leftrightarrow\lnot\lnot\phi$ $\color{gray}{\textrm{\it{(double-negation)}}}$, $\lnot\phi\rightarrow\l(\phi\rightarrow\psi\r)$ $\color{gray}{\textrm{\it{(if-false-then-implies)}}}$, and $\l(\phi\rightarrow\psi\r)\rightarrow\l(\lnot\psi\rightarrow\lnot\phi\r)$ $\color{gray}{\textrm{\it{(forward-contrapositive)}}}$.
* $\top$, where $\top\coloneqq\fa v\l(v=v\r)$ $\color{gray}{\textrm{\it{(truth)}}}$ and $\bot\rightarrow\psi$, where $\bot\coloneqq\lnot\top$ $\color{gray}{\textrm{\it{(false-implies-everything)}}}$.
* $\l(\phi\l(t/v\r)\rightarrow\ex v\phi\r)$ for any variable symbol $v$ and $\sigma$-term $t$ free in $v$ $\color{gray}{\textrm{\it{(witness-implies-existence)}}}$.

For a $\sigma$-theory $T$, we have $T,\psi\proves\phi$ iff $T\proves\l(\psi\rightarrow\phi\r)$ for all $\sigma$-formulas $\phi,\psi$ $\color{gray}{\textrm{\it{(Deduction Theorem)}}}$, and $T\proves\phi\l(c/v\r)$ iff $T\proves\phi$, where $c$ is a constant symbol not in $\sigma$, $v$ is free in $\phi$, and where in the first statement $c$ is treated as a constant symbol and $T$ a $\sigma\sqcup\l\{c\r\}$-theory. $\color{gray}{\textrm{\it{(Constant Substitution)}}}$.

```

<i>Proof.</i> We give a very formal proof of <i>self-implication</i> and outline the rest, which can all be cast in a similar format.
$$\begin{equation}
    \begin{alignedat}{3}
        &\l(1\r) &&\ \ \ \ \ \ \ \ \textrm{\it{Implication-is-transitive}} \ \ \ \ \ \ \ \ &&\proves\l[\phi\rightarrow\l(\phi\rightarrow\phi\r)\r]\rightarrow\l[\l(\phi\rightarrow\l(\l(\phi\rightarrow\phi\r)\rightarrow\phi\r)\r)\rightarrow\l(\phi\rightarrow\phi\r)\r] \\
        &\l(2\r) &&\ \ \ \ \ \ \ \ \textrm{\it{Conclusion-implies-implication}}\ \ \ \ \ \ \ \ &&\proves\phi\rightarrow\l(\phi\rightarrow\phi\r) \\
        &\l(3\r) &&\ \ \ \ \ \ \ \ \textrm{MP (1,2)}\ \ \ \ \ \ \ \ &&\proves\l[\phi\rightarrow\l(\l(\phi\rightarrow\phi\r)\rightarrow\phi\r)\r]\rightarrow\l(\phi\rightarrow\phi\r) \\
        &\l(4\r) &&\ \ \ \ \ \ \ \ \textrm{\it{Conclusion-implies-implication}}\ \ \ \ \ \ \ \ &&\proves\phi\rightarrow\l(\l(\phi\rightarrow\phi\r)\rightarrow\phi\r) \\
        &\l(5\r) &&\ \ \ \ \ \ \ \ \textrm{MP (3,4)}\ \ \ \ \ \ \ \ &&\proves\phi\rightarrow\phi
    \end{alignedat}   
\end{equation}$$
* <i>(Everything-implies-an-axiom)</i>. By <i>implication is transitive</i>, 
