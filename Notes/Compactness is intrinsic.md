<div class="topSpace"></div>

Date Created: 20/01/2023 12:29:01
Tags: #Type/Proposition #Topic/Topology

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a topological space and let $Y\subseteq X$ be a subspace. For all $K\subseteq Y$, $K$ is compact relative to $X$ iff it is compact relative to $Y$.

```

<b>Remark.</b> This shows that compactness of $K$ is an ‘intrinsic notion’; it does not depend on the ambient space of $K$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* ($\Rightarrow$) Let $\l\{V_\alpha\r\}_{\alpha\in\mc{A}}$ be a cover of $K$ open in $Y$. Then, for all $\alpha\in\mc{A}$, there exists $U_\alpha$ open in $X$ such that $V_\alpha=Y\cap U_\alpha$. But $K\subseteq Y$, so $\l\{U_\alpha\r\}$ is an cover of $K$ open in $X$. Compactness of $K$ in $X$ then furnishes indices $\alpha_1,\dots,\alpha_n$ such that $K\subseteq\bigcup_{i=1}^nU_{\alpha_i}$, but this implies that
$$\begin{equation}
    K=Y\cap K=Y\cap\bigcup_{i=1}^{n}U_{\alpha_i}=\bigcup_{i=1}^{n}Y\cap U_{\alpha_i}=\bigcup_{i=1}^{n}V_{\alpha_i},
\end{equation}$$
so $K$ is compact in $Y$.

* ($\Leftarrow$): Let $\l\{U_\alpha\r\}_{\alpha\in\mc{A}}$ be a cover of $K$ open in $X$. For all $\alpha\in\mc{A}$, let $V_\alpha\coloneqq Y\cap U_\alpha$, so $\l\{V_\alpha\r\}$ is a cover of $K$ open in $Y$. Compactness of $K$ in $Y$ then furnishes indices $\alpha_1,\dots,\alpha_n$ such that
$$\begin{equation}
    K\subseteq\bigcup_{i=1}^{n}V_{\alpha_i}=\bigcup_{i=1}^{n}Y\cap U_{\alpha_i}=Y\cap\bigcup_{i=1}^{n}U_{\alpha_i}\subseteq\bigcup_{i=1}^{n}U_{\alpha_i},
\end{equation}$$
so $K$ is compact in $X$.<span style="float:right;">$\blacksquare$</span>
