---
mathLink: Calculus in $\R$
mathLink-blocks:
    absolutely-continuous-function: Absolutely Continuous Function
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:47:20
Tags: #Type/Example #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Lebesgue Differentiation Theorem]], [[Fundamental Theorem of Calculus]], [[Hardy-Littlewood Maximal Theorem]], [[Mean Value Theorems]]
Sufficiencies: [[Vitali Covering Lemma]]
Equivalences: [[Borel Measures on the Real Line]]
Justifications: [[Real Numbers#^rationals-dense-in-reals]], [[Absolute Continuity#^characterization-of-absolute-continuity]]

``` ad-Example
title: Example (Calculus in $\R$).

Consider $\R$ equipped with the Lebesgue measure $\lambda$ and let $f:\R\to\R$ be a function.
* $f$ is <b>differentiable</b> at $x\in\R$ if the limit $\lim_{h\to0}\l[f\l(x+h\r)-f\l(x\r)\r]/h$ exists, in which case we denote it by $f'\l(x\r)$.
* $f$ is <b>absolutely-continuous</b> if for every $\epsilon>0$, there is some $\delta>0$ such that $\sum_n\l|f\l(b_n\r)-f\l(a_n\r)\r|<\epsilon$ whenever $\sum_n\l(b_n-a_n\r)<\delta$ for any $U\coloneqq\bigsqcup_n\l(a_n,b_n\r)$.
* $f$ is of <b>bounded variation</b> if $T_f\!\l(\infty\r)<\infty$, where $T_f\!\l(x\r)\coloneqq\sup\l\{\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\st n\in\N,x_0<x_1<\cdots<x_n=x\r\}$ is the <b>total variation</b> of $f$ at $x$.

The Fundamental Theorem of Calculus states that a $f$ is absolutely-continuous iff $f'\in L^1\!\l(\lambda\r)$ a.e. and $f\l(b\r)-f\l(a\r)=\int f'\d\lambda$ for all $a<b$.


```
^absolutely-continuous-function

<b>Remark.</b> The fundamental property of functions of bounded variation is that $T_f\pm f$ are both increasing, which gives us its <i>Jordan Decomposition</i> into increasing functions $f=\frac{1}{2}\l(T_f+f\r)-\frac{1}{2}\l(T_f-f\r)$. Indeed, for any $x<y$ and $\epsilon>0$, there is a partition $x_0<x_1<\cdots<x_n=x$ such that
$$\begin{equation}
    T_f\!\l(x\r)\pm f\l(x\r)<\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\pm f\l(x\r)+\epsilon\leq\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|+\l|f\l(x\r)-f\l(y\r)\r|\pm f\l(y\r)+\epsilon\leq T_f\!\l(y\r)\pm f\l(y\r)+\epsilon.
\end{equation}$$
This decomposition allows us to reduce many statements regarding functions of bounded variation into just monotone functions. Furthermore, for any right-continuous function $f$ of bounded variation, its variation $T_f$ is also right-continuous. Indeed, fix $x_0\in\R$ and $\epsilon>0$, and let $\delta_0$ witness right-continuity of $f$. There is a partition $x_0<x_1<\cdots<x_n=x_0+\delta_0$ such that $T_f\!\l(x_0+\delta_0\r)-T_f\!\l(x_0\r)\approx\sum_{i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|$. Set $\delta\coloneqq\min\l\{\delta_0,x_1-x_0\r\}$, so for all $x\in\l(x_0,x_0+\delta\r)$, we have
$$\begin{equation}
    T_f\!\l(x_0+\delta_0\r)-T_f\!\l(x_0\r)\approx\l|f\l(x_1\r)-f\l(x_0\r)\r|+\sum_{0<i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\approx\l|f\l(x_1\r)-f\l(x\r)\r|+\sum_{0<i<n}\l|f\l(x_{i+1}\r)-f\l(x_i\r)\r|\leq T_f\!\l(x_0+\delta_0\r)-T_f\!\l(x\r).\exqedin
\end{equation}$$

---

<b>Remark.</b> Any function $f:\R\to\R$ of bounded variation is continuous on a cocountable set, and $f'$ exists $\lambda$-a.e. In light of the Jordan Decomposition of $f$, it suffices to prove this for increasing functions.
* For the first claim, let $D$ be the set of discontinuities of $f$ and note that $x\in D$ iff $\bar{f}\l(x\r)\neq\uline{f}\l(x\r)$, where $\bar{f}\l(x\r)\coloneqq\lim_{t\to x^+}f\l(t\r)$ and $\uline{f}\l(x\r)\coloneqq\lim_{t\to x^-}f\l(t\r)$. Thus every $x\in D$ admits some $q_x\in\Q$ such that $\uline{f}\l(x\r)<q_x<\bar{f}\l(x\r)$, and since $D\into\Q$ via $x\mapsto q_x$, we see that $D$ is countable.

To show that $f'$ exists a.e., we note that $\bar{f}$ is an increasing right-continuous function and hence induces a (unique) locally-finite Borel measure $\mu$ on $\R$. For a fixed $x\in\R$, the families $\l\{\l(x,x+r\r]\r\}_{r>0}$ and $\l\{\l(x-r,x\r]\r\}_{r>0}$ both shrink-nicely to $x$, so for a.e. $x\in\R$, we have by the Lebesgue Differentiation Theorem that
$$\begin{equation}
    \lim_{r\to0^+}\frac{\bar{f}\l(x+r\r)-\bar{f}\l(x\r)}{r}=\lim_{r\to0^+}\frac{\mu\l(x,x+r\r]}{\lambda\l(x,x+r\r]}=\frac{\d\mu_\abscont}{\d\lambda}=\lim_{r\to0^+}\frac{\mu\l(x-r,x\r]}{\lambda\l(x-r,x\r]}=\lim_{r\to0^+}\frac{\bar{f}\l(x\r)-\bar{f}\l(x-r\r)}{r}.
\end{equation}$$
Thus $\bar{f}$ is differentiable a.e. and $\bar{f}\in L^1\!\l(\lambda\r)$. Set $h\coloneqq\bar{f}-f$
