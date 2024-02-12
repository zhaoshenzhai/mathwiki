<div class="topSpace"></div>

Date Created: 11/02/2024 20:53:44
References: #Ref/Anu23 #Ref/Anu23_318 #Ref/Mar02
Tags: #Type/Proposition #Topic/Logic/Model_Theory

Proved by: [[Proofs#^axioms-of-FOL]], [[Henkin Theory#^Henkin-theories-calculate-terms]], [[Basic provable facts]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Henkin Construction).

Let $\sigma$ be a signature in $\FOL$. If $H$ is a Henkin $\sigma$-theory, then it admits a model of cardinality at-most $\l|\sigma\r|$.

```

<i>Proof.</i> Set $M\coloneqq\mc{C}(\sigma)/\!\sim$, where $\sim$ is the equivalence relation defined by $c_1\sim c_2$ iff $H\proves\l(c_1=c_2\r)$; that this is an equivalence relation follows from the <i>equality-is-an-equivalence</i>, <i>generalization</i>, and <i>instantiation</i> axioms. We let $M$ be the universe of a $\sigma$-structure $\mc{M}$ by interpreting
$$\begin{equation}
    \begin{alignedat}{2}
        c^\mc{M}&\coloneqq\l[c\r] && \ \ \ \ \ \ \ \ \textrm{for each }c\in\mc{C}, \\
        f^\mc{M}\!\l([\vec{a}]\r)=\l[b\r]\,&\colon\!\Leftrightarrow H\proves f(\vec{a})=b && \ \ \ \ \ \ \ \ \textrm{for each }f\in\mc{F}_n\textrm{, }\vec{a}\in \mc{C}^n\textrm{, and }b\in\mc{C}, \\
        R^\mc{M}\!\l([\vec{a}]\r)\,&\colon\!\Leftrightarrow H\proves R(\vec{a}) && \ \ \ \ \ \ \ \ \textrm{for each }R\in\mc{R}_n\textrm{ and }\vec{a}\in\mc{C}^n.
    \end{alignedat}
\end{equation}$$
That $\mc{M}$ is well-defined follows from the <i>functions-respect-equality</i> and <i>relations-respect-equality</i> axioms. Also, note that for each $f\in\mc{F}_n$ and $\vec{c}\in\mc{C}^n$, there exists some $b\in\mc{C}$ such that $H\proves f(\vec{a})=b$ in the first place since Henkin theories calculate terms. We need a lemma, which states that $\sigma$-terms behave as we expect them to.
* For each $t\in\Term\l(\sigma\r)$ and $b\in\mc{C}$, we have $t^\mc{M}=\l[b\r]$ iff $H\proves(t=b)$. We proceed by induction on the construction of $t$, for which the base case when $t=c$ for some $c\in\mc{C}$ holds by definition of $c^\mc{M}$. Suppose now that $t=f(t_1,t_2,\dots,t_n)$ for some $f\in\mc{F}_n$. Since Henkin theories calculate terms, there exists some $\vec{a}\in\mc{C}^n$ such that $H\proves t_i=a_i$ for each $i$, and hence $H\proves t=f(\vec{a})$ by <i>functions-respect-equality</i>. By induction, we have $t_i^\mc{M}=\l[a_i\r]$ for each $i$, and hence $t^\mc{M}=f^\mc{M}\!\l([\vec{a}]\r)$. Thus $t^\mc{M}=\l[b\r]$ iff $f^\mc{M}\!\l([\vec{a}]\r)=b$, which by definition occurs iff $H\proves f(\vec{a})=b$. By <i>equality-is-transitive</i>, this occurs iff $H\proves t=b$, as desired.

Finally, $\mc{M}\models\theta$ iff $H\proves\theta$ for any $\sigma$-sentence $\theta$, which we prove by induction on its construction. The base case when $\theta=(t_1=t_2)$ for some $t_i\in\Term\l(\sigma\r)$ follows from the lemma above. Similarly, the case $\theta=R(t_1,\dots,t_n)$ for some $R\in\mc{R}_n$ and $t_i\in\Term\l(\sigma\r)$ follows from the lemma above together with the <i>relations-respect-equality</i> axiom. Lastly, the case $\theta=\lnot\phi$ follows from maximal consistency of $H$, the case $\theta=\theta_1\land\theta_2$ is trivial, and the case $\theta=\ex v\phi$ follows from <i>witness-implies-existence</i> and the fact that $H$ admits a Henkin witness for $\theta$.<span style="float:right;">$\blacksquare$</span>
