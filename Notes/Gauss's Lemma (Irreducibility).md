---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 23:44:19
Tags: #Type/Theorem #Topic/Ring_Theory #Courses/MATH457

Proved by: [[Gauss's Lemma (Primitivity)]], [[Basic properties of divisibility and associates]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Gauss’s Lemma for Irreducibility of Polynomial Rings).

Let $R$ be a UFD and let $F$ be the field of fractions of $R$. For all non-trivial $f\in R\l[x\r]$, $f$ is irreducible in $R\l[x\r]$ iff $f$ is primitive in $R\l[x\r]$ and irreducible in $F\l[x\r]$.

```

<b>Remark.</b> If $f$ is monic, then $f$ is irreducible in $R\l[x\r]$ iff it is irreducible in $F\l[x\r]$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The converse is easy, for if $f=gh$ with $g,h\in R\l[x\r]$, then $g,h\in F\l[x\r]$ and so one of $g,h\in F\l[x\r]^\times=F^\times$. W.l.o.g., assume that $g\in F^\times$. But $g\in R\l[x\r]$, so this forces $g\in R$. Observe then that
$$\begin{equation}
    R=\cont\l(f\r)=\cont\l(gh\r)=g\cont\l(h\r)=\sring{g},
\end{equation}$$
so $g\in R^\times$.

For the main direction, let $f$ be irreducible in $R\l[x\r]$ and write $f=\gamma f'$ for some primitive $f'\in R\l[x\r]$ where $\sring{\gamma}=\cont\l(f\r)$. Note that $f'$ is non-constant, so $f'\not\in R^\times$. But since $f$ is irreducible in $R\l[x\r]$, this forces $\gamma\in R^\times$. Observe then that $\cont\l(f\r)=\sring{\gamma}=R$, so $f$ is primitive. To show that $f$ is irreducible in $F\l[x\r]$, suppose that $f=gh$ for some $g,h\in F\l[x\r]$.
* Note that any non-zero $p\in F\l[x\r]$ can be written as $p=\alpha p'$ for some primitive $p'\in R\l[x\r]$ and $\alpha\in F^\times$: First, let $a\in R\comp\l\{0\r\}$ be the product of all the denominators of the coefficients of $g$. Then $ap\in R\l[x\r]$, so $ap=bp'$ for some primitive $p'\in R\l[x\r]$ where $\sring{b}=\cont\l(ap\r)$. Set $\alpha\coloneqq b/a\in F^\times$ to obtain $p=\alpha p'$.

Thus we may write $f=\alpha\beta g'h'$ for some $\alpha,\beta\in F^\times$ and $g',h'\in R\l[x\r]$ primitive. Letting $\frac{a}{b}\coloneqq\alpha$ and $\frac{c}{d}\coloneqq\beta$, we have that $bdf=acg'h'$ and thus
$$\begin{equation}
    \sring{bd}=bd\cont\l(f\r)=\cont\l(bdf\r)=\cont\l(acg'h'\r)=ac\cont\l(g'h'\r)=ac\cont\l(g'\r)\cont\l(h'\r)=\sring{ac}
\end{equation}$$
by Gauss’s Lemma for Primitivity. Then $bd\sim ac$, so there exists some $u\in R^\times$ such that $ac=ubd$. Then $f=ug'h'$, and since $f$ is irreducible in $R\l[x\r]$, one of $g',h'\in R^\times\subseteq F^\times$.<span style="float:right;">$\blacksquare$</span>
