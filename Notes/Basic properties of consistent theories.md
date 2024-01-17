<div class="topSpace"></div>

Date Created: 16/12/2023 18:21:37
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Proposition #Topic/Logic/Proof_Theory

Proved by: [[Basic provable facts]], [[Basic provable facts#^deduction-theorem]], [[Basic provable facts#^constant-substitution-theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\sigma$ be a signature in $\FOL$. A $\sigma$-theory $T$ is consistent iff $T\not\proves\bot$, where $\bot\coloneqq\ex v\l(v\neq v\r)$, which occurs iff $T\not\proves\phi$ for some $\sigma$-formula $\phi$. Furthermore:
* For any $\sigma$-sentence $\phi$, $T\cup\l\{\phi\r\}$ is consistent iff $T\not\proves\lnot\phi$. If $T$ is consistent, then at least one of $T\cup\l\{\phi\r\}$ and $T\cup\l\{\lnot\phi\r\}$ is consistent.
* For any $\sigma$-formula $\phi\l(v\r)$, if $T'\coloneqq T\cup\l\{\ex u\phi\l(u/v\r)\r\}$ is consistent and $c$ is a constant symbol not appearing in $T'$, then $T\cup\l\{\phi\l(c/v\r)\r\}$ is consistent.

```

<i>Proof.</i> Since $\proves\top$, clearly $T\proves\top$ and so if $T$ is consistent, then $T\not\proves\bot$. It remains to show that if $T$ is inconsistent, then $T\proves\phi$ for any $\sigma$-formula $\phi$. To this end, let $\psi$ be a $\sigma$-formula witnessing inconsistency of $T$, i.e. $T\proves\psi$ and $T\proves\lnot\psi$. By <i>proof-by-contradiction</i>, we have $\proves\l(\lnot\phi\rightarrow\psi\r)\rightarrow\l[\l(\lnot\phi\rightarrow\lnot\psi\r)\rightarrow\phi\r]$, so <i>everything-implies-an-axiom</i>, along with a couple of MP’s and the Deduction Theorem, gives us $T\proves\phi$ as desired.
* We prove the contrapositive, that $T\cup\l\{\phi\r\}$ is inconsistent iff $T\proves\lnot\phi$. The backwards direction follows since $T\cup\l\{\phi\r\}$ proves both $\phi$ and $\lnot\phi$. For the forwards, we have by the above that $T,\phi\proves\bot$, so $T\proves\l(\phi\rightarrow\bot\r)$ by the Deduction Theorem. By <i>forward-contrapositive</i> and <i>double-negation</i>, we have $T\proves\l(\top\rightarrow\lnot\phi\r)$, so $T\proves\lnot\phi$ by <i>truth</i> and an application of MP. Finally, if both $T\cup\l\{\phi\r\}$ and $T\cup\l\{\lnot\phi\r\}$ are inconsistent, then $T\proves\lnot\phi$ and $T\proves\phi$ by <i>double-negation</i> and so $T$ is inconsistent.
* We prove the contrapositive, so assume that $T\cup\l\{\phi\l(c/v\r)\r\}$ is inconsistent. Then $T\proves\lnot\phi\l(c/v\r)$, so the Constant Substitution Theorem gives us that $T\proves\lnot\phi$. The <i>generalization</i> axiom then gives us $T\proves\fa u\lnot\phi\l(u/v\r)$, i.e. $T\proves\lnot\ex u\phi\l(u/v\r)$, so $T\cup\l\{\ex u\phi\l(u/v\r)\r\}$ is inconsistent.<span style="float:right;">$\blacksquare$</span>
