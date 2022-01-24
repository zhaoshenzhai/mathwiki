<br />
<br />

Date Created: 15/01/2022 21:15:56
Tags: #Axiom #Open

Constructions: [[ZFC]], [[Union]]
Generalizations: _Not Applicable_

Types: _Not Applicable_
Examples: _Not Applicable_
Properties: _Not Applicable_

!!! ad-Definition Definition.

Consider the first-order logic with a set of non-logical symbols $\mc{L}=\l\{\in\r\}$. The **Axiom of Union** is the $\mc{L}$-formula
$$\begin{equation}
    \fa u\ex z\fa v\fa x\l[\l(x\in v\land v\in u\r)\Rightarrow x\in z\r].
\end{equation}$$

--- admonition

**Remark.** This axiom does not directly define the $\textrm{`}$union$\textrm{'}$ $\bigcup u$ of $u$. Rather, it asserts the existence of some superset of the union, from which the union is then constructed from the Axiom Schema of Specification.<span style="float:right;">$\blacklozenge$</span>
