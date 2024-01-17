---
mathLink-blocks:
    syntactic-semantic-duality: Syntactic-Semantic Duality
---

<div class="topSpace"></div>

Date Created: 15/12/2023 20:17:29
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Theorem #Topic/Logic/Model_Theory

Proved by: [[Theory#^maximally-consistent-completion]], [[Basic properties of consistent theories]], [[Basic provable facts]], [[Henkin Theory#^Henkin-theories-calculate-terms]]
References: [[Proofs and Syntactic Implication#^soundness]], [[Proofs and Syntactic Implication#^axioms-of-FOL]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Completeness Theorem; Gödel 1929 & Henkin 1949).

Let $\sigma$ be a signature in $\FOL$. If a $\sigma$-theory $T$ is consistent, then it admits a model of cardinality $\leq\max\l\{\l|\sigma\r|,\aleph_0\r\}$.

```

<b>Remark.</b> One of the most important corollary thereof is the <i>Syntactic-Semantic Duality</i>, that is, for a $\sigma$-theory $T$ and a $\sigma$-sentence $\phi$, we have $T\proves\phi$ iff $T\models\phi$. ^syntactic-semantic-duality

![[Images/2023-12-15_205925/image.svg|600]]The forward direction is just Soundness. Conversely, suppose $T\not\proves\phi$. Then $T\not\proves\lnot\lnot\phi$ since $\proves\l(\lnot\lnot\phi\rightarrow\phi\r)$, so $T\cup\l\{\lnot\phi\r\}$ is consistent. By the Completeness Theorem, it admits a model $\mc{A}$, so $T\not\models\phi$ since we have a witness $\mc{A}\models T$ such that $\mc{A}\models\lnot\phi$. The other rows of the table are easily obtained.<span style="float:right;">$\blacklozenge$</span>


---

<i>Proof.</i> To motivate the construction, note that for a $\sigma$-structure $\mc{A}$, the $\sigma_A$-theory $H\coloneqq\ElDiag\l(\mc{A}\r)$ is Henkin since $H\proves\ex v\phi$ iff $\ex v\phi\in H$, which occurs iff $\phi\l(c/v\r)\in H$ for some $c\in\mc{C}\l(\sigma\r)$. The main idea is to turn this around, by making $T$ ‘look like’ the elementary diagram of some $\sigma$-structure $\mc{A}$. More precisely, this means that:
1. <i>Extension</i>. Any consistent $\sigma$-theory $T$ admits a $\tau$-Henkin extension $H\supseteq T$ for some signature $\tau\supseteq\sigma$ with $\l|\tau\r|=\max\l\{\l|\sigma\r|,\aleph_0\r\}$.
2. <i>Construction</i>. Any $\tau$-Henkin theory $H$ admits a model $\mc{A}$ of cardinality $\kappa\leq\l|\tau\r|$.

Given these facts, we are done by taking the reduct of $\mc{A}$ to $\sigma$. Heuristically, we obtain $\tau$ by ‘throwing in’ Henkin witnesses into $\sigma$, we obtain $H$ by adding in the $\tau$-sentences $\phi\l(c_{\ex v\phi}/v\r)$ where $c_{\ex v\phi}$ is a Henkin witness to $\ex v\phi$, and finally we obtain $\mc{A}$ by interpreting the symbols in such a way that $H=\ElDiag\l(\mc{A}\r)$.

---

<i>Extension</i>. Let $\tau\coloneqq\bigcup_n\sigma_n$, where $\sigma_0\coloneqq\sigma$ and $\sigma_{n+1}\coloneqq\sigma_n\sqcup\l\{c_{\ex v\phi}\st\phi\l(v\r)\in\Form(\sigma_n)\r\}$; the new constant symbols $c_{\ex v\phi}$ will serve as Henkin witnesses. Indeed, we define an increasing sequence $\tpl{T_n}$ of extensions of $T$ by letting $T_0$ be the maximally consistent $\sigma_0$-completion of $T$, and, assuming that $T_n$ is defined, letting $T_{n+1}$ be a maximally consistent $\sigma_{n+1}$-completion of $T_n\cup H_n$ where $H_n\coloneqq\l\{\phi\l(c_{\ex v\phi}/v\r)\st\ex v\phi\in T_n\r\}$. Note that if $T_n$ is consistent, then so is $T_n\cup H_n$ since for each $\sigma_n$-sentence $\phi\l(c_{\ex v\phi}/v\r)\in H_n\comp T_n$, we have $\ex v\phi\in T_n$ and the constant symbol $c_{\ex v\phi}$ does not appear in the consistent $\sigma_n$-theory $T\cup\l\{\ex v\phi\r\}$, so $T\cup\l\{\phi\l(c_{\ex v\phi}/v\r)\r\}$ is also consistent.

Thus $H\coloneqq\bigcup_nT_n$ is a consistent maximal $\tau$-completion of $T$, with $\l|\tau\r|=\max\l\{\l|\sigma\r|,\aleph_0\r\}$. To show that $H$ is $\tau$-Henkin, take $\ex v\phi\in H$. Then $\ex v\phi\in T_n$ is a $\sigma_n$-sentence for some $n$, so $\phi\l(c_{\ex v\phi}/v\r)\in H_n\subseteq H$ as desired.

---

<i>Construction</i>. Write $\tau=\tpl{\mc{F},\mc{R},\mc{C}}$ and set $A\coloneqq\mc{C}/\!\sim$, where $c_1\sim c_2$ iff $H\proves\l(c_1=c_2\r)$; that this is an equivalence relation follows from the <i>equality-is-an-equivalence</i>, <i>generalization</i>, and <i>instantiation</i> axioms. We let $A$ be the universe of a $\tau$-structure $\mc{A}$ by interpreting:
$$\begin{equation}
    \begin{alignedat}{2}
        c^\mc{A}&\coloneqq\l[c\r] && \ \ \ \ \ \ \ \ \textrm{for each }c\in\mc{C}, \\
        f^\mc{A}\!\l([\vec{a}]\r)=\l[b\r]\,&\colon\!\Leftrightarrow H\proves f(\vec{a})=b && \ \ \ \ \ \ \ \ \textrm{for each }f\in\mc{F}_n\textrm{, }\vec{a}\in \mc{C}^n\textrm{, and }b\in\mc{C}, \\
        R^\mc{A}\!\l([\vec{a}]\r)\,&\colon\!\Leftrightarrow H\proves R(\vec{a}) && \ \ \ \ \ \ \ \ \textrm{for each }R\in\mc{R}_n\textrm{ and }\vec{a}\in\mc{C}^n.
    \end{alignedat}
\end{equation}$$
That $\mc{A}$ is well-defined follows from the <i>functions-respect-equality</i> and <i>relations-respect-equality</i> axioms. Also, note that for each $f\in\mc{F}_n$ and $\vec{c}\in\mc{C}^n$, there exists some $b\in\mc{C}$ such that $H\proves f(\vec{a})=b$ in the first place since Henkin theories calculate terms. We need a lemma, which states that $\tau$-terms behave as we expect them to.
* For each $t\in\Term\l(\tau\r)$ and $b\in\mc{C}$, we have $t^\mc{A}=\l[b\r]$ iff $H\proves t=b$. We proceed by induction on the construction of $t$, for which the base case when $t=c$ for some $c\in\mc{C}$ holds by definition of $c^\mc{A}$. Suppose now that $t=f(t_1,t_2,\dots,t_n)$ for some $f\in\mc{F}_n$. Since Henkin theories calculate terms, there exists some $\vec{a}\in\mc{C}^n$ such that $H\proves t_i=a_i$ for each $i$, and hence $H\proves t=f(\vec{a})$ by <i>functions-respect-equality</i>. By induction, we have $t_i^\mc{A}=\l[a_i\r]$ for each $i$, and hence $t^\mc{A}=f^\mc{A}\!\l([\vec{a}]\r)$. Thus $t^\mc{A}=\l[b\r]$ iff $f^\mc{A}\!\l([\vec{a}]\r)=b$, which by definition occurs iff $H\proves f(\vec{a})=b$. By <i>equality-is-transitive</i>, this occurs iff $H\proves t=b$, as desired.

Finally, $\mc{A}\models\theta$ iff $H\proves\theta$ for any $\tau$-sentence $\theta$, which we prove by induction on its construction. The base case when $\theta=(t_1=t_2)$ for some $t_i\in\Term\l(\tau\r)$ follows from the lemma above. Similarly, the case $\theta=R(t_1,\dots,t_n)$ for some $R\in\mc{R}_n$ and $t_i\in\Term\l(\tau\r)$ follows from the lemma above together with the <i>relations-respect-equality</i> axiom. Lastly, the case $\theta=\lnot\phi$ follows from maximal consistency of $H$, the case $\theta=\theta_1\land\theta_2$ is trivial, and the case $\theta=\ex v\phi$ follows from <i>witness-implies-existence</i> and the fact that $H$ admits a Henkin witness for $\theta$.<span style="float:right;">$\blacksquare$</span>
