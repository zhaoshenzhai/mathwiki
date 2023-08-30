<div class="topSpace"></div>

Date Created: 12/03/2022 12:53:12
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: [[Natural Isomorphism]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$ and $\cat{D}$ be categories and fix two functors $\ms{F},\ms{G}:\cat{C}\to\cat{D}$. A <b>natural transformation from $\ms{F}$ to $\ms{G}$</b> is a class function
$$\begin{equation}
    \begin{aligned}
        \eta:\Obj\l(\cat{C}\r)&\to\Mor\l(\cat{D}\r)\\
        X&\mapsto\eta_X:\ms{F}\l(X\r)\to\ms{G}\l(X\r)
    \end{aligned}
\end{equation}$$
such that for all morphisms $\alpha:X\to Y$ in $\cat{C}$, the diagrams
![[Images/2022-03-12_130843/image.svg|300]]commute.

```

<b>Remark.</b> A natural transformation $\eta$ from $\ms{F}$ to $\ms{G}$ can be represented pictorially as
![[Images/2022-03-12_134415/image.svg|120]]or simply $\eta:\ms{F}\Rightarrow\ms{G}$ if the categories are understood.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> In other words, a natural transformation $\eta$ is given by an indexed family $\l\{\eta_X\r\}_{X\in\Obj\l(\cat{C}\r)}$ where $\eta_X:\ms{F}\l(X\r)\to\ms{G}\l(X\r)$ are morphisms in $\cat{D}$, called the <b>component morphisms of $\eta$</b>.<span style="float:right;">$\blacklozenge$</span>
