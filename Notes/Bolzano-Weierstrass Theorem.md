<div class="topSpace"></div>

Date Created: 23/10/2022 20:52:38
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Nested Interval Theorem]], [[Squeezed Distance Lemma]]
References: [[Monotone Subsequence Theorem]], [[Monotone Convergence Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Bolzano-Weierstrass Theorem).

Every bounded sequence $\tpl{x_n}$ in $\R$ contains a convergent subsequence.

```

<b>Remark.</b> It follows then that for any $d\in\N^+$, every bounded sequence $\tpl{x_n}$ in $\R^d$ has a convergent subsequence.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> One can prove this directly by invoking the Monotone Subsequence and Convergence Theorems. Indeed, by the Monotone Subsequence Theorem, the sequence $\tpl{x_n}$ has a monotone subsequence $\tpl{x_{n_k}}$. But $\tpl{x_n}$ is bounded, so $\tpl{x_{n_k}}$ is bounded too and hence converges by the Monotone Convergence Theorem.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Since $\tpl{x_n}$ is bounded, there exist some $a,b\in\R$ with $a<b$ such that $\l\{x_n\in\R\st n\in\N\r\}\subseteq\l[a,b\r]\eqqcolon I_0$. Divide $I_0$ into two closed intervals $I_1^{\l(1\r)}$ and $I_1^{\l(2\r)}$ of equal lengths. Since $\l|I_0\r|=\infty$, it must be the case that at least one of $I_1^{\l(1\r)}$ and $I_1^{\l(2\r)}$ has cardinality $\infty$; if not, then $\l|I_0\r|=\l|I_1^{\l(1\r)}\cup I_2^{\l(2\r)}\r|<\infty$. Let $I_1$ denote either $I_1^{\l(1\r)}$ or $I_1^{\l(2\r)}$, whichever has cardinality $\infty$ (if both do, take $I_1\coloneqq I_1^{\l(1\r)}$). Continue this process by dividing $I_1$ into two closed intervals $I_2^{\l(1\r)}$ and $I_2^{\l(2\r)}$ of equal lengths and letting $I_2$ denote either $I_2^{\l(1\r)}$ or $I_2^{\l(2\r)}$, whichever has cardinality $\infty$. Thus we obtain a sequence of nested intervals
$$\begin{equation}
    I_0\supset I_1\supset I_2\supset\cdots,
\end{equation}$$
each of which is closed, nonempty, and has diameter
$$\begin{equation}
    \diam I_n=\frac{b-a}{2^n}\to0.
\end{equation}$$
Thus, by the Nested Interval Theorem, $\bigcap_{n\in\N}I_n=\l\{\alpha\r\}$ for some $\alpha\in\R$. It remains to find a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ that converges to $\alpha$. By Recursion, let $n_0\coloneqq0$ and let
$$\begin{equation}
    n_{k+1}\coloneqq\min\l\{n\in\N\comp\l\{n_0,\dots,n_k\r\}\st x_n\in I_{k+1}\r\},
\end{equation}$$
where the set is non-empty, and hence the minimum is defined, since $\ex^\infty n\in\N:x_n\in I_{k+1}$ by construction. Thus $n_0<n_1<\cdots$, so we obtain a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ such that $x_{n_k}\in I_k$ for all $k\in\N$. Finally, observe that $\lim\limits_{k\to\infty}x_{n_k}=\alpha$ since
$$\begin{equation}
    d\l(x_{n_k},\alpha\r)\leq\diam I_k=\frac{b-a}{2^k}\to0
\end{equation}$$
as $n\to\infty$.<span style="float:right;">$\blacksquare$</span>
