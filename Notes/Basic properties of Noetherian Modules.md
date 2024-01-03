---
mathLink-blocks:
    Hilbert-basis-theorem: Hilbert’s Basis Theorem
---

<div class="topSpace"></div>

Date Created: 07/08/2023 15:59:10
References: #Ref/Alu09
Tags: #Type/Proposition #Topic/Rings_and_Modules/Module_Theory

Proved by: [[Isomorphism Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $M$ be an $R$-module over a commutative ring $R$. If $M$ is Noetherian, then any submodule and homomorphic image of $G$ are also Noetherian.
* If $0\to N\to M\to P\to0$ is an exact sequence of $R$-modules, then $M$ is Noetherian iff both $N$ and $P$ are Noetherian.
* If $R$ is a Noetherian ring and $M$ is either a finitely-generated $R$-module or a finitely-generated commutative $R$-algebra, then $M$ is Noetherian.

```

<b>Remark.</b> The last statement boils down to proving that $R\l[x\r]$ is Noetherian if $R$ is. This result is called <i>Hilbert’s Basis Theorem</i>.<span style="float:right;">$\blacklozenge$</span>
^Hilbert-basis-theorem

---

<i>Proof.</i> If $M$ is Noetherian, then $N\substructeq M$ is clearly Noetherian too. If $\phi:M\to P$ is a surjective homomorphism, identify $P\iso M/K$ where $K\coloneqq\ker\phi$. Then every submodule of $P$ is of the form $N/K$ for some submodule $N\substructeq M$ containing $K$, and if, say $N=\gen{n_1,\dots,n_r}$, then $N/K=\gen{n_1+K,\dots,n_r+K}$ is finitely-generated.
* If $0\to N\to M\to P\to0$ is an exact sequence, then $N\into M\onto P$ and hence both $N$ and $P$ are Noetherian if $M$ is. Conversely, suppose that both $N$ and $P\iso M/N$ are Noetherian, and let $L\substructeq M$ be a submodule of $M$. Note that $L/\!\l(L\cap N\r)\iso\l(L+N\r)/N$, which is isomorphic to a submodule of $M/N$ and hence is finitely-generated. Note that $L\cap N\substructeq N$ is a submodule, so it is finitely-generated too and hence $L$ is itself finitely-generated.
* Since $M$ is finitely-generated in as an $R$-module, we see that $M\iso R^{\oplus n}/N$ for some $n\in\N$ and submodule $N\substructeq R^{\oplus n}$. Thus it suffices to show that $R^{\oplus n}$ is Noetherian, but since $R^{\oplus n}/R^{\oplus\l(n-1\r)}\iso R$, this follows by induction and the hypothesis that $R$ is Noetherian.

Finally, suppose that $M$ is finitely-generated as an $R$-algebra, so $M\iso R\l[x_1,\dots,x_n\r]/J$ for some $n\in\N$ and ideal $J\nsubgrpeq R\l[x_1,\dots,x_n\r]$. It suffices to show that $R\l[x\r]$ is Noetherian, for then $R\l[x_1,\dots,x_n\r]$ is Noetherian by induction and the previous result applies. To this end, suppose, for sake of contradiction, that there is an ideal $I\nsubgrpeq R\l[x\r]$ that is not finitely-generated. Take $0\neq f_0\in I$ of minimal degree. Since $I$ is not finitely-generated, we can inductively choose $f_n\in I\comp\gen{f_0,\dots,f_{n-1}}$ of minimal degree, so $\deg f_i\leq\deg f_{i+1}$ for all $i\in\N$. Let $a_n$ be the leading coefficient of $f_n$ and consider the ascending chain $\gen{a_0}\subseteq\gen{a_0,a_1}\subseteq\cdots$, which stabilizes since $R$ is Noetherian. Thus there is some $n\in\N$ so that $a_{n+1}\in\gen{a_0,\dots,a_n}$, and hence $a_{n+1}=\sum_{i=0}^{n}r_ia_n$ for some $r_i\in R$. Consider the polynomial
$$\begin{equation}
    g\coloneqq f_{n+1}-\sum_{i=0}^{n}r_ix^{\l(\deg f_{n+1}-\deg f_i\r)}f_i\in R\l[x\r].
\end{equation}$$
Then $g\not\in\gen{f_0,\dots,f_n}$, for otherwise $f_{n+1}\in\gen{f_0,\dots,f_n}$. But expanding out the highest degree term of $g$ shows that $\deg g<\deg f_{n+1}$, a contradiction.<span style="float:right;">$\blacksquare$</span>
