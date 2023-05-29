<div class="topSpace"></div>

Date Created: 30/04/2022 12:00:55
Tags: #Type/Theorem #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: [[Unique Representation Theorem (Direct Sum)]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Unique Representation Theorem).

Let $K$ be a field and consider an indexed subset $\mc{B}\coloneqq\l\{b_i\r\}_{i\in I}\!\subseteq V$ of a $K$-vector space $V$. Then $\mc{B}$ is a (algebraic) basis for $V$ iff every vector $v\in V$ can be uniquely represented as a linear combination of vectors in $\mc{B}$; formally, iff
$$\begin{equation}
    \fa v\in V,\ex!\l\{\alpha_i\r\}_{i\in I}\!\subseteq K:v=\sum\limits_{i\in I}\alpha_ib_i.
\end{equation}$$
where $\alpha_i=0$ for all but finitely-many $i\in I$.

```

<b>Remark.</b> Using direct sums, we may rephrase the above by saying that $\mc{B}$ is a basis for $V$ iff $V=\bigoplus_{i\in I}\span\l\{b_i\r\}$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* ($\Rightarrow$): Take $v\in V$. Since $\span\mc{B}=V$, we know that $v$ can be expressed as a linear combination of vectors in $\mc{B}$; we wish to prove that such a representation is unique. Assume, for sake of contradiction, that
$$\begin{equation}
    v=\sum\limits_{i\in I}\alpha_ib_i=\sum\limits_{i\in I}\beta_ib_i
\end{equation}$$
for some distinct $\l\{\alpha_i\r\},\l\{\beta_i\r\}\subseteq K$ where $\alpha_i=0$ and $\beta_j=0$ for all but finitely-many $i,j\in I$. Let $I'\coloneqq\l\{i\in I\mid\alpha_i=\beta_i=0\r\}$ and observe that $\alpha_i-\beta_i=0-0=0$ for all $i\in I'$; since $\l|I\setminus I'\r|<\infty$, we see that $\alpha_i-\beta_i=0$ for all but finitely-many $i\in I$. Thus we may rearrange the sum into
$$\begin{equation}
    0=\sum\limits_{i\in I}\l(\alpha_i-\beta_i\r)b_i,
\end{equation}$$
which, by linear independence of $\mc{B}$, forces $\alpha_i=\beta_i$ for all $i\in I$. The result follows.

* ($\Leftarrow$): Since every $v\in V$ can be written as a linear combination of vectors in $\mc{B}$ (uniquely or not), we see that $v\in\span\mc{B}$ and so $\mc{B}$ is a spanning set of $V$. To prove linear independence, observe that we can write the zero vector as
$$\begin{equation}
    0=\sum\limits_{i\in I}0b_i,
\end{equation}$$
so if $\sum_{i\in I}\alpha_ib_i=0$ for any $\l\{\alpha_i\r\}\subseteq K$, uniqueness of the representation of $0$ forces each $\alpha_i=0$.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> We may rephrase the equivalent statement by letting $n\in\N$ be the unique number of basis elements whose coefficients are non-zero (it is finite as $\alpha_i=0$ for all but finitely-many $i\in I$). Thus it may be rewritten as
$$\begin{equation}
    \fa v\in V,\ex!n\in\N,\ex!\alpha_1,\dots,\alpha_n\in K\setminus\l\{0\r\}:v=\sum_{i=1}^n\alpha_ib_i.
\end{equation}$$
Note that the zero vector is uniquely represented by choosing $n=0$, so the sum is trivial. An important special case is if $\mc{B}=\tpl{b_1,\dots,b_n}$ for some $n\in\N$; then $\mc{B}$ is a (algebraic) basis for $V$ iff
$$\begin{equation}
    \fa v\in V,\ex!\alpha_1,\dots,\alpha_n\in K:v=\sum\limits_{i=1}^n\alpha_ib_i.
\end{equation}$$
Here, the number of terms $n$ is fixed, so we may allow some coefficients to be zero.<span style="float:right;">$\blacklozenge$</span>
