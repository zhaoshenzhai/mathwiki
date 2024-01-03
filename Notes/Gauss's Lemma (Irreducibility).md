---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 23:44:19
References: #Ref/Alu09
Tags: #Type/Theorem #Topic/Rings_and_Modules/Ring_Theory

Proved by: [[Divisibility via field of fractions]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Gauss’s Lemma for Irreducibility of Polynomial Rings).

Let $f\in R\l[x\r]$ be a non-constant polynomial in a UFD $R$ and set $k\coloneqq\Frac R$. Then $f$ is irreducible in $R\l[x\r]$ iff $f$ is primitive in $R\l[x\r]$ and irreducible in $k\l[x\r]$.

```

<b>Remark.</b> If $f$ is monic, then irreducibility in $R\l[x\r]$ and $k\l[x\r]$ is the same.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The converse is easy, for if $f=gh$ with $g,h\in R\l[x\r]$, then $g,h\in k\l[x\r]$ and so one of $g,h\in k\l[x\r]^\times=k^\times$. Assume w.l.o.g. that $g\in k^\times$, so $g\in R\l[x\r]$ forces $g\in R$. Observe then that $R=\cont\l(f\r)=\cont\l(gh\r)=g\cont\l(h\r)$, so $g\in R^\times$.

For the main direction, note that irreducible polynomials are primitive, for otherwise we can factor out its content. Write $f=gh$ for some $g,h\in k\l[x\r]$ and write $g=ag'$ and $h=bh'$ for some primitive polynomials $g',h'\in R\l[x\r]$ and $a,b\in k^\times$. Then $g'h'$ is also primitive, and since $f\sim g'h'$ in $k\l[x\r]$, we see that $f\sim g'h'$ in $R\l[x\r]$. Thus $f=ug'h'$ for some unit $u\in R^\times$, and since $f$ is irreducible in $R\l[x\r]$, we see that one of $g',h'\in R^\times\subseteq k^\times$.<span style="float:right;">$\blacksquare$</span>
