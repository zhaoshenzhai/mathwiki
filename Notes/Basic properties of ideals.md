<div class="topSpace"></div>

Date Created: 04/06/2023 03:17:00
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\mf{a}$ and $\mf{b}$ be ideals in a ring $R$. With the operations $\mf{a}+\mf{b}\coloneqq\l\{a+b\in R\mid a\in\mf{a},b\in\mf{b}\r\}$ and $\mf{a}\mf{b}\coloneqq\l\{a_1b_1+\cdots+a_nb_n\in R\mid a_i\in\mf{a},b_i\in\mf{b}\r\}$, the set of ideals in $R$ becomes both and additive and a multiplicative monoid that distributes on both sides.
* Furthermore, we have $\mf{a}\mf{b}\subseteq\mf{a}\cap\mf{b}$, where equality holds if $R$ is commutative and $\mf{a}$ is coprime with $\mf{b}$.

```

<b>Remark.</b> Note that ideals need note have additive inverses, so the set of ideals of $R$ do <i>not</i> form a ring.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Clearly if $\mf{a}$ and $\mf{b}$ are left (resp. right, two-sided) ideals of $R$, then so are $\mf{a}+\mf{b}$ and $\mf{a}\mf{b}$. We argue associativity as follows.
* Take $\l(a+b\r)+c\in\l(\mf{a}+\mf{b}\r)+\mf{c}$, which clearly coincides with $a+\l(b+c\r)\in\mf{a}+\l(\mf{b}+\mf{c}\r)$. The converse is similar, so addition is associative.
* Take $\sum_j\!\big(\sum_ia_ib_i\big)_{\!j}\,c_j\in\l(\mf{a}\mf{b}\r)\mf{c}$, which can be written of the form $\sum_ka_k'b_k'c_k'$. Conversely, every product of the form $a_k'b_k'c_k'$ is in $\l(\mf{a}\mf{b}\r)\mf{c}$, and so are their sums, so $\l(\mf{a}\mf{b}\r)\mf{c}=\mf{a}\mf{b}\mf{c}$. A similar argument shows that $\mf{a}\mf{b}\mf{c}=\mf{}\l(\mf{b}\mf{c}\r)$, so we are done.

Note that $\mf{a}+\gen{0}=\mf{a}=\gen{0}+\mf{a}$ and $\mf{a}\gen{1}=\mf{a}=\gen{1}\mf{a}$ where $\gen{0}=\l\{0\r\}$ and $\gen{1}=R$, so ideals have a monoid structure. For distributivity, note that $\mf{a}\l(\mf{b}+\mf{c}\r)\subseteq\mf{a}\mf{b}+\mf{a}\mf{c}$ since $\sum a_i\l(b_i+c_i\r)=\sum a_ib_i+\sum a_ic_i$. Conversely, for all $\sum_{i\in I}a_ib_i+\sum_{j\in J}a_jc_j\in\mf{a}\mf{b}+\mf{a}\mf{c}$, let $K\coloneqq I\sqcup J$ and set $b_k,c_k\coloneqq0$ for all $k\in J$ and $k\in I$, respectively. Then
$$\begin{equation}
    \sum_{i\in I}a_ib_i+\sum_{j\in J}a_jc_j=\sum_{k\in K}a_k\l(b_k+c_k\r)\in\mf{a}\l(\mf{b}+\mf{c}\r),
\end{equation}$$
as desired.
* Now, take $\sum a_ib_i\in\mf{a}\mf{b}$. Since $\mf{a}$ is an ideal, we see that $a_ib_i\in\mf{a}$ and hence $\sum a_ib_i\in\mf{a}$. Similarly for $\mf{b}$, so $\mf{a}\mf{b}\subseteq\mf{a}\cap\mf{b}$. Suppose now that $R$ is commutative and that $\mf{a}+\mf{b}=R$, and take $r\in\mf{a}\cap\mf{b}$. Since $\mf{a}+\mf{b}=R$, there exist $a\in\mf{a}$ and $b\in\mf{b}$ such that $a+b=1$. Thus $r=r1=r\l(a+b\r)=ra+rb=ar+rb$, where, since $r\in\mf{b}$ and $r\in\mf{a}$, we see that $ar,rb\in\mf{a}\mf{b}$ and hence $r=ar+rb\in\mf{a}\mf{b}$.<span style="float:right;">$\blacksquare$</span>
