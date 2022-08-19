---
mathLink: Galilean Structure/Space(time)
---

<div class="topSpace"></div>

Date Created: 19/08/2022 14:33:05
Tags: #Definition #Later/Classical_Mechanics

Types: _Not Applicable_
Examples: [[Galilean Coordinate Space]]
Constructions: [[Galilean Transformation]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a vector space over $\R$ and $\tpl{A,V,\Delta}$ be an affine space for $V$. A **Galilean structure over $\tpl{A,V,\Delta}$** is a pair $\tpl{t,\bilform{\slot}{\slot}}$ consisting of_
* _a non-zero surjective linear map $t:V\to\R$ and_
* _an inner product $\bilform{\slot}{\slot}:\ker t\times\ker t\to\R$._

_The quintuple $\tpl{A,V,\Delta,t,\bilform{\slot}{\slot}}$ is called a **Galilean space(time)**._

```

**Remark.** We interpret the structures above as follows:
* The affine space $\tpl{A,V,\Delta}$ is the **universe**, with every $a\in A$ being **events** and every $a+d\coloneqq\Delta\l(a,d\r)$ being the event **displaced from $a$ by $d$**.

* The linear map $t:V\to\R$ is **time**, and, for all events $a,b\in A$, the **time interval between $a$ and $b$** is $\tau_{ab}\coloneqq t\l(b-a\r)$.
    * Note that $\tau_{ab}$ is well defined since $\Delta$ is a transitive free action. Hence for all $a,b\in A$, there exists a unique $d\in V$ such that $b=a+d$; we then define $b-a\coloneqq d$.

    * Two events $a,b\in A$ are said to be **simultaneous** if $\tau_{ab}=0$, and the **space of events simultaneous to $a$** is the affine subspace$$\begin{equation}
        \begin{aligned}
            A_a&\coloneqq a+\ker t \\
            &=\l\{b\in A\mid\ex d\in\ker t:a=b+d\r\}.
        \end{aligned}
    \end{equation}$$
    of $A$. Note that all such $b\in A$ are simultaneous with $a$ since $\tau_{ab}=t\l(b-a\r)=t\l(d\r)=0$, hence the name.
* For all simultaneous events $a,b\in A$, the **spatial distance between $a$ and $b$** is $d_\textrm{spatial}\!\l(a,b\r)\coloneqq\l\|b-a\r\|\coloneqq\sqrt{\bilform{a-b}{a-b}}$.<span style="float:right;">$\blacklozenge$</span>
