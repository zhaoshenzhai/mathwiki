---
title: Group of Units
date: 2024-08-29T10:32:29-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Elements in a {{< link file="ring" display="ring" type="references" >}} may not be invertible; that is, there may exist $r\in R$ such that $rs\neq1$ or $sr\neq1$ for all $s\in R$ (see {{< link file="ring" display="here" type="references" section="Arithmetic in Rings" >}} for details). Thus, it is useful to group together the elements that are invertible, which in fact forms a {{< link file="group" display="group" type="references" >}} under multiplication.

{{< env type="definition" >}}

The *group of units* of a ring $R$ is the set $R^\times\coloneqq\l\\{u\in R\st(\ex r\in R)ur=1=ru\r\\}$ equipped with multiplication.

{{< /env >}}

{{< env type="proof" hide="false" name="$R^\times$ is a group" >}}

If $u,u'\in R^\times$, then $u'r'=ur=1=ru=r'u'$ for some $r,r'\in R$. Then we have
$$\begin{equation}
    (uu')(r'r)=u(u'r')r=ur=1=r'u'=r'(ru)u'=(r'r)(uu'),
\end{equation}$$
so $R^\times$ is closed under multiplication. The unit $1\in R$ is the identity since $1\cdot1=1$, and $\cdot$ is clearly associative.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

**Remark.** Note that if $R=\End G$ for some {{< link file="abelian_group" display="abelian group" type="references" >}} $G$, then $R^\times=\Aut G$.

<div class="space"></div>

## Functorially of $(\slot)^\times$

Every ring homomorphism $f:R\to S$ induces a group homomorphism $f^\times:R^\times\to S^\times$, since $f$ maps units to units. Indeed, if $u\in R$ is a unit, say $ur=1=ru$ for some $r\in R$, then $f(u)f(r)=f(ur)=f(1)=1$ etc, and so $f(u)\in S$ is a unit too. This gives us a functor $(\slot)^\times:\catring\to\catgrp$.

<br>

&emsp;&emsp;<span style="color:red">TODO (mention adjoint and group ring).</span>
