<div class="topSpace"></div>

Date Created: 07/11/2023 14:03:38
References:
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Chebyshev's Inequality#^L-1-implies-measure-convergence]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Borel-Cantelli Lemmas]], [[Pointwise-limits of measurable functions are measurable]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\mu}$ be a measure space and fix $\alpha\geq0$. For measurable functions $f,g:X\to\R$, set $\Delta_\alpha\!\l(f,g\r)\coloneqq\l\{x\in X\st\l|f\l(x\r)-g\l(x\r)\r|\geq\alpha\r\}$ and $\delta_\alpha\!\l(f,g\r)\coloneqq\mu\l(\Delta_\alpha\!\l(f,g\r)\r)$.
* We say that a sequence $f_n:X\to\R$ of measurable functions <b>converges in measure</b> to $f:X\to\R$, and write $f_n\to_\mu\!f$, if $\delta_\alpha\!\l(f_n,f\r)\to0$ for all $\alpha>0$. It is said to be <b>Cauchy in measure</b> if $\delta_\alpha\!\l(f_n,f_m\r)\to0$ as $n,m\to\infty$ for all $\alpha>0$.

```

<b>Remark.</b> For a fixed $\alpha>0$, the function $\delta_\alpha:X^\R\times X^\R\to\R$ <i>fails</i> the triangle-inequality. However, the family $\l\{\delta_\alpha\r\}$ satisfies a ‘quasi-triangle-inequality’, which states that $\delta_{\alpha+\beta}\!\l(f,h\r)\leq\delta_\alpha\!\l(f,g\r)+\delta_\beta\!\l(g,h\r)$, which follows from $\Delta_{\alpha+\beta}\!\l(f,h\r)\subseteq\Delta_\alpha\!\l(f,g\r)+\Delta_\beta\!\l(g,h\r)$. Indeed, for $x\in X$, if $\l|f\l(x\r)-h\l(x\r)\r|\geq\alpha+\beta$, then either $\l|f\l(x\r)-g\l(x\r)\r|\geq\alpha$ or $\l|g\l(x\r)-h\l(x\r)\r|\geq\beta$ by the triangle-inequality in $\R$. This quasi-triangle-inequality gives us many familiar properties that hold in metric spaces:
* (Uniqueness). If $f_n\to_\mu\!f$ and $f_n\to_\mu\!f'$, then $f=f'$ a.e. since $\delta_\alpha\!\l(f,f'\r)\leq\delta_{\alpha/2}\!\l(f,f_n\r)+\delta_{\alpha/2}\!\l(f_n,f'\r)\to0$ as $n\to\infty$ for all $\alpha>0$.
* ($\mu$-Convergent $\Rightarrow$ $\mu$-Cauchy). If $f_n\to_\mu\!f$, then $f_n$ is $\mu$-Cauchy since $\delta_\alpha\!\l(f_n,f_m\r)\leq\delta_{\alpha/2}\!\l(f_n,f\r)+\delta_{\alpha/2}\!\l(f,f_m\r)\to0$ as $n,m\to\infty$ for all $\alpha>0$.
* (Dragging friends along). If $f_n$ is $\mu$-Cauchy and $f_{n_k}\!\to_\mu\!f$, then $f_n\to_\mu\!f$ since $\delta_\alpha\!\l(f_k,f\r)\leq\delta_{\alpha/2}\!\l(f_k,f_{n_k}\r)+\delta_{\alpha/2}\!\l(f_{n_k},f\r)\to0$ as $k\to\infty$ for all $\alpha>0$.

In fact, $\mu$-convergence and $\mu$-Cauchy are equivalent, giving us a ‘completeness’ statement. Indeed, suppose that $f_n$ is $\mu$-Cauchy. Restricting to a subsequence, we may assume w.l.o.g. that $\delta_{2^{-n}}\!\l(f_n,f_{n+m}\r)<2^{-n}$; this can be done by defining a subsequence $f_{n_k}$ with this property inductively. Thus $\delta_{2^{-n}}\!\l(f_n,f_{n+1}\r)$ is summable, so Borel-Cantelli gives us that $\mu\l(\lim\sup_n\Delta_{2^{-n}}\!\l(f_n,f_{n+1}\r)\r)=0$. In other words, $\fa_{\mu}^\textrm{a.e.}x\in X$, there is some $N_x$ such that $x\not\in B_{N_x}\!\coloneqq\bigcup_{n\geq N_x}\Delta_{2^{-n}}\!\l(f_n,f_{n+1}\r)$. For such an $x$, note that $\l|f_{n+i}\!\l(x\r)-f_{n+i+1}\!\l(x\r)\r|<2^{-\l(n+i\r)}$ for all $i\in\N$, so the sequence $f_n\!\l(x\r)$ is Cauchy by applying the triangle-inequality on $\R$ since
$$\begin{equation}
    \l|f_n\!\l(x\r)-f_{n+m}\!\l(x\r)\r|\leq\sum_{i<m}\l|f_{n+i}\!\l(x\r)-f_{n+i+1}\!\l(x\r)\r|<\sum_{i<m}2^{-\l(n+i\r)}<2^{-n+1}
\end{equation}$$
for all $n\geq N_x$. Thus $f_n\!\l(x\r)$ converges to some $f\l(x\r)\in\R$ for a.e. $x\in X$, so the limit $f$ is measurable. We claim that $f_n\to_\mu\!f$, so fix $\alpha>0$ and choose $N\in\N$ so that $2^{-N+1}<\alpha$. Taking $m\to\infty$ in the above shows us that if $x\not\in B_N$, then $\l|f_n\!\l(x\r)-f\l(x\r)\r|\leq2^{-n+1}$ for all $n\geq N$. Thus $\Delta_\alpha\!\l(f_n,f\r)\subseteq\Delta_{2^{-n+1}}\!\l(f_n,f\r)\subseteq B_N$ for all $n\geq N$, so
$$\begin{equation}
    \delta_\alpha\!\l(f_n,f\r)\leq\mu\l(B_N\r)\leq\sum_{n\geq N}\mu\l(\Delta_{2^{-n}}\!\l(f_n,f_{n+1}\r)\r)=\sum_{n\geq N}\delta_{2^{-n}}\!\l(f_n,f_{n+1}\r)<\sum_{n\geq N}2^{-n}=2^{-N+1}\to0.\exqedin
\end{equation}$$
