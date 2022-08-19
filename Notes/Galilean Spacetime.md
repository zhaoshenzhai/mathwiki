<div class="topSpace"></div>

Date Created: 19/08/2022 14:33:05
Tags: #Definition #Later/Classical_Mechanics

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Galilean Transformation]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_A **Galilean spacetime** is a quintuple $\tpl{A^4,\R^4,\Delta,t,\bilform{\slot}{\slot}}$ consisting of_
* _a $4$-dimensional affine space $\tpl{A^4,\R^4,\Delta}$ over $\R$,_
* _a non-zero linear map $t:\R^4\to\R$, and_
* _an inner product $\bilform{\slot}{\slot}:\ker t\times\ker t\to\R$._

```

**Remark.** We interpret the structures above as follows:
* The affine space $\tpl{A^4,\R^4,\Delta}$ is the **universe**, with every $a\in A^4$ being **events** and every $a+\v{d}\coloneqq\Delta\l(a,\v{d}\r)$ being the event **displaced from $a$ by $\v{d}$**.

* The linear map $t:\R^4\to\R$ is **time**, and for all events $a,b\in A^4$, the **time interval between $a$ and $b$** is $\tau_{ab}\coloneqq t\l(b-a\r)$.
    * Note that $\tau_{ab}$ is well defined since $\Delta$ is a transitive free action. Hence for all $a,b\in A^4$, there exists a unique $\v{d}\in\R^4$ such that $b=a+\v{d}$; we then define $b-a\coloneqq\v{d}$.

    * Two events $a,b\in A^4$ are said to be **simultaneous** if $\tau_{ab}=0$, and the **space of events simultaneous to $a$** is the affine subspace$$\begin{equation}
        \begin{aligned}
            A^3_a&\coloneqq a+\ker t \\
            &=\l\{b\in A^4\mid\ex\v{d}\in\ker t:a=b+\v{d}\r\}.
        \end{aligned}
    \end{equation}$$
    of $A^4$. Note that all such $b\in A^4$ are simultaneous with $a$ since $\tau_{ab}=t\l(b-a\r)=t\l(\v{d}\r)=0$, hence the name.
* For all simultaneous events $a,b\in A^4$, the **spatial distance between $a$ and $b$** is $d_3\!\l(a,b\r)\coloneqq\l\|b-a\r\|\coloneqq\sqrt{\bilform{a-b}{a-b}}$.<span style="float:right;">$\blacklozenge$</span>
