---
mathLink: $R$ UFD $\Rightarrow$ $R\l[x\r]$ UFD
---

<div class="topSpace"></div>

Date Created: 22/01/2023 23:34:37
Tags: #Theorem #Topics/Ring_Theory #Courses/MATH457

Proved by: [[Gauss's Lemma (Irreducibility)]], [[Polynomial ring over fields is a EUD]], [[EUD implies PID]], [[PID implies UFD]], [[Irreducible implies prime (UFD)]], [[Basic properties of divisibility and associates]], [[Associate primitive polynomials in fraction field are associate]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $R$ be a UFD. Then $R\l[x\r]$ is also a UFD._

```

_Proof_. Let $f\in R\l[x\r]\comp R^\times$ be non-zero. For existence, we induct on $n\coloneqq\deg f$.
* If $n=0$, then $f\in R$ and hence can be factored into irreducibles $p_1,\dots,p_k\in R$. But then $p_1,\dots,p_k$ are irreducible in $R\l[x\r]$, so we are done.

Assume now that $n>0$ and write $f=\alpha f'$ for some primitive $f'\in R\l[x\r]$ and some $\alpha\in R$. If $f'$ is irreducible in $R\l[x\r]$, we are done. Otherwise, $f'=gh$ for some $g,h\not\in R\l[x\r]^\times=R^\times$. Note that $f'$ is primitive, so both $g,h\not\in R$ lest $\cont\l(f\r)=\cont\l(gh\r)=g\cont\l(h\r)\neq R$. Thus $\deg g,\deg h<n$, so the result follows from induction.

For uniqueness, suppose that $f=p_1\cdots p_n=q_1\cdots q_m$ for $p_i,q_j$ irreducible in $R\l[x\r]$.
* If $f\in R$, then every $p_i,q_j\in R$ and we are done since $R$ is a UFD.

Otherwise, w.l.o.g. assume that $p_n\not\in R$, Then, by Gauss$\textrm{'}$s Lemma for Irreducibility, we see that $p_n$ is irreducible over $F\l[x\r]$ where $F$ is the field of fractions of $R$. But $F\l[x\r]$ is a UFD, so $p_n$ is prime and hence $p_n\divides\l(q_1\cdots q_m\r)$ implies that $p_n\divides q_j$ for some $j$. W.l.o.g., assume that $p_n\divides q_m$, so $q_m=\alpha p_n$ for some $\alpha\in F\l[x\r]$. Then $q_m\in R\l[x\r]$ is also non-trivial, so it is similarly irreducible in $F\l[x\r]$. The factorization $q_m=\alpha p_n$ then forces $\alpha\in F\l[x\r]^\times$, so $p_n\sim q_m$ in $F\l[x\r]$. But then $p_n\sim q_m$ in $R\l[x\r]$, so $q_m=up_n$ for some $u\in R\l[x\r]^\times$. We may now cancel to obtain $p_1\cdots p_{n-1}=uq_1\cdots q_{m-1}$, so induction forces $n-1=m-1$ and the provides the existence of some $\sigma\in S_{n-1}$ such that $p_1\sim q_{\sigma\l(i\r)}$ in $R\l[x\r]$ for all $i$.<span style="float:right;">$\blacksquare$</span>
