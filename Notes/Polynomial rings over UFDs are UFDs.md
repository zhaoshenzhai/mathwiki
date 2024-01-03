---
mathLink: $R$ UFD $\Rightarrow$ $R\l[x\r]$ UFD
---

<div class="topSpace"></div>

Date Created: 22/01/2023 23:34:37
References: #Ref/Alu09
Tags: #Type/Theorem #Topic/Rings_and_Modules/Ring_Theory

Proved by: [[Characterization of UFDs]], [[Polynomial ring over fields is a EUD]], [[EUD implies PID]], [[Characterization of UFDs#^pid-implies-ufd]], [[Divisibility via field of fractions]], [[Gauss's Lemma (Irreducibility)]], [[Isomorphism Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem.

Let $R$ be a UFD. Then $R\l[x\r]$ is also a UFD.

```

<i>Proof.</i> It suffices to show that $R\l[x\r]$ satisfies the a.c.c. for principal ideals and that every irreducible element in $R\l[x\r]$ is prime. Set $k\coloneqq\Frac R$ and let $\gen{\slot}_k$ denote ideals in $k\l[x\r]$.
* For the a.c.c., let $\gen{f_1}\subseteq\gen{f_2}\subseteq\cdots$ be an ascending chain for principal ideals. This induces an ascending chain of principal ideals $\cont f_1\subseteq\cont f_2\subseteq\cdots$ in $R$, which stabilizes since $R$ is a UFD. Observe that we have an ascending chain $\gen{f_1}_k\subseteq\gen{f_2}_k\subseteq\cdots$ of principal ideals in $k\l[x\r]$ too. This stabilizes since $k\l[x\r]$ is a UFD, so the original ascending chain in $R\l[x\r]$ stabilizes too.

Now, let $f\in R\l[x\r]$ be an irreducible element. If $f\in R$ is constant, then it is prime in $R$ and hence prime in $R\l[x\r]$ too. Otherwise, it is irreducible in $k\l[x\r]$ by Gauss’s Lemma and hence prime in $k\l[x\r]$ too. Consider the canonical map
$$\begin{equation}
    \phi:R\l[x\r]\into k\l[x\r]\onto k\l[x\r]/\gen{f}_k.
\end{equation}$$
Clearly $\gen{f}\subseteq\ker\phi$. For the other inclusion, note that $g\in\ker\phi$ implies that $g\in\gen{f}_k$, so $\gen{g}_k\subseteq\gen{f}_k$. Observe that $\cont g\subseteq\cont f=\gen{1}$, so $\gen{g}\subseteq\gen{f}$ in $R\l[x\r]$. Thus $g\in\gen{f}$, so $\ker\phi=\gen{f}$ as desired. Thus $\phi$ descends into an injection $R\l[x\r]/\gen{f}\into k\l[x\r]/\gen{f}_k$, and since $\gen{f}_k$ is prime, we see that $\gen{f}$ is prime in $R\l[x\r]$ too.<span style="float:right;">$\blacksquare$</span>
