---
mathLink: $W$ Banach $\Rightarrow$ $\tpl{\BDD{\l(V,W\r)},\|\slot\|_\textrm{op}}$ Banach
---

<div class="topSpace"></div>

Date Created: 09/04/2023 15:16:35
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Cauchy implies bounded]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ and $W$ be normed vector spaces. If $W$ is Banach, then $\BDD{\l(V,W\r)}$, equipped with the operator norm $\|\slot\|_\textrm{op}$, is Banach.

```

<i>Proof.</i> Fix $\epsilon>0$ and let $\tpl{T_n}$ be a Cauchy sequence in $\BDD{\l(V,W\r)}$, so $\|T_n-T_m\|_\textrm{op}<\epsilon$ for all eventually $n,m\in\N$. Since
$$\begin{equation}
    \|T_n-T_m\|_\textrm{op}=\sup\limits_{\|v\|=1}\|T_nv-T_mv\|,
\end{equation}$$
we see that if $\|v\|=1$, then the sequence $\tpl{T_nv}$ is Cauchy in $W$. In general, for all non-zero $v\in V$, the sequence $\tpl{T_n\l(v/\|v\|\r)}$ is Cauchy in $W$ and hence
$$\begin{equation}
    \|T_nv-T_mv\|=\|v\|\l\|T_n\!\l(\frac{v}{\|v\|}\r)-T_m\!\l(\frac{v}{\|v\|}\r)\r\|<\|v\|\epsilon,
\end{equation}$$
showing that $\tpl{T_nv}$ is Cauchy. Since $W$ is Banach, this sequence converges to some $Tv\in W$. It remains to show that $T:V\to W$ is a bounded linear map and that $\|T_n-T\|_\textrm{op}<\epsilon$ for all eventually $n\in\N$.
* The fact that $T$ is linear is clear, for since $T_n\!\l(\alpha v_1+v_2\r)=\alpha T_nv_1+T_nv_2$ for all $n\in\N$, taking the limit yields the desired result. To see that $T$ is bounded, note that $\tpl{T_n}$ is Cauchy in $\BDD{\l(V,W\r)}$ and so it is bounded. Thus there is some $M>0$ such that $\|T_n\|_\textrm{op}<M$ for all $n\in\N$. Observe then that
$$\begin{equation}
    \|Tv\|\leq\|Tv-T_nv\|+\|T_nv\|\leq\|Tv-T_nv\|+\|T_n\|_\textrm{op}\|v\|<\|Tv-T_nv\|+M\|v\|,
\end{equation}$$
so taking the limit $n\to\infty$ gives us $\|Tv\|\leq M\|v\|$.

Finally, it suffices to show that there exists $N\in\N$ such that for each $v\in V$ and for all $n\geq N$, we have $\|T_nv-Tv\|\leq3\epsilon\|v\|/4$, for then taking the supremum over all $v\in V$ gives the desired result. But this is clear, since for all $v\in V$, we have $T_mv\to Tv$ as $m\to\infty$ and hence $\|T_{m_v}v-Tv\|\leq\epsilon\|v\|/4$ for some large enough $m_v\in\N$. Observe then that
$$\begin{equation}
    \|T_nv-Tv\|\leq\|T_nv-T_{m_v}v\|+\|T_{m_v}v-T_v\|\leq\frac{\epsilon}{2}\|v\|+\frac{\epsilon}{4}\|v\|=\frac{3\epsilon}{4}\|v\|
\end{equation}$$
eventually, as desired.<span style="float:right;">$\blacksquare$</span>
