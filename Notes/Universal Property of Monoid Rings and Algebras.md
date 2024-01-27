---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 15/07/2023 17:16:43
References: #Ref/Lan02 #Ref/Alu09
Tags: #Type/Theorem #Topic/Commutative_Algebra/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Monoid Rings/Algebras).

Let $M$ be a monoid, $R$ be a commutative ring, and $U:\catalg[R]\to\catmon$ be the forgetful functor. Then the following universal properties of $R\l[M\r]$ hold.
* For any $R$-algebra $A$ and any monoid homomorphism $\phi:M\to U\l(A\r)$, there is a unique $R$-algebra homomorphism $\sigma:R\l[M\r]\to A$ such that $\phi=U\l(\sigma\r)\circ\iota$, where $\iota:M\to U\l(R\l[M\r]\r)$ is the injection.
* For any commutative ring $R'$ and any ring homomorphism $\psi:R\to R'$, there is a unique ring homomorphism $\eta:R\l[M\r]\to R'\l[M\r]$ such that $\eta\circ\iota=\iota'\circ\psi$ and $\eta\l(x\r)=x$ for all $x\in M$, where $\iota$ and $\iota'$ are the injections of $R$ and $R'$ into their respective monoid rings $R\l[M\r]$ and $R'\l[M\r]$.
![[Images/2023-07-15_173638/image.svg|350]]

```

<b>Remark.</b> In the context of polynomial rings, the homomorphisms $\sigma$ and $\eta$ are called the <b>evaluation</b> and <b>reduction homomorphisms</b>.
* Indeed, $\sigma$ maps the ‘polynomial’ $\sum_{x\in M}\alpha_xx$ to $\sum_{x\in M}\alpha_x\phi\l(x\r)$, which is an element in $A$. In particular, if $R\l[M\r]=R\l[x_1,\dots,x_n\r]$, then the homomorphism $\phi:M\to U\l(A\r)$ is determined by where it maps $x_i$, for $1\leq i\leq n$. Set $a_i\coloneqq\phi\l(x_i\r)\in A$ and let $v:\l\{1,\dots,n\r\}\to N$ be any function with finite-support. Then
$$\begin{equation}
    f\coloneqq\sum c_{v_1,\dots,v_n}x_1^{v_1}\cdots x_n^{v_n}\overset{\sigma}{\mapsto}\sum c_{v_1,\dots,v_n}\phi\l(x_1\r)^{v_1}\cdots\phi\l(x_n\r)^{v_n}=\sum c_{v_1,\dots,v_n}a_1^{v_1}\cdots a_n^{v_n},
\end{equation}$$
so $\sigma$ ‘evaluates’ $f$ by substituting $x_i$ with $a_i$. This, of course, specializes to univariate polynomials too. Note that instead of an $R$-algebra $A$, we may equivalently consider a ring $R'$ and a homomorphism $\psi:R\to R'$, which gives $R'$ an $R$-algebra structure by $r\cdot r'\coloneqq\psi\l(r\r)r'$.
* Similarly, $\eta$ maps the ‘polynomial’ $\sum_{x\in M}\alpha_xx$ in $R$ to $\sum_{x\in M}\psi\l(\alpha_x\r)x$, which is a ‘polynomial’ in $R'$.

Note that we may compose $\sigma$ and $\eta$ to obtain a unique ring homomorphism $R\l[M\r]\to R'\l[M\r]\to A$, which maps $\sum_{x\in M}\alpha_xx$ to $\sum_{x\in M}\psi\l(\alpha_x\r)\phi\l(x\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We verify each universal property.
* Uniqueness is clear since the conditions force $\sigma\l(\iota\l(x\r)\r)=\phi\l(x\r)$ and $\sigma\l(re\r)=r\sigma\l(\iota\l(e\r)\r)=r$ for all $x\in M$ and $r\in R$, where $e\in M$ is the identity. Linearity forces
$$\begin{equation}
    \sigma\l(\alpha\r)=\sigma\l(\sum_{x\in M}\alpha_xx\r)=\sum_{x\in M}\sigma\l(\alpha_xe\r)\sigma\l(\iota\l(x\r)\r)=\sum_{x\in M}\alpha_x\phi\l(x\r)
\end{equation}$$
for all $\alpha\in R\l[M\r]$, so it remains to show that $\sigma$ defined this way is an $R$-algebra homomorphism. Indeed, for all $\alpha,\beta\in R\l[M\r]$ and $r\in R$, we have
$$\begin{equation}
    \begin{gathered}
        \sigma\l(\alpha+\beta\r)=\sigma\l(\sum_{x\in M}\l(\alpha_x+\beta_x\r)x\r)=\sum_{x\in M}\l(\alpha_x+\beta_x\r)\phi\l(x\r)=\sum_{x\in M}\alpha_x\phi\l(x\r)+\sum_{x\in M}\beta_x\phi\l(x\r)=\sigma\l(\alpha\r)+\sigma\l(\beta\r) \\
        \sigma\l(\alpha\beta\r)=\sigma\l(\sum_{x,y\in M}\alpha_x\beta_yxy\r)=\sum_{x,y\in M}\alpha_x\beta_y\phi\l(xy\r)=\sum_{x,y\in M}\alpha_x\phi\l(x\r)\beta_y\phi\l(y\r)=\l(\sum_{x\in M}\alpha_x\phi\l(x\r)\r)\l(\sum_{y\in M}\beta_y\phi\l(y\r)\r)=\sigma\l(\alpha\r)\sigma\l(\beta\r) \\
        \sigma\l(r\alpha\r)=\sigma\l(\sum_{x\in M}\l(r\alpha_x\r)x\r)=\sum_{x\in M}\l(r\alpha_x\r)\phi\l(x\r)=r\sum_{x\in M}\alpha_x\phi\l(x\r)=r\sigma\l(\alpha\r).
    \end{gathered}
\end{equation}$$
Thus $\sigma$ is an $R$-algebra homomorphism, as desired.
* Similarly, uniqueness of $\eta$ is clear since $\eta\l(\iota\l(r\r)\r)=\iota'\l(\psi\l(r\r)\r)$ for all $r\in R$. Linearity forces
$$\begin{equation}
    \eta\l(\alpha\r)=\eta\l(\sum_{x\in M}\alpha_xx\r)=\sum_{x\in M}\eta\l(\alpha_x\r)\eta\l(x\r)=\sum_{x\in M}\psi\l(\alpha_x\r)x
\end{equation}$$
for all $\alpha\in R\l[M\r]$, so it remains to show that $\eta$ defined this way is a ring homomorphism. Indeed, for all $\alpha,\beta\in R\l[M\r]$, we have
$$\begin{equation}
    \begin{gathered}
        \eta\l(1e\r)=\psi\l(1\r)e=1e \\
        \eta\l(\alpha+\beta\r)=\eta\l(\sum_{x\in M}\l(\alpha_x+\beta_x\r)x\r)=\sum_{x\in M}\psi\l(\alpha_x+\beta_x\r)x=\sum_{x\in M}\psi\l(\alpha_x\r)x+\sum_{x\in M}\psi\l(\beta_x\r)x=\eta\l(\alpha\r)+\eta\l(\beta\r) \\
        \eta\l(\alpha\beta\r)=\eta\l(\sum_{x,y\in M}\alpha_x\beta_yxy\r)=\sum_{x,y\in M}\psi\l(\alpha_x\beta_y\r)xy=\sum_{x,y\in M}\psi\l(\alpha_x\r)x\psi\l(\beta_y\r)y=\l(\sum_{x\in M}\alpha_x\psi\l(x\r)\r)\l(\sum_{y\in M}\beta_y\psi\l(y\r)\r)=\eta\l(\alpha\r)\eta\l(\beta\r).
    \end{gathered}
\end{equation}$$
Thus $\eta$ is a ring homomorphism, as desired.<span style="float:right;">$\blacksquare$</span>
