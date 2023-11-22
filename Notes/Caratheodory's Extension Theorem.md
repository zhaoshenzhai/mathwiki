---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/09/2023 17:24:38
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Basic properties of measures]], [[Characterizations of continuity (metric)]], [[Continuous Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Carathéodory’s Extension Theorem).

Let $\mc{A}$ be an algebra on a set $X$. Consider a $\sigma$-finite premeasure $\mu_0$ on $\mc{A}$ and restrict $\mu_0^\ast$ onto $\mc{B}\coloneqq\bar{\mc{A}}$ in the pseudo-metric $d\l(B_1,B_2\r)\coloneqq\mu_0^\ast\!\l(B_1\symdiff B_2\r)$. Let $\mu$ be a further restriction of $\mu_0^\ast$ onto $\gen{\mc{A}}_\sigma$. Then (i) $\mu$ is a measure that uniquely extends $\mu_0$; (ii) $\mc{B}$ is exactly the $\mu$-measurable sets; and ${\color{red}{\textrm{\it{(iii) we have }}\bar{\mu}=\l.\mu_0^\ast\r|_\mc{B}}}$.
* Furthermore, (iv) the $\mu$-measurable sets are approximable from above by countable unions of sets in $\mc{A}$, i.e. for every $\mu$-measurable set $M$ and $\epsilon>0$, there is a countable union $U\supseteq M$ of sets in $\mc{A}$ such that $\mu\l(U\comp M\r)<\epsilon$.

```

<b>Remark.</b> If $\mu_0$ is not $\sigma$-finite, then the existence of a measure $\mu$ on $\gen{\mc{A}}_\sigma$ still holds, only that it need not be unique.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof (i).</i> To show that the restriction $\mu$ of $\mu_0^\ast$ onto $\gen{\mc{A}}_\sigma$ is countably additive, it suffices to show that $\mc{B}$ is a $\sigma$-algebra and that $\mu_0^\ast$ is finitely-additive on $\mc{B}$. Indeed, it follows then that $\mu$ is finitely-additive on $\gen{\mc{A}}_\sigma\subseteq\mc{B}$, so it is countably-supadditive; since the outer measure $\mu_0^\ast$ is itself countably-subadditive, we are done. Assume w.l.o.g. that $\mu_0\!\l(X\r)<\infty$; for the general $\sigma$-finite case, partition $X=\bigsqcup_nX_n$ with each $\mu_0\!\l(X_n\r)<\infty$ and note that the extension of $\mu_0$ to $\gen{\mc{A}}_\sigma$ follows from that of the extensions of $\mu_0$ to $\gen{\l.\mc{A}\r|_{X_n}}_\sigma$ for each $n$.
* First, the triangle inequality holds since $d\l(A,B\r)=\mu_0^\ast\!\l(A\symdiff B\r)\leq\mu_0^\ast\!\l(\l(A\symdiff B\r)\cup\l(B\symdiff C\r)\r)\leq\mu_0^\ast\!\l(A\symdiff B\r)+\mu_0^\ast\!\l(B\symdiff C\r)=d\l(A,B\r)+d\l(B,C\r)$. Using basic properties of $\symdiff$, one notes that the maps $\mu_0^\ast:A\to\mu_0^\ast\!\l(A\r)$, $\l(\slot\r)^c:A\mapsto A^c$, and $\cup:\tpl{A,B}\mapsto A\cup B$ on $\pow\l(X\r)$ are all continuous with respect to the appropriate metrics. In particular, this shows that $\mc{B}$ is an algebra; if $A\in\mc{B}$ and $A_n\to A$ is a sequence in $\mc{A}$, then $A_n^c\to A^c$ by continuity of $\l(\slot\r)^c$ and hence $A^c\in\mc{B}$ too; similarly for $\cup$.
* Next, we claim that $\mu_0^\ast$ is finitely-additive on $\mc{B}$. Indeed, if $A,B\in\mc{B}$ are disjoint and $A_n\to A$ and $B_n\to B$ are sequences in $\mc{A}$, then $A_n\cup B_n\to A\sqcup B$ and hence $\mu_0^\ast\!\l(A_n\cup B_n\r)\to\mu_0^\ast\!\l(A\sqcup B\r)$ by continuity of $\mu_0^\ast$. But $\mu_0^\ast\!\l(A_n\cup B_n\r)=\mu_0\l(A_n\cup B_n\r)\approx_{\epsilon_n}\mu_0\l(A_n\r)+\mu_0\l(B_n\r)$ since $\mu_0\l(A_n\cap B_n\r)\to\mu\l(A\cap B\r)=0$, and hence
$$\begin{equation}
    \mu_0^\ast\!\l(A\sqcup B\r)\approx_{\epsilon_n}\mu_0^\ast\!\l(A_n\cup B_n\r)\approx_{\epsilon_n}\mu_0^\ast\!\l(A_n\r)+\mu_0^\ast\!\l(B_n\r)\approx_{\epsilon_n}\mu_0^\ast\!\l(A\r)+\mu_0^\ast\!\l(B\r).
\end{equation}$$
* We claim that $\mc{B}$ is a $\sigma$-algebra. Let $\l\{B_n\r\}_n\in\mc{B}$ be disjoint and choose $A_n\in\mc{A}$ so that $A_n\approx_{\epsilon/2^{n+1}}B_n$; a computation then gives $d\l(\bigcup_nA_n,\bigcup_nB_n\r)<\epsilon$. We claim that $\bigcup_nA_n\in\mc{B}$; since $\mc{B}$ is closed and $\epsilon$ is arbitrary, this shows that $\bigcup_nB_n\in\mc{B}$ too. Indeed, we may assume w.l.o.g. that the collection $\l\{A_n\r\}$ is pairwise disjoint. Note that $\mu_0^\ast\!\l(X\r)\geq\mu_0^\ast\!\l(\bigsqcup_{n<N}A_n\r)=\sum_{n<N}\mu_0^\ast\!\l(A_n\r)$ for all $N\in\N$, so $\sum_n\mu_0\l(A_n\r)$ converges and thus $d\l(\bigsqcup_{n<N}A_n,\bigsqcup_nA_n\r)=\mu_0^\ast\!\l(\bigsqcup_{n\geq N}A_n\r)\leq\sum_{n\geq N}\mu_0^\ast\l(A_n\r)\rightarrow0$.

For uniqueness, let $\nu$ be a measure on $\gen{\mc{A}}_\sigma$ extending $\mu_0$; we claim that $\nu=\mu$. Indeed, we have $\nu\leq\mu$ since if $B\in\gen{\mc{A}}_\sigma$ and $B\subseteq\bigcup_nA_n$ is a cover with each $A_n\in\mc{A}$, then $\nu\l(B\r)\leq\nu\l(\bigcup_nA_n\r)\leq\sum_n\nu\l(A_n\r)=\sum_n\mu_0\l(A_n\r)$. Conversely, note that $\nu$ is $1$-Lipschitz since
$$\begin{equation}
    \l|\nu\l(A\r)-\nu\l(B\r)\r|=\l|\nu\l(A\comp B\r)-\nu\l(B\comp A\r)\r|\leq\nu\l(A\comp B\r)+\nu\l(B\comp A\r)=\nu\l(A\symdiff B\r)\leq\mu_0^\ast\!\l(A\symdiff B\r)=d\l(A,B\r).
\end{equation}$$
Thus both $\nu$ and $\mu$ are continuous functions on $\gen{\mc{A}}_\sigma$ that coincide on a dense set $\mc{A}\subseteq\mc{B}$, so they coincide on $\gen{\mc{A}}_\sigma$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (ii, iv).</i> That $\Meas_\mu\subseteq\mc{B}$ is easy since if $M=B\cup Z$ for some $B\in\gen{\mc{A}}_\sigma$ and some $\mu$-null $Z$, then there is a sequence $A_n\in\mc{A}$ such that $A_n\to B$. Note that $d\l(M,B\r)=\mu_0^\ast\!\l(Z\r)=0$, so, for any $\epsilon>0$, we have $d\l(M,A_n\r)\leq d\l(M,B\r)+d\l(B,A_n\r)=d\l(B,A_n\r)\leq\epsilon$ for all eventually $n\in\N$. Thus $A_n\to M$, so $M\in\mc{B}$ as desired.

Conversely, take $M\in\mc{B}$, so for all $n>0$ there is some $A_n\in\mc{A}$ such that $\mu\l(A_n\symdiff M\r)=d\l(A_n,M\r)<1/3n$. For each $n>0$, we have a cover $\l\{A_{n,m}\r\}_m\subseteq\mc{A}$ of $A_n\symdiff M$ such that $\sum_m\mu\l(A_{n,m}\r)\leq\mu\l(A_n\symdiff M\r)+1/3n<2/3n$. Set $B\coloneqq\bigcup_n\l(A_n\comp\bigcup_mA_{n,m}\r)\in\gen{\mc{A}}_\sigma$ and $Z\coloneqq M\comp B$. Then $B\subseteq M$, so $M=B\cup Z$. A computation shows that $\mu_0^\ast\!\l(Z\r)<1/n$ for all $n>0$, so $\mu_0^\ast\l(Z\r)=0$. We claim that $Z$ is $\mu$-null (this is <i>not</i> a tautology).
* Indeed, since $\mu_0^\ast\!\l(Z\r)=0$, for every $m>0$ there is some cover $Z\subseteq\bigcup_nB^m_n$ with each $B^m_n\in\mc{B}$ such that $\sum_n\mu\l(B^m_n\r)<1/m$. Set $\widehat{Z}\coloneqq\bigcap_{m>0}\bigcup_nB^m_n\in\mc{B}$, and note that $Z\subseteq\hat{Z}$. For every $m>0$, we have $\mu_0^\ast(\widehat{Z})\leq\mu^\ast\!\l(\bigcup_nB^m_n\r)\leq\sum_n\mu^\ast\!\l(B^m_n\r)<1/m$, so $\mu^\ast(\widehat{Z})=0$ as desired.

Finally, for any $M\in\Meas_\mu$ and $\epsilon>0$, let $A\in\mc{A}$ be such that $\mu\l(A\symdiff M\r)<\epsilon/3$ and take a cover $\l\{A_n\r\}_n\subseteq\mc{A}$ of $A\symdiff M$ with $\sum_n\mu\l(A_n\r)<\mu\l(A\symdiff M\r)+\epsilon/3<2\epsilon/3$; such a cover exists by definition of the outer measure. Observe that $\l\{A\r\}\cup\l\{A_n\r\}_n\subseteq\mc{A}$ is a cover of $M$; set $U\coloneqq A\cup\bigcup_nA_n$ and a computation gives $\mu\l(U\comp M\r)<\epsilon$.<span style="float:right;">$\blacksquare$</span>
