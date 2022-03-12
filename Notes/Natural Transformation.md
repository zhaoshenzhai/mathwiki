<br />
<br />

Date Created: 12/03/2022 12:53:12
Tags: #Definition #Closed

Types: [[Natural Isomorphism]]
Examples: [[Identity Natural Transformation]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$ and $\cat{D}$ be (locally-small) categories and fix two functors $\ms{F},\ms{G}:\cat{C}\to\cat{D}$. A **natural transformation from $\ms{F}$ to $\ms{G}$**, denoted as $\eta:\ms{F}\Rightarrow\ms{G}$ and drawn pictorially as_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-12_134415/image.svg", width=120></center>

_is a class function_
$$\begin{equation}
    \begin{aligned}
        \eta:\obj\l(\cat{C}\r)&\to\hom_\cat{D}\!\l(\ms{F}\l(X\r),\ms{G}\l(X\r)\r)\\
        X&\mapsto\eta_X\coloneqq\eta\l(X\r)
    \end{aligned}
\end{equation}$$
_such that for all morphisms $\alpha:X\to Y$ in $\cat{C}$, the diagrams_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-12_130843/image.svg", width=300></center>

_commute._

```

**Remark.** In other words, a natural transformation $\eta$ is given by an indexed family $\l\{\eta_X\r\}_{X\in\obj\l(\cat{C}\r)}$ where $\eta_X:\ms{F}\l(X\r)\to\ms{G}\l(X\r)$ are morphisms in $\cat{D}$, called the **component morphisms of $\eta$**.<span style="float:right;">$\blacklozenge$</span>
