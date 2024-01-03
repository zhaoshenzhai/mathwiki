---
mathLink: Calculus on $\R$
mathLink-blocks:
    absolutely-continuous-function: Absolutely Continuous Function
    bounded-variation: Functions of Bounded Variation
    jordan-decomposition: Jordan Decomposition of $f\in\BV$
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:47:20
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Example #Topic/Real_Analysis
^absolutely-continuous-function

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>
^bounded-variation

Properties: [[Lebesgue Differentiation Theorem]], [[Bounded variation implies differentiable a.e.]], [[Hardy-Littlewood Maximal Theorem]], [[Mean Value Theorems]]
Sufficiencies: [[Vitali Covering Lemma]]
Equivalences: [[Borel Measures on the Real Line]]
Justifications: [[Absolute Continuity#^characterization-of-absolute-continuity]], [[Hahn Decomposition Theorem]], [[Regularity and Tightness]], [[Basic properties of measures#^monotone-convergence-of-sets]]

``` ad-Example
title: Example (Calculus on $\R$).

Consider $\R$ equipped with the Lebesgue measure $\lambda$ and let $f:\R\to\R$ be a function.
* $f$ is <b>differentiable</b> at $x\in\R$ if the limit $\lim_{h\to0}\l[f\l(x+h\r)-f\l(x\r)\r]/h$ exists, in which case we denote it by $f'\l(x\r)$.
* $f$ is of <b>bounded variation</b> if $T_f\!\l(\infty\r)<\infty$, where $T_f\!\l(x\r)\coloneqq\sup\l\{\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\st n\in\N,x_0<x_1<\cdots<x_n=x\r\}$ is the <b>total variation</b> of $f$ at $x$.
* $f$ is <b>absolutely-continuous</b> if for every $\epsilon>0$, there is some $\delta>0$ such that $\sum_i\l|f\l(b_i\r)-f\l(a_i\r)\r|<\epsilon$ whenever $\sum_i\l(b_i-a_i\r)<\delta$ for any $U\coloneqq\bigsqcup_i\l(a_i,b_i\r)$.

The Fundamental Theorem of Calculus states that $f$ is absolutely-continuous iff $f'\in L^1\!\l(\lambda\r)$ a.e. and $f\l(b\r)-f\l(a\r)=\int_a^bf'\d\lambda$ for all $a<b$, which occurs iff $f$ is a distribution of a (unique) finite Borel signed measure $\nu\abscont\lambda$.


```

<i>Proof (of the FTC).</i> If $f'\in L^1\!\l(\lambda\r)$ and $f\l(b\r)-f\l(a\r)=\int_a^bf'\d\lambda$ for all $a<b$, then the signed measure $\nu\l(B\r)\coloneqq\int_Bf'\d\lambda$ is as desired. Conversely, if $f$ is the distribution of such a signed measure $\nu\abscont\lambda$, then $f$ is absolutely-continuous, and hence $f\in\BV$, so $f'=\frac{\d\nu}{\d\lambda}$ a.e. and $\int_a^bf'\d\lambda=\int_a^b\frac{\d\nu}{\d\lambda}\d\lambda=\nu\l(a,b\r]=f\l(b\r)-f\l(a\r)$ for all $a<b$.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> The fundamental property of functions of bounded variation is that $T_f\pm f$ are both increasing, which gives us its <i>Jordan Decomposition</i> into increasing functions $f=\frac{1}{2}\l(T_f+f\r)-\frac{1}{2}\l(T_f-f\r)$. Indeed, for any $x<y$ and $\epsilon>0$, there is a partition $x_0<x_1<\cdots<x_n=x$ such that ^jordan-decomposition
$$\begin{equation}
    T_f\!\l(x\r)\pm f\l(x\r)<\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\pm f\l(x\r)+\epsilon\leq\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|+\l|f\l(x\r)-f\l(y\r)\r|\pm f\l(y\r)+\epsilon\leq T_f\!\l(y\r)\pm f\l(y\r)+\epsilon.
\end{equation}$$
This decomposition allows us to reduce many statements regarding functions of bounded variation into just that for monotone functions. Furthermore, for any right-continuous function $f$ of bounded variation, its variation $T_f$ is also right-continuous. Indeed, fix $x_0\in\R$ and $\epsilon>0$, and let $\delta_0$ witness right-continuity of $f$. There is a partition $x_0<x_1<\cdots<x_n=x_0+\delta_0$ such that $T_f\!\l(x_0+\delta_0\r)-T_f\!\l(x_0\r)\approx\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|$. Set $\delta\coloneqq\min\l\{\delta_0,x_1-x_0\r\}$, so for all $x\in\l(x_0,x_0+\delta\r)$, we have
$$\begin{equation}
    T_f\!\l(x_0+\delta_0\r)-T_f\!\l(x_0\r)\approx\l|f\l(x_1\r)-f\l(x_0\r)\r|+\sum_{0<i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\approx\l|f\l(x_1\r)-f\l(x\r)\r|+\sum_{0<i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\leq T_f\!\l(x_0+\delta_0\r)-T_f\!\l(x\r).\exqedin
\end{equation}$$

---

<b>Remark.</b> Every absolutely-continuous function is of bounded variation by refining an arbitrary partition to a $\delta$-fine partition witnessing absolute-continuity of $f$. In the case where $f$ is a distribution of a finite Borel signed measure $\nu$, we claim that $\nu\abscont\lambda$ iff $f$ is absolutely continuous. Indeed, the forward direction follows by taking $U\coloneqq\bigsqcup_i\l(a_i,b_i\r)$, so that for all $\epsilon>0$, the $\delta>0$ furnished by $\nu\abscont\lambda$ gives the desired result. Conversely, Let $B\in\mc{B}\l(\R\r)$ be $\lambda$-null and take $\epsilon>0$. Let $\delta>0$ witness absolute continuity for $f$ and let $\nu=\nu_+-\nu_-$ be its Hahn decomposition. By regularity of $\lambda$ and $\nu_\pm$, there are open sets $U_n\supseteq B$ such that $\lambda\l(U_n\r)<\delta$ for all $n$ and $\nu_\pm\!\l(U_n\r)\to\nu_\pm\!\l(B\r)$. Thus $\nu\l(U_n\r)\to\nu\l(B\r)$, so it suffices to show that $\nu\l(U_n\r)<\epsilon$ for all $n\in\N$. To this end, write $U_n=\bigsqcup_i\l(a_n^i,b_n^i\r)$, so $\lambda\l(U_n\r)=\sum_ib_n^i-a_n^i<\delta$ for each $n$. By absolute continuity of $f$, we see that $\sum_i|f\l(b_n^i\r)-f\l(a_n^i\r)|<\epsilon$ and hence
$$\begin{equation}
    \l|\nu\l(U_n\r)\r|=\l|\sum_i\nu\l(a_n^i,b_n^i\r)\r|\leq\sum_i\l|\nu\l(a_n^i,b_n^i\r)\r|=\sum_i\l|\lim_k\nu\l(a_n^i,b_n^i-\frac{1}{k}\r]\r|=\sum_i\l|f\l(b_n^i\r)-\lim_kf\l(a_n^i-1/k\r)\r|=\sum_i\l|f\l(b_n^i\r)-f\l(a_n^i\r)\r|<\epsilon.\exqedin
\end{equation}$$
