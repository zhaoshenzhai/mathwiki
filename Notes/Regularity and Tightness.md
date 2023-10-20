<div class="topSpace"></div>

Date Created: 18/10/2023 22:54:23
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Metric Space#^closed-G-delta-open-F-sigma]], [[Measure Space#^monotone-convergence-of-sets]], [[Separable Space#^separability-is-hereditary]], [[Characterizations of compactness (metric space)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Regularity/Tightness).

Let $X$ be a metric space equipped with a finite Borel measure $\mu$. Then, for every $\mu$-measurable set $A\subseteq X$, we have
$$\begin{equation}
    \mu\l(A\r)=\inf\l\{\mu\l(U\r)\st U\supseteq A\textrm{ \it{open}}\r\}=\sup\l\{\mu\l(C\r)\st C\subseteq A\textrm{ \it{closed}}\r\}\cref{\ast}
\end{equation}$$
In particular, a set $A\subseteq X$ is $\mu$-measurable iff $A$ is $\mu$-almost a $G_\delta$ set containing $A$, which occurs iff $A$ is $\mu$-almost an $F_\sigma$ set contained in $A$.
* Furthermore, if $\tpl{X,d}$ is Polish, then $\mu\l(A\r)=\sup\l\{\mu\l(K\r)\st K\subseteq A\textrm{ \it{compact}}\r\}$.

```

<b>Remark.</b> The two equalities in $\ref{\ast}$ are respectively called <i>outer regularity</i> and <i>inner regularity</i>. Since $\mu$ is finite, they also imply <i>strong-regularity</i>, i.e.
$$\begin{equation}
    0=\inf\l\{\mu\l(U\comp A\r)\st U\supseteq A\textrm{ open}\r\}=\l\{\mu\l(A\comp C\r)\st C\subseteq A\textrm{ closed}\r\}.
\end{equation}$$
Regularity result does <i>not</i> extend to arbitrary $\sigma$-finite measures. However, in the case that we can write $X=\bigcup_nU_n$ where $U_n\subseteq X$ are <i>open</i> sets of finite measure, then $\mu$ is strongly-regular. Indeed, let $A\subseteq X$ be $\mu$-measurable. Since $\mu\l(U_n\r)$ is finite, strong-regularity of $\l.\mu\r|_{U_n}$ furnishes some open set $V_n$ in $U_n$ $-$ and hence in $X$ too $-$ such that $V_n\supseteq A\cap U_n$ and $\mu\l(V_n\comp\l(A\cap U_n\r)\r)\leq\epsilon/2^{n+1}$. Observe then that $\mu\l(\bigcup_nV_n\comp A\r)=\mu\l(\bigcup_nV_n\comp\bigcup_n\l(A\cap U_n\r)\r)\leq\sum_n\mu\l(V_n\comp\l(A\cap U_n\r)\r)\leq\sum_n\epsilon/2^{n+1}=\epsilon$. For outer strong-regularity, let $U\subseteq X$ be an open set such that $\mu\l(U\comp A^c\r)<\epsilon$. But $U\comp A^c=A\comp U^c$ with $U^c$ closed, so $\mu\l(A\comp U^c\r)<\epsilon$ as desired.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Assuming regularity, we show that $A$ can be approximated by a $G_\delta$ set. Indeed, let $U_n\supseteq A$ be open sets such that $\mu\l(U_n\comp A\r)\leq1/n$. Then $D\coloneqq\bigcap_{n\geq1}U_n$ is a $G_\delta$ set containing $A$ with $\mu\l(D\comp A\r)\leq\mu\l(U_n\comp A\r)\leq1/n$ for all $n\geq1$, so $\mu\l(D\comp A\r)=0$. Similarly, let $F_n\subseteq A$ be closed sets such that $\mu\l(A\comp F_n\r)\leq1/n$. Then $E\coloneqq\bigcup_{n\geq1}F_n$ is an $F_\sigma$ set contained in $A$ with $\mu\l(A\comp E\r)\leq\mu\l(A\comp F_n\r)\leq1/n$ for all $n\geq1$, so $\mu\l(A\comp E\r)=0$.

For regularity, let $\mc{C}$ be the collection of all $\mu$-measurable sets satisfying $\ref{\ast}$. We show that $\mc{C}$ is a $\sigma$-algebra containing all open sets, so $\mc{B}\l(X\r)\subseteq\mc{C}$.
* Open sets trivially satisfy outer regularity. For inner regularity, note that every open set is $F_\sigma$, so $U=\bigcup_nF_n$ with $F_n$ closed. Replacing $C_n$ with $\bigcup_{i\leq n}C_i$, we may w.l.o.g. assume that $C_n$ is increasing, so $\mu\l(U\r)=\mu\l(\bigcup_nC_n\r)=\sup_n\mu\l(C_n\r)$ as desired.
* Take $A\in\mc{C}$ and $\epsilon>0$. Let $U\supseteq A$ be open and $F\subseteq A$ be closed such that $\mu\l(F\r)\approx_\epsilon\mu\l(A\r)\approx_\epsilon\mu\l(U\r)$. Note that $F^c\supseteq A^c$ is open and $U^c\subseteq A^c$ is closed. Since $\mu$ is <i>finite</i>, we see that $\mu\l(U^c\r)=\mu\l(X\r)-\mu\l(U\r)\approx_\epsilon\mu\l(X\r)-\mu\l(A\r)=\mu\l(A^c\r)$, and similarly that $\mu\l(F^c\r)\approx_\epsilon\mu\l(A^c\r)$. Thus $A^c\in\mc{C}$, as desired.
* That $\mc{C}$ is closed under finite unions is clear. For countable unions, take a sequence $A_n\in\mc{C}$ and fix $\epsilon>0$. Since $\mc{C}$ is closed under finite unions, we may replace $A_n$ with $\bigcup_{i\leq n}A_n$ and w.l.o.g. assume that $A_n$ are increasing. For each $n$, let $F_n\subseteq A_n\subseteq U_n$ be closed/open sets with $\mu\l(F_n\r)\approx_{\epsilon/2^{n+2}}\mu\l(A_n\r)\approx_{\epsilon/2^{n+1}}\mu\l(U_n\r)$. Observe then that $\mu\l(\bigcup_nU_n\comp\bigcup_nA_n\r)=\mu\l(\bigcup_n\l(U_n\comp A_n\r)\r)\leq\sum_n\mu\l(U_n\comp A_n\r)<\epsilon$, as desired. For closed sets, there is some $N$ large enough so that $\mu\l(\bigcup_nA_n\r)\approx_{\epsilon/2}\mu\l(A_N\r)$. Then $\mu\l(C_N\r)\approx_{\epsilon/2^{N+2}}\approx\mu\l(A_N\r)\approx_{\epsilon/2}\mu\l(\bigcup_nA_n\r)$, as desired.

Finally, we show that $\mc{C}$ contains all $\mu$-measurable sets. Indeed, for $A\in\Meas_\mu$, write $A=B_0\cup Z_0=B_1\comp Z_1$ for some $B_i\in\mc{B}\l(X\r)$ and some $\mu$-null $Z_i$. For a fixed $\epsilon>0$, there is a closed set $F\subseteq B_0\subseteq A$ and an open set $U\supseteq B_1\supseteq A$ such that $\mu\l(F\r)\approx_\epsilon\mu\l(B_0\r)=\mu\l(A\r)=\mu\l(B_1\r)\approx_\epsilon\mu\l(U\r)$, as desired.

Suppose now that $\tpl{X,d}$ is a Polish space. By regularity, we may w.l.o.g. assume that $A$ is closed. Thus the subspace $\tpl{A,d}$ is still Polish, so we may further assume w.l.o.g. that $A=X$. Fix $n\geq1$. Since $X$ is separable, there is a sequence $\tpl{B_{n,m}}_m$ of closed balls with radii $\leq1/n$ such that $X=\bigcup_mB_{n,m}$. Note that the sequence $\bigcup_{m\leq M}B_{n,m}$ in $M$ increases to $X$, so by monotone convergence there is a large enough $M_n$ such that $\mu\l(X\comp\bigcup_{m\leq M_n}B_{n,m}\r)\leq\epsilon/2^{n+1}$. Observe that $F_n\coloneqq\bigcup_{m\leq M_n}B_{n,m}$ is closed and admits a cover of sets with radii $\leq1/n$. Set $K\coloneqq\bigcap_nF_n$, which is closed and totally-bounded, hence compact, and observe that
$$\begin{equation}
    \mu\l(X\comp K\r)\leq\mu\l(\bigcup_nF_n^c\r)\leq\sum_n\mu\l(F_n^c\r)\leq\sum_n\frac{\epsilon}{2^{n+1}}=\epsilon.\qedin
\end{equation}$$
