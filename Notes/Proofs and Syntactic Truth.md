<div class="topSpace"></div>

Date Created: 15/12/2023 19:42:31
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Proofs and Syntactic Truth).

Let $T$ be a $\sigma$-theory and let $\phi$ be a $\sigma$-formula. A finite sequence $\tpl{\phi_1,\dots,\phi_n}$ is said to be a <b>proof</b> of $\phi$ if $\phi_n=\phi$ and, for each $\phi_i$, either $\phi_i\in\Axioms\l(\sigma\r)\cup T$ or $\phi_i$ is obtained from Modus Ponens from $\phi_j$ and $\phi_k$ for some $j,k<i$. In this case, we say that <b>$T$ proves $\phi$</b> and write $T\proves\phi$.
* We say that $\phi_i$ is obtained by <b>Modus Ponens</b> from $\phi_j$ and $\phi_k$ if $\phi_j=\l(\phi_k\rightarrow\phi_i\r)$, in which case we write $\phi_j,\phi_k\MP\phi_i$.

```

<b>Remark.</b> If $T\coloneqq\em$, we write $\proves\phi$ for $\em\proves\phi$.
